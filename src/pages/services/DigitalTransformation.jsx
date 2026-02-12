export default function DigitalTransformation() {
  return (
    <section className="dt-section">
      <style>{`
        .dt-section {
          min-height: 100vh;
          background:
            linear-gradient(
              rgba(248,250,255,0.94),
              rgba(248,250,255,0.94)
            ),
            url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
        }

        /* ========== HERO – NEW SVG ANIMATION SUITE ========== */
        .dt-hero {
          position: relative;
          width: 100%;
          height: 460px;
          overflow: hidden;
          background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 30%, #6366f1 60%, #8b5cf6 100%);
        }

        .dt-hero-animation {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        /* ----- animated SVG icons container ----- */
        .dt-svg-icon {
          position: absolute;
          width: 80px;
          height: 80px;
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.3));
          animation: float 12s infinite ease-in-out;
        }

        .dt-svg-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ----- icon-specific animations ----- */
        .cloud-icon {
          animation: floatCloud 16s infinite alternate, pulseGlow 4s infinite;
        }
        .microservice-icon {
          animation: floatMicro 14s infinite alternate, rotateSlow 20s infinite linear;
        }
        .kubernetes-icon {
          animation: floatKube 18s infinite alternate, spin 12s infinite linear;
        }
        .code-icon {
          animation: floatCode 15s infinite alternate, pulseScale 3s infinite;
        }
        .gear-icon {
          animation: floatGear 17s infinite alternate, spin 10s infinite linear;
        }
        .rocket-icon {
          animation: floatRocket 20s infinite alternate, hover 2s infinite ease-in-out;
        }
        .database-icon {
          animation: floatDB 19s infinite alternate, pulseOpacity 4s infinite;
        }
        .network-icon {
          animation: floatNetwork 13s infinite alternate, rotateHalf 16s infinite linear;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes floatCloud {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-30px, -20px) scale(1.1); }
        }
        @keyframes floatMicro {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(25px, -15px) rotate(15deg); }
        }
        @keyframes floatKube {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-20px, 25px) rotate(30deg); }
        }
        @keyframes floatCode {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(15px, -25px) scale(1.15); }
        }
        @keyframes floatGear {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-25px, 15px) rotate(60deg); }
        }
        @keyframes floatRocket {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -40px) scale(1.2); }
        }
        @keyframes floatDB {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-15px, 30px); }
        }
        @keyframes floatNetwork {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(20px, 20px) rotate(45deg); }
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
          0%, 100% { filter: drop-shadow(0 0 15px rgba(59,130,246,0.6)); }
          50% { filter: drop-shadow(0 0 30px rgba(139,92,246,0.9)); }
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes pulseOpacity {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes hover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* ----- background overlay & shine (unchanged) ----- */
        .dt-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
          animation: overlayBreath 6s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes overlayBreath {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        .dt-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
          animation: shineSlide 12s infinite linear;
          z-index: 1;
        }

        @keyframes shineSlide {
          0% { transform: translateX(-150%) translateY(-150%) rotate(25deg); }
          100% { transform: translateX(150%) translateY(150%) rotate(25deg); }
        }

        /* ========== CONTENT – UNCHANGED ========== */
        .dt-hero-content {
          position: absolute;
          bottom: 48px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 1200px;
          width: 100%;
          padding: 0 24px;
          color: #ffffff;
          z-index: 2;
        }

        .dt-tag {
          display: inline-block;
          background: linear-gradient(135deg, #0ea5e9, #3b82f6);
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 14px;
          animation: tagEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 25px rgba(14,165,233,0.5), 0 0 50px rgba(59,130,246,0.3);
          position: relative;
          overflow: hidden;
        }

        .dt-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: tagGlow 3s infinite;
        }

        @keyframes tagEntrance {
          from { opacity: 0; transform: translateX(-30px) scale(0.8); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes tagGlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .dt-hero-content h1 {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.2;
          max-width: 800px;
          animation: titleEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5), 0 8px 60px rgba(59,130,246,0.4);
          position: relative;
        }

        .dt-hero-content h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
          animation: titleUnderline 1.2s ease-out 0.8s forwards;
          box-shadow: 0 0 20px rgba(14,165,233,0.8);
        }

        @keyframes titleEntrance {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes titleUnderline {
          to { width: 140px; }
        }

        .dt-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .dt-intro {
          font-size: 18px;
          line-height: 1.8;
          color: #374151;
          max-width: 900px;
          margin-bottom: 70px;
        }

        .dt-block {
          max-width: 900px;
          margin-bottom: 56px;
        }

        .dt-block h2 {
          font-size: 26px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 14px;
        }

        .dt-block p {
          font-size: 16px;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 16px;
        }

        .dt-list {
          padding-left: 18px;
          color: #4b5563;
          line-height: 1.75;
        }

        .dt-list li {
          margin-bottom: 10px;
        }

        .dt-outcomes {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          max-width: 1100px;
          margin: 40px 0 70px;
        }

        .dt-outcome {
          background: rgba(255,255,255,0.85);
          border: 1px solid #e5e7eb;
          padding: 26px;
        }

        .dt-outcome strong {
          display: block;
          font-size: 30px;
          font-weight: 900;
          color: #2563eb;
          margin-bottom: 6px;
        }

        .dt-outcome span {
          font-size: 14px;
          color: #6b7280;
        }

        .dt-quote {
          max-width: 900px;
          background: rgba(37,99,235,0.06);
          border-left: 4px solid #2563eb;
          padding: 32px;
          font-size: 17px;
          line-height: 1.7;
          color: #1f2937;
          margin-bottom: 60px;
        }

        .dt-quote span {
          display: block;
          margin-top: 12px;
          font-size: 14px;
          color: #6b7280;
        }

        .dt-back a {
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }

        .dt-back a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .dt-hero {
            height: 340px;
          }
          .dt-hero-content h1 {
            font-size: 34px;
          }
          .dt-outcomes {
            grid-template-columns: repeat(2, 1fr);
          }
          .dt-svg-icon {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 520px) {
          .dt-outcomes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* HERO – COLORFUL, ANIMATED SVG ICONS */}
      <div className="dt-hero">
        <div className="dt-hero-animation">
          {/* Cloud Icon – digital transformation foundation */}
          <div className="dt-svg-icon cloud-icon" style={{ top: '15%', left: '5%', width: '90px', height: '90px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <path
                d="M75 60 Q85 50 75 40 Q70 25 55 30 Q45 15 30 25 Q15 30 20 45 Q10 60 25 70 Q35 80 50 75 Q65 85 75 75 Q90 70 75 60Z"
                fill="url(#cloudGrad)"
                opacity="0.9"
              />
              <circle cx="45" cy="45" r="5" fill="white" opacity="0.6">
                <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="65" cy="55" r="4" fill="white" opacity="0.6">
                <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Microservices blocks */}
          <div className="dt-svg-icon microservice-icon" style={{ top: '60%', left: '80%', width: '70px', height: '70px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="microGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="25" height="25" rx="4" fill="url(#microGrad)" opacity="0.9">
                <animate attributeName="y" values="20;15;20" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="55" y="30" width="25" height="25" rx="4" fill="url(#microGrad)" opacity="0.8">
                <animate attributeName="x" values="55;50;55" dur="3.4s" repeatCount="indefinite" />
              </rect>
              <rect x="30" y="60" width="25" height="25" rx="4" fill="url(#microGrad)" opacity="0.7">
                <animate attributeName="width" values="25;28;25" dur="2.8s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>

          {/* Kubernetes helm / wheel */}
          <div className="dt-svg-icon kubernetes-icon" style={{ top: '25%', left: '75%', width: '85px', height: '85px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="kubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="35" fill="none" stroke="url(#kubeGrad)" strokeWidth="6" strokeDasharray="6 6">
                <animate attributeName="stroke-dashoffset" values="0;200;0" dur="10s" repeatCount="indefinite" />
              </circle>
              <path d="M50 15 L50 35 M50 65 L50 85 M15 50 L35 50 M65 50 L85 50" stroke="url(#kubeGrad)" strokeWidth="5" strokeLinecap="round" />
              <circle cx="50" cy="50" r="8" fill="white" opacity="0.8">
                <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Code brackets – DevOps / CI/CD */}
          <div className="dt-svg-icon code-icon" style={{ top: '70%', left: '15%', width: '75px', height: '75px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path d="M30 35 L15 50 L30 65" stroke="url(#codeGrad)" strokeWidth="8" fill="none" strokeLinecap="round">
                <animate attributeName="stroke-width" values="8;10;8" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M70 35 L85 50 L70 65" stroke="url(#codeGrad)" strokeWidth="8" fill="none" strokeLinecap="round">
                <animate attributeName="stroke-width" values="8;10;8" dur="2.2s" repeatCount="indefinite" />
              </path>
              <circle cx="50" cy="50" r="6" fill="url(#codeGrad)">
                <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Gear – automation */}
          <div className="dt-svg-icon gear-icon" style={{ top: '40%', left: '45%', width: '65px', height: '65px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                d="M50 20 L60 30 L70 30 L75 40 L70 50 L75 60 L70 70 L60 70 L50 80 L40 70 L30 70 L25 60 L30 50 L25 40 L30 30 L40 30 Z"
                fill="none"
                stroke="url(#gearGrad)"
                strokeWidth="6"
              />
              <circle cx="50" cy="50" r="15" fill="url(#gearGrad)" opacity="0.8" />
            </svg>
          </div>

          {/* Rocket – innovation / transformation */}
          <div className="dt-svg-icon rocket-icon" style={{ top: '10%', left: '60%', width: '80px', height: '80px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
              <polygon points="50,15 80,70 50,60 20,70" fill="url(#rocketGrad)" opacity="0.9">
                <animate attributeName="points" dur="3s" repeatCount="indefinite"
                  values="50,15 80,70 50,60 20,70;
                          50,10 80,65 50,55 20,65;
                          50,15 80,70 50,60 20,70" />
              </polygon>
              <circle cx="50" cy="55" r="5" fill="white" opacity="0.8">
                <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Database – data / storage */}
          <div className="dt-svg-icon database-icon" style={{ top: '75%', left: '50%', width: '70px', height: '70px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <ellipse cx="50" cy="35" rx="30" ry="12" fill="url(#dbGrad)" opacity="0.9" />
              <path d="M20 35 L20 65" stroke="url(#dbGrad)" strokeWidth="8" />
              <path d="M80 35 L80 65" stroke="url(#dbGrad)" strokeWidth="8" />
              <ellipse cx="50" cy="65" rx="30" ry="12" fill="url(#dbGrad)" opacity="0.7" />
              <ellipse cx="50" cy="50" rx="30" ry="12" fill="url(#dbGrad)" opacity="0.5" />
            </svg>
          </div>

          {/* Network / connected nodes */}
          <div className="dt-svg-icon network-icon" style={{ top: '30%', left: '20%', width: '90px', height: '90px' }}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <circle cx="30" cy="30" r="8" fill="url(#netGrad)">
                <animate attributeName="r" values="8;11;8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="70" cy="40" r="8" fill="url(#netGrad)">
                <animate attributeName="r" values="8;11;8" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="70" r="8" fill="url(#netGrad)">
                <animate attributeName="r" values="8;11;8" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <path d="M30 30 L70 40" stroke="url(#netGrad)" strokeWidth="3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" values="0;50;0" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M70 40 L50 70" stroke="url(#netGrad)" strokeWidth="3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" values="0;50;0" dur="4.2s" repeatCount="indefinite" />
              </path>
              <path d="M50 70 L30 30" stroke="url(#netGrad)" strokeWidth="3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" values="0;50;0" dur="4.4s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>

        <div className="dt-hero-content">
          <span className="dt-tag">Technology</span>
          <h1>Digital Transformation</h1>
        </div>
      </div>

      {/* ========== CONTENT – EXACTLY THE SAME ========== */}
      <div className="dt-wrapper">
        <p className="dt-intro">
          A large-scale digital transformation initiative focused on modernizing
          legacy platforms, improving operational agility, and enabling
          continuous innovation across the enterprise.
        </p>

        <div className="dt-block">
          <h2>Business Context</h2>
          <p>
            The organization operated with complex, tightly coupled systems that
            had evolved over decades. These systems constrained scalability,
            slowed innovation, and increased costs.
          </p>
        </div>

        <div className="dt-block">
          <h2>Core Challenges</h2>
          <ul className="dt-list">
            <li>Monolithic architectures limiting speed and flexibility</li>
            <li>High infrastructure and operational costs</li>
            <li>Manual and slow release cycles</li>
            <li>Limited resilience and observability</li>
            <li>Skill gaps in cloud-native practices</li>
          </ul>
        </div>

        <div className="dt-block">
          <h2>Transformation Approach</h2>
          <ul className="dt-list">
            <li>Cloud-native microservices architecture</li>
            <li>DevOps-driven CI/CD automation</li>
            <li>Kubernetes-based container orchestration</li>
            <li>Security-first governance framework</li>
            <li>Enablement of internal engineering teams</li>
          </ul>
        </div>

        <div className="dt-block">
          <h2>Measurable Outcomes</h2>
          <div className="dt-outcomes">
            <div className="dt-outcome">
              <strong>60%</strong>
              <span>Faster deployments</span>
            </div>
            <div className="dt-outcome">
              <strong>40%</strong>
              <span>Cost savings</span>
            </div>
            <div className="dt-outcome">
              <strong>3×</strong>
              <span>Feature velocity</span>
            </div>
            <div className="dt-outcome">
              <strong>99.9%</strong>
              <span>Application uptime</span>
            </div>
          </div>
        </div>

        <div className="dt-quote">
          “This transformation fundamentally changed how we deliver technology
          and compete in a digital-first market.”
          <span>— CTO, Fortune 500 Enterprise</span>
        </div>

        <div className="dt-back">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </section>
  );
}