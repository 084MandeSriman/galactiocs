import React, { useEffect, useRef } from "react";

export default function UiUx() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

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

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const layers = el.querySelectorAll(".layer");

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      layers.forEach((l) => {
        const depth = parseFloat(l.getAttribute("data-depth")) || 0;
        const tx = -x * depth * 40;
        const ty = -y * depth * 40;
        const rotX = (y * depth * 8).toFixed(2);
        const rotY = (-x * depth * 8).toFixed(2);
        l.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", () => {
      layers.forEach((l) => (l.style.transform = "translate3d(0,0,0) rotateX(0) rotateY(0)"));
    });

    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: "#222" }}>

      {/* HERO */}
      <section
        ref={heroRef}
        className="service-hero uiux-hero parallax-container"
        style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 8%",
          color: "#fff",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        {/* Ambient Glow (layered) */}
        <div className="glow" style={{ position: "absolute", right: -120, top: -80, width: 520, height: 520, borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: "700px", position: "relative", zIndex: 3 }}>
          <p style={{ letterSpacing: "2px", opacity: 0.8 }}>UX / UI</p>
          <h1
            className="fade-up"
            style={{
              fontSize: "54px",
              lineHeight: 1.2,
              marginTop: "15px",
              fontWeight: 800,
              opacity: 0,
              transform: "translateY(40px)",
              transition: "all 0.8s ease",
            }}
          >
            Turn users into fans
          </h1>
          <p style={{ marginTop: 18, maxWidth: 520, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            We design clear flows, delightful interactions, and scalable systems — converting first-time visitors into loyal users.
          </p>
        </div>

        {/* SVG 3D Aesthetic Illustration */}
        <div style={{ position: "absolute", right: "4%", top: "10%", width: "48%", height: "72%", zIndex: 2, pointerEvents: "none" }}>
          <svg viewBox="0 0 800 600" className="parallax-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="lg2" x1="0" x2="1">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
              <filter id="soft" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="22" result="b" />
                <feBlend in="SourceGraphic" in2="b" mode="screen" />
              </filter>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* depth back — gradient blob */}
            <g className="layer" data-depth="0.06" filter="url(#soft)">
              <g className="anim">
                <ellipse cx="180" cy="240" rx="180" ry="110" fill="url(#lg)" opacity="0.9" />
                <ellipse cx="320" cy="180" rx="140" ry="100" fill="url(#lg2)" opacity="0.6" />
              </g>
            </g>

            {/* mid layer — UI cards with enhanced aesthetics */}
            <g className="layer" data-depth="0.12">
              <g className="anim">
                <rect x="250" y="100" rx="20" ry="20" width="350" height="240" fill="rgba(11, 18, 32, 0.85)" stroke="#6EE7B7" strokeWidth="2" opacity="0.9" />
                <rect x="275" y="130" rx="10" ry="10" width="300" height="24" fill="#6EE7B7" opacity="0.3" />
                <rect x="275" y="170" rx="8" ry="8" width="240" height="16" fill="#3B82F6" opacity="0.2" />
                <rect x="275" y="200" rx="8" ry="8" width="200" height="16" fill="#ffffff" opacity="0.15" />
                <rect x="275" y="230" rx="8" ry="8" width="260" height="16" fill="#6EE7B7" opacity="0.15" />
              </g>
            </g>

            {/* foreground — device mock with aesthetic enhancement */}
            <g className="layer" data-depth="0.2">
              <g className="anim">
                <rect x="100" y="60" rx="24" ry="24" width="260" height="420" fill="#0a0f1a" stroke="#6EE7B7" strokeWidth="2" />
                <rect x="125" y="95" rx="14" ry="14" width="210" height="360" fill="#0f1420" filter="url(#glow)" />
                <circle cx="230" cy="490" r="8" fill="#6EE7B7" opacity="0.8" />
                <g transform="translate(140,120)" fill="#6EE7B7" opacity="0.4">
                  <rect x="0" y="0" width="140" height="28" rx="8" />
                  <rect x="0" y="50" width="180" height="12" rx="6" />
                  <rect x="0" y="80" width="180" height="12" rx="6" />
                  <rect x="0" y="110" width="140" height="12" rx="6" />
                </g>
              </g>
            </g>

            {/* floating geometric elements */}
            <g className="layer" data-depth="0.08">
              <g className="anim">
                <circle cx="580" cy="80" r="6" fill="#3B82F6" opacity="0.8" />
                <circle cx="720" cy="240" r="5" fill="#6EE7B7" opacity="0.9" />
                <circle cx="540" cy="420" r="5.5" fill="#FF6B6B" opacity="0.7" />
                <rect x="620" y="180" width="12" height="12" rx="2" fill="#FFA500" opacity="0.7" />
              </g>
            </g>
          </svg>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "100px 10%", background: "#fff" }}>
        <h2 style={{ color: "#0a5aa8", fontSize: "36px", fontWeight: 800 }}>
          Creating high-quality user experiences with interactive web design
        </h2>

        <p
          style={{
            marginTop: "25px",
            maxWidth: "900px",
            lineHeight: 1.8,
            fontSize: "17px",
            color: "#555",
          }}
        >
          Think of us as “Design-garage meets Engineering-studio”; combining
          creativity with technical excellence to build intuitive, engaging,
          and scalable digital products. Our research-driven UX approach
          transforms insights into secure, performance-optimized front-end
          experiences.
        </p>
      </section>

      {/* OVERVIEW */}
      <section
        style={{
          padding: "120px 10%",
          background:
            "linear-gradient(135deg, #f7f9fc 0%, #eef3ff 100%)",
        }}
      >
        <style>{`
          @keyframes nodding {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .accent-line {
            animation: nodding 2.5s ease-in-out infinite;
          }
        `}</style>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <div
              className="accent-line"
              style={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, #189bb6, #0a5aa8)",
                margin: "0 auto 20px",
                borderRadius: "10px",
              }}
            />
            <h2
              style={{
                color: "#0a5aa8",
                fontSize: "36px",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              Why Choose Our UI/UX Design
            </h2>
            <p style={{ color: "#666", fontSize: "16px", marginTop: "10px" }}>
              Proven strategies that deliver results
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {[
              {
                title: "Deep understanding of user behavior and technical ecosystems",
                icon: "👥",
              },
              {
                title: "Proprietary UX research methodology",
                icon: "🔬",
              },
              {
                title: "Reusable UI components & scalable design systems",
                icon: "🧩",
              },
              {
                title: "Faster delivery, predictable outcomes & cost efficiency",
                icon: "⚡",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="fade-up"
                style={{
                  padding: "45px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  boxShadow: "0 8px 24px rgba(10, 90, 168, 0.08)",
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "all 0.6s ease",
                  border: "1px solid rgba(24, 155, 182, 0.1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(10, 90, 168, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(10, 90, 168, 0.08)";
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#0a5aa8", fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
                  0{index + 1}
                </h3>
                <p style={{ marginTop: "12px", lineHeight: 1.7, color: "#555", fontSize: "15px" }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
  style={{
    position: "relative",
    padding: "140px 8%",
    background:
      "linear-gradient(135deg, #f8faff 0%, #eef3ff 50%, #ffffff 100%)",
    overflow: "hidden",
  }}
>
  {/* Background Glow Accent */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      background:
        "radial-gradient(circle, rgba(24,155,182,0.08), transparent 70%)",
      top: "-150px",
      right: "-150px",
      borderRadius: "50%",
      animation: "floatSlow 18s ease-in-out infinite",
    }}
  />

  <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
    
    {/* Section Heading */}
    <div style={{ textAlign: "center", marginBottom: "70px" }}>
      <div
        style={{
          width: "80px",
          height: "4px",
          background: "linear-gradient(90deg,#dd783c,#189bb6)",
          margin: "0 auto 20px",
          borderRadius: "10px",
        }}
      />
      <h2
        style={{
          fontWeight: 800,
          fontSize: "38px",
          color: "#0a5aa8",
        }}
      >
        Expertise & Services
      </h2>
    </div>

    {/* Cards Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px",
      }}
    >
      {[
        {
          title: "UX",
          items: [
            "User research & analysis",
            "Information architecture",
            "Interaction design",
            "Responsive & mobile UX",
            "Governance & usability",
          ],
          color: "#dd783c",
        },
        {
          title: "UI",
          items: [
            "Design systems",
            "React, Angular, Vue",
            "HTML, CSS, JavaScript",
            "Legacy modernization",
          ],
          color: "#189bb6",
        },
        {
          title: "DAM",
          items: [
            "Digital asset creation",
            "Publishing workflows",
            "Lifecycle management",
          ],
          color: "#c89a00",
        },
      ].map((card, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            borderRadius: "24px",
            padding: "50px 40px",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(14px)",
            border: `1px solid ${card.color}22`,
            boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
            transition: "all 0.4s ease",
            cursor: "pointer",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-14px)";
            e.currentTarget.style.boxShadow =
              `0 30px 60px ${card.color}33`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow =
              "0 20px 50px rgba(0,0,0,0.06)";
          }}
        >
          {/* Decorative Large Number */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "25px",
              fontSize: "60px",
              fontWeight: 800,
              color: `${card.color}15`,
            }}
          >
            0{index + 1}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "26px",
              marginBottom: "25px",
              color: card.color,
              fontWeight: 700,
            }}
          >
            {card.title}
          </h3>

          {/* Custom Bullet List */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {card.items.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  color: "#444",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: card.color,
                    marginRight: "12px",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA */}
      <section
  style={{
    position: "relative",
    padding: "120px 8%",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
  }}
>
  {/* Floating Glow Background */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      background:
        "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
      top: "-150px",
      right: "-150px",
      borderRadius: "50%",
      animation: "floatSlow 18s ease-in-out infinite",
    }}
  />

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "40px",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
      backdropFilter: "blur(10px)",
      background: "rgba(255,255,255,0.05)",
      padding: "60px",
      borderRadius: "20px",
      border: "1px solid rgba(255,255,255,0.15)",
    }}
  >
    {/* LEFT CONTENT */}
    <div>
      <h2
        style={{
          fontSize: "38px",
          fontWeight: "800",
          marginBottom: "15px",
        }}
      >
        Talk to our DevOps experts today.
      </h2>
      <p
        style={{
          fontSize: "18px",
          opacity: 0.85,
          lineHeight: 1.7,
        }}
      >
        Transform your delivery pipeline with modern DevOps practices and
        automation strategies that accelerate innovation.
      </p>
    </div>

    {/* BUTTON GROUP */}
    <div>
      {["Professional Services", "Managed Services", "Build Your Own"].map(
        (text, index) => (
          <button
            key={index}
            style={{
              display: "block",
              width: "100%",
              margin: "12px 0",
              padding: "14px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#203a43";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {text}
          </button>
        )
      )}
    </div>

    {/* CONNECT BUTTON */}
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => navigate("/contact")}
        style={{
          padding: "18px 36px",
          background: "linear-gradient(135deg, #f28c00, #ffb347)",
          border: "none",
          borderRadius: "10px",
          fontWeight: 700,
          cursor: "pointer",
          fontSize: "16px",
          color: "#fff",
          boxShadow: "0 10px 30px rgba(242,140,0,0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        CONNECT NOW
      </button>
    </div>
  </div>
</section>

    </div>
  );
}

/* ---------- BUTTON STYLE ---------- */
const ctaBtn = {
  margin: "10px",
  padding: "14px 28px",
  borderRadius: "8px",
  border: "none",
  background: "#ffffff",
  color: "#0a5aa8",
  fontWeight: 600,
  cursor: "pointer",
};

/* ---------- GLOBAL ANIMATION (Add to CSS file) ---------- */
/*
@keyframes floatSlow {
  0% { transform: translateY(0px); }
  50% { transform: translateY(40px); }
  100% { transform: translateY(0px); }
}
*/
