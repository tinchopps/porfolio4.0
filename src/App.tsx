import React, { useEffect } from 'react';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import MoreAbout from './components/MoreAbout';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animation styles
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
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
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Light theme styles */
      .light {
        --bg-primary: #f8f9fc;
        --bg-secondary: #ffffff;
        --text-primary: #2C3E50;
        --text-secondary: #4A5568;
        --border-color: #E0E0E0;
        --accent-primary: #8B5CF6;
        --accent-link: #2563EB;
      }
      
      .light body {
        background: #f8f9fc;
        color: #2C3E50;
      }
      
      .light .bg-gray-900 {
        background: #f8f9fc !important;
      }
      
      .light .bg-gray-800 {
        background: #ffffff !important;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
        border: 1px solid #E0E0E0 !important;
      }
      
      .light .text-white {
        color: #2C3E50 !important;
      }
      
      .light .text-gray-300 {
        color: #4A5568 !important;
      }
      
      .light .text-gray-400 {
        color: #4A5568 !important;
      }
      
      .light .border-gray-700 {
        border-color: #E0E0E0 !important;
      }
      
      .light .border-gray-800 {
        border-color: #E0E0E0 !important;
      }
      
      .light .bg-gray-800\\/50 {
        background: rgba(255, 255, 255, 0.9) !important;
        backdrop-filter: blur(10px) !important;
        border: 1px solid #E0E0E0 !important;
      }
      
      .light .bg-gray-800\\/30 {
        background: rgba(255, 255, 255, 0.8) !important;
        backdrop-filter: blur(8px) !important;
        border: 1px solid #E0E0E0 !important;
      }
      
      .light .text-purple-400 {
        color: #8B5CF6 !important;
      }
      
      .light .text-blue-400 {
        color: #2563EB !important;
      }
      
      .light .hover\\:text-purple-400:hover {
        color: #8B5CF6 !important;
      }
      
      .light .hover\\:border-purple-500:hover {
        border-color: #8B5CF6 !important;
      }
      
      .light .hover\\:border-purple-400:hover {
        border-color: #8B5CF6 !important;
      }
      
      /* Status indicators */
      .status-indicator {
        position: relative;
        display: inline-flex;
        align-items: center;
      }
      
      .status-indicator::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 8px;
        animation: pulse 2s infinite;
      }
      
      .status-indicator.in-progress::before {
        background-color: #F59E0B;
      }
      
      .status-indicator.completed::before {
        background-color: #10B981;
      }
      
      .status-indicator.draft::before {
        background-color: #6B7280;
      }
      
      /* Tooltip styles */
      .tooltip {
        position: relative;
        cursor: help;
      }
      
      .tooltip .tooltip-content {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1F2937;
        color: white;
        text-align: center;
        border-radius: 8px;
        padding: 12px 16px;
        z-index: 1000;
        font-size: 14px;
        white-space: nowrap;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s, visibility 0.3s;
      }
      
      .tooltip .tooltip-content::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #1F2937 transparent transparent transparent;
      }
      
      .tooltip:hover .tooltip-content {
        visibility: visible;
        opacity: 1;
      }
      
      .light .tooltip .tooltip-content {
        background-color: #2C3E50;
        color: white;
      }
      
      .light .tooltip .tooltip-content::after {
        border-color: #2C3E50 transparent transparent transparent;
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Enhanced button animations */
      .animate-bounce-subtle {
        animation: bounceSubtle 3s ease-in-out infinite;
      }
      
      .animate-bounce-subtle:hover {
        animation: bounceHover 0.6s ease-in-out;
      }
      
      .animate-bounce-subtle:active {
        animation: bounceClick 0.2s ease-in-out;
      }
      
      @keyframes bounceSubtle {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0) scale(1);
        }
        40% {
          transform: translateY(-3px) scale(1.02);
        }
        60% {
          transform: translateY(-1px) scale(1.01);
        }
      }
      
      @keyframes bounceHover {
        0% {
          transform: scale(1) translateY(0);
        }
        25% {
          transform: scale(1.05) translateY(-2px);
        }
        50% {
          transform: scale(1.1) translateY(-4px);
        }
        75% {
          transform: scale(1.08) translateY(-2px);
        }
        100% {
          transform: scale(1.1) translateY(0);
        }
      }
      
      @keyframes bounceClick {
        0% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1.1);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 light:bg-white text-white dark:text-white light:text-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <MoreAbout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;