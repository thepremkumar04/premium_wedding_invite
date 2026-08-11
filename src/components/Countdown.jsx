import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const safeDate = targetDate || "2026-08-19T05:00:00+05:30";
      const difference = new Date(safeDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label, isLast }) => (
    <div className={`flex flex-col items-center px-4 md:px-8 ${!isLast ? 'border-r border-[#B08D57]/30' : ''}`}>
      <span className="text-2xl md:text-4xl font-display text-[#173F35] mb-1">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-[#B08D57]">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 1.2 }}
      className="py-16 flex flex-col items-center relative z-50"
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-10 text-[#173F35]/70">
        Counting down to forever
      </p>
      <div className="flex items-center justify-center">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <TimeBlock value={timeLeft.seconds} label="Seconds" isLast />
      </div>
    </motion.div>
  );
}