/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export const Timer = ({ duration, paused }: any) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (paused) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newProgress = 100 - (elapsed / duration) * 100;
      setProgress(Math.max(newProgress, 0));
    }, 100);

    return () => {
      console.log("jaosjf");
      clearInterval(interval);
    };
  }, [duration, paused]);

  // useEffect(() => {
  //   if (isReset) {
  //     setProgress(100);
  //   }
  // }, [isReset]);

  return (
    <div className="h-2 bg-gray-200 rounded mx-auto w-1/2 mb-8">
      <div
        className="h-full bg-red-500 rounded transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
