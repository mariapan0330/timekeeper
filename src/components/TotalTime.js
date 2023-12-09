import React from "react";
import colors from "../colors";

export default function TotalTime({
  theme,
  lastActive,
  totalTime,
  setLastActive,
  resetTotalTime,
}) {
  return (
    <div
      className="p-10 mt-4 rounded-3xl"
      style={{
        backgroundColor: colors[theme]["totalTimeBg"],
        color: colors[theme]["totalTimeText"],
      }}
    >
      {/* total time */}
      <div className="flex-col">
        <p className="font-bold">Total Time since {lastActive}</p>
        <div className="flex justify-around">
          <p className="text-3xl self-center">
            {Math.floor((totalTime / 60 / 60) % 60)
              .toString()
              .padStart(2, "0")}
            :
            {Math.floor((totalTime / 60) % 60)
              .toString()
              .padStart(2, "0")}
            :
            {Math.floor(totalTime % 60)
              .toString()
              .padStart(2, "0")}
          </p>
          <i
            className="
            fa-rotate-left fa-solid
            text-2xl
            hover:cursor-pointer 
            hover:text-red-600 
            hover:text-3xl"
            onClick={() => {
              setLastActive();
              resetTotalTime();
            }}
          />
        </div>
      </div>
    </div>
  );
}
