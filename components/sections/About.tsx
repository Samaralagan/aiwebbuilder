'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden w-full px-4 sm:px-6 lg:px-8 xl:w-[80%] xl:mx-auto"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#CF0F47] rounded-full blur-2xl sm:blur-3xl transition-all duration-1000 ${isVisible ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-[#FF0B55] rounded-full blur-2xl sm:blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#CF0F47] rounded-full blur-2xl sm:blur-3xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-pulse' : ''}`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] mb-2 relative leading-tight">
              About Our AI
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] transform origin-left transition-transform duration-1000 delay-300 scale-x-0"></span>
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-4 sm:mb-6">
                  The Future of Intelligence
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Our AI platform harnesses the power of machine learning, natural language processing, 
                  and predictive analytics to create solutions that don't just respond to your needs—they 
                  anticipate them.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Built with a focus on user experience and powered by state-of-the-art algorithms, 
                  we're not just creating tools; we're crafting the future of human-AI interaction.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[#FFDEDE]">
                  <div className="text-xl sm:text-2xl font-bold text-[#CF0F47] mb-1">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[#FFDEDE]">
                  <div className="text-xl sm:text-2xl font-bold text-[#FF0B55] mb-1">&lt;0.1s</div>
                  <div className="text-xs sm:text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[#FFDEDE]">
                  <div className="text-xl sm:text-2xl font-bold text-[#CF0F47] mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - AI Visualization */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative flex justify-center lg:justify-end">
              {/* Central AI Node */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 sm:inset-4 bg-gradient-to-r from-[#FF0B55] to-[#CF0F47] rounded-full opacity-30 animate-pulse animation-delay-200"></div>
                <div className="absolute inset-4 sm:inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">🤖</span>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin animation-duration-20000">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#CF0F47] rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#FF0B55] rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#CF0F47] rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#FF0B55] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animation-duration-20000 {
          animation-duration: 20s;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .scale-x-0 {
          transform: scaleX(0);
        }
        
        ${isVisible ? `
          .text-3xl.font-bold::after,
          .sm\\:text-4xl.font-bold::after,
          .md\\:text-5xl.font-bold::after,
          .lg\\:text-6xl.font-bold::after {
            transform: scaleX(1);
          }
        ` : ''}
      `}</style>
    </section>
  );
}