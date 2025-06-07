'use client';

import { useEffect, useRef } from 'react';

interface AIBackgroundProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  animated?: boolean;
}

export default function AIBackground({ 
  className = '', 
  intensity = 'medium',
  animated = true 
}: AIBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!animated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.0008;

      // Angled diagonal lines from bottom-left to top-right
      const lineSpacing = 100; // Distance between parallel lines
      const baseOpacity = 0.15; // Much more visible base opacity
      const opacity = baseOpacity + (Math.sin(time) + 1) * 0.5 * 0.05;

      ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`;
      ctx.lineWidth = 1;

      // Calculate the diagonal lines
      const totalWidth = canvas.width + canvas.height; // Maximum distance needed
      const startOffset = -canvas.height; // Start from beyond the canvas

      for (let i = startOffset; i < totalWidth; i += lineSpacing) {
        ctx.beginPath();
        // Start point (bottom-left direction)
        const startX = i;
        const startY = canvas.height;
        // End point (top-right direction)
        const endX = i + canvas.height;
        const endY = 0;
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Subtle flowing accent along one of the diagonal lines
      const flowOffset = Math.sin(time * 0.6) * 50;
      const accentLineX = canvas.width * 0.3 + flowOffset;
      
      const gradient = ctx.createLinearGradient(
        accentLineX, 
        canvas.height, 
        accentLineX + canvas.height, 
        0
      );
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.3, `rgba(207, 15, 71, 0.12)`);
      gradient.addColorStop(0.7, `rgba(255, 11, 85, 0.08)`);
      gradient.addColorStop(1, 'transparent');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(accentLineX, canvas.height);
      ctx.lineTo(accentLineX + canvas.height, 0);
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [animated, intensity]);

  const getIntensityValues = () => {
    switch (intensity) {
      case 'light': 
        return { opacity: 'opacity-40', gradient: '2', accent: '1' };
      case 'medium': 
        return { opacity: 'opacity-50', gradient: '3', accent: '2' };
      case 'heavy': 
        return { opacity: 'opacity-60', gradient: '4', accent: '3' };
      default: 
        return { opacity: 'opacity-50', gradient: '3', accent: '2' };
    }
  };

  const intensityValues = getIntensityValues();

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Animated diagonal lines */}
      {animated && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full ${intensityValues.opacity}`}
        />
      )}

      {/* Premium clean background */}
      <div className="absolute inset-0">
        {/* Clean gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-slate-100/30" />
        
        {/* Subtle brand accents */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#CF0F47]/${intensityValues.gradient} via-transparent to-transparent opacity-50`} />
        <div className={`absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#FF0B55]/${intensityValues.gradient} opacity-30`} />

        {/* Premium corner gradients */}
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#CF0F47]/${intensityValues.accent} to-transparent opacity-40 blur-3xl`} />
        <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-[#FF0B55]/${intensityValues.accent} to-transparent opacity-30 blur-3xl`} />

        {/* Static diagonal accent lines (CSS-based for non-animated version) */}
        {!animated && (
          <div className="absolute inset-0">
            {/* Multiple angled lines using CSS */}
            <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-slate-400/${60 - i * 4} to-transparent transform rotate-45 origin-bottom-left`}
                  style={{
                    width: `${Math.sqrt(2) * 100}%`,
                    left: `${i * 12}%`,
                    transformOrigin: 'bottom left',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Minimal tech accent */}
        <div className="absolute top-8 right-8 w-24 h-24 opacity-8">
          <div className="w-full h-full border border-slate-400/40 rounded-lg">
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#CF0F47] rounded-full opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#FF0B55] rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Subtle premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5" />
      </div>
    </div>
  );
}