import React, { useEffect, useRef } from "react";

export default function SAPTransformationCaseStudy() {
  // ========== REFS FOR SCROLL ANIMATIONS ==========
  const animatedElements = useRef([]);
  const countersRef = useRef([]);

  // ========== HERO CANVAS ANIMATION (WAVE PARTICLES) ==========
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = 60;
    let animationFrame;

    const resize = () => {
      const hero = document.querySelector(".hero");
      if (hero) {
        width = hero.offsetWidth;
        height = hero.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 3 + 1,
          baseY: Math.random() * height,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Wave motion
        p.y = p.baseY + Math.sin(Date.now() * 0.002 + p.phase) * 15;
        p.x += p.vx;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.sin(Date.now() * 0.005 + p.phase) * 0.3})`;
        ctx.shadowColor = "rgba(37, 99, 235, 0.5)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(drawParticles);
    };

    const init = () => {
      resize();
      createParticles();
      drawParticles();
    };

    init();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ========== SCROLL ANIMATION OBSERVER ==========
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Start counters if it's a result number
            if (entry.target.classList.contains("result-number")) {
              const counter = entry.target;
              const target = +counter.getAttribute("data-target");
              let count = 0;
              const updateCount = () => {
                const increment = target / 50;
                if (count < target) {
                  count = Math.min(count + increment, target);
                  counter.innerText =
                    Math.round(count) +
                    (counter.classList.contains("percent") ? "%" : "+");
                  requestAnimationFrame(updateCount);
                } else {
                  counter.innerText =
                    target + (counter.classList.contains("percent") ? "%" : "+");
                }
              };
              updateCount();
              observer.unobserve(counter);
            } else {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    animatedElements.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ========== CASE STUDY DATA (FRESH CONTENT) ==========
  const caseData = {
    client: "EuroTech Industries",
    industry: "Industrial Manufacturing & High-Tech",
    location: "Germany, France, China, USA",
    scope: "SAP ECC 6.0 to S/4HANA 2023, 12 modules, 8TB data",
    timeline: "12 months",
    challenge: [
      "Fragmented legacy systems with 15+ years of custom ABAP code – high maintenance burden",
      "Monthly closing took 10 days due to batch processing and manual interventions",
      "Limited real‑time visibility across global supply chain",
      "Growing compliance pressure (GDPR, SOX) required robust audit trails",
    ],
    solutionSteps: [
      {
        title: "Blueprint & Assessment",
        desc: "Analyzed 1,200+ custom objects, defined target architecture, and prepared data migration strategy.",
      },
      {
        title: "S/4HANA Conversion",
        desc: "Brownfield conversion using SAP DMO – 8TB database migrated with <2 hours downtime.",
      },
      {
        title: "Fiori & UX Transformation",
        desc: "Deployed 80+ role‑based Fiori apps for finance, procurement, logistics, and HR.",
      },
      {
        title: "Integration & Extensions",
        desc: "Connected to 20+ non‑SAP systems (MES, CRM, TMS) via SAP BTP and CPI.",
      },
    ],
    results: [
      { value: 50, label: "Faster closing (10 days → 5 days)", suffix: "%" },
      { value: 99.98, label: "System availability", suffix: "%" },
      { value: 35, label: "Reduction in TCO", suffix: "%" },
      { value: 300, label: "Manual processes automated", suffix: "+" },
    ],
    testimonial: {
      quote:
        "Galacticos' team brought deep SAP expertise and a structured methodology that made our S/4HANA journey surprisingly smooth. We now have a future‑ready platform with real‑time insights across our entire value chain.",
      author: "VP of IT, EuroTech Industries",
    },
    techStack: [
      { name: "SAP S/4HANA 2023", icon: "sap" },
      { name: "SAP Fiori 6.0", icon: "fiori" },
      { name: "SAP BTP", icon: "btp" },
      { name: "SAP DMO", icon: "dmo" },
      { name: "SAP CPI", icon: "integration" },
      { name: "SAP Analytics Cloud", icon: "analytics" },
    ],
    journey: [
      { phase: "Discovery & Planning", duration: "3 months", desc: "System analysis, custom code remediation planning, stakeholder workshops." },
      { phase: "Sandbox & Prototype", duration: "2 months", desc: "S/4HANA sandbox setup, Fiori prototype for key users." },
      { phase: "Conversion Execution", duration: "1 month", desc: "Technical conversion with DMO, near‑zero downtime." },
      { phase: "Fiori Rollout", duration: "4 months", desc: "Phased rollout of 80+ Fiori apps across 8 countries." },
      { phase: "Integration & Optimization", duration: "2 months", desc: "Integration with non‑SAP systems, performance tuning." },
    ],
    benefits: [
      { title: "80% Faster Reporting", desc: "Real‑time operational reports on S/4HANA." },
      { title: "Zero Security Incidents", desc: "Granular access controls and audit logs." },
      { title: "30% Code Reduction", desc: "Simplified custom code, eliminated redundancies." },
      { title: "150+ Users Trained", desc: "On Fiori and new processes." },
    ],
    relatedCaseStudies: [
      { title: "Cloud Migration for Global Bank", industry: "Financial Services", link: "#" },
      { title: "Hyperion EPM Modernization", industry: "Financial Services", link: "#" },
      { title: "AI‑Driven Demand Forecasting", industry: "Retail", link: "#" },
    ],
  };

  // Helper to render tech icons (simplified)
  const renderIcon = (icon) => {
    switch (icon) {
      case "sap":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
            <path d="M8 8h8v8H8z" strokeWidth="1.5" />
          </svg>
        );
      case "fiori":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
            <path d="M12 8v8M8 12h8" strokeWidth="1.5" />
          </svg>
        );
      case "btp":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="6" r="3" strokeWidth="1.5" />
            <circle cx="6" cy="18" r="3" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="3" strokeWidth="1.5" />
            <line x1="9" y1="8" x2="9" y2="16" strokeWidth="1.5" />
            <line x1="15" y1="8" x2="15" y2="16" strokeWidth="1.5" />
          </svg>
        );
      case "dmo":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16v16H4z" strokeWidth="1.5" />
            <path d="M8 8l8 8M16 8l-8 8" strokeWidth="1.5" />
          </svg>
        );
      case "integration":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="6" cy="6" r="3" strokeWidth="1.5" />
            <circle cx="18" cy="12" r="3" strokeWidth="1.5" />
            <circle cx="6" cy="18" r="3" strokeWidth="1.5" />
            <line x1="9" y1="7" x2="15" y2="11" strokeWidth="1.5" />
            <line x1="9" y1="17" x2="15" y2="13" strokeWidth="1.5" />
          </svg>
        );
      case "analytics":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" strokeWidth="1.5" />
            <path d="M15 4l5 5-5 5" strokeWidth="1.5" />
            <line x1="3" y1="20" x2="21" y2="20" strokeWidth="1.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="case-study">
      <style>{`
        /* ---------------------------------------------
           GLOBAL & COSMIC BACKGROUND
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

        /* Floating particles (background) */
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

        /* Fade-up animation on scroll */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- HERO SECTION (WAVE PARTICLES) ---------- */
        .hero {
          position: relative;
          height: 500px;
          margin-bottom: 80px;
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, #0f2b5e, #1e3a8a, #2d3f7a, #1e4b6a);
          box-shadow: 0 30px 50px -20px rgba(0,0,0,0.4);
        }
        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; /* particles are decorative */
          z-index: 1;
        }
        .hero-content {
          position: absolute;
          bottom: 60px;
          left: 60px;
          color: white;
          z-index: 2;
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
          animation: fadeInUp 0.8s ease;
        }
        .hero-title {
          font-size: 56px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
          text-shadow: 0 4px 30px rgba(0,0,0,0.4);
          animation: fadeInUp 0.8s ease 0.1s both;
        }
        .hero-subtitle {
          font-size: 20px;
          opacity: 0.9;
          font-weight: 400;
          animation: fadeInUp 0.8s ease 0.2s both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Scroll down indicator */
        .scroll-down {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          color: white;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.7;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
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
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 25px 35px -12px rgba(37,99,235,0.2);
          border-color: #2563eb;
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
          transition: all 0.3s ease;
        }
        .timeline-step:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 20px 30px -10px rgba(37,99,235,0.15);
          border-color: #2563eb;
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

        /* ---------- ARCHITECTURE HIGHLIGHT ---------- */
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
          transform: translateY(-8px) rotate(2deg);
          border-color: #2563eb;
          box-shadow: 0 25px 35px -12px rgba(37,99,235,0.2);
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
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.5; transform: scale(1); }
        }

        /* ---------- TECHNOLOGY STACK ---------- */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          margin: 40px 0 80px;
        }
        .tech-card {
          background: white;
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 10px 20px -8px rgba(0,0,0,0.05);
          border: 1px solid #f0f4f9;
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: #2563eb;
          box-shadow: 0 20px 30px -12px rgba(37,99,235,0.15);
        }
        .tech-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 12px;
          color: #2563eb;
        }
        .tech-name {
          font-weight: 600;
          color: #0f172a;
        }

        /* ---------- JOURNEY TIMELINE (VERTICAL) ---------- */
        .journey {
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(6px);
          border-radius: 30px;
          padding: 40px;
          margin-bottom: 80px;
        }
        .journey-step {
          display: flex;
          gap: 30px;
          padding: 20px 0;
          border-bottom: 1px dashed #cbd5e1;
          transition: background 0.3s;
        }
        .journey-step:hover {
          background: rgba(37,99,235,0.03);
          border-radius: 12px;
          padding-left: 15px;
        }
        .journey-step:last-child {
          border-bottom: none;
        }
        .journey-phase {
          width: 140px;
          font-weight: 700;
          color: #2563eb;
        }
        .journey-duration {
          width: 100px;
          color: #64748b;
          font-size: 14px;
        }
        .journey-desc {
          flex: 1;
          color: #334155;
        }

        /* ---------- KEY BENEFITS ---------- */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 40px 0 80px;
        }
        .benefit-card {
          background: white;
          border-radius: 24px;
          padding: 30px 20px;
          text-align: center;
          box-shadow: 0 20px 30px -10px rgba(0,0,0,0.05);
          border: 1px solid #eef2f6;
          transition: all 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 35px -12px rgba(37,99,235,0.15);
          border-color: #2563eb;
        }
        .benefit-number {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(145deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }
        .benefit-desc {
          font-size: 14px;
          color: #64748b;
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
          transition: all 0.3s ease;
        }
        .result-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 25px 40px -15px rgba(37,99,235,0.15);
          border-color: #2563eb;
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
          transition: transform 0.3s;
        }
        .testimonial:hover {
          transform: scale(1.01);
          box-shadow: 0 20px 30px -12px rgba(37,99,235,0.1);
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

        /* ---------- RELATED CASE STUDIES ---------- */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin: 40px 0 60px;
        }
        .related-card {
          background: white;
          border-radius: 24px;
          padding: 30px 25px;
          border: 1px solid #eef2f6;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .related-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 35px -15px rgba(37,99,235,0.15);
          border-color: #2563eb;
        }
        .related-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #0f172a;
        }
        .related-industry {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 16px;
        }
        .related-link {
          font-weight: 600;
          color: #2563eb;
        }

        /* ---------- CTA ---------- */
        .cta-section {
          background: linear-gradient(145deg, #2563eb, #7c3aed);
          border-radius: 40px;
          padding: 60px 40px;
          text-align: center;
          color: white;
          margin-bottom: 80px;
        }
        .cta-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .cta-desc {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-button {
          display: inline-block;
          background: white;
          color: #2563eb;
          font-weight: 700;
          padding: 16px 40px;
          border-radius: 60px;
          text-decoration: none;
          font-size: 18px;
          box-shadow: 0 20px 30px -10px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: scale(1.05) translateY(-3px);
          box-shadow: 0 25px 35px -8px rgba(0,0,0,0.3);
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
          .client-card { grid-template-columns: repeat(3, 1fr); }
          .timeline { flex-wrap: wrap; justify-content: center; gap: 20px; }
          .timeline::before { display: none; }
          .results-grid { grid-template-columns: repeat(2, 1fr); }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px; }
          .hero-content { left: 30px; bottom: 30px; }
          .client-card { grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 30px; }
          .challenges-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
          .benefits-grid { grid-template-columns: 1fr; }
          .testimonial-quote { font-size: 18px; }
          .section-title { font-size: 30px; }
          .journey-step { flex-direction: column; gap: 10px; }
          .journey-phase, .journey-duration { width: auto; }
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

      {/* ---------- HERO WITH WAVE CANVAS ---------- */}
      <div className="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <span className="hero-tag">CASE STUDY</span>
          <h1 className="hero-title">SAP S/4HANA Transformation</h1>
          <p className="hero-subtitle">for EuroTech Industries</p>
        </div>
        <div className="scroll-down">
          <span>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>

      <div className="content-wrapper">
        {/* ---------- CLIENT OVERVIEW ---------- */}
        <div
          className="client-card fade-up"
          ref={(el) => (animatedElements.current[0] = el)}
        >
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
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[1] = el)}>
          <h2 className="section-title">The <span>Challenge</span></h2>
          <div className="section-divider" />
        </div>
        <div className="challenges-grid">
          {caseData.challenge.map((item, idx) => (
            <div
              className="challenge-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[2 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
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
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[6] = el)}>
          <h2 className="section-title">Our <span>Solution</span></h2>
          <div className="section-divider" />
        </div>
        <div className="timeline">
          {caseData.solutionSteps.map((step, idx) => (
            <div
              className="timeline-step fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[7 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="step-number">{idx + 1}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- ARCHITECTURE HIGHLIGHT ---------- */}
        <div className="architecture fade-up" ref={(el) => (animatedElements.current[11] = el)}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>SAP S/4HANA Landscape</h3>
          <div className="arch-diagram">
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>ECC 6.0</span>
            </div>
            <span className="arch-connector">→</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
              <span>S/4HANA</span>
            </div>
            <span className="arch-connector">+</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
              <span>Fiori</span>
            </div>
            <span className="arch-connector">⚙️</span>
            <div className="arch-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
              <span>BTP</span>
            </div>
          </div>
          <p style={{ color: '#475569', marginTop: '20px' }}>Brownfield conversion with SAP DMO, 80+ Fiori apps, integrated via BTP.</p>
        </div>

        {/* ---------- TECHNOLOGY STACK ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[12] = el)}>
          <h2 className="section-title">Technology <span>Stack</span></h2>
          <div className="section-divider" />
        </div>
        <div className="tech-grid">
          {caseData.techStack.map((tech, idx) => (
            <div
              className="tech-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[13 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="tech-icon">{renderIcon(tech.icon)}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>

        {/* ---------- MIGRATION JOURNEY ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[19] = el)}>
          <h2 className="section-title">Migration <span>Journey</span></h2>
          <div className="section-divider" />
        </div>
        <div className="journey fade-up" ref={(el) => (animatedElements.current[20] = el)}>
          {caseData.journey.map((step, idx) => (
            <div className="journey-step" key={idx}>
              <div className="journey-phase">{step.phase}</div>
              <div className="journey-duration">{step.duration}</div>
              <div className="journey-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- KEY BENEFITS ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[21] = el)}>
          <h2 className="section-title">Key <span>Benefits</span></h2>
          <div className="section-divider" />
        </div>
        <div className="benefits-grid">
          {caseData.benefits.map((benefit, idx) => (
            <div
              className="benefit-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[22 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="benefit-number">{benefit.title}</div>
              <div className="benefit-desc">{benefit.desc}</div>
            </div>
          ))}
        </div>

        {/* ---------- RESULTS ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[26] = el)}>
          <h2 className="section-title">Key <span>Outcomes</span></h2>
          <div className="section-divider" />
        </div>
        <div className="results-grid">
          {caseData.results.map((result, idx) => (
            <div
              className="result-card fade-up"
              key={idx}
              ref={(el) => {
                animatedElements.current[27 + idx] = el;
                countersRef.current[idx] = el;
              }}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div
                className="result-number"
                data-target={result.value}
              >
                0{result.suffix}
              </div>
              <div className="result-label">{result.label}</div>
            </div>
          ))}
        </div>

        {/* ---------- TESTIMONIAL ---------- */}
        <div className="testimonial fade-up" ref={(el) => (animatedElements.current[31] = el)}>
          <div className="testimonial-quote">{caseData.testimonial.quote}</div>
          <div className="testimonial-author">— {caseData.testimonial.author}</div>
        </div>

        {/* ---------- RELATED CASE STUDIES ---------- */}
        <div className="section-header fade-up" ref={(el) => (animatedElements.current[32] = el)}>
          <h2 className="section-title">Related <span>Case Studies</span></h2>
          <div className="section-divider" />
        </div>
        <div className="related-grid">
          {caseData.relatedCaseStudies.map((item, idx) => (
            <a
              href={item.link}
              className="related-card fade-up"
              key={idx}
              ref={(el) => (animatedElements.current[33 + idx] = el)}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="related-title">{item.title}</div>
              <div className="related-industry">{item.industry}</div>
              <div className="related-link">Read case study →</div>
            </a>
          ))}
        </div>

        {/* ---------- CALL TO ACTION ---------- */}
        <div className="cta-section fade-up" ref={(el) => (animatedElements.current[36] = el)}>
          <h2 className="cta-title">Ready to modernize your SAP landscape?</h2>
          <p className="cta-desc">Let's discuss how we can help you achieve similar results with a tailored S/4HANA strategy.</p>
          <a href="/contact" className="cta-button">Talk to an expert</a>
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