import React, { useState } from "react";
import colors from "../colors";

export default function PlayPause({ theme, isRunning, setIsRunning, resetTimer }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="flex justify-evenly items-center">
      {/* play/pause */}
      <div></div>
      <div
        className="pt-4 flex justify-center"
        onClick={() => setIsRunning((prev) => !prev)}
      >
        <i
          className={`
            fa-solid 
            ${isRunning ? "fa-pause" : "fa-play"}
            text-8xl 
            h-20 w-20
            flex justify-center items-center self-center
            hover:text-cyan-800 
            hover:text-9xl
            hover:cursor-pointer 
            active:text-8xl 
            `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            color: isHovering ? colors[theme]["playBtnHover"] : colors[theme]["playBtn"],
          }}
        />
      </div>
      {/* reset */}
      <div className="pt-4" onClick={resetTimer}>
        <i
          className="
            fa-rotate-left fa-solid
            text-4xl 
            h-10 w-10
            hover:cursor-pointer 
            hover:text-red-600 
            hover:text-5xl"
          style={{ color: colors[theme]["reset"] }}
        />
      </div>
    </div>
  );
}
