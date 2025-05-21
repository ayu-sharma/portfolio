"use client";

import { useState, useEffect } from "react";
import { postTask } from "../api/airtable-api";
import axios from "axios";
import { IoLogoLinkedin, IoMail, IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

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
    } else {
      try {
        setSending(true);
        await postTask(formData.Email, formData.subject, formData.message);
        await axios.post("https://formspree.io/f/mbjnwvgl", formData);
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
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="mt-4 text-gray-400">
            Let's connect and explore opportunities to collaborate together
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex cursor-pointer items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <div className="p-3 bg-white/10 rounded-lg">
                  <IoMail className="text-xl" />
                </div>
                <span>contactayusharma@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="p-3 bg-white/10 rounded-lg">
                  <IoLocation className="text-xl" />
                </div>
                <span>Based in India</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                >
                  <IoLogoLinkedin className="text-xl text-white" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ayu-sharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                >
                  <FaGithub className="text-xl text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending}
                  className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Status Messages */}
              <div className="h-10">
                {sent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center p-3 bg-green-500/20 text-green-400 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully!
                  </motion.div>
                )}
                
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center p-3 bg-red-500/20 text-red-400 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errorMessage}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;