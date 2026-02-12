export default function OfficesSection() {
  return (
    <section id="offices" className="offices-section">
      <style>{`
        .offices-section {
          position: relative;
          padding: 70px 6%;
          background:
            linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)),
            url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1800&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          color: #1f2937;
          overflow: hidden;
        }

        .offices-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 55px;
        }

        .offices-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .offices-subtitle {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.7;
        }

        .offices-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .office-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 26px;
          font-size: 13px;
          line-height: 1.65;
          color: #4b5563;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          position: relative;
          transition: all 0.4s ease;
        }

        .office-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 14px 14px 0 0;
        }

        .office-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .office-card:hover::before {
          opacity: 1;
        }

        .office-title {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.8px;
          margin-bottom: 12px;
          color: #111827;
          text-transform: uppercase;
        }

        .office-card p {
          margin-bottom: 6px;
          font-size: 12.5px;
        }

        .office-card p:last-child {
          margin-bottom: 0;
        }

        /* Subtle glow */
        .glow {
          position: absolute;
          width: 280px;
          height: 280px;
          background: rgba(37,99,235,0.12);
          filter: blur(100px);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .glow.one {
          top: -100px;
          left: -100px;
        }

        .glow.two {
          bottom: -100px;
          right: -100px;
          background: rgba(236,72,153,0.12);
        }

        /* RESPONSIVE */
        @media (max-width: 1400px) {
          .offices-section {
            padding: 65px 5%;
          }
          .offices-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
          }
          .office-card {
            padding: 22px;
          }
        }

        @media (max-width: 1200px) {
          .offices-section {
            padding: 60px 5%;
          }
          .offices-title {
            font-size: 36px;
          }
          .offices-header {
            margin-bottom: 45px;
          }
          .offices-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 1024px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .office-card {
            padding: 20px;
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .offices-section {
            padding: 50px 4%;
          }
          .offices-title {
            font-size: 28px;
            margin-bottom: 10px;
          }
          .offices-subtitle {
            font-size: 14px;
          }
          .offices-header {
            margin-bottom: 35px;
          }
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .office-card {
            padding: 18px;
            border-radius: 10px;
          }
          .office-title {
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.6px;
          }
          .office-card p {
            margin-bottom: 4px;
            font-size: 11px;
          }
        }

        @media (max-width: 640px) {
          .offices-section {
            padding: 40px 3%;
          }
          .offices-title {
            font-size: 24px;
          }
          .offices-subtitle {
            font-size: 13px;
            line-height: 1.6;
          }
          .offices-header {
            margin-bottom: 28px;
          }
          .offices-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .office-card {
            padding: 16px;
            font-size: 11px;
          }
          .office-title {
            font-size: 11px;
            margin-bottom: 8px;
          }
          .office-card p {
            font-size: 10px;
            margin-bottom: 3px;
          }

          .glow {
            width: 240px;
            height: 240px;
            filter: blur(80px);
          }

          .glow.one {
            top: -80px;
            left: -80px;
          }

          .glow.two {
            bottom: -80px;
            right: -80px;
          }
        }

        @media (max-width: 480px) {
          .offices-section {
            padding: 30px 3%;
          }
          .offices-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .offices-subtitle {
            font-size: 12px;
          }
          .offices-header {
            margin-bottom: 24px;
          }
          .offices-grid {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .office-card {
            padding: 14px;
            border-radius: 8px;
          }
          .office-title {
            font-size: 10px;
            margin-bottom: 6px;
            letter-spacing: 0.5px;
          }
          .office-card p {
            font-size: 9px;
            line-height: 1.4;
            margin-bottom: 2px;
          }
        }

        @media (max-width: 360px) {
          .offices-section {
            padding: 25px 3%;
          }
          .offices-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 6px;
          }
          .offices-subtitle {
            font-size: 11px;
            line-height: 1.5;
          }
          .offices-header {
            margin-bottom: 20px;
          }
          .offices-grid {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .office-card {
            padding: 12px;
            border-radius: 6px;
          }
          .office-title {
            font-size: 9px;
            margin-bottom: 5px;
            letter-spacing: 0.3px;
          }
          .office-card p {
            font-size: 8px;
            line-height: 1.35;
            margin-bottom: 1px;
          }
          .glow {
            width: 200px;
            height: 200px;
            filter: blur(70px);
          }
        }
      `}</style>

      {/* Decorative glows */}
      <div className="glow one"></div>
      <div className="glow two"></div>

      {/* Header */}
      <div className="offices-header">
        <h2 className="offices-title">Our Global Offices</h2>
        <p className="offices-subtitle">
          Strategically located across continents, enabling us to deliver
          innovation and world-class solutions worldwide.
        </p>
      </div>

      {/* Offices */}
      <div className="offices-grid">
        <div className="office-card">
          <div className="office-title">HYDERABAD · INDIA</div>
          <p>
            Plot #111, 1st Floor, Road #10,<br />
            Jubilee Hills, Hyderabad – 500 033
          </p>
          <p>Phone: +91-40-67191000</p>
          <p>info@sagarsoft.in</p>
        </div>

        <div className="office-card">
          <div className="office-title">BANGALORE · INDIA</div>
          <p>
            91springboard, 4th Floor,<br />
            Residency Road, MG Road,<br />
            Bengaluru – 560025
          </p>
          <p>info@sagarsoft.in</p>
        </div>

        <div className="office-card">
          <div className="office-title">NEW YORK · USA</div>
          <p>
            113-25 Queens Blvd, Suite<br />
            #114 & #116, Forest Hills, NY 11375
          </p>
          <p>Phone: +1 718-746-3860</p>
          <p>info@sagarsoft.com</p>
        </div>

        <div className="office-card">
          <div className="office-title">CONNECTICUT · USA</div>
          <p>
            Sagarsoft Inc<br />
            200 Glastonbury Blvd, Suite #304,<br />
            Glastonbury, CT 06033
          </p>
          <p>Phone: +1 860-633-2025</p>
          <p>info@sagarsoft.com</p>
        </div>

        <div className="office-card">
          <div className="office-title">NEW JERSEY · USA</div>
          <p>
            Infoway Software<br />
            388 Washington Road, Suite A,<br />
            Sayreville, NJ 08872
          </p>
          <p>Phone: +1 732-238-2120</p>
          <p>
            A wholly owned subsidiary of<br />
            Sagarsoft (India) Limited
          </p>
        </div>
      </div>
    </section>
  );
}