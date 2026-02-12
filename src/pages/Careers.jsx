import { useState } from "react";

export default function Careers() {
  const [openJob, setOpenJob] = useState(0);

  const jobs = [
    {
      title: "Senior Java Developer",
      shift: "1pm – 11pm (UK Shift)",
      overview: "We are seeking a skilled Software Engineer specializing in Data Ingestion to join our professional Data Architecture/Engineering team. The role involves working on data architecture, data ingestion, processing, internal distribution, and analytical tools. Projects include intraday and end-of-day data processing, validation, monitoring, and transitioning from legacy systems to modern technologies.",
      responsibilities: [
        "Implement and unit-test data engineering subsystems",
        "Collaborate with fellow developers and analysts on larger projects",
        "Support, diagnose, and resolve issues with existing data ingestion and data delivery systems",
        "Learn new tools and programming languages as needed",
        "Contribute to Tier II production support on a rotational basis, potentially including weekends and holidays"
      ],
      requirements: [
        "Minimum of 8+ years' experience as a Java and Python developer, with Java expertise required",
        "Previous development experience with Spring Boot, microservices, and strong SQL skills",
        "Proficiency in programming, profiling, and debugging",
        "Previous experience in financial companies",
        "Bachelor or Master's degree in Computer Science or similar",
        "Experience with ETL concepts or tools is a plus",
        "Familiarity with Object Oriented Analysis and Design",
        "Experience with relational and/or NoSQL databases",
        "Familiarity with AWS, Spark, etc., is advantageous"
      ]
    },
    {
      title: "Senior Production Support Engineer",
      shift: "Rotational",
      overview: "We are looking for an experienced Production Support Engineer to ensure the stability and reliability of our critical systems. This role requires strong technical expertise and the ability to work under pressure in a fast-paced environment.",
      responsibilities: [
        "Provide L2/L3 production support for enterprise applications",
        "Monitor system performance and proactively identify potential issues",
        "Perform incident management, troubleshooting, and root cause analysis",
        "Coordinate with development teams to resolve production issues",
        "Maintain documentation of incidents, resolutions, and system configurations",
        "Participate in on-call rotation including weekends and holidays"
      ],
      requirements: [
        "Minimum of 6+ years in production support or similar roles",
        "Strong knowledge of Java, SQL, Linux/Unix systems, and monitoring tools",
        "Excellent troubleshooting and analytical skills",
        "Experience in financial services or enterprise environments preferred",
        "Bachelor's degree in Computer Science or related field",
        "Experience with incident management tools (ServiceNow, JIRA)",
        "Knowledge of CI/CD pipelines and DevOps practices",
        "Strong communication skills for stakeholder management"
      ]
    },
    {
      title: "Java Developer",
      shift: "Day Shift",
      overview: "We are seeking a talented Java Developer to design and develop scalable backend services for our enterprise applications. This role offers opportunities to work with modern technologies and contribute to innovative projects.",
      responsibilities: [
        "Design, develop, and maintain Java-based applications",
        "Write clean, efficient, and well-documented code",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and contribute to best practices",
        "Debug and resolve application issues",
        "Work with databases and optimize queries for performance"
      ],
      requirements: [
        "Minimum of 4+ years of Java development experience",
        "Strong proficiency in Java, Spring Framework, Spring Boot, and RESTful APIs",
        "Experience with SQL and database design",
        "Understanding of microservices architecture",
        "Bachelor's degree in Computer Science or equivalent",
        "Familiarity with version control systems (Git)",
        "Knowledge of Agile methodologies",
        "Experience with cloud platforms (AWS, Azure) is a plus",
        "Strong problem-solving abilities and attention to detail"
      ]
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          height: "70vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            height: "100%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <h1 style={{ fontSize: "48px" }}>Be Your Best</h1>
          <p style={{ fontSize: "20px" }}>
            Are you ready for the ride of your life?
          </p>
        </div>
      </section>

      {/* INTRO */}
            {/* ========== GO FARTHER. GROW FURTHER – YASH COLOR EDITION ========== */}
      <section className="purpose-section">
        <style>{`
          .purpose-section {
            background: linear-gradient(145deg, #0a2540, #1e3a5f);
            text-align: center;
            padding: 80px 24px;
            position: relative;
            overflow: hidden;
            isolation: isolate;
          }

          .purpose-container {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .purpose-title {
            font-size: 42px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 24px;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            letter-spacing: -0.02em;
            position: relative;
            display: inline-block;
          }

          .purpose-title::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #fbbf24, #f59e0b);
            border-radius: 3px;
            animation: glowPulse 2.5s infinite ease-in-out;
          }

          @keyframes glowPulse {
            0%, 100% { opacity: 0.8; box-shadow: 0 0 8px rgba(251,191,36,0.4); }
            50% { opacity: 1; box-shadow: 0 0 16px rgba(251,191,36,0.8); }
          }

          .purpose-text {
            font-size: 18px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            margin: 32px 0 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .purpose-text strong {
            color: #fcd34d;
            font-weight: 600;
          }

          /* subtle decorative elements */
          .purpose-section::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 1;
          }

          .purpose-section::after {
            content: '';
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 1;
          }

          @media (max-width: 600px) {
            .purpose-title {
              font-size: 32px;
            }
            .purpose-text {
              font-size: 16px;
            }
          }
        `}</style>

        <div className="purpose-container">
          <h2 className="purpose-title">Go farther. Grow further</h2>
          <p className="purpose-text">
            At Sagarsoft, we are driven by purpose and passion. Our team consists of talented and dedicated individuals who believe in fostering sustainable value through strong relationships. We treat our employees like family and ensure that they feel appreciated at every step of their journey. If you think you have what it takes to be a part of our team, we would love to connect with you and offer you a glimpse into life at Sagarsoft. Let’s connect and see where this journey takes us!
          </p>
        </div>
      </section>

      {/* ========== LIFE AT SAGARSOFT – ICON‑DRIVEN TIMELINE ========== */}
<section className="life-section-compact">
  <style>{`
    .life-section-compact {
      padding: 60px 20px;
      background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
      position: relative;
      overflow: hidden;
    }

    .life-title {
      text-align: center;
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 48px;
      color: #0f172a;
      position: relative;
    }

    .life-title::after {
      content: "";
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #2563eb, #8b5cf6);
      display: block;
      margin: 12px auto 0;
      border-radius: 4px;
    }

    /* CENTER VERTICAL LINE – shorter, starts closer to title */
    .life-line {
      position: absolute;
      top: 140px;
      bottom: 60px;
      left: 50%;
      width: 2px;
      background: repeating-linear-gradient(
        to bottom,
        #94a3b8,
        #94a3b8 6px,
        transparent 6px,
        transparent 14px
      );
      transform: translateX(-50%);
      z-index: 0;
      opacity: 0.6;
    }

    .life-row {
      position: relative;
      display: flex;
      gap: 32px;
      align-items: center;
      max-width: 1000px;
      margin: 48px auto;
    }

    /* NODE on the timeline – smaller, refined */
    .life-node {
      position: absolute;
      left: 50%;
      width: 16px;
      height: 16px;
      background: linear-gradient(135deg, #2563eb, #8b5cf6);
      border-radius: 50%;
      transform: translateX(-50%);
      z-index: 2;
      box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
      transition: box-shadow 0.3s ease;
    }

    .life-row:hover .life-node {
      box-shadow: 0 0 0 8px rgba(99,102,241,0.2);
    }

    /* CONNECTOR LINE – shorter, subtle */
    .life-connector {
      position: absolute;
      top: 50%;
      width: 48px;
      height: 1.5px;
      background: #94a3b8;
      z-index: 1;
      opacity: 0.5;
    }

    .left .life-connector {
      right: 50%;
    }

    .right .life-connector {
      left: 50%;
    }

    /* ICON CONTAINER – lower height, refined */
    .life-icon-container {
      position: relative;
      width: 50%;
      height: 220px;
      border-radius: 20px;
      background: white;
      box-shadow: 0 12px 28px rgba(0,0,0,0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid rgba(37,99,235,0.06);
      transition: all 0.3s ease;
    }

    .life-icon-container svg {
      width: 60%;
      height: 60%;
      transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1);
      filter: drop-shadow(0 6px 12px rgba(0,0,0,0.03));
    }

    .life-icon-container:hover svg {
      transform: scale(1.08);
    }

    .life-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 50%, rgba(37,99,235,0.05), transparent 80%);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    .life-icon-container:hover .life-overlay {
      opacity: 1;
    }

    .life-text {
      width: 50%;
    }

    .life-text h4 {
      font-size: 22px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 10px;
    }

    .life-text p {
      font-size: 15px;
      line-height: 1.6;
      color: #475569;
      margin: 0;
    }

    /* REDESIGNED ICON ANIMATIONS – subtle, elegant */
    @keyframes gentle-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }

    @keyframes gentle-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes gentle-pulse {
      0%, 100% { opacity: 0.9; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    @keyframes gentle-dash {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 40; }
    }

    .icon-float {
      animation: gentle-float 4s infinite ease-in-out;
    }

    .icon-spin {
      animation: gentle-spin 20s infinite linear;
    }

    .icon-pulse {
      animation: gentle-pulse 3s infinite ease-in-out;
    }

    .icon-dash {
      stroke-dasharray: 8 8;
      animation: gentle-dash 2s infinite linear;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .life-line {
        left: 20px;
        top: 120px;
        bottom: 40px;
      }

      .life-row {
        flex-direction: column !important;
        align-items: flex-start;
        margin-left: 40px;
        gap: 16px;
      }

      .life-icon-container,
      .life-text {
        width: 100%;
      }

      .life-icon-container {
        height: 200px;
      }

      .life-node {
        left: 20px;
      }

      .life-connector {
        display: none;
      }
    }
  `}</style>

  <h2 className="life-title">Life at Sagarsoft</h2>
  <div className="life-line"></div>

  {/* ===== TIMELINE ITEMS – ALL NEW ICONS, COMPACT LAYOUT ===== */}
  {[
    {
      title: "Work Hard, Play Hard",
      desc: "We believe productivity thrives when passion meets enjoyment. From collaborative sprints to team celebrations, we balance performance with positivity.",
      icon: (
        <svg viewBox="0 0 100 100" className="icon-float">
          <defs>
            <linearGradient id="workGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
          <rect x="30" y="40" width="40" height="30" rx="8" fill="url(#workGrad2)" opacity="0.9" />
          <circle cx="40" cy="75" r="5" fill="url(#workGrad2)" />
          <circle cx="60" cy="75" r="5" fill="url(#workGrad2)" />
          <path d="M70 35 L80 45 L90 30" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" className="icon-dash" />
        </svg>
      )
    },
    {
      title: "Embrace Continuous Learning",
      desc: "Innovation begins with curiosity. We empower employees with learning programs, certifications, and exposure to emerging technologies.",
      icon: (
        <svg viewBox="0 0 100 100" className="icon-spin">
          <defs>
            <linearGradient id="learnGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="none" stroke="url(#learnGrad2)" strokeWidth="6" strokeDasharray="4 6" />
          <path d="M50 20 L50 50 L70 60" stroke="url(#learnGrad2)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="50" r="6" fill="url(#learnGrad2)" />
        </svg>
      )
    },
    {
      title: "Mentoring Matters",
      desc: "Leadership is nurtured here. Our mentoring culture builds confidence, technical mastery, and long-term career growth.",
      icon: (
        <svg viewBox="0 0 100 100" className="icon-pulse">
          <defs>
            <linearGradient id="mentorGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <circle cx="35" cy="45" r="14" fill="url(#mentorGrad2)" />
          <circle cx="65" cy="45" r="14" fill="url(#mentorGrad2)" />
          <line x1="35" y1="45" x2="65" y2="45" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="75" r="8" fill="url(#mentorGrad2)" opacity="0.8" />
        </svg>
      )
    },
    {
      title: "Celebrate Culture & Diversity",
      desc: "We honor global perspectives and celebrate cultural events that strengthen inclusion, belonging, and collaboration.",
      icon: (
        <svg viewBox="0 0 100 100" className="icon-float">
          <defs>
            <linearGradient id="cultureGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="45" r="10" fill="url(#cultureGrad2)" />
          <circle cx="70" cy="45" r="10" fill="url(#cultureGrad2)" />
          <circle cx="50" cy="65" r="10" fill="url(#cultureGrad2)" />
          <circle cx="20" cy="75" r="8" fill="url(#cultureGrad2)" opacity="0.7" />
          <circle cx="80" cy="75" r="8" fill="url(#cultureGrad2)" opacity="0.7" />
        </svg>
      )
    },
    {
      title: "Work-Life Harmony",
      desc: "Flexibility, wellness programs, and supportive leadership ensure employees thrive professionally and personally.",
      icon: (
        <svg viewBox="0 0 100 100" className="icon-pulse">
          <defs>
            <linearGradient id="harmonyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
          <rect x="22" y="55" width="16" height="30" rx="4" fill="url(#harmonyGrad2)" />
          <rect x="62" y="55" width="16" height="30" rx="4" fill="url(#harmonyGrad2)" />
          <line x1="22" y1="55" x2="78" y2="55" stroke="url(#harmonyGrad2)" strokeWidth="5" strokeLinecap="round" />
          <circle cx="50" cy="35" r="8" fill="url(#harmonyGrad2)" />
        </svg>
      )
    }
  ].map((item, i) => (
    <div
      key={i}
      className={`life-row ${i % 2 === 0 ? "left" : "right"}`}
      style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
    >
      <div className="life-node"></div>
      <div className="life-connector"></div>

      <div className="life-icon-container">
        {item.icon}
        <div className="life-overlay"></div>
      </div>

      <div className="life-text">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  ))}
</section>

            {/* ========== CAREERS – ENHANCED (as per screenshot) ========== */}
      <section className="careers-section-enhanced">
        <style>{`
          .careers-section-enhanced {
            padding: 80px 24px;
            background: linear-gradient(145deg, #fbfdff, #f5f9ff);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          .careers-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .careers-header {
            text-align: center;
            margin-bottom: 60px;
          }

          .careers-header h2 {
            font-size: 42px;
            font-weight: 700;
            color: #0a2540;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
            position: relative;
            display: inline-block;
          }

          .careers-header h2::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #2563eb, #7c3aed);
            border-radius: 3px;
          }

          .careers-header p {
            font-size: 18px;
            line-height: 1.7;
            color: #3a4a5e;
            max-width: 900px;
            margin: 0 auto;
            font-weight: 400;
          }

          .careers-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-top: 40px;
          }

          .career-card {
            background: white;
            border-radius: 20px;
            padding: 40px 28px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.03);
            transition: all 0.3s ease;
            border: 1px solid rgba(37,99,235,0.08);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .career-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 40px rgba(37,99,235,0.12);
            border-color: rgba(37,99,235,0.25);
          }

          .card-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .career-card h3 {
            font-size: 22px;
            font-weight: 700;
            color: #0a2540;
            margin-bottom: 16px;
          }

          .career-card p {
            font-size: 16px;
            line-height: 1.7;
            color: #4a5c6e;
            margin: 0;
          }

          @media (max-width: 900px) {
            .careers-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 600px) {
            .careers-grid {
              grid-template-columns: 1fr;
            }
            .careers-header h2 {
              font-size: 36px;
            }
          }
        `}</style>

        <div className="careers-container">
          {/* HEADER – exact text from screenshot */}
          <div className="careers-header">
            <h2>Careers</h2>
            <p>
              Hey there! We are always looking for talented Technology professionals to join our team and work on exciting assignments for global enterprises. If you’re dedicated to mastering your craft, working collaboratively, and delivering results, we want you on our team!
            </p>
          </div>

          {/* THREE CARDS – exact titles & descriptions from screenshot */}
          <div className="careers-grid">
            {/* 1. Lateral hirings */}
            <div className="career-card">
              <div className="card-icon">
                <svg width="64" height="64" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lateralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <polygon points="50,20 75,40 75,70 50,90 25,70 25,40" fill="url(#lateralGrad)" opacity="0.9">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="3s" repeatCount="indefinite" />
                  </polygon>
                  <circle cx="50" cy="55" r="8" fill="white" />
                </svg>
              </div>
              <h3>Lateral hirings</h3>
              <p>
                ‘Growth’ and ‘Work-Life Balance’. Here, you can have your cake and eat it too.
              </p>
            </div>

            {/* 2. Interns & freshers */}
            <div className="career-card">
              <div className="card-icon">
                <svg width="64" height="64" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="internGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="40" r="20" fill="url(#internGrad)">
                    <animate attributeName="r" values="18;22;18" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <rect x="40" y="60" width="20" height="25" fill="url(#internGrad)" />
                  <circle cx="35" cy="40" r="4" fill="white" />
                  <circle cx="65" cy="40" r="4" fill="white" />
                </svg>
              </div>
              <h3>Interns & freshers</h3>
              <p>
                Our mentoring program ensures a rock-solid foundation for your growth.
              </p>
            </div>

            {/* 3. Back to work */}
            <div className="career-card">
              <div className="card-icon">
                <svg width="64" height="64" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="backGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                  <path d="M30 50 L55 30 L55 45 L80 45 L80 55 L55 55 L55 70 Z" fill="url(#backGrad)">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" />
                  </path>
                  <circle cx="50" cy="50" r="6" fill="white" />
                </svg>
              </div>
              <h3>Back to work</h3>
              <p>
                We accommodate the diverse needs of individuals returning to work after a break.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* ========== OPPORTUNITIES + APPLY – CLASSIC EDITION ========== */}
      <section className="opportunities-section">
        <style>{`
          .opportunities-section {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 48px;
            padding: 60px 80px;
            background: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', serif;
          }

          /* ---------- LEFT COLUMN – JOB LISTINGS ---------- */
          .jobs-container {
            position: relative;
          }

          .jobs-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 32px;
            border-bottom: 2px solid #eaeef2;
            padding-bottom: 16px;
          }

          .jobs-header h2 {
            font-size: 28px;
            font-weight: 600;
            color: #1e3a5f; /* classic navy */
            letter-spacing: -0.01em;
            margin: 0;
            font-family: 'Georgia', 'Times New Roman', serif;
          }

          .job-card {
            background: #ffffff;
            border: 1px solid #e6e9f0;
            border-radius: 12px;
            margin-bottom: 16px;
            transition: all 0.25s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          }

          .job-card:hover {
            border-color: #c0c9d5;
            box-shadow: 0 8px 20px rgba(30,58,95,0.08);
          }

          .job-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            cursor: pointer;
          }

          .job-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 18px;
            font-weight: 600;
            color: #1e3a5f;
          }

          .job-icon {
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f0f4fa;
            border-radius: 8px;
            color: #1e3a5f;
          }

          .job-toggle {
            font-size: 26px;
            font-weight: 300;
            color: #7c8b9c;
            transition: color 0.2s;
          }

          .job-header:hover .job-toggle {
            color: #1e3a5f;
          }

          .job-details {
            padding: 24px 24px 24px 24px;
            border-top: 1px solid #edf0f5;
            background: #fafcff;
            border-radius: 0 0 12px 12px;
          }

          .job-details .shift-info {
            margin-bottom: 20px;
            padding: 12px 16px;
            background: #f0f4fa;
            border-radius: 8px;
            border-left: 3px solid #1e3a5f;
          }

          .job-details .section-title {
            color: #1e3a5f;
            font-weight: 700;
            font-size: 16px;
            margin: 20px 0 12px 0;
            display: block;
          }

          .job-details .description {
            margin: 12px 0;
            color: #3e4e62;
            line-height: 1.7;
            font-size: 15px;
          }

          .job-details ul {
            margin: 12px 0;
            padding-left: 20px;
            color: #3e4e62;
            line-height: 1.8;
          }

          .job-details li {
            margin-bottom: 8px;
            font-size: 15px;
          }

          .job-details strong {
            color: #1e3a5f;
            font-weight: 600;
          }

          .contact-note {
            margin-top: 32px;
            padding: 20px 24px;
            background: #f8f4e9; /* warm, classic tone */
            border-left: 4px solid #b4946a; /* gold/bronze */
            border-radius: 0 8px 8px 0;
            color: #4a4e5c;
            font-size: 15px;
          }

          .contact-note strong {
            color: #1e3a5f;
            font-family: 'Georgia', serif;
          }

          /* ---------- RIGHT COLUMN – APPLICATION FORM ---------- */
          .apply-card {
            background: #ffffff;
            border: 1px solid #e6e9f0;
            border-radius: 16px;
            padding: 36px 32px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.04);
            position: sticky;
            top: 20px;
            align-self: flex-start;
            max-height: calc(100vh - 40px);
            overflow-y: auto;
          }

          .apply-card h3 {
            font-size: 24px;
            font-weight: 600;
            color: #1e3a5f;
            margin-bottom: 28px;
            font-family: 'Georgia', 'Times New Roman', serif;
            border-bottom: 1px solid #e2e6ea;
            padding-bottom: 16px;
            letter-spacing: 0.5px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-input {
            width: 100%;
            padding: 14px 18px;
            border: 1px solid #d7dce2;
            border-radius: 10px;
            font-size: 15px;
            color: #1e2b3c;
            background: #fefefe;
            transition: all 0.2s ease;
            font-family: 'Inter', sans-serif;
          }

          .form-input:focus {
            outline: none;
            border-color: #b4946a;
            box-shadow: 0 0 0 4px rgba(180,148,106,0.1);
            background: #ffffff;
          }

          .form-input::placeholder {
            color: #9aa5b5;
            font-style: italic;
          }

          .form-file {
            padding: 12px;
            background: #fafbfc;
            border: 1px dashed #b0b8c2;
            border-radius: 10px;
            color: #4a5a6e;
          }

          .form-file::-webkit-file-upload-button {
            background: #eaeef2;
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            margin-right: 16px;
            color: #1e3a5f;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
          }

          .form-file::-webkit-file-upload-button:hover {
            background: #d0d9e2;
          }

          .submit-btn {
            background: #2e6b4c; /* deep, classic green */
            color: white;
            border: none;
            padding: 16px 24px;
            width: 100%;
            border-radius: 40px; /* pill shape – timeless */
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.25s;
            margin-top: 12px;
            box-shadow: 0 8px 18px rgba(46,107,76,0.15);
            border: 1px solid rgba(255,255,255,0.2);
          }

          .submit-btn:hover {
            background: #1f4f38;
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(46,107,76,0.25);
          }

          .submit-btn:active {
            transform: translateY(1px);
            box-shadow: 0 4px 12px rgba(46,107,76,0.2);
          }

          /* ---------- RESPONSIVE ---------- */
          @media (max-width: 1000px) {
            .opportunities-section {
              grid-template-columns: 1fr;
              padding: 40px 24px;
            }
          }
        `}</style>

        {/* LEFT COLUMN – JOBS */}
        <div className="jobs-container">
          <div className="jobs-header">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="1.5">
              <rect x="4" y="7" width="16" height="14" rx="2" strokeLinejoin="round" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
            </svg>
            <h2>Opportunities</h2>
          </div>

          {jobs.map((job, i) => (
            <div className="job-card" key={i}>
              <div className="job-header" onClick={() => setOpenJob(openJob === i ? null : i)}>
                <span className="job-title">
                  <span className="job-icon">
                    {job.icon === 'java' ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="6" y="8" width="4" height="12" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="6" />
                        <path d="M12 6 L12 12 L16 16" />
                      </svg>
                    )}
                  </span>
                  {job.title}
                </span>
                <span className="job-toggle">{openJob === i ? '−' : '+'}</span>
              </div>
              {openJob === i && (
                <div className="job-details">
                  <div className="shift-info">
                    <strong>Shift Timings:</strong> {job.shift}
                  </div>
                  
                  <div className="description">{job.overview}</div>
                  
                  <span className="section-title">Position Responsibilities:</span>
                  <ul>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  
                  <span className="section-title">Position Requirements:</span>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="contact-note">
            <strong>Please share profiles to:</strong> tag@sagarsoft.in
            <br />
            <span style={{ fontStyle: 'italic', fontSize: '14px' }}>All shortlisted candidates will receive details of the interview process on the</span>
          </div>
        </div>

        {/* RIGHT COLUMN – APPLICATION FORM */}
        <div className="apply-card">
          <h3>Apply Now</h3>
          <div className="form-group">
            <input className="form-input" type="text" placeholder="Name *" />
          </div>
          <div className="form-group">
            <input className="form-input" type="email" placeholder="Email Address *" />
          </div>
          <div className="form-group">
            <input className="form-input" type="tel" placeholder="Phone *" />
          </div>
          <div className="form-group">
            <input className="form-input" type="text" placeholder="Job Title *" />
          </div>
          <div className="form-group">
            <input className="form-input form-file" type="file" />
          </div>
          <div className="form-group">
            <textarea className="form-input" rows="4" placeholder="Message (optional)"></textarea>
          </div>
          <button className="submit-btn">Send Message</button>
        </div>
      </section>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};