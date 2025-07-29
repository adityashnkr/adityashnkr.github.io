import React, { useRef, useEffect, useState } from 'react';
import cloud3D from './assets/cloud-3d.png';
import { Github, Linkedin, Eclipse, Mail, Cloud, LampDesk, Workflow, Cpu, Layers, SquareChevronRight, Download, LibraryBig, Award, Container } from "lucide-react"; 
import './App.css'

export default function Portfolio() {
  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const downloadRef = useRef(null);
  const connectRef = useRef(null);
  const certificationsRef = useRef(null); // New ref for Certifications

  const [animateHeader, setAnimateHeader] = useState(false);
  const [animateExperience, setAnimateExperience] = useState(false);
  const [animateProjects, setAnimateProjects] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [animateDownload, setAnimateDownload] = useState(false);
  const [animateConnect, setAnimateConnect] = useState(false);
  const [animateCertifications, setAnimateCertifications] = useState(false);

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
          if (entry.target === certificationsRef.current) setAnimateCertifications(true);
        }
      });
    }, options);

    const refs = [headerRef, experienceRef, projectsRef, skillsRef, downloadRef, connectRef, certificationsRef];

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
        <div className="cloud-container">
          <div className="cloud-float-wrapper">
            <img src={cloud3D} alt="3D Cloud" className="cloud-image" />
          </div>
        </div>
        <h1>Aditya Shankarnarayan</h1>
        <p>
          DevOps Engineer crafting scalable, secure, and efficient cloud pipelines
        </p>
        <div className="social-buttons">
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

      <main className="main-content">
        <section ref={experienceRef} className={`animated-section ${animateExperience ? 'animate' : ''}`}>
          <div className="experiences">
            <div className="experience-item">
              <h2 className="section-title">
                <LampDesk className="icon icon-yellow" /> &nbsp;Experience
              </h2>
              <div className="experience-roles">
                <div className="experience-block">
                  <h2 className="section-title">
                    <Workflow className="icon icon-green" />&nbsp;Senior DevOps Engineer
                  </h2>
                  <h3 className="company-name">Incedo Inc</h3>
                  <p className="job-period">Jul 2022 – Present</p>
                  <ul className="achievements">
                    <li>One-click installer with Python, OCI APIs, Kubernetes & GitLab CI/CD cut deployment time by 99% for 110+ microservices.</li>
                    <li>Provisioned UAT server on OCI via Terraform & GitLab CI reduced testing pipeline time by 65%.</li>
                    <li>Built alert system using Python, PostgreSQL & Teams improved dev response time by 67% and escalated repeat failures.</li>
                    <li>Sent changelog-based UAT failure emails targeted relevant devs only, improving response by 20%.</li>
                    <li>Migrated monolith to microservices rewrote Chef to Shell, built GitLab CI/CD with Helm & Kubernetes, boosting deployment frequency by 25%.</li>
                    <li>Automated release versioning for 20+ products using GitLab & Jira APIs streamlined release workflow.</li>
                    <li>Deployed secure AWS infrastructure with Terraform (VPC, EC2, IAM) enabled full-access PoC environment.</li>
                    <li>Integrated Nagios with Teams via Python achieved 60% faster incident resolution.</li>
                    <li>Mentored 3 interns delivered Django-based DevOps dashboard for org-wide updates.</li>
                    <li>Built IaC pipelines and autoscaling Kubernetes clusters setup time down 54%, resource usage optimized.</li>
                    <li>Created base Docker images for Python, Java & Node.js reduced build time by 25%.</li>
                  </ul>
                </div>
              </div>
              <br />
              <div className='experience'>
                <div className="experience-block">
                  <h2 className="section-title">
                    <Cpu className="icon icon-purple" />&nbsp;Software Intern
                  </h2>
                  <h3 className="company-name">Maximus Infoware</h3>
                  <p className="job-period">May 2021 – Jul 2021</p>
                  <ul className="achievements">
                    <li>Predicted terminal transactions with Prophet model: 70% accuracy pilot.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={certificationsRef} className={`animated-section ${animateCertifications ? 'animate' : ''}`}>
          <div className="experiences">
            <div className="experience-item">
              <h2 className="section-title">
                <Award className="icon icon-bronze" />&nbsp;Certifications
              </h2>
              <div className="experience-roles">
                <div className="experience-block">
                    <h2 className="section-title">
                    <Container className="icon icon-teal" />&nbsp;Certified Kubernetes Administrator (CKA)
                  </h2>
                  <h3 className="company-name">Issued by The Linux Foundation</h3>
                  <p className="job-period">Issued: July 12, 2025 | Expires: July 13, 2027</p>
                  <p className="project-description"><strong>Credential ID:</strong> LF-4xdo4c5w6t</p>
                  <a href="https://www.credly.com/badges/e0119e48-1461-4d9b-b63d-c9365c4b6aa4" target="_blank" rel="noopener noreferrer" className="project-link">Verify Credential</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className={`animated-section ${animateProjects ? 'animate' : ''}`}>
          <div className="experiences">
            <div className="experience-item">
              <h2 className="section-title">
                <Layers className="icon icon-crimson" />&nbsp;Projects
              </h2>
              <div className="experience-roles">
                <div className="experience-block">
                  <h2 className="section-title">
                    <Eclipse className="icon icon-tangerine" /> &nbsp;Arpanet
                  </h2>
                  <p className="project-description">Full-stack social network with MERN. Reusable UI & robust REST API.</p>
                  <a href="https://arpanet.onrender.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
                <div className="experience-block">
                  <h2 className="section-title">
                    <LibraryBig className="icon icon-rose" />&nbsp;Udemy Instructor
                  </h2>
                  <p className="project-description">6,400+ students trained with hands-on Python ML labs. Rated 4.1/5 ⭐.</p>
                  <a href="https://www.udemy.com/user/coding-guru-2/" target="_blank" rel="noopener noreferrer" className="project-link">View Course</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={skillsRef} className={`animated-section ${animateSkills ? 'animate' : ''}`}>
          <div className="experience-item">
            <div className='experience-block'>
              <h2 className="section-title">
                <SquareChevronRight className="icon icon-bubblegum" /> &nbsp;Skills & Tools
              </h2>
              <ul className="skills-grid">
                {["Python", "Shell", "OCI", "AWS", "Docker", "Kubernetes", "Terraform", "Helm", "GitLab CI/CD", "Jenkins", "Nagios", "Ansible","Spinnaker"].map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span>•</span><strong>{skill}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section ref={downloadRef} className={`animated-section ${animateDownload ? 'animate' : ''}`}>
          <div className="experience-item">
            <div className="experience-block">
              <div className="download-header">
                <div className="section-title">
                  <Download className="icon icon-blue" />
                  &nbsp;Download Resume
                </div>
                <div className="download-actions">
                  <a
                    href="/Aditya_Shankar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link small"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={connectRef} className={`connect-section animated-section ${animateConnect ? 'animate' : ''}`}>
          <h2>Let's Connect</h2>
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