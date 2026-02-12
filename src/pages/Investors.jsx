export default function Investors() {
  const reports = [
    {
      year: "2024-25",
      desc: "Transforming Vision Into Value",
      percent: "29%",
    },
    {
      year: "2023-24",
      desc: "Changing the Future with Technology Advancements",
      percent: "27%",
    },
    {
      year: "2022-23",
      desc: "Navigating the Technology Landscape",
      percent: "28%",
    },
    {
      year: "2021-22",
      desc: "Accelerating Innovation",
      percent: "26%",
    },
  ];

  // ----- REPORT CARD ICONS – each with distinct theme & animation -----
  const getReportIcon = (desc) => {
    const props = { width: "100%", height: "180px", viewBox: "0 0 120 100", preserveAspectRatio: "xMidYMid meet" };
    
    // 1. Transforming Vision Into Value – GROWTH CHART (pulsing bars)
    if (desc.includes("Vision")) {
      return (
        <svg {...props}>
          <defs>
            <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <rect x="30" y="60" width="12" height="30" fill="url(#visionGrad)" opacity="0.9">
            <animate attributeName="height" values="30;45;30" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="55" y="40" width="12" height="50" fill="url(#visionGrad)" opacity="0.9">
            <animate attributeName="height" values="50;70;50" dur="2.4s" repeatCount="indefinite" />
          </rect>
          <rect x="80" y="20" width="12" height="70" fill="url(#visionGrad)" opacity="0.9">
            <animate attributeName="height" values="70;90;70" dur="2.8s" repeatCount="indefinite" />
          </rect>
          <circle cx="60" cy="20" r="6" fill="white" />
        </svg>
      );
    }
    // 2. Changing the Future – ROCKET (bounce & trail)
    if (desc.includes("Future") || desc.includes("Advancements")) {
      return (
        <svg {...props}>
          <defs>
            <linearGradient id="futureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <polygon points="60,20 80,55 65,55 65,75 55,75 55,55 40,55" fill="url(#futureGrad)" opacity="0.9">
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" dur="2.2s" repeatCount="indefinite" />
          </polygon>
          <circle cx="60" cy="35" r="6" fill="white" />
          <path d="M55 75 L50 85 L70 85 L65 75" fill="url(#futureGrad)" opacity="0.8" />
        </svg>
      );
    }
    // 3. Navigating the Technology Landscape – NETWORK GRAPH (flowing connections)
    if (desc.includes("Navigating")) {
      return (
        <svg {...props}>
          <defs>
            <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Network lines */}
          <line x1="35" y1="35" x2="60" y2="50" stroke="url(#navGrad)" strokeWidth="2" opacity="0.6" />
          <line x1="60" y1="50" x2="85" y2="35" stroke="url(#navGrad)" strokeWidth="2" opacity="0.6" />
          <line x1="35" y1="35" x2="85" y2="35" stroke="url(#navGrad)" strokeWidth="2" opacity="0.4" />
          <line x1="35" y1="35" x2="45" y2="65" stroke="url(#navGrad)" strokeWidth="2" opacity="0.6" />
          <line x1="85" y1="35" x2="75" y2="65" stroke="url(#navGrad)" strokeWidth="2" opacity="0.6" />
          <line x1="45" y1="65" x2="75" y2="65" stroke="url(#navGrad)" strokeWidth="2" opacity="0.4" />
          <line x1="60" y1="50" x2="45" y2="65" stroke="url(#navGrad)" strokeWidth="2" opacity="0.5" />
          <line x1="60" y1="50" x2="75" y2="65" stroke="url(#navGrad)" strokeWidth="2" opacity="0.5" />
          
          {/* Animated particles */}
          <circle cx="35" cy="35" r="2" fill="#14b8a6" opacity="0.8">
            <animate attributeName="cx" values="35;60;85" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="35;50;35" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="35" r="2" fill="#06b6d4" opacity="0.8">
            <animate attributeName="cx" values="85;60;45" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="35;50;65" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Network nodes with pulse */}
          <circle cx="35" cy="35" r="5" fill="url(#navGrad)" filter="url(#glow)">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="35" r="5" fill="url(#navGrad)" filter="url(#glow)">
            <animate attributeName="r" values="5;7;5" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="50" r="6" fill="url(#navGrad)" filter="url(#glow)">
            <animate attributeName="r" values="6;9;6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="45" cy="65" r="5" fill="url(#navGrad)" filter="url(#glow)">
            <animate attributeName="r" values="5;7;5" dur="2.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="75" cy="65" r="5" fill="url(#navGrad)" filter="url(#glow)">
            <animate attributeName="r" values="5;7;5" dur="2.1s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    }
    // 4. Accelerating Innovation – SPEEDOMETER (pulsing needle)
    if (desc.includes("Accelerating")) {
      return (
        <svg {...props}>
          <defs>
            <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <path d="M60 30 L60 55 L80 70" stroke="url(#speedGrad)" strokeWidth="5" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="-20 60 55" to="20 60 55" dur="1.5s" repeatCount="indefinite" />
          </path>
          <circle cx="60" cy="55" r="20" fill="none" stroke="url(#speedGrad)" strokeWidth="4" strokeDasharray="3 3" />
          <circle cx="60" cy="55" r="6" fill="url(#speedGrad)" />
        </svg>
      );
    }
    return null;
  };

  return (
    <>
      <style>{`
        /* ---------- HERO – LIGHT CREAM ---------- */
        .investor-hero {
          height: 420px;
          position: relative;
          background: #faf8f3;
          overflow: hidden;
          isolation: isolate;
        }

        .hero-svg-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.25;
        }

        .hero-svg-bg svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 80px;
          color: #2c3e50;
          z-index: 2;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 12px;
          animation: titleSlide 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-subtitle {
          font-size: 20px;
          opacity: 0.8;
          animation: titleSlide 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }

        @keyframes titleSlide {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* ---------- REPORT CARDS (layout unchanged) ---------- */
        .report-icon {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #f9fafb, #f3f4f6);
          border-bottom: 1px solid #eee;
        }

        .report-card {
          border: 1px solid #eee;
          border-radius: 6px;
          overflow: hidden;
          text-align: left;
          padding-bottom: 15px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .report-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
        }

        .report-percent {
          font-size: 28px;
          font-weight: 800;
          color: #1f6fb2;
          margin: 12px 0 4px;
          padding: 0 16px;
        }

        .report-desc {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          padding: 0 16px;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .report-year {
          font-size: 14px;
          color: #6b7280;
          padding: 0 16px;
          margin-bottom: 8px;
        }

        .report-link {
          display: inline-block;
          margin-left: 16px;
          color: #1f6fb2;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }

        .report-link:hover {
          border-bottom-color: #1f6fb2;
        }

        /* ---------- LAYOUT (unchanged) ---------- */
        .investor-container {
          display: flex;
          gap: 40px;
          padding: 60px 80px;
          background: #f7f7f7;
        }

        .investor-sidebar {
          width: 280px;
          background: #fff;
          padding: 20px;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .investor-main {
          flex: 1;
          background: #fff;
          padding: 30px;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .investor-header {
          background: #1f6fb2;
          color: #fff;
          padding: 12px 18px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 4px;
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .investor-container {
            flex-direction: column;
            padding: 40px 24px;
          }
          .investor-sidebar {
            width: 100%;
          }
          .hero-overlay {
            padding-left: 40px;
          }
          .hero-title {
            font-size: 36px;
          }
        }
      `}</style>

      {/* ========== HERO – DEEP BLUE/VIOLET + IMAGE ========== */}
      <section className="investor-hero">
        <div className="hero-svg-bg">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200" alt="Investment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="hero-overlay">
          <h1 className="hero-title">Investing in value creation</h1>
          <p className="hero-subtitle">With trust & expertise</p>
        </div>
      </section>

      {/* ========== CONTENT – SIDEBAR + MAIN (exactly as before) ========== */}
      <div className="investor-container">
        <aside className="investor-sidebar">
          <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '0 0 10px 0' }}>Investor</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px 0' }}>
            <li style={{ background: '#e9f2fb', padding: '10px', borderRadius: '4px', fontWeight: '500', color: '#1f6fb2', marginBottom: '6px' }}>
              Investor Overview (Reg.46)
            </li>
            <li style={{ padding: '8px 10px', color: '#374151' }}>Investor Contact Details</li>
            <li style={{ padding: '8px 10px', color: '#374151' }}>Registrar and Transfer Agent</li>
          </ul>
          <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '18px 0 10px' }}>Financial Information</h4>
          <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '18px 0 10px' }}>Corporate Governance</h4>
          <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '18px 0 10px' }}>Shareholder Information</h4>
          <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '18px 0 10px' }}>Regulatory Filings</h4>
        </aside>

        <main className="investor-main">
          <div className="investor-header">Investor Overview</div>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444', marginBottom: '30px' }}>
            Sagarsoft Management Team comprises technology and business
            visionaries propelling the company toward growth and success.
            Entrepreneurial and hands-on, they are knowledgeable and experienced
            on all fronts. Add to that a flexible delivery structure, which
            enables nimble response in a dynamic business and technological
            environment.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
            {reports.map((r, i) => (
              <div key={i} className="report-card">
                <div className="report-icon">{getReportIcon(r.desc)}</div>
                <div className="report-percent">{r.percent}</div>
                <div className="report-desc">{r.desc}</div>
                <div className="report-year">Annual Report {r.year}</div>
                <a href="#" className="report-link">View Report</a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}