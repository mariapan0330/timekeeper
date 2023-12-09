import React, { useState } from "react";
import colors from "../colors";

export default function PlayPause({ theme, isRunning, setIsRunning, resetTimer }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="flex-col justify-center items-center">
      {/* play/pause */}
      <div
        className="pt-4 flex flex-col justify-center"
        onClick={() => setIsRunning((prev) => !prev)}
      >
        <i
          className={`
            fa-solid 
            ${isRunning ? "fa-pause" : "fa-play"}
            text-8xl 
            h-20 
            flex justify-center items-center self-center
            hover:text-cyan-800 
            hover:text-9xl
            hover:cursor-pointer 
            active:text-5xl 
            `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            color: isHovering ? colors[theme]["playBtnHover"] : colors[theme]["playBtn"],
          }}
        />
      </div>
      {/* reset */}
      <div className="h-16 pt-4" onClick={resetTimer}>
        <i
          className="
            fa-rotate-left fa-solid
            text-4xl 
            w-32 
            hover:cursor-pointer 
            hover:text-red-600 
            hover:text-5xl"
          style={{ color: colors[theme]["reset"] }}
        />
      </div>
    </div>
  );
}
