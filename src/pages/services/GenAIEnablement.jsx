import React, { useEffect, useRef } from "react";

export default function AIPoweredDemandForecasting() {
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
    client: "Leading National Retail Chain",
    industry: "Retail / E‑commerce",
    location: "North America",
    scope: "AI‑based demand forecasting platform",
    timeline: "9 months",
    challenge: [
      "Forecast accuracy below 60% led to frequent stockouts and overstock",
      "Manual planning processes across 500+ stores caused delays",
      "Fragmented data sources (POS, inventory, promotions) with no integration",
      "Seasonal demand patterns not captured, resulting in lost revenue",
    ],
    solutionSteps: [
      {
        title: "Data Audit & Integration",
        desc: "Consolidated 10+ data sources into a unified data lake.",
      },
      {
        title: "ML Model Development",
        desc: "Built ensemble models (XGBoost, LSTM) for SKU‑level forecasts.",
      },
      {
        title: "Real‑Time Integration",
        desc: "Deployed API layer to feed forecasts into store and ERP systems.",
      },
      {
        title: "Change Management",
        desc: "Trained planning teams, implemented dashboards and alerts.",
      },
    ],
    results: [
      { value: 25, label: "Forecast accuracy improvement", suffix: "%", class: "percent" },
      { value: 60, label: "Stockout reduction", suffix: "%", class: "percent" },
      { value: 8, label: "Annual inventory savings", suffix: "M", class: "dollar" },
      { value: 99, label: "On‑shelf availability", suffix: "%", class: "percent" },
    ],
    testimonial: {
      quote:
        "Galacticos delivered a game‑changing AI forecasting solution. We now predict demand with unprecedented accuracy, reduce waste, and keep our shelves stocked – even during peak seasons.",
      author: "VP of Supply Chain, National Retail Chain",
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
            radial-gradient(circle at 20% 30%, rgba(124,58,237,0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(192,38,211,0.04) 0%, transparent 40%),
            url("https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1920&q=80");
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
          background: rgba(124,58,237,0.2);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(124,58,237,0.3);
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
          background: linear-gradient(135deg, #6d28d9, #7c3aed, #a855f7, #c026d3);
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
        /* AI-specific icons */
        .neural-icon { animation: pulse-neural 3s infinite; }
        .brain-icon { animation: float-brain 14s infinite alternate; }
        .node-icon { animation: pulse-node 2.5s infinite; }
        .wave-icon { animation: wave-pulse 4s infinite; }
        @keyframes pulse-neural { 0%,100% { opacity: 0.8; } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes float-brain { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }
        @keyframes pulse-node { 0%,100% { transform: scale(1); } 50% { transform: scale(1.3); } }
        @keyframes wave-pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }

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
          background: rgba(124,58,237,0.2);
          backdrop-filter: blur(6px);
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border: 1px solid rgba(124,58,237,0.3);
          color: #a855f7;
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
          background: linear-gradient(145deg, #7c3aed, #c026d3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #7c3aed, #c026d3);
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
          box-shadow: 0 25px 35px -12px rgba(124,58,237,0.15);
          border-color: #7c3aed30;
        }
        .challenge-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          background: linear-gradient(145deg, #7c3aed10, #c026d310);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7c3aed;
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
          background: linear-gradient(90deg, #7c3aed, #c026d3);
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
          background: linear-gradient(145deg, #7c3aed, #c026d3);
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
          border-color: #7c3aed;
        }
        .arch-item svg {
          width: 40px;
          height: 40px;
          margin-bottom: 8px;
        }
        .arch-connector {
          font-size: 28px;
          color: #7c3aed;
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
          background: linear-gradient(145deg, #7c3aed, #c026d3);
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
          background: linear-gradient(145deg, #7c3aed08, #c026d308);
          border-left: 6px solid #7c3aed;
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
          color: #7c3aed10;
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
          color: #7c3aed;
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
          box-shadow: 0 25px 35px -15px rgba(124,58,237,0.15);
          border-color: #7c3aed;
        }
        .service-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(145deg, #7c3aed10, #c026d310);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #7c3aed;
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
          color: #7c3aed;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        .service-link:hover {
          border-bottom-color: #7c3aed;
        }

        /* Back link */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #7c3aed;
          text-decoration: none;
          padding: 12px 28px;
          background: white;
          border-radius: 50px;
          box-shadow: 0 8px 18px -8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .back-link:hover {
          background: #7c3aed;
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
          {/* Neural network */}
          <div className="hero-svg-icon neural-icon" style={{ top: '15%', left: '10%' }}>
            <svg viewBox="0 0 100 100" width="80" height="80">
              <circle cx="30" cy="30" r="8" fill="white" opacity="0.9"/>
              <circle cx="70" cy="30" r="8" fill="white" opacity="0.9"/>
              <circle cx="50" cy="70" r="8" fill="white" opacity="0.9"/>
              <circle cx="20" cy="60" r="6" fill="white" opacity="0.7"/>
              <circle cx="80" cy="60" r="6" fill="white" opacity="0.7"/>
              <path d="M30 30 L50 70" stroke="white" strokeWidth="3" strokeDasharray="4 4"/>
              <path d="M70 30 L50 70" stroke="white" strokeWidth="3" strokeDasharray="4 4"/>
              <path d="M30 30 L20 60" stroke="white" strokeWidth="3" strokeDasharray="4 4"/>
              <path d="M70 30 L80 60" stroke="white" strokeWidth="3" strokeDasharray="4 4"/>
            </svg>
          </div>
          {/* Brain */}
          <div className="hero-svg-icon brain-icon" style={{ top: '60%', left: '75%', animationDuration: '16s' }}>
            <svg viewBox="0 0 100 100" width="70" height="70">
              <path d="M50 20 Q35 25 30 40 Q25 55 35 70 Q45 80 60 75 Q75 70 70 55 Q80 45 70 35 Q65 20 50 20Z" fill="white" opacity="0.9"/>
              <circle cx="45" cy="40" r="4" fill="#7c3aed"/>
              <circle cx="55" cy="40" r="4" fill="#7c3aed"/>
            </svg>
          </div>
          {/* Data node cluster */}
          <div className="hero-svg-icon node-icon" style={{ top: '25%', left: '80%', animationDuration: '14s' }}>
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="30" cy="30" r="6" fill="white"/>
              <circle cx="60" cy="40" r="8" fill="white"/>
              <circle cx="45" cy="70" r="7" fill="white"/>
              <circle cx="70" cy="70" r="5" fill="white"/>
            </svg>
          </div>
          {/* Wave / pulse */}
          <div className="hero-svg-icon wave-icon" style={{ top: '70%', left: '20%', animationDuration: '18s' }}>
            <svg viewBox="0 0 100 100" width="75" height="75">
              <path d="M20 50 Q35 35 50 50 Q65 65 80 50" stroke="white" strokeWidth="4" fill="none"/>
              <path d="M20 60 Q35 45 50 60 Q65 75 80 60" stroke="white" strokeWidth="4" fill="none" opacity="0.7"/>
            </svg>
          </div>
        </div>
        <div className="hero-content">
          <span className="hero-tag">CASE STUDY</span>
          <h1 className="hero-title">AI‑Powered Demand Forecasting</h1>
          <p className="hero-subtitle">for a Leading National Retail Chain</p>
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
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>AI Forecasting Architecture</h3>
          <div className="arch-diagram">
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>Data Lake</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
              <span>ML Engine</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>BI Dashboards</span>
            </div>
          </div>
          <p style={{ color: '#475569', marginTop: '20px' }}>Ensemble models (XGBoost + LSTM) integrated with store systems – 25% accuracy gain.</p>
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
            <div className="service-desc">Scalable cloud infrastructure for AI.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/></svg>
            </div>
            <div className="service-title">Intelligent Automation</div>
            <div className="service-desc">RPA and AI‑driven workflows.</div>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>
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