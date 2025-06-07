'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const connectionsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        const colors = ['#CF0F47', '#FF0B55', '#FFDEDE'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));

        // Pulse effect
        this.opacity = 0.3 + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
    }

    // Connection class for neural network effect
    class Connection {
      p1: Particle;
      p2: Particle;
      opacity: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
      }

      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          this.opacity = (1 - distance / maxDistance) * 0.3;
        } else {
          this.opacity = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.strokeStyle = '#CF0F47';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push(new Particle());
      }

      // Create connections
      connectionsRef.current = [];
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          connectionsRef.current.push(new Connection(particlesRef.current[i], particlesRef.current[j]));
        }
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Update and draw connections
      connectionsRef.current.forEach(connection => {
        connection.update();
        connection.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id='hero' className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #1a0a0a 50%, #000000 100%)' }}
      />
      
      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0">
        {/* Primary gradient pulse */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #CF0F47 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary gradient pulse */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #FF0B55 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        />
        
        {/* Tertiary accent */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #FFDEDE 0%, transparent 60%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(207, 15, 71, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(207, 15, 71, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Scanning Line Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 11, 85, 0.1) 50%, transparent 100%)',
          animation: 'scan 3s linear infinite'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span 
              className="bg-gradient-to-r from-white via-pink-200 to-pink-100 bg-clip-text text-transparent animate-pulse"
              style={{
                textShadow: '0 0 20px rgba(207, 15, 71, 0.3)'
              }}
            >
              AI
            </span>
            <span className="text-white ml-4">Revolution</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            style={{ color: '#FFDEDE' }}
          >
            Experience the future of artificial intelligence with cutting-edge technology
            that transforms possibilities into reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(45deg, #CF0F47, #FF0B55)',
                boxShadow: '0 10px 30px rgba(207, 15, 71, 0.3)'
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            </button>
            
            <button 
              className="px-8 py-4 rounded-full font-semibold text-white border-2 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              style={{
                borderColor: '#CF0F47',
                background: 'rgba(207, 15, 71, 0.1)'
              }}
            >
              <span className="relative z-10">Learn More</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, rgba(207, 15, 71, 0.2), rgba(255, 11, 85, 0.2))'
                }}
              />
            </button>
          </div>
          
          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '99.9%', label: 'Accuracy' },
              { number: '10M+', label: 'Processed' },
              { number: '24/7', label: 'Available' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(207, 15, 71, 0.05)',
                  borderColor: 'rgba(207, 15, 71, 0.2)'
                }}
              >
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#FF0B55' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm uppercase tracking-wider"
                  style={{ color: '#FFDEDE' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}