import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DevOps() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (title) => {
    setFlipped(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const styles = {
    // ENHANCED HERO STYLES
    heroContainer: {
      position: "relative",
      height: "85vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#030712",
    },
    heroWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "100px 20px",
      position: "relative",
      zIndex: 2,
      gap: "40px",
      flexWrap: "wrap"
    },
    heroLeft: {
      flex: 1,
      minWidth: "300px",
      height: "400px",
      animation: "float 6s ease-in-out infinite"
    },
    heroBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(to bottom, rgba(3, 7, 18, 0.7) 0%, rgba(3, 7, 18, 0.4) 100%), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      flex: 1,
      minWidth: "300px",
      padding: "60px 40px",
      maxWidth: "600px",
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      borderRadius: "40px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    heroTag: {
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#00d4ff",
      marginBottom: "24px",
      display: "inline-block",
      padding: "8px 20px",
      background: "rgba(0, 212, 255, 0.1)",
      borderRadius: "100px",
    },
    heroTitle: {
      fontSize: "62px",
      fontWeight: 800,
      lineHeight: 1.1,
      color: "#ffffff",
      margin: "0",
      background: "linear-gradient(to bottom right, #ffffff 60%, #94a3b8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    section: {
      padding: "90px 10%",
      background: "#fff"
    },
    heading: {
      fontSize: "36px",
      color: "#0b5aa2",
      marginBottom: "22px",
      fontWeight: 700
    },
    paragraph: {
      fontSize: "16.5px",
      lineHeight: 1.9,
      color: "#444",
      maxWidth: "900px",
      marginBottom: "18px"
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      marginTop: "50px"
    },
    bullet: {
      marginBottom: "14px",
      fontSize: "16px",
      lineHeight: 1.7
    }
  };

  return (
    <>
      <style>{`
        /* HERO ANIMATIONS */
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(40px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateXY(0deg); }
          50% { transform: translateY(-15px) rotateX(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        .animate-bg { animation: kenBurns 20s infinite alternate ease-in-out; }
        .animate-text { animation: textReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .dais-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .dais-item:hover {
          background: #f8fbff;
          border-color: rgba(0, 212, 255, 0.2);
          transform: translateX(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .enhanced-card {
          background: #fdfdfe;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }
        .accent-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(to bottom, #00d4ff, #0084ff);
        }
        .cta-section {
          padding: 100px 10%;
          background: linear-gradient(rgba(13, 27, 61, 0.92), rgba(26, 58, 82, 0.92)), url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: "";
          position: absolute;
          top: -200px;
          right: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.2), transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
        }
        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px;
          border-radius: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          align-items: center;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 25px 60px rgba(0,212,255,0.25);
          position: relative;
          z-index: 1;
        }
        .cta-left { border-right: 1px solid rgba(255,255,255,0.15); padding-right: 30px; }
        .cta-left h2 { font-size: 30px; color: #ffffff; margin-bottom: 15px; line-height: 1.4; }
        .cta-left p { color: rgba(255,255,255,0.7); font-size: 16px; margin: 0; }
        .cta-buttons { display: flex; flex-direction: column; gap: 14px; border-right: 1px solid rgba(255,255,255,0.15); padding-right: 30px; }
        .cta-btn { padding: 14px; border-radius: 10px; border: 2px solid #00d4ff; background: transparent; color: #ffffff; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { background: #00d4ff; color: #030712; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,212,255,0.4); }
        .cta-connect { padding: 18px 45px; background: linear-gradient(135deg, #ff9800, #ff6f00); border: none; border-radius: 12px; font-size: 18px; font-weight: 700; color: #fff; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 12px 30px rgba(255,152,0,0.3); }
        .cta-connect:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(255,152,0,0.5); }
        .cta-right { text-align: center; }
        
        /* UNIQUE DEVOPS INTRO STYLES */
        .devops-intro {
          padding: 90px 10%;
          background: linear-gradient(135deg, #f8f9fa 0%, #f0f4f9 100%);
        }
        .intro-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .intro-header h2 {
          font-size: 48px;
          color: #0b1929;
          margin-bottom: 20px;
          font-weight: 800;
        }
        .intro-header p {
          font-size: 18px;
          color: #556b82;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .split-modern {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-top: 60px;
        }
        .overview-section {
          background: white;
          border-radius: 24px;
          padding: 50px;
          border-left: 6px solid #00d4ff;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
        }
        .overview-section:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.15);
        }
        .overview-section h3 {
          font-size: 28px;
          color: #0b1929;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .overview-section p {
          font-size: 16px;
          color: #556b82;
          line-height: 1.9;
          margin-bottom: 0;
        }
        .principles-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .principle-item {
          padding: 20px 25px;
          border-bottom: 1px solid #e5edf5;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: white;
          transition: all 0.3s ease;
          position: relative;
        }
        .principle-item:first-child {
          border-radius: 24px 24px 0 0;
        }
        .principle-item:last-child {
          border-bottom: none;
          border-radius: 0 0 24px 24px;
        }
        .principle-item:hover {
          background: linear-gradient(135deg, #f0f7ff 0%, #e6f4ff 100%);
          transform: translateX(8px);
        }
        .principle-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: linear-gradient(to bottom, #00d4ff, #0084ff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .principle-item:hover::before {
          opacity: 1;
        }
        .principle-icon {
          font-size: 24px;
          min-width: 30px;
          text-align: center;
        }
        .principle-text {
          font-size: 15px;
          color: #334155;
          font-weight: 500;
          line-height: 1.6;
        }
        
        /* DEVOPS SERVICES GRID */
        .devops-services {
          padding: 90px 10%;
          background: white;
        }
        .services-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .services-header h2 {
          font-size: 44px;
          color: #0b1929;
          margin-bottom: 20px;
          font-weight: 800;
        }
        .service-card-modern {
          background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
          border: 2px solid #e5edf5;
          border-radius: 16px;
          padding: 40px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 380px;
        }
        .service-card-modern::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff, #0084ff, #00a3ff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .service-card-modern:hover::before {
          transform: scaleX(1);
        }
        .service-card-modern:hover {
          border-color: #00d4ff;
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(0, 212, 255, 0.15);
          background: linear-gradient(135deg, #f0f7ff 0%, #e6f4ff 100%);
        }
        .service-icon-large {
          font-size: 56px;
          margin-bottom: 20px;
          display: inline-block;
        }
        .service-card-modern h3 {
          font-size: 24px;
          color: #0b1929;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .service-subtitle {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00d4ff;
          margin-bottom: 16px;
          display: inline-block;
          padding: 4px 12px;
          background: rgba(0, 212, 255, 0.08);
          border-radius: 20px;
        }
        .service-desc {
          font-size: 15px;
          color: #556b82;
          line-height: 1.8;
          flex-grow: 1;
          margin-top: 16px;
        }
        .service-arrow {
          margin-top: 20px;
          font-size: 24px;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .service-card-modern:hover .service-arrow {
          transform: translateX(8px);
        }
        
        /* NEW SERVICE ANIMATIONS */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 20px 50px rgba(0, 212, 255, 0.1); }
          50% { box-shadow: 0 20px 50px rgba(0, 212, 255, 0.25); }
        }
        .service-card-modern {
          animation: slideInUp 0.6s ease-out backwards;
        }
        .service-card-modern:nth-child(1) { animation-delay: 0.1s; }
        .service-card-modern:nth-child(2) { animation-delay: 0.2s; }
        .service-card-modern:nth-child(3) { animation-delay: 0.3s; }
        .service-card-modern:nth-child(4) { animation-delay: 0.4s; }
        .service-card-modern:nth-child(5) { animation-delay: 0.5s; }
        .service-card-modern:nth-child(6) { animation-delay: 0.6s; }
        .service-card-modern:hover {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        @media (max-width: 1024px) {
          .split-modern { grid-template-columns: 1fr; gap: 40px; }
          .cta-container { grid-template-columns: 1fr; text-align: center; }
          .cta-left, .cta-buttons { border-right: none; padding-right: 0; }
        }
      `}</style>

      {/* ENHANCED HERO WITH SVG */}
      <section style={styles.heroContainer}>
        <div style={styles.heroBg} className="animate-bg" />

        <div style={styles.heroWrapper}>
          {/* LEFT SIDE - SVG ILLUSTRATION */}
          <div style={styles.heroLeft}>
            <svg
              viewBox="0 0 600 500"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Gradient */}
                <radialGradient id="devopsGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0084ff" stopOpacity="0.1" />
                </radialGradient>

                {/* Gradient for pipes */}
                <linearGradient id="pipeGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#0084ff" />
                </linearGradient>

                {/* Blur Filter */}
                <filter id="blurMe">
                  <feGaussianBlur stdDeviation="20" />
                </filter>
              </defs>

              {/* Background Glow */}
              <circle cx="300" cy="250" r="150" fill="url(#devopsGlow)" filter="url(#blurMe)" />

              {/* Pipeline Boxes */}
              <rect x="120" y="200" width="80" height="80" rx="8" fill="rgba(0, 212, 255, 0.2)" stroke="url(#pipeGradient)" strokeWidth="2" />
              <circle cx="160" cy="240" r="8" fill="#00d4ff" style={{ animation: 'pulse 2s infinite' }} />

              <rect x="260" y="150" width="80" height="80" rx="8" fill="rgba(0, 212, 255, 0.15)" stroke="url(#pipeGradient)" strokeWidth="2" />
              <circle cx="300" cy="190" r="8" fill="#00d4ff" style={{ animation: 'pulse 2.2s infinite' }} />

              <rect x="400" y="200" width="80" height="80" rx="8" fill="rgba(0, 212, 255, 0.2)" stroke="url(#pipeGradient)" strokeWidth="2" />
              <circle cx="440" cy="240" r="8" fill="#00d4ff" style={{ animation: 'pulse 2.4s infinite' }} />

              {/* Connecting Pipes */}
              <path d="M 200 240 Q 250 220, 260 190" stroke="url(#pipeGradient)" strokeWidth="3" fill="none" strokeDasharray="5 5" opacity="0.6" />
              <path d="M 340 190 Q 370 210, 400 240" stroke="url(#pipeGradient)" strokeWidth="3" fill="none" strokeDasharray="5 5" opacity="0.6" />

              {/* Container/Docker symbols */}
              <g style={{ animation: 'float 4s ease-in-out infinite' }}>
                <circle cx="300" cy="380" r="35" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.4" />
                <circle cx="300" cy="380" r="25" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
                <circle cx="300" cy="380" r="12" fill="#00d4ff" opacity="0.8" />
              </g>

              {/* Deploy indicator */}
              <path d="M 300 320 L 300 360" stroke="#00d4ff" strokeWidth="2" opacity="0.5" />
              <polygon points="300,360 295,350 305,350" fill="#00d4ff" opacity="0.7" />

              {/* Network nodes */}
              <circle cx="120" cy="100" r="6" fill="#00d4ff" opacity="0.5" />
              <circle cx="480" cy="100" r="6" fill="#00d4ff" opacity="0.5" />
              <path d="M 120 100 L 300 240 L 480 100" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div style={styles.heroContent} className="animate-text">
            <div style={styles.heroTag}>DevOps & Automation</div>
            <h1 style={styles.heroTitle}>
              Accelerating innovation through <br />
              <span style={{ color: "#00d4ff" }}>
                automated, scalable DevOps
              </span> <br />
              practices
            </h1>
          </div>
        </div>
      </section>

      {/* MODERN DEVOPS INTRO SECTION */}
      <section className="devops-intro">
        <div className="intro-header">
          <h2>DevOps Excellence for<br /><span style={{ color: "#00d4ff" }}>Modern Digital Enterprises</span></h2>
          <p>Our DevOps services enable organizations to rapidly build, deploy, and scale applications through automation, collaboration, and continuous delivery pipelines.</p>
        </div>

        <div className="split-modern">
          {/* Overview */}
          <div className="overview-section">
            <h3><span style={{ fontSize: "20px" }}>◉</span> Overview</h3>
            <p>
              By integrating development and operations, we help businesses improve speed-to-market, reliability, and operational efficiency while maintaining security and compliance. Leveraging CI/CD, infrastructure automation, and observability, we design DevOps ecosystems that enable continuous innovation and resilient operations.
            </p>
            
            {/* DevOps Pipeline Illustration */}
            <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
              <svg width="100%" height="220" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "350px" }}>
                <defs>
                  <linearGradient id="devPipeline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0084ff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Dev Phase */}
                <g style={{ animation: "slideInUp 0.8s ease-out" }}>
                  <circle cx="50" cy="80" r="28" fill="rgba(0, 212, 255, 0.2)" stroke="url(#devPipeline)" strokeWidth="2" />
                  <text x="50" y="88" textAnchor="middle" fontSize="20" fill="#0084ff">💻</text>
                  <text x="50" y="115" textAnchor="middle" fontSize="11" fill="#556b82" fontWeight="600">Develop</text>
                </g>
                
                {/* Arrow 1 */}
                <line x1="78" y1="80" x2="122" y2="80" stroke="url(#devPipeline)" strokeWidth="2" />
                
                {/* Build Phase */}
                <g style={{ animation: "slideInUp 0.8s ease-out 0.15s backwards" }}>
                  <circle cx="150" cy="80" r="28" fill="rgba(0, 212, 255, 0.15)" stroke="url(#devPipeline)" strokeWidth="2" />
                  <text x="150" y="88" textAnchor="middle" fontSize="20" fill="#00d4ff">🔨</text>
                  <text x="150" y="115" textAnchor="middle" fontSize="11" fill="#556b82" fontWeight="600">Build</text>
                </g>
                
                {/* Arrow 2 */}
                <line x1="178" y1="80" x2="222" y2="80" stroke="url(#devPipeline)" strokeWidth="2" />
                
                {/* Deploy Phase */}
                <g style={{ animation: "slideInUp 0.8s ease-out 0.3s backwards" }}>
                  <circle cx="250" cy="80" r="28" fill="rgba(0, 212, 255, 0.2)" stroke="url(#devPipeline)" strokeWidth="2" />
                  <text x="250" y="88" textAnchor="middle" fontSize="20" fill="#0084ff">🚀</text>
                  <text x="250" y="115" textAnchor="middle" fontSize="11" fill="#556b82" fontWeight="600">Deploy</text>
                </g>
                
                {/* Arrow 3 */}
                <line x1="278" y1="80" x2="322" y2="80" stroke="url(#devPipeline)" strokeWidth="2" />
                
                {/* Monitor Phase */}
                <g style={{ animation: "slideInUp 0.8s ease-out 0.45s backwards" }}>
                  <circle cx="350" cy="80" r="28" fill="rgba(0, 212, 255, 0.15)" stroke="url(#devPipeline)" strokeWidth="2" />
                  <text x="350" y="88" textAnchor="middle" fontSize="20" fill="#00d4ff">📊</text>
                  <text x="350" y="115" textAnchor="middle" fontSize="11" fill="#556b82" fontWeight="600">Monitor</text>
                </g>
                
                {/* Feedback loop arrow */}
                <path d="M 350 52 Q 200 15 50 52" stroke="url(#devPipeline)" strokeWidth="2" fill="none" strokeDasharray="5 3" opacity="0.5" />
                <polygon points="350,52 345,48 350,55" fill="url(#devPipeline)" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* Key Principles */}
          <div style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)" }}>
            <h3 style={{ fontSize: "28px", color: "#0b1929", marginBottom: "0", fontWeight: 800, padding: "50px 25px 20px", background: "white", borderRadius: "24px 24px 0 0" }}>
              <span style={{ color: "#00d4ff" }}>⚡</span> Key Principles
            </h3>
            <div className="principles-list">
              {[
                { icon: "🔄", text: "Continuous integration & delivery (CI/CD)" },
                { icon: "📋", text: "Infrastructure as Code (IaC)" },
                { icon: "🤖", text: "Automation-first mindset" },
                { icon: "☁️", text: "Cloud-native & containerized platforms" },
                { icon: "🔒", text: "Security embedded in pipelines (DevSecOps)" },
                { icon: "👀", text: "Monitoring, logging & observability" },
                { icon: "🤝", text: "Collaboration & cultural transformation" }
              ].map((item, idx) => (
                <div key={idx} className="principle-item">
                  <span className="principle-icon">{item.icon}</span>
                  <span className="principle-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODERN DEVOPS SERVICES SECTION */}
      <section className="devops-services">
        <div className="services-header">
          <h2>Our DevOps Services</h2>
          <p style={{ fontSize: "18px", color: "#556b82", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
            Comprehensive solutions designed to accelerate your digital transformation and operational excellence
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {[
            { 
              icon: "📊", 
              title: "DevOps Strategy", 
              subtitle: "Strategic Planning",
              desc: "Assessment and roadmap creation to align DevOps initiatives with business goals and maximize ROI. We evaluate your current infrastructure, processes, and team capabilities to define a clear path forward.",
              arrow: "→"
            },
            { 
              icon: "🔄", 
              title: "CI/CD Automation", 
              subtitle: "Pipeline Automation",
              desc: "Automated build, test, and deployment pipelines for faster and more reliable releases. Streamline your software delivery with continuous integration and continuous deployment practices.",
              arrow: "→"
            },
            { 
              icon: "🏗️", 
              title: "Infrastructure as Code", 
              subtitle: "IaC Solutions",
              desc: "Provisioning and management of infrastructure using code-driven automation and best practices. Ensure consistency, repeatability, and version control across your entire infrastructure.",
              arrow: "→"
            },
            { 
              icon: "🐳", 
              title: "Container Platforms", 
              subtitle: "Kubernetes & Docker",
              desc: "Design and management of Kubernetes, Docker, and cloud-native ecosystems at scale. Orchestrate containerized applications with zero downtime deployments and auto-scaling.",
              arrow: "→"
            },
            { 
              icon: "🛡️", 
              title: "DevSecOps", 
              subtitle: "Security Integration",
              desc: "Embedding security controls and compliance across the entire DevOps lifecycle. Identify vulnerabilities early, enforce policies, and maintain regulatory compliance automatically.",
              arrow: "→"
            },
            { 
              icon: "📈", 
              title: "Monitoring & Observability", 
              subtitle: "24/7 Visibility",
              desc: "End-to-end visibility into application and infrastructure performance metrics. Real-time dashboards, alerts, and analytics to ensure optimal system health and performance.",
              arrow: "→"
            }
          ].map((service, idx) => (
            <div key={idx} className="service-card-modern">
              <div className="service-icon-large">{service.icon}</div>
              <div className="service-subtitle">{service.subtitle}</div>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <span className="service-arrow">{service.arrow}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-left">
            <h2>Talk to our DevOps experts today.</h2>
            <p>Transform your delivery pipeline with modern DevOps practices.</p>
          </div>
          <div className="cta-buttons">
            <button className="cta-btn">Professional Services</button>
            <button className="cta-btn">Managed Services</button>
            <button className="cta-btn">Build Your Own</button>
          </div>
          <div className="cta-right">
            <button onClick={() => navigate('/contact')} className="cta-connect">CONNECT NOW</button>
          </div>
        </div>
      </section>
    </>
  );
}
