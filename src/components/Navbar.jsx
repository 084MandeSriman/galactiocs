


// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <>
//       <style>{`
//         :root {
//           --brand-primary: #6366f1; /* Indigo */
//           --brand-secondary: #4338ca;
//           --text-main: #1e293b;
//           --text-muted: #64748b;
//           --glass-bg: rgba(255, 255, 255, 0.8);
//         }

//         .navbar {
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           background: var(--glass-bg);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           border-bottom: 1px solid rgba(226, 232, 240, 0.8);
//           height: 72px;
//           display: flex;
//           align-items: center;
//           font-family: 'Inter', system-ui, -apple-system, sans-serif;
//         }

//         .nav-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         /* Brand Styling */
//         .logo-link {
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .logo-icon {
//           width: 32px;
//           height: 32px;
//           background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-weight: bold;
//           font-size: 1.2rem;
//         }

//         .logo-text {
//           font-size: 1.25rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           color: var(--text-main);
//         }

//         .logo-text span {
//           background: linear-gradient(to right, var(--brand-primary), var(--brand-secondary));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         /* Navigation Links */
//         .nav-menu {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//         }

//         .nav-link {
//           text-decoration: none;
//           color: var(--text-muted);
//           font-size: 0.9rem;
//           font-weight: 500;
//           padding: 0.5rem 0;
//           position: relative;
//           transition: color 0.3s ease;
//         }

//         .nav-link:hover {
//           color: var(--brand-primary);
//         }

//         /* Animated Underline Effect */
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: var(--brand-primary);
//           transition: width 0.3s ease;
//         }

//         .nav-link:hover::after {
//           width: 100%;
//         }

//         /* Dropdown Perfection */
//         .dropdown {
//           position: relative;
//           padding: 1rem 0; /* Vertical breathing room */
//         }

//         .dropdown-trigger {
//           cursor: pointer;
//           color: var(--text-muted);
//           font-weight: 500;
//           font-size: 0.9rem;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           transition: color 0.3s;
//         }

//         /* Invisible Bridge Fix */
//         .dropdown::before {
//           content: "";
//           position: absolute;
//           top: 100%;
//           left: 0;
//           width: 100%;
//           height: 20px; /* Bridge gap */
//           display: none;
//         }

//         .dropdown:hover::before {
//           display: block;
//         }

//         .dropdown-menu {
//           position: absolute;
//           top: calc(100% + 10px);
//           left: 50%;
//           transform: translateX(-50%) translateY(10px);
//           background: white;
//           min-width: 240px;
//           border-radius: 12px;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02);
//           padding: 0.75rem;
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
//         }

//         .dropdown:hover .dropdown-menu {
//           opacity: 1;
//           visibility: visible;
//           transform: translateX(-50%) translateY(0);
//         }

//         .dropdown-menu a {
//           display: block;
//           padding: 0.8rem 1rem;
//           text-decoration: none;
//           color: var(--text-muted);
//           font-size: 0.875rem;
//           border-radius: 8px;
//           transition: all 0.2s;
//         }

//         .dropdown-menu a:hover {
//           background: #f1f5f9;
//           color: var(--brand-primary);
//           transform: translateX(4px);
//         }

//         /* Modern Button */
//         .contact-btn {
//           background: var(--brand-primary);
//           color: white !important;
//           padding: 0.6rem 1.4rem;
//           border-radius: 50px; /* Pill shape */
//           font-weight: 600 !important;
//           box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
//         }

//         .contact-btn:hover {
//           background: var(--brand-secondary);
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
//         }

//         .contact-btn::after {
//           display: none; /* Remove underline from button */
//         }

//         .arrow {
//           font-size: 0.6rem;
//           transition: transform 0.3s;
//           opacity: 0.7;
//         }

//         .dropdown:hover .arrow {
//           transform: rotate(180deg);
//         }
//       `}</style>

//       <header className="navbar">
//         <div className="nav-container">
//           <div className="logo">
//             <Link to="/" className="logo-link">
//               <div className="logo-icon">G</div>
//               <span className="logo-text">GALACTICOS <span>NETWORK</span></span>
//             </Link>
//           </div>

//           <nav className="nav-menu">
//             <Link className="nav-link" to="/">HOME</Link>
//             <Link className="nav-link" to="/about-us">ABOUT US</Link>

//             <div className="dropdown">
//               <div className="dropdown-trigger">
//                 SERVICES <span className="arrow">▼</span>
//               </div>

//               <div className="dropdown-menu">
//                 <Link to="/services/application-engineering">Application Engineering</Link>
//                 <Link to="/services/cloud">Cloud Solutions</Link>
//                 <Link to="/services/devops">DevOps & Automation</Link>
//                 <Link to="/services/data-engineering">Data Engineering</Link>
//                 <Link to="/services/cloud-saas">Cloud SaaS</Link>
//                 <Link to="/services/quality-engineering">Quality Engineering</Link>
//                 <Link to="/services/ui-ux">UX / UI Design</Link>
//                 <Link to="/services/mobility">Mobility</Link>
//               </div>
//             </div>

//             <Link className="nav-link" to="/investors">INVESTORS</Link>
//             <Link className="nav-link" to="/careers">CAREERS</Link>
//             <Link className="nav-link contact-btn" to="/contact">CONTACT US</Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }



import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <style>{`
        :root {
          --brand-primary: #6366f1;
          --brand-secondary: #4338ca;
          --text-main: #0f172a;
          --text-muted: #64748b;
          --glass-bg: rgba(255, 255, 255, 0.65);
          --glass-border: rgba(255, 255, 255, 0.4);
        }

        /* ================= NAVBAR ================= */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          min-height: 60px;
          background: var(--glass-bg);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border-bottom: 1px solid var(--glass-border);
          box-shadow:
            0 10px 30px rgba(15, 23, 42, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
        }

        .nav-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ================= LOGO ================= */

        .logo-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          border-radius: 8px;
          background: rgba(255,255,255,0.6);
          padding: 4px;
          box-shadow:
            0 6px 20px rgba(0,0,0,0.08),
            inset 0 0 0 1px rgba(255,255,255,0.6);
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-main);
          line-height: 1;
          white-space: nowrap;
        }

        .logo-text span {
          background: linear-gradient(
            135deg,
            var(--brand-primary),
            var(--brand-secondary)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ================= MENU ================= */

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          padding: 0.5rem 0;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--brand-primary);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: var(--brand-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* ================= DROPDOWN ================= */

        .dropdown {
          position: relative;
          padding: 1rem 0;
        }

        .dropdown-trigger {
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        .arrow {
          font-size: 0.6rem;
          transition: transform 0.35s ease;
          opacity: 0.7;
        }

        .dropdown:hover .arrow {
          transform: rotate(180deg);
        }

        .dropdown::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 12px;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: -20px;
          min-width: 240px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          border-radius: 12px;
          padding: 0.5rem;
          box-shadow:
            0 25px 50px rgba(15, 23, 42, 0.12),
            inset 0 0 0 1px rgba(255,255,255,0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }

        .dropdown-menu a {
          display: block;
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .dropdown-menu a:hover {
          background: rgba(99,102,241,0.08);
          color: var(--brand-primary);
          transform: translateX(4px);
        }

        /* ================= CTA BUTTON ================= */

        .contact-btn {
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          background: linear-gradient(
            135deg,
            var(--brand-primary),
            var(--brand-secondary)
          );
          color: #fff !important;
          font-weight: 700;
          font-size: 0.8rem;
          box-shadow: 0 8px 20px rgba(99,102,241,0.3);
          white-space: nowrap;
        }

        .contact-btn::after {
          display: none;
        }

        .contact-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 25px rgba(99,102,241,0.4);
        }

        /* ================= HAMBURGER MENU ================= */

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 8px;
          z-index: 1001;
        }

        .hamburger line {
          width: 24px;
          height: 2.5px;
          background: var(--text-main);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open line:nth-child(1) {
          transform: rotate(45deg) translate(10px, 10px);
        }

        .hamburger.open line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* ================= MOBILE MENU ================= */

        .mobile-menu {
          position: fixed;
          top: 60px;
          left: 0;
          width: 100%;
          max-height: calc(100vh - 60px);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          display: none;
          flex-direction: column;
          padding: 20px 4%;
          gap: 10px;
          overflow-y: auto;
          z-index: 999;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a, .mobile-menu .dropdown-trigger {
          padding: 12px 0;
          font-size: 0.95rem;
          color: var(--text-muted);
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          cursor: pointer;
        }

        .mobile-menu a:hover, .mobile-menu .dropdown-trigger:hover {
          color: var(--brand-primary);
        }

        .mobile-dropdown-menu {
          display: none;
          flex-direction: column;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(99,102,241,0.05);
          border-radius: 8px;
          margin-top: 8px;
        }

        .mobile-dropdown-menu.open {
          display: flex;
        }

        .mobile-dropdown-menu a {
          border: none;
          padding: 8px 0;
          font-size: 0.9rem;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1024px) {
          .logo-text {
            font-size: 1rem;
          }
          .nav-menu {
            gap: 1rem;
          }
          .nav-link, .dropdown-trigger {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 3%;
          }
          
          .nav-menu {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .logo-img {
            width: 32px;
            height: 32px;
          }

          .logo-text {
            font-size: 1rem;
            max-width: calc(100vw - 120px);
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .dropdown-menu {
            display: none !important;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="nav-container">
          
          {/* LOGO */}
          <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
            <img
              src="/brand-logo.png"
              alt="Galacticos Network"
              className="logo-img"
            />
            <div className="logo-text">
              GALACTICOS <span>NETWORK</span>
            </div>
          </Link>

          {/* HAMBURGER */}
          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <line></line>
            <line></line>
            <line></line>
          </button>

          {/* NAV */}
          <nav className="nav-menu">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about-us">ABOUT US</Link>

            <div className="dropdown">
              <div className="dropdown-trigger">
                SERVICES <span className="arrow">▼</span>
              </div>

              <div className="dropdown-menu">
                <Link to="/services/application-engineering">Application Engineering</Link>
                <Link to="/services/cloud">Cloud Solutions</Link>
                <Link to="/services/devops">DevOps & Automation</Link>
                <Link to="/services/data-engineering">Data Engineering</Link>
                <Link to="/services/cloud-saas">Cloud SaaS</Link>
                <Link to="/services/quality-engineering">Quality Engineering</Link>
                <Link to="/services/ui-ux">UX / UI Design</Link>
                <Link to="/services/mobility">Mobility</Link>
              </div>
            </div>

            <Link className="nav-link" to="/investors">INVESTORS</Link>
            <Link className="nav-link" to="/careers">CAREERS</Link>
            <Link className="nav-link contact-btn" to="/contact">CONTACT US</Link>
          </nav>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about-us" className="nav-link" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          
          <div className="dropdown">
            <div 
              className="dropdown-trigger"
              onClick={() => {
                const el = document.querySelector('.mobile-dropdown-menu');
                el?.classList.toggle('open');
              }}
            >
              SERVICES <span className="arrow">▼</span>
            </div>
            <div className="mobile-dropdown-menu">
              <Link to="/services/application-engineering" onClick={() => setMenuOpen(false)}>Application Engineering</Link>
              <Link to="/services/cloud" onClick={() => setMenuOpen(false)}>Cloud Solutions</Link>
              <Link to="/services/devops" onClick={() => setMenuOpen(false)}>DevOps & Automation</Link>
              <Link to="/services/data-engineering" onClick={() => setMenuOpen(false)}>Data Engineering</Link>
              <Link to="/services/cloud-saas" onClick={() => setMenuOpen(false)}>Cloud SaaS</Link>
              <Link to="/services/quality-engineering" onClick={() => setMenuOpen(false)}>Quality Engineering</Link>
              <Link to="/services/ui-ux" onClick={() => setMenuOpen(false)}>UX / UI Design</Link>
              <Link to="/services/mobility" onClick={() => setMenuOpen(false)}>Mobility</Link>
            </div>
          </div>

          <Link to="/investors" className="nav-link" onClick={() => setMenuOpen(false)}>INVESTORS</Link>
          <Link to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>CAREERS</Link>
          <Link to="/contact" className="contact-btn" style={{textAlign: 'center', marginTop: '10px'}} onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        </div>
      </header>
    </>
  );
}
