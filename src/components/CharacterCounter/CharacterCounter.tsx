import type { CharacterCounterProps, TextStats } from "../../types";
import React, { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatDisplay } from "../StatsDisplay/StatsDisplay";

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
  return <div className=""></div>;
};
