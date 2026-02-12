export default function Footer() {
  return (
    <footer className="footer-section">
      <style>{`
        .footer-section {
          position: relative;
          background: #f6f6f4;
          color: #4b5563;
          overflow: hidden;
        }

        /* WORLD MAP BACKGROUND */
        .footer-map-bg {
          position: absolute;
          inset: 0;
          background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 75%;
          opacity: 0.08; /* light transparent */
          pointer-events: none;
        }

        .footer-top {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 6%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          align-items: flex-start;
          z-index: 1;
        }

        .footer-links ul,
        .footer-services ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          font-weight: 500;
        }

        .footer-links li,
        .footer-services li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: #0056b3;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .footer-links a:hover {
          opacity: 0.7;
        }

        .footer-services h4 {
          font-size: 13px;
          font-weight: 600;
          color: #0056b3;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .footer-divider {
          border-top: 1px solid #d1d5db;
          position: relative;
          z-index: 1;
        }

        .footer-bottom {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #6b7280;
          gap: 16px;
          flex-wrap: wrap;
          z-index: 1;
        }

        .footer-legal {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-legal a {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal a:hover {
          color: #0056b3;
        }

        .footer-social {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .footer-social a {
          color: #6b7280;
          transition: color 0.3s ease;
          display: inline-flex;
        }

        .footer-social a:hover {
          color: #0056b3;
        }

        .footer-social svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .footer-top {
            padding: 36px 5%;
            gap: 32px;
          }
          .footer-bottom {
            padding: 18px 5%;
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            padding: 28px 4%;
            gap: 20px;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            padding: 16px 4%;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
            gap: 8px;
          }

          .footer-social {
            justify-content: center;
            gap: 12px;
          }

          .footer-social svg {
            width: 16px;
            height: 16px;
          }

          .footer-links ul,
          .footer-services ul {
            font-size: 12px;
          }

          .footer-services h4 {
            font-size: 12px;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .footer-top {
            padding: 20px 3%;
            gap: 16px;
          }

          .footer-bottom {
            padding: 12px 3%;
            font-size: 11px;
            gap: 8px;
          }

          .footer-legal {
            gap: 6px;
          }

          .footer-links li,
          .footer-services li {
            margin-bottom: 6px;
          }

          .footer-social {
            gap: 10px;
          }

          .footer-social svg {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>

      {/* WORLD MAP BACKGROUND */}
      <div className="footer-map-bg"></div>

      {/* TOP FOOTER */}
      <div className="footer-top">
        {/* QUICK LINKS */}
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

        {/* EMPTY CENTER (MAP IS BACKGROUND) */}
        <div></div>

        {/* SERVICES */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/application-engineering" style={{color: '#374151', textDecoration: 'none'}}>– Application Engineering</a></li>
            <li><a href="/services/cloud" style={{color: '#374151', textDecoration: 'none'}}>– Cloud</a></li>
            <li><a href="/services/devops" style={{color: '#374151', textDecoration: 'none'}}>– DevOps</a></li>
            <li><a href="/services/data-engineering" style={{color: '#374151', textDecoration: 'none'}}>– Data Engineering</a></li>
            <li><a href="/services/cloud-saas" style={{color: '#374151', textDecoration: 'none'}}>– Cloud SaaS</a></li>
            <li><a href="/services/quality-engineering" style={{color: '#374151', textDecoration: 'none'}}>– Quality Engineering</a></li>
            <li><a href="/services/ui-ux" style={{color: '#374151', textDecoration: 'none'}}>– UX / UI</a></li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div>© 2026 Sagarsoft. All Rights Reserved</div>

        <div className="footer-legal">
          <a href="/disclaimer">Disclaimer</a>
          <span>|</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms</a>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24">
              <path d="M18.244 2H21l-6.746 7.73L22.5 22h-6.5l-5.088-6.198L5.44 22H2.682l7.215-8.261L1.5 2h6.668l4.596 5.57L18.244 2z"/>
            </svg>
          </a>

          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.814 20.452H3.861V9h2.953v11.452z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}