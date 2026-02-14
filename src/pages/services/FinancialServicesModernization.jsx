import React, { useEffect, useRef } from "react";

export default function HyperionEPMModernization() {
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
                counter.innerText = Math.round(count) + (counter.classList.contains("percent") ? "%" : "+");
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target + (counter.classList.contains("percent") ? "%" : "+");
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
    client: "Global Financial Services Firm",
    industry: "Financial Services",
    location: "North America, Europe",
    scope: "Hyperion EPM upgrade to Oracle EPM Cloud",
    timeline: "9 months",
    challenge: [
      "Legacy on‑premise Hyperion with custom scripts – expensive to maintain",
      "Manual consolidation and close processes took 12+ days",
      "Data silos across planning, budgeting, and forecasting",
      "Slow reporting hindered real‑time decision making",
    ],
    solutionSteps: [
      {
        title: "Assessment & Roadmap",
        desc: "Analyzed existing HFM, Essbase, and Planning modules; defined migration strategy.",
      },
      {
        title: "EPM Cloud Migration",
        desc: "Lift‑and‑shift to Oracle EPM Cloud with data validation and parallel runs.",
      },
      {
        title: "Process Redesign",
        desc: "Automated consolidations, intercompany eliminations, and currency conversion.",
      },
      {
        title: "Training & Governance",
        desc: "Enabled finance teams with new dashboards and self‑service reporting.",
      },
    ],
    results: [
      { value: 50, label: "Faster financial close", suffix: "%" },
      { value: 40, label: "TCO reduction", suffix: "%" },
      { value: 200, label: "Active users", suffix: "+" },
      { value: 99.9, label: "System uptime", suffix: "%" },
    ],
    testimonial: {
      quote:
        "Galacticos guided our Hyperion modernization with minimal disruption. We now have a unified, cloud‑native EPM platform that empowers real‑time planning and analysis.",
      author: "CFO, Global Financial Services Firm",
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
            radial-gradient(circle at 20% 30%, rgba(234,179,8,0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(245,158,11,0.04) 0%, transparent 40%),
            url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80");
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
          background: rgba(234,179,8,0.2);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(234,179,8,0.3);
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
          background: linear-gradient(135deg, #0f172a, #1e293b, #334155, #0f172a);
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
        /* Hyperion-specific icons */
        .cube-icon { animation: spin 20s infinite linear; }
        .chart-icon { animation: pulse-chart 3s infinite; }
        .db-icon { animation: float-db 14s infinite alternate; }
        .cloud-icon { animation: float-cloud 16s infinite alternate; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-chart { 0%,100% { opacity: 0.8; } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes float-db { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }
        @keyframes float-cloud { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }

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
          background: rgba(234,179,8,0.2);
          backdrop-filter: blur(6px);
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border: 1px solid rgba(234,179,8,0.3);
          color: #eab308;
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
          background: linear-gradient(145deg, #eab308, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #eab308, #f59e0b);
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
          box-shadow: 0 25px 35px -12px rgba(234,179,8,0.15);
          border-color: #eab30830;
        }
        .challenge-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          background: linear-gradient(145deg, #eab30810, #f59e0b10);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #eab308;
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
          background: linear-gradient(90deg, #eab308, #f59e0b);
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
          background: linear-gradient(145deg, #eab308, #f59e0b);
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
          border-color: #eab308;
        }
        .arch-item svg {
          width: 40px;
          height: 40px;
          margin-bottom: 8px;
        }
        .arch-connector {
          font-size: 28px;
          color: #eab308;
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
          background: linear-gradient(145deg, #eab308, #f59e0b);
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
          background: linear-gradient(145deg, #eab30808, #f59e0b08);
          border-left: 6px solid #eab308;
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
          color: #eab30810;
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
          color: #eab308;
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
          box-shadow: 0 25px 35px -15px rgba(234,179,8,0.15);
          border-color: #eab308;
        }
        .service-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(145deg, #eab30810, #f59e0b10);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #eab308;
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
          color: #eab308;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        .service-link:hover {
          border-bottom-color: #eab308;
        }

        /* Back link */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #eab308;
          text-decoration: none;
          padding: 12px 28px;
          background: white;
          border-radius: 50px;
          box-shadow: 0 8px 18px -8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .back-link:hover {
          background: #eab308;
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
          {/* Cube (EPM) */}
          <div className="hero-svg-icon cube-icon" style={{ top: '15%', left: '10%' }}>
            <svg viewBox="0 0 100 100" width="80" height="80">
              <path d="M20 40 L50 20 L80 40 L50 60 Z" fill="none" stroke="#eab308" strokeWidth="4"/>
              <path d="M20 40 L20 70 L50 90 L80 70 L80 40" fill="none" stroke="#eab308" strokeWidth="4"/>
              <line x1="50" y1="60" x2="50" y2="90" stroke="#eab308" strokeWidth="4"/>
            </svg>
          </div>
          {/* Chart */}
          <div className="hero-svg-icon chart-icon" style={{ top: '60%', left: '75%', animationDuration: '16s' }}>
            <svg viewBox="0 0 100 100" width="70" height="70">
              <rect x="20" y="50" width="15" height="30" fill="#eab308" opacity="0.8">
                <animate attributeName="height" values="30;40;30" dur="2s" repeatCount="indefinite"/>
              </rect>
              <rect x="42" y="30" width="15" height="50" fill="#f59e0b" opacity="0.8">
                <animate attributeName="height" values="50;60;50" dur="2.3s" repeatCount="indefinite"/>
              </rect>
              <rect x="64" y="20" width="15" height="60" fill="#eab308" opacity="0.8">
                <animate attributeName="height" values="60;70;60" dur="2.6s" repeatCount="indefinite"/>
              </rect>
            </svg>
          </div>
          {/* Database */}
          <div className="hero-svg-icon db-icon" style={{ top: '25%', left: '80%', animationDuration: '14s' }}>
            <svg viewBox="0 0 100 100" width="60" height="60">
              <ellipse cx="50" cy="35" rx="30" ry="12" fill="#eab308" opacity="0.9"/>
              <path d="M20 35 L20 65 Q20 75 50 75 Q80 75 80 65 L80 35" stroke="#eab308" strokeWidth="4" fill="none"/>
              <ellipse cx="50" cy="65" rx="30" ry="12" fill="#f59e0b" opacity="0.7"/>
            </svg>
          </div>
          {/* Cloud with $ */}
          <div className="hero-svg-icon cloud-icon" style={{ top: '70%', left: '20%', animationDuration: '18s' }}>
            <svg viewBox="0 0 100 100" width="75" height="75">
              <path d="M70 55 Q80 45 70 35 Q60 20 45 30 Q35 15 25 25 Q15 30 20 45 Q10 55 25 65 Q30 75 45 70 Q55 80 70 70 Q80 70 70 55Z" fill="#eab308" opacity="0.9"/>
              <text x="42" y="55" fontSize="30" fill="white" fontWeight="bold">$</text>
            </svg>
          </div>
        </div>
        <div className="hero-content">
          <span className="hero-tag">CASE STUDY</span>
          <h1 className="hero-title">Oracle Hyperion EPM Modernization</h1>
          <p className="hero-subtitle">for a Global Financial Services Firm</p>
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
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>EPM Cloud Architecture</h3>
          <div className="arch-diagram">
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#eab308"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>On‑prem</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#eab308"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
              <span>EPM Cloud</span>
            </div>
            <span className="arch-connector">+</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#eab308"><rect x="2" y="7" width="20" height="14" rx="2" /></svg>
              <span>Data Hub</span>
            </div>
          </div>
          <p style={{ color: '#475569', marginTop: '20px' }}>Seamless migration with zero downtime, automated consolidation, and real‑time dashboards.</p>
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
                0{result.suffix}
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
            <div className="service-title">SAP S/4HANA</div>
            <div className="service-desc">End‑to‑end ERP transformation.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/></svg>
            </div>
            <div className="service-title">Cloud Automation</div>
            <div className="service-desc">RPA and intelligent automation.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z"/><path d="M2 12h20"/></svg>
            </div>
            <div className="service-title">AI & Analytics</div>
            <div className="service-desc">Predictive insights and BI.</div>
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