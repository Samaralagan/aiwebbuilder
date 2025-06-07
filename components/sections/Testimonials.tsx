'use client';

import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "This platform has completely transformed how we approach our business operations. The results have been extraordinary and beyond our expectations.",
      rating: 5,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      company: "InnovateLab Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Outstanding service and incredible attention to detail. The team's expertise and dedication have made all the difference in our project success.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The innovation and creativity brought to our campaigns have been phenomenal. We've seen a 300% increase in engagement across all platforms.",
      rating: 5,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Working with this team has been a game-changer. Their strategic approach and execution have exceeded every milestone we set together.",
      rating: 5,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Founder",
      company: "DesignStudio Pro",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "The level of professionalism and quality delivered is unmatched. Every project phase was handled with precision and creative excellence.",
      rating: 5,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "VP of Operations",
      company: "Global Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The ROI we've achieved through this partnership has been remarkable. The strategic insights and implementation have been absolutely perfect.",
      rating: 5,
      gradient: "from-teal-500 to-blue-500"
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
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => new Set([...prev, index]));
              }, index * 200);
            });
          } else {
            // Reset animation when out of view for re-animation on next scroll
            setIsVisible(false);
            setAnimatedItems(new Set());
          }
        });
      },
      { 
        threshold: 0.15,
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-300`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20  relative overflow-hidden w-[80%] mx-auto" ref={sectionRef} >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {isVisible && Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: '8s'
            }}
          >
            <div
              className="w-40 h-40 rounded-full opacity-5 blur-3xl"
              style={{ backgroundColor: '#CF0F47' }}
            ></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            What Our Clients Say
          </h2>
          
        </div>

        {/* Featured Testimonial */}
        <div 
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-700">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-700`}></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-6xl text-gray-200 group-hover:text-gray-300 transition-colors duration-500">
              "
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-medium">
                    {testimonials[activeTestimonial].content}
                  </blockquote>
                  <div>
                    <cite className="text-lg font-bold text-gray-900 not-italic">
                      {testimonials[activeTestimonial].name}
                    </cite>
                    <p className="text-gray-600 mt-1">
                      {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(15px) rotate(240deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}