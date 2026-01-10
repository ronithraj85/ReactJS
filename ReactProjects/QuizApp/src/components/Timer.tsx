import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((timer) => {
        if (timer <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return timer - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="bg-black text-zinc-300">Timer-{timer}⌚</div>;
};

export default Timer;
