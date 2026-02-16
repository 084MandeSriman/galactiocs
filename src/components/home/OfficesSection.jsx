export default function OfficesSection() {
  const offices = [
    {
      name: "Dubai, UAE",
      badge: "GLOBAL HQ",
      icon: "🏢",
      location: "Business Bay, Dubai",
      country: "United Arab Emirates",
      detail: "Strategic Leadership Hub",
      email: "contact@galacticos.ae",
      color: "#ec4899"
    },
    {
      name: "Hyderabad, India", 
      badge: "DELIVERY HUB",
      icon: "💻",
      location: "Hi-Tech City",
      country: "Hyderabad – 500081",
      detail: "95+ Technology Experts",
      email: "odc@galacticos.in",
      color: "#10b981"
    },
    {
      name: "Global Network",
      badge: "WORLDWIDE",
      icon: "🌍",
      location: "15+ Countries Active",
      country: "North America · Europe · APAC",
      detail: "Enterprise 24/7 Coverage", 
      email: "global@galacticos.com",
      color: "#3b82f6"
    }
  ];

  return (
    <section id="offices" className="offices-section">
      <style>{`
        /* ========== OFFICES SECTION – NEXT GENERATION ========== */
        .offices-section {
          position: relative;
          padding: 140px 6%;
          background: #0a0c12;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Dynamic particle background */
        .offices-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 90% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
          filter: blur(80px);
          animation: bgDrift 25s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes bgDrift {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }

        /* Floating grid lines */
        .offices-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 2;
        }

        /* Floating particles */
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          filter: blur(1px);
          animation: particleFloat 10s infinite linear;
          z-index: 3;
        }
        .particle:nth-child(1) { top: 15%; left: 10%; width: 5px; height: 5px; }
        .particle:nth-child(2) { top: 75%; left: 85%; width: 7px; height: 7px; animation-duration: 14s; }
        .particle:nth-child(3) { top: 40%; left: 20%; width: 4px; height: 4px; animation-duration: 12s; }
        .particle:nth-child(4) { top: 85%; left: 15%; width: 6px; height: 6px; animation-duration: 16s; }
        .particle:nth-child(5) { top: 25%; left: 70%; width: 4px; height: 4px; animation-duration: 18s; }
        .particle:nth-child(6) { top: 60%; left: 40%; width: 5px; height: 5px; animation-duration: 13s; }
        @keyframes particleFloat {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, -30px) rotate(360deg); }
        }

        /* Header */
        .offices-header {
          position: relative;
          z-index: 20;
          text-align: center;
          margin-bottom: 100px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .offices-title {
          font-size: clamp(48px, 10vw, 80px);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ffffff, #f0f0ff, #d0d0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          text-shadow: 0 0 40px rgba(160, 160, 255, 0.5);
          animation: titleGlow 4s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          0% { text-shadow: 0 0 20px rgba(160,160,255,0.3); }
          100% { text-shadow: 0 0 80px rgba(160,160,255,0.8); }
        }

        .offices-title span {
          background: linear-gradient(135deg, #ec4899, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .offices-title::after {
          content: '';
          display: block;
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #ec4899, #10b981, #3b82f6);
          margin: 20px auto 0;
          border-radius: 4px;
          box-shadow: 0 0 30px rgba(255,255,255,0.5);
        }

        .offices-subtitle {
          font-size: 20px;
          color: #ccc;
          line-height: 1.8;
          font-weight: 300;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Cards grid – asymmetrical layout */
        .offices-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          position: relative;
          z-index: 30;
          perspective: 2000px;
        }

        /* Card – 3D floating glass */
        .office-card {
          position: relative;
          background: rgba(20, 25, 35, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 50px 100px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) inset;
          padding: 40px 30px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          animation: cardAppear 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .office-card:nth-child(1) { animation-delay: 0.1s; }
        .office-card:nth-child(2) { animation-delay: 0.2s; }
        .office-card:nth-child(3) { animation-delay: 0.3s; }

        @keyframes cardAppear {
          0% { opacity: 0; transform: translateY(60px) rotateX(10deg) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) rotateX(0) scale(1); }
        }

        .office-card:hover {
          transform: translateY(-20px) rotateX(3deg) rotateY(3deg) scale(1.02);
          box-shadow: 
            0 80px 160px -30px rgba(0,0,0,0.9),
            0 0 0 1px rgba(255,255,255,0.2) inset,
            0 0 60px var(--glow-color);
        }

        /* Gradient border */
        .office-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 40px;
          padding: 2px;
          background: linear-gradient(145deg, rgba(255,255,255,0.4), rgba(255,255,255,0.02));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .office-card:hover::before {
          opacity: 1;
        }

        /* Header section inside card */
        .office-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          transform: translateZ(20px);
          transition: transform 0.4s;
        }
        .office-card:hover .office-header {
          transform: translateZ(40px);
        }

        .office-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--icon-bg), var(--icon-bg-end));
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.4s;
        }
        .office-card:hover .office-icon {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .office-badge {
          padding: 8px 20px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .office-name {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 25px 0;
          color: white;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          transform: translateZ(20px);
          transition: transform 0.4s;
        }
        .office-card:hover .office-name {
          transform: translateZ(40px);
        }

        .office-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 30px;
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.6;
          flex-grow: 1;
          transform: translateZ(15px);
          transition: transform 0.4s;
        }
        .office-card:hover .office-info {
          transform: translateZ(30px);
        }

        .office-info div {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px dashed rgba(255,255,255,0.1);
        }
        .office-info div:last-child {
          border-bottom: none;
        }

        .office-cta {
          transform: translateZ(25px);
          transition: transform 0.4s;
        }
        .office-card:hover .office-cta {
          transform: translateZ(50px);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 28px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          transition: all 0.4s;
          width: 100%;
          justify-content: center;
        }

        .cta-button:hover {
          background: rgba(255,255,255,0.2);
          border-color: var(--glow-color);
          box-shadow: 0 20px 50px var(--glow-color);
          transform: translateY(-3px);
        }

        .cta-icon {
          width: 22px;
          height: 22px;
          transition: transform 0.3s;
        }
        .cta-button:hover .cta-icon {
          transform: translateX(6px);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .offices-section { padding: 100px 4%; }
          .offices-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
          .office-card { padding: 35px 25px; }
          .office-name { font-size: 28px; }
        }
        @media (max-width: 480px) {
          .office-icon { width: 60px; height: 60px; font-size: 26px; }
          .office-header { gap: 15px; }
        }
      `}</style>

      {/* Particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="offices-header">
        <h2 className="offices-title">
          Our <span>Global Presence</span>
        </h2>
        <p className="offices-subtitle">
          Strategic delivery centers designed for seamless collaboration across every time zone and business need
        </p>
      </div>

      <div className="offices-grid">
        {offices.map((office) => (
          <div
            className="office-card"
            key={office.name}
            style={{
              '--glow-color': office.color,
              '--icon-bg': office.color + '30',
              '--icon-bg-end': office.color + '60',
            }}
          >
            <div className="office-header">
              <div className="office-icon">{office.icon}</div>
              <div className="office-badge">{office.badge}</div>
            </div>
            <h3 className="office-name">{office.name}</h3>
            <div className="office-info">
              <div>📍 {office.location}</div>
              <div>🌎 {office.country}</div>
              <div>✨ {office.detail}</div>
            </div>
            <div className="office-cta">
              <a href={`mailto:${office.email}`} className="cta-button">
                <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {office.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}