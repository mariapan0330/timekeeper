import React, { useState, useEffect } from "react";

export default function BigTime() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-orange-200">
      {/* main btns and time */}
      <div className="flex justify-center items-center w-1/3">
        {/* col 1: up arrow, hours, down arrow */}
        <div className="flex flex-col">
          <img src={require("../images/up.png")} className="w-10 self-center" />
          <div className="text-8xl font-bold py-4">{hours}</div>
          <img
            src={require("../images/up.png")}
            className="w-10 self-center rotate-180"
          />
        </div>

        {/* : */}
        <div className="text-8xl font-bold">:</div>

        {/* col 2: up arrow, minutes, down arrow */}
        <div className="flex flex-col">
          <img src={require("../images/up.png")} className="w-10 self-center" />
          <div className="text-8xl font-bold py-4">{minutes}</div>
          <img
            src={require("../images/up.png")}
            className="w-10 self-center rotate-180"
          />
        </div>

        {/* : */}
        <div className="text-8xl font-bold">:</div>

        {/* col 3: up arrow, seconds, down arrow */}
        <div className="flex flex-col">
          <img src={require("../images/up.png")} className="w-10 self-center" />
          <div className="text-8xl font-bold py-4">{seconds}</div>
          <img
            src={require("../images/up.png")}
            className="w-10 self-center rotate-180"
          />
        </div>
      </div>

      {/* play/pause */}
      <div className="pt-10 h-20" onClick={() => setIsRunning((prev) => !prev)}>
        <img
          src={isRunning ? require("../images/pause.png") : require("../images/play.png")}
          className="w-20 self-center hover:drop-shadow-xl active:w-16"
        />
        <p>{isRunning ? "Running..." : "Paused."}</p>
      </div>

      {/* reset */}
      <div></div>
    </div>
  );
}
