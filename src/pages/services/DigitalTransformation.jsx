import React, { useEffect, useRef } from "react";

export default function CloudMigrationCaseStudy() {
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
              const increment = target / 50; // smooth increment
              if (count < target) {
                count = Math.min(count + increment, target);
                counter.innerText = Math.round(count) + (counter.classList.contains("percent") ? "%" : "");
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target + (counter.classList.contains("percent") ? "%" : "");
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
    client: "Global Investment Bank",
    industry: "Financial Services",
    location: "North America, Europe, APAC",
    scope: "200+ legacy applications migrated",
    challenge: [
      "Legacy on‑premise infrastructure with spiraling maintenance costs",
      "Peak trading hours caused performance bottlenecks and scalability limits",
      "Manual provisioning and lack of automation slowed time‑to‑market",
      "Regulatory compliance required strict security and audit controls",
    ],
    solutionSteps: [
      {
        title: "Assessment & Planning",
        desc: "Comprehensive portfolio analysis, dependency mapping, and TCO modelling.",
      },
      {
        title: "Cloud Foundation",
        desc: "Landing zones on AWS & Azure with built‑in security, identity, and governance.",
      },
      {
        title: "Migration Waves",
        desc: "Lift‑and‑shift, re‑platforming, and re‑architecting of 200+ apps in 9 months.",
      },
      {
        title: "Optimization & Automation",
        desc: "Auto‑scaling, spot instances, and FinOps practices reduced costs continuously.",
      },
    ],
    results: [
      { value: 40, label: "Infrastructure cost reduction", suffix: "%" },
      { value: 200, label: "Applications migrated", suffix: "+" },
      { value: 99.9, label: "Trading platform uptime", suffix: "%" },
      { value: 60, label: "Faster provisioning", suffix: "%" },
    ],
    testimonial: {
      quote:
        "Galacticos delivered a flawless migration during one of the most volatile market periods. Our trading platforms are now more resilient, scalable, and cost‑effective than ever.",
      author: "CIO, Global Investment Bank",
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
            radial-gradient(circle at 20% 30%, rgba(37,99,235,0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(124,58,237,0.04) 0%, transparent 40%),
            url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80");
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
          background: rgba(37,99,235,0.2);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(37,99,235,0.3);
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
          background: linear-gradient(135deg, #0a2b5e, #1e3a8a, #312e81, #4c1d95);
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
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.3);
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
          background: linear-gradient(145deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* ---------- CLIENT OVERVIEW CARD ---------- */
        .client-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 40px;
          margin-bottom: 80px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 25px 40px -15px rgba(0,0,0,0.1);
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 30px;
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

        /* ---------- CHALLENGES ---------- */
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
          box-shadow: 0 25px 35px -12px rgba(37,99,235,0.15);
          border-color: #2563eb30;
        }
        .challenge-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          background: linear-gradient(145deg, #2563eb10, #7c3aed10);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
        }
        .challenge-text {
          font-size: 16px;
          line-height: 1.6;
          color: #334155;
        }

        /* ---------- SOLUTION TIMELINE ---------- */
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
          background: linear-gradient(90deg, #2563eb, #7c3aed);
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
          background: linear-gradient(145deg, #2563eb, #7c3aed);
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

        /* ---------- ARCHITECTURE ILLUSTRATION ---------- */
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
          border-color: #2563eb;
        }
        .arch-item svg {
          width: 40px;
          height: 40px;
          margin-bottom: 8px;
        }
        .arch-connector {
          font-size: 28px;
          color: #2563eb;
          font-weight: 300;
        }

        /* ---------- RESULTS ---------- */
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
          background: linear-gradient(145deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          line-height: 1;
        }
        .result-label {
          font-size: 16px;
          color: #475569;
        }

        /* ---------- TESTIMONIAL ---------- */
        .testimonial {
          background: linear-gradient(145deg, #2563eb08, #7c3aed08);
          border-left: 6px solid #2563eb;
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
          color: #2563eb10;
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
          color: #2563eb;
        }

        /* ---------- RELATED SERVICES ---------- */
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
          box-shadow: 0 25px 35px -15px rgba(37,99,235,0.15);
          border-color: #2563eb;
        }
        .service-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(145deg, #2563eb10, #7c3aed10);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #2563eb;
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
          color: #2563eb;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        .service-link:hover {
          border-bottom-color: #2563eb;
        }

        /* ---------- BACK LINK ---------- */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          padding: 12px 28px;
          background: white;
          border-radius: 50px;
          box-shadow: 0 8px 18px -8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .back-link:hover {
          background: #2563eb;
          color: white;
          transform: translateX(-5px);
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 1100px) {
          .client-card { grid-template-columns: 1fr 1fr; }
          .timeline { flex-wrap: wrap; justify-content: center; gap: 20px; }
          .timeline::before { display: none; }
          .results-grid { grid-template-columns: repeat(2, 1fr); }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px; }
          .hero-content { left: 30px; bottom: 30px; }
          .client-card { grid-template-columns: 1fr; }
          .challenges-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .testimonial-quote { font-size: 18px; }
          .section-title { font-size: 30px; }
        }
        @media (max-width: 520px) {
          .hero-title { font-size: 32px; }
          .hero { height: 400px; }
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
          {/* Animated SVG icons */}
          <div className="hero-svg-icon" style={{ top: '15%', left: '10%' }}>
            <svg viewBox="0 0 100 100" width="80" height="80">
              <defs><linearGradient id="c1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#6366f1"/></linearGradient></defs>
              <path d="M75 60 Q85 50 75 40 Q70 25 55 30 Q45 15 30 25 Q15 30 20 45 Q10 60 25 70 Q35 80 50 75 Q65 85 75 75 Q90 70 75 60Z" fill="url(#c1)" opacity="0.9"/>
            </svg>
          </div>
          <div className="hero-svg-icon" style={{ top: '60%', left: '80%', animationDuration: '16s' }}>
            <svg viewBox="0 0 100 100" width="70" height="70">
              <polygon points="50,15 80,70 50,60 20,70" fill="#f43f5e" opacity="0.9"/>
            </svg>
          </div>
          <div className="hero-svg-icon" style={{ top: '25%', left: '85%', animationDuration: '14s' }}>
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#8b5cf6" strokeWidth="6" strokeDasharray="6 6"/>
            </svg>
          </div>
          <div className="hero-svg-icon" style={{ top: '70%', left: '20%', animationDuration: '18s' }}>
            <svg viewBox="0 0 100 100" width="75" height="75">
              <ellipse cx="50" cy="35" rx="30" ry="12" fill="#10b981" opacity="0.8"/>
            </svg>
          </div>
        </div>
        <div className="hero-content">
          <span className="hero-tag">CASE STUDY</span>
          <h1 className="hero-title">Cloud Migration & Cost Optimization</h1>
          <p className="hero-subtitle">for a Global Investment Bank</p>
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
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>Target Architecture</h3>
          <div className="arch-diagram">
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>On‑prem</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
              <span>AWS</span>
            </div>
            <span className="arch-connector">+</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/></svg>
              <span>Azure</span>
            </div>
            <span className="arch-connector">⚙️</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
              <span>K8s</span>
            </div>
          </div>
          <p style={{ color: '#475569', marginTop: '20px' }}>Multi‑cloud foundation with automated CI/CD and infrastructure‑as‑code.</p>
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
                className="result-number"
                ref={(el) => (countersRef.current[idx] = el)}
                data-target={result.value}
              >
                0{result.suffix === "%" ? "%" : ""}
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/></svg>
            </div>
            <div className="service-title">SAP S/4HANA</div>
            <div className="service-desc">End‑to‑end ERP transformation for global enterprises.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>
            </div>
            <div className="service-title">Hyperion EPM</div>
            <div className="service-desc">Financial close & planning modernization.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z"/><path d="M2 12h20"/></svg>
            </div>
            <div className="service-title">AI & Analytics</div>
            <div className="service-desc">Predictive insights and real‑time intelligence.</div>
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