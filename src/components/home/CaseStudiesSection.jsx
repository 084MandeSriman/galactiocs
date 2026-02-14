export default function CaseStudiesSection() {
  // ========== TECHNOLOGY IMAGES (TRANSPARENT PNG) ==========
  // Free CDN sources – replace with your own assets
  const imageSrc = {
    Cloud:
      "https://www.pngmart.com/files/22/Cloud-PNG-Clipart.png",
    SAP:
      "https://peakin.in/wp-content/uploads/2023/08/4-1.jpg",
    Hyperion:
      "https://www.pngmart.com/files/16/3D-Cube-PNG-Photos.png",
    Automation:
      "https://www.pngmart.com/files/22/Robot-PNG-Image.png",
    AIML:
      "https://www.pngmart.com/files/22/Brain-PNG-Photo.png",
    Talent:
      "https://www.pngmart.com/files/17/Silhouette-PNG-Photos.png",
  };

  // ========== UNIQUE ILLUSION OVERLAYS ==========
  const renderIllusion = (category) => {
    switch (category) {
      case "Cloud":
        return (
          <div className="illusion-cloud">
            <div className="wind-streak" style={{ top: "25%" }} />
            <div className="wind-streak" style={{ top: "50%", animationDelay: "0.5s" }} />
            <div className="wind-streak" style={{ top: "75%", animationDelay: "1s" }} />
          </div>
        );
      case "SAP":
        return (
          <div className="illusion-sap">
            <div className="orbit-ring ring-outer" />
            <div className="orbit-ring ring-inner" />
          </div>
        );
      case "Hyperion":
        return (
          <div className="illusion-hyperion">
            <div className="matrix-rain" />
          </div>
        );
      case "Automation":
        return (
          <div className="illusion-automation">
            <div className="radar-beam" />
          </div>
        );
      case "AI / ML":
        return (
          <div className="illusion-ai">
            <div className="neural-pulse" style={{ top: "30%", left: "20%" }} />
            <div className="neural-pulse" style={{ top: "70%", left: "80%" }} />
            <div className="neural-path" />
          </div>
        );
      case "Talent":
        return (
          <div className="illusion-talent">
            <div className="connection-line" style={{ top: "40%", left: "20%" }} />
            <div className="connection-line" style={{ top: "60%", left: "50%" }} />
            <div className="connection-dots" />
          </div>
        );
      default:
        return null;
    }
  };

  // ========== CASE STUDIES (unchanged content) ==========
  const caseStudies = [
    {
      title: "Cloud Migration & Cost Optimization",
      category: "Cloud",
      desc: "Migrated 200+ legacy apps to AWS/Azure for a global bank. Reduced infrastructure costs by 40% and improved scalability for peak trading hours.",
      link: "/case-studies/cloud-migration-bank",
    },
    {
      title: "SAP S/4HANA Transformation",
      category: "SAP",
      desc: "End‑to‑end SAP S/4HANA implementation for a multinational manufacturer. Real‑time supply chain visibility and 99.9% system availability.",
      link: "/case-studies/sap-s4hana-manufacturing",
    },
    {
      title: "Oracle Hyperion EPM Modernization",
      category: "Hyperion",
      desc: "Consolidated financial close and planning for a Fortune 500 retail group. Cut close time from 12 days to 6 and enabled driver‑based forecasting.",
      link: "/case-studies/hyperion-epm-retail",
    },
    {
      title: "Intelligent Automation for Healthcare",
      category: "Automation",
      desc: "Deployed UiPath bots for a healthcare payer. Automated 70% of claims processing, reduced manual errors by 85%, and saved $2M annually.",
      link: "/case-studies/rpa-healthcare",
    },
    {
      title: "AI‑Powered Demand Forecasting",
      category: "AI / ML",
      desc: "Built a predictive analytics platform for a leading retail chain. Improved forecast accuracy by 25% and reduced stockouts by 60%.",
      link: "/case-studies/ai-retail-forecasting",
    },
    {
      title: "Strategic Staffing – 50+ Experts in 4 Weeks",
      category: "Talent",
      desc: "Rapidly sourced and onboarded 50+ certified SAP and cloud professionals for a global SI. Zero bench time, full client satisfaction.",
      link: "/case-study/smarter-business-solutions",
    },
  ];

  return (
    <section id="case-studies" className="case-section">
      <style>{`
        .case-section {
          padding: 80px 24px;
          position: relative;
          background:
            linear-gradient(
              rgba(255,255,255,0.94),
              rgba(255,255,255,0.94)
            ),
            radial-gradient(circle at 20% 30%, rgba(37,99,235,0.04) 0%, transparent 35%),
            radial-gradient(circle at 80% 70%, rgba(124,58,237,0.04) 0%, transparent 35%),
            url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
        }

        .case-title {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #111827;
          position: relative;
          z-index: 2;
        }

        .case-subtitle {
          text-align: center;
          font-size: 18px;
          color: #4b5563;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .case-title::after {
          content: "";
          display: block;
          width: 64px;
          height: 4px;
          margin: 16px auto 0;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          border-radius: 2px;
        }

        .case-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .case-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(229,231,235,0.8);
          box-shadow: 0 20px 35px -8px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
          position: relative;
        }

        .case-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 50px -12px rgba(0,0,0,0.15);
          border-color: rgba(59,130,246,0.3);
        }

        /* ----- IMAGE CONTAINER WITH ILLUSIONS ----- */
        .case-img-container {
          height: 200px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(145deg, #f9fafb, #f0f2f5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-image {
          width: 70%;
          height: auto;
          max-height: 80%;
          object-fit: contain;
          display: block;
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.08));
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .case-card:hover .tech-image {
          transform: scale(1.05);
          filter: drop-shadow(0 12px 20px rgba(0,0,0,0.15));
        }

        /* ----- ILLUSION BASE STYLES ----- */
        .illusion-cloud,
        .illusion-sap,
        .illusion-hyperion,
        .illusion-automation,
        .illusion-ai,
        .illusion-talent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
          overflow: hidden;
        }

        /* 1. CLOUD – Wind Stream Particles */
        .wind-streak {
          position: absolute;
          left: -20%;
          width: 40%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          opacity: 0.6;
          animation: wind 2.5s infinite linear;
          border-radius: 100%;
        }
        @keyframes wind {
          0% { left: -20%; opacity: 0; }
          30% { opacity: 0.8; }
          100% { left: 110%; opacity: 0; }
        }

        /* 2. SAP – Orbital Rings */
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 2px solid rgba(37,99,235,0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: orbit 6s infinite linear;
        }
        .ring-outer {
          width: 130px;
          height: 130px;
          border-top-color: #2563eb;
          border-bottom-color: transparent;
          border-left-color: transparent;
          border-right-color: transparent;
        }
        .ring-inner {
          width: 90px;
          height: 90px;
          border-top-color: transparent;
          border-bottom-color: #7c3aed;
          border-left-color: transparent;
          border-right-color: transparent;
          animation-duration: 4s;
          animation-direction: reverse;
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* 3. HYPERION – Matrix Digital Rain */
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(245,158,11,0) 0%,
            rgba(245,158,11,0.2) 20%,
            rgba(245,158,11,0) 40%
          );
          animation: rain 3s infinite linear;
          mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
        }
        @keyframes rain {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }

        /* 4. AUTOMATION – Radar Scan */
        .radar-beam {
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(6,182,212,0.15),
            transparent
          );
          animation: scan 3s infinite ease-in-out;
        }
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* 5. AI / ML – Neural Pulses + Paths */
        .neural-pulse {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #a78bfa;
          border-radius: 50%;
          box-shadow: 0 0 15px #a78bfa;
          animation: pulse 1.8s infinite alternate;
        }
        .neural-path {
          position: absolute;
          top: 30%;
          left: 20%;
          width: 60%;
          height: 40%;
          border: 1px dashed rgba(167,139,250,0.5);
          border-radius: 50%;
          transform: rotate(10deg);
          animation: morph 4s infinite alternate;
        }
        @keyframes pulse {
          0% { opacity: 0.4; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes morph {
          0% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        /* 6. TALENT – Connection Web */
        .connection-line {
          position: absolute;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #f97316, transparent);
          animation: connect 3s infinite;
        }
        .connection-dots {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 60%;
          height: 60%;
          background-image: radial-gradient(circle, #f97316 2px, transparent 2px);
          background-size: 15px 15px;
          opacity: 0.3;
          animation: dots 6s infinite linear;
        }
        @keyframes connect {
          0% { width: 0px; opacity: 0; }
          50% { width: 60px; opacity: 1; }
          100% { width: 0px; opacity: 0; }
        }
        @keyframes dots {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }

        .case-category {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(17,24,39,0.85);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 20;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .case-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .case-content h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #111827;
        }

        .case-content p {
          font-size: 15px;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .case-link {
          font-size: 14px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .case-link:hover {
          border-bottom-color: #2563eb;
          color: #1e3a8a;
        }

        .case-link::after {
          content: "→";
          transition: transform 0.2s;
        }
        .case-link:hover::after {
          transform: translateX(4px);
        }

        /* RESPONSIVE (unchanged from previous, shortened here) */
        @media (max-width: 1100px) { .case-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 768px) { .case-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .case-img-container { height: 160px; } }
        @media (max-width: 480px) { .case-img-container { height: 140px; } }
      `}</style>

      <h2 className="case-title">Client Success Stories</h2>
      <p className="case-subtitle">
        Real transformations delivered across cloud, ERP, automation, AI, and talent — tailored to each customer’s unique journey.
      </p>

      <div className="case-grid">
        {caseStudies.map((item) => (
          <div className="case-card" key={item.title}>
            <div className="case-img-container">
              {/* TRANSPARENT TECHNOLOGY IMAGE */}
              <img
                src={imageSrc[item.category]}
                alt={item.category}
                className="tech-image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none"; // fallback if image fails
                }}
              />
              {/* LAYERED ILLUSION */}
              {renderIllusion(item.category)}
              <span className="case-category">{item.category}</span>
            </div>
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="case-link" href={item.link}>
                Read case study
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}