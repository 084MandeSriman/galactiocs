export default function HedgeFundPlatforms() {
  return (
    <section className="hf-section">
      <style>{`
        .hf-section {
          background:
            linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)),
            url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #1f2937;
        }

        /* HERO */
        .hf-hero {
          position: relative;
          width: 100%;
          height: 520px;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 30%, #3b82f6 60%, #60a5fa 100%);
        }

        .hf-hero-animation {
          position: absolute;
          inset: 0;
          z-index: 0;
          animation: heroGlow 14s ease-in-out infinite;
        }

        .hf-hero-animation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(96,165,250,0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(30,64,175,0.2) 0%, transparent 50%);
          animation: classicPulse 16s ease-in-out infinite;
        }

        @keyframes heroGlow {
          0%, 100% { filter: brightness(1) saturate(1); }
          50% { filter: brightness(1.15) saturate(1.05); }
        }

        @keyframes classicPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .hf-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.35), rgba(96,165,250,0.15));
          animation: float 20s infinite ease-in-out, classicGlow 7s infinite ease-in-out;
          filter: blur(1px);
          box-shadow: 0 0 60px rgba(96,165,250,0.4), inset 0 0 40px rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.25);
        }

        .hf-circle::before {
          content: '';
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
          animation: elegantSpin 25s linear infinite;
        }

        .hf-circle::after {
          content: '';
          position: absolute;
          inset: 35px;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.2);
          animation: elegantSpin 30s linear infinite reverse;
        }

        @keyframes classicGlow {
          0%, 100% { filter: blur(1px) brightness(1); }
          50% { filter: blur(2px) brightness(1.3); }
        }

        @keyframes elegantSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hf-circle:nth-child(2) { width: 105px; height: 105px; top: 22%; left: 14%; animation-delay: 0s, 0s; }
        .hf-circle:nth-child(3) { width: 145px; height: 145px; top: 56%; left: 74%; animation-delay: 7s, 2s; }
        .hf-circle:nth-child(4) { width: 88px; height: 88px; top: 74%; left: 24%; animation-delay: 4s, 4s; }

        .hf-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 35s linear infinite;
          opacity: 0.6;
        }

        .hf-ticker {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.8), transparent);
          animation: tickerScroll 6s infinite linear;
          box-shadow: 0 0 20px rgba(96,165,250,0.6);
        }

        @keyframes tickerScroll {
          from { transform: translateX(-100%); }
          to { transform: translateX(200%); }
        }

        .hf-square {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid rgba(255,255,255,0.3);
          animation: squareRotate 15s infinite ease-in-out;
          box-shadow: 0 0 30px rgba(96,165,250,0.3);
        }

        @keyframes squareRotate {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 0.8; }
        }

        .hf-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(96,165,250,0.8);
          animation: dotBlink 4s infinite ease-in-out;
        }

        @keyframes dotBlink {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        .hf-arc {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid transparent;
          border-top-color: rgba(255,255,255,0.4);
          border-right-color: rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: arcSpin 12s linear infinite;
        }

        @keyframes arcSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
          33% { transform: translate(-30px, -40px) scale(1.12) rotate(120deg); opacity: 0.8; }
          66% { transform: translate(30px, -25px) scale(0.92) rotate(240deg); opacity: 0.7; }
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .hf-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 40% 50%, rgba(0,0,0,0.45), rgba(0,0,0,0.7));
          animation: overlayBreath 12s ease-in-out infinite;
        }

        .hf-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%);
          animation: classicShine 14s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes overlayBreath {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.88; }
        }

        @keyframes classicShine {
          0% { transform: translateX(-200%) translateY(-200%) rotate(135deg); }
          100% { transform: translateX(200%) translateY(200%) rotate(135deg); }
        }

        .hf-hero-content {
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1200px;
          padding: 0 24px;
          color: #fff;
          z-index: 2;
        }

        .hf-tag {
          display: inline-block;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          animation: tagFadeIn 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 25px rgba(30,64,175,0.5), 0 0 50px rgba(59,130,246,0.3);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hf-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: tagShimmer 3.5s infinite;
        }

        @keyframes tagFadeIn {
          from { opacity: 0; transform: translateY(25px) scale(0.85); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes tagShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .hf-hero h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          animation: titleAppear 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5), 0 8px 60px rgba(59,130,246,0.4);
          position: relative;
        }

        .hf-hero h1::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
          animation: titleBar 1.3s ease-out 0.9s forwards;
          box-shadow: 0 0 20px rgba(59,130,246,0.8);
        }

        @keyframes titleAppear {
          from { opacity: 0; transform: translateY(50px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes titleBar {
          to { width: 160px; }
        }

        /* CONTENT */
        .hf-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 40px;
        }

        .hf-text {
          max-width: 950px;
          margin-bottom: 60px;
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
        }

        /* SPLIT */
        .hf-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 90px;
        }

        .hf-split h3 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #111827;
        }

        .hf-split p {
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
        }

        .hf-split-animation {
          width: 100%;
          height: 320px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.1);
        }

        /* CHALLENGE ANIMATION - Bar Charts (Red/Orange) */
        .hf-challenge-bg {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
        }

        .hf-chart-bar {
          position: absolute;
          bottom: 20%;
          width: 30px;
          background: linear-gradient(to top, #dc2626, #ef4444, #f87171);
          border-radius: 4px 4px 0 0;
          animation: barGrow 3s infinite ease-in-out;
          box-shadow: 0 0 20px rgba(220,38,38,0.4);
          border: 1px solid rgba(185,28,28,0.3);
        }

        .hf-chart-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          border-radius: 4px 4px 0 0;
        }

        .hf-chart-bar:nth-child(1) { left: 20%; height: 60px; animation-delay: 0s; }
        .hf-chart-bar:nth-child(2) { left: 40%; height: 100px; animation-delay: 0.5s; }
        .hf-chart-bar:nth-child(3) { left: 60%; height: 80px; animation-delay: 1s; }

        @keyframes barGrow {
          0%, 100% { transform: scaleY(1); opacity: 0.9; }
          50% { transform: scaleY(1.25); opacity: 1; }
        }

        /* APPROACH ANIMATION - Gears (Purple/Violet) */
        .hf-approach-bg {
          background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
        }

        .hf-gear {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 8px solid #7c3aed;
          border-radius: 50%;
          animation: gearRotate 8s linear infinite;
        }

        .hf-gear::before,
        .hf-gear::after {
          content: '';
          position: absolute;
          background: #7c3aed;
        }

        .hf-gear::before {
          width: 100%;
          height: 12px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .hf-gear::after {
          width: 12px;
          height: 100%;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }

        .hf-gear:nth-child(1) { top: 30%; left: 25%; }
        .hf-gear:nth-child(2) { top: 45%; left: 55%; width: 60px; height: 60px; animation-direction: reverse; animation-duration: 6s; }
        .hf-gear:nth-child(3) { top: 60%; left: 70%; width: 50px; height: 50px; animation-duration: 10s; }

        @keyframes gearRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* OUTCOME ANIMATION - Network Nodes (Green/Emerald) */
        .hf-outcome-bg {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        }

        .hf-network-node {
          position: absolute;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #059669, #10b981);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(5,150,105,0.6);
          animation: nodePulse 3s infinite ease-in-out;
        }

        .hf-network-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, #059669, #10b981);
          transform-origin: left center;
          animation: lineGlow 3s infinite ease-in-out;
          box-shadow: 0 0 10px rgba(5,150,105,0.4);
        }

        @keyframes nodePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        @keyframes lineGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* BACK LINK */
        .hf-back {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 120px; /* ✅ GAP BEFORE FOOTER */
        }

        .hf-back a {
          font-size: 15px;
          font-weight: 600;
          color: #1e40af;
          text-decoration: none;
        }

        .hf-back a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hf-hero {
            height: 380px;
          }

          .hf-hero h1 {
            font-size: 34px;
          }

          .hf-split {
            grid-template-columns: 1fr;
          }

          .hf-split img {
            height: 260px;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="hf-hero">
        <div className="hf-hero-animation">
          <div className="hf-grid"></div>
          <div className="hf-circle"></div>
          <div className="hf-circle"></div>
          <div className="hf-circle"></div>
          
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={`ticker-${i}`}
              className="hf-ticker"
              style={{
                top: `${25 + i * 20}%`,
                width: '100%',
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
          
          <div className="hf-square" style={{ top: '18%', left: '25%' }} />
          <div className="hf-square" style={{ top: '65%', left: '68%', animationDelay: '4s' }} />
          <div className="hf-square" style={{ top: '45%', left: '82%', animationDelay: '8s', width: '35px', height: '35px' }} />
          
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`dot-${i}`}
              className="hf-dot"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
          
          <div className="hf-arc" style={{ top: '30%', left: '15%' }} />
          <div className="hf-arc" style={{ top: '50%', left: '70%', animationDelay: '3s', animationDirection: 'reverse' }} />
        </div>
        <div className="hf-hero-content">
          <span className="hf-tag">Investment</span>
          <h1>Hedge Fund Platforms</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="hf-wrapper">
        {/* INTRO */}
        <div className="hf-text">
          Higher investment in UX leads to improved engagement, faster decision-making,
          and better customer retention. Nearly 70% of enterprise applications fail
          due to poor user adoption and complex interfaces.
        </div>

        {/* CHALLENGE */}
        <div className="hf-split">
          <div className="hf-split-animation hf-challenge-bg">
            <div className="hf-chart-bar"></div>
            <div className="hf-chart-bar"></div>
            <div className="hf-chart-bar"></div>
          </div>
          <div>
            <h3>Challenge</h3>
            <p>
              The challenge was to modernize trading applications without disrupting
              existing workflows. The platform had to support diverse technologies
              while improving performance, usability, and scalability.
            </p>
          </div>
        </div>

        {/* APPROACH */}
        <div className="hf-split">
          <div>
            <h3>Approach</h3>
            <p>
              Using Digital-DAIS™ and Facelift frameworks, we simplified UI development,
              reduced redundancy, and ensured consistent experience across web, mobile,
              and desktop platforms.
            </p>
          </div>
          <div className="hf-split-animation hf-approach-bg">
            <div className="hf-gear"></div>
            <div className="hf-gear"></div>
            <div className="hf-gear"></div>
          </div>
        </div>

        {/* OUTCOME */}
        <div className="hf-split">
          <div className="hf-split-animation hf-outcome-bg">
            <div className="hf-network-node" style={{ top: '30%', left: '20%' }}></div>
            <div className="hf-network-node" style={{ top: '30%', left: '50%', animationDelay: '0.5s' }}></div>
            <div className="hf-network-node" style={{ top: '30%', left: '80%', animationDelay: '1s' }}></div>
            <div className="hf-network-node" style={{ top: '60%', left: '35%', animationDelay: '1.5s' }}></div>
            <div className="hf-network-node" style={{ top: '60%', left: '65%', animationDelay: '2s' }}></div>
            
            <div className="hf-network-line" style={{ top: '40%', left: '22%', width: '26%', transform: 'rotate(0deg)' }}></div>
            <div className="hf-network-line" style={{ top: '40%', left: '52%', width: '26%', animationDelay: '0.5s' }}></div>
            <div className="hf-network-line" style={{ top: '40%', left: '22%', width: '18%', transform: 'rotate(55deg)', transformOrigin: 'left center', animationDelay: '1s' }}></div>
            <div className="hf-network-line" style={{ top: '40%', left: '52%', width: '18%', transform: 'rotate(125deg)', transformOrigin: 'left center', animationDelay: '1.5s' }}></div>
          </div>
          <div>
            <h3>Outcome</h3>
            <p>
              We reduced the number of application screens from 500 to 150, improved
              productivity, eliminated workflow dependencies, and delivered a unified,
              scalable UX that significantly increased user satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="hf-back">
        <a href="/">← Back to Home</a>
      </div>
    </section>
  );
}