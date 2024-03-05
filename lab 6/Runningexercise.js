import React, { useState } from 'react';

function RunningExercise() {
  const [lapTimes, setLapTimes] = useState([]);
  const [timer, setTimer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  const startTimer = () => {
    setTimer(setInterval(() => {
      setCurrentTime(prevTime => prevTime + 1);
    }, 1000));
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const recordLap = () => {
    setLapTimes(prevLapTimes => [...prevLapTimes, currentTime]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      <div>
        <p>Time: {formatTime(currentTime)}</p>
        <button onClick={timer ? stopTimer : startTimer}>
          {timer ? 'Stop' : 'Start'}
        </button>
        <button onClick={recordLap} disabled={!timer}>
          Record Lap
        </button>
      </div>
      <div>
        <h3>Lap Times</h3>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>{formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;
