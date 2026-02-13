export default function HireAITalent() {
  return (
    <section className="hire-ai-section">
      <style>{`
        .hire-ai-section {
          position: relative;
          background:
            linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95)),
            url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 80px 6%;
          color: #ffffff;
          overflow: hidden;
        }

        .hire-ai-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hire-ai-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hire-ai-content {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hire-ai-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
        }

        .hire-ai-title {
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 24px;
          color: #ffffff;
          line-height: 1.2;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .hire-ai-title .highlight {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hire-ai-description {
          font-size: 20px;
          line-height: 1.7;
          margin-bottom: 35px;
          color: rgba(255, 255, 255, 0.95);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hire-ai-cta {
          display: inline-block;
          background: #ffffff;
          color: #667eea;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .hire-ai-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .hire-ai-cta:hover::before {
          left: 100%;
        }

        .hire-ai-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 40px 25px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffd700, #ffed4e);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .stat-item:hover::before {
          transform: scaleX(1);
        }

        .stat-item:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
        }

        .stat-number {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 12px;
          display: block;
          color: #ffd700;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .stat-label {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .hire-ai-title {
            font-size: 44px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .hire-ai-section {
            padding: 60px 4%;
          }
          .hire-ai-title {
            font-size: 36px;
          }
          .hire-ai-description {
            font-size: 17px;
          }
          .stats-grid {
            gap: 20px;
          }
          .stat-number {
            font-size: 40px;
          }
        }

        @media (max-width: 480px) {
          .hire-ai-section {
            padding: 50px 3%;
          }
          .hire-ai-title {
            font-size: 30px;
          }
          .hire-ai-description {
            font-size: 16px;
          }
          .hire-ai-content {
            margin-bottom: 45px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .stat-number {
            font-size: 36px;
          }
          .stat-label {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="hire-ai-container">
        <div className="hire-ai-content">
          <div className="hire-ai-badge">🌍 Global Remote Talent</div>
          <h2 className="hire-ai-title">
            Hire <span className="highlight">Elite Remote</span> AI Talent
          </h2>
          <p className="hire-ai-description">
            Access the world's top 1-3% AI-native professionals and engineering teams. 
            Scale your enterprise with vetted remote talent ready to deliver from day one.
          </p>
          <a href="#contact" className="hire-ai-cta">Start Hiring Today →</a>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">4M+</span>
            <p className="stat-label">Vetted remote AI & engineering professionals worldwide</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <p className="stat-label">Countries with top-tier remote talent available</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">97%</span>
            <p className="stat-label">Client satisfaction with remote team performance</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">~4 days</span>
            <p className="stat-label">Average onboarding time for remote talent</p>
          </div>
        </div>
      </div>
    </section>
  );
}
