import { useState, useEffect, useRef } from 'react';

export default function DataEngineering() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);

  const styles = {
    hero: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 10%",
      color: "#fff",
      background: `
        radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(5, 150, 105, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #166534 0%, #15803d 50%, #047857 100%)
      `,
      position: "relative",
      overflow: "hidden"
    },
    heroContent: {
      textAlign: "center",
      maxWidth: "900px",
      zIndex: 2,
      position: "relative"
    },
    heroTag: {
      fontSize: "15px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      background: "linear-gradient(45deg, #fff, #f0f8ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: "glow 2s ease-in-out infinite alternate",
      padding: "12px 28px",
      borderRadius: "50px",
      border: "1px solid rgba(34, 197, 94, 0.3)",
      display: "inline-block",
      marginBottom: "24px"
    },
    heroTitle: {
      fontSize: "clamp(44px, 8vw, 72px)",
      fontWeight: 900,
      lineHeight: 1.1,
      marginTop: "20px",
      maxWidth: "900px",
      background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textShadow: "0 0 40px rgba(255,255,255,0.6)"
    },
    particles: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 1
    },
    section: {
      padding: "120px 14%",
      background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      position: "relative"
    },
    heading: {
      fontSize: "clamp(36px, 6vw, 52px)",
      background: "linear-gradient(135deg, #166534 0%, #22c55e 50%, #10b981 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "32px",
      fontWeight: 900,
      position: "relative",
      textAlign: "center"
    },
    headingAfter: {
      content: '""',
      position: "absolute",
      bottom: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "5px",
      background: "linear-gradient(90deg, #22c55e, #10b981)",
      borderRadius: "3px"
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#065f46",
      maxWidth: "900px",
      margin: "0 auto 24px",
      fontWeight: 400,
      textAlign: "center"
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      marginTop: "60px",
      alignItems: "start"
    },
    bullet: {
      marginBottom: "20px",
      fontSize: "17px",
      lineHeight: 1.7,
      display: "flex",
      alignItems: "center",
      color: "#1f2937",
      padding: "16px 20px",
      background: "rgba(34, 197, 94, 0.1)",
      borderRadius: "12px",
      border: "1px solid rgba(34, 197, 94, 0.2)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease"
    },
    bulletIcon: {
      width: "28px",
      height: "28px",
      marginRight: "16px",
      flexShrink: 0
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: "36px",
      padding: "140px 10%",
      position: "relative",
      background: "linear-gradient(135deg, rgba(240, 253, 244, 0.8) 0%, rgba(220, 252, 231, 0.6) 100%)"
    },
    card: {
      color: "#fff",
      padding: "48px 36px",
      borderRadius: "28px",
      minHeight: "280px",
      boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
      backdropFilter: "blur(25px)",
      border: "1px solid rgba(255,255,255,0.3)",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative",
      overflow: "hidden",
      transform: "translateY(0) scale(1)",
      cursor: "pointer"
    },
    cardGradient: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0
    },
    cta: {
      background: `
        linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%),
        radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.4) 0%, transparent 60%),
        radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 60%),
        url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80)
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "160px 10%",
      color: "#fff",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "70px",
      alignItems: "center",
      position: "relative",
      overflow: "hidden"
    },
    button: {
      background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      color: "#fff",
      border: "none",
      padding: "20px 40px",
      fontSize: "17px",
      fontWeight: 700,
      cursor: "pointer",
      borderRadius: "50px",
      boxShadow: "0 15px 40px rgba(34, 197, 94, 0.4)",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative",
      overflow: "hidden",
      backdropFilter: "blur(15px)",
      letterSpacing: "0.5px"
    },
    gradientMesh: {
      position: "absolute",
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      filter: "blur(120px)",
      opacity: 0.7,
      animation: "float 7s ease-in-out infinite"
    }
  };

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const AnimatedBlob = ({ color, top, left, delay }) => (
    <div
      style={{
        ...styles.gradientMesh,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        top,
        left,
        animationDelay: `${delay}s`
      }}
    />
  );

  const FloatingParticle = ({ size, color, x, y, delay }) => (
    <svg
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        opacity: 0.7
      }}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="42" fill={color}>
        <animate
          attributeName="r"
          values="42;48;42"
          dur="3.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="3.5s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );

  return (
    <>
      <style jsx>{`
        @keyframes glow {
          0% { 
            text-shadow: 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(34,197,94,0.3); 
          }
          100% { 
            text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(34,197,94,0.5); 
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translate(30px, -25px) rotate(120deg); }
          66% { transform: translate(-15px, 15px) rotate(240deg); }
        }
        @keyframes shimmer {
          0% { background-position: -300% 0; }
          100% { background-position: 300% 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.3); }
          50% { box-shadow: 0 0 50px rgba(34,197,94,0.7); }
        }
        .card-hover {
          transform: translateY(-20px) scale(1.03) !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.25) !important;
        }
        .gradient-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 300% 100%;
          animation: shimmer 2.5s infinite;
        }
        button:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 20px 50px rgba(34,197,94,0.6);
        }
          @keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0px); }
}

