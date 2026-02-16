export default function Footer() {
  return (
    <footer className="footer-section">
      <style>{`
        .footer-section {
          position: relative;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: #ffffff;
          overflow: hidden;
          box-shadow: 0 -6px 30px rgba(0,0,0,0.4);
        }

        /* COMPACT MAP BACKGROUND */
        .footer-map-bg {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 30% 70%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(239,68,68,0.06) 0%, transparent 50%),
            url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 75%;
          filter: brightness(0) saturate(100%) invert(92%) sepia(5%) saturate(1400%) hue-rotate(175deg) brightness(105%) contrast(85%);
          opacity: 0.1;
          pointer-events: none;
          animation: mapFloat 15s ease-in-out infinite alternate;
        }

        @keyframes mapFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-8px) scale(1.02); }
        }

        /* COMPACT MAP PINS */
        .map-pin {
          position: absolute;
          width: 24px;
          height: 24px;
          z-index: 2;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: pinPulse 1.8s ease-in-out infinite;
        }

        .map-pin:hover { transform: scale(1.2) translateY(-4px); }

        @keyframes pinPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .map-pin svg { fill: #ef4444; filter: drop-shadow(0 4px 8px rgba(239,68,68,0.5)); }

        .map-pin-label {
          position: absolute;
          top: 28px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255,255,255,0.9);
          padding: 4px 8px;
          border-radius: 6px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          opacity: 0;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .map-pin:hover .map-pin-label {
          opacity: 1;
          transform: translateX(-50%) translateY(-2px);
        }

        .pin-hyderabad { top: 44%; left: 65%; }
        .pin-dubai { top: 42%; left: 58%; }
        .pin-raleigh { top: 35%; left: 25%; }

        /* COMPACT TOP FOOTER */
        .footer-top {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 6% 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          align-items: flex-start;
          z-index: 2;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 14px;
          font-weight: 500;
        }

        .footer-links li { margin-bottom: 10px; }

        .footer-links a {
          color: #ffffff;
          text-decoration: none;
          padding: 8px 10px 8px 0;
          border-radius: 6px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        .footer-links a:hover {
          color: #fee2e2;
          background: rgba(239,68,68,0.12);
          padding-left: 16px;
          transform: translateX(3px);
        }

        .footer-links a:hover::before { width: calc(100% - 16px); }

        /* COMPACT SERVICES - NO DASHES */
        .footer-services h4 {
          font-size: 14px;
          font-weight: 800;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
        }

        .footer-services h4::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 36px;
          height: 2px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          border-radius: 1px;
        }

        .footer-services ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          font-weight: 500;
        }

        .footer-services li { margin-bottom: 8px; }

        .footer-services a {
          color: #e2e8f0;
          text-decoration: none;
          padding: 8px 12px;
          display: block;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          position: relative;
        }

        .footer-services a::before {
          content: '→';
          position: absolute;
          left: 12px;
          color: #ef4444;
          font-weight: 800;
          font-size: 12px;
          transition: transform 0.3s ease;
        }

        .footer-services a:hover {
          color: #ffffff;
          background: rgba(239,68,68,0.18);
          border-color: rgba(239,68,68,0.25);
          transform: translateX(6px);
          box-shadow: 0 6px 20px rgba(239,68,68,0.25);
        }

        .footer-services a:hover::before { transform: translateX(6px); }

        /* COMPACT DIVIDER */
        .footer-divider {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), rgba(239,68,68,0.3), rgba(255,255,255,0.15), transparent);
          margin: 0 auto 2px;
          max-width: 1400px;
          width: 90%;
          z-index: 2;
        }

        /* COMPACT BOTTOM FOOTER */
        .footer-bottom {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #e2e8f0;
          gap: 20px;
          flex-wrap: wrap;
          z-index: 2;
        }

        .footer-bottom > div:first-child {
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-legal {
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
        }

        .footer-legal a:hover {
          color: #ffffff;
          background: rgba(239,68,68,0.18);
          border-color: rgba(239,68,68,0.25);
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(239,68,68,0.2);
        }

        .footer-legal span { color: rgba(255,255,255,0.5); font-weight: 600; }

        /* COMPACT SOCIAL */
        .footer-social {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .footer-social a {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-social a:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 30px rgba(239,68,68,0.3);
          background: rgba(255,255,255,0.2);
          border-color: rgba(239,68,68,0.3);
        }

        .footer-social svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .footer-social a:hover svg { transform: scale(1.1) rotate(3deg); }

        /* RESPONSIVE COMPACT */
        @media (max-width: 1024px) {
          .footer-top { padding: 32px 5% 24px; gap: 28px; }
          .footer-bottom { padding: 18px 5%; font-size: 13px; }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            padding: 30px 4% 24px;
            gap: 24px;
            text-align: center;
          }
          .footer-bottom {
            flex-direction: column;
            padding: 20px 4%;
            gap: 18px;
          }
          .footer-legal { order: 3; justify-content: center; gap: 16px; }
          .footer-social { order: 2; justify-content: 50%; gap: 12px; }
          .footer-social a { width: 40px; height: 40px; }
        }

        @media (max-width: 480px) {
          .footer-top { padding: 25px 3% 20px; gap: 20px; }
          .footer-bottom { padding: 16px 3%; font-size: 12px; gap: 16px; }
          .footer-legal { gap: 12px; flex-direction: column; }
        }
      `}</style>

      {/* MAP BACKGROUND */}
      <div className="footer-map-bg"></div>

      {/* COMPACT MAP PINS */}
      <div className="map-pin pin-hyderabad">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span className="map-pin-label">Hyderabad</span>
      </div>

      <div className="map-pin pin-dubai">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span className="map-pin-label">Dubai</span>
      </div>

      <div className="map-pin pin-raleigh">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span className="map-pin-label">Raleigh</span>
      </div>

      {/* COMPACT TOP FOOTER */}
      <div className="footer-top">
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/#case-studies">Case Studies</a></li>
            <li><a href="/subsidiary">Subsidiary</a></li>
          </ul>
        </div>

        <div></div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/application-engineering">Application Engineering</a></li>
            <li><a href="/services/cloud">Cloud</a></li>
            <li><a href="/services/devops">DevOps</a></li>
            <li><a href="/services/data-engineering">Data Engineering</a></li>
            <li><a href="/services/cloud-saas">Cloud SaaS</a></li>
            <li><a href="/services/quality-engineering">Quality Engineering</a></li>
            <li><a href="/services/ui-ux">UX / UI</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* COMPACT BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div>© 2026 Sagarsoft. All Rights Reserved</div>

        <div className="footer-legal">
          <a href="/disclaimer">Disclaimer</a>
          <span>|</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms</a>
        </div>

        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24"><path d="M18.244 2H21l-6.746 7.73L22.5 22h-6.5l-5.088-6.198L5.44 22H2.682l7.215-8.261L1.5 2h6.668l4.596 5.57L18.244 2z"/></svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/galacticos-network/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.814 20.452H3.861V9h2.953v11.452z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
