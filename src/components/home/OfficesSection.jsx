export default function OfficesSection() {
  return (
    <section id="offices" className="offices-section">
      <style>{`
        /* ---------------------------------------------
           COSMIC BACKGROUND & GLOBAL STYLES
        --------------------------------------------- */
        .offices-section {
          position: relative;
          padding: 90px 6%;
          background:
            linear-gradient(
              rgba(255,255,255,0.92),
              rgba(255,255,255,0.92)
            ),
            radial-gradient(circle at 20% 30%, rgba(37,99,235,0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(124,58,237,0.03) 0%, transparent 40%),
            url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1800&auto=format&fit=crop");
          background-size: cover, cover, cover, cover;
          background-position: center;
          overflow: hidden;
          color: #1e293b;
        }

        /* ----- FLOATING PARTICLES (STARS) ----- */
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
          background: rgba(37,99,235,0.3);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(37,99,235,0.3);
          animation: float-particle 20s infinite linear;
        }

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }

        /* ----- FAINT WORLD MAP (SVG PATTERN) ----- */
        .world-map-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          transform: translate(-50%, -50%);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' opacity='0.05'%3E%3Cpath fill='%232563eb' d='M...' /%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
          animation: breathe 8s infinite ease-in-out;
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.02); }
        }

        /* ----- HEADER ----- */
        .offices-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 60px;
          position: relative;
          z-index: 15;
        }

        .offices-title {
          font-size: 44px;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
          color: #0f172a;
          line-height: 1.2;
        }

        .offices-title span {
          background: linear-gradient(145deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .offices-subtitle {
          font-size: 17px;
          color: #475569;
          line-height: 1.7;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ----- OFFICES GRID ----- */
        .offices-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          position: relative;
          z-index: 20;
        }

        /* ----- COSMIC CONNECTION ARCS (between cards) ----- */
        .connection-arcs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .arc {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          height: 100px;
          border: 1.5px dashed rgba(37,99,235,0.2);
          border-radius: 50%;
          transform-origin: center;
          opacity: 0.6;
        }

        .arc1 {
          transform: translate(-50%, -50%) rotate(-10deg);
          animation: orbit-slow 24s infinite linear;
        }

        .arc2 {
          width: 240px;
          height: 130px;
          border-color: rgba(124,58,237,0.2);
          transform: translate(-50%, -50%) rotate(15deg);
          animation: orbit-slow 30s infinite reverse;
        }

        @keyframes orbit-slow {
          0% { transform: translate(-50%, -50%) rotate(-10deg); }
          100% { transform: translate(-50%, -50%) rotate(350deg); }
        }

        /* ----- OFFICE CARD (GLASS / COSMIC) ----- */
        .office-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 32px 28px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 
            0 20px 35px -10px rgba(0,0,0,0.05),
            inset 0 1px 4px rgba(255,255,255,0.8);
          transition: all 0.35s cubic-bezier(0.2,0,0,1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Gradient border on hover */
        .office-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(145deg, #2563eb, #7c3aed);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .office-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 50px -12px rgba(37,99,235,0.2);
          background: rgba(255,255,255,0.9);
        }

        .office-card:hover::before {
          opacity: 1;
        }

        /* Satellite ring (rotating) – appears on hover */
        .satellite-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(37,99,235,0.15);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.6s ease;
          pointer-events: none;
          border-top-color: #2563eb;
          border-bottom-color: #7c3aed;
          border-left-color: transparent;
          border-right-color: transparent;
        }

        .office-card:hover .satellite-ring {
          transform: translate(-50%, -50%) scale(1);
          animation: spin-ring 8s infinite linear;
        }

        @keyframes spin-ring {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); }
        }

        /* Office icon (SVG location marker) */
        .office-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
          color: #2563eb;
          animation: float-icon 5s infinite ease-in-out;
          filter: drop-shadow(0 6px 10px rgba(37,99,235,0.15));
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .office-title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          color: #0f172a;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .office-details {
          font-size: 15px;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .office-details p {
          margin-bottom: 6px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .office-contact {
          margin-top: auto;
          border-top: 1px solid rgba(203,213,225,0.6);
          padding-top: 18px;
          font-size: 14px;
          color: #2563eb;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-icon {
          width: 18px;
          height: 18px;
          opacity: 0.7;
        }

        /* ----- RESPONSIVE (fine-tuned) ----- */
        @media (max-width: 1200px) {
          .offices-section { padding: 80px 5%; }
          .offices-title { font-size: 40px; }
          .offices-grid { gap: 22px; }
        }

        @media (max-width: 1024px) {
          .offices-grid { grid-template-columns: repeat(2, 1fr); }
          .offices-title { font-size: 36px; }
          .offices-subtitle { font-size: 16px; }
        }

        @media (max-width: 768px) {
          .offices-section { padding: 60px 4%; }
          .offices-title { font-size: 32px; }
          .offices-subtitle { font-size: 15px; }
          .offices-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .office-card { padding: 24px; }
          .office-title { font-size: 14px; }
          .office-details { font-size: 14px; }
        }

        @media (max-width: 640px) {
          .offices-section { padding: 50px 3%; }
          .offices-title { font-size: 28px; }
          .offices-subtitle { font-size: 14px; }
          .offices-grid { grid-template-columns: 1fr; gap: 20px; }
          .office-card { padding: 28px; }
          .satellite-ring { display: none; } /* performance on small devices */
        }

        @media (max-width: 480px) {
          .offices-title { font-size: 24px; }
          .offices-subtitle { font-size: 13px; }
          .office-card { padding: 22px; }
          .office-icon { width: 40px; height: 40px; }
          .office-title { font-size: 13px; }
          .office-details { font-size: 13px; }
          .office-contact { font-size: 12px; }
        }

        @media (max-width: 360px) {
          .offices-title { font-size: 22px; }
          .offices-subtitle { font-size: 12px; }
          .office-card { padding: 18px; }
        }
      `}</style>

      {/* ---------- COSMIC BACKGROUND ---------- */}
      <div className="world-map-bg" />
      <div className="particle-field">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(${Math.random() * 100 + 55}, ${Math.random() * 100 + 55}, 255, ${Math.random() * 0.4 + 0.2})`,
            }}
          />
        ))}
      </div>

      {/* ---------- ORBITAL CONNECTION ARCS ---------- */}
      <div className="connection-arcs">
        <div className="arc arc1" />
        <div className="arc arc2" />
      </div>

      {/* ---------- HEADER ---------- */}
      <div className="offices-header">
        <h2 className="offices-title">
          Our <span>Global</span> Constellation
        </h2>
        <p className="offices-subtitle">
          Strategically positioned delivery hubs and headquarters, engineered for
          seamless collaboration across every time zone.
        </p>
      </div>

      {/* ---------- OFFICES GRID ---------- */}
      <div className="offices-grid">
        {/* 1. DUBAI – HEADQUARTERS */}
        <div className="office-card">
          <div className="satellite-ring" />
          <svg
            className="office-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" />
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
          </svg>
          <div className="office-title">
            <span style={{ background: 'linear-gradient(145deg, #2563eb, #1e40af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              DUBAI · UAE
            </span>
          </div>
          <div className="office-details">
            <p>📍 Business Bay</p>
            <p>Dubai, United Arab Emirates</p>
            <p style={{ marginTop: '12px' }}>🌍 Global Headquarters</p>
          </div>
          <div className="office-contact">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L12 13 2 7" />
            </svg>
            contact@galacticos.ae
          </div>
        </div>

        {/* 2. INDIA – OFFSHORE DELIVERY CENTER */}
        <div className="office-card">
          <div className="satellite-ring" />
          <svg
            className="office-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M12 4 L12 20 M2 9 L22 9 M2 15 L22 15" />
          </svg>
          <div className="office-title">
            <span style={{ background: 'linear-gradient(145deg, #7c3aed, #6d28d9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              HYDERABAD · INDIA
            </span>
          </div>
          <div className="office-details">
            <p>📍 Offshore Delivery Center</p>
            <p>Hi‑Tech City, Hyderabad – 500 081</p>
            <p style={{ marginTop: '12px' }}>⚡ 95+ professionals, 30+ certified</p>
          </div>
          <div className="office-contact">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L12 13 2 7" />
            </svg>
            odc@galacticos.in
          </div>
        </div>

        {/* 3. GLOBAL DELIVERY NETWORK */}
        <div className="office-card">
          <div className="satellite-ring" />
          <svg
            className="office-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12" />
            <path d="M4.5 4.5 L6 6 M18 18 L19.5 19.5 M4.5 19.5 L6 18 M18 6 L19.5 4.5" />
          </svg>
          <div className="office-title">
            <span style={{ background: 'linear-gradient(145deg, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              WORLDWIDE · PRESENCE
            </span>
          </div>
          <div className="office-details">
            <p>🌐 North America · Europe · APAC</p>
            <p>Client delivery across 15+ countries</p>
            <p style={{ marginTop: '12px' }}>🚀 24/7 follow‑the‑sun support</p>
          </div>
          <div className="office-contact">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            global@galacticos.com
          </div>
        </div>
      </div>
    </section>
  );
}