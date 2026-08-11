import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScratchToReveal({ width = 300, height = 100 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Support high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    
    // Draw the "Gold Foil" Cover
    ctx.fillStyle = '#B08D57'; // Antique Gold
    ctx.fillRect(0, 0, width, height);
    
    // Add text to the cover
    ctx.fillStyle = '#FFFDF7'; // Warm Ivory
    ctx.font = 'italic 18px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch to Reveal the Date', width / 2, height / 2);
    
    // Setup composite operation for "erasing"
    ctx.globalCompositeOperation = 'destination-out';
  }, [width, height]);

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handleScratchStart = (e) => {
    if (isRevealed) return;
    setIsScratching(true);
    scratch(e);
  };

  const handleScratchMove = (e) => {
    if (!isScratching || isRevealed) return;
    
    // Prevent scrolling while scratching on mobile
    if (e.cancelable) e.preventDefault(); 
    scratch(e);
  };

  const handleScratchEnd = () => {
    setIsScratching(false);
    checkReveal();
  };

  const scratch = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getPointerPos(e);
    
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2); // 20px scratch brush size
    ctx.fill();
  };

  // Check if enough of the canvas is scratched to just reveal the whole thing
  const checkReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    
    let transparentPixels = 0;
    // Check every 4th value (alpha channel)
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }
    
    const percentage = transparentPixels / (pixels.length / 4);
    
    // If more than 40% is scratched, reveal the whole thing automatically
    if (percentage > 0.4) {
      setIsRevealed(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative mx-auto select-none rounded overflow-hidden shadow-lg border border-antique-gold/20"
      style={{ width, height, touchAction: 'none' }}
    >
      {/* The Revealed Date (Underneath) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream z-0">
        <p className="tracking-widest uppercase text-lg text-charcoal font-semibold">19 August 2026</p>
        <p className="font-display italic text-deep-maroon text-xl mt-1">Wednesday</p>
      </div>

      {/* The Scratch Canvas (On Top) */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 cursor-crosshair"
        style={{ width, height }}
        animate={{ opacity: isRevealed ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        onPointerDown={handleScratchStart}
        onPointerMove={handleScratchMove}
        onPointerUp={handleScratchEnd}
        onPointerLeave={handleScratchEnd}
        // Fallbacks for older mobile browsers
        onTouchStart={handleScratchStart}
        onTouchMove={handleScratchMove}
        onTouchEnd={handleScratchEnd}
      />
    </div>
  );
}