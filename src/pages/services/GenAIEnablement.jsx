export default function GenAIEnablement() {
  return (
    <section className="genai-section">
      <style>{`
        .genai-section {
          background:
            linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)),
            url("https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
        }

        /* HERO */
        .genai-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #c026d3 60%, #d946ef 100%);
        }

        .genai-hero-animation {
          position: absolute;
          inset: 0;
          z-index: 0;
          animation: aiPulse 10s ease-in-out infinite;
        }

        .genai-hero-animation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(168,85,247,0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(217,70,239,0.3) 0%, transparent 50%);
          animation: aiGlow 14s ease-in-out infinite;
        }

        @keyframes aiPulse {
          0%, 100% { filter: brightness(1) saturate(1); }
          50% { filter: brightness(1.2) saturate(1.1); }
        }

        @keyframes aiGlow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.2) rotate(15deg); opacity: 1; }
        }

        .genai-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.4), rgba(168,85,247,0.2));
          animation: float 20s infinite ease-in-out, aiCirclePulse 6s infinite ease-in-out;
          filter: blur(1px);
          box-shadow: 0 0 60px rgba(168,85,247,0.5), inset 0 0 40px rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.3);
        }

        .genai-circle::before {
          content: '';
          position: absolute;
          inset: 15px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.25);
          animation: aiSpin 20s linear infinite;
        }

        .genai-circle::after {
          content: '';
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.2);
          animation: aiSpin 25s linear infinite reverse;
        }

        @keyframes aiCirclePulse {
          0%, 100% { filter: blur(1px) brightness(1); }
          50% { filter: blur(2px) brightness(1.4); }
        }

        @keyframes aiSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .genai-circle:nth-child(2) { width: 115px; height: 115px; top: 20%; left: 13%; animation-delay: 0s, 0s; }
        .genai-circle:nth-child(3) { width: 155px; height: 155px; top: 57%; left: 73%; animation-delay: 7s, 2s; }
        .genai-circle:nth-child(4) { width: 90px; height: 90px; top: 73%; left: 23%; animation-delay: 4s, 4s; }

        .genai-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 35s linear infinite;
          opacity: 0.6;
        }

        .genai-brain {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 3px solid rgba(255,255,255,0.4);
          border-radius: 50% 50% 0 50%;
          animation: brainPulse 8s infinite ease-in-out;
          box-shadow: 0 0 30px rgba(168,85,247,0.5);
        }

        @keyframes brainPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        .genai-spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(217,70,239,0.8);
          animation: sparkTwinkle 3s infinite ease-in-out;
        }

        @keyframes sparkTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(2); }
        }

        .genai-wave {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent);
          animation: waveFlow 7s infinite ease-in-out;
          box-shadow: 0 0 25px rgba(168,85,247,0.6);
        }

        @keyframes waveFlow {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }

        .genai-neural {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 20%;
          animation: neuralRotate 10s infinite linear;
          box-shadow: 0 0 40px rgba(192,38,211,0.4);
        }

        @keyframes neuralRotate {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
          33% { transform: translate(-30px, -40px) scale(1.15) rotate(120deg); opacity: 0.85; }
          66% { transform: translate(30px, -25px) scale(0.9) rotate(240deg); opacity: 0.7; }
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .genai-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 40% 50%, rgba(0,0,0,0.5), rgba(0,0,0,0.75));
          animation: overlayShift 11s ease-in-out infinite;
        }

        .genai-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%);
          animation: aiShine 13s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes overlayShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.88; }
        }

        @keyframes aiShine {
          0% { transform: translateX(-200%) translateY(-200%) rotate(135deg); }
          100% { transform: translateX(200%) translateY(200%) rotate(135deg); }
        }

        .genai-hero-content {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 1200px;
          width: 100%;
          padding: 0 24px;
          color: #fff;
          z-index: 2;
        }

        .genai-tag {
          display: inline-block;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
          animation: tagAppear 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 25px rgba(124,58,237,0.6), 0 0 50px rgba(168,85,247,0.4);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.25);
        }

        .genai-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: tagGlimmer 3s infinite;
        }

        @keyframes tagAppear {
          from { opacity: 0; transform: translateX(-35px) scale(0.85); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes tagGlimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .genai-hero-content h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          animation: titleReveal 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          text-shadow: 0 4px 30px rgba(0,0,0,0.6), 0 8px 60px rgba(168,85,247,0.5);
          position: relative;
        }

        .genai-hero-content h1::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #a855f7, #d946ef, #a855f7);
          animation: titleUnderline 1.3s ease-out 0.9s forwards;
          box-shadow: 0 0 20px rgba(168,85,247,0.9);
        }

        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes titleUnderline {
          to { width: 170px; }
        }

        /* CONTENT */
        .genai-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 24px 40px;
        }

        .genai-block {
          max-width: 900px;
          margin-bottom: 60px;
        }

        .genai-block h2 {
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #111827;
        }

        .genai-block p {
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 16px;
        }

        .genai-list {
          padding-left: 18px;
          margin-top: 12px;
        }

        .genai-list li {
          font-size: 15px;
          color: #374151;
          margin-bottom: 10px;
        }

        .genai-highlight {
          font-weight: 700;
          color: #7c3aed;
          margin-bottom: 12px;
        }

        .genai-check {
          list-style: none;
          padding-left: 0;
        }

        .genai-check li::before {
          content: "✔";
          color: #7c3aed;
          margin-right: 10px;
        }

        /* BACK */
        .genai-back {
          max-width: 1200px;
          margin: 40px auto 0;
          padding: 0 24px 120px;
        }

        .genai-back a {
          font-size: 15px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }

        .genai-back a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .genai-hero {
            height: 380px;
          }

          .genai-hero-content h1 {
            font-size: 34px;
          }

          .genai-wrapper {
            padding-top: 60px;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="genai-hero">
        <div className="genai-hero-animation">
          <div className="genai-grid"></div>
          <div className="genai-circle"></div>
          <div className="genai-circle"></div>
          <div className="genai-circle"></div>
          
          <div className="genai-brain" style={{ top: '25%', left: '20%' }} />
          <div className="genai-brain" style={{ top: '60%', left: '70%', animationDelay: '2s' }} />
          <div className="genai-brain" style={{ top: '45%', left: '85%', animationDelay: '4s', width: '50px', height: '50px' }} />
          
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`spark-${i}`}
              className="genai-spark"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          
          <div className="genai-wave" style={{ top: '30%' }} />
          <div className="genai-wave" style={{ top: '55%', animationDelay: '2s' }} />
          <div className="genai-wave" style={{ top: '75%', animationDelay: '4s' }} />
          
          <div className="genai-neural" style={{ top: '20%', left: '50%' }} />
          <div className="genai-neural" style={{ top: '65%', left: '30%', animationDelay: '3s', animationDirection: 'reverse' }} />
        </div>
        <div className="genai-hero-content">
          <span className="genai-tag">AI / ML</span>
          <h1>GenAI Enablement</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="genai-wrapper">
        <div className="genai-block">
          <h2>Overview</h2>
          <p>
            Sagarsoft’s GenAI is revolutionizing enterprise operations by embedding
            AI-driven automation into core business processes. By leveraging
            cutting-edge generative models, organizations can dramatically
            improve efficiency, reduce costs, and accelerate innovation.
          </p>
        </div>

        <div className="genai-block">
          <h2>Challenges</h2>
          <ul className="genai-list">
            <li><strong>Skillset Silos:</strong> Fragmented expertise across BA, Architecture, and QA</li>
            <li><strong>Security & Compliance:</strong> Managing risks while scaling AI adoption</li>
            <li><strong>Innovation Delays:</strong> Manual workflows slowing ideation</li>
            <li><strong>High Costs & Time Constraints:</strong> Balancing quality with speed</li>
          </ul>
        </div>

        <div className="genai-block">
          <h2>Solution: GenAI Reference Architecture</h2>
          <p>
            Sagarsoft introduced a comprehensive, enterprise-ready GenAI framework:
          </p>

          <div className="genai-highlight">Key Components</div>
          <ul className="genai-list">
            <li><strong>SAGE Foundation:</strong> LLM-agnostic, open-source compatible framework</li>
            <li><strong>Metering & Governance:</strong> Prompt tracking, compliance, and auditability</li>
            <li><strong>AI Automation:</strong> Code generation, analysis, and testing workflows</li>
          </ul>
        </div>

        <div className="genai-block">
          <h2>The Results</h2>
          <ul className="genai-check">
            <li>Faster go-to-market agility</li>
            <li>Reduced dependency on manual efforts</li>
            <li>Improved governance and compliance visibility</li>
            <li>Scalable enterprise GenAI adoption</li>
          </ul>
        </div>
      </div>

      {/* BACK */}
      <div className="genai-back">
        <a href="/">← Back to Home</a>
      </div>
    </section>
  );
}