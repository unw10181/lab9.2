import type { StatsDisplayProps } from "../../types";
import React from "react";

export const StatDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const minutes = Math.floor(stats.readingTime);
  const seconds = Math.round((stats.readingTime - minutes) * 60);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-sm text-gray-500">Characters</p>
        <p className="text-2xl font-semibold">{stats.characterCount}</p>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-sm text-gray-500">Words</p>
        <p className="text-2xl font-semibold">{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div className="p-4 bg-gray-100 rounded-lg text-center col-span-2 md:col-span-1">
          <p className="text-sm text-gray-500">Reading Time</p>
          <p className="text-2xl font-semibold">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
};
