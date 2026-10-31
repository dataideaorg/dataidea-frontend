'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { getBackendUrl, createAuthFetchOptions } from '../lib/auth';

interface LeaderboardEntry {
  id: number;
  userId?: number;
  userName: string;
  userEmail?: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  createdAt: string;
}

interface LeaderboardData {
  leaderboard: LeaderboardEntry[];
  userScore?: LeaderboardEntry;
  userRank?: number;
}

export const ChristmasLeaderboard: React.FC = () => {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeaderboard();
  }, [user]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = new URL(`${getBackendUrl()}/games/christmas/leaderboard/`);
      if (user?.id) {
        url.searchParams.append('user_id', user.id.toString());
      }
      url.searchParams.append('limit', '10');

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Leaderboard response error:', response.status, errorText);
        throw new Error(`Failed to fetch leaderboard: ${response.status}`);
      }

      const data: LeaderboardData = await response.json();
      console.log('Leaderboard data:', data);
      
      // Ensure leaderboard is always an array
      if (data && (!data.leaderboard || !Array.isArray(data.leaderboard))) {
        setLeaderboard({ leaderboard: [], userScore: data.userScore, userRank: data.userRank });
      } else {
        setLeaderboard(data);
      }
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
      setError('Failed to load leaderboard. Please try again later.');
      setLeaderboard({ leaderboard: [] });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getRankEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}.`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 mb-4">{error}</p>
        <button
          onClick={fetchLeaderboard}
          className="px-4 py-2 bg-panel border border-line text-bright rounded-lg hover:bg-hover transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!leaderboard || leaderboard.leaderboard.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-support text-lg">No scores yet. Be the first to play!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* User's Score Card */}
      {leaderboard.userScore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-yellow-500/20 to-green-500/20 border-2 border-yellow-400 rounded-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-bright mb-1">Your Score</h3>
              <p className="text-support">
                {leaderboard.userScore.userName} • {leaderboard.userScore.score}/
                {leaderboard.userScore.totalQuestions} ({leaderboard.userScore.percentage}%)
              </p>
            </div>
            {leaderboard.userRank && (
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">
                  #{leaderboard.userRank}
                </div>
                <div className="text-sm text-support">Rank</div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Leaderboard */}
      <div className="bg-panel rounded-lg border border-line overflow-hidden">
        <div className="bg-hover px-6 py-4 border-b border-line">
          <h3 className="text-xl font-bold text-bright">Top Scores</h3>
        </div>
        <div className="divide-y divide-line">
          {leaderboard.leaderboard.map((entry, index) => {
            const isCurrentUser = user && entry.userId === user.id;
            const rank = index + 1;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-4 flex items-center justify-between ${
                  isCurrentUser ? 'bg-yellow-500/10' : 'hover:bg-hover'
                } transition-colors`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl font-bold text-bright w-12 text-center">
                    {getRankEmoji(rank)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-bright">
                        {entry.userName}
                      </span>
                      {isCurrentUser && (
                        <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">
                          You
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-mute">
                      {formatDate(entry.createdAt)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-bright">
                    {entry.score}/{entry.totalQuestions}
                  </div>
                  <div className="text-sm text-support">
                    {entry.percentage}%
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Refresh Button */}
      <div className="text-center">
        <button
          onClick={fetchLeaderboard}
          className="text-support hover:text-bright transition-colors text-sm"
        >
          ↻ Refresh Leaderboard
        </button>
      </div>
    </div>
  );
};

