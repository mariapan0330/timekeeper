import React, { useState } from "react";
import colors from "../colors";

export default function ChooseTheme({ theme, setTheme }) {
  const [colorsList] = useState(["default", "nature", "space", "ocean", "moss", "candy"]);
  //   const colorsList = ["default", "ice cream"];
  return (
    <div
      className="flex-col h-screen justify-center items-center"
      style={{ backgroundColor: colors[theme]["bg"] }}
    >
      {colorsList.map((i) => (
        <div
          className={`px-4 p-2 hover:cursor-pointer font-bold mt-2 rounded-l-xl`}
          style={{
            color: colors[i]["time"],
            backgroundColor: colors[i]["bg"],
            borderRight: theme === i ? `3px solid ${colors[i]["totalTimeBg"]}` : null,
          }}
          onClick={() => setTheme(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
}
