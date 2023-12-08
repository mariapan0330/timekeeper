import React, { useState, useEffect } from "react";

export default function BigTime() {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const resetTimer = () => {
    setHours("0");
    setMinutes("0");
    setSeconds("0");
    setTimeInSeconds(0);
  };

  useEffect(() => {
    let h = Math.floor((timeInSeconds / 60 / 60) % 60);
    let m = Math.floor((timeInSeconds / 60) % 60);
    let s = timeInSeconds % 60;
    setHours(h < 10 ? h.toString().padStart(2, "0") : h);
    setMinutes(m < 10 ? m.toString().padStart(2, "0") : m);
    setSeconds(s < 10 ? s.toString().padStart(2, "0") : s);
  }, [hours, minutes, seconds, timeInSeconds, isRunning]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeInSeconds((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-orange-200">
      {/* main btns and time */}
      <div className="flex justify-center items-center w-1/3">
        {/* col 1: up arrow, hours, down arrow */}
        <div className="flex flex-col">
          <img
            src={require("../images/up.png")}
            className="w-10 self-center"
            onClick={() => setTimeInSeconds((t) => t + 3600)}
          />
          <div className="text-8xl font-bold py-4">{hours}</div>
          <img
            src={require("../images/up.png")}
            className="w-10 self-center rotate-180"
            onClick={() => setTimeInSeconds((t) => (t - 3600 > 0 ? t - 3600 : t))}
          />
        </div>

        {/* : */}
        <div className="text-8xl font-bold">:</div>

        {/* col 2: up arrow, minutes, down arrow */}
        <div className="flex flex-col">
          <img
            src={require("../images/up.png")}
            className="w-10 self-center"
            onClick={() => setTimeInSeconds((t) => t + 60)}
          />
          <div className="text-8xl font-bold py-4">{minutes}</div>
          <img
            src={require("../images/up.png")}
            className="w-10 self-center rotate-180"
            onClick={() => setTimeInSeconds((t) => (t - 60 > 0 ? t - 60 : t))}
          />
        </div>

        {/* : */}
        <div className="text-8xl font-bold">:</div>

        {/* col 3: up arrow, seconds, down arrow */}
        <div className="flex flex-col">
          <img
            src={require("../images/up.png")}
            className="w-10 self-center"
            onClick={() => setTimeInSeconds((t) => t + 1)}
          />
          <div className="text-8xl font-bold py-4">{seconds}</div>
          <img
            src={require("../images/up.png")}
            className="w-10 self-center rotate-180"
            onClick={() => setTimeInSeconds((t) => (t - 1 > 0 ? t - 1 : t))}
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
      <div className="pt-20 h-20" onClick={resetTimer}>
        <img
          src={require("../images/reset.png")}
          className="w-10 self-center hover:drop-shadow-xl active:w-8"
        />
      </div>
    </div>
  );
}
