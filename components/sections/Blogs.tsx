'use client';

import { useState, useEffect, useRef } from 'react';

// Sample blog data - replace with your actual data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond.",
    content: "The landscape of web development is rapidly evolving, with new frameworks, tools, and methodologies emerging at an unprecedented pace. In this comprehensive guide, we'll explore the cutting-edge technologies that are set to define the future of web development.\n\nArtificial Intelligence is revolutionizing how we approach coding, with AI-powered tools like GitHub Copilot and ChatGPT helping developers write more efficient code. Machine learning algorithms are being integrated into web applications to provide personalized user experiences and intelligent automation.\n\nThe rise of JAMstack architecture continues to gain momentum, offering better performance, security, and scalability. Static site generators like Next.js, Gatsby, and Nuxt.js are becoming the go-to choices for modern web applications.\n\nWeb3 and blockchain technologies are creating new possibilities for decentralized applications, while Progressive Web Apps (PWAs) are bridging the gap between web and native mobile applications.\n\nAs we look ahead, the focus on performance optimization, accessibility, and sustainable web practices will become even more critical. Developers who embrace these emerging trends and technologies will be well-positioned to create the next generation of web experiences.",
    author: "John Doe",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    tags: ["React", "Next.js", "AI", "Web3"]
  },
  {
    id: 2,
    title: "Design Systems That Scale",
    excerpt: "How to build and maintain design systems that grow with your organization and improve user experience.",
    content: "Design systems have become the backbone of modern digital product development, providing consistency, efficiency, and scalability across large organizations. But creating a design system that truly scales requires careful planning, strategic thinking, and ongoing maintenance.\n\nA successful design system starts with establishing clear design principles and guidelines. These foundational elements serve as the North Star for all design decisions and help maintain consistency across different teams and products.\n\nComponent libraries are the heart of any design system. By creating reusable, well-documented components, teams can significantly reduce development time while ensuring visual and functional consistency. Tools like Figma, Sketch, and Adobe XD have made it easier than ever to create and maintain these component libraries.\n\nDocumentation is crucial for adoption. Without clear, comprehensive documentation, even the best design system will fail to gain traction within an organization. Interactive documentation platforms like Storybook have revolutionized how teams document and showcase their design systems.\n\nGovernance and maintenance are often overlooked but critical aspects of scaling design systems. Establishing clear ownership, contribution guidelines, and regular review processes ensures the system remains relevant and useful as the organization grows.",
    author: "Jane Smith",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Design Systems", "UI/UX", "Figma", "Components"]
  },
  {
    id: 3,
    title: "Performance Optimization Techniques",
    excerpt: "Advanced strategies for optimizing web application performance and delivering exceptional user experiences.",
    content: "Web performance is more critical than ever, with users expecting lightning-fast loading times and smooth interactions. Poor performance directly impacts user engagement, conversion rates, and search engine rankings.\n\nCode splitting is one of the most effective techniques for improving initial load times. By breaking your application into smaller chunks and loading only what's needed, you can significantly reduce the time to first meaningful paint.\n\nImage optimization remains one of the biggest opportunities for performance improvements. Modern formats like WebP and AVIF offer superior compression, while techniques like lazy loading and responsive images ensure optimal delivery across different devices and network conditions.\n\nCaching strategies play a crucial role in performance optimization. Implementing proper HTTP caching headers, utilizing CDNs, and leveraging browser caching can dramatically reduce load times for returning visitors.\n\nDatabase optimization is often overlooked but can have a massive impact on application performance. Proper indexing, query optimization, and connection pooling can reduce server response times significantly.\n\nMonitoring and measuring performance is essential for ongoing optimization. Tools like Lighthouse, WebPageTest, and Real User Monitoring (RUM) provide valuable insights into how your application performs in real-world conditions.",
    author: "Mike Johnson",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Performance", "Optimization", "Web Vitals", "Caching"]
  },
  {
    id: 4,
    title: "Modern CSS Techniques",
    excerpt: "Discover the latest CSS features and techniques that are revolutionizing how we style modern web applications.",
    content: "CSS has evolved tremendously in recent years, with new features and capabilities that were once only possible with JavaScript. Modern CSS techniques are enabling developers to create more sophisticated and performant user interfaces.\n\nCSS Grid and Flexbox have revolutionized layout design, providing powerful tools for creating responsive and flexible layouts without the need for complex frameworks. These layout systems work beautifully together, with Grid handling two-dimensional layouts and Flexbox excelling at one-dimensional arrangements.\n\nCSS Custom Properties (variables) have brought dynamic styling capabilities to CSS, allowing for more maintainable and themeable stylesheets. Combined with calc() functions, they enable complex calculations and responsive design patterns.\n\nThe :has() pseudo-class, often called the 'parent selector,' opens up new possibilities for contextual styling. This game-changing feature allows styles to be applied to elements based on their descendants.\n\nContainer queries are another revolutionary addition, enabling responsive design based on container size rather than viewport size. This makes components truly modular and reusable across different contexts.\n\nCSS animations and transitions have become more powerful with features like scroll-driven animations, view transitions, and advanced easing functions. These capabilities enable smooth, performant animations that enhance user experience.",
    author: "Sarah Wilson",
    date: "Mar 8, 2024",
    readTime: "4 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    tags: ["CSS", "Grid", "Flexbox", "Animations"]
  },
  {
    id: 5,
    title: "AI in Web Development",
    excerpt: "How artificial intelligence is transforming the way we build, test, and deploy web applications.",
    content: "Artificial Intelligence is no longer a futuristic concept in web development—it's a present reality that's transforming how we build, test, and deploy applications. From code generation to automated testing, AI is becoming an indispensable tool for modern developers.\n\nAI-powered code assistants like GitHub Copilot, TabNine, and Amazon CodeWhisperer are revolutionizing the coding experience. These tools can generate entire functions, suggest improvements, and even help debug complex issues, significantly boosting developer productivity.\n\nAutomated testing has been enhanced by AI algorithms that can generate test cases, identify edge cases, and even predict potential failure points. This leads to more robust applications with fewer bugs making it to production.\n\nPersonalization engines powered by machine learning are enabling web applications to provide tailored experiences for each user. From content recommendations to adaptive user interfaces, AI is making websites more intelligent and user-centric.\n\nChatbots and conversational interfaces have evolved from simple rule-based systems to sophisticated AI assistants capable of natural language understanding and contextual responses.\n\nAI is also being used for performance optimization, automatically identifying bottlenecks and suggesting improvements. Some tools can even automatically optimize images, minify code, and adjust caching strategies based on usage patterns.",
    author: "David Brown",
    date: "Mar 5, 2024",
    readTime: "8 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
    tags: ["AI", "Machine Learning", "Automation", "Copilot"]
  }
];

