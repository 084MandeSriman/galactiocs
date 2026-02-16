export default function IndustriesSection() {
  return (
    <section id="industries" className="engage-section">
      <style>{`
        /* ========== INDUSTRIES SECTION – NEXT LEVEL ========== */
        .engage-section {
          position: relative;
          padding: 140px 6%;
          background: #0c0f15;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Dynamic particle background */
        .engage-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(255, 200, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 20%, rgba(0, 200, 255, 0.1) 0%, transparent 50%);
          filter: blur(70px);
          animation: cosmicPulse 20s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes cosmicPulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }

        /* Grid overlay */
        .engage-section::after {
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
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          filter: blur(2px);
          animation: particleFloat 15s infinite linear;
          z-index: 3;
        }
        .particle:nth-child(1) { top: 20%; left: 10%; width: 6px; height: 6px; animation-duration: 12s; }
        .particle:nth-child(2) { top: 70%; left: 80%; width: 8px; height: 8px; animation-duration: 18s; }
        .particle:nth-child(3) { top: 40%; left: 30%; width: 5px; height: 5px; animation-duration: 14s; }
        .particle:nth-child(4) { top: 80%; left: 20%; width: 7px; height: 7px; animation-duration: 16s; }
        .particle:nth-child(5) { top: 30%; left: 70%; width: 4px; height: 4px; animation-duration: 20s; }
        @keyframes particleFloat {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, -30px) rotate(360deg); }
        }

        /* Header */
        .engage-header {
          position: relative;
          z-index: 20;
          text-align: center;
          margin-bottom: 90px;
        }

        .engage-title {
          font-size: clamp(48px, 10vw, 80px);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ffffff, #c0c0ff, #a080ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          text-shadow: 0 0 50px rgba(160,128,255,0.5);
          animation: titleGlow 4s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          0% { text-shadow: 0 0 30px rgba(160,128,255,0.3); }
          100% { text-shadow: 0 0 80px rgba(160,128,255,0.8); }
        }

        .engage-title::after {
          content: '';
          display: block;
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #ff4d4d, #ffa64d, #4dff4d, #4d4dff);
          margin: 20px auto 0;
          border-radius: 4px;
          box-shadow: 0 0 30px rgba(255,255,255,0.5);
        }

        .engage-subtitle {
          font-size: 22px;
          color: #ccc;
          max-width: 750px;
          margin: 0 auto 10px;
          line-height: 1.6;
          font-weight: 300;
        }

        .engage-subtext {
          font-size: 18px;
          color: #aaa;
          font-style: italic;
        }

        /* Grid */
        .engage-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          position: relative;
          z-index: 20;
          perspective: 2000px;
        }

        /* Cards – 3D floating cubes */
        .engage-card {
          position: relative;
          height: 550px;
          border-radius: 40px;
          background: rgba(20, 25, 35, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 50px 100px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) inset;
          transform-style: preserve-3d;
          transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .engage-card:hover {
          transform: translateY(-30px) rotateX(4deg) rotateY(4deg) scale(1.03);
          box-shadow: 0 80px 160px -30px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.2) inset, 0 0 80px rgba(100, 80, 255, 0.4);
        }

        /* Inner gradient border */
        .engage-card::before {
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
          transition: opacity 0.6s;
        }
        .engage-card:hover::before {
          opacity: 1;
        }

        /* Card badge – floating */
        .card-badge {
          position: absolute;
          top: 30px;
          left: 30px;
          padding: 12px 28px;
          border-radius: 60px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 30;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          transition: all 0.4s;
          transform: translateZ(30px);
        }
        .engage-card:hover .card-badge {
          transform: translateZ(60px) translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.7);
        }

        /* Visual area */
        .card-visual {
          flex: 1;
          position: relative;
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          transition: transform 0.8s;
        }
        .engage-card:hover .card-visual {
          transform: translateZ(50px) scale(1.08);
        }

        .card-visual svg {
          width: 90%;
          max-height: 260px;
          filter: drop-shadow(0 0 40px rgba(255,255,255,0.3));
        }

        /* Content area */
        .card-content {
          position: relative;
          z-index: 20;
          padding: 0 35px 45px;
          transform: translateY(0);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .engage-card:hover .card-content {
          transform: translateY(-15px);
        }

        .card-title {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 16px;
          color: white;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          line-height: 1.2;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff, #e0e0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-description {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          max-width: 300px;
        }

        /* Badge color variations */
        .prof-services .card-badge {
          background: linear-gradient(135deg, #ec4899, #be185d);
          border-color: rgba(236,72,153,0.5);
        }
        .managed-services .card-badge {
          background: linear-gradient(135deg, #10b981, #059669);
          border-color: rgba(16,185,129,0.5);
        }
        .build-own .card-badge {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-color: rgba(245,158,11,0.5);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .engage-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .engage-card { height: 500px; }
        }
        @media (max-width: 768px) {
          .engage-section { padding: 80px 4%; }
          .engage-grid { grid-template-columns: 1fr; }
          .engage-card { height: 480px; max-width: 500px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          .card-title { font-size: 28px; }
          .card-badge { left: 20px; top: 20px; padding: 8px 20px; font-size: 12px; }
          .card-content { padding: 0 25px 35px; }
        }
      `}</style>

      {/* Floating particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="engage-header">
        <h2 className="engage-title">How We Engage</h2>
        <p className="engage-subtitle">
          Engagement models built to align strategy, execution, and measurable impact.
        </p>
        <p className="engage-subtext">
          Designed for enterprise partnerships and exponential growth
        </p>
      </div>

      <div className="engage-grid">
        {/* PROFESSIONAL SERVICES */}
        <div className="engage-card prof-services">
          <span className="card-badge">Expert Delivery</span>
          <div className="card-visual">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradPink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#be185d" />
                </linearGradient>
                <filter id="glowPink" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle cx="120" cy="100" r="20" fill="url(#gradPink)" filter="url(#glowPink)">
                <animate attributeName="r" values="16;22;16" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="280" cy="120" r="16" fill="url(#gradPink)" filter="url(#glowPink)">
                <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="22" fill="url(#gradPink)" filter="url(#glowPink)">
                <animate attributeName="r" values="18;24;18" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <path d="M120 100 Q200 160 280 120" stroke="#be185d" strokeWidth="4" fill="none" strokeDasharray="8 8">
                <animate attributeName="stroke-dashoffset" values="0;-100" dur="5s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
          <div className="card-content">
            <h3 className="card-title">Professional Services</h3>
            <p className="card-description">
              Precision consulting and managed delivery for enterprise digital transformation
            </p>
          </div>
        </div>

        {/* MANAGED SERVICES */}
        <div className="engage-card managed-services">
          <span className="card-badge">24/7 Operations</span>
          <div className="card-visual">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle cx="200" cy="140" r="70" fill="none" stroke="url(#gradGreen)" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 8">
                <animateTransform attributeName="transform" type="rotate" values="0 200 140;360 200 140" dur="30s" repeatCount="indefinite" />
              </circle>
              <rect x="120" y="200" width="24" height="50" rx="5" fill="url(#gradGreen)" filter="url(#glowGreen)">
                <animate attributeName="height" values="40;70;40" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="260" y="200" width="24" height="60" rx="5" fill="url(#gradGreen)" filter="url(#glowGreen)">
                <animate attributeName="height" values="50;80;50" dur="2.4s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
          <div className="card-content">
            <h3 className="card-title">Managed Services</h3>
            <p className="card-description">
              Enterprise-grade operations ensuring continuous stability and peak performance
            </p>
          </div>
        </div>

        {/* BUILD YOUR OWN */}
        <div className="engage-card build-own">
          <span className="card-badge">Custom Built</span>
          <div className="card-visual">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="glowOrange" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect x="70" y="160" width="70" height="45" rx="8" fill="url(#gradOrange)" filter="url(#glowOrange)">
                <animate attributeName="y" values="160;150;160" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="220" y="120" width="80" height="50" rx="8" fill="url(#gradOrange)" filter="url(#glowOrange)">
                <animate attributeName="y" values="120;110;120" dur="3.2s" repeatCount="indefinite" />
              </rect>
              <text x="40" y="70" fontSize="48" fill="url(#gradOrange)" fontWeight="bold" filter="url(#glowOrange)">+</text>
              <text x="330" y="240" fontSize="48" fill="url(#gradOrange)" fontWeight="bold" filter="url(#glowOrange)">+</text>
            </svg>
          </div>
          <div className="card-content">
            <h3 className="card-title">Build Your Own</h3>
            <p className="card-description">
              Bespoke solutions architected specifically for your unique business vision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}