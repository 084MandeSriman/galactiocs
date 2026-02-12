export default function FinancialServicesModernization() {
  return (
    <section className="fs-section">
      <style>{`
        .fs-section {
          background:
            linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)),
            url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          margin: 0;
          padding: 0;
        }

        /* HERO */
        .fs-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 60%, #475569 100%);
        }

        .fs-hero-animation {
          position: absolute;
          inset: 0;
          z-index: 0;
          animation: heroBreath 12s ease-in-out infinite;
        }

        .fs-hero-animation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25% 35%, rgba(234,179,8,0.15) 0%, transparent 50%),
                      radial-gradient(circle at 75% 65%, rgba(251,191,36,0.15) 0%, transparent 50%);
          animation: goldShimmer 15s ease-in-out infinite;
        }

        @keyframes heroBreath {
          0%, 100% { filter: brightness(1) contrast(1); }
          50% { filter: brightness(1.1) contrast(1.05); }
        }

        @keyframes goldShimmer {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.8; }
          50% { transform: scale(1.3) translate(20px, -20px); opacity: 1; }
        }

        .fs-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234,179,8,0.4), rgba(251,191,36,0.1));
          animation: float 20s infinite ease-in-out, goldPulse 6s infinite ease-in-out;
          filter: blur(1.5px);
          box-shadow: 0 0 60px rgba(234,179,8,0.3), inset 0 0 40px rgba(251,191,36,0.2);
          border: 1px solid rgba(234,179,8,0.3);
        }

        .fs-circle::before {
          content: '';
          position: absolute;
          inset: 15px;
          border-radius: 50%;
          border: 2px dashed rgba(234,179,8,0.4);
          animation: counterRotate 20s linear infinite;
        }

        @keyframes goldPulse {
          0%, 100% { filter: blur(1.5px) brightness(1); }
          50% { filter: blur(2px) brightness(1.4); }
        }

        @keyframes counterRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .fs-circle:nth-child(2) { width: 100px; height: 100px; top: 20%; left: 15%; animation-delay: 0s, 0s; }
        .fs-circle:nth-child(3) { width: 140px; height: 140px; top: 60%; left: 70%; animation-delay: 7s, 2s; }
        .fs-circle:nth-child(4) { width: 80px; height: 80px; top: 75%; left: 25%; animation-delay: 4s, 4s; }

        .fs-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(234,179,8,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,179,8,0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 35s linear infinite;
          opacity: 0.7;
        }

        .fs-bar {
          position: absolute;
          width: 4px;
          background: linear-gradient(180deg, transparent, rgba(234,179,8,0.8), transparent);
          animation: barRise 5s infinite ease-in-out;
          box-shadow: 0 0 20px rgba(234,179,8,0.6);
        }

        @keyframes barRise {
          0%, 100% { height: 0; opacity: 0; }
          50% { height: 200px; opacity: 1; }
        }

        .fs-diamond {
          position: absolute;
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, rgba(234,179,8,0.6), rgba(251,191,36,0.3));
          transform: rotate(45deg);
          animation: diamondFloat 12s infinite ease-in-out;
          box-shadow: 0 0 30px rgba(234,179,8,0.5);
          border: 1px solid rgba(234,179,8,0.4);
        }

        @keyframes diamondFloat {
          0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.6; }
          50% { transform: rotate(225deg) translateY(-50px); opacity: 1; }
        }

        .fs-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(234,179,8,0.6), transparent);
          animation: lineExpand 6s infinite ease-in-out;
          box-shadow: 0 0 15px rgba(234,179,8,0.4);
        }

        @keyframes lineExpand {
          0%, 100% { width: 0; opacity: 0; }
          50% { width: 180px; opacity: 1; }
        }

        .fs-coin-stack {
          position: absolute;
          width: 50px;
          height: 50px;
          animation: stackBounce 8s infinite ease-in-out;
        }

        .fs-coin-layer {
          position: absolute;
          width: 100%;
          height: 8px;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(234,179,8,0.5);
        }

        @keyframes stackBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
          33% { transform: translate(-30px, -40px) scale(1.15) rotate(120deg); opacity: 0.8; }
          66% { transform: translate(30px, -25px) scale(0.9) rotate(240deg); opacity: 0.7; }
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .fs-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 35% 45%, rgba(0,0,0,0.5), rgba(0,0,0,0.75));
          animation: overlayPulse 10s ease-in-out infinite;
        }

        .fs-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 35%, rgba(234,179,8,0.08) 50%, transparent 65%);
          animation: goldSweep 12s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes overlayPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        @keyframes goldSweep {
          0% { transform: translateX(-150%) translateY(-150%) rotate(135deg); }
          100% { transform: translateX(150%) translateY(150%) rotate(135deg); }
        }

        .fs-hero-content {
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

        .fs-tag {
          display: inline-block;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
          animation: tagSlide 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 25px rgba(234,179,8,0.6), 0 0 50px rgba(251,191,36,0.4);
          position: relative;
          overflow: hidden;
          color: #0f172a;
        }

        .fs-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: tagFlash 3s infinite;
        }

        @keyframes tagSlide {
          from { opacity: 0; transform: translateX(-40px) scale(0.8); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes tagFlash {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .fs-hero-content h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          margin: 0;
          animation: titleRise 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          text-shadow: 0 4px 30px rgba(0,0,0,0.6), 0 8px 60px rgba(234,179,8,0.4);
          position: relative;
        }

        .fs-hero-content h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #eab308, #fbbf24, #eab308);
          animation: titleLine 1.2s ease-out 0.8s forwards;
          box-shadow: 0 0 20px rgba(234,179,8,0.8), 0 0 40px rgba(251,191,36,0.4);
        }

        @keyframes titleRise {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes titleLine {
          to { width: 150px; }
        }

        /* CONTENT */
        .fs-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 24px;
        }

        .fs-intro {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 70px;
        }

        .fs-intro h2 {
          font-size: 34px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 18px;
        }

        .fs-intro p {
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 14px;
        }

        .fs-intro-animation {
          width: 100%;
          height: 320px;
          position: relative;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3), inset 0 0 60px rgba(234,179,8,0.1);
        }

        .fs-coin {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #eab308, #fbbf24, #eab308);
          box-shadow: 0 4px 20px rgba(234,179,8,0.6), inset 0 2px 10px rgba(255,255,255,0.3);
          animation: coinFloat 15s infinite ease-in-out;
          border: 2px solid rgba(251,191,36,0.5);
        }

        .fs-coin::before {
          content: '$';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 900;
          color: #0f172a;
          text-shadow: 0 1px 3px rgba(255,255,255,0.5);
        }

        .fs-coin:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
        .fs-coin:nth-child(2) { top: 50%; left: 60%; animation-delay: 3s; width: 50px; height: 50px; }
        .fs-coin:nth-child(3) { top: 70%; left: 30%; animation-delay: 6s; }

        @keyframes coinFloat {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.9; }
          50% { transform: translateY(-40px) rotate(360deg) scale(1.2); opacity: 1; }
        }

        .fs-block {
          max-width: 900px;
          margin-bottom: 48px;
        }

        .fs-block p {
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 14px;
        }

        .fs-highlight {
          color: #eab308;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .fs-note {
          max-width: 900px;
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 28px;
        }

        /* BACK */
        .fs-back {
          margin-top: 28px;
          padding-top: 18px;
          padding-bottom: 120px;
          border-top: 1px solid #e5e7eb;
        }

        .fs-back a {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          text-decoration: none;
        }

        .fs-back a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .fs-hero {
            height: 380px;
          }

          .fs-hero-content h1 {
            font-size: 34px;
          }

          .fs-intro {
            grid-template-columns: 1fr;
          }

          .fs-intro img {
            height: 260px;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="fs-hero">
        <div className="fs-hero-animation">
          <div className="fs-grid"></div>
          <div className="fs-circle"></div>
          <div className="fs-circle"></div>
          <div className="fs-circle"></div>
          
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={`bar-${i}`}
              className="fs-bar"
              style={{
                left: `${15 + i * 15}%`,
                bottom: '0',
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
          
          <div className="fs-diamond" style={{ top: '25%', left: '20%' }} />
          <div className="fs-diamond" style={{ top: '55%', left: '75%', animationDelay: '3s' }} />
          <div className="fs-diamond" style={{ top: '70%', left: '45%', animationDelay: '6s', width: '25px', height: '25px' }} />
          
          <div className="fs-line" style={{ top: '30%', left: '25%', animationDelay: '0s' }} />
          <div className="fs-line" style={{ top: '55%', left: '50%', animationDelay: '2s' }} />
          <div className="fs-line" style={{ top: '75%', left: '15%', animationDelay: '4s' }} />
          
          <div className="fs-coin-stack" style={{ top: '35%', left: '65%' }}>
            <div className="fs-coin-layer" style={{ bottom: '0' }} />
            <div className="fs-coin-layer" style={{ bottom: '8px' }} />
            <div className="fs-coin-layer" style={{ bottom: '16px' }} />
            <div className="fs-coin-layer" style={{ bottom: '24px' }} />
          </div>
        </div>
        <div className="fs-hero-content">
          <span className="fs-tag">Finance</span>
          <h1>Financial Services Modernization</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="fs-wrapper">
        <div className="fs-intro">
          <div>
            <h2>DAIS Application Transformation</h2>
            <p>
              Our DAIS Application transformation approach ensures that large-scale,
              complex transformations don’t have to be complicated. We enable
              faster ROI through application modernization, cloud migration,
              and server consolidation.
            </p>
            <p>
              A global Financial Services firm faced severe legacy drag caused by
              outdated mission-critical systems that hindered growth and agility.
            </p>
          </div>

          <div className="fs-intro-animation">
            <div className="fs-coin"></div>
            <div className="fs-coin"></div>
            <div className="fs-coin"></div>
          </div>
        </div>

        <div className="fs-block">
          <p>
            With ambitious growth goals, the firm initiated a large technology
            transformation program focused on modernizing over 200 home-grown
            applications into scalable, flexible, and user-friendly systems.
          </p>
        </div>

        <div className="fs-block">
          <div className="fs-highlight">
            Our modernization approach included:
          </div>

          <p>
            A phased migration to Agile and DevOps, starting with pilot POCs,
            followed by decomposition of applications into autonomous
            microservices and containerized workloads.
          </p>

          <p>
            The new architecture supported mobile and web clients, asynchronous
            integrations, third-party systems, and high scalability across
            multi-cloud environments.
          </p>
        </div>

        <div className="fs-note">
          Delivered across four 90-day phases, the DAIS transformation reduced
          the application landscape to 70 systems and cut total cost of ownership
          by 25%, while improving robustness, responsiveness, and automation.
        </div>

        <div className="fs-note">
          If you are considering a transformation program—or are already in the
          midst of one—contact us for a no-strings-attached conversation around
          challenges, solutions, and best practices.
        </div>

        {/* BACK */}
        <div className="fs-back">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </section>
  );
}