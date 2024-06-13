"use client";

import { useState, useEffect } from "react";
import React from 'react';
import { postTask } from "../api/airtable-api";
import axios from "axios";
import Navbar from "./Navbar";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


function Contact() {
  const [formData, setFormData] = useState({
    Email: '',
    subject: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 2000); 
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
        console.error('Error sending email:', error.message);
        setErrorMessage('Failed to send email. Please try again later.');
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <>
      <div className="py-20 lg:px-16">
        <div className="grid lg:grid-cols-2 custom:grid-cols-1 custom:grid gap-10 items-start">
          <div className="flex flex-col lg:max-w-xl">
            <h1 className="text-black text-3xl lg:text-4xl font-bold pt-3">Get In Touch</h1>
            <p className="text-black font-thin text-sm pb-3">
  Thank you for visiting my portfolio. Whether you&apos;re interested in discussing potential collaborations, have inquiries about my work, or simply want to say hello, I&apos;m excited to connect with you. Feel free to reach out through the contact form below, drop me an email, or connect with me on social media. <br />
  Additionally, I&apos;m actively seeking new opportunities to grow and contribute. If you have any exciting projects, job openings or internship openings, or partnership opportunities, I&apos;d love to hear about them. Let&apos;s explore how we can work together to achieve our goals. Looking forward to connecting with you!
</p>
            <div className="flex gap-3 items-center">
            <a target='_blank' href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" class="text-3xl text-gray-500" title='LinkedIn'>
            <IoLogoLinkedin />
          </a>
          <a target='_blank' href="https://github.com/ayu-sharma" class="text-3xl text-gray-500" title='LinkedIn'>
          <FaGithub />
          </a>
          </div>
          </div>
          <div className="flex flex-col justify-center items-center px-8 py-3 bg-light rounded-lg" style={{borderRadius: "15px"}}>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full text-black">
              <div className="flex flex-col justify-between gap-1">
                <label htmlFor="Email">Your Email:</label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="john@example.com"
                  className="rounded-md py-3 px-2 bg-white focus:outline-none font-thin text-sm"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col justify-between gap-1 py-3">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject..."
                  className="rounded-md py-3 px-2 font-thin text-sm bg-white focus:outline-none"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col justify-between gap-1 py-3">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="rounded-md py-3 px-2 font-thin text-sm bg-white focus:outline-none"
                  style={{ resize: 'none' }}
                  placeholder="Describe the subject..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className={`mt-3 px-5 py-2 mx-auto bg-black text-white hover:opacity-75 ${sending ? "cursor-not-allowed" : "cursor-pointer"}`}
                style={{ borderRadius: "15px" }}
                disabled={sending}
              >
                {sending ? "Submitting" : "Submit"}
              </button>
              <div className="h-6 py-2">
              {sent && (
                <p className="text-center text-green-400 pb-4">Your email has been successfully sent!</p>
              )}
              {errorMessage && (
                <p className="text-center text-red-500 pb-4">{errorMessage}</p>
              )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
