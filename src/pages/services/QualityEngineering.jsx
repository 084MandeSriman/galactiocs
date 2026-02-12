import React, { useEffect } from "react";

// Modern animated orbital illustration
const OrbitalIllustration = () => (
  <svg
    width="460"
    height="380"
    viewBox="0 0 460 380"
    style={{ maxWidth: "100%", height: "auto" }}
    aria-hidden
  >
    <defs>
      <linearGradient id="qeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="50%" stopColor="#764ba2" />
        <stop offset="100%" stopColor="#f093fb" />
      </linearGradient>

      <radialGradient id="glassGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#667eea" stopOpacity="0.6" />
      </radialGradient>

      <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#764ba2" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>

      <filter id="glow">
        <feGaussianBlur stdDeviation="10" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="softBlur">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>

    <rect width="100%" height="100%" fill="url(#bgGlow)" />

    {/* star field (static pseudo-random for visual) */}
    <g opacity="0.28">
      {Array.from({ length: 18 }).map((_, i) => {
        const x = 20 + ((i * 37) % 420);
        const y = 20 + ((i * 73) % 340);
        const r = 0.8 + ((i * 13) % 6) * 0.18;
        return <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity={0.9} />;
      })}
    </g>

    {/* rotating rings */}
    <g opacity="0.2">
      <circle
        cx="230"
        cy="180"
        r="150"
        stroke="url(#qeGrad)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.22"
      />
      <circle
        cx="230"
        cy="180"
        r="94"
        stroke="#9fb8f3"
        strokeWidth="0.9"
        fill="none"
        opacity="0.18"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 230 180"
        to="360 230 180"
        dur="32s"
        repeatCount="indefinite"
      />
    </g>

    {/* counter-rotating ring */}
    <g opacity="0.14">
      <circle cx="230" cy="180" r="72" stroke="#f093fb" strokeWidth="1" fill="none" />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="360 230 180"
        to="0 230 180"
        dur="22s"
        repeatCount="indefinite"
      />
    </g>

    {/* animated arc */}
    <path
      d="M 120 180 Q 230 80 340 180"
      stroke="url(#qeGrad)"
      strokeWidth="2.6"
      fill="none"
      strokeDasharray="6 10"
      opacity="0.36"
    >
      <animate attributeName="stroke-dashoffset" from="0" to="120" dur="6s" repeatCount="indefinite" />
    </path>

    {/* glowing floating nodes */}
    <g filter="url(#glow)">
      <circle cx="300" cy="170" r="34" fill="url(#glassGrad)" opacity="0.98">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -20;0 0" dur="5.6s" repeatCount="indefinite" />
      </circle>

      <circle cx="160" cy="190" r="20" fill="#764ba2" opacity="0.98">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 14;0 0" dur="4.8s" repeatCount="indefinite" />
      </circle>

      <circle cx="230" cy="110" r="16" fill="#f093fb" opacity="0.98">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -12;0 0" dur="4.4s" repeatCount="indefinite" />
      </circle>

      <circle cx="350" cy="120" r="12" fill="#a6c1ee" opacity="0.92">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" dur="5.2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* core aura + pulsing core */}
    <circle cx="230" cy="180" r="52" fill="#764ba2" opacity="0.14" filter="url(#softBlur)">
      <animate attributeName="r" values="52;72;52" dur="3.2s" repeatCount="indefinite" />
    </circle>

    <circle cx="230" cy="180" r="12" fill="#fff" opacity="0.98">
      <animate attributeName="r" values="12;28;12" dur="2.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.98;0.45;0.98" dur="2.6s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default function QualityEngineering() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: "#222" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "72vh",
          display: "flex",
          alignItems: "center",
          padding: "48px 6%",
          color: "#fff",
          background: "linear-gradient(135deg, #071429 0%, #083556 55%, rgba(3,168,225,0.06) 100%)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", gap: 36, width: "100%", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 520px", maxWidth: 760 }}>
            <span style={{ display: "inline-block", padding: "8px 16px", background: "rgba(255,255,255,0.06)", borderRadius: 999, fontSize: 14, color: "#dbeafe" }}>
              Quality Engineering
            </span>

            <h1 style={{ fontSize: 46, lineHeight: 1.06, margin: "18px 0 12px", fontWeight: 800, color: "#f8fafc" }}>
              Deliver resilient software experiences
              <br />
              with automation, performance & observability
            </h1>

            {/* keep only heading in hero per request (no buttons/extra paragraph) */}
          </div>

          <div style={{ flex: "0 0 420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <OrbitalIllustration />
          </div>
        </div>
      </section>

      {/* INTRO (animated fade-up) */}
      <section
        style={{ position: "relative", padding: "110px 6%", overflow: "hidden", background: "linear-gradient(135deg, #f4f8ff 0%, #eef3ff 50%, #f9fbff 100%)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ width: 80, height: 4, background: "linear-gradient(90deg,#0b5fa5,#764ba2)", borderRadius: 10, marginBottom: 25 }} />

          <h2
            className="fade-up"
            style={{ color: "#0b5fa5", fontSize: 42, fontWeight: 800, marginBottom: 20, opacity: 0, transform: "translateY(40px)", transition: "all 0.8s ease" }}
          >
            Quality Engineering
          </h2>

          <h3
            className="fade-up"
            style={{ fontSize: 22, fontWeight: 600, color: "#222", maxWidth: 800, lineHeight: 1.6, opacity: 0, transform: "translateY(40px)", transition: "all 0.8s ease 0.2s" }}
          >
            Develop and maintain high-quality products with advanced, AI-driven quality engineering frameworks.
          </h3>

          <p
            className="fade-up"
            style={{ marginTop: 25, lineHeight: 1.8, color: "#555", fontSize: 17, maxWidth: 900, opacity: 0, transform: "translateY(40px)", transition: "all 0.8s ease 0.4s" }}
          >
            Our software quality engineering services ensure the highest level of user satisfaction and flawless performance for enterprise applications and digital platforms. We integrate advanced testing methodologies, automation frameworks, and robust QA governance models to continuously improve software reliability, performance, and scalability.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: "80px 6%", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#0b5fa5", marginBottom: 40, fontSize: 34, fontWeight: 800 }}>Overview</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {["25+ years delivering excellence in quality engineering", "Analytics-led testing strategy from manual to automation", "Continuous innovation in accelerators & frameworks", "Business-aligned engagement & KPI-driven outcomes"].map((item, index) => (
              <div
                key={index}
                style={{ position: "relative", padding: 30, borderRadius: 14, background: "#fff", border: "1px solid rgba(11,95,165,0.06)", transition: "all 0.32s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(11,95,165,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0px)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(11,95,165,0.06)", position: "absolute", top: 18, right: 18 }}>0{index + 1}</div>
                <p style={{ lineHeight: 1.7, color: "#444", fontSize: 16 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* EXPERTISE & SERVICES */}
<section
  style={{
    position: "relative",
    padding: "120px 6%",
    background:
      "linear-gradient(135deg, #f9fbff 0%, #f4f8ff 50%, #ffffff 100%)",
    overflow: "hidden",
  }}
>
  {/* Background Accent Glow */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      background:
        "radial-gradient(circle, rgba(23,105,170,0.08), transparent 70%)",
      top: "-150px",
      right: "-150px",
      borderRadius: "50%",
      animation: "floatSlow 18s ease-in-out infinite",
    }}
  />

  <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
    <h2
      style={{
        textAlign: "center",
        marginBottom: "60px",
        fontSize: "34px",
        fontWeight: "800",
        color: "#0b5fa5",
      }}
    >
      Expertise & Services
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
      }}
    >
      {[
        {
          title: "Our Expertise",
          content:
            "Functional, Performance, Automation, Integration, Security, Migration, Usability, Network & DevOps testing",
          color: "#1fa971",
        },
        {
          title: "What We Test",
          content:
            "Enterprise Applications, Web & Mobility, Products & Platforms, DW/BI, Cloud SaaS, ERP & CRM, APIs & Microservices, IoT & Blockchain",
          color: "#9b3c8c",
        },
        {
          title: "Domain",
          content:
            "Healthcare, Insurance, Manufacturing, Financial Services, Banking, E-Commerce and more with strong domain-driven QA coverage.",
          color: "#1769aa",
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            padding: "40px 30px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${item.color}22`,
            overflow: "hidden",
            transition: "all 0.4s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-12px)";
            e.currentTarget.style.boxShadow =
              `0 20px 40px ${item.color}33`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Icon Circle */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${item.color}, #ffffff22)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            0{index + 1}
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#222",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              lineHeight: "1.7",
              color: "#555",
              fontSize: "16px",
            }}
          >
            {item.content}
          </p>

          {/* Animated Shine Effect */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
              transition: "0.6s",
            }}
            className="card-shine"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* CTA */}
      <section className="cta-section">
        <style>{`
          .cta-section {
            padding: 100px 10%;
            background: linear-gradient(rgba(13, 27, 61, 0.92), rgba(26, 58, 82, 0.92)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80");
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
            overflow: hidden;
          }
          .cta-section::before {
            content: "";
            position: absolute;
            top: -200px;
            right: -150px;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(0,163,255,0.2), transparent 70%);
            border-radius: 50%;
            filter: blur(50px);
          }
          .cta-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px;
            border-radius: 24px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
            align-items: center;
            background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow: 0 25px 60px rgba(13,110,253,0.25);
            position: relative;
            z-index: 1;
          }
          .cta-left { border-right: 1px solid rgba(255,255,255,0.15); padding-right: 30px; }
          .cta-left h2 { font-size: 30px; color: #ffffff; margin-bottom: 15px; line-height: 1.4; }
          .cta-left p { color: rgba(255,255,255,0.7); font-size: 16px; margin: 0; }
          .cta-buttons { display: flex; flex-direction: column; gap: 14px; border-right: 1px solid rgba(255,255,255,0.15); padding-right: 30px; }
          .cta-btn { padding: 14px; border-radius: 10px; border: 2px solid #0d6efd; background: transparent; color: #ffffff; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
          .cta-btn:hover { background: #0d6efd; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(13,110,253,0.4); }
          .cta-connect { padding: 18px 45px; background: linear-gradient(135deg, #ff9800, #ff6f00); border: none; border-radius: 12px; font-size: 18px; font-weight: 700; color: #fff; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 12px 30px rgba(255,152,0,0.3); }
          .cta-connect:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(255,152,0,0.5); }
          .cta-right { text-align: center; }
          @media (max-width: 1024px) {
            .cta-container { grid-template-columns: 1fr; text-align: center; }
            .cta-left, .cta-buttons { border-right: none; padding-right: 0; }
          }
        `}</style>

        <div className="cta-container">
          <div className="cta-left">
            <h2>Talk to our Cloud experts today.</h2>
            <p>Transform your infrastructure with DAIS™ methodology.</p>
          </div>
          <div className="cta-buttons">
            <button className="cta-btn">Professional Services</button>
            <button className="cta-btn">Managed Services</button>
            <button className="cta-btn">Build Your Own</button>
          </div>
          <div className="cta-right">
            <button onClick={() => navigate('/contact')} className="cta-connect">CONNECT NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
}
