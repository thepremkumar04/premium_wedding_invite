import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Motif, Divider } from './Ornaments';
import { weddingData } from '../data/weddingData';

// Extremely safe cinematic slide-up (guarantees text is visible immediately)
const slowFade = {
  hidden: { opacity: 1, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    const audio = new Audio('/bg-music.mp3');
    audio.loop = true;
    if (isPlaying) { audio.play().catch(() => {}); } 
    else { audio.pause(); }
    return () => audio.pause();
  }, [isPlaying]);

  return (
    <motion.button 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-10 h-10 rounded-full border border-[#B08D57]/30 bg-[#FFFDF7]/90 backdrop-blur text-[#B08D57] transition-all hover:border-[#B08D57]"
    >
      <span className="text-lg leading-none">{isPlaying ? '♫' : '×'}</span>
    </motion.button>
  );
};

export const Hero = () => (
  <section className="min-h-screen relative flex items-center justify-center pt-20 pb-10 px-6">
    {/* Notice amount: 0.1 - This prevents the animation from getting stuck! */}
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slowFade} className="text-center w-full max-w-3xl flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl text-[#173F35] tracking-[0.1em] font-light leading-tight">
        {weddingData?.groom?.name || "S. PRADYUMNA RAJU"}
      </h2>
      <span className="text-2xl text-[#B08D57] italic font-display my-6">&</span>
      <h2 className="text-4xl md:text-6xl text-[#173F35] tracking-[0.1em] font-light leading-tight">
        {weddingData?.bride?.name || "M. SRI DEEPIKA"}
      </h2>
      
      <p className="font-display italic text-2xl text-[#173F35]/70 mt-12 mb-16">Are Getting Married</p>
      
      <motion.div 
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }}
        className="mt-4"
      >
        <p className="text-xl md:text-2xl tracking-[0.2em] font-semibold text-[#B08D57]">
          19 AUGUST 2026
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export const CoupleSection = () => (
  <section className="py-24 px-6 bg-[#F5EBDD]/40">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slowFade} className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-center text-center relative">
        
        {/* Groom */}
        <div className="flex-1 px-4 mb-16 md:mb-0 w-full">
          <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-8">The Groom</p>
          <h3 className="text-2xl md:text-3xl font-display text-[#173F35] tracking-wide mb-2">{weddingData?.groom?.fullName}</h3>
          <p className="text-xs tracking-widest text-[#173F35]/70 mb-8">{weddingData?.groom?.qualification}</p>
          <div className="text-xs tracking-wider text-[#173F35]/80 leading-loose">
            {weddingData?.groom?.parents?.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-48 bg-[#B08D57]/20 self-center mx-8"></div>
        <div className="md:hidden w-full flex justify-center my-4"><Motif /></div>

        {/* Bride */}
        <div className="flex-1 px-4 w-full">
          <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-8">The Bride</p>
          <h3 className="text-2xl md:text-3xl font-display text-[#173F35] tracking-wide mb-2">{weddingData?.bride?.fullName}</h3>
          <p className="text-xs tracking-widest text-[#173F35]/70 mb-8">{weddingData?.bride?.qualification}</p>
          <div className="text-xs tracking-wider text-[#173F35]/80 leading-loose">
            {weddingData?.bride?.parents?.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

      </div>
    </motion.div>
  </section>
);

export const EventsTimeline = () => (
  <section className="py-32 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-16">The Celebrations</p>
      
      <div className="space-y-20">
        {weddingData?.events?.map((event, index) => (
          <motion.div key={event.id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slowFade} className="flex flex-col items-center">
            <h3 className="text-2xl font-display text-[#173F35] tracking-widest mb-4">{event.title?.toUpperCase()}</h3>
            <p className="text-sm font-light tracking-[0.2em] text-[#7A1830] mb-2">{event.date?.toUpperCase()}</p>
            <p className="text-xs font-light tracking-widest text-[#173F35]/70 mb-4 uppercase">
              {event.day} · {event.time}
            </p>
            {event.details && <p className="italic font-display text-lg text-[#B08D57] mb-4">{event.details}</p>}
            <p className="text-sm tracking-widest text-[#173F35] mb-6">{event.venue}</p>
            
            {index !== weddingData.events.length - 1 && <div className="mt-20"><Motif /></div>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const VenueSection = () => {
  const venueParts = (weddingData?.venue?.name || "SHREE CONVENTION").split(' ');
  const part1 = venueParts[0] || "SHREE";
  const part2 = venueParts.slice(1).join(' ') || "CONVENTION";

  return (
    <section className="py-32 bg-[#173F35] text-[#FFFDF7] px-6 text-center relative overflow-hidden">
      <div className="absolute inset-4 md:inset-8 border-[0.5px] border-[#B08D57]/30 pointer-events-none"></div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slowFade} className="max-w-3xl mx-auto flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-12">Where We Celebrate</p>
        
        <h3 className="text-4xl md:text-5xl font-display font-light tracking-[0.15em] mb-4">
          {part1}<br/>{part2}
        </h3>
        <p className="mb-12 text-sm tracking-[0.4em] uppercase text-[#FFFDF7]/70 mt-6">TIRUPATI</p>
        
        <p className="text-sm tracking-[0.2em] text-[#B08D57] mb-10">19 AUGUST 2026</p>
        
        <Divider />
      </motion.div>
    </section>
  );
};

export const FinalScreen = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slowFade} className="flex flex-col items-center w-full">
      <Motif />
      <h2 className="text-2xl md:text-3xl text-[#173F35] tracking-[0.1em] font-light mt-12">{weddingData?.groom?.name}</h2>
      <span className="text-lg text-[#B08D57] font-display italic my-6">&</span>
      <h2 className="text-2xl md:text-3xl text-[#173F35] tracking-[0.1em] font-light mb-12">{weddingData?.bride?.name}</h2>
      
      <p className="text-xs tracking-[0.4em] text-[#173F35]/60 mb-16">19 · 08 · 2026</p>
      <p className="font-display italic text-2xl text-[#7A1830] mb-12">Forever Begins Here</p>
      <Motif />
    </motion.div>
  </section>
);