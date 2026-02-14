import React, { useEffect, useRef } from "react";

export default function HealthcareAutomationCaseStudy() {
  // ========== ANIMATED COUNTERS ==========
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const updateCount = () => {
              const increment = target / 50;
              if (count < target) {
                count = Math.min(count + increment, target);
                counter.innerText = 
                  (counter.classList.contains("dollar") 
                    ? "$" + Math.round(count) + "M" 
                    : Math.round(count) + (counter.classList.contains("percent") ? "%" : "+"));
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = 
                  (counter.classList.contains("dollar") 
                    ? "$" + target + "M" 
                    : target + (counter.classList.contains("percent") ? "%" : "+"));
              }
            };
            updateCount();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  // ========== CASE STUDY DATA ==========
  const caseData = {
    client: "National Healthcare Payer",
    industry: "Healthcare / Insurance",
    location: "United States",
    scope: "End‑to‑end claims processing automation",
    timeline: "9 months",
    challenge: [
      "Manual claims processing led to 15% error rate and 12‑day turnaround",
      "High operational costs – $4M annually in manual reviews",
      "Fragmented systems with no integration between claims, provider, and member data",
      "Regulatory compliance required 100% audit trail and accuracy",
    ],
    solutionSteps: [
      {
        title: "Process Assessment",
        desc: "Mapped 200+ workflows, identified 70% automatable via RPA and AI.",
      },
      {
        title: "RPA Deployment",
        desc: "Deployed 50+ UiPath bots for claims adjudication, data entry, and validation.",
      },
      {
        title: "AI Integration",
        desc: "Added ML models for fraud detection and automated coding suggestions.",
      },
      {
        title: "Change Management",
        desc: "Trained 300+ staff, established CoE, and implemented continuous monitoring.",
      },
    ],
    results: [
      { value: 70, label: "Claims automated", suffix: "%", class: "percent" },
      { value: 85, label: "Error reduction", suffix: "%", class: "percent" },
      { value: 2, label: "Annual savings", suffix: "M", class: "dollar" },
      { value: 99.5, label: "Processing accuracy", suffix: "%", class: "percent" },
    ],
    testimonial: {
      quote:
        "Galacticos delivered a game‑changing automation platform. Our claims processing is now faster, cheaper, and far more accurate – and our teams can focus on patient outcomes instead of paperwork.",
      author: "VP of Operations, National Healthcare Payer",
    },
  };

  return (
    <section className="case-study">
      <style>{`
        /* ---------------------------------------------
           GLOBAL STYLES & COSMIC BACKGROUND
        --------------------------------------------- */
        .case-study {
          position: relative;
          min-height: 100vh;
          background:
            linear-gradient(
              rgba(255,255,255,0.92),
              rgba(255,255,255,0.92)
            ),
            radial-gradient(circle at 20% 30%, rgba(20,184,166,0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(16,185,129,0.04) 0%, transparent 40%),
            url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80");
          background-size: cover, cover, cover, cover;
          background-position: center;
          color: #1e293b;
          overflow-x: hidden;
        }

        /* Floating particles */
        .particle-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(20,184,166,0.2);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(20,184,166,0.3);
          animation: float-particle 18s infinite linear;
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(80px); opacity: 0; }
        }

        /* Content wrapper */
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          position: relative;
          z-index: 10;
        }

        /* ---------- HERO SECTION ---------- */
        .hero {
          position: relative;
          height: 500px;
          margin-bottom: 80px;
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf, #5eead4);
          box-shadow: 0 30px 50px -20px rgba(0,0,0,0.4);
        }
        .hero-animation {
          position: absolute;
          inset: 0;
          opacity: 0.7;
        }
        .hero-svg-icon {
          position: absolute;
          width: 90px;
          height: 90px;
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
          animation: float-hero 12s infinite alternate;
        }
        @keyframes float-hero {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-25px) translateX(15px); }
        }
        /* Healthcare-specific icons */
        .robot-icon { animation: pulse-robot 2.5s infinite; }
        .heart-icon { animation: heartbeat 1.5s infinite; }
        .dna-icon { animation: spin-dna 20s infinite linear; }
        .flask-icon { animation: float-flask 14s infinite alternate; }
        @keyframes pulse-robot { 0%,100% { opacity: 0.8; } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes heartbeat { 0%,100% { transform: scale(1); } 25% { transform: scale(1.2); } 50% { transform: scale(1); } }
        @keyframes spin-dna { to { transform: rotate(360deg); } }
        @keyframes float-flask { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }

        .hero-content {
          position: absolute;
          bottom: 60px;
          left: 60px;
          color: white;
          z-index: 10;
          max-width: 700px;
        }
        .hero-tag {
          display: inline-block;
          background: rgba(20,184,166,0.2);
          backdrop-filter: blur(6px);
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border: 1px solid rgba(20,184,166,0.3);
          color: #14b8a6;
        }
        .hero-title {
          font-size: 56px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
          text-shadow: 0 4px 30px rgba(0,0,0,0.4);
        }
        .hero-subtitle {
          font-size: 20px;
          opacity: 0.9;
          font-weight: 400;
        }

        /* Section headers */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .section-title {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }
        .section-title span {
          background: linear-gradient(145deg, #14b8a6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #14b8a6, #10b981);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Client overview card */
        .client-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 40px;
          margin-bottom: 80px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 25px 40px -15px rgba(0,0,0,0.1);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .client-item {
          text-align: center;
        }
        .client-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
          margin-bottom: 8px;
        }
        .client-value {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }

        /* Challenges grid */
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 80px;
        }
        .challenge-card {
          background: white;
          border-radius: 24px;
          padding: 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          box-shadow: 0 10px 25px -10px rgba(0,0,0,0.05);
          border: 1px solid #eef2f6;
          transition: all 0.3s ease;
        }
        .challenge-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 35px -12px rgba(20,184,166,0.15);
          border-color: #14b8a630;
        }
        .challenge-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          background: linear-gradient(145deg, #14b8a610, #10b98110);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #14b8a6;
        }
        .challenge-text {
          font-size: 16px;
          line-height: 1.6;
          color: #334155;
        }

        /* Timeline */
        .timeline {
          display: flex;
          justify-content: space-between;
          margin: 60px 0 80px;
          position: relative;
        }
        .timeline::before {
          content: "";
          position: absolute;
          top: 30px;
          left: 10%;
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, #14b8a6, #10b981);
          opacity: 0.3;
          z-index: 0;
        }
        .timeline-step {
          position: relative;
          z-index: 2;
          background: white;
          width: 220px;
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 10px 25px -8px rgba(0,0,0,0.08);
          border: 1px solid #f1f5f9;
          transition: transform 0.3s ease;
        }
        .timeline-step:hover {
          transform: scale(1.05);
        }
        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(145deg, #14b8a6, #10b981);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 22px;
          margin-bottom: 16px;
        }
        .step-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #0f172a;
        }
        .step-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
        }

        /* Architecture diagram */
        .architecture {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          border-radius: 36px;
          padding: 50px 40px;
          margin-bottom: 80px;
          border: 1px solid rgba(255,255,255,0.7);
          text-align: center;
        }
        .arch-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin: 40px 0 20px;
        }
        .arch-item {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 15px 30px -12px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 15px;
          transition: all 0.3s ease;
          border: 1px solid #e9eef3;
        }
        .arch-item:hover {
          transform: translateY(-8px);
          border-color: #14b8a6;
        }
        .arch-item svg {
          width: 40px;
          height: 40px;
          margin-bottom: 8px;
        }
        .arch-connector {
          font-size: 28px;
          color: #14b8a6;
          font-weight: 300;
        }

        /* Results grid */
        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin: 50px 0 80px;
        }
        .result-card {
          background: white;
          border-radius: 28px;
          padding: 30px 20px;
          text-align: center;
          box-shadow: 0 20px 35px -12px rgba(0,0,0,0.05);
          border: 1px solid #f0f4f9;
        }
        .result-number {
          font-size: 44px;
          font-weight: 900;
          background: linear-gradient(145deg, #14b8a6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          line-height: 1;
        }
        .result-label {
          font-size: 16px;
          color: #475569;
        }

        /* Testimonial */
        .testimonial {
          background: linear-gradient(145deg, #14b8a608, #10b98108);
          border-left: 6px solid #14b8a6;
          padding: 40px 50px;
          border-radius: 30px;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
        }
        .testimonial::before {
          content: "“";
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 150px;
          font-family: serif;
          color: #14b8a610;
          pointer-events: none;
        }
        .testimonial-quote {
          font-size: 22px;
          line-height: 1.5;
          color: #1e293b;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        .testimonial-author {
          font-size: 16px;
          font-weight: 600;
          color: #14b8a6;
        }

        /* Related services */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-bottom: 60px;
        }
        .service-card {
          background: white;
          border-radius: 24px;
          padding: 30px 25px;
          border: 1px solid #eef2f6;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 35px -15px rgba(20,184,166,0.15);
          border-color: #14b8a6;
        }
        .service-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(145deg, #14b8a610, #10b98110);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #14b8a6;
        }
        .service-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #0f172a;
        }
        .service-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-link {
          font-weight: 600;
          color: #14b8a6;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        .service-link:hover {
          border-bottom-color: #14b8a6;
        }

        /* Back link */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #14b8a6;
          text-decoration: none;
          padding: 12px 28px;
          background: white;
          border-radius: 50px;
          box-shadow: 0 8px 18px -8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .back-link:hover {
          background: #14b8a6;
          color: white;
          transform: translateX(-5px);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .client-card { grid-template-columns: repeat(3, 1fr); }
          .timeline { flex-wrap: wrap; justify-content: center; gap: 20px; }
          .timeline::before { display: none; }
          .results-grid { grid-template-columns: repeat(2, 1fr); }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px; }
          .hero-content { left: 30px; bottom: 30px; }
          .client-card { grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 30px; }
          .challenges-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .testimonial-quote { font-size: 18px; }
          .section-title { font-size: 30px; }
        }
        @media (max-width: 520px) {
          .hero-title { font-size: 32px; }
          .hero { height: 400px; }
          .client-card { grid-template-columns: 1fr; }
          .results-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------- COSMIC PARTICLES ---------- */}
      <div className="particle-field">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* ---------- HERO ---------- */}
      <div className="hero">
        <div className="hero-animation">
          {/* Robot */}
          <div className="hero-svg-icon robot-icon" style={{ top: '15%', left: '10%' }}>
            <svg viewBox="0 0 100 100" width="80" height="80">
              <rect x="30" y="30" width="40" height="40" rx="8" fill="none" stroke="white" strokeWidth="4"/>
              <circle cx="40" cy="45" r="5" fill="white"/>
              <circle cx="60" cy="45" r="5" fill="white"/>
              <rect x="45" y="60" width="10" height="15" fill="white" opacity="0.8"/>
            </svg>
          </div>
          {/* Heartbeat */}
          <div className="hero-svg-icon heart-icon" style={{ top: '60%', left: '75%', animationDuration: '16s' }}>
            <svg viewBox="0 0 100 100" width="70" height="70">
              <path d="M50 30 L40 45 L30 40 L20 55 L35 70 L50 55 L65 70 L80 55 L70 40 L60 45 Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
          {/* DNA */}
          <div className="hero-svg-icon dna-icon" style={{ top: '25%', left: '80%', animationDuration: '14s' }}>
            <svg viewBox="0 0 100 100" width="60" height="60">
              <path d="M30 20 L30 80" stroke="white" strokeWidth="4"/>
              <path d="M70 20 L70 80" stroke="white" strokeWidth="4"/>
              <circle cx="30" cy="30" r="5" fill="white"/>
              <circle cx="70" cy="30" r="5" fill="white"/>
              <circle cx="30" cy="50" r="5" fill="white"/>
              <circle cx="70" cy="50" r="5" fill="white"/>
              <circle cx="30" cy="70" r="5" fill="white"/>
              <circle cx="70" cy="70" r="5" fill="white"/>
            </svg>
          </div>
          {/* Flask */}
          <div className="hero-svg-icon flask-icon" style={{ top: '70%', left: '20%', animationDuration: '18s' }}>
            <svg viewBox="0 0 100 100" width="75" height="75">
              <path d="M35 25 L35 55 Q35 75 50 75 Q65 75 65 55 L65 25" stroke="white" strokeWidth="4" fill="none"/>
              <ellipse cx="50" cy="25" rx="15" ry="6" stroke="white" strokeWidth="4" fill="none"/>
              <circle cx="50" cy="50" r="8" fill="white" opacity="0.8"/>
            </svg>
          </div>
        </div>
        <div className="hero-content">
          <span className="hero-tag">CASE STUDY</span>
          <h1 className="hero-title">Intelligent Automation for Healthcare</h1>
          <p className="hero-subtitle">for a National Healthcare Payer</p>
        </div>
      </div>

      <div className="content-wrapper">
        {/* ---------- CLIENT OVERVIEW ---------- */}
        <div className="client-card">
          <div className="client-item">
            <div className="client-label">Client</div>
            <div className="client-value">{caseData.client}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Industry</div>
            <div className="client-value">{caseData.industry}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Location</div>
            <div className="client-value">{caseData.location}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Scope</div>
            <div className="client-value">{caseData.scope}</div>
          </div>
          <div className="client-item">
            <div className="client-label">Timeline</div>
            <div className="client-value">{caseData.timeline}</div>
          </div>
        </div>

        {/* ---------- CHALLENGES ---------- */}
        <div className="section-header">
          <h2 className="section-title">The <span>Challenge</span></h2>
          <div className="section-divider" />
        </div>
        <div className="challenges-grid">
          {caseData.challenge.map((item, idx) => (
            <div className="challenge-card" key={idx}>
              <div className="challenge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="challenge-text">{item}</div>
            </div>
          ))}
        </div>

        {/* ---------- SOLUTION TIMELINE ---------- */}
        <div className="section-header">
          <h2 className="section-title">Our <span>Solution</span></h2>
          <div className="section-divider" />
        </div>
        <div className="timeline">
          {caseData.solutionSteps.map((step, idx) => (
            <div className="timeline-step" key={idx}>
              <div className="step-number">{idx + 1}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- ARCHITECTURE HIGHLIGHT ---------- */}
        <div className="architecture">
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>Automation Architecture</h3>
          <div className="arch-diagram">
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>Claims</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
              <span>RPA Bots</span>
            </div>
            <span className="arch-connector">+</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6"><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
              <span>AI/ML</span>
            </div>
          </div>
          <p style={{ color: '#475569', marginTop: '20px' }}>50+ UiPath bots integrated with AI for fraud detection and coding – 70% claims fully automated.</p>
        </div>

        {/* ---------- RESULTS ---------- */}
        <div className="section-header">
          <h2 className="section-title">Key <span>Outcomes</span></h2>
          <div className="section-divider" />
        </div>
        <div className="results-grid">
          {caseData.results.map((result, idx) => (
            <div className="result-card" key={idx}>
              <div
                className={`result-number ${result.class}`}
                ref={(el) => (countersRef.current[idx] = el)}
                data-target={result.value}
              >
                0{result.suffix === "M" ? "M" : (result.suffix === "%" ? "%" : "+")}
              </div>
              <div className="result-label">{result.label}</div>
            </div>
          ))}
        </div>

        {/* ---------- TESTIMONIAL ---------- */}
        <div className="testimonial">
          <div className="testimonial-quote">{caseData.testimonial.quote}</div>
          <div className="testimonial-author">— {caseData.testimonial.author}</div>
        </div>

        {/* ---------- RELATED SERVICES ---------- */}
        <div className="section-header">
          <h2 className="section-title">Explore <span>More</span></h2>
          <div className="section-divider" />
        </div>
        <div className="related-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
            </div>
            <div className="service-title">Cloud Migration</div>
            <div className="service-desc">Scalable cloud infrastructure for healthcare.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>
            </div>
            <div className="service-title">SAP S/4HANA</div>
            <div className="service-desc">ERP transformation for life sciences.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/></svg>
            </div>
            <div className="service-title">Hyperion EPM</div>
            <div className="service-desc">Financial planning & analytics.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
        </div>

        {/* ---------- BACK LINK ---------- */}
        <div style={{ textAlign: 'center' }}>
          <a href="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}