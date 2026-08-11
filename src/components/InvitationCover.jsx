import { motion } from "framer-motion";
import { useState } from "react";

export default function InvitationCover({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    // Give the cinematic exit animation time to finish
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{
        opacity: opening ? 0 : 1,
        scale: opening ? 1.04 : 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-warm-ivory px-6"
    >

      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#173F35 0.7px, transparent 0.7px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Decorative border */}
      <div className="absolute inset-4 md:inset-8 border border-antique-gold/40 pointer-events-none" />

      <div className="absolute inset-6 md:inset-10 border border-antique-gold/10 pointer-events-none" />

      {/* Top ornament */}
      <div className="absolute top-10 md:top-14 left-1/2 -translate-x-1/2 text-antique-gold text-xl">
        ❦
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 text-antique-gold text-xl rotate-180">
        ❦
      </div>

      {/* Main invitation */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-antique-gold"
        >
          Sri Rastu • Subhamasthu • Kalyanamasthu
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 font-sans text-xs tracking-[0.25em] uppercase text-charcoal/60"
        >
          With the blessings of our families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-light text-charcoal"
        >
          Pradyumna Raju
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="my-3 font-display text-3xl md:text-4xl text-antique-gold"
        >
          &
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-charcoal"
        >
          Sri Deepika
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mx-auto mt-8 h-px w-24 bg-antique-gold/50"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-7 font-display italic text-xl md:text-2xl text-deep-maroon"
        >
          Are Getting Married
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-5 text-xs md:text-sm tracking-[0.35em] text-charcoal"
        >
          19 AUGUST 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-2 text-[10px] tracking-[0.3em] uppercase text-charcoal/50"
        >
          Wednesday
        </motion.p>

        {/* Open button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          disabled={opening}
          className="group relative mt-10 border border-antique-gold/70 px-8 py-3.5 text-[10px] md:text-xs tracking-[0.3em] uppercase text-charcoal transition-all duration-500 hover:bg-antique-gold hover:text-warm-ivory disabled:cursor-default"
        >
          <span className="relative z-10">
            {opening ? "Opening..." : "Open Invitation"}
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-7 text-antique-gold text-lg"
        >
          ❦
        </motion.div>

      </div>

    </motion.section>
  );
}