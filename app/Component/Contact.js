"use client";

import { useState, useEffect } from "react";
import { postTask } from "../api/airtable-api";
import axios from "axios";
import { IoLogoLinkedin, IoMail, IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "./Button";

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
      // Combine both API calls into a single Promise.all
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
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex cursor-pointer items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <IoMail className="text-xl" />
                </div>
                <span>contactayusharma@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <IoLocation className="text-xl" />
                </div>
                <span>Based in India</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  <IoLogoLinkedin className="text-xl text-gray-900" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ayu-sharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  <FaGithub className="text-xl text-gray-900" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
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
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
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
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  loading={sending}
                  icon={<FiSend />}
                >
                  Send Message
                </Button>
              </div>
              
              {/* Status Messages */}
              <div className="h-10">
                {sent && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center p-3 bg-gray-100 text-gray-900 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully!
                  </motion.div>
                )}
                
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center p-3 bg-gray-100 text-gray-900 rounded-lg"
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