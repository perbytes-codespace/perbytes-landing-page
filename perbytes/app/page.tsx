'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const countDownDate = new Date('January 30, 2024 23:59:59').getTime();
  const [distance, setDistance] = useState(countDownDate - new Date().getTime());
  const [prevDays, setPrevDays] = useState(0);
  const [prevHours, setPrevHours] = useState(0);
  const [prevMinutes, setPrevMinutes] = useState(0);
  const [prevSeconds, setPrevSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const newDistance = countDownDate - now;
      setDistance(newDistance);

      if (newDistance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countDownDate]);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  useEffect(() => {
    if (days !== prevDays) {
      setPrevDays(days);
    }
    if (hours !== prevHours) {
      setPrevHours(hours);
    }
    if (minutes !== prevMinutes) {
      setPrevMinutes(minutes);
    }
    if (seconds !== prevSeconds) {
      setPrevSeconds(seconds);
    }
  }, [days, hours, minutes, prevDays, prevHours, prevMinutes, prevSeconds, seconds]);


  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://betterstack.com/assets/v2/homepage/hero-bg-3a1adb9be5d3a524fe6108c9346d27e84707509449529c0e3070909f56bef100.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
        }}
      ></div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 text-2xl font-semibold flex w-full justify-center text-2xl pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
          Perbytes
        </p>
      </div>
      <div className="relative flex flex-col align-center items-center justify-center my-32 px-[25rem] w-full">
        {/* Content */}
        <div className="z-10 text-center">
          <p className="text-4xl font-semibold mb-4">Coming Soon. Stay tuned.</p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl">
                <span style={{ '--value': days !== prevDays ? days : prevDays } as React.CSSProperties}></span>
              </span>
              days
            </div>
            <span className="text-8xl">:</span>
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl">
                <span style={{ '--value': hours !== prevHours ? hours : prevHours } as React.CSSProperties}></span>
              </span>
              hours
            </div>
            <span className="text-8xl">:</span>
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl">
                <span style={{ '--value': minutes !== prevMinutes ? minutes : prevMinutes } as React.CSSProperties}></span>
              </span>
              min
            </div>
            <span className="text-8xl">:</span>
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl">
                <span style={{ '--value': seconds !== prevSeconds ? seconds : prevSeconds } as React.CSSProperties}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
      <footer className="flex align-center items-center text-white z-0 absolute bottom-0">
        <p>Perbytes Systems, Inc. &copy; 2023 All rights reserved.</p>
      </footer>
    </main>
  );
}