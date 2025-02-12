import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [counter, setCounter] = useState(60); // Initial value for the counter (e.g., 60 seconds)

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear interval on component unmount
    }
  }, [counter]);

  return (
    <>
    
    <div className="text-center text-3xl font-bold text-gray-900 my-10">Hurry Up! Offer Ends In</div>
    <div className='w-full flex justify-around items-center'>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 9 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 5 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 12 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": counter }}></span>
        </span>
        sec
      </div>
    </div>
    </div>
    </>
  );
};

export default Timer;
