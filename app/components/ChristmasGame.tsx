'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChristmasQuestion, Question } from './ChristmasQuestion';
import { ChristmasLeaderboard } from './ChristmasLeaderboard';
import { useAuth } from '../context/AuthContext';
import { getBackendUrl, createAuthFetchOptions } from '../lib/auth';

// Christmas Trivia Questions
const CHRISTMAS_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'In which country did the tradition of decorating Christmas trees originate?',
    options: ['Germany', 'England', 'France', 'United States'],
    correctAnswer: 0,
    explanation: 'The tradition of decorating Christmas trees originated in Germany in the 16th century.',
  },
  {
    id: 2,
    question: 'What is the name of the reindeer with a red nose?',
    options: ['Dasher', 'Rudolph', 'Prancer', 'Comet'],
    correctAnswer: 1,
    explanation: 'Rudolph the Red-Nosed Reindeer was created by Robert L. May in 1939.',
  },
  {
    id: 3,
    question: 'How many gifts are given in total in the song "The Twelve Days of Christmas"?',
    options: ['78', '144', '364', '365'],
    correctAnswer: 2,
    explanation: 'The cumulative total of all gifts given over the 12 days is 364 gifts.',
  },
  {
    id: 4,
    question: 'What was the original color of Santa Claus\'s suit before Coca-Cola\'s advertising campaign?',
    options: ['Red', 'Green', 'Blue', 'Brown'],
    correctAnswer: 1,
    explanation: 'Before Coca-Cola\'s 1930s advertising, Santa was often depicted in green, blue, or other colors. Red became standard after the campaign.',
  },
  {
    id: 5,
    question: 'In which year was "A Christmas Carol" by Charles Dickens first published?',
    options: ['1843', '1853', '1863', '1873'],
    correctAnswer: 0,
    explanation: '"A Christmas Carol" was first published on December 19, 1843.',
  },
  {
    id: 6,
    question: 'What is the name of the Grinch\'s dog in "How the Grinch Stole Christmas"?',
    options: ['Max', 'Buddy', 'Rex', 'Charlie'],
    correctAnswer: 0,
    explanation: 'The Grinch\'s loyal dog is named Max.',
  },
  {
    id: 7,
    question: 'Which country is credited with creating the first Christmas card?',
    options: ['United States', 'Germany', 'England', 'France'],
    correctAnswer: 2,
    explanation: 'The first commercial Christmas card was created in England by Sir Henry Cole in 1843.',
  },
  {
    id: 8,
    question: 'What is the name of the ballet performed during Christmas season?',
    options: ['Swan Lake', 'The Nutcracker', 'Sleeping Beauty', 'Giselle'],
    correctAnswer: 1,
    explanation: '"The Nutcracker" by Tchaikovsky is the classic Christmas ballet.',
  },
  {
    id: 9,
    question: 'In the song "Jingle Bells", what is the one-horse open vehicle called?',
    options: ['Sleigh', 'Carriage', 'Sled', 'Cart'],
    correctAnswer: 0,
    explanation: 'The song mentions a "one-horse open sleigh".',
  },
  {
    id: 10,
    question: 'What does "Noel" mean in French?',
    options: ['Christmas', 'Snow', 'Gift', 'Joy'],
    correctAnswer: 0,
    explanation: '"Noel" is the French word for Christmas, derived from the Latin "natalis" meaning birth.',
  },
];

interface GameScore {
  id?: number;
  userId?: number;
  userName: string;
  userEmail?: string;
  gameType: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  createdAt?: string;
}

type GameState = 'start' | 'playing' | 'results' | 'leaderboard';

