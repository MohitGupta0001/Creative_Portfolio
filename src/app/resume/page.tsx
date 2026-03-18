"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, Linkedin, Github, MapPin, Briefcase, Code, GraduationCap, Award } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ResumePage() {
  return (
    <div className="bg-[#0a0e17] text-white min-h-screen font-sans selection:bg-[#00d2ff] selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="text-sm font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
            MG.
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="text-center pt-10 md:pt-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Mohit Gupta
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 font-light">
            Python & AI Student | Junior Software Developer
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white font-semibold text-lg hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="about"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-[#00d2ff]/50 hover:bg-white/10 transition-all duration-500 shadow-xl">
            <p className="text-lg leading-relaxed text-neutral-300">
              I am a Python and AI student currently working as a Junior Software Developer at 
              <strong className="text-white font-semibold"> Whitehats Technology Pvt Ltd</strong>. Passionate about creating efficient, scalable, and 
              user focused web application, I am gaining hands-on experience in software development, web 
              technologies, and real-world projects. With a strong foundation in programming and a drive for 
              continuous learning, I'm ready to tackle complex challenges and deliver innovative solutions.
            </p>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="experience"
        >
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-8 h-8 text-[#00d2ff]" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          
          <div className="space-y-6 pl-4 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-px before:bg-white/10">
            {/* Timeline Item 1 */}
            <motion.div variants={fadeInUp} className="relative pl-8">
              <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#00d2ff]/50 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[#00d2ff] font-bold text-xl mb-1">Junior Software Developer</h3>
                <p className="text-neutral-400 text-sm mb-4 font-medium tracking-wide">Present | Whitehats Technology Pvt Ltd</p>
                <p className="text-neutral-300">Gaining hands-on experience in software development and web technologies through real-world projects. Focused on Python and AI integration.</p>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div variants={fadeInUp} className="relative pl-8">
              <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-[#3a7bd5] shadow-[0_0_8px_#3a7bd5]"></div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#3a7bd5]/50 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-white font-bold text-xl mb-1">Deloitte Virtual Internship</h3>
                <p className="text-neutral-400 text-sm mb-4 font-medium tracking-wide">Job Simulation</p>
                <p className="text-neutral-300">Gained hands-on experience in professional consulting practices and technical problem-solving through real-world simulations.</p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div variants={fadeInUp} className="relative pl-8">
              <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-[#3a7bd5] shadow-[0_0_8px_#3a7bd5]"></div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#3a7bd5]/50 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-white font-bold text-xl mb-1">Citi – Technology Software Development</h3>
                <p className="text-neutral-400 text-sm mb-4 font-medium tracking-wide">Oct 2025 | Forage Job Simulation</p>
                <p className="text-neutral-300">Participated in virtual job simulation focusing on software development practices, agile methodologies, and financial technology solutions.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          id="projects"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
            <Code className="w-8 h-8 text-[#00d2ff]" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#00d2ff]/50 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#00d2ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure Password Manager</h3>
              <p className="text-neutral-400 leading-relaxed">
                Developed a secure password management application using Python, implementing encryption 
                techniques to safely store and retrieve user credentials. Features a user-friendly interface and 
                robust security measures.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#3a7bd5]/50 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#3a7bd5]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Coffee Machine Simulation</h3>
              <p className="text-neutral-400 leading-relaxed">
                Created a console-based Coffee Machine simulation using Python's Object-Oriented Programming 
                (OOP) concepts. Models drink selection, resource tracking, and payment handling.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="skills"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "JavaScript", "React.js", "Next.js", "Django", "FastAPI", "Flask", "AI/ML", "HTML/CSS", "OOP", "Git", "SQL"].map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium hover:bg-gradient-to-r hover:from-[#00d2ff] hover:to-[#3a7bd5] hover:text-white hover:border-transparent hover:shadow-[0_5px_15px_rgba(0,210,255,0.3)] hover:-translate-y-1 cursor-default transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Two-Column Grid: Certifications & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Certifications */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            id="certifications"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-[#00d2ff]" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
                Certifications
              </h2>
            </motion.div>
            <div className="space-y-4">
              {[
                { title: "AI Skills Passport", date: "Feb 2026 | EY & Microsoft" },
                { title: "NASSCOM Certification", date: "Feb 2026" },
                { title: "HP LIFE Certification", date: "Jan 2026" },
                { title: "Generative AI Studio", date: "Nov 2025 | Google Cloud" }
              ].map((cert, index) => (
                <motion.div key={index} variants={fadeInUp} className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d2ff]/30 transition-colors">
                  <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-sm text-neutral-400 font-medium tracking-wide">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            id="education"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-7 h-7 text-[#00d2ff]" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
                Education
              </h2>
            </motion.div>
            <div className="space-y-6 pl-4 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-px before:bg-white/10">
              <motion.div variants={fadeInUp} className="relative pl-6">
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
                <h3 className="font-bold text-lg mb-1">Bachelor of Arts (B.A.)</h3>
                <p className="text-sm text-[#00d2ff] font-medium tracking-wide mb-2">2024 graduation</p>
                <p className="text-neutral-400">Ram Shree Mahavidyalaya, Bundelkhand University, Jhansi</p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="relative pl-6">
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-white/30 border border-white/50"></div>
                <h3 className="font-bold text-lg mb-1">Senior Secondary (12th) - Science</h3>
                <p className="text-sm text-neutral-400 font-medium tracking-wide mb-2">2021 | D.A.V Inter College, Mahoba</p>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Contact Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="contact"
          className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent opacity-50"></div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00d2ff]/10 rounded-full blur-[80px] pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            <a href="mailto:mg65028@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0a0e17] border border-white/10 hover:border-[#00d2ff]/50 hover:bg-white/5 transition-all group">
              <Mail className="w-5 h-5 text-neutral-400 group-hover:text-[#00d2ff] transition-colors" />
              <span className="font-medium">mg65028@gmail.com</span>
            </a>
            <a href="tel:9129895001" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0a0e17] border border-white/10 hover:border-[#00d2ff]/50 hover:bg-white/5 transition-all group">
              <Phone className="w-5 h-5 text-neutral-400 group-hover:text-[#00d2ff] transition-colors" />
              <span className="font-medium">+91 9129895001</span>
            </a>
            <a href="https://linkedin.com/in/mohit-gupta-09b500314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0a0e17] border border-white/10 hover:border-[#00d2ff]/50 hover:bg-white/5 transition-all group">
              <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-[#00d2ff] transition-colors" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/MohitGupta0001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0a0e17] border border-white/10 hover:border-[#00d2ff]/50 hover:bg-white/5 transition-all group">
              <Github className="w-5 h-5 text-neutral-400 group-hover:text-[#00d2ff] transition-colors" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-neutral-500 font-medium tracking-wide">
            <MapPin className="w-4 h-4" />
            📍 Gandhi Nagar, Mahoba, Uttar Pradesh
          </div>
        </motion.section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-neutral-600 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Mohit Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}
