import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalid);
  }, []);
  return (
    <div className="timer">
      <h3>Current Time:</h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
