'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@aicompany.com',
      action: 'mailto:hello@aicompany.com'
    },
    {
      icon: '📱',
      title: 'Call Us',
      description: 'Speak with our team',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with AI support',
      value: 'Available 24/7',
      action: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Our headquarters',
      value: 'San Francisco, CA',
      action: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden w-[80%] mx-auto"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 left-10 w-40 h-40 bg-[#CF0F47] rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute bottom-20 right-10 w-56 h-56 bg-[#FF0B55] rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute top-1/3 right-1/4 w-32 h-32 bg-[#FFDEDE] rounded-full blur-2xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-pulse' : ''}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-[#000000] mb-4 relative">
              Get In Touch
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] transform origin-left transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </h2>
          </div>
          
        </div>

        {/* Main Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-white to-[#FFDEDE]/20 p-8 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-[#000000] mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-[#CF0F47] focus:outline-none transition-all duration-300 peer"
                    placeholder=" "
                    required
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.name || focusedField === 'name' 
                      ? '-top-2 text-sm bg-white px-2 text-[#CF0F47]' 
                      : 'top-4 text-gray-500'
                  }`}>
                    Full Name *
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-[#CF0F47] focus:outline-none transition-all duration-300"
                    placeholder=" "
                    required
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.email || focusedField === 'email' 
                      ? '-top-2 text-sm bg-white px-2 text-[#CF0F47]' 
                      : 'top-4 text-gray-500'
                  }`}>
                    Email Address *
                  </label>
                </div>

                {/* Company Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-[#CF0F47] focus:outline-none transition-all duration-300"
                    placeholder=" "
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.company || focusedField === 'company' 
                      ? '-top-2 text-sm bg-white px-2 text-[#CF0F47]' 
                      : 'top-4 text-gray-500'
                  }`}>
                    Company (Optional)
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows={5}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-[#CF0F47] focus:outline-none transition-all duration-300 resize-none"
                    placeholder=" "
                    required
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message || focusedField === 'message' 
                      ? '-top-2 text-sm bg-white px-2 text-[#CF0F47]' 
                      : 'top-4 text-gray-500'
                  }`}>
                    Your Message *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Send Message
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Methods Grid */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`bg-gradient-to-br from-white to-[#FFDEDE]/30 p-6 rounded-2xl border border-gray-200 hover:border-[#CF0F47] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl group cursor-pointer`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#000000] mb-2 group-hover:text-[#CF0F47] transition-colors duration-300">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  <p className="text-[#FF0B55] font-semibold">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}