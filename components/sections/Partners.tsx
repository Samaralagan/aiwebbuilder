'use client';

import { useState, useEffect, useRef } from 'react';

export default function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const sectionRef = useRef(null);

  const partners = [
    {
      name: "Microsoft",
      url: "https://microsoft.com",
      logo: (
        <svg viewBox="0 0 23 23" className="w-12 h-12">
          <path fill="#f25022" d="M0 0h11v11H0z"/>
          <path fill="#00a4ef" d="M12 0h11v11H12z"/>
          <path fill="#7fba00" d="M0 12h11v11H0z"/>
          <path fill="#ffb900" d="M12 12h11v11H12z"/>
        </svg>
      )
    },
    {
      name: "Google",
      url: "https://google.com",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      name: "OpenAI",
      url: "https://openai.com",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#412991" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      )
    },
    {
      name: "NVIDIA",
      url: "https://nvidia.com",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#76B900" d="M10.28 2.18C7.67 2.18 5.29 3.3 3.59 5.28c1.27-.16 2.61-.24 4.01-.24 6.23 0 11.85 2.73 15.74 7.13-3.89 4.4-9.51 7.13-15.74 7.13-1.4 0-2.74-.08-4.01-.24 1.7 1.98 4.08 3.1 6.69 3.1 5.52 0 10.09-4.57 10.09-10.09S15.8 2.18 10.28 2.18zm3.86 8.95c-1.01 2.25-2.63 4.08-4.64 5.33-.37-.7-.58-1.51-.58-2.37 0-2.76 2.24-5 5-5 .86 0 1.67.21 2.37.58-2.1-.9-3.7-2.83-4.15-5.18z"/>
        </svg>
      )
    },
    {
      name: "Amazon",
      url: "https://amazon.com",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#FF9900" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.289-.12.055-.02.116-.06.184-.12.068-.06.097-.12.087-.18-.01-.06-.06-.06-.15.12-.09.18-.18.27-.27.27-.09 0-.21-.06-.36-.18-2.65-1.89-5.76-2.835-9.33-2.835-3.57 0-6.68.945-9.33 2.835-.45.32-.585.45-.405.39z"/>
          <path fill="#FF9900" d="M.003 17.017c-.003-.072.014-.134.051-.186.037-.052.097-.078.18-.078.083 0 .188.026.315.078 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595.36-.14.54-.21.54-.21 0 0-.18.12-.54.36-2.779 1.95-5.595 2.925-8.447 2.925-4.276 0-8.234-1.056-11.87-3.166-.127-.052-.232-.078-.315-.078-.083 0-.143.026-.18.078-.037.052-.054.114-.051.186z"/>
          <path fill="#232F3E" d="M18.325 11.539c-.74.36-1.555.54-2.445.54-.89 0-1.665-.16-2.325-.48-.66-.32-1.17-.76-1.53-1.32-.36-.56-.54-1.19-.54-1.89 0-.7.18-1.33.54-1.89.36-.56.87-1 1.53-1.32.66-.32 1.435-.48 2.325-.48.89 0 1.705.18 2.445.54.74.36 1.32.86 1.74 1.5.42.64.63 1.36.63 2.16 0 .8-.21 1.52-.63 2.16-.42.64-1 1.14-1.74 1.5zm-2.445-5.04c-.65 0-1.17.22-1.56.66-.39.44-.585.99-.585 1.65s.195 1.21.585 1.65c.39.44.91.66 1.56.66.65 0 1.17-.22 1.56-.66.39-.44.585-.99.585-1.65s-.195-1.21-.585-1.65c-.39-.44-.91-.66-1.56-.66z"/>
        </svg>
      )
    },
    {
      name: "Meta",
      url: "https://meta.com",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate items with staggered delay
            partners.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => new Set([...prev, index]));
              }, index * 150);
            });
          } else {
            // Reset animation when out of view for re-animation on next scroll
            setIsVisible(false);
            setAnimatedItems(new Set());
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
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

  const handlePartnerClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="partners" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} 
            style={{ color: '#000000' }}
          >
            Our Partners
          </h2>
          
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group cursor-pointer transition-all duration-700 transform relative ${
                animatedItems.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              } ${
                hoveredPartner === index 
                  ? 'scale-110 -translate-y-3 z-10' 
                  : 'hover:scale-105 hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
              onClick={() => handlePartnerClick(partner.url)}
              style={{
                transitionDelay: animatedItems.has(index) ? '0ms' : `${index * 150}ms`
              }}
            >
              {/* Partner Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 h-32 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_20px_40px_rgba(207,15,71,0.15)]">
                {/* Background Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-2xl blur-xl"
                  style={{ backgroundColor: '#CF0F47' }}
                ></div>
                
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-all duration-700 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>
                
                {/* Logo */}
                <div className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-3">
                  {partner.logo}
                </div>

                {/* Hover Border Animation */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 transition-all duration-700 group-hover:border-opacity-60" 
                  style={{ 
                    borderColor: hoveredPartner === index ? '#CF0F47' : 'transparent',
                    boxShadow: hoveredPartner === index ? '0 0 20px rgba(207,15,71,0.3)' : 'none'
                  }}
                ></div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-gradient-to-r from-pink-400 to-purple-400 opacity-20"></div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-150" style={{ backgroundColor: '#CF0F47' }}></div>
              </div>

              {/* Partner Name */}
              <div className="text-center mt-4">
                <p className="font-semibold text-gray-700 group-hover:text-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:font-bold">
                  {partner.name}
                </p>
              </div>

              {/* Enhanced Floating Particles Animation */}
              {hoveredPartner === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-bounce"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{
                          backgroundColor: i % 2 === 0 ? '#CF0F47' : '#FF6B9D',
                          animationDelay: `${Math.random() * 1}s`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}

              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-[100%] transition-all duration-1000 skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {isVisible && Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: '6s'
              }}
            >
              <div
                className="w-32 h-32 rounded-full opacity-5 blur-2xl"
                style={{ backgroundColor: '#CF0F47' }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}