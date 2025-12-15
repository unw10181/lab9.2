import type { TextInputProps } from "../../types";
import React from "react";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start Typing...",
  initialValue = "",
}) => {
  return (
    <div className="">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};
