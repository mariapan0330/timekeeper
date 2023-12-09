import React, { useState, useEffect } from "react";
import PlayPause from "./PlayPause";
import colors from "../colors";
import TotalTime from "./TotalTime";

export default function BigTime({ theme }) {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [prevTime, setPrevTime] = useState(
    Number(window.localStorage.getItem("timeInSeconds"))
  );
  const [lastActive] = useState(window.localStorage.getItem("lastActive"));
  const arrowSettings = `
  text-6xl
  h-10
  hover:text-cyan-800 
  hover:cursor-pointer 
  active:text-5xl 
  active:text-cyan-600
  `;

  const resetTimer = () => {
    setTimeInSeconds(0);
  };

  const setLastActive = () => {
    const d = new Date();
    window.localStorage.setItem(
      "lastActive",
      d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear()
    );
  };

  const resetTotalTime = () => {
    window.localStorage.setItem("timeInSeconds", 0);
    setPrevTime(0);
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

  useEffect(() => {
    const currTime = prevTime + timeInSeconds;
    window.localStorage.setItem("timeInSeconds", currTime);
    setLastActive();
    setTotalTime(currTime);
  }, [timeInSeconds, prevTime]);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ backgroundColor: colors[theme]["bg"] }}
    >
      <div
        className="flex justify-center items-center p-10 rounded-3xl"
        style={{ backgroundColor: colors[theme]["timeCard"] }}
      >
        {/* main btns and time */}
        <div className="flex justify-center items-center w-1/3">
          {/* col 1: up arrow, hours, down arrow */}
          <div className="flex flex-col">
            <i
              className={`fa-solid fa-angle-up ${arrowSettings}`}
              onClick={() => setTimeInSeconds((t) => t + 3600)}
              style={{ color: colors[theme]["arrows"] }}
            />
            <div
              className="text-8xl font-bold py-4"
              style={{ color: colors[theme]["time"] }}
            >
              {hours}
            </div>
            <i
              className={`fa-solid fa-angle-down ${arrowSettings}`}
              onClick={() => setTimeInSeconds((t) => (t - 3600 > 0 ? t - 3600 : t))}
              style={{ color: colors[theme]["arrows"] }}
            />
          </div>

          {/* : */}
          <div
            className="text-8xl font-bold"
            style={{ color: colors[theme]["timeSecondary"] }}
          >
            :
          </div>

          {/* col 2: up arrow, minutes, down arrow */}
          <div className="flex flex-col">
            <i
              className={`fa-solid fa-angle-up ${arrowSettings}`}
              onClick={() => setTimeInSeconds((t) => t + 60)}
              style={{ color: colors[theme]["arrows"] }}
            />
            <div
              className="text-8xl font-bold py-4"
              style={{ color: colors[theme]["time"] }}
            >
              {minutes}
            </div>
            <i
              className={`fa-solid fa-angle-down ${arrowSettings}`}
              onClick={() => setTimeInSeconds((t) => (t - 60 > 0 ? t - 60 : t))}
              style={{ color: colors[theme]["arrows"] }}
            />
          </div>

          {/* : */}
          <div
            className="text-8xl font-bold"
            style={{ color: colors[theme]["timeSecondary"] }}
          >
            :
          </div>

          {/* col 3: up arrow, seconds, down arrow */}
          <div className="flex flex-col">
            <i
              className={`fa-solid fa-angle-up ${arrowSettings}`}
              onClick={() => setTimeInSeconds((t) => t + 1)}
              style={{ color: colors[theme]["arrows"] }}
            />
            <div
              className="text-8xl font-bold py-4"
              style={{ color: colors[theme]["time"] }}
            >
              {seconds}
            </div>
            <i
              className={`fa-solid fa-angle-down ${arrowSettings}`}
              onClick={() => setTimeInSeconds((t) => (t - 1 > 0 ? t - 1 : t))}
              style={{ color: colors[theme]["arrows"] }}
            />
          </div>
        </div>
      </div>

      <PlayPause
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        resetTimer={resetTimer}
        theme={theme}
      />
      <TotalTime
        lastActive={lastActive}
        totalTime={totalTime}
        setLastActive={setLastActive}
        resetTotalTime={resetTotalTime}
        theme={theme}
      />
    </div>
  );
}
