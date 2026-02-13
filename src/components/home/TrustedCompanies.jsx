export default function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <style>{`
        .trusted-companies {
          position: relative;
          background: 
            linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
            url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1800&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          padding: 30px 6%;
          border-top: 1px solid #e5e7eb;
        }

        .trusted-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .trusted-title {
          text-align: center;
          font-size: 18px;
          font-weight: 800;
          color: #6b7280;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .logo-item {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          transform: scale(1.05);
        }

        .logo-item img {
          max-width: 120px;
          max-height: 50px;
          object-fit: contain;
        }

        @media (max-width: 1024px) {
          .logos-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .trusted-companies {
            padding: 25px 4%;
          }
          .trusted-title {
            font-size: 16px;
            margin-bottom: 15px;
          }
          .logos-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .logo-item {
            height: 40px;
          }
          .logo-item img {
            max-width: 100px;
            max-height: 40px;
          }
        }

        @media (max-width: 480px) {
          .trusted-companies {
            padding: 20px 3%;
          }
          .trusted-title {
            font-size: 14px;
          }
          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .logo-item {
            height: 35px;
          }
          .logo-item img {
            max-width: 80px;
            max-height: 35px;
          }
        }
      `}</style>

      <div className="trusted-container">
        <h3 className="trusted-title">Our Trusted Companies</h3>
        <div className="logos-grid">
          <div className="logo-item">
            <img src="data:image/jpeg;base64,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" alt="HCL" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png" alt="Infosys" />
          </div>
          <div className="logo-item">
            <img src="https://i.pinimg.com/564x/05/43/29/054329d9f175094c212a2552a6081dff.jpg" alt="TCS" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/320px-Wipro_Primary_Logo_Color_RGB.svg.png" alt="Wipro" />
          </div>
          <div className="logo-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcb5V3vnQwiVWHNS9AftU2UH6xyl5CponqA&s" alt="Samsung" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png" alt="IBM" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png" alt="Microsoft" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="Google" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="Amazon" />
          </div>
          <div className="logo-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png" alt="Azure" />
          </div>
        </div>
      </div>
    </section>
  );
}
