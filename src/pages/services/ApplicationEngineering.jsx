import React, { useState, useEffect } from 'react';

export default function ApplicationEngineering() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Premium external images
  const images = {
    heroBg: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    pattern: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    dataCenter: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    devOps: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  };

  // Competency data with better icons
  const competencyData = [
    { 
      name: "Micro-services architecture", 
      description: "Scalable, independent service components",
      icon: "🔗"
    },
    { 
      name: "Agile development", 
      description: "Iterative, collaborative approach to software development",
      icon: "🔄"
    },
    { 
      name: "Java and .NET", 
      description: "Enterprise-grade development platforms",
      icon: "⚙️"
    },
    { 
      name: "UX / UI", 
      description: "User-centered design principles",
      icon: "🎨"
    },
    { 
      name: "Automation", 
      description: "Intelligent process automation",
      icon: "🤖"
    },
    { 
      name: "DevOps", 
      description: "Continuous integration and delivery",
      icon: "🔄"
    },
    { 
      name: "Testing", 
      description: "Comprehensive quality assurance",
      icon: "🧪"
    },
    { 
      name: "Cloud management", 
      description: "Multi-cloud orchestration & optimization",
      icon: "☁️"
    },
    { 
      name: "Data Engineering", 
      description: "Big data pipelines & architecture",
      icon: "📊"
    },
    { 
      name: "Analytics", 
      description: "Business intelligence & insights",
      icon: "📈"
    },
    { 
      name: "Cyber security", 
      description: "End-to-end security frameworks",
      icon: "🛡️"
    },
    { 
      name: "PTC", 
      description: "Product lifecycle management",
      icon: "📱"
    }
  ];

  // Industry expertise
  const industries = [
    "Healthcare", "Insurance", "Manufacturing", "Financial Services", 
    "Technology", "Banking", "E-commerce", "Telecommunications"
  ];

  const styles = {
    pageWrapper: {
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      color: "#222",
      overflowX: "hidden"
    },
    
    // Enhanced Hero Section
    hero: {
      minHeight: "85vh",
      display: "flex",
      alignItems: "center",
      padding: "0 10%",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, rgba(11, 90, 162, 0.85), rgba(0, 180, 216, 0.9))",
    },
    heroBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${images.heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
      opacity: 0.4
    },
    heroContent: {
      maxWidth: "800px",
      zIndex: 2,
      paddingTop: "60px"
    },
    heroBadge: {
      display: "inline-block",
      padding: "8px 20px",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      borderRadius: "50px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      marginBottom: "20px"
    },
    heroTitle: {
      fontSize: "56px",
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: "24px",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
    },
    heroSub: {
      fontSize: "18px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      opacity: 0.9,
      marginBottom: "8px",
      fontWeight: 600
    },
    
    // Intro Section
    section: {
      padding: "100px 14%",
      position: "relative"
    },
    gradientSection: {
      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
    },
    heading: {
      fontSize: "44px",
      color: "#0b5aa2",
      marginBottom: "28px",
      fontWeight: 800,
      lineHeight: 1.2
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#475569",
      marginBottom: "20px",
      maxWidth: "900px"
    },
    highlight: {
      color: "#0b5aa2",
      fontWeight: 600
    },
    
    // Competency Section
    competency: {
      background: "linear-gradient(135deg, #4da3cd 0%, #63b36f 100%)",
      padding: "100px 10%",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    },
    competencyPattern: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "40%",
      height: "100%",
      backgroundImage: `url(${images.pattern})`,
      backgroundSize: "cover",
      opacity: 0.1,
      zIndex: 0
    },
    competencyGrid: {
      marginTop: "60px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "16px",
      overflow: "hidden",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      position: "relative",
      zIndex: 1
    },
    competencyCard: {
      background: "#fff",
      color: "#333",
      padding: "28px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      textAlign: "left",
      position: "relative",
      overflow: "hidden"
    },
    cardHoverEffect: {
      background: "linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%)",
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(11, 90, 162, 0.15)"
    },
    iconContainer: {
      width: "56px",
      height: "56px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #0b5aa2 0%, #00d4ff 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      flexShrink: 0
    },
    competencyName: {
      fontSize: "17px",
      fontWeight: 700,
      marginBottom: "4px",
      color: "#0f172a"
    },
    competencyDesc: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: 1.5
    },
    
    // Experience Section
    experience: {
      padding: "80px 10%",
      background: "#fff",
      textAlign: "center"
    },
    experienceStats: {
      display: "flex",
      justifyContent: "center",
      gap: "60px",
      marginTop: "40px",
      flexWrap: "wrap"
    },
    statItem: {
      textAlign: "center"
    },
    statNumber: {
      fontSize: "48px",
      fontWeight: 800,
      color: "#0b5aa2",
      marginBottom: "8px",
      background: "linear-gradient(135deg, #0b5aa2, #00d4ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    statLabel: {
      fontSize: "16px",
      color: "#64748b",
      fontWeight: 500
    },
    
    // Industry Section
    industry: {
      padding: "80px 10%",
      background: "linear-gradient(135deg, #0b5aa2 0%, #084a8a 100%)",
      color: "#fff"
    },
    industryGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "center",
      marginTop: "40px"
    },
    industryChip: {
      padding: "12px 28px",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "50px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      fontSize: "16px",
      fontWeight: 500,
      transition: "all 0.3s ease"
    },
    chipHover: {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "translateY(-2px)"
    },
    
    // Offerings Section
    offerings: {
      padding: "100px 8%",
      background: "#f8fafc"
    },
    offeringsGrid: {
      marginTop: "60px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "40px"
    },
    card: {
      color: "#fff",
      padding: "48px 36px",
      borderRadius: "24px",
      textAlign: "left",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      minHeight: "420px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    cardHover: {
      transform: "translateY(-15px)",
      boxShadow: "0 40px 80px rgba(0, 0, 0, 0.25)"
    },
    cardTitle: {
      fontSize: "28px",
      fontWeight: 700,
      marginBottom: "24px",
      lineHeight: 1.2
    },
    cardList: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    cardListItem: {
      fontSize: "16px",
      lineHeight: 1.8,
      marginBottom: "12px",
      paddingLeft: "28px",
      position: "relative",
      opacity: 0.9
    },
    listBullet: {
      position: "absolute",
      left: 0,
      top: "8px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.8)"
    },
    
    // Secret Sauce Section
    secretSauce: {
      padding: "100px 14%",
      background: "#fff",
      position: "relative"
    },
    sauceContent: {
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center"
    },
    sauceTitle: {
      fontSize: "36px",
      color: "#0b5aa2",
      marginBottom: "32px",
      fontWeight: 800
    },
    sauceHighlight: {
      fontSize: "20px",
      color: "#475569",
      fontStyle: "italic",
      lineHeight: 1.8,
      borderLeft: "4px solid #0b5aa2",
      paddingLeft: "24px",
      margin: "40px 0",
      textAlign: "left"
    },
    
    // CTA Section
    cta: {
      padding: "100px 14%",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      color: "#fff",
      textAlign: "center"
    },
    ctaTitle: {
      fontSize: "42px",
      fontWeight: 800,
      marginBottom: "24px",
      background: "linear-gradient(135deg, #00d4ff 0%, #0b5aa2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    ctaButton: {
      padding: "18px 48px",
      background: "linear-gradient(135deg, #00d4ff 0%, #0b5aa2 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "40px"
    },
    buttonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
    }
  };

  // Inline styles for animations
  const inlineStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    .glass-card {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 24px;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #0b5aa2 0%, #00d4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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
    
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    .delay-3 { animation-delay: 0.6s; }
    
    .floating {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @media (max-width: 768px) {
      .hero-title { font-size: 36px !important; }
      .section { padding: 60px 5% !important; }
      .competency-grid { grid-template-columns: 1fr !important; }
      .offerings-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <div style={styles.pageWrapper}>
      <style>{inlineStyles}</style>
      
      {/* HERO SECTION – IMAGE + DNA SIGNAL BACKGROUND */}
<section className="hero-section">
  <style>{`
    .hero-section {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: #f8fafc;
    }

    /* Background Image */
    .hero-image {
      position: absolute;
      inset: 0;
      background-image: url("https://images.unsplash.com/photo-1581091870627-3b8c1c71b3e2");
      background-size: cover;
      background-position: center;
      filter: blur(2px);
      opacity: 0.18;
      z-index: 0;
    }

    /* Light overlay for readability */
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(248,250,252,0.95),
        rgba(238,242,247,0.9)
      );
      z-index: 1;
    }

    /* DNA Background */
    .dna-bg {
      position: absolute;
      inset: 0;
      z-index: 2;
      opacity: 0.35;
      pointer-events: none;
    }

    .dna-bg svg {
      width: 100%;
      height: 100%;
    }

    .dna-path {
      fill: none;
      stroke: #94a3b8;
      stroke-width: 1.2;
      stroke-dasharray: 6 10;
      animation: dnaMove 18s linear infinite;
    }

    .dna-path.alt {
      stroke: #60a5fa;
      animation-duration: 26s;
    }

    @keyframes dnaMove {
      to { stroke-dashoffset: -600; }
    }

    .dna-node {
      fill: #6366f1;
      opacity: 0.6;
      animation: dnaPulse 4s ease-in-out infinite;
    }

    @keyframes dnaPulse {
      0%,100% { opacity: 0.4; r: 2.5; }
      50% { opacity: 0.9; r: 4; }
    }

    /* Soft glow */
    .hero-glow {
      position: absolute;
      width: 420px;
      height: 420px;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.35;
      z-index: 2;
    }

    .hero-glow.one {
      background: #6366f1;
      top: -140px;
      left: -120px;
    }

    .hero-glow.two {
      background: #38bdf8;
      bottom: -160px;
      right: -120px;
    }

    /* Content */
    .hero-content {
      position: relative;
      z-index: 3;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .hero-badge {
      display: inline-block;
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(99,102,241,0.12);
      color: #4338ca;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 22px;
    }

    .hero-title {
      font-size: 56px;
      font-weight: 800;
      line-height: 1.15;
      color: #0f172a;
      margin-bottom: 24px;
      letter-spacing: -0.02em;
    }

    .gradient-text {
      background: linear-gradient(90deg, #6366f1, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-desc {
      font-size: 20px;
      color: #475569;
      max-width: 620px;
      line-height: 1.7;
    }

    .fade-in {
      animation: fadeUp 1.1s ease-out forwards;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 38px;
      }
      .hero-desc {
        font-size: 17px;
      }
    }
  `}</style>

  {/* Background Layers */}
  <div className="hero-image"></div>
  <div className="hero-overlay"></div>

  {/* DNA Animation */}
  <div className="dna-bg">
    <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
      <path
        className="dna-path"
        d="M200 0 C 260 100, 140 200, 200 300 C 260 400, 140 500, 200 600 C 260 700, 140 800, 200 900"
      />
      <path
        className="dna-path alt"
        d="M260 0 C 200 100, 320 200, 260 300 C 200 400, 320 500, 260 600 C 200 700, 320 800, 260 900"
      />

      <circle className="dna-node" cx="230" cy="120" r="3" />
      <circle className="dna-node" cx="230" cy="260" r="3" />
      <circle className="dna-node" cx="230" cy="400" r="3" />
      <circle className="dna-node" cx="230" cy="540" r="3" />
      <circle className="dna-node" cx="230" cy="680" r="3" />
    </svg>
  </div>

  <div className="hero-glow one"></div>
  <div className="hero-glow two"></div>

  {/* HERO CONTENT */}
  <div className="hero-content fade-in">
    <div className="hero-badge">Application Engineering</div>

    <h1 className="hero-title">
      New-age applications for a <br />
      <span className="gradient-text">
        better, brighter digital tomorrow
      </span>
    </h1>

    <p className="hero-desc">
      Orchestrating specialized engineering practices to deliver scalable,
      resilient, and future-ready enterprise applications.
    </p>
  </div>
</section>

      {/* INTRO SECTION */}
      <section style={styles.section}>
        <h2 style={styles.heading} className="fade-in">
          Digitally engineered composite<br />
          <span className="gradient-text">& modern applications</span>
        </h2>
        <p style={styles.paragraph} className="fade-in delay-1">
          <span style={styles.highlight}>"The whole is greater than sum of its parts"</span> 
          {" "}is an aphorism that aptly describes our approach to application engineering. 
          Like a skilled composer-conductor, we orchestrate various 'practices' dedicated 
          to specialized areas of software development, to deliver new age enterprise 
          applications and global platforms.
        </p>
        <p style={styles.paragraph} className="fade-in delay-2">
          Our services portfolio is designed to enable you achieve outstanding customer 
          experiences; impressive efficiencies; intended outcomes, thus enabling a 
          high performance business.
        </p>
      </section>

      {/* SECRET SAUCE SECTION */}
      <section style={{...styles.secretSauce, ...styles.gradientSection}}>
        <div style={styles.sauceContent}>
          <h3 style={styles.sauceTitle} className="fade-in">The Secret Sauce</h3>
          <div style={styles.sauceHighlight} className="fade-in delay-1">
            The confidence behind our delivery is a passion for Application Engineering 
            that has been institutionalized through diligently crafted and living 
            'Practices' in Technology and Delivery; continuously evolving to always 
            deliver technology's best, to cater to the ever changing business realities.
          </div>
        </div>
      </section>

      {/* COMPETENCY AREAS */}
      <section style={styles.competency}>
        <div style={styles.competencyPattern}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: "44px", marginBottom: "20px", fontWeight: 800 }} className="fade-in">
            Competency Areas
          </h2>
          <p style={{ 
            fontSize: "18px", 
            opacity: 0.9, 
            maxWidth: "800px", 
            margin: "0 auto 40px",
            lineHeight: 1.6
          }} className="fade-in delay-1">
            Our competency centers are purposeful instruments towards development of 
            talent, knowledge systems, and technology solutions that create most 
            value for the customer.
          </p>

          <div style={styles.competencyGrid} className="competency-grid">
            {competencyData.map((item, index) => (
              <div
                key={item.name}
                style={{
                  ...styles.competencyCard,
                  ...(hoveredCard === index ? styles.cardHoverEffect : {})
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`fade-in ${index % 3 === 0 ? 'delay-1' : index % 3 === 1 ? 'delay-2' : 'delay-3'}`}
              >
                <div style={styles.iconContainer}>
                  {item.icon}
                </div>
                <div>
                  <div style={styles.competencyName}>{item.name}</div>
                  <div style={styles.competencyDesc}>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section style={styles.experience}>
        <h3 style={{ fontSize: "32px", color: "#0f172a", marginBottom: "20px" }} className="fade-in">
          Honed Over Nearly 3 Decades
        </h3>
        <p style={{ 
          fontSize: "18px", 
          color: "#475569", 
          maxWidth: "800px", 
          margin: "0 auto 40px",
          lineHeight: 1.6
        }} className="fade-in delay-1">
          Decades of experience in successfully enabling customers transition from 
          legacy to modern technologies, stabilize, and optimize their performance. 
          We've harvested this wealth of experience into engagement, delivery and 
          operations excellence.
        </p>
        
        <div style={styles.experienceStats}>
          <div style={styles.statItem} className="fade-in">
            <div style={styles.statNumber}>30+</div>
            <div style={styles.statLabel}>Years Experience</div>
          </div>
          <div style={styles.statItem} className="fade-in delay-1">
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Projects Delivered</div>
          </div>
          <div style={styles.statItem} className="fade-in delay-2">
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Global Clients</div>
          </div>
        </div>
      </section>

      {/* INDUSTRY EXPERTISE */}
      <section style={styles.industry}>
        <h3 style={{ 
          fontSize: "32px", 
          marginBottom: "20px", 
          textAlign: "center" 
        }} className="fade-in">
          Cross-Industry Expertise
        </h3>
        <p style={{ 
          fontSize: "18px", 
          opacity: 0.9, 
          maxWidth: "800px", 
          margin: "0 auto 40px",
          textAlign: "center",
          lineHeight: 1.6
        }} className="fade-in delay-1">
          Our partnerships with best-in-class enterprises across industries enabled us 
          to develop institutional knowledge and respond with bespoke solutions.
        </p>
        
        <div style={styles.industryGrid}>
          {industries.map((industry, index) => (
            <div
              key={industry}
              style={{
                ...styles.industryChip,
                ...(hoveredCard === `industry-${index}` ? styles.chipHover : {})
              }}
              onMouseEnter={() => setHoveredCard(`industry-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`fade-in ${index % 4 === 0 ? 'delay-1' : index % 4 === 1 ? 'delay-2' : index % 4 === 2 ? 'delay-3' : ''}`}
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS SECTION */}
<section style={styles.offerings}>
  {/* Add internal CSS directly in this section */}
  <style>{`
    .offerings-card {
      color: #fff;
      padding: 48px 36px;
      border-radius: 24px;
      text-align: left;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      min-height: 420px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 1;
    }
    
    .offerings-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);
    }
    
    .offerings-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 24px;
      line-height: 1.2;
      color: #fff;
    }
    
    .offerings-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .offerings-list-item {
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 12px;
      padding-left: 28px;
      position: relative;
      color: rgba(255, 255, 255, 0.95);
    }
    
    .offerings-bullet {
      position: absolute;
      left: 0;
      top: 10px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.8;
    }
    
    .offerings-decor-1 {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background: rgba(255,255,255,0.1);
      border-radius: 0 24px 0 100px;
      z-index: 1;
    }
    
    .offerings-decor-2 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 100px;
      background: rgba(255,255,255,0.1);
      border-radius: 0 100px 0 0;
      z-index: 1;
    }
    
    .offerings-decor-3 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
      background: rgba(255,255,255,0.1);
      border-radius: 24px 0 100px 0;
      z-index: 1;
    }
    
    .offerings-card-content {
      position: relative;
      z-index: 2;
      flex: 1;
    }
    
    /* Floating animation */
    @keyframes offerings-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .offerings-float {
      animation: offerings-float 6s ease-in-out infinite;
    }
    
    /* Fade in animations */
    @keyframes offerings-fade-in {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .offerings-fade-in {
      opacity: 0;
      transform: translateY(20px);
      animation: offerings-fade-in 0.8s ease forwards;
    }
    
    .offerings-delay-1 { animation-delay: 0.2s; }
    .offerings-delay-2 { animation-delay: 0.4s; }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .offerings-card {
        min-height: auto;
        padding: 30px 20px;
      }
      
      .offerings-title {
        font-size: 22px;
        margin-bottom: 20px;
      }
      
      .offerings-list-item {
        font-size: 14px;
        line-height: 1.6;
      }
    }
  `}</style>

  <h2 style={{ 
    fontSize: "44px", 
    color: "#0b5aa2", 
    textAlign: "center",
    marginBottom: "20px"
  }} className="offerings-fade-in">
    Our Offerings
  </h2>
  
  <p style={{ 
    fontSize: "18px", 
    color: "#475569", 
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 60px",
    lineHeight: 1.6
  }} className="offerings-fade-in offerings-delay-1">
    Comprehensive application engineering services designed to transform your 
    digital capabilities
  </p>

  <div style={styles.offeringsGrid} className="offerings-grid">
    {/* Modern Application Development */}
    <div
      style={{
        background: "linear-gradient(135deg, #169db7 0%, #0d7a8c 100%)",
      }}
      onMouseEnter={() => setHoveredCard('offering-1')}
      onMouseLeave={() => setHoveredCard(null)}
      className="offerings-card offerings-fade-in offerings-float"
    >
      <div className="offerings-card-content">
        <h3 className="offerings-title">Modern Application Development</h3>
        <ul className="offerings-list">
          {[
            "Leverage API & Micro Services, Agile/DevOps, Cloud Native, and Analytics",
            "Build Cloud-first/Mobility-first/API-first business-ready platforms",
            "Enrich with cutting-edge UX/UI design principles",
            "Extend capabilities across multiple development stacks",
            "Global delivery and support infrastructure"
          ].map((item, index) => (
            <li key={index} className="offerings-list-item">
              <div className="offerings-bullet"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="offerings-decor-1"></div>
    </div>

    {/* Application Support & Maintenance */}
    <div
      style={{
        background: "linear-gradient(135deg, #9c3b8e 0%, #7a2c6e 100%)",
      }}
      onMouseEnter={() => setHoveredCard('offering-2')}
      onMouseLeave={() => setHoveredCard(null)}
      className="offerings-card offerings-fade-in offerings-delay-1 offerings-float"
    >
      <div className="offerings-card-content">
        <h3 className="offerings-title">Application Support & Maintenance</h3>
        <ul className="offerings-list">
          {[
            "24×7 global support for business-critical applications",
            "Proactive monitoring and alerting services",
            "Comprehensive incident and change management",
            "Automation for productivity and TCO benefits",
            "Compliance with data privacy and security standards"
          ].map((item, index) => (
            <li key={index} className="offerings-list-item">
              <div className="offerings-bullet"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="offerings-decor-2"></div>
    </div>

    {/* DAIS™ Application Transformation */}
    <div
      style={{
        background: "linear-gradient(135deg, #1769aa 0%, #0d4a7a 100%)",
      }}
      onMouseEnter={() => setHoveredCard('offering-3')}
      onMouseLeave={() => setHoveredCard(null)}
      className="offerings-card offerings-fade-in offerings-delay-2 offerings-float"
    >
      <div className="offerings-card-content">
        <h3 className="offerings-title">DAIS™ Application Transformation</h3>
        <ul className="offerings-list">
          {[
            "Performance optimization from infrastructure upgrades",
            "Highest priority to security protocols and standards",
            "Optimum use of automation for efficiency",
            "Data quality enhancement and management",
            "Analytics-driven alerts and decision-making",
            "Deployment of wide variety of skill sets"
          ].map((item, index) => (
            <li key={index} className="offerings-list-item">
              <div className="offerings-bullet"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="offerings-decor-3"></div>
    </div>
  </div>
</section>
      
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



    </div>
  );
}