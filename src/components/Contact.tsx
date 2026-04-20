"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { TextReveal } from "./TextReveal";
import { MagneticButton } from "./MagneticButton";
import { Mail, Phone, Linkedin, Github, Send, MapPin, ArrowUpRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual-only form — no backend
    const mailtoLink = `mailto:mg65028@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.open(mailtoLink, "_blank");
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: "mg65028@gmail.com", href: "mailto:mg65028@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9129895001", href: "tel:9129895001" },
    { icon: Linkedin, label: "LinkedIn", value: "Mohit Gupta", href: "https://linkedin.com/in/mohit-gupta-09b500314" },
    { icon: Github, label: "GitHub", value: "MohitGupta0001", href: "https://github.com/MohitGupta0001" },
  ];

  return (
    <section id="contact" className="relative z-20 bg-black py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-900">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d2ff]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] text-[#00d2ff] uppercase mb-4 font-medium"
          >
            Get in Touch
          </motion.p>
          <TextReveal
            text="Let's create something extraordinary."
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.9]"
            type="words"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] w-24 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mt-8 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p variants={fadeInUp} className="text-lg text-neutral-400 font-light mb-12 max-w-md">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>

            <div className="space-y-6">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-[#00d2ff]/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  data-cursor-text={link.label}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#00d2ff]/10 flex items-center justify-center transition-colors">
                    <link.icon className="w-5 h-5 text-neutral-400 group-hover:text-[#00d2ff] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500 tracking-wider uppercase font-medium">{link.label}</p>
                    <p className="text-white font-medium">{link.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-[#00d2ff] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-3 text-sm text-neutral-500">
              <MapPin className="w-4 h-4 text-[#00d2ff]" />
              <span>Gandhi Nagar, Mahoba, Uttar Pradesh</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isFocused === "name" || formState.name
                      ? "top-1 text-xs text-[#00d2ff]"
                      : "top-4 text-sm text-neutral-500"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused("name")}
                  onBlur={() => setIsFocused(null)}
                  className="w-full pt-6 pb-3 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all outline-none"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isFocused === "email" || formState.email
                      ? "top-1 text-xs text-[#00d2ff]"
                      : "top-4 text-sm text-neutral-500"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused("email")}
                  onBlur={() => setIsFocused(null)}
                  className="w-full pt-6 pb-3 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all outline-none"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  isFocused === "subject" || formState.subject
                    ? "top-1 text-xs text-[#00d2ff]"
                    : "top-4 text-sm text-neutral-500"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                onFocus={() => setIsFocused("subject")}
                onBlur={() => setIsFocused(null)}
                className="w-full pt-6 pb-3 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all outline-none"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  isFocused === "message" || formState.message
                    ? "top-1 text-xs text-[#00d2ff]"
                    : "top-4 text-sm text-neutral-500"
                }`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setIsFocused("message")}
                onBlur={() => setIsFocused(null)}
                rows={5}
                className="w-full pt-6 pb-3 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all outline-none resize-none"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <MagneticButton strength={20}>
                <button
                  type="submit"
                  className="group w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 flex items-center justify-center gap-3"
                  data-cursor-text="Send"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </MagneticButton>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
