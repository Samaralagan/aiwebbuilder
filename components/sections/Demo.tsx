'use client';

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Sparkles,
  Code,
  Eye,
  Clipboard,
  Loader2,
  Download,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Zap,
  FileText,
  Palette,
  File,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  Layout,
  Component,
  Package
} from "lucide-react";

// Mock data for website generation
const websiteTemplates = {
  'digital marketing': {
    name: "Digital Marketing Agency Website",
    description: "Professional website for a digital marketing agency with comprehensive service offerings and client portfolio.",
    pages: ["Homepage", "Services", "About Us", "Case Studies", "Blog", "Contact", "Pricing"],
    components: ["Hero Section", "Service Cards", "Team Profiles", "Testimonials", "Newsletter Signup", "Contact Form"],
    features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Blog System", "Portfolio Gallery", "Social Media Integration"],
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    structure: {
      'index.html': {
        type: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DigitalPro Agency - Expert Digital Marketing Solutions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">DigitalPro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="container">
            <div class="row align-items-center min-vh-100">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold text-white mb-4">
                        Grow Your Business with Expert Digital Marketing
                    </h1>
                    <p class="lead text-white-50 mb-4">
                        We help small businesses dominate their market with proven SEO, PPC, and social media strategies.
                    </p>
                    <div class="d-flex gap-3">
                        <a href="#contact" class="btn btn-warning btn-lg">Get Free Consultation</a>
                        <a href="#services" class="btn btn-outline-light btn-lg">Our Services</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-image">
                        <img src="https://via.placeholder.com/600x400/007bff/ffffff?text=Digital+Marketing" 
                             alt="Digital Marketing" class="img-fluid rounded shadow-lg">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold">Our Services</h2>
                <p class="lead">Comprehensive digital marketing solutions for your business</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="service-card h-100">
                        <div class="card-body text-center">
                            <div class="service-icon mb-3">🔍</div>
                            <h5 class="card-title">SEO Optimization</h5>
                            <p class="card-text">Boost your search rankings and drive organic traffic</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card h-100">
                        <div class="card-body text-center">
                            <div class="service-icon mb-3">💰</div>
                            <h5 class="card-title">PPC Advertising</h5>
                            <p class="card-text">Maximize ROI with targeted Google Ads campaigns</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card h-100">
                        <div class="card-body text-center">
                            <div class="service-icon mb-3">📱</div>
                            <h5 class="card-title">Social Media</h5>
                            <p class="card-text">Build your brand presence across all social platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="text-center mb-5">
                        <h2 class="display-5 fw-bold">Get Started Today</h2>
                        <p class="lead">Ready to grow your business? Let's talk!</p>
                    </div>
                    <form class="contact-form">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="Your Name" required>
                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control" placeholder="Your Email" required>
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="Company Name">
                            </div>
                            <div class="col-12">
                                <textarea class="form-control" rows="4" placeholder="Tell us about your project" required></textarea>
                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>`
      },
      'styles.css': {
        type: 'css',
        content: `:root {
    --primary-color: #007bff;
    --secondary-color: #ffc107;
    --dark-color: #212529;
    --light-color: #f8f9fa;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

.hero-section {
    background: linear-gradient(135deg, var(--primary-color) 0%, #0056b3 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.service-card {
    background: white;
    border: none;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.contact-form {
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    padding: 12px 30px;
    border-radius: 50px;
}

.btn-warning {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    color: var(--dark-color);
    padding: 12px 30px;
    border-radius: 50px;
}

.navbar-brand {
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    .hero-section {
        text-align: center;
        padding: 2rem 0;
    }
    
    .service-card {
        margin-bottom: 2rem;
    }
}`
      },
      'script.js': {
        type: 'js',
        content: `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
});

// Add active class to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});`
      },
      'about.html': {
        type: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - DigitalPro Agency</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container py-5">
        <h1 class="text-center mb-5">About DigitalPro Agency</h1>
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <p class="lead">We are a team of digital marketing experts dedicated to helping small businesses succeed online.</p>
                <p>With over 10 years of combined experience, we specialize in SEO, PPC, and social media marketing.</p>
            </div>
        </div>
    </div>
</body>
</html>`
      }
    }
  },
  'restaurant': {
    name: "Restaurant Website",
    description: "Modern restaurant website with online menu, reservations, and elegant design.",
    pages: ["Homepage", "Menu", "About", "Reservations", "Contact", "Gallery"],
    components: ["Hero Banner", "Menu Cards", "Reservation Form", "Image Gallery", "Contact Info"],
    features: ["Online Menu", "Reservation System", "Photo Gallery", "Contact Forms", "Location Map"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    structure: {
      'index.html': {
        type: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bella Vista Restaurant - Fine Dining Experience</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <h1 class="logo">Bella Vista</h1>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h2>Welcome to Bella Vista</h2>
            <p>Experience culinary excellence in an elegant atmosphere</p>
            <button class="cta-button">Make a Reservation</button>
        </div>
    </section>

    <section id="menu" class="menu-section">
        <div class="container">
            <h2>Our Menu</h2>
            <div class="menu-grid">
                <div class="menu-item">
                    <h3>Appetizers</h3>
                    <p>Fresh seasonal starters</p>
                    <span class="price">$12-18</span>
                </div>
                <div class="menu-item">
                    <h3>Main Courses</h3>
                    <p>Expertly prepared entrees</p>
                    <span class="price">$28-45</span>
                </div>
                <div class="menu-item">
                    <h3>Desserts</h3>
                    <p>Sweet endings to your meal</p>
                    <span class="price">$8-12</span>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`
      },
      'styles.css': {
        type: 'css',
        content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

.navbar {
    background: rgba(0,0,0,0.9);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo {
    color: #d4af37;
    font-size: 2rem;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #d4af37;
}

.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://via.placeholder.com/1920x1080/8B4513/ffffff?text=Restaurant+Interior') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-content h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #d4af37;
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.cta-button {
    background: #d4af37;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.cta-button:hover {
    background: #b8941f;
}

.menu-section {
    padding: 5rem 0;
    background: #f9f9f9;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.menu-section h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    color: #333;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.menu-item {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
}

.menu-item h3 {
    color: #d4af37;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.price {
    font-weight: bold;
    color: #333;
    font-size: 1.2rem;
}`
      },
      'script.js': {
        type: 'js',
        content: `// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reservation button
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Reservation system coming soon! Call us at (555) 123-4567');
});`
      }
    }
  },
  'portfolio': {
    name: "Portfolio Website",
    description: "Creative portfolio website showcasing projects and skills with modern design.",
    pages: ["Homepage", "Portfolio", "About", "Services", "Contact"],
    components: ["Hero Section", "Project Gallery", "Skills Section", "Contact Form"],
    features: ["Project Showcase", "Responsive Grid", "Contact Forms", "Smooth Animations"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    structure: {
      'index.html': {
        type: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Johnson - Creative Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">AJ</a>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Alex Johnson</h1>
            <h2>Creative Designer & Developer</h2>
            <p>Crafting beautiful digital experiences</p>
            <a href="#portfolio" class="btn">View My Work</a>
        </div>
    </section>

    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2>My Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/400x300/4A90E2/ffffff?text=Project+1" alt="Project 1">
                    <div class="overlay">
                        <h3>E-commerce Website</h3>
                        <p>Modern online store design</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/400x300/7ED321/ffffff?text=Project+2" alt="Project 2">
                    <div class="overlay">
                        <h3>Mobile App UI</h3>
                        <p>Clean and intuitive interface</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/400x300/F5A623/ffffff?text=Project+3" alt="Project 3">
                    <div class="overlay">
                        <h3>Brand Identity</h3>
                        <p>Complete branding solution</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`
      },
      'styles.css': {
        type: 'css',
        content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.nav-logo {
    font-size: 2rem;
    font-weight: bold;
    color: #4A90E2;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #4A90E2;
}

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
}

.hero-content h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
}

.btn {
    display: inline-block;
    background: white;
    color: #4A90E2;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.3s;
}

.btn:hover {
    transform: translateY(-2px);
}

.portfolio {
    padding: 5rem 0;
    background: #f8f9fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.portfolio h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    color: #333;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.portfolio-item:hover {
    transform: translateY(-5px);
}

.portfolio-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s;
}

.portfolio-item:hover .overlay {
    transform: translateY(0);
}

.overlay h3 {
    margin-bottom: 0.5rem;
}`
      },
      'script.js': {
        type: 'js',
        content: `// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
    }
});`
      }
    }
  }
};

export default function ComprehensiveAIWebsiteBuilder() {
  const [prompt, setPrompt] = useState("");
  const [generatedProject, setGeneratedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [previewDevice, setPreviewDevice] = useState('desktop');
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFile, setSelectedFile] = useState('');
  const [expandedFolders, setExpandedFolders] = useState({});
  const [generationSteps, setGenerationSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const promptTextareaRef = useRef(null);

  useEffect(() => {
    if (generatedProject && !selectedFile) {
      // Auto-select index.html when project is generated
      if (generatedProject.structure['index.html']) {
        setSelectedFile('index.html');
      }
    }
  }, [generatedProject, selectedFile]);

  const simulateGenerationSteps = () => {
    const steps = [
      "🧠 Analyzing project requirements...",
      "🏗️ Planning website architecture...", 
      "📋 Determining necessary pages...",
      "🎨 Designing component structure...",
      "📝 Generating content strategy...",
      "💻 Building HTML structure...",
      "🎭 Creating CSS styling...",
      "⚡ Adding JavaScript functionality...",
      "📱 Implementing responsive design...",
      "🔧 Adding interactive features...",
      "✨ Final optimizations..."
    ];
    
    setGenerationSteps(steps);
    setCurrentStep(0);
    
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    
    return stepInterval;
  };

  // Mock website generation function (replaces API call)
  const generateWebsiteMock = (prompt) => {
    const lowerPrompt = prompt.toLowerCase();
    
    // Determine which template to use based on prompt keywords
    let template = websiteTemplates['digital marketing']; // default
    
    if (lowerPrompt.includes('restaurant') || lowerPrompt.includes('food') || lowerPrompt.includes('dining')) {
      template = websiteTemplates['restaurant'];
    } else if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('designer') || lowerPrompt.includes('developer')) {
      template = websiteTemplates['portfolio'];
    }
    
    return template;
  };

  const generateWebsite = async () => {
    if (!prompt.trim()) {
      setError('Please describe what kind of website you want to create');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedProject(null);
    setCopySuccess(false);
    setCurrentStep(0);
    setSelectedFile('');
    setActiveTab('overview');
    
    const stepInterval = simulateGenerationSteps();

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 8000));
      
      // Generate mock website based on prompt
      const mockProject = generateWebsiteMock(prompt);
      
      if (mockProject && mockProject.structure) {
        setGeneratedProject(mockProject);
        setExpandedFolders({ "/": true });
        setActiveTab('overview');
      } else {
        throw new Error('Failed to generate website structure');
      }
    } catch (err) {
      console.error('Generation Error:', err);
      setError(`Error generating website: ${err.message}`);
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
      setCurrentStep(0);
      setGenerationSteps([]);
    }
  };

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    const name = filename.toLowerCase();
    
    if (name.includes('component') || name.includes('comp')) {
      return <Component className="w-4 h-4 text-cyan-400" />;
    }
    
    switch (ext) {
      case 'html':
        return <FileText className="w-4 h-4 text-orange-400" />;
      case 'css':
        return <Palette className="w-4 h-4 text-blue-400" />;
      case 'js':
        return <Code className="w-4 h-4 text-yellow-400" />;
      case 'jsx':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'vue':
        return <Code className="w-4 h-4 text-green-400" />;
      case 'ts':
        return <Code className="w-4 h-4 text-blue-600" />;
      case 'tsx':
        return <Code className="w-4 h-4 text-blue-500" />;
      case 'json':
        return <FileText className="w-4 h-4 text-yellow-600" />;
      case 'md':
        return <FileText className="w-4 h-4 text-gray-400" />;
      default:
        return <File className="w-4 h-4 text-gray-400" />;
    }
  };

  const getFolderStructure = (structure) => {
    const folders = { root: { files: [], folders: {} } };
    
    Object.keys(structure).forEach(path => {
      const parts = path.split('/').filter(part => part);
      let current = folders.root;
      
      // Navigate through folder structure
      for (let i = 0; i < parts.length - 1; i++) {
        const folderName = parts[i];
        if (!current.folders[folderName]) {
          current.folders[folderName] = { files: [], folders: {} };
        }
        current = current.folders[folderName];
      }
      
      // Add file to appropriate folder
      const fileName = parts[parts.length - 1] || path;
      current.files.push({ name: fileName, path, ...structure[path] });
    });
    
    return folders.root;
  };

  const FileTreeNode = ({ name, node, level = 0, path = "" }) => {
    const fullPath = path ? `${path}/${name}` : name;
    const isExpanded = expandedFolders[fullPath];
    const hasChildren = Object.keys(node.folders).length > 0;
    
    const toggleFolder = () => {
      setExpandedFolders(prev => ({
        ...prev,
        [fullPath]: !prev[fullPath]
      }));
    };

    return (
      <div>
        {hasChildren && (
          <div
            onClick={toggleFolder}
            className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors hover:bg-gray-800 text-gray-300`}
            style={{ paddingLeft: `${level * 12 + 8}px` }}
          >
            {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <FolderOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm">{name}</span>
          </div>
        )}
        
        {isExpanded && Object.entries(node.folders).map(([folderName, folderNode]) => (
          <FileTreeNode 
            key={folderName} 
            name={folderName} 
            node={folderNode} 
            level={level + 1}
            path={fullPath}
          />
        ))}
        
        {node.files.map(file => (
          <div
            key={file.path}
            onClick={() => setSelectedFile(file.path)}
            className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${
              selectedFile === file.path
                ? 'bg-[#FF0B55] text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
            style={{ paddingLeft: `${(level + (hasChildren ? 1 : 0)) * 12 + 8}px` }}
          >
            {getFileIcon(file.name)}
            <span className="text-sm truncate">{file.name}</span>
          </div>
        ))}
      </div>
    );
  };

  const FileTree = () => {
    if (!generatedProject?.structure) return null;
    
    const folderStructure = getFolderStructure(generatedProject.structure);
    
    return (
      <div className="bg-gray-900 border-r border-gray-700 p-3 space-y-1 h-full overflow-auto">
        <div className="flex items-center gap-2 mb-3">
          <Package className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-white">{generatedProject.name}</span>
        </div>
        
        <FileTreeNode name="root" node={folderStructure} />
      </div>
    );
  };

  const ProjectOverview = () => {
    if (!generatedProject) return null;

    return (
      <div className="p-6 space-y-6 h-full overflow-auto bg-gray-900">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">{generatedProject.name}</h3>
          <p className="text-gray-300">{generatedProject.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {generatedProject.pages?.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Layout className="w-5 h-5" />
                Pages ({generatedProject.pages.length})
              </h4>
              <div className="space-y-2">
                {generatedProject.pages.map((page, index) => (
                  <div key={index} className="bg-gray-800 px-4 py-3 rounded-lg text-gray-300 border-l-4 border-[#FF0B55]">
                    {page}
                  </div>
                ))}
              </div>
            </div>
          )}

          {generatedProject.components?.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Component className="w-5 h-5" />
                Components ({generatedProject.components.length})
              </h4>
              <div className="space-y-2">
                {generatedProject.components.map((component, index) => (
                  <div key={index} className="bg-gray-800 px-4 py-3 rounded-lg text-gray-300 border-l-4 border-cyan-500">
                    {component}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {generatedProject.features?.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Features & Functionality
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {generatedProject.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300 bg-gray-800 px-4 py-3 rounded-lg">
                  <div className="w-2 h-2 bg-[#FF0B55] rounded-full flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {generatedProject.techStack?.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Package className="w-5 h-5" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {generatedProject.techStack.map((tech, index) => (
                <span key={index} className="bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] text-white px-3 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-3">📝 Demo Note</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            This is a demo version with pre-built templates. The actual AI website builder would generate custom code based on your specific requirements. 
            Try keywords like "restaurant", "portfolio", or "digital marketing" to see different templates.
          </p>
        </div>
      </div>
    );
  };

  const CodeEditor = () => {
    if (!selectedFile || !generatedProject?.structure[selectedFile]) {
      return (
        <div className="h-full flex items-center justify-center text-gray-400 bg-gray-900">
          <div className="text-center">
            <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">Select a file to view its contents</p>
            <p className="text-sm">Choose from the file tree on the left</p>
          </div>
        </div>
      );
    }

    const file = generatedProject.structure[selectedFile];
    
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2">
            {getFileIcon(selectedFile)}
            <span className="text-sm font-medium text-white">{selectedFile}</span>
          </div>
          <button
            onClick={() => copyToClipboard(file.content)}
            className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm flex items-center gap-1 transition-colors"
          >
            <Clipboard className="w-3 h-3" />
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-gray-900">
          <pre className="text-gray-100 p-4 text-sm font-mono leading-relaxed">
            <code>{file.content}</code>
          </pre>
        </div>
      </div>
    );
  };

  const PreviewPanel = () => {
    if (!generatedProject?.structure) return null;

    const getMainContent = () => {
      // For HTML projects, show index.html
      const indexFile = generatedProject.structure['index.html'];
      if (indexFile) return indexFile.content;
      
      // Find any HTML file
      for (const [path, file] of Object.entries(generatedProject.structure)) {
        if (file.type === 'html') return file.content;
      }
      
      return '<div style="padding: 20px;"><h2>Project Generated Successfully</h2><p>Select a file from the file tree to view its contents.</p></div>';
    };

    const deviceStyles = {
      desktop: { width: '100%', height: '100%' },
      tablet: { width: '768px', height: '100%', margin: '0 auto', border: '2px solid #374151', borderRadius: '12px' },
      mobile: { width: '375px', height: '667px', margin: '0 auto', border: '2px solid #374151', borderRadius: '24px' }
    };

    return (
      <div className="h-full flex flex-col">
        <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
          <span className="text-gray-300 text-sm font-medium">Live Preview</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`p-2 rounded transition-colors ${previewDevice === 'desktop' ? 'bg-[#FF0B55] text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPreviewDevice('tablet')}
              className={`p-2 rounded transition-colors ${previewDevice === 'tablet' ? 'bg-[#FF0B55] text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`p-2 rounded transition-colors ${previewDevice === 'mobile' ? 'bg-[#FF0B55] text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <div style={deviceStyles[previewDevice]} className="bg-white shadow-xl">
            <iframe
              srcDoc={getMainContent()}
              title="Website Preview"
              className="w-full h-full border-0 rounded-lg"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    );
  };

  const copyToClipboard = useCallback((content) => {
    navigator.clipboard.writeText(content);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  }, []);

  const downloadProject = () => {
    if (!generatedProject?.structure) return;
    
    // Create and download individual files
    Object.entries(generatedProject.structure).forEach(([filename, fileData]) => {
      let content = fileData.content;
      let mimeType = 'text/plain';
      
      // Set appropriate MIME types
      switch (fileData.type) {
        case 'html':
          mimeType = 'text/html';
          break;
        case 'css':
          mimeType = 'text/css';
          break;
        case 'js':
        case 'jsx':
          mimeType = 'text/javascript';
          break;
        case 'json':
          mimeType = 'application/json';
          break;
        case 'vue':
          mimeType = 'text/plain';
          break;
        case 'ts':
        case 'tsx':
          mimeType = 'text/typescript';
          break;
      }
      
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  const LoadingScreen = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-6 p-8">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#FF0B55] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-[#FF0B55] animate-pulse" />
        </div>
      </div>
      
      {generationSteps.length > 0 && (
        <div className="text-center space-y-4 max-w-lg">
          <h3 className="text-2xl font-bold text-white">
            Building Your Complete Website
          </h3>
          <p className="text-[#FF0B55] font-medium text-lg">
            {generationSteps[currentStep]}
          </p>
          <div className="w-full max-w-md bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] h-3 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${((currentStep + 1) / generationSteps.length) * 100}%`
              }}
            />
          </div>
          <p className="text-sm text-gray-400">
            Step {currentStep + 1} of {generationSteps.length}
          </p>
        </div>
      )}
    </div>
  );

  const hasProject = generatedProject && Object.keys(generatedProject.structure || {}).length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#FF0B55]" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              AI Website Builder Demo
            </h1>
            <Globe className="w-8 h-8 text-[#FF0B55]" />
          </div>
          <p className="text-center text-gray-400 mt-2 max-w-3xl mx-auto">
            Static Demo Version - Try keywords like "restaurant", "portfolio", or "digital marketing"
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        {/* Input Section */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-[#CF0F47] to-[#FF0B55] p-6 rounded-xl shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="text-white" size={24} />
                <h2 className="text-2xl font-bold text-white">
                  Describe Your Website Project
                </h2>
              </div>
              <p className="text-white/90 text-sm">
                This is a demo version. Try keywords like "restaurant", "portfolio", or "digital marketing" to see different templates.
              </p>

              <div className="space-y-4">
                <textarea
                  ref={promptTextareaRef}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: Create a professional website for a digital marketing agency targeting small businesses..."
                  className="w-full h-40 p-4 bg-black/20 border border-white/30 rounded-lg text-white placeholder-white/60 resize-none focus:outline-none focus:border-white/50 text-sm leading-relaxed"
                  maxLength={2000}
                />
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white/70">
                    {prompt.length}/2000 characters
                  </div>
                  <button
                    onClick={generateWebsite}
                    disabled={isLoading || !prompt.trim()}
                    className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Building Website...</span>
                      </>
                    ) : (
                      <>
                        <Zap size={20} />
                        <span>Generate Demo Website</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg text-sm">
                  <strong>Error:</strong> {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl min-h-[700px]">
          {/* Tabs */}
          {hasProject && !isLoading && (
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900 rounded-t-xl">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'overview'
                      ? 'bg-[#FF0B55] text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Layout size={16} />
                  Project Overview
                </button>
                <button
                  onClick={() => setActiveTab('files')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'files'
                      ? 'bg-[#FF0B55] text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Code size={16} />
                  Source Code
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'preview'
                      ? 'bg-[#FF0B55] text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Eye size={16} />
                  Live Preview
                </button>
              </div>
              <button
                onClick={downloadProject}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 shadow-lg"
              >
                <Download size={16} />
                Download Files
              </button>
            </div>
          )}

          {/* Content */}
          <div className="h-[650px] overflow-hidden">
            {isLoading && <LoadingScreen />}

            {error && !isLoading && !hasProject && (
              <div className="h-full flex items-center justify-center">
                <div className="text-red-200 bg-red-900/40 p-8 rounded-xl border border-red-700 max-w-md text-center">
                  <div className="font-semibold mb-3 text-lg">Generation Failed</div>
                  <div className="text-sm leading-relaxed">{error}</div>
                </div>
              </div>
            )}

            {hasProject && !isLoading && activeTab === 'overview' && <ProjectOverview />}
            
            {hasProject && !isLoading && activeTab === 'files' && (
              <div className="flex h-full">
                <div className="w-1/3 min-w-[280px] border-r border-gray-700">
                  <FileTree />
                </div>
                <div className="flex-1">
                  <CodeEditor />
                </div>
              </div>
            )}

            {hasProject && !isLoading && activeTab === 'preview' && <PreviewPanel />}

            {!hasProject && !error && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#CF0F47] to-[#FF0B55] rounded-full flex items-center justify-center mb-8">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  AI Website Builder Demo
                </h3>
                <p className="text-gray-400 max-w-2xl mb-8 text-lg leading-relaxed">
                  This is a demo version with pre-built templates. Try keywords like "restaurant", "portfolio", or "digital marketing" to see different website templates.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-500 max-w-2xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-3 h-3 bg-[#FF0B55] rounded-full"></div>
                    <span>Complete Page Structure</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-3 h-3 bg-[#FF0B55] rounded-full"></div>
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-3 h-3 bg-[#FF0B55] rounded-full"></div>
                    <span>Interactive Features</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-3 h-3 bg-[#FF0B55] rounded-full"></div>
                    <span>Download Source Code</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}