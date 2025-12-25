'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface ChristmasQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showResult: boolean;
  questionNumber: number;
  totalQuestions: number;
}

export const ChristmasQuestion: React.FC<ChristmasQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showResult,
  questionNumber,
  totalQuestions,
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#bbb] text-sm font-medium">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-[#bbb] text-sm font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#222] rounded-lg p-8 mb-6 border border-[#333]"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          {question.question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ';

            if (showResult) {
              if (isCorrectAnswer) {
                buttonClass += 'bg-green-500/20 border-green-500 text-green-300';
              } else if (isSelected && !isCorrectAnswer) {
                buttonClass += 'bg-red-500/20 border-red-500 text-red-300';
              } else {
                buttonClass += 'bg-[#2a2a2a] border-[#444] text-[#bbb]';
              }
            } else {
              if (isSelected) {
                buttonClass += 'bg-[#2a2a2a] border-yellow-400 text-white';
              } else {
                buttonClass += 'bg-[#2a2a2a] border-[#444] text-[#bbb] hover:border-[#666] hover:text-white';
              }
            }

            return (
              <motion.button
                key={index}
                onClick={() => !showResult && onAnswerSelect(index)}
                disabled={showResult}
                className={buttonClass}
                whileHover={!showResult ? { scale: 1.02 } : {}}
                whileTap={!showResult ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && isCorrectAnswer && (
                    <span className="text-2xl">✓</span>
                  )}
                  {showResult && isSelected && !isCorrectAnswer && (
                    <span className="text-2xl">✗</span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