const categories = ["All", "Technology", "Design", "Performance"];

export default function Blogs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visiblePosts = 3;

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

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    if (currentIndex + visiblePosts < filteredPosts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const openModal = (blog: any) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const BlogCard = ({ post, index }: { post: any; index: number }) => (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 ${
        isVisible ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#CF0F47] text-white text-xs font-semibold rounded-full shadow-lg">
            {post.category}
          </span>
        </div>

        {/* Floating read button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button 
            onClick={() => openModal(post)}
            className="bg-white text-[#CF0F47] px-4 py-2 rounded-full font-semibold hover:bg-[#CF0F47] hover:text-white transition-colors duration-300 shadow-lg"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#000000] mb-3 group-hover:text-[#CF0F47] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author and meta info */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF0B55] to-[#CF0F47] rounded-full flex items-center justify-center text-white font-semibold">
              {post.author.charAt(0)}
            </div>
            <span className="font-medium">{post.author}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF0B55] rounded-2xl transition-colors duration-300 pointer-events-none" />
    </div>
  );

  const BlogModal = () => {
    if (!selectedBlog) return null;

    return (
      <div 
        className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeModal}
      >
        <div 
          className={`bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
            isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative">
            <img 
              src={selectedBlog.image} 
              alt={selectedBlog.title}
              className="w-full h-64 object-cover"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-[#CF0F47] text-white text-sm font-semibold rounded-full">
                {selectedBlog.category}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#000000] mb-4">
              {selectedBlog.title}
            </h1>
            
            {/* Author and meta info */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF0B55] to-[#CF0F47] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {selectedBlog.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{selectedBlog.author}</div>
                  <div className="text-sm text-gray-500">{selectedBlog.date}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {selectedBlog.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedBlog.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#FFDEDE] text-[#CF0F47] text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {selectedBlog.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section 
        id="blogs" 
        className="mx-auto py-20  relative overflow-hidden w-[80%]"
        ref={sectionRef}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF0B55]/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#CF0F47]/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block relative">
              <h2 className="text-5xl font-bold text-[#000000]  relative">
                Our Latest 
                <span className="text-[#CF0F47] ml-2 relative">
                  Blogs
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] rounded-full transform scale-x-0 animate-scaleX" 
                       style={{ animationDelay: '800ms', animationFillMode: 'both' }} />
                </span>
              </h2>
            </div>
            
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
               style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-[#CF0F47] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[#FFDEDE] border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#CF0F47] text-white hover:bg-[#FF0B55] transform hover:scale-110'
                }`}
              >
                ←
              </button>
              
              <div className="text-center">
                <span className="text-sm text-gray-500">
                  Showing {currentIndex + 1}-{Math.min(currentIndex + visiblePosts, filteredPosts.length)} of {filteredPosts.length}
                </span>
              </div>
              
              <button
                onClick={handleNext}
                disabled={currentIndex + visiblePosts >= filteredPosts.length}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentIndex + visiblePosts >= filteredPosts.length 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#CF0F47] text-white hover:bg-[#FF0B55] transform hover:scale-110'
                }`}
              >
                →
              </button>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {filteredPosts
                .slice(currentIndex, currentIndex + visiblePosts)
                .map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(filteredPosts.length / visiblePosts) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * visiblePosts)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / visiblePosts) === index
                      ? 'bg-[#CF0F47] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      <BlogModal />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleX {
          animation: scaleX 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}