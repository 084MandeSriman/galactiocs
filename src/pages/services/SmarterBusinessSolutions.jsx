export default function SmarterBusinessSolutions() {
  return (
    <section className="consulting-section">
      <style>{`
        .consulting-section {
          background:
            linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)),
            url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
        }

        /* HERO */
        .consulting-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 30%, #2dd4bf 60%, #5eead4 100%);
        }

        .consulting-hero-animation {
          position: absolute;
          inset: 0;
          z-index: 0;
          animation: businessPulse 12s ease-in-out infinite;
        }

        .consulting-hero-animation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 25% 35%, rgba(20,184,166,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 65%, rgba(45,212,191,0.3) 0%, transparent 50%);
          animation: businessGlow 15s ease-in-out infinite;
        }

        @keyframes businessPulse {
          0%, 100% { filter: brightness(1) saturate(1); }
          50% { filter: brightness(1.15) saturate(1.08); }
        }

        @keyframes businessGlow {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.75; }
          50% { transform: scale(1.25) translate(25px, -25px); opacity: 1; }
        }

        .consulting-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridSlide 40s linear infinite;
          opacity: 0.6;
        }

        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .consulting-cube {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 3px solid rgba(255,255,255,0.4);
          animation: cubeRotate 12s infinite ease-in-out;
          box-shadow: 0 0 40px rgba(20,184,166,0.4);
        }

        @keyframes cubeRotate {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.6; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
        }

        .consulting-triangle {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 52px solid rgba(255,255,255,0.35);
          animation: triangleSpin 10s infinite ease-in-out;
          filter: drop-shadow(0 0 20px rgba(45,212,191,0.5));
        }

        @keyframes triangleSpin {
          0%, 100% { transform: rotate(0deg) translateY(0); opacity: 0.7; }
          50% { transform: rotate(360deg) translateY(-30px); opacity: 1; }
        }

        .consulting-ring {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          animation: ringPulse 8s infinite ease-in-out;
          box-shadow: 0 0 30px rgba(94,234,212,0.4);
        }

        .consulting-ring::before {
          content: '';
          position: absolute;
          inset: 15px;
          border: 2px dashed rgba(255,255,255,0.25);
          border-radius: 50%;
          animation: ringInner 6s infinite linear reverse;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        @keyframes ringInner {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .consulting-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(20,184,166,0.8);
          animation: dotFloat 5s infinite ease-in-out;
        }

        @keyframes dotFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-40px) scale(1.5); opacity: 1; }
        }

        .consulting-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: lineStretch 6s infinite ease-in-out;
          box-shadow: 0 0 15px rgba(45,212,191,0.5);
        }

        @keyframes lineStretch {
          0%, 100% { width: 0; opacity: 0; }
          50% { width: 150px; opacity: 1; }
        }

        .consulting-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 35% 45%, rgba(0,0,0,0.5), rgba(0,0,0,0.75));
          animation: overlayPulse 10s ease-in-out infinite;
        }

        .consulting-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%);
          animation: businessShine 12s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes overlayPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        @keyframes businessShine {
          0% { transform: translateX(-200%) translateY(-200%) rotate(135deg); }
          100% { transform: translateX(200%) translateY(200%) rotate(135deg); }
        }

        .consulting-hero-content {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 1200px;
          width: 100%;
          padding: 0 24px;
          color: #ffffff;
          z-index: 2;
        }

        .consulting-tag {
          display: inline-block;
          background: linear-gradient(135deg, #0d9488, #14b8a6);
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
          animation: tagSlideIn 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 25px rgba(13,148,136,0.6), 0 0 50px rgba(20,184,166,0.4);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.25);
        }

        .consulting-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: tagShine 3.5s infinite;
        }

        @keyframes tagSlideIn {
          from { opacity: 0; transform: translateX(-40px) scale(0.85); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes tagShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .consulting-hero-content h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          animation: titleFadeIn 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          text-shadow: 0 4px 30px rgba(0,0,0,0.6), 0 8px 60px rgba(20,184,166,0.5);
          position: relative;
        }

        .consulting-hero-content h1::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #14b8a6, #5eead4, #14b8a6);
          animation: titleLine 1.3s ease-out 0.9s forwards;
          box-shadow: 0 0 20px rgba(20,184,166,0.9);
        }

        @keyframes titleFadeIn {
          from { opacity: 0; transform: translateY(50px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes titleLine {
          to { width: 180px; }
        }

        /* CONTENT */
        .consulting-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 24px 40px;
        }

        .consulting-block {
          max-width: 900px;
          margin-bottom: 60px;
        }

        .consulting-block h2 {
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #111827;
        }

        .consulting-block p {
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 16px;
        }

        .consulting-list {
          padding-left: 18px;
          margin-top: 12px;
        }

        .consulting-list li {
          font-size: 15px;
          color: #374151;
          margin-bottom: 10px;
        }

        .consulting-highlight {
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 12px;
        }

        .consulting-check {
          list-style: none;
          padding-left: 0;
        }

        .consulting-check li::before {
          content: "✔";
          color: #0d9488;
          margin-right: 10px;
        }

        /* BACK */
        .consulting-back {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 120px;
        }

        .consulting-back a {
          font-size: 15px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }

        .consulting-back a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .consulting-hero {
            height: 380px;
          }

          .consulting-hero-content h1 {
            font-size: 34px;
          }

          .consulting-wrapper {
            padding-top: 60px;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="consulting-hero">
        <div className="consulting-hero-animation">
          <div className="consulting-grid"></div>
          
          <div className="consulting-cube" style={{ top: '20%', left: '15%' }} />
          <div className="consulting-cube" style={{ top: '65%', left: '75%', animationDelay: '3s' }} />
          <div className="consulting-cube" style={{ top: '45%', left: '85%', animationDelay: '6s', width: '50px', height: '50px' }} />
          
          <div className="consulting-triangle" style={{ top: '30%', left: '70%' }} />
          <div className="consulting-triangle" style={{ top: '70%', left: '25%', animationDelay: '2s' }} />
          <div className="consulting-triangle" style={{ top: '50%', left: '50%', animationDelay: '4s' }} />
          
          <div className="consulting-ring" style={{ top: '25%', left: '40%' }} />
          <div className="consulting-ring" style={{ top: '60%', left: '60%', animationDelay: '3s', width: '80px', height: '80px' }} />
          
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`dot-${i}`}
              className="consulting-dot"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
          
          <div className="consulting-line" style={{ top: '35%', left: '20%', animationDelay: '0s' }} />
          <div className="consulting-line" style={{ top: '60%', left: '45%', animationDelay: '2s' }} />
          <div className="consulting-line" style={{ top: '80%', left: '65%', animationDelay: '4s' }} />
        </div>
        <div className="consulting-hero-content">
          <span className="consulting-tag">Consulting</span>
          <h1>Smarter Business Solutions</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="consulting-wrapper">
        <div className="consulting-block">
          <h2>Overview</h2>
          <p>
            At Sagarsoft, we specialize in delivering digital solutions that
            enhance efficiency, engagement, and trust in data. Our
            <strong> Dealer Engage App</strong> was designed to streamline
            workflows, enable real-time engagement, and optimize
            decision-making through analytics.
          </p>
        </div>

        <div className="consulting-block">
          <h2>Our Solution: Dealer Engage App</h2>
          <p>
            We developed a feature-rich application that integrates GPS
            functionality, automation, and predictive analytics to deliver:
          </p>

          <ul className="consulting-list">
            <li><strong>Automated travel reimbursements</strong>, simplifying approvals</li>
            <li><strong>Seamless dealer engagement</strong>, improving collaboration</li>
            <li><strong>Advanced data-driven insights</strong> for better planning</li>
            <li><strong>Workflow automation</strong>, reducing manual effort</li>
          </ul>
        </div>

        <div className="consulting-block">
          <h2>Key Outcomes & Benefits</h2>
          <ul className="consulting-check">
            <li>30% boost in operational efficiency through automation</li>
            <li>Enhanced engagement between stakeholders</li>
            <li>Greater trust in analytics-driven decisions</li>
            <li>40% faster reimbursement processing</li>
          </ul>
        </div>
      </div>

      {/* BACK */}
      <div className="consulting-back">
        <a href="/">← Back to Home</a>
      </div>
    </section>
  );
}