.flip-card:hover {
  transform: rotateY(10deg) translateY(-10px);
}

@keyframes floatGlow {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes rotateRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


@keyframes floatData {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

@keyframes pulseData {
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
}


        button:active {
          transform: translateY(-3px) scale(1.02);
        }
        .bullet-hover {
          transform: translateX(8px);
          background: rgba(34, 197, 94, 0.2);
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 0 8px 25px rgba(34,197,94,0.2);
        }
        @media (max-width: 768px) {
          .split { grid-template-columns: 1fr; gap: 50px; }
        }
      `}</style>

      {/* HERO */}
      
<section
  style={{
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(rgba(10,15,30,0.85), rgba(10,15,30,0.9)), url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Inter, sans-serif",
  }}
>
  {/* Glow Background Circles */}
  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "#3b82f6",
      filter: "blur(120px)",
      opacity: 0.3,
      top: "15%",
      left: "10%",
      animation: "float 10s ease-in-out infinite",
    }}
  />
  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "#1d4ed8",
      filter: "blur(130px)",
      opacity: 0.3,
      bottom: "10%",
      right: "10%",
      animation: "float 12s ease-in-out infinite",
    }}
  />

  {/* Glass Card Layout */}
  <div
    style={{
      position: "relative",
      maxWidth: "1100px",
      width: "100%",
      padding: "60px",
      borderRadius: "30px",
      backdropFilter: "blur(25px)",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      color: "#fff",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT ILLUSTRATION */}
<div
  style={{
    flex: "1",
    textAlign: "center",
    position: "relative",
  }}
>
  <div
    style={{
      width: "200px",
      height: "200px",
      margin: "0 auto",
      position: "relative",
      animation: "floatCloud 6s ease-in-out infinite",
    }}
  >
    {/* Glow Background Pulse */}
    <div
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(96,165,250,0.4) 0%, rgba(59,130,246,0.1) 60%, transparent 70%)",
        animation: "pulseGlow 4s ease-in-out infinite",
      }}
    />

    {/* Cloud Icon */}
    <svg
      viewBox="0 0 64 64"
      fill="#60a5fa"
      style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        height: "100%",
        filter: "drop-shadow(0 0 20px rgba(96,165,250,0.6))",
      }}
    >
      <path d="M20 40h24a10 10 0 000-20 14 14 0 00-27-2A8 8 0 0020 40z" />
      <rect x="18" y="42" width="28" height="4" rx="2" />
      <rect x="22" y="48" width="20" height="4" rx="2" />
    </svg>

    {/* Small Orbiting Dot */}
    <div
      style={{
        position: "absolute",
        width: "12px",
        height: "12px",
        background: "#93c5fd",
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        transformOrigin: "-80px center",
        animation: "orbit 8s linear infinite",
      }}
    />
  </div>
</div>


    {/* RIGHT CONTENT */}
    <div style={{ flex: "2", textAlign: "left" }}>
      <div
        style={{
          display: "inline-block",
          padding: "8px 20px",
          borderRadius: "50px",
          background: "rgba(59,130,246,0.2)",
          color: "#60a5fa",
          fontSize: "14px",
          letterSpacing: "2px",
          fontWeight: "600",
          marginBottom: "25px",
        }}
      >
        DATA ENGINEERING
      </div>

      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
          lineHeight: "1.2",
          margin: 0,
        }}
      >
        Engineering data platforms that power intelligent decision-making
      </h1>
    </div>
  </div>
</section>

     {/* INTRO ENHANCED */}
<section
  style={{
    padding: "100px 20px",
    background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)",
    fontFamily: "Inter, sans-serif",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "42px",
        textAlign: "center",
        fontWeight: "800",
        marginBottom: "30px",
        background: "linear-gradient(135deg,#0f172a,#0284c7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Scalable, secure, and analytics-ready data ecosystems
    </h2>

    <p
      style={{
        maxWidth: "900px",
        margin: "0 auto 20px",
        textAlign: "center",
        fontSize: "18px",
        color: "#334155",
        lineHeight: "1.8",
      }}
    >
      Our Data Engineering services help organizations unlock the true value
      of data by designing, building, and managing scalable data platforms
      that support analytics, AI, and real-time insights.
    </p>

    <p
      style={{
        maxWidth: "900px",
        margin: "0 auto 70px",
        textAlign: "center",
        fontSize: "18px",
        color: "#334155",
        lineHeight: "1.8",
      }}
    >
      We enable seamless data ingestion, transformation, governance, and
      consumption—ensuring data is reliable, accessible, and business-ready.
    </p>

    {/* SPLIT SECTION */}
    <div
      style={{
        display: "flex",
        gap: "80px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT - OVERVIEW + ILLUSTRATION */}
      <div style={{ flex: "1" }}>
        <h3
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            fontWeight: "700",
            color: "#0f172a",
          }}
        >
          Overview
        </h3>

        <p
          style={{
            fontSize: "17px",
            color: "#334155",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          By combining modern data architectures, cloud-native technologies,
          and automation, we help enterprises build resilient and future-ready
          data foundations.
        </p>

        {/* NEW ILLUSTRATION - DATA FLOW STYLE */}
        <div
          style={{
            width: "260px",
            height: "260px",
            position: "relative",
            marginTop: "20px",
            animation: "floatData 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(14, 222, 233, 0.25), transparent 70%)",
              animation: "pulseData 1s ease-in-out infinite",
            }}
          />

          <svg
  viewBox="0 0 200 200"
  style={{
    width: "260px",
    height: "260px",
    position: "relative",
    zIndex: 2,
  }}
>
  <defs>
    {/* Gradient */}
    <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#06b6d4" />
      <stop offset="100%" stopColor="#3b82f6" />
    </linearGradient>

    {/* Glow Filter */}
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {/* Rotating Outer Ring */}
  <circle
    cx="100"
    cy="100"
    r="85"
    stroke="url(#networkGradient)"
    strokeWidth="2"
    fill="none"
    strokeDasharray="10 10"
    style={{
      transformOrigin: "100px 100px",
      animation: "rotateRing 20s linear infinite",
    }}
  />

  {/* Connection Lines */}
  <line
    x1="100"
    y1="60"
    x2="50"
    y2="140"
    stroke="url(#networkGradient)"
    strokeWidth="3"
    strokeDasharray="6 6"
    style={{ animation: "flowLine 4s linear infinite" }}
  />
  <line
    x1="100"
    y1="60"
    x2="150"
    y2="140"
    stroke="url(#networkGradient)"
    strokeWidth="3"
    strokeDasharray="6 6"
    style={{ animation: "flowLine 4s linear infinite" }}
  />

  {/* Nodes */}
  <circle
    cx="100"
    cy="60"
    r="10"
    fill="#0ea5e9"
    filter="url(#glow)"
    style={{ animation: "pulseNode 3s ease-in-out infinite" }}
  />
  <circle
    cx="50"
    cy="140"
    r="10"
    fill="#38bdf8"
    filter="url(#glow)"
    style={{ animation: "pulseNode 3s ease-in-out infinite 0.5s" }}
  />
  <circle
    cx="150"
    cy="140"
    r="10"
    fill="#60a5fa"
    filter="url(#glow)"
    style={{ animation: "pulseNode 3s ease-in-out infinite 1s" }}
  />
</svg>

        </div>
      </div>

      {/* RIGHT - KEY CAPABILITIES */}
      <div style={{ flex: "1" }}>
        <h3
          style={{
            fontSize: "30px",
            marginBottom: "30px",
            fontWeight: "700",
            color: "#0f172a",
          }}
        >
          Key capabilities
        </h3>

        {[
          "Modern data warehousing & data lakes",
          "Batch & real-time data processing",
          "Data pipelines & orchestration",
          "Metadata management & governance",
          "Data quality & validation frameworks",
          "Security, privacy & compliance",
          "AI & analytics enablement",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "white",
              padding: "18px 24px",
              borderRadius: "16px",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              boxShadow: "0 10px 25px rgba(2,132,199,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                background: "#0ea5e9",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" width="14" fill="white">
                <path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z" />
              </svg>
            </div>
            <span style={{ color: "#334155", fontSize: "16px" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
 
{/* DATA ENGINEERING SERVICES - IMAGE BACKGROUND */}
<section
  style={{
    padding: "120px 20px",
    position: "relative",
    backgroundImage:
      "linear-gradient(rgba(75, 173, 168, 0.85), rgba(10,15,30,0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "40px",
      perspective: "1000px",
    }}
  >
    {[
      {
        title: "Data Architecture & Strategy",
        desc: "Designing modern data architectures aligned with business objectives.",
        icon: "M3 13h8V3H3v10zm10 8h8V3h-8v18z",
        color: "#22d3ee",
      },
      {
        title: "Data Ingestion & Pipelines",
        desc: "Building robust ETL/ELT pipelines for structured and unstructured data.",
        icon: "M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z",
        color: "#38bdf8",
      },
      {
        title: "Data Lakes & Warehouses",
        desc: "Scalable data platforms optimized for analytics and reporting.",
        icon: "M4 6h16v12H4z",
        color: "#60a5fa",
      },
      {
        title: "Real-time & Streaming Analytics",
        desc: "Processing high-velocity data for real-time insights and actions.",
        icon: "M3 17h18M6 10l3 3 6-6 3 3",
        color: "#34d399",
      },
      {
        title: "Data Governance & Quality",
        desc: "Ensuring data accuracy, consistency, security, and compliance.",
        icon: "M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z",
        color: "#fbbf24",
      },
      {
        title: "Advanced Analytics Enablement",
        desc: "Preparing data foundations for AI, ML, and advanced analytics use cases.",
        icon: "M12 8v8M8 12h8",
        color: "#a78bfa",
      },
    ].map((card) => (
      <div
        key={card.title}
        style={{
          position: "relative",
          height: "280px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
        }}
        className="flip-card"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            padding: "40px",
            color: "white",
            overflow: "hidden",
          }}
        >
          {/* Floating Glow */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: card.color,
              opacity: 0.15,
              filter: "blur(80px)",
              top: "-50px",
              right: "-50px",
              animation: "floatGlow 6s ease-in-out infinite",
            }}
          />

          {/* Icon */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: card.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              boxShadow: `0 10px 30px ${card.color}55`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d={card.icon} />
            </svg>
          </div>

          <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>
            {card.title}
          </h3>

          <p style={{ opacity: 0.85, lineHeight: "1.6" }}>
            {card.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      
      {/* CTA */}
      <section className="cta-main">
  <style>{`
    .cta-main {
      position: relative;
      padding: 80px 20px; /* reduced height */
      background:
        linear-gradient(
          rgba(6, 28, 58, 0.8),
          rgba(6, 28, 58, 0.8)
        ),
        url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: #ffffff;
    }

    .cta-header {
      max-width: 900px;
      margin: 0 auto 50px;
      text-align: center;
    }

    .cta-header h2 {
      font-size: 42px;
      font-weight: 800;
      margin-bottom: 14px;
    }

    .cta-header p {
      font-size: 17px;
      line-height: 1.6;
      opacity: 0.9;
    }

    .cta-box-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 1px solid rgba(255,255,255,0.35);
      background: rgba(255,255,255,0.02);
    }

    .cta-box {
      min-height: 220px;
      padding: 36px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid rgba(255,255,255,0.35);
      backdrop-filter: blur(6px);
    }

    .cta-box:last-child {
      border-right: none;
    }

    .cta-left-text {
      font-size: 24px;
      line-height: 1.5;
      text-align: left;
    }

    .cta-left-text strong {
      display: block;
      font-weight: 800;
      font-size: 26px;
    }

    .cta-mid {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .cta-white-btn {
      background: #ffffff;
      color: #0b3a6f;
      padding: 14px 20px;
      font-size: 15px;
      font-weight: 700;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .cta-white-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    }

    .cta-orange-btn {
      background: #ff9800;
      color: #fff;
      padding: 15px 32px;
      font-size: 15px;
      font-weight: 800;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cta-orange-btn:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(0,0,0,0.35);
    }

    @media (max-width: 900px) {
      .cta-main {
        padding: 60px 16px;
      }

      .cta-header h2 {
        font-size: 32px;
      }

      .cta-box-wrapper {
        grid-template-columns: 1fr;
      }

      .cta-box {
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.35);
        text-align: center;
      }

      .cta-left-text {
        text-align: center;
      }
    }
  `}</style>

  <div className="cta-header">
    <h2>Ready to Transform Your Applications?</h2>
    <p>
      Partner with us to build scalable, resilient, and future-ready applications
      that drive business growth and digital transformation.
    </p>
  </div>

  <div className="cta-box-wrapper">
    <div className="cta-box">
      <div className="cta-left-text">
        Talk to our
        <strong>Application Engineering</strong>
        experts today.
      </div>
    </div>

    <div className="cta-box">
      <div className="cta-mid">
        <button className="cta-white-btn">Professional services</button>
        <button className="cta-white-btn">Managed services</button>
        <button className="cta-white-btn">Build your own</button>
      </div>
    </div>

    <div className="cta-box">
      <button className="cta-orange-btn">CONNECT NOW</button>
    </div>
  </div>
</section>



    </>
  );
}
