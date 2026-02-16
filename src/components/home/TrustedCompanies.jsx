export default function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <style>{`
        /* ========== TRUSTED COMPANIES – NEXT LEVEL ========== */
        .trusted-companies {
          position: relative;
          background: #0a0c12;
          padding: 100px 6%;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* ========== DYNAMIC BACKGROUND ========== */
        .trusted-companies::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 30%, rgba(239, 68, 68, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 90% 70%, rgba(59, 130, 246, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 30% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 70% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 40%);
          filter: blur(50px);
          animation: bgDrift 20s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes bgDrift {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        /* Subtle grid overlay */
        .trusted-companies::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 20px);
          pointer-events: none;
          z-index: 2;
        }

        /* ========== FLOATING ORBS ========== */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
          opacity: 0.3;
          mix-blend-mode: screen;
          animation: orbFloat 25s infinite alternate;
        }
        .orb-1 {
          width: 400px; height: 400px;
          background: #ef4444;
          top: -150px; left: -100px;
        }
        .orb-2 {
          width: 500px; height: 500px;
          background: #3b82f6;
          bottom: -200px; right: -100px;
          animation-delay: -8s;
        }
        .orb-3 {
          width: 300px; height: 300px;
          background: #10b981;
          top: 40%; left: 40%;
          filter: blur(100px);
          opacity: 0.2;
          animation: orbFloat 20s infinite alternate-reverse;
        }
        @keyframes orbFloat {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, -40px) scale(1.2); }
        }

        /* ========== CONTAINER ========== */
        .trusted-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 20;
        }

        /* ========== TITLE ========== */
        .trusted-title {
          text-align: center;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 70px;
          text-transform: uppercase;
          letter-spacing: 4px;
          background: linear-gradient(135deg, #ffffff, #e0e7ff, #c7d2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          animation: titlePulse 3s ease-in-out infinite alternate;
        }

        @keyframes titlePulse {
          0% { text-shadow: 0 0 20px rgba(255,255,255,0.2); }
          100% { text-shadow: 0 0 50px rgba(165,180,252,0.6); }
        }

        .trusted-title::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6);
          border-radius: 4px;
          box-shadow: 0 0 30px rgba(239,68,68,0.5);
        }

        /* ========== LOGO GRID – MODERN GLASS ========== */
        .logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 40px;
          align-items: center;
          justify-items: center;
          perspective: 1500px;
        }

        /* Logo card – 3D glass with hover effect */
        .logo-item {
          width: 180px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(20, 30, 45, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 
            0 20px 40px -15px rgba(0,0,0,0.5),
            0 0 0 1px rgba(255,255,255,0.02) inset;
          transform-style: preserve-3d;
        }

        /* Inner gradient overlay */
        .logo-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 1;
        }

        /* Glowing border on hover */
        .logo-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(145deg, rgba(239,68,68,0.5), rgba(59,130,246,0.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .logo-item:hover {
          transform: translateY(-12px) scale(1.05) rotateX(2deg) rotateY(2deg);
          box-shadow: 
            0 40px 70px -15px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,255,255,0.15) inset;
          border-color: rgba(255,255,255,0.2);
        }

        .logo-item:hover::before {
          opacity: 1;
        }

        .logo-item:hover::after {
          opacity: 1;
        }

        /* Logo image */
        .logo-item img {
          max-width: 130px;
          max-height: 65px;
          object-fit: contain;
          filter: brightness(0.9) contrast(1.1) drop-shadow(0 5px 15px rgba(0,0,0,0.3));
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .logo-item:hover img {
          filter: brightness(1.1) contrast(1.2) drop-shadow(0 10px 25px rgba(255,255,255,0.2));
          transform: scale(1.08);
        }

        /* Optional: grayscale to color effect */
        .logo-item img {
          filter: grayscale(100%) brightness(1.2) drop-shadow(0 5px 15px rgba(0,0,0,0.3));
        }
        .logo-item:hover img {
          filter: grayscale(0%) brightness(1.2) drop-shadow(0 10px 25px rgba(255,255,255,0.3));
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1200px) {
          .logos-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 35px;
          }
          .logo-item {
            width: 160px;
            height: 90px;
          }
        }

        @media (max-width: 768px) {
          .trusted-companies {
            padding: 70px 4%;
          }
          .trusted-title {
            font-size: 20px;
            margin-bottom: 60px;
          }
          .logos-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 30px;
          }
          .logo-item {
            width: 140px;
            height: 80px;
          }
          .logo-item img {
            max-width: 110px;
            max-height: 55px;
          }
        }

        @media (max-width: 480px) {
          .trusted-companies {
            padding: 50px 3%;
          }
          .trusted-title {
            font-size: 18px;
            margin-bottom: 50px;
            letter-spacing: 2px;
          }
          .logos-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 25px;
          }
          .logo-item {
            width: 120px;
            height: 70px;
          }
          .logo-item img {
            max-width: 90px;
            max-height: 45px;
          }
        }
      `}</style>

      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="trusted-container">
        <h3 className="trusted-title">Trusted By Industry Leaders</h3>
        
        <div className="logos-grid">
          <div className="logo-item">
            <img src="https://i.pinimg.com/736x/c1/ce/19/c1ce199e61e5987447ff4331141abec0.jpg" alt="HCL" />
          </div>
          
          <div className="logo-item">
            <img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="Infosys" />
          </div>
          
          <div className="logo-item">
            <img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="TCS" />
          </div>
          
          <div className="logo-item">
            <img src="https://bhavnacorp.com/images/logo.png" alt="Wipro" />
          </div>
          
          <div className="logo-item">
            <img src="https://www.tcs.com/content/dam/global-tcs/en/images/home/tcs-logo-1.svg" alt="Samsung" />
          </div>
          
          <div className="logo-item">
            <img src="	https://www.happiestminds.com/wp-content/uploads/2026/01/happiest-minds-latest-logo.png" alt="IBM" />
          </div>
          
         
        </div>
      </div>
    </section>
  );
}