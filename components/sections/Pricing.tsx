'use client';

import { useState } from 'react';

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      shape: "hexagon",
      features: ["5K requests", "Basic AI", "Community support"],
      color: "#6B7280"
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      shape: "diamond",
      features: ["50K requests", "Advanced AI", "Priority support"],
      color: "#CF0F47",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      shape: "circle",
      features: ["Unlimited", "Custom AI", "Dedicated support"],
      color: "#FF0B55"
    }
  ];

  const getShapeClipPath = (shape) => {
    switch (shape) {
      case 'hexagon':
        return 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
      case 'diamond':
        return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      case 'circle':
        return 'circle(50% at 50% 50%)';
      default:
        return 'none';
    }
  };

  return (
    <section id="pricing" className="py-32 relative overflow-hidden" >
      {/* Minimal Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#CF0F47' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#FF0B55' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Clean Heading */}
        <div className="text-center mb-24">
          <h2 className=" text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#000000' }}>
            Pricing
          </h2>
        </div>

        {/* Innovative Plan Display */}
        <div className="flex justify-center items-center min-h-[600px] relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#CF0F47', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#FF0B55', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#CF0F47', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <line x1="20%" y1="50%" x2="50%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
            <line x1="50%" y1="30%" x2="80%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
          </svg>

          {/* Plan Cards with Geometric Shapes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl relative" style={{ zIndex: 2 }}>
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative transition-all duration-700 ease-out transform ${
                  hoveredPlan === index ? 'scale-110 -translate-y-8' : 'hover:scale-105'
                } ${plan.popular ? 'md:-translate-y-12' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Floating Shape Background */}
                <div
                  className={`absolute inset-0 w-80 h-80 mx-auto transition-all duration-700 ${
                    hoveredPlan === index ? 'rotate-12 scale-110' : 'rotate-0'
                  }`}
                  style={{
                    clipPath: getShapeClipPath(plan.shape),
                    backgroundColor: plan.color,
                    opacity: 0.1,
                    animation: `float${index} 4s ease-in-out infinite`
                  }}
                ></div>

                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-3xl">
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div 
                        className="px-6 py-2 rounded-full text-white text-sm font-bold shadow-lg"
                        style={{ backgroundColor: plan.color }}
                      >
                        POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-3xl font-black mb-4" style={{ color: '#000000' }}>
                    {plan.name}
                  </h3>

                  {/* Price in Geometric Shape */}
                  <div className="relative mb-8">
                    <div
                      className="w-32 h-32 mx-auto flex items-center justify-center transition-all duration-500 hover:rotate-45"
                      style={{
                        clipPath: getShapeClipPath(plan.shape),
                        backgroundColor: plan.color
                      }}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-black text-white">{plan.price}</div>
                        <div className="text-xs text-white/80">{plan.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: plan.color }}
                        ></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                      plan.popular ? 'text-white' : 'border-2 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: plan.popular ? plan.color : 'transparent',
                      borderColor: plan.color,
                      color: plan.popular ? 'white' : plan.color
                    }}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        e.target.style.backgroundColor = plan.color;
                        e.target.style.color = 'white';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.popular) {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = plan.color;
                      }
                    }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Floating Particles */}
                {hoveredPlan === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full animate-ping"
                        style={{
                          backgroundColor: plan.color,
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-8deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}