import type { CharacterCounterProps, TextStats } from "../../types";
import React, { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatDisplay } from "../StatsDisplay/StatsDisplay";

const WORDS_PER_MINUTE = 200;

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = Infinity,
  targetReadingTime,
}) => {
  const [text, setText] = useState("");

  const calculateStats = (value: string): TextStats => {
    const characterCount = value.length;
    const words = value.trim() === "" ? [] : value.trim().split(/\s+/);
    const wordCount = words.length;
    const readingTime = wordCount / WORDS_PER_MINUTE;

    return { characterCount, wordCount, readingTime };
  };

  const stats = calculateStats(text);

  const wordProgress =
    maxWords !== Infinity
      ? Math.min((stats.wordCount / maxWords) * 100, 100)
      : 0;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <TextInput onTextChange={setText} />

      <StatDisplay stats={stats} showReadingTime />

      {(minWords > 0 || maxWords !== Infinity) && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Min: {minWords} | Max: {maxWords === Infinity ? "∞" : maxWords}
          </p>

          {maxWords !== Infinity && (
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${wordProgress}%` }}
              />
            </div>
          )}
        </div>
      )}

      {targetReadingTime && (
        <p className="mt-2 text-sm text-gray-500">
          Target reading time: {targetReadingTime} min
        </p>
      )}
    </div>
  );
};
