import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Cpu, Server, Database, Code, Globe, Shield, FileUser } from "lucide-react";
import './App.css';

export default function Portfolio() {
  const [text, setText] = useState('');
  const fullText = "Initializing DevOps Protocol... Loading User Profile: Aditya Shankarnarayan... [System Sync: 100%]";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Terminal Hero */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="terminal-title">user@aditya-devops:~</span>
        </div>
        <div className="terminal-body">
          <div className="command-line">
            <span className="prompt">➜</span>
            <span className="command">whoami</span>
          </div>
          <div className="response">
            <h1 className="glitch" data-text="Aditya Shankarnarayan">Aditya Shankarnarayan</h1>
            <p className="typing-effect">{text}</p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* About / Intro - Reduced to span-1 */}
        <div className="bento-item">
          <div className="section-header">
            <Terminal size={20} />
            <span>Mission Status</span>
          </div>
          <div className="bento-content">
            <p>
              Senior DevOps Engineer crafting scalable, secure, and efficient cloud pipelines.
              Specializing in automating the un-automatable and taming Kubernetes clusters.
            </p>
            <a href="/Aditya_Shankar_Resume.pdf" target="_blank" className="neon-button" style={{ marginTop: 'auto' }}>
              <FileUser size={18} style={{ marginRight: '8px' }} /> Download Resume
            </a>
          </div>
        </div>

        {/* Experience 1: Browserstack (Current) - Expanded to span-2 */}
        <div className="bento-item span-2">
          <div className="section-header">
            <Server size={20} />
            <span>Current Role</span>
          </div>
          <div className="bento-content">
            <h3>DevOps Engineer</h3>
            <span className="company">Browserstack</span>
            <span className="date">Sept 2025 – Present</span>
            <ul>
              <li>CI/CD optimization & K8s deployments.</li>
              <li>Cloud infra management & observability.</li>
              <li>Ensuring high availability & reliability.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2: Incedo (Previous) - Spans 2 cols */}
        <div className="bento-item span-2">
          <div className="section-header">
            <Cpu size={20} />
            <span>Previous Mission</span>
          </div>
          <div className="bento-content">
            <h3>Senior Software Engineer</h3>
            <span className="company">Incedo Inc</span>
            <span className="date">July 2022 – Sept 2025</span>
            <ul>
              <li><strong>99% Faster Deployments:</strong> Cut time from 1.5 days to 20 mins for 110+ microservices via Python/OCI installer.</li>
              <li><strong>65% Faster Testing:</strong> Provisioned UAT servers with Terraform & GitLab CI.</li>
              <li><strong>25% More Deployments:</strong> Migrated monolith to microservices (Chef to Shell, Helm, K8s).</li>
              <li><strong>54% Faster Infra Setup:</strong> Built scalable Terraform IaC pipelines with K8s Autoscaler.</li>
              <li><strong>60% Faster Alerts:</strong> Engineered Nagios-Teams integration for real-time observability.</li>
            </ul>
          </div>
        </div>

        {/* Experience 3: Maximus (Internship) */}
        <div className="bento-item">
          <div className="section-header">
            <Database size={20} />
            <span>History</span>
          </div>
          <div className="bento-content">
            <h3>Software Intern</h3>
            <span className="company">Maximus Infoware</span>
            <span className="date">May 2021 – July 2021</span>
            <p>Engineered ML model (Prophet) to predict terminal transactions with 70% accuracy.</p>
          </div>
        </div>

        {/* Project 1 */}
        <div className="bento-item">
          <div className="section-header">
            <Globe size={20} />
            <span>Project: Arpanet</span>
          </div>
          <div className="bento-content">
            <p>Full-stack social network with MERN. Reusable UI & robust REST API.</p>
            <a href="https://arpanet.onrender.com" target="_blank" className="neon-button">Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bento-item">
          <div className="section-header">
            <Code size={20} />
            <span>Udemy Instructor</span>
          </div>
          <div className="bento-content">
            <p>6,400+ students trained with hands-on Python ML labs. Rated 4.1/5 ⭐.</p>
            <a href="https://www.udemy.com/user/coding-guru-2/" target="_blank" className="neon-button">View Course</a>
          </div>
        </div>

        {/* Certifications */}
        <div className="bento-item">
          <div className="section-header">
            <Shield size={20} />
            <span>Certifications</span>
          </div>
          <div className="bento-content">
            <h3>CKA</h3>
            <span className="company">Linux Foundation</span>
            <span className="date">Exp: July 2027</span>
            <a href="https://www.credly.com/badges/e0119e48-1461-4d9b-b63d-c9365c4b6aa4" target="_blank" className="neon-button">Verify Credential</a>
          </div>
        </div>

        {/* Technical Arsenal - Full Width */}
        <div className="bento-item span-3">
          <div className="section-header">
            <Terminal size={20} />
            <span>Technical Arsenal</span>
          </div>
          <div className="bento-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

              {/* Languages */}
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Languages</h4>
                <div className="tech-stack" style={{ marginTop: 0 }}>
                  {["Python", "HTML", "MySQL", "Shell Scripting", "Bash Scripting"].map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Frameworks</h4>
                <div className="tech-stack" style={{ marginTop: 0 }}>
                  {["Jenkins", "Docker", "Kubernetes", "Terraform", "OCI", "AWS", "Helm", "Spinnaker", "Ansible"].map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Tools</h4>
                <div className="tech-stack" style={{ marginTop: 0 }}>
                  {["Git", "GitHub", "JFrog Artifactory", "Linux (RHEL8)", "DSA", "Nagios", "GitLab CI/CD", "Grafana", "Prometheus"].map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Social Dock */}
      <div className="social-dock">
        <a href="mailto:adityashankar009@gmail.com" className="social-icon mail"><Mail size={24} /></a>
        <a href="https://linkedin.com/in/adityashankarnarayan" target="_blank" className="social-icon linkedin"><Linkedin size={24} /></a>
        <a href="https://github.com/adityashnkr" target="_blank" className="social-icon github"><Github size={24} /></a>
        <a href="/Aditya_Shankar_Resume.pdf" target="_blank" className="social-icon resume" title="Download Resume"><FileUser size={24} /></a>
      </div>

      <footer className="footer">
        <p>System Status: Online | © {new Date().getFullYear()} Aditya Shankarnarayan</p>
      </footer>
    </div>
  );
}