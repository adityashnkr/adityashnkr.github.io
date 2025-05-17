import React, { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Eclipse, Mail, Cloud, LampDesk, Workflow, Cpu, Layers, SquareChevronRight, Download, LibraryBig } from "lucide-react";
import './App.css'
export default function Portfolio() {
  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const downloadRef = useRef(null);
  const connectRef = useRef(null);

  const [animateHeader, setAnimateHeader] = useState(false);
  const [animateExperience, setAnimateExperience] = useState(false);
  const [animateProjects, setAnimateProjects] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [animateDownload, setAnimateDownload] = useState(false);
  const [animateConnect, setAnimateConnect] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setAnimateHeader(true);
          if (entry.target === experienceRef.current) setAnimateExperience(true);
          if (entry.target === projectsRef.current) setAnimateProjects(true);
          if (entry.target === skillsRef.current) setAnimateSkills(true);
          if (entry.target === downloadRef.current) setAnimateDownload(true);
          if (entry.target === connectRef.current) setAnimateConnect(true);
        }
      });
    }, options);

    const refs = [headerRef, experienceRef, projectsRef, skillsRef, downloadRef, connectRef];

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="portfolio-container">
      <header ref={headerRef} className={`header animated-section ${animateHeader ? 'animate' : ''}`}>
        <div>
          <Cloud className="mx-auto text-blue-400" size={48} />
        </div>
        <h1 className="text-5xl font-bold text-blue-600 mb-2">
          Aditya Shankarnarayan
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          DevOps Engineer crafting scalable, secure, and efficient cloud pipelines
        </p>
        <div className="flex justify-center space-x-6 text-blue-500">
          <button className="social-button" onClick={() => window.location.href = 'mailto:adityashankar009@gmail.com'}>
            <Mail size={24} />
          </button>
          <button className="social-button" onClick={() => window.open('https://linkedin.com/in/adityashankarnarayan', '_blank')}>
            <Linkedin size={24} />
          </button>
          <button className="social-button" onClick={() => window.open('https://github.com/adityashnkr', '_blank')}>
            <Github size={24} />
          </button>
        </div>
      </header>
      <main className="space-y-20">
        <section ref={experienceRef} className={`animated-section ${animateExperience ? 'animate' : ''}`}>
          <div className="experiences">
            <div className="experience-item">
              <h2 className="section-title">
                <LampDesk className="icon icon-yellow mr-2" /> &nbsp;Experience
              </h2>
              <div className="experience-roles">
                <div className="experience-block">
                  <h2 className="section-title">
                    <Workflow className="icon icon-green mr-2" />&nbsp;DevOps Engineer @ Incedo Inc.
                  </h2>
                  <p className="job-period">Jul 2022 – Present</p>
                  <ul className="achievements">
                    <li>🛠️ One-click installer with Python, OCI, Kubernetes & CI/CD: 99% deployment time cut.</li>
                    <li>📦 UAT server provisioning on OCI via Terraform & GitLab CI: testing time ↓65%.</li>
                    <li>🔔 Dev & mgmt alerts with PostgreSQL, Teams & Email for UAT failures.</li>
                    <li>🔄 Monolith → Microservices migration with Helm, Docker & Kubernetes.</li>
                  </ul>
                </div>
                <div className="experience-block">
                  <h2 className="section-title">
                    <Cpu className="icon icon-purple" />&nbsp;Sowtware Intern @ Maximus Infoware
                  </h2>
                  <p className="job-period">May 2021 – Jul 2021</p>
                  <ul className="achievements">
                    <li>📊 Predicted terminal transactions with Prophet model: 70% accuracy pilot.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section ref={projectsRef} className={`animated-section ${animateProjects ? 'animate' : ''}`}>
          <div className="experiences">
            <div className="experience-item">
              <h2 className="section-title">
                <Layers className="icon icon-crimson mr-2" />&nbsp;Project
              </h2>
              <div className="experience-roles">
                <div className="experience-block">
                  <h2 className="section-title">
                    <Eclipse className="icon icon-tangerine mr-2" /> &nbsp;Arpanet
                  </h2>
                  <p className="project-description">Full-stack social network with MERN. Reusable UI & robust REST API.</p>
                  <a href="https://arpanet.onrender.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
                <div className="experience-block">
                  <h2 className="section-title">
                    <LibraryBig className="icon icon-rose mr-2" />&nbsp;Udemy Python Course
                  </h2>
                  <p className="project-description">6,200+ students trained with hands-on Python & DevOps labs. Rated 4.1/5.</p>
                  <a href="https://www.udemy.com/user/coding-guru-2/" target="_blank" rel="noopener noreferrer" className="project-link">View Course</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section ref={skillsRef} className={`animated-section ${animateSkills ? 'animate' : ''}`}>
          <div className="experience-item">
            <div className='experience-block'>
              <h2 className="section-title">
                <SquareChevronRight className="icon icon-bubblegum mr-2" /> &nbsp;Skills & Tools
              </h2>
              <ul className="skills-grid">
                {["Python", "Shell", "OCI & AWS", "Docker & Kubernetes", "Terraform & Helm", "GitLab CI/CD & Jenkins", "Nagios", "Ansible"].map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span>•</span><strong>{skill}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <br />
        <section ref={downloadRef} className={`download-section animated-section ${animateDownload ? 'animate' : ''}`}>
          <div className="download-content">
            <h2 className="section-title">
              <Download className="icon icon-blue mr-2" />&nbsp;Download Resume
            </h2>
            <button className="download-button">
              <a href="/Aditya_Shankar_Resume.pdf" download className="download-link">Download PDF</a>
            </button>
          </div>
        </section>
        <br />
        <section ref={connectRef} className={`connect-section animated-section ${animateConnect ? 'animate' : ''}`}>
          <h2 className="section-title text-center">Let's Connect</h2>
          <p className="connect-text">Let's build scalable DevOps solutions together.</p>
          <button className="connect-button">
            <a href="mailto:adityashankar009@gmail.com" className="connect-link">Email Me</a>
          </button>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Aditya Shankarnarayan
      </footer>
    </div>
  );
}