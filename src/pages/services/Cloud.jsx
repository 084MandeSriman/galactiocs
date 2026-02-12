

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cloud() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (title) => {
    setFlipped(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const styles = {
    // ENHANCED HERO STYLES
    heroContainer: {
      position: "relative",
      height: "85vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#030712",
    },
    heroWrapper: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "100px 20px",
  position: "relative",
  zIndex: 2,
  gap: "40px",
  flexWrap: "wrap"
},

heroLeft: {
  flex: 1,
  minWidth: "300px",
  height: "400px",
  animation: "float 6s ease-in-out infinite"
},

    heroBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(to bottom, rgba(3, 7, 18, 0.7) 0%, rgba(3, 7, 18, 0.4) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1
    },
    heroContent: {
      flex: 1,
      minWidth: "300px",
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "60px 40px",
      maxWidth: "900px",
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      borderRadius: "40px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    heroTag: {
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#60a5fa",
      marginBottom: "24px",
      display: "inline-block",
      padding: "8px 20px",
      background: "rgba(96, 165, 250, 0.1)",
      borderRadius: "100px",
    },
    heroTitle: {
      fontSize: "62px",
      fontWeight: 800,
      lineHeight: 1.1,
      color: "#ffffff",
      margin: "0",
      background: "linear-gradient(to bottom right, #ffffff 60%, #94a3b8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    // EXISTING STYLES
    section: {
      padding: "90px 10%",
      background: "#fff"
    },
    heading: {
      fontSize: "36px",
      color: "#0b5aa2",
      marginBottom: "22px",
      fontWeight: 700
    },
    paragraph: {
      fontSize: "16.5px",
      lineHeight: 1.9,
      color: "#444",
      maxWidth: "900px",
      marginBottom: "18px"
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      marginTop: "50px"
    }
  };
  

  return (
    <>
      <style>{`
        /* HERO ANIMATIONS */
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(40px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
        .animate-bg { animation: kenBurns 20s infinite alternate ease-in-out; }
        .animate-text { animation: textReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .plasma-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 2;
          filter: blur(50px);
          animation: floatOrb 12s infinite alternate ease-in-out;
        }
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

        /* EXISTING ANIMATIONS */
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        .dais-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .dais-item:hover {
          background: #fff;
          border-color: rgba(13, 110, 253, 0.2);
          transform: translateX(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .enhanced-card {
          background: #fdfdfe;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }
        .accent-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(to bottom, #0d6efd, #00a3ff);
        }
      `}</style>

      {/* ENHANCED HERO WITH SVG */}
<section style={styles.heroContainer}>
  <div style={styles.heroBg} className="animate-bg" />

  <div style={styles.heroWrapper}>
    
    {/* LEFT SIDE - SVG ILLUSTRATION */}
    <div style={styles.heroLeft}>
  <svg
    viewBox="0 0 600 500"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Glow Gradient */}
      <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.1" />
      </radialGradient>

      {/* Blue Gradient */}
      <linearGradient id="serverGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>

      {/* Blur Filter */}
      <filter id="blurMe">
        <feGaussianBlur stdDeviation="25" />
      </filter>
    </defs>

    {/* Background Glow */}
    <circle cx="300" cy="220" r="150" fill="url(#cloudGlow)" filter="url(#blurMe)" />

    {/* Cloud Shape */}
    <circle cx="250" cy="230" r="90" fill="rgba(96,165,250,0.25)" />
    <circle cx="350" cy="230" r="80" fill="rgba(96,165,250,0.35)" />
    <circle cx="300" cy="190" r="100" fill="rgba(96,165,250,0.3)" />

    {/* Servers */}
    <rect x="220" y="280" width="160" height="40" rx="10" fill="url(#serverGradient)" />
    <rect x="220" y="330" width="160" height="40" rx="10" fill="url(#serverGradient)" />
    <rect x="220" y="380" width="160" height="40" rx="10" fill="url(#serverGradient)" />

    {/* Server Indicators */}
    <circle cx="240" cy="300" r="4" fill="#60a5fa">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="240" cy="350" r="4" fill="#60a5fa">
      <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="240" cy="400" r="4" fill="#60a5fa">
      <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Network Lines */}
    <line x1="300" y1="190" x2="300" y2="280" stroke="#60a5fa" strokeWidth="2" opacity="0.4" />
  </svg>
</div>


    {/* RIGHT SIDE - CONTENT */}
    <div style={styles.heroContent} className="animate-text">
      <div style={styles.heroTag}>Cloud & Infrastructure</div>
      <h1 style={styles.heroTitle}>
        Building solutions with <br />
        <span style={{ color: "#60a5fa" }}>
          incessant innovation
        </span> <br />
        to create a legacy
      </h1>
    </div>

  </div>
</section>


      {/* ENHANCED INTRO SECTION (Image Part) */}
      <section style={styles.section}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ ...styles.heading, fontSize: "42px" }}>
            Optimized Cloud Infrastructure <br />
            <span style={{ color: "#0d6efd" }}>for Business Resiliency</span>
          </h2>
          <p style={{ ...styles.paragraph, margin: "0 auto", textAlign: "center" }}>
            Our offerings help organizations seamlessly transition to cloud or hybrid environments, stabilize operations, and optimize infrastructure for 
            <strong style={{ color: "#0d6efd" }}> cost efficiency, security, scalability, and agility.</strong>
          </p>
        </div>

        <div style={styles.split}>
          <div className="enhanced-card">
            <div className="accent-line"></div>
            <h3 style={{ fontSize: "24px", color: "#0d6efd", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ background: "#0d6efd", color: "#fff", padding: "4px 8px", borderRadius: "4px", fontSize: "14px" }}>■</span> Overview
            </h3>
            <p style={{ ...styles.paragraph, fontSize: "16px" }}>
              By integrating automation, analytics, and diverse skill sets, we deliver an innovative and holistic <strong style={{ color: "#0d6efd" }}>DAIS™ approach</strong> to digital infrastructure transformation.
            </p>

            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
              <svg width="320" height="280" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" style={{ transformOrigin: 'center', animation: 'rotate-slow 20s linear infinite' }} />
                <circle cx="100" cy="100" r="45" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" style={{ transformOrigin: 'center', animation: 'rotate-slow 15s linear reverse infinite' }} />
                <circle cx="100" cy="100" r="18" fill="#0d6efd" />
                <circle cx="100" cy="100" r="24" fill="none" stroke="#0d6efd" strokeWidth="2" opacity="0.2" />
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <g key={i}>
                    <line x1="100" y1="100" x2={100 + 70 * Math.cos(deg * Math.PI / 180)} y2={100 + 70 * Math.sin(deg * Math.PI / 180)} stroke="#0d6efd" strokeWidth="1.5" opacity="0.3" />
                    <circle cx={100 + 70 * Math.cos(deg * Math.PI / 180)} cy={100 + 70 * Math.sin(deg * Math.PI / 180)} r="8" fill={i % 2 === 0 ? "#0d6efd" : "#00a3ff"} style={{ animation: `pulse-node 3s infinite ${i * 0.5}s` }} />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="enhanced-card" style={{ background: "#f8fbff" }}>
            <div className="accent-line" style={{ background: "#00a3ff" }}></div>
            <h3 style={{ fontSize: "24px", color: "#00a3ff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "25px" }}>
              <span style={{ fontSize: "20px" }}>⚡</span> DAIS™ Approach
            </h3>
            <div style={{ display: "grid", gap: "8px" }}>
              {[
                { icon: "🔧", text: "Technology & process understanding" },
                { icon: "📊", text: "Data-driven change management" },
                { icon: "🔗", text: "Multi-tool expertise" },
                { icon: "⚙️", text: "Infra vs App resource optimization" },
                { icon: "🛡️", text: "Security standards & best practices" },
                { icon: "🤖", text: "Custom scripts & automation" },
                { icon: "✔️", text: "Quality engineering focus" }
              ].map((item, idx) => (
                <div key={idx} className="dais-item">
                  <span style={{ fontSize: "18px", width: "25px" }}>{item.icon}</span>
                  <span style={{ fontSize: "15px", fontWeight: "500", color: "#334155" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD SERVICES */}
      <section style={{padding: "80px 20px", maxWidth: "1200px", margin: "0 auto"}}>
        <h2 style={{...styles.heading, textAlign: "center", marginBottom: "60px"}}>Our Cloud Services</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px"}}>
          {[
            { icon: "☁️", title: "Cloud Strategy", frontDesc: "Strategic planning", backDesc: "Assessment and roadmap services that evaluate infrastructure readiness and define migration paths.", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
            { icon: "🚀", title: "Cloud Migration", frontDesc: "Seamless migration", backDesc: "Secure and seamless migration of applications and data with minimal business disruption.", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
            { icon: "⚡", title: "Cloud Optimization", frontDesc: "Performance boost", backDesc: "Continuous performance, scalability, and cost optimization of cloud environments.", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
            { icon: "🔒", title: "Cloud Security", frontDesc: "Security focus", backDesc: "Robust security controls and regulatory compliance to protect cloud workloads.", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
            { icon: "📊", title: "Managed Services", frontDesc: "24/7 support", backDesc: "24×7 monitoring, incident management, and operational support.", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
            { icon: "🌐", title: "Multi-Cloud", frontDesc: "Unified control", backDesc: "Unified control and visibility across multiple cloud platforms.", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" }
          ].map((card) => (
            <div key={card.title} style={{ perspective: "1000px", height: "320px", cursor: "pointer" }} onClick={() => toggleFlip(card.title)}>
              <div style={{ position: "relative", width: "100%", height: "100%", transition: "transform 0.6s", transformStyle: "preserve-3d", transform: flipped[card.title] ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", background: card.gradient, borderRadius: "16px", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                  <div style={{fontSize: "48px", marginBottom: "16px"}}>{card.icon}</div>
                  <h3 style={{marginBottom: "10px", fontSize: "22px"}}>{card.title}</h3>
                  <p style={{fontSize: "14px", opacity: 0.9}}>{card.frontDesc}</p>
                </div>
                <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#334155", borderRadius: "16px", padding: "30px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white" }}>
                  <p style={{fontSize: "16px", lineHeight: 1.6}}>{card.backDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
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
    </>
  );
}