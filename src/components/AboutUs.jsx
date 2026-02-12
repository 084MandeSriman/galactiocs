import React, { useEffect, useRef } from "react";

export default function AboutUs() {
  const canvasRef = useRef(null);

  // High-Performance Neural Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    const particleCount = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(10, 90, 162, 0.1)";
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(10, 90, 162, 0.3)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');
        
        * { box-sizing: border-box; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .glass-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(10, 90, 162, 0.15);
        }

        .gradient-text {
          background: linear-gradient(135deg, #0b5aa2 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #0b5aa2 0%, #00d4ff 100%);
          border-radius: 50%;
          position: absolute;
          left: -6px;
          top: 5px;
          z-index: 2;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tech Tree Animation */
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; filter: drop-shadow(0 0 5px #00d4ff); }
          50% { opacity: 1; filter: drop-shadow(0 0 15px #00d4ff); }
        }

        .tech-node {
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        @media (max-width: 768px) {
          .hero-title { font-size: 36px !important; }
          .split-layout { grid-template-columns: 1fr !important; gap: 30px !important; }
          .section { padding: 60px 0 !important; }
          .timeline-container { margin-left: 20px !important; }
          .timeline-dot { left: -7px !important; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section style={styles.heroSection}>
        <canvas ref={canvasRef} style={styles.canvas} />
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <span style={styles.badge}>SAGARSOFT</span>
            <h1 style={styles.heroTitle} className="hero-title fade-in">
              Enabling your <span className="gradient-text">Home runs</span>
            </h1>
            <p style={styles.heroSub} className="fade-in delay-1">
              When your technology investments return impressive business gains.
            </p>
            <div style={styles.buttonGroup} className="fade-in delay-2">
              <button style={styles.primaryBtn}>Explore Our Journey</button>
              <button style={styles.secondaryBtn}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SAGARSOFT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div className="glass-card fade-in delay-1" style={styles.introCard}>
            <h2 style={styles.sectionTitle}>
              Enabling businesses to grow and gain competitive advantage through digital transformation
            </h2>
            <p style={styles.bodyText}>
              Sagarsoft specialises in digitalization and modernization of enterprises and businesses through bespoke technology solutions and services. We help our customers successfully transition, stabilise, and efficiently operate on modern technologies, thereby realising the intended business impact and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* OUR ROOTS – TRIPLE ROOT SYSTEM */}
<section className="roots-section">
  <style>{`
    .roots-section {
      position: relative;
      padding: 120px 0;
      overflow: hidden;
      background: radial-gradient(circle at top, #0b4f7c, #071c34 70%);
      color: #fff;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .roots-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 2;
    }

    .roots-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 90px;
      align-items: center;
    }

    /* Badge */
    .badge {
      display: inline-block;
      padding: 8px 18px;
      border-radius: 999px;
      background: rgba(0,212,255,0.18);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 22px;
    }

    .roots-title {
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 26px;
    }

    .roots-text p {
      font-size: 17px;
      line-height: 1.8;
      color: rgba(255,255,255,0.82);
      margin-bottom: 22px;
    }

    /* Highlights */
    .roots-highlights {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 26px;
      margin-top: 46px;
    }

    .roots-card {
      background: rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 26px;
      backdrop-filter: blur(12px);
      transition: transform .4s ease, background .4s ease;
    }

    .roots-card:hover {
      transform: translateY(-6px);
      background: rgba(255,255,255,0.12);
    }

    .roots-card strong {
      display: block;
      font-size: 22px;
      margin-bottom: 6px;
    }

    .roots-card span {
      font-size: 14px;
      opacity: .75;
    }

    /* SVG Roots */
    .roots-svg {
      display: flex;
      justify-content: center;
    }

    .root-path {
      stroke-dasharray: 900;
      stroke-dashoffset: 900;
      animation: drawRoot 3s ease forwards;
    }

    @keyframes drawRoot {
      to { stroke-dashoffset: 0; }
    }

    .terminal circle {
      fill: #00d4ff;
      animation: pulse 2.4s ease-in-out infinite;
    }

    @keyframes pulse {
      0%,100% { opacity: .5; r: 5; }
      50% { opacity: 1; r: 7; }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .roots-layout {
        grid-template-columns: 1fr;
        gap: 60px;
      }
      .roots-title {
        font-size: 36px;
      }
      .roots-highlights {
        grid-template-columns: 1fr;
      }
    }
  `}</style>

  <div className="roots-container">
    <div className="roots-layout">

      {/* SVG COLUMN */}
      <div className="roots-svg">
        <svg width="460" height="520" viewBox="0 0 460 520" fill="none">
          <defs>
            <linearGradient id="rootGrad" x1="230" y1="520" x2="230" y2="0">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0"/>
              <stop offset="50%" stopColor="#00d4ff"/>
              <stop offset="100%" stopColor="#0b5aa2"/>
            </linearGradient>
          </defs>

          {/* === THREE MAIN ROOT SYSTEMS === */}
          <g stroke="url(#rootGrad)" strokeWidth="2.6" strokeLinecap="round">

            {/* CENTER ROOT */}
            <path id="c1" className="root-path" d="M230 500V260C230 190 210 130 200 90"/>
            <path id="c2" className="root-path" d="M230 420C230 360 220 320 220 260"/>

            {/* LEFT ROOT */}
            <path id="l1" className="root-path" d="M210 500C200 430 170 390 140 330C110 270 90 210 90 160"/>
            <path id="l2" className="root-path" d="M200 440C170 380 150 320 150 250"/>

            {/* RIGHT ROOT */}
            <path id="r1" className="root-path" d="M250 500C260 430 290 390 320 330C350 270 370 210 370 160"/>
            <path id="r2" className="root-path" d="M260 440C290 380 310 320 310 250"/>
          </g>

          {/* FLOWING DOTS */}
          {["c1","c2","l1","l2","r1","r2"].map((p,i)=>(
            <circle key={p} r="4" fill="#00d4ff">
              <animateMotion dur={`${6 + i}s`} repeatCount="indefinite">
                <mpath href={`#${p}`} />
              </animateMotion>
            </circle>
          ))}

          {/* TERMINAL NODES */}
          <g className="terminal">
            <circle cx="90" cy="160" r="6"/>
            <circle cx="370" cy="160" r="6"/>
            <circle cx="200" cy="90" r="7"/>
            <circle cx="150" cy="250" r="5"/>
            <circle cx="310" cy="250" r="5"/>
          </g>

          {/* BASE */}
          <path
            d="M190 510Q230 495 270 510"
            stroke="#00d4ff"
            strokeWidth="4"
            opacity="0.65"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* TEXT COLUMN */}
      <div className="roots-text">
        <span className="badge">NEARLY 3 DECADES</span>
        <h2 className="roots-title">Our roots go deep</h2>

        <p>
          Technology evolves like seasons — opportunity and disruption coexist.
          What matters is a partner who has weathered every cycle and still
          delivers ROI.
        </p>

        <p>
          For nearly 30 years, we’ve refined engineering, delivery, and
          operations — aligning human intelligence with technological precision.
        </p>

        <div className="roots-highlights">
          <div className="roots-card">
            <strong>30+ Years</strong>
            <span>Industry resilience</span>
          </div>
          <div className="roots-card">
            <strong>Global Trust</strong>
            <span>Long-term partnerships</span>
          </div>
          <div className="roots-card">
            <strong>ROI Driven</strong>
            <span>Technology with purpose</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <section className="seek-section">
  <style>{`
    .seek-section {
      position: relative;
      padding: 140px 0;
      background:
        linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
      overflow: hidden;
    }

    /* Light graph background */
    .graph-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
      opacity: 0.35;
      pointer-events: none;
    }

    .graph-bg svg {
      width: 100%;
      height: 100%;
    }

    .graph-line {
      stroke: #94a3b8;
      stroke-width: 1;
      fill: none;
      stroke-dasharray: 6 8;
      animation: dashMove 18s linear infinite;
    }

    .graph-line.alt {
      stroke: #60a5fa;
      animation-duration: 26s;
    }

    @keyframes dashMove {
      to { stroke-dashoffset: -500; }
    }

    .graph-node {
      fill: #60a5fa;
      opacity: 0.6;
      animation: pulseNode 5s ease-in-out infinite;
    }

    @keyframes pulseNode {
      0%,100% { r: 3; opacity: 0.4; }
      50% { r: 5; opacity: 0.8; }
    }

    .seek-container {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Main card */
    .seek-card {
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(18px);
      border-radius: 32px;
      padding: 90px 64px;
      box-shadow:
        0 40px 90px rgba(15,23,42,0.15),
        inset 0 1px 0 rgba(255,255,255,0.7);
      text-align: center;
    }

    .seek-title {
      font-size: 48px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 24px;
    }

    .seek-desc {
      font-size: 18px;
      color: #475569;
      max-width: 900px;
      margin: 0 auto 80px;
      line-height: 1.8;
    }

    .seek-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
    }

    .seek-item {
      padding: 44px 28px;
      border-radius: 24px;
      background: #ffffff;
      box-shadow: 0 22px 50px rgba(15,23,42,0.12);
      transition: all .4s ease;
    }

    .seek-item:hover {
      transform: translateY(-14px);
      box-shadow: 0 30px 70px rgba(15,23,42,0.18);
    }

    .seek-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 24px;
      border-radius: 20px;
      background: #eef2ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .seek-icon svg {
      width: 36px;
      height: 36px;
      stroke: #4f46e5;
      stroke-width: 2;
      fill: none;
    }

    .seek-item h4 {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }

    .seek-item p {
      font-size: 15px;
      color: #64748b;
      line-height: 1.7;
    }

    @media (max-width: 1024px) {
      .seek-grid {
        grid-template-columns: repeat(2,1fr);
      }
    }

    @media (max-width: 640px) {
      .seek-card {
        padding: 60px 26px;
      }
      .seek-title {
        font-size: 34px;
      }
      .seek-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>

  {/* Light Graph Background */}
  <div className="graph-bg">
    <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
      <path className="graph-line" d="M0 520 C 200 480, 400 560, 600 500, 800 520, 1000 460, 1200 500" />
      <path className="graph-line alt" d="M0 460 C 300 420, 500 480, 700 440, 900 480, 1200 420" />
      <circle className="graph-node" cx="300" cy="480" r="4" />
      <circle className="graph-node" cx="600" cy="500" r="4" />
      <circle className="graph-node" cx="900" cy="480" r="4" />
    </svg>
  </div>

  <div className="seek-container">
    <div className="seek-card">
      <h2 className="seek-title">What we seek</h2>

      <p className="seek-desc">
        We approach technology with clarity and intent — transforming complexity
        into measurable progress through intelligent, scalable engineering.
      </p>

      <div className="seek-grid">
        <div className="seek-item">
          <div className="seek-icon">
            <svg viewBox="0 0 24 24"><path d="M3 12l6 6 12-12"/></svg>
          </div>
          <h4>Efficacy</h4>
          <p>Delivering outcomes that directly impact business growth</p>
        </div>

        <div className="seek-item">
          <div className="seek-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
          </div>
          <h4>Effectiveness</h4>
          <p>Aligning execution with meaningful objectives</p>
        </div>

        <div className="seek-item">
          <div className="seek-icon">
            <svg viewBox="0 0 24 24"><path d="M3 12h18"/><path d="M12 3v18"/></svg>
          </div>
          <h4>Efficiency</h4>
          <p>Optimizing performance while reducing waste</p>
        </div>

        <div className="seek-item">
          <div className="seek-icon">
            <svg viewBox="0 0 24 24"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 15l3-4 4 3 3-5"/></svg>
          </div>
          <h4>ROI Focus</h4>
          <p>Ensuring technology delivers long-term value</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* OUR HISTORY */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '60px'}} className="fade-in">
            <h2 style={styles.sectionTitle}>Our History</h2>
            <p style={{...styles.bodyText, maxWidth: '800px', margin: '0 auto'}}>
              Nearly 3 decades of value-added partnerships
            </p>
          </div>
          
          <div style={styles.timelineContainer}>
            {timelineEvents.map((event, index) => (
              <div key={index} style={styles.timelineItem} className={`fade-in delay-${index % 3}`}>
                <div style={styles.timelineDot} className="timeline-dot"></div>
                <div style={styles.timelineYear}>{event.year}</div>
                <div className="glass-card" style={styles.timelineContent}>
                  <h4 style={styles.timelineTitle}>{event.title}</h4>
                  <p style={styles.timelineDesc}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT TEAM */}
      <section style={{...styles.section, background: 'linear-gradient(135deg, #0a1a33 0%, #0b5aa2 100%)', color: '#fff'}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '60px'}} className="fade-in">
            <h2 style={{...styles.sectionTitle, color: '#fff'}}>Management Team</h2>
            <p style={{...styles.bodyText, color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto'}}>
              Technology and business visionaries propelling the company toward growth and success
            </p>
          </div>
          
          <div style={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className="glass-card fade-in" style={styles.memberCard}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={styles.memberImg}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=0b5aa2&color=fff&size=300`;
                  }}
                />
                <div style={styles.memberInfo}>
                  <h4 style={styles.memberName}>{member.name}</h4>
                  <p style={styles.memberRole}>{member.role}</p>
                  <p style={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div className="glass-card" style={{padding: '60px', textAlign: 'center'}}>
            <h2 style={styles.sectionTitle}>Ready to transform your business?</h2>
            <p style={{...styles.bodyText, maxWidth: '700px', margin: '0 auto 30px'}}>
              Deep in our roots, Resilient in our ways, we steadfastly remain committed to creating continuous value to our customers and society at large.
            </p>
            <button style={{...styles.primaryBtn, padding: '16px 40px', fontSize: '16px'}}>
              Start Your Digital Transformation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  { icon: '🎯', title: 'Efficacy', description: 'Producing desired business results' },
  { icon: '⚡', title: 'Effectiveness', description: 'Doing the right things to achieve goals' },
  { icon: '📈', title: 'Efficiency', description: 'Accomplishing goals with minimal waste' },
  { icon: '💼', title: 'ROI Focus', description: 'Ensuring technology investments become high-performance assets' }
];

const timelineEvents = [
  { year: '1990s', title: 'Foundation', description: 'Sagarsoft was conceived as a Differentiated Technology Solutions and Services provider to create value for tech-enabled businesses worldwide.' },
  { year: '2000', title: 'Going Public', description: 'Went public on regional stock exchange, demonstrating strong investor confidence in our vision and capabilities.' },
  { year: '2000s', title: 'Global Expansion', description: 'Expanded into North American market with ADM and Network support. Added capabilities for end-to-end Technology Transformation initiatives.' },
  { year: '2015', title: 'BSE Listing', description: 'Moved from regional stock exchange to BSE (Bombay Stock Exchange), marking a proud moment and significant growth milestone.' },
  { year: '2020', title: 'Pandemic Response', description: 'Helped businesses accelerate digital transformation with strategic projects in Cloud, Data Engineering, and Digital Engagement.' },
  { year: '2021', title: '25th Anniversary & Growth', description: 'Acquired IT Cats LLC (Infoway Software) in New Jersey and opened second development center in Bengaluru, India\'s Silicon Valley.' }
];

const team = [
  { 
    name: "Jagadeesh Manupati", 
    role: "Managing Director", 
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Chief Architect for over 2 decades, created a culture of innovation, operational fluidity and customer delight."
  },
  { 
    name: "K Pradeep Kumar Reddy", 
    role: "Executive Director & CFO", 
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Wears dual hats of CFO and Chief Growth Officer. Focused on ensuring Sagarsoft remains a differentiated value creator."
  },
  { 
    name: "Kondrella Roopesh", 
    role: "Non-Executive Director", 
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    bio: "President of IT CATS LLC with over 20 years experience in software services, sales, and business development."
  }
];

const styles = {
  pageWrapper: { 
    fontFamily: "'Plus Jakarta Sans', sans-serif", 
    background: "#fbfcfe", 
    minHeight: "100vh",
    overflowX: "hidden"
  },
  container: { 
    maxWidth: "1200px", 
    margin: "0 auto", 
    padding: "0 24px", 
    position: "relative" 
  },
  canvas: { 
    position: "absolute", 
    top: 0, 
    left: 0, 
    width: "100%", 
    height: "100%", 
    zIndex: 0, 
    pointerEvents: "none" 
  },
  heroSection: { 
    position: "relative", 
    paddingTop: "140px", 
    paddingBottom: "100px", 
    overflow: "hidden",
    background: "linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%)"
  },
  heroContent: { 
    position: "relative", 
    zIndex: 1,
    maxWidth: "800px"
  },
  badge: { 
    color: "#0b5aa2", 
    fontWeight: 800, 
    letterSpacing: "2px", 
    fontSize: "12px", 
    marginBottom: "20px", 
    display: "inline-block",
    padding: "8px 16px",
    background: "rgba(11, 90, 162, 0.1)",
    borderRadius: "20px"
  },
  heroTitle: { 
    fontSize: "64px", 
    fontWeight: 800, 
    color: "#0f172a", 
    lineHeight: 1.1, 
    marginBottom: "24px" 
  },
  heroSub: { 
    fontSize: "20px", 
    color: "#475569", 
    maxWidth: "600px", 
    marginBottom: "40px",
    lineHeight: 1.6
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap"
  },
  primaryBtn: { 
    padding: "16px 32px", 
    background: "linear-gradient(135deg, #0b5aa2 0%, #00d4ff 100%)", 
    color: "#fff", 
    border: "none", 
    borderRadius: "12px", 
    fontWeight: 600, 
    cursor: "pointer",
    fontSize: "15px",
    transition: "transform 0.3s ease"
  },
  secondaryBtn: {
    padding: "16px 32px",
    background: "transparent",
    color: "#0b5aa2",
    border: "2px solid #0b5aa2",
    borderRadius: "12px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "15px",
    transition: "all 0.3s ease"
  },
  section: { 
    padding: "100px 0" 
  },
  introCard: { 
    padding: "60px", 
    textAlign: "center" 
  },
  sectionTitle: { 
    fontSize: "42px", 
    fontWeight: 800, 
    color: "#0f172a", 
    marginBottom: "24px",
    lineHeight: 1.2
  },
  bodyText: { 
    fontSize: "18px", 
    color: "#475569", 
    lineHeight: 1.7 
  },
  splitLayout: { 
    display: "grid", 
    gridTemplateColumns: "1fr 1fr", 
    gap: "80px", 
    alignItems: "center" 
  },
  sideImg: { 
    width: "100%", 
    borderRadius: "24px", 
    boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
    transition: "transform 0.5s ease"
  },
  textBox: {
    padding: "20px 0"
  },
  badgeSmall: { 
    color: "#00d4ff", 
    fontWeight: 700, 
    fontSize: "13px", 
    marginBottom: "16px", 
    display: "block",
    letterSpacing: "1px"
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    marginTop: "50px"
  },
  valueCard: {
    textAlign: "center",
    padding: "30px 20px"
  },
  valueIcon: {
    fontSize: "40px",
    marginBottom: "20px"
  },
  valueTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "10px"
  },
  valueDesc: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: 1.6
  },
  timelineContainer: {
    position: "relative",
    marginLeft: "50px",
    paddingLeft: "30px",
    borderLeft: "2px solid rgba(11, 90, 162, 0.2)"
  },
  timelineItem: {
    position: "relative",
    marginBottom: "50px"
  },
  timelineDot: {
    position: "absolute",
    left: "-7px",
    top: "10px"
  },
  timelineYear: {
    position: "absolute",
    left: "-80px",
    top: "5px",
    fontWeight: 800,
    color: "#0b5aa2",
    fontSize: "18px",
    width: "60px",
    textAlign: "right"
  },
  timelineContent: {
    padding: "30px",
    marginLeft: "20px"
  },
  timelineTitle: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "12px"
  },
  timelineDesc: {
    fontSize: "16px",
    color: "#475569",
    lineHeight: 1.6
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px"
  },
  memberCard: {
    overflow: "hidden",
    height: "100%"
  },
  memberImg: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  },
  memberInfo: {
    padding: "30px"
  },
  memberName: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "8px"
  },
  memberRole: {
    fontSize: "15px",
    color: "#0b5aa2",
    fontWeight: 600,
    marginBottom: "15px"
  },
  memberBio: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: 1.6
  }
};

