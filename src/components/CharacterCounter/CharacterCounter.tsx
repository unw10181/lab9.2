import type { CharacterCounterProps, TextStats } from "../../types";
import React, { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = Infinity,
  targetReadingTime,
}) => {
  return <div className=""></div>;
};