export const ChristmasGame: React.FC = () => {
  const { user } = useAuth();
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [anonymousName, setAnonymousName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  // Fetch questions from backend or use fallback
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `${getBackendUrl()}/games/christmas/questions/?count=10`,
          {
            ...createAuthFetchOptions('GET'),
            credentials: 'include',
          }
        );

        if (response.ok) {
          const backendQuestions = await response.json();
          if (backendQuestions && backendQuestions.length > 0) {
            // Use questions from backend
            setQuestions(backendQuestions);
            setSelectedAnswers(new Array(backendQuestions.length).fill(null));
            return;
          }
        }
      } catch (error) {
        console.error('Error fetching questions from backend:', error);
      }

      // Fallback to hardcoded questions
      const shuffled = [...CHRISTMAS_QUESTIONS].sort(() => Math.random() - 0.5);
      setQuestions(shuffled.slice(0, 10));
      setSelectedAnswers(new Array(10).fill(null));
    };

    fetchQuestions();
  }, []);

  const handleStartGame = () => {
    if (!user && !anonymousName.trim()) {
      setShowNameInput(true);
      return;
    }
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswers(new Array(questions.length).fill(null));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowResult(true);

    // Check if answer is correct
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      handleGameComplete();
    }
  };

  const handleGameComplete = async () => {
    const finalScore = score;
    const percentage = (finalScore / questions.length) * 100;

    // Submit score to backend
    try {
      const userName = user?.name || user?.email?.split('@')[0] || anonymousName || 'Anonymous';
      const userEmail = user?.email || undefined;

      const scoreData = {
        gameType: 'christmas_trivia',
        userName,
        userEmail,
        score: finalScore,
        totalQuestions: questions.length,
        percentage: Math.round(percentage * 100) / 100,
      };

      const response = await fetch(`${getBackendUrl()}/games/christmas/score/`, {
        ...createAuthFetchOptions('POST', scoreData),
        credentials: 'include',
      });

      if (!response.ok) {
        console.error('Failed to submit score');
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    }

    setGameState('results');
  };

  const handlePlayAgain = async () => {
    // Fetch fresh questions
    try {
      const response = await fetch(
        `${getBackendUrl()}/games/christmas/questions/?count=10`,
        {
          ...createAuthFetchOptions('GET'),
          credentials: 'include',
        }
      );

      if (response.ok) {
        const backendQuestions = await response.json();
        if (backendQuestions && backendQuestions.length > 0) {
          setQuestions(backendQuestions);
          setSelectedAnswers(new Array(backendQuestions.length).fill(null));
          setCurrentQuestionIndex(0);
          setScore(0);
          setShowResult(false);
          setGameState('playing');
          return;
        }
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }

    // Fallback to hardcoded questions
    const shuffled = [...CHRISTMAS_QUESTIONS].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
    setSelectedAnswers(new Array(10).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setGameState('playing');
  };

  const handleShare = async () => {
    const percentage = Math.round((score / questions.length) * 100);
    const shareText = `I scored ${score}/${questions.length} (${percentage}%) on the Christmas Trivia Quiz! 🎄\n\nPlay at: ${window.location.origin}/christmas-game`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Christmas Trivia Results',
          text: shareText,
        });
      } catch (error) {
        // User cancelled or error occurred
        copyToClipboard(shareText);
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Results copied to clipboard!');
    });
  };

  const currentQuestion = questions[currentQuestionIndex];
  const finalPercentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen py-12 px-4">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-green-500 to-yellow-400 bg-clip-text text-transparent">
                🎄 Christmas Trivia 🎄
              </h1>
              <p className="text-xl text-[#bbb] mb-8">
                Test your knowledge of Christmas traditions, history, and fun facts!
              </p>
              <p className="text-lg text-[#999] mb-12">
                {questions.length} questions • Good luck! 🎅
              </p>

              {showNameInput && !user && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={anonymousName}
                    onChange={(e) => setAnonymousName(e.target.value)}
                    className="w-full max-w-md mx-auto px-4 py-3 bg-[#222] border border-[#444] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-yellow-400"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && anonymousName.trim()) {
                        handleStartGame();
                      }
                    }}
                  />
                </motion.div>
              )}

              <motion.button
                onClick={handleStartGame}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 text-white font-bold text-lg rounded-lg hover:from-red-500 hover:to-green-500 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showNameInput && !user ? 'Start Game' : 'Start Playing'}
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {gameState === 'playing' && currentQuestion && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-4xl mx-auto"
          >
            <ChristmasQuestion
              question={currentQuestion}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
              showResult={showResult}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />

            {/* Explanation and Next Button Modal */}
            <AnimatePresence>
              {showResult && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleNextQuestion}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                  />
                  
                  {/* Modal - Mobile: slides up from bottom, Desktop: centered */}
                  <motion.div
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ 
                      type: 'spring', 
                      damping: 30, 
                      stiffness: 300 
                    }}
                    className="fixed left-0 right-0 bottom-0 md:left-auto md:right-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 md:max-w-lg md:mx-auto md:rounded-xl md:left-1/2 md:-translate-x-1/2"
                  >
                    <div className="bg-[#222] rounded-t-2xl md:rounded-xl p-4 sm:p-6 md:p-8 border-t-2 md:border-2 border-[#444] shadow-2xl max-h-[85vh] overflow-y-auto">
                      {/* Result Icon */}
                      <div className="text-center mb-3 sm:mb-4">
                        {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', delay: 0.2 }}
                            className="text-5xl sm:text-6xl mb-2"
                          >
                            ✅
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', delay: 0.2 }}
                            className="text-5xl sm:text-6xl mb-2"
                          >
                            ❌
                          </motion.div>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
                            ? 'Correct!'
                            : 'Incorrect'}
                        </h3>
                      </div>

                      {/* Explanation */}
                      {currentQuestion.explanation && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#2a2a2a] rounded-lg border border-[#444]"
                        >
                          <p className="text-[#bbb] text-xs sm:text-sm md:text-base leading-relaxed">
                            <span className="font-semibold text-white">Explanation: </span>
                            {currentQuestion.explanation}
                          </p>
                        </motion.div>
                      )}

                      {/* Next Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-center pb-2 sm:pb-0"
                      >
                        <button
                          onClick={handleNextQuestion}
                          className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all shadow-lg text-base sm:text-lg active:scale-95 touch-manipulation"
                        >
                          {currentQuestionIndex < questions.length - 1 ? 'Next Question →' : 'See Results →'}
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {gameState === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="text-8xl mb-6"
            >
              {finalPercentage >= 80 ? '🎉' : finalPercentage >= 60 ? '🎄' : '🎅'}
            </motion.div>

            <h2 className="text-4xl font-bold text-white mb-4">
              {finalPercentage >= 80
                ? 'Excellent!'
                : finalPercentage >= 60
                ? 'Great Job!'
                : finalPercentage >= 40
                ? 'Good Try!'
                : 'Keep Learning!'}
            </h2>

            <div className="bg-[#222] rounded-lg p-8 mb-8 border border-[#333]">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
                {score}/{questions.length}
              </div>
              <div className="text-3xl font-semibold text-[#bbb] mb-2">
                {finalPercentage}% Correct
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePlayAgain}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-green-600 text-white font-bold rounded-lg hover:from-red-500 hover:to-green-500 transition-all"
              >
                Play Again
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-3 bg-[#222] border border-[#444] text-white font-bold rounded-lg hover:bg-[#2a2a2a] transition-all"
              >
                Share Results
              </button>
              <button
                onClick={() => setGameState('leaderboard')}
                className="px-6 py-3 bg-[#222] border border-[#444] text-white font-bold rounded-lg hover:bg-[#2a2a2a] transition-all"
              >
                View Leaderboard
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'leaderboard' && (
          <motion.div
            key="leaderboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">🏆 Leaderboard</h2>
              <button
                onClick={() => setGameState('start')}
                className="text-[#bbb] hover:text-white transition-colors"
              >
                ← Back to Start
              </button>
            </div>
            <ChristmasLeaderboard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

