export default function CaseStudiesSection() {
  // ========== ENHANCED ANIMATED ICONS ==========
  // Each category now features multiple coordinated animations:
  // pulsing cores, orbiting satellites, flowing paths, morphing shapes, and floating particles.
  // All gradients retain your original color schemes.

  const getIconForCase = (item) => {
    const iconProps = {
      className: "case-icon",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid meet",
    };

    switch (item.category) {
      case "Technology":
        return (
          <svg {...iconProps}>
            <defs>
              <linearGradient id="gradTechX" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <radialGradient id="glowTech" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* glowing background */}
            <circle cx="50" cy="50" r="40" fill="url(#glowTech)">
              <animate attributeName="r" values="38;42;38" dur="4s" repeatCount="indefinite" />
            </circle>
            {/* central hexagon with pulse */}
            <path
              d="M50 20 L70 30 L70 50 L50 60 L30 50 L30 30 Z"
              fill="none"
              stroke="url(#gradTechX)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </path>
            {/* orbiting data nodes */}
            <circle cx="50" cy="20" r="5" fill="url(#gradTechX)">
              <animateMotion path="M0,0 a30,30 0 1,1 0,1 z" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="20" r="4" fill="white" opacity="0.7">
              <animateMotion path="M0,0 a30,30 0 1,1 0,1 z" dur="6s" repeatCount="indefinite" />
            </circle>
            {/* flowing connection lines */}
            <path
              d="M30 30 L50 20 L70 30"
              stroke="url(#gradTechX)"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.8"
            >
              <animate attributeName="stroke-dashoffset" values="0;50;0" dur="3s" repeatCount="indefinite" />
            </path>
          </svg>
        );

      case "Healthcare":
        return (
          <svg {...iconProps}>
            <defs>
              <linearGradient id="gradHealthX" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* pulsing heartbeat background */}
            <circle cx="50" cy="50" r="38" fill="url(#gradHealthX)" opacity="0.1">
              <animate attributeName="r" values="36;40;36" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* ECG line with animated path */}
            <path
              d="M20 50 L35 50 L40 35 L45 65 L50 45 L55 55 L60 40 L65 60 L70 50 L80 50"
              stroke="url(#gradHealthX)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" values="0;200;0" dur="4s" repeatCount="indefinite" />
            </path>
            {/* floating plus symbols */}
            <text x="25" y="25" fontSize="16" fill="url(#gradHealthX)" opacity="0.7">+</text>
            <text x="70" y="75" fontSize="16" fill="url(#gradHealthX)" opacity="0.7">+</text>
          </svg>
        );

      case "Finance":
        return (
          <svg {...iconProps}>
            <defs>
              <linearGradient id="gradFinanceX" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            {/* rising coins */}
            <circle cx="30" cy="60" r="8" fill="url(#gradFinanceX)" opacity="0.9">
              <animate attributeName="cy" values="60;50;60" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="55" r="10" fill="url(#gradFinanceX)" opacity="0.8">
              <animate attributeName="cy" values="55;45;55" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="70" cy="50" r="9" fill="url(#gradFinanceX)" opacity="0.7">
              <animate attributeName="cy" values="50;40;50" dur="2.2s" repeatCount="indefinite" />
            </circle>
            {/* bar chart that grows */}
            <rect x="25" y="70" width="10" height="15" fill="url(#gradFinanceX)">
              <animate attributeName="height" values="15;25;15" dur="1.8s" repeatCount="indefinite" />
            </rect>
            <rect x="45" y="70" width="10" height="20" fill="url(#gradFinanceX)">
              <animate attributeName="height" values="20;30;20" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="65" y="70" width="10" height="25" fill="url(#gradFinanceX)">
              <animate attributeName="height" values="25;35;25" dur="2.2s" repeatCount="indefinite" />
            </rect>
          </svg>
        );

      case "Investment":
        return (
          <svg {...iconProps}>
            <defs>
              <linearGradient id="gradInvestX" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* morphing trend line */}
            <polyline
              points="20,70 35,50 50,55 65,40 80,30"
              stroke="url(#gradInvestX)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="points"
                dur="3s"
                repeatCount="indefinite"
                values="20,70 35,50 50,55 65,40 80,30;
                        20,70 35,55 50,45 65,35 80,25;
                        20,70 35,50 50,55 65,40 80,30"
              />
            </polyline>
            {/* animated arrow up */}
            <polygon points="80,25 75,35 85,35" fill="url(#gradInvestX)">
              <animateMotion path="M0,0 L0,-10 L0,0" dur="1.5s" repeatCount="indefinite" />
            </polygon>
            {/* baseline */}
            <line x1="15" y1="75" x2="85" y2="75" stroke="url(#gradInvestX)" strokeWidth="3" />
          </svg>
        );

      case "AI / ML":
        return (
          <svg {...iconProps}>
            <defs>
              <linearGradient id="gradAIX" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            {/* neural network nodes */}
            <circle cx="35" cy="40" r="6" fill="url(#gradAIX)">
              <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="40" r="6" fill="url(#gradAIX)">
              <animate attributeName="r" values="6;9;6" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="65" r="6" fill="url(#gradAIX)">
              <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="20" cy="60" r="4" fill="url(#gradAIX)" opacity="0.8">
              <animate attributeName="r" values="4;7;4" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="60" r="4" fill="url(#gradAIX)" opacity="0.8">
              <animate attributeName="r" values="4;7;4" dur="2.8s" repeatCount="indefinite" />
            </circle>
            {/* animated connections */}
            <path d="M35 40 L50 65" stroke="url(#gradAIX)" strokeWidth="2" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" values="0;30;0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M65 40 L50 65" stroke="url(#gradAIX)" strokeWidth="2" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" values="0;30;0" dur="2.3s" repeatCount="indefinite" />
            </path>
            <path d="M20 60 L35 40" stroke="url(#gradAIX)" strokeWidth="2" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" values="0;30;0" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M80 60 L65 40" stroke="url(#gradAIX)" strokeWidth="2" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" values="0;30;0" dur="2.7s" repeatCount="indefinite" />
            </path>
          </svg>
        );

      case "Consulting":
        return (
          <svg {...iconProps}>
            <defs>
              <linearGradient id="gradConsultX" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            {/* interlocking puzzle pieces with motion */}
            <rect x="30" y="35" width="18" height="18" rx="3" fill="none" stroke="url(#gradConsultX)" strokeWidth="3">
              <animate attributeName="x" values="30;28;30" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="48" y="35" width="18" height="18" rx="3" fill="none" stroke="url(#gradConsultX)" strokeWidth="3">
              <animate attributeName="x" values="48;50;48" dur="3.2s" repeatCount="indefinite" />
            </rect>
            <rect x="30" y="53" width="18" height="18" rx="3" fill="none" stroke="url(#gradConsultX)" strokeWidth="3">
              <animate attributeName="y" values="53;51;53" dur="3.4s" repeatCount="indefinite" />
            </rect>
            <rect x="48" y="53" width="18" height="18" rx="3" fill="none" stroke="url(#gradConsultX)" strokeWidth="3">
              <animate attributeName="y" values="53;55;53" dur="3.6s" repeatCount="indefinite" />
            </rect>
            {/* central glowing node */}
            <circle cx="58" cy="62" r="6" fill="url(#gradConsultX)" opacity="0.9">
              <animate attributeName="r" values="6;9;6" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        );

      default:
        return null;
    }
  };

  // ========== ORIGINAL LAYOUT – UNCHANGED ==========
  return (
    <section id="case-studies" className="case-section">
      <style>{`
        .case-section {
          padding: 80px 24px;
          position: relative;
          background:
            linear-gradient(
              rgba(255,255,255,0.92),
              rgba(255,255,255,0.92)
            ),
            url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
        }

        .case-section::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 30%, rgba(59,130,246,0.08), transparent 45%),
            radial-gradient(circle at 85% 70%, rgba(139,92,246,0.08), transparent 45%);
          pointer-events: none;
        }

        .case-title {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 60px;
          color: #111827;
          position: relative;
          z-index: 2;
          line-height: 1.2;
        }

        .case-title::after {
          content: "";
          display: block;
          width: 56px;
          height: 3px;
          margin: 12px auto 0;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }

        .case-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .case-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(229,231,235,0.9);
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          position: relative;
        }

        .case-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          opacity: 0.06;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }

        .case-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 60px rgba(0,0,0,0.14);
          border-color: rgba(59,130,246,0.25);
        }

        .case-img-container {
          height: 200px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(145deg, #f9fafb, #f3f4f6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .case-icon {
          width: 70%;
          height: 70%;
          transition: transform 0.5s ease, filter 0.5s ease;
          animation: float 6s infinite ease-in-out;
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.06));
        }

        .case-card:hover .case-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 12px 20px rgba(0,0,0,0.1));
          animation: float 3s infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .case-category {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(17,24,39,0.85);
          color: #ffffff;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          z-index: 3;
          border-radius: 4px;
        }

        .case-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .case-content h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #111827;
          line-height: 1.3;
        }

        .case-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .case-link {
          font-size: 13px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          align-self: flex-start;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s ease;
        }

        .case-link:hover {
          border-bottom-color: #2563eb;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .case-section {
            padding: 70px 5%;
          }
          .case-title {
            font-size: 36px;
            margin-bottom: 50px;
          }
          .case-grid {
            gap: 28px;
          }
        }

        @media (max-width: 1100px) {
          .case-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .case-title {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .case-section {
            padding: 55px 4%;
          }
          .case-title {
            font-size: 28px;
            margin-bottom: 40px;
          }
          .case-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .case-img-container {
            height: 180px;
          }
          .case-content {
            padding: 20px;
          }
          .case-content h3 {
            font-size: 16px;
            margin-bottom: 8px;
          }
          .case-content p {
            font-size: 13px;
            margin-bottom: 12px;
          }
          .case-link {
            font-size: 12px;
          }
        }

        @media (max-width: 640px) {
          .case-section {
            padding: 40px 3%;
          }
          .case-title {
            font-size: 24px;
            margin-bottom: 30px;
          }
          .case-title::after {
            width: 40px;
            margin: 10px auto 0;
          }
          .case-grid {
            gap: 16px;
          }
          .case-card {
            border-radius: 10px;
          }
          .case-img-container {
            height: 160px;
          }
          .case-category {
            top: 10px;
            left: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
          .case-content {
            padding: 16px;
          }
          .case-content h3 {
            font-size: 14px;
          }
          .case-content p {
            font-size: 12px;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .case-section {
            padding: 30px 3%;
          }
          .case-title {
            font-size: 20px;
            margin-bottom: 25px;
            font-weight: 700;
          }
          .case-grid {
            gap: 12px;
          }
          .case-card {
            border-radius: 8px;
          }
          .case-img-container {
            height: 140px;
          }
          .case-content {
            padding: 12px;
          }
          .case-content h3 {
            font-size: 13px;
            margin-bottom: 6px;
          }
          .case-content p {
            font-size: 11px;
            margin-bottom: 10px;
            line-height: 1.4;
          }
          .case-link {
            font-size: 11px;
          }
        }

        @media (max-width: 360px) {
          .case-section {
            padding: 25px 3%;
          }
          .case-title {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .case-grid {
            gap: 10px;
          }
          .case-card {
            border-radius: 6px;
          }
          .case-img-container {
            height: 120px;
          }
          .case-content {
            padding: 10px;
          }
          .case-content h3 {
            font-size: 12px;
            margin-bottom: 4px;
          }
          .case-content p {
            font-size: 10px;
            margin-bottom: 8px;
            line-height: 1.3;
          }
          .case-link {
            font-size: 10px;
          }
        }
      `}</style>

      <h2 className="case-title">Case Studies</h2>

      <div className="case-grid">
        {[
          {
            title: "Digital Transformation",
            category: "Technology",
            desc: "Enterprise modernization using cloud-native platforms and scalable digital ecosystems.",
            link: "/case-study/digital-transformation"
          },
          {
            title: "Life Sciences Innovation",
            category: "Healthcare",
            desc: "Advanced analytics accelerating research, lab modernization, and clinical workflows.",
            link: "/case-study/life-sciences-innovation"
          },
          {
            title: "Financial Services Modernization",
            category: "Finance",
            desc: "High-performance platforms delivering resilience, compliance, and ROI.",
            link: "/case-study/financial-services-modernization"
          },
          {
            title: "Hedge Fund Platforms",
            category: "Investment",
            desc: "UX-driven platforms improving trading efficiency and real-time insights.",
            link: "/case-study/hedge-fund-platforms"
          },
          {
            title: "GenAI Enablement",
            category: "AI / ML",
            desc: "AI-powered automation delivering smarter workflows and cost optimization.",
            link: "/case-study/genai-enablement"
          },
          {
            title: "Smarter Business Solutions",
            category: "Consulting",
            desc: "Strategic consulting combined with execution for sustainable growth.",
            link: "/case-study/smarter-business-solutions"
          }
        ].map((item) => (
          <div className="case-card" key={item.title}>
            <div className="case-img-container">
              {getIconForCase(item)}
              <span className="case-category">{item.category}</span>
            </div>
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="case-link" href={item.link}>Read Case Study</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}