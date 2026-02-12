import React, { useState, useEffect } from "react";

const styles = `
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes expandLine {
    from { width: 0; }
    to { width: 120px; }
  }

  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(20px); }
  }

  @keyframes gridAnimated {
    0% { opacity: 0.15; }
    50% { opacity: 0.3; }
    100% { opacity: 0.15; }
  }

  @keyframes floatElement {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 0.3; }
  }

  @keyframes rotate360 {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes dataFlow {
    0% { stroke-dashoffset: 100; opacity: 0; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0; }
  }
`;

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // --- SVG ASSETS ---

  const CloudIllustration = () => (
    <svg viewBox="0 0 500 500" style={{ width: '100%', maxWidth: '450px', filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))' }}>
      <path 
        d="M400,300 c0,44-36,80-80,80 H180 c-55,0-100-45-100-100 c0-50,37-91,85-99 c12-40,49-70,93-70 c38,0,71,22,87,54 C375,175,400,210,400,250 C400,250,400,300,400,300z" 
        fill="rgba(255,255,255,0.05)" 
        stroke="rgba(255,255,255,0.2)" 
        strokeWidth="2"
      />
      <g style={{ animation: "floatElement 4s ease-in-out infinite" }}>
        <circle cx="250" cy="250" r="40" fill="rgba(0, 212, 255, 0.1)" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="2" />
        <path d="M235,250 L265,250 M250,235 L250,265" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g style={{ animation: "rotate360 25s linear infinite", transformOrigin: '250px 250px' }}>
        <circle cx="100" cy="250" r="15" fill="rgba(139, 195, 74, 0.2)" stroke="#8bc34a" strokeWidth="2" />
        <circle cx="400" cy="250" r="10" fill="rgba(0, 212, 255, 0.2)" stroke="#00d4ff" strokeWidth="2" />
      </g>
    </svg>
  );

  const ContactCallIllustration = () => (
    <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '380px' }}>
      <circle cx="200" cy="200" r="150" fill="none" stroke="#e0e7ff" strokeWidth="1" strokeDasharray="5,5" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="#e0e7ff" strokeWidth="1" />
      
      {/* Animated Rings */}
      <circle cx="200" cy="200" r="20" fill="#8bc34a" style={{ animation: "pulse 2s infinite" }} />
      
      {/* Floating Icons Representation */}
      <g style={{ animation: "floatElement 5s ease-in-out infinite" }}>
        <rect x="280" y="100" width="60" height="40" rx="10" fill="white" shadow="0 4px 10px rgba(0,0,0,0.1)" />
        <path d="M295 120 h30" stroke="#0d6efd" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      <g style={{ animation: "floatElement 6s ease-in-out infinite reverse" }}>
        <circle cx="100" cy="150" r="30" fill="white" />
        <path d="M90 150 a10 10 0 0 1 20 0" fill="none" stroke="#8bc34a" strokeWidth="3" />
      </g>

      <path d="M150,300 Q200,350 250,300" fill="none" stroke="#0d6efd" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
    </svg>
  );

  const GridPattern = () => (
    <svg
      style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        opacity: 0.1, pointerEvents: "none", animation: "gridAnimated 6s ease-in-out infinite",
      }}
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#333", overflowX: "hidden", background: "#fff" }}>
      
      {/* HERO SECTION */}
      <section style={{
          minHeight: "85vh",
          background: "linear-gradient(135deg, #0a2351 0%, #0d6efd 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          overflow: 'hidden'
        }}>
        <GridPattern />
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "50px",
          alignItems: "center", width: "100%", zIndex: 2, animation: "slideInUp 1s ease-out"
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', animation: 'floatSlow 5s ease-in-out infinite' }}>
            <CloudIllustration />
          </div>
          <div style={{ color: "#fff" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", padding: "8px 16px",
              borderRadius: "20px", background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)",
              fontSize: "13px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", letterSpacing: '1px'
            }}>
              GET IN TOUCH
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>
              Transforming <span style={{ color: "#00d4ff" }}>Ideas</span> Into Reality
            </h1>
            <div style={{ width: "100px", height: "4px", background: "#8bc34a", marginBottom: "30px", borderRadius: "2px" }} />
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, opacity: 0.85, marginBottom: "40px", maxWidth: "550px", fontWeight: 300 }}>
              Reach out today. Whether you have a specific project in mind or just want to explore possibilities, our team is ready to connect.
            </p>
            <button style={{
              padding: "18px 40px", borderRadius: "50px", border: "none",
              background: "#00d4ff", color: "#0a2351", fontWeight: "700",
              cursor: "pointer", transition: "0.3s", boxShadow: "0 10px 25px rgba(0,212,255,0.4)"
            }}>
              Start Your Journey →
            </button>
          </div>
        </div>
      </section>

      {/* AESTHETIC GLOBAL PRESENCE SECTION */}
      <section style={{ padding: "120px 8%", background: "#fcfdfe", position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.8rem', color: '#0a2351', fontWeight: 800, marginBottom: '20px' }}>Global Presence</h2>
          <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Operating at the intersection of technology and business across major global tech hubs.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto"
        }}>
          {[
            { title: "Email Support", info: "sales@sagarsoft.in", icon: "📧", color: "#0d6efd" },
            { title: "Call Us", info: "+91-40-67191000", icon: "📞", color: "#8bc34a" },
            { title: "Headquarters", info: "Jubilee Hills, Hyderabad, India", icon: "📍", color: "#f59e0b" }
          ].map((item, i) => (
            <div key={i} style={{
              padding: "50px 40px", borderRadius: "30px", background: "#fff",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", border: "1px solid #f1f5f9",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03)", textAlign: 'center', position: 'relative', overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-15px)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(13, 110, 253, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.03)";
            }}
            >
              <div style={{ 
                width: "80px", height: "80px", background: `${item.color}15`, 
                borderRadius: "24px", display: 'flex', alignItems: 'center', 
                justifyContent: 'center', fontSize: "2.2rem", margin: "0 auto 30px" 
              }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: "15px", color: "#0a2351", fontSize: "1.4rem" }}>{item.title}</h3>
              <p style={{ color: "#64748b", fontWeight: "500", fontSize: '1rem', lineHeight: 1.6 }}>{item.info}</p>
              
              {/* Decorative Accent */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', background: item.color }} />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION WITH ILLUSTRATION */}
      <section style={{ padding: "100px 8%", background: "#fff" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto", display: "grid", 
          gridTemplateColumns: "0.9fr 1.1fr", gap: "80px", alignItems: "center"
        }}>
          {/* Left Side: Call Illustration */}
          <div style={{ textAlign: 'center', animation: 'floatSlow 6s ease-in-out infinite' }}>
            <div style={{ marginBottom: '30px' }}>
              <ContactCallIllustration />
            </div>
            <h3 style={{ color: '#0a2351', fontSize: '1.8rem', marginBottom: '10px' }}>Ready to talk?</h3>
            <p style={{ color: '#64748b' }}>Our average response time is under 24 hours.</p>
          </div>

          {/* Right Side: Form */}
          <div style={{ 
            padding: "50px", borderRadius: "40px", background: "#f8fafc", 
            border: "1px solid #f1f5f9", boxShadow: "0 40px 80px rgba(0,0,0,0.05)"
          }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "35px", color: "#0a2351", fontWeight: 800 }}>Contact our team</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>First Name *</label>
                  <input type="text" placeholder="John" required style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #e2e8f0", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" placeholder="john@company.com" required style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #e2e8f0", outline: "none" }} />
                </div>
              </div>
              <div style={{ marginBottom: "30px" }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Message</label>
                <textarea rows="5" placeholder="How can we help your business thrive?" style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #e2e8f0", outline: "none", resize: "none" }}></textarea>
              </div>
              <button type="submit" style={{
                width: "100%", padding: "20px", borderRadius: "15px", border: "none",
                background: "#0a2351", color: "#fff", fontWeight: "700", cursor: "pointer",
                fontSize: "1.1rem", transition: '0.3s', boxShadow: '0 10px 20px rgba(10,35,81,0.2)'
              }}
              onMouseEnter={(e) => e.target.style.background = "#0d6efd"}
              onMouseLeave={(e) => e.target.style.background = "#0a2351"}
              >
                {isSubmitted ? "✓ We've received your message!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* OFFICES SECTION */}
      <section style={{ padding: "100px 8%", background: "#f8fafc" }}>
        <h2 style={{ textAlign: "center", color: "#0a2351", marginBottom: "60px", fontSize: '2.2rem', fontWeight: 800 }}>Our Offices</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
          {[
            { city: "HYDERABAD", highlight: true, info: "Plot #111, 1st Floor, Road #10, Jubilee Hills\n+91-40-67191000" },
            { city: "BANGALORE", info: "Residency Road, Bengaluru – 560025\ninfo@sagarsoft.in" },
            { city: "NEW YORK", info: "113-25 Queens Blvd, Forest Hills, NY\n+1 718-746-3860" },
            { city: "CONNECTICUT", info: "200 Glastonbury Blvd, Glastonbury CT\n+1 860-633-2025" },
            { city: "NEW JERSEY", info: "388 Washington Road, Sayreville, NJ\ninfo@infowaysoftware.com" },
          ].map((office, i) => (
            <div key={i} style={{
                padding: "35px", borderRadius: "20px", 
                background: office.highlight ? "#0a2351" : "#fff",
                color: office.highlight ? "#fff" : "#333",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: office.highlight ? "none" : "1px solid #e2e8f0"
              }}>
              <h3 style={{ marginBottom: "15px", fontSize: '1.2rem' }}>{office.city}</h3>
              <p style={{ whiteSpace: "pre-line", fontSize: "14px", opacity: 0.8, lineHeight: 1.6 }}>{office.info}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "40px 8%", background: "#fff", textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
        <p style={{ fontSize: "14px", color: "#94a3b8" }}>© 2026 Sagarsoft. All rights reserved. Innovative Solutions for a Digital World.</p>
      </footer>
    </div>
  );
}