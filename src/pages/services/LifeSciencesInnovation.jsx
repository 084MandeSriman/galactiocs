export default function LifeSciencesInnovation() {
  return (
    <section className="ls-section">
      <style>{`
        .ls-section {
          background:
            linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)),
            url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          margin: 0;
          padding: 0;
        }

        /* ========== HERO – NEW SVG ANIMATION SUITE ========== */
        .ls-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
        }

        .ls-hero-animation {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        /* ----- animated SVG icons container ----- */
        .ls-svg-icon {
          position: absolute;
          width: 90px;
          height: 90px;
          filter: drop-shadow(0 0 25px rgba(255,255,255,0.35));
          animation: float 14s infinite ease-in-out;
        }

        .ls-svg-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ----- icon-specific animations ----- */
        .dna-icon {
          animation: floatDNA 16s infinite alternate, pulseGlow 4s infinite;
        }
        .cell-icon {
          animation: floatCell 15s infinite alternate, pulseScale 3s infinite;
        }
        .microscope-icon {
          animation: floatMicro 18s infinite alternate, rotateSlow 25s infinite linear;
        }
        .flask-icon {
          animation: floatFlask 17s infinite alternate, hover 2.5s infinite ease-in-out;
        }
        .heart-icon {
          animation: floatHeart 14s infinite alternate, pulseBeat 1.5s infinite;
        }
        .atom-icon {
          animation: floatAtom 19s infinite alternate, spin 12s infinite linear;
        }
        .helix-icon {
          animation: floatHelix 20s infinite alternate, rotateHalf 30s infinite linear;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes floatDNA {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-25px, -20px) rotate(10deg); }
        }
        @keyframes floatCell {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(20px, -30px) scale(1.15); }
        }
        @keyframes floatMicro {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-20px, 25px) rotate(15deg); }
        }
        @keyframes floatFlask {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(15px, -20px) scale(1.1); }
        }
        @keyframes floatHeart {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-20px, 15px) scale(1.2); }
        }
        @keyframes floatAtom {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(25px, -15px) rotate(45deg); }
        }
        @keyframes floatHelix {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-15px, 25px) rotate(30deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(120deg); }
        }
        @keyframes rotateHalf {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(16,185,129,0.6)); }
          50% { filter: drop-shadow(0 0 30px rgba(5,150,105,0.9)); }
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes pulseBeat {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        @keyframes hover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* ----- background overlay (unchanged) ----- */
        .ls-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4), rgba(0,0,0,0.65));
          animation: overlayFade 1.2s ease-out;
        }

        .ls-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%);
          animation: shine 8s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes overlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        /* ========== INTRO ANIMATION – NEW SVG ICONS ========== */
        .ls-intro-animation {
          width: 100%;
          height: 320px;
          position: relative;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-radius: 12px;
          overflow: hidden;
        }

        .ls-intro-svg {
          position: absolute;
          width: 70px;
          height: 70px;
          filter: drop-shadow(0 0 15px rgba(16,185,129,0.4));
          animation: introFloat 12s infinite ease-in-out;
        }

        .ls-intro-svg svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        @keyframes introFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
        }

        /* ========== CONTENT – EXACTLY THE SAME ========== */
        .ls-hero-content {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1200px;
          padding: 0 24px;
          color: #ffffff;
          z-index: 2;
        }

        .ls-tag {
          display: inline-block;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
          animation: slideInTag 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(37,99,235,0.5), 0 0 40px rgba(37,99,235,0.3);
          position: relative;
          overflow: hidden;
        }

        .ls-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: tagShine 3s infinite;
        }

        @keyframes slideInTag {
          from { opacity: 0; transform: translateY(20px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes tagShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .ls-hero-content h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          margin: 0;
          animation: slideInTitle 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          text-shadow: 0 4px 25px rgba(0,0,0,0.4), 0 8px 50px rgba(16,185,129,0.3);
          position: relative;
        }

        .ls-hero-content h1::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #34d399, #10b981);
          animation: underlineGrow 1s ease-out 0.8s forwards;
          box-shadow: 0 0 15px rgba(52,211,153,0.6);
        }

        @keyframes slideInTitle {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes underlineGrow {
          to { width: 120px; }
        }

        .ls-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 24px;
        }

        .ls-intro {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 70px;
        }

        .ls-intro h2 {
          font-size: 34px;
          font-weight: 800;
          color: #f97316;
          margin-bottom: 18px;
        }

        .ls-intro p {
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 14px;
        }

        .ls-block {
          max-width: 900px;
          margin-bottom: 48px;
        }

        .ls-block p {
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 14px;
        }

        .ls-list {
          padding-left: 18px;
          margin-bottom: 22px;
        }

        .ls-list li {
          font-size: 15px;
          color: #374151;
          margin-bottom: 8px;
        }

        .ls-highlight {
          color: #f97316;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .ls-note {
          max-width: 900px;
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 28px;
        }

        /* BACK TO HOME – same as DigitalTransformation */
        .ls-back {
          margin-top: 28px;
          padding-top: 18px;
          padding-bottom: 120px;
          border-top: 1px solid #e5e7eb;
        }

        .ls-back a {
          font-size: 15px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }

        .ls-back a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .ls-hero {
            height: 380px;
          }
          .ls-hero-content h1 {
            font-size: 34px;
          }
          .ls-intro {
            grid-template-columns: 1fr;
          }
          .ls-svg-icon {
            width: 70px;
            height: 70px;
          }
          .ls-intro-svg {
            width: 55px;
            height: 55px;
          }
        }
      `}</style>

      {/* ========== HERO – COLORFUL ANIMATED SVG ICONS ========== */}
      <div className="ls-hero">
        <div className="ls-hero-animation">
          {/* DNA Helix */}
          <div className="ls-svg-icon dna-icon" style={{ top: '10%', left: '5%', width: '100px', height: '100px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="dnaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="dnaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              {/* left strand */}
              <path d="M30 20 Q35 35 30 50 Q25 65 30 80" stroke="url(#dnaGrad1)" strokeWidth="4" fill="none" strokeDasharray="6 6">
                <animate attributeName="stroke-dashoffset" values="0;100;0" dur="8s" repeatCount="indefinite" />
              </path>
              {/* right strand */}
              <path d="M70 20 Q65 35 70 50 Q75 65 70 80" stroke="url(#dnaGrad2)" strokeWidth="4" fill="none" strokeDasharray="6 6">
                <animate attributeName="stroke-dashoffset" values="0;100;0" dur="8s" repeatCount="indefinite" />
              </path>
              {/* rungs */}
              <line x1="30" y1="30" x2="70" y2="30" stroke="white" strokeWidth="2" opacity="0.6">
                <animate attributeName="y1" values="30;35;30" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="30" y1="50" x2="70" y2="50" stroke="white" strokeWidth="2" opacity="0.6">
                <animate attributeName="y1" values="50;55;50" dur="2.4s" repeatCount="indefinite" />
              </line>
              <line x1="30" y1="70" x2="70" y2="70" stroke="white" strokeWidth="2" opacity="0.6">
                <animate attributeName="y1" values="70;75;70" dur="2.2s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>

          {/* Cell / Molecule */}
          <div className="ls-svg-icon cell-icon" style={{ top: '60%', left: '75%', width: '85px', height: '85px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <radialGradient id="cellGrad">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="35" fill="url(#cellGrad)" opacity="0.9">
                <animate attributeName="r" values="32;38;32" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="50" r="12" fill="white" opacity="0.8">
                <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="35" r="5" fill="white" opacity="0.7" />
              <circle cx="70" cy="60" r="6" fill="white" opacity="0.7" />
              <circle cx="45" cy="75" r="4" fill="white" opacity="0.7" />
            </svg>
          </div>

          {/* Microscope */}
          <div className="ls-svg-icon microscope-icon" style={{ top: '20%', left: '70%', width: '95px', height: '95px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="microGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>
              <rect x="45" y="60" width="10" height="30" fill="url(#microGrad)" />
              <rect x="30" y="80" width="40" height="8" fill="#475569" />
              <circle cx="50" cy="45" r="15" fill="none" stroke="#38bdf8" strokeWidth="4">
                <animate attributeName="r" values="13;17;13" dur="3s" repeatCount="indefinite" />
              </circle>
              <line x1="50" y1="45" x2="50" y2="60" stroke="#38bdf8" strokeWidth="3" />
            </svg>
          </div>

          {/* Flask / Test tube */}
          <div className="ls-svg-icon flask-icon" style={{ top: '45%', left: '15%', width: '80px', height: '80px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="flaskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M35 25 L35 50 Q35 70 50 70 Q65 70 65 50 L65 25" stroke="url(#flaskGrad)" strokeWidth="5" fill="none" />
              <ellipse cx="50" cy="25" rx="15" ry="6" stroke="url(#flaskGrad)" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="6" fill="#fde047" opacity="0.8">
                <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Heart / Healthcare */}
          <div className="ls-svg-icon heart-icon" style={{ top: '70%', left: '35%', width: '75px', height: '75px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
              </defs>
              <path
                d="M50 30 L45 25 Q30 20 25 35 Q20 50 35 65 L50 80 L65 65 Q80 50 75 35 Q70 20 55 25 Z"
                fill="url(#heartGrad)"
                opacity="0.9"
              >
                <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>

          {/* Atom / Particle */}
          <div className="ls-svg-icon atom-icon" style={{ top: '30%', left: '45%', width: '90px', height: '90px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="atomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="20" fill="none" stroke="url(#atomGrad)" strokeWidth="3" strokeDasharray="4 6">
                <animate attributeName="stroke-dashoffset" values="0;100;0" dur="10s" repeatCount="indefinite" />
              </circle>
              <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="url(#atomGrad)" strokeWidth="3" transform="rotate(45 50 50)">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="url(#atomGrad)" strokeWidth="3" transform="rotate(-45 50 50)">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="12s" repeatCount="indefinite" />
              </ellipse>
              <circle cx="50" cy="50" r="6" fill="url(#atomGrad)" />
            </svg>
          </div>

          {/* DNA Helix – second */}
          <div className="ls-svg-icon helix-icon" style={{ top: '75%', left: '85%', width: '80px', height: '80px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path d="M30 20 L30 80" stroke="url(#helixGrad)" strokeWidth="4" />
              <path d="M70 20 L70 80" stroke="url(#helixGrad)" strokeWidth="4" />
              <circle cx="30" cy="30" r="5" fill="white" opacity="0.8" />
              <circle cx="70" cy="30" r="5" fill="white" opacity="0.8" />
              <circle cx="30" cy="50" r="5" fill="white" opacity="0.8" />
              <circle cx="70" cy="50" r="5" fill="white" opacity="0.8" />
              <circle cx="30" cy="70" r="5" fill="white" opacity="0.8" />
              <circle cx="70" cy="70" r="5" fill="white" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div className="ls-hero-content">
          <span className="ls-tag">Healthcare</span>
          <h1>Life Sciences Innovation</h1>
        </div>
      </div>

      {/* ========== CONTENT – EXACTLY THE SAME ========== */}
      <div className="ls-wrapper">
        <div className="ls-intro">
          <div>
            <h2>Veeva’s iRep</h2>
            <p>
              The customer provides specialty solutions and services from
              advanced lab sciences to translational informatics, clinical trial
              delivery, regulatory affairs, and payer insights.
            </p>
            <p>
              Sales representatives use this information to improve physician
              engagement, enable timely decision-making, and strengthen
              relationships.
            </p>
          </div>

          {/* INTRO ANIMATION – REPLACED WITH SVG ICONS */}
          <div className="ls-intro-animation">
            {/* DNA Strand */}
            <div className="ls-intro-svg" style={{ top: '15%', left: '10%', width: '60px', height: '60px' }}>
              <svg viewBox="0 0 100 100">
                <path d="M20 20 L20 80" stroke="#10b981" strokeWidth="4" />
                <path d="M80 20 L80 80" stroke="#10b981" strokeWidth="4" />
                <circle cx="20" cy="30" r="5" fill="#10b981" />
                <circle cx="80" cy="30" r="5" fill="#10b981" />
                <circle cx="20" cy="50" r="5" fill="#10b981" />
                <circle cx="80" cy="50" r="5" fill="#10b981" />
                <circle cx="20" cy="70" r="5" fill="#10b981" />
                <circle cx="80" cy="70" r="5" fill="#10b981" />
              </svg>
            </div>
            {/* Cell */}
            <div className="ls-intro-svg" style={{ top: '50%', left: '70%', width: '70px', height: '70px' }}>
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" fill="#34d399" opacity="0.7">
                  <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="10" fill="white" opacity="0.9" />
              </svg>
            </div>
            {/* Flask */}
            <div className="ls-intro-svg" style={{ top: '30%', left: '40%', width: '55px', height: '55px' }}>
              <svg viewBox="0 0 100 100">
                <path d="M35 30 L35 60 Q35 80 50 80 Q65 80 65 60 L65 30" stroke="#f59e0b" strokeWidth="4" fill="none" />
                <circle cx="50" cy="50" r="6" fill="#fbbf24" />
              </svg>
            </div>
            {/* Particle / Molecule */}
            <div className="ls-intro-svg" style={{ top: '70%', left: '20%', width: '50px', height: '50px' }}>
              <svg viewBox="0 0 100 100">
                <circle cx="30" cy="30" r="8" fill="#a78bfa" />
                <circle cx="70" cy="50" r="8" fill="#a78bfa" />
                <circle cx="50" cy="70" r="8" fill="#a78bfa" />
                <line x1="30" y1="30" x2="70" y2="50" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="3 3" />
                <line x1="70" y1="50" x2="50" y2="70" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="3 3" />
                <line x1="50" y1="70" x2="30" y2="30" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="3 3" />
              </svg>
            </div>
            {/* Additional floating particles */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`particle-${i}`}
                style={{
                  position: 'absolute',
                  width: `${3 + Math.floor(Math.random() * 6)}px`,
                  height: `${3 + Math.floor(Math.random() * 6)}px`,
                  background: `rgba(${16 + Math.random() * 100}, ${185 + Math.random() * 70}, ${129 + Math.random() * 50}, 0.7)`,
                  borderRadius: '50%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `introFloat ${5 + Math.random() * 5}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="ls-block">
          <p>
            The manufacturer sought to improve sales effectiveness and content
            marketing impact, but the existing Veeva CRM lacked enriched CLM
            capabilities.
          </p>
          <ul className="ls-list">
            <li>Low quality of engagement with Physicians</li>
            <li>Reduced email click-through rates and responses</li>
          </ul>
        </div>

        <div className="ls-block">
          <div className="ls-highlight">We implemented Veeva’s iRep to deliver:</div>
          <ul className="ls-list">
            <li>Interactive e-detail and drug content</li>
            <li>Near real-time dashboards</li>
            <li>Brand-compliant standardized materials</li>
            <li>Approved emails for targeted outreach</li>
            <li>Consistent UX / UI across brands</li>
          </ul>
        </div>

        <div className="ls-note">
          The solution was successfully rolled out to multiple manufacturers,
          delivering sustained improvements in marketing performance and
          physician engagement.
        </div>

        <div className="ls-back">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </section>
  );
}