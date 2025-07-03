"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mock API functions (replace with your actual imports)
const postTask = async (email, subject, message) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};

const axios = {
  post: async (url, data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }
};

import Button from './Button';

// Simple Icons
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    Email: '',
    subject: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [sent]);

  async function handleSubmit(e) { 
    e.preventDefault();
    if (formData.Email.trim() === "" || formData.subject.trim() === "" || formData.message.trim() === "") {
      setErrorMessage("Please fill all the fields");
      return;
    }

    try {
      setSending(true);
      await Promise.all([
        postTask(formData.Email, formData.subject, formData.message),
        axios.post("https://formspree.io/f/mbjnwvgl", formData)
      ]);
      
      setSent(true);
      setFormData({
        Email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setErrorMessage('Failed to send email. Please try again later.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-base font-medium text-gray-900">contactayusharma@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-base font-medium text-gray-900">Based in India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-3">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ayu-sharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                >
                  <GitHubIcon />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send me a message
            </h2>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="pt-2 rounded-lg">
                <Button
                  type="submit"
                  loading={sending}
                  icon={<SendIcon />}
                  onClick={handleSubmit}
                  variant="primary"
                  size="md"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              
              {/* Status Messages */}
              <div className="min-h-[50px] flex items-center justify-center">
                {sent && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center p-3 bg-green-100 text-green-800 rounded-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Message sent successfully!</span>
                  </motion.div>
                )}
                
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center p-3 bg-red-100 text-red-800 rounded-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;