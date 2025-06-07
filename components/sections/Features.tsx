'use client';

import { useState, useEffect, useRef } from 'react';

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout>();

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isVisible) {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % features.length);
      }, 5000);
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isVisible]);

  const features = [
    {
      id: 1,
      title: "Neural Processing",
      description: "Advanced machine learning algorithms that adapt and evolve with your data, providing unprecedented accuracy and insights for intelligent decision making.",
      icon: "🧠",
      color: "#CF0F47",
      stats: { value: "99.9%", label: "Accuracy" },
      highlights: ["Real-time Processing", "Adaptive Learning", "Scalable Architecture"]
    },
    {
      id: 2,
      title: "Intelligent Automation",
      description: "Streamline your workflow with smart automation that learns from your patterns and optimizes processes automatically for maximum efficiency.",
      icon: "⚡",
      color: "#FF0B55",
      stats: { value: "24/7", label: "Uptime" },
      highlights: ["Workflow Optimization", "Pattern Recognition", "Auto Decision Making"]
    },
    {
      id: 3,
      title: "Predictive Analytics",
      description: "Harness the power of AI to predict trends, behaviors, and outcomes with remarkable precision and reliability for strategic planning.",
      icon: "🔮",
      color: "#CF0F47", // Changed from #FFDEDE to match brand colors
      stats: { value: "95%", label: "Prediction Rate" },
      highlights: ["Trend Forecasting", "Behavioral Analysis", "Risk Assessment"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    resetAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % features.length);
    }, 5000);
  };

  const openModal = (feature: any) => {
    setSelectedFeature(feature);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFeature(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-20  relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 " />
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(207, 15, 71, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(207, 15, 71, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating gradient orbs */}
        <div 
          className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${features[currentSlide].color} 0%, transparent 70%)`,
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-15 animate-pulse"
          style={{
            background: `radial-gradient(circle, #FF0B55 0%, transparent 70%)`,
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Powerful{' '}
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, #CF0F47, #FF0B55)`,
              }}
            >
              AI Features
            </span>
          </h2>
          
        </div>

        {/* Modern Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100">
            
            {/* Slides Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={feature.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 min-h-[500px]">
                    
                    {/* Content Side */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="text-5xl p-4 rounded-2xl animate-pulse"
                          style={{
                            background: `${feature.color}15`,
                            boxShadow: `0 10px 30px ${feature.color}20`
                          }}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 
                            className="text-3xl font-bold"
                            style={{ color: feature.color }}
                          >
                            {feature.title}
                          </h3>
                          <div 
                            className="text-2xl font-bold mt-2"
                            style={{ color: feature.color }}
                          >
                            {feature.stats.value}
                            <span className="text-sm text-gray-500 ml-2">
                              {feature.stats.label}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="space-y-3">
                        {feature.highlights.map((highlight, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                            style={{
                              background: `${feature.color}08`,
                              border: `1px solid ${feature.color}20`
                            }}
                          >
                            <div 
                              className="w-3 h-3 rounded-full animate-pulse"
                              style={{ background: feature.color }}
                            />
                            <span 
                              className="font-medium"
                              style={{ color: feature.color }}
                            >
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={() => openModal(feature)}
                        className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                        style={{
                          background: `linear-gradient(45deg, ${feature.color}, #FF0B55)`,
                          boxShadow: `0 10px 25px ${feature.color}30`
                        }}
                      >
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                      </button>
                    </div>

                    {/* Visual Side */}
                    <div className="relative">
                      <div 
                        className="w-full h-80 rounded-2xl relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`,
                          border: `2px solid ${feature.color}30`
                        }}
                      >
                        {/* Animated Pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="text-8xl opacity-20 animate-pulse"
                            style={{
                              filter: `drop-shadow(0 0 20px ${feature.color}40)`
                            }}
                          >
                            {feature.icon}
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full opacity-40"
                            style={{
                              background: feature.color,
                              left: `${15 + (i * 10)}%`,
                              top: `${20 + (i * 8)}%`,
                              animation: `floatUp 3s ease-in-out infinite ${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
              style={{ color: features[currentSlide].color }}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
              style={{ color: features[currentSlide].color }}
            >
              →
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'scale-125' : 'scale-100 opacity-50'
                }`}
                style={{
                  background: currentSlide === index ? features[index].color : '#CBD5E0'
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-700 ease-out rounded-full"
              style={{
                width: `${((currentSlide + 1) / features.length) * 100}%`,
                background: `linear-gradient(90deg, ${features[currentSlide].color}, #FF0B55)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && selectedFeature && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="p-8 rounded-t-3xl relative"
              style={{
                background: `linear-gradient(135deg, ${selectedFeature.color}15, ${selectedFeature.color}25)`
              }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors shadow-lg"
              >
                ✕
              </button>
              
              <div className="flex items-center space-x-6">
                <div 
                  className="text-6xl p-4 rounded-2xl"
                  style={{
                    background: `${selectedFeature.color}20`,
                    boxShadow: `0 10px 30px ${selectedFeature.color}30`
                  }}
                >
                  {selectedFeature.icon}
                </div>
                <div>
                  <h3 
                    className="text-4xl font-bold mb-2"
                    style={{ color: selectedFeature.color }}
                  >
                    {selectedFeature.title}
                  </h3>
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: selectedFeature.color }}
                  >
                    {selectedFeature.stats.value}
                    <span className="text-lg text-gray-500 ml-2">
                      {selectedFeature.stats.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {selectedFeature.description}
              </p>

              {/* Detailed Features */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Key Capabilities</h4>
                
                {selectedFeature.highlights.map((highlight: string, idx: number) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: `${selectedFeature.color}08`,
                      border: `2px solid ${selectedFeature.color}20`
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                        style={{ background: selectedFeature.color }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <h5 
                          className="text-xl font-semibold mb-2"
                          style={{ color: selectedFeature.color }}
                        >
                          {highlight}
                        </h5>
                        <p className="text-gray-600">
                          {highlight === "Real-time Processing" && "Process data instantly with our advanced neural networks, delivering results in milliseconds."}
                          {highlight === "Adaptive Learning" && "Our AI continuously learns and improves from new data patterns and user interactions."}
                          {highlight === "Scalable Architecture" && "Built to handle enterprise-level workloads with seamless scaling capabilities."}
                          {highlight === "Workflow Optimization" && "Automatically identify bottlenecks and optimize your business processes for maximum efficiency."}
                          {highlight === "Pattern Recognition" && "Advanced algorithms detect complex patterns and anomalies in your data streams."}
                          {highlight === "Auto Decision Making" && "Make intelligent decisions automatically based on predefined rules and AI insights."}
                          {highlight === "Trend Forecasting" && "Predict future trends with high accuracy using advanced statistical models and machine learning."}
                          {highlight === "Behavioral Analysis" && "Understand user behavior patterns to improve engagement and conversion rates."}
                          {highlight === "Risk Assessment" && "Identify potential risks and opportunities before they impact your business operations."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-8 text-center">
                <button 
                  className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group mr-4"
                  style={{
                    background: `linear-gradient(45deg, ${selectedFeature.color}, #FF0B55)`,
                    boxShadow: `0 15px 35px ${selectedFeature.color}30`
                  }}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                </button>
                
                <button 
                  onClick={closeModal}
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2"
                  style={{
                    color: selectedFeature.color,
                    borderColor: selectedFeature.color,
                    background: 'transparent'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatUp {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-15px) scale(1.2); 
            opacity: 0.8;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}