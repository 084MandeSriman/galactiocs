import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaCogs,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaVial,
} from "react-icons/fa";

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="services-section">
      <style>{`
        .services-section {
          position: relative;
          padding: 80px 6%;
          background:
            linear-gradient(
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.65)
            ),
            url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #fff;
        }

        .services-title {
          max-width: 1000px;
          margin: 0 auto 60px;
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          line-height: 1.2;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          perspective: 1000px;
        }

        .flip-card {
          height: 250px;
          cursor: pointer;
          position: relative;
        }

        .flip-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .flip-card:hover::before {
          opacity: 1;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          backface-visibility: hidden;
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          overflow: hidden;
        }

        .flip-front::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0%, 100% { transform: translate(-25%, -25%) scale(0.8); opacity: 0; }
          50% { transform: translate(0%, 0%) scale(1); opacity: 1; }
        }

        .card-svg-bg {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          pointer-events: none;
          overflow: hidden;
        }

        .card-svg-bg svg {
          width: 100%;
          height: 100%;
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        @keyframes flowData {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }

        .flip-front {
          align-items: center;
          text-align: center;
        }

        .flip-back {
          transform: rotateY(180deg);
        }

        .service-icon {
          font-size: 32px;
          margin-bottom: 12px;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
          position: relative;
          z-index: 1;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .flip-front h3 {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .flip-back ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
        }

        .flip-back ul li {
          padding: 8px 12px;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 8px;
          margin-bottom: 4px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(5px);
        }

        .flip-back ul li:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.15);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .flip-back ul li::before {
          content: "→ ";
          margin-right: 8px;
          font-weight: bold;
          transition: transform 0.3s;
          display: inline-block;
        }

        .flip-back ul li:hover::before {
          transform: translateX(4px);
        }

        /* Different Card Colors */
        .card1 { background: linear-gradient(135deg, rgba(99,102,241,0.7), rgba(59,130,246,0.7)); }
        .card2 { background: linear-gradient(135deg, rgba(16,185,129,0.7), rgba(6,182,212,0.7)); }
        .card3 { background: linear-gradient(135deg, rgba(244,114,182,0.7), rgba(139,92,246,0.7)); }
        .card4 { background: linear-gradient(135deg, rgba(234,179,8,0.7), rgba(249,115,22,0.7)); }
        .card5 { background: linear-gradient(135deg, rgba(14,165,233,0.7), rgba(99,102,241,0.7)); }
        .card6 { background: linear-gradient(135deg, rgba(20,184,166,0.7), rgba(16,185,129,0.7)); }
        .card7 { background: linear-gradient(135deg, rgba(168,85,247,0.7), rgba(236,72,153,0.7)); }
        .card8 { background: linear-gradient(135deg, rgba(71,85,105,0.7), rgba(30,64,175,0.7)); }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .services-section {
            padding: 70px 5%;
          }
          .services-title {
            font-size: 36px;
            margin-bottom: 50px;
          }
          .services-grid {
            gap: 20px;
          }
          .flip-card {
            height: 230px;
          }
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
          .services-section {
            padding: 60px 4%;
          }
          .services-title {
            font-size: 32px;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 50px 4%;
          }
          .services-title {
            font-size: 28px;
            margin-bottom: 40px;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .flip-card {
            height: 200px;
          }
          .flip-front, .flip-back {
            padding: 16px;
            border-radius: 12px;
          }
          .service-icon {
            font-size: 26px;
            margin-bottom: 8px;
          }
          .flip-front h3 {
            font-size: 14px;
          }
          .flip-back ul {
            font-size: 12px;
            line-height: 1.4;
          }
        }

        @media (max-width: 640px) {
          .services-section {
            padding: 40px 3%;
          }
          .services-title {
            font-size: 24px;
            margin-bottom: 30px;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .flip-card {
            height: 180px;
          }
          .flip-front, .flip-back {
            padding: 14px;
          }
          .service-icon {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 35px 3%;
          }
          .services-title {
            font-size: 20px;
            margin-bottom: 25px;
            font-weight: 700;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .flip-card {
            height: 160px;
          }
          .flip-front, .flip-back {
            padding: 12px;
            border-radius: 10px;
          }
          .service-icon {
            font-size: 20px;
            margin-bottom: 6px;
          }
          .flip-front h3 {
            font-size: 13px;
          }
          .flip-back ul {
            font-size: 11px;
            line-height: 1.3;
          }
        }

        @media (max-width: 360px) {
          .services-section {
            padding: 30px 3%;
          }
          .services-title {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .flip-card {
            height: 150px;
          }
          .flip-front, .flip-back {
            padding: 10px;
            border-radius: 8px;
          }
          .service-icon {
            font-size: 18px;
            margin-bottom: 4px;
          }
          .flip-front h3 {
            font-size: 12px;
            line-height: 1.2;
          }
          .flip-back ul {
            font-size: 10px;
            line-height: 1.2;
          }
        }
      `}</style>

      <h2 className="services-title">
        Delivering Technology Transformation And Cost Optimization
      </h2>

      <div className="services-grid">

        {[
          {
            title: "Application Engineering",
            icon: <FaCode />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad1"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><circle cx="100" cy="100" r="70" fill="none" stroke="url(#grad1)" strokeWidth="2"/><circle cx="100" cy="100" r="50" fill="none" stroke="url(#grad1)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite'}}/><circle cx="100" cy="100" r="30" fill="none" stroke="url(#grad1)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite 0.5s'}}/><line x1="30" y1="100" x2="170" y2="100" stroke="url(#grad1)" strokeWidth="2"/><line x1="100" y1="30" x2="100" y2="170" stroke="url(#grad1)" strokeWidth="2"/><circle cx="30" cy="100" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="170" cy="100" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.5s'}}/><circle cx="100" cy="30" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1s'}}/><circle cx="100" cy="170" r="10" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.5s'}}/><path d="M30 100 Q65 70 100 100 T170 100" fill="none" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" style={{animation: 'flowData 3s linear infinite'}}/></svg>,
            subServices: [
              { name: "Transformations", path: "/services/application-engineering/transformations" },
              { name: "Modern Development", path: "/services/application-engineering/modern-development" },
              { name: "Lifecycle Management", path: "/services/application-engineering/lifecycle-management" }
            ],
            className: "card1"
          },
          {
            title: "Cloud SaaS",
            icon: <FaCloud />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad2"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><path d="M40 110 Q40 70 70 70 Q70 40 100 40 Q130 40 130 70 Q160 70 160 110 Q160 140 130 140 L50 140 Q40 140 40 110" fill="white" fillOpacity="0.1" stroke="url(#grad2)" strokeWidth="2" style={{animation: 'pulse 4s ease-in-out infinite'}}/><path d="M60 120 Q60 90 85 90 Q85 65 110 65 Q135 65 135 90 Q150 90 150 120 Q150 145 135 145 L65 145 Q60 145 60 120" fill="white" fillOpacity="0.15" stroke="url(#grad2)" strokeWidth="1.5" style={{animation: 'pulse 4s ease-in-out infinite 0.5s'}}/><circle cx="70" cy="95" r="5" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="100" cy="105" r="5" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.7s'}}/><circle cx="130" cy="100" r="5" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.4s'}}/><path d="M100 150 L100 170 M95 165 L100 170 L105 165" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" style={{animation: 'pulse 2s ease-in-out infinite'}}/></svg>,
            subServices: [
              { name: "Veeva", path: "/services/cloud-saas/veeva" },
              { name: "Workday", path: "/services/cloud-saas/workday" },
              { name: "Salesforce", path: "/services/cloud-saas/salesforce" }
            ],
            className: "card2"
          },
          {
            title: "Cloud",
            icon: <FaCloud />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad3"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><rect x="50" y="70" width="100" height="70" rx="10" fill="white" fillOpacity="0.1" stroke="url(#grad3)" strokeWidth="2"/><rect x="60" y="80" width="80" height="50" rx="6" fill="white" fillOpacity="0.15" stroke="url(#grad3)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><path d="M100 60 L100 35 M85 50 L100 35 L115 50" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="100" cy="30" r="8" fill="white" opacity="0.6" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="70" cy="95" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.3s'}}/><circle cx="90" cy="105" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.6s'}}/><circle cx="110" cy="95" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.9s'}}/><circle cx="130" cy="105" r="4" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.2s'}}/></svg>,
            subServices: [
              { name: "AWS", path: "/services/cloud/aws" },
              { name: "Azure", path: "/services/cloud/azure" },
              { name: "GCP", path: "/services/cloud/gcp" },
              { name: "Migration", path: "/services/cloud/migration" }
            ],
            className: "card3"
          },
          {
            title: "Quality Engineering",
            icon: <FaVial />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad4"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad4)" strokeWidth="2.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><circle cx="100" cy="100" r="40" fill="none" stroke="url(#grad4)" strokeWidth="2" opacity="0.6"/><path d="M65 100 L85 120 L135 70" stroke="white" strokeWidth="4" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="120" strokeDashoffset="120" style={{animation: 'flowData 2s ease-in-out infinite'}}/><circle cx="100" cy="100" r="20" fill="white" fillOpacity="0.1" style={{animation: 'pulse 2s ease-in-out infinite 0.5s'}}/><path d="M100 50 L100 70 M100 130 L100 150 M50 100 L70 100 M130 100 L150 100" stroke="url(#grad4)" strokeWidth="2" opacity="0.4" strokeLinecap="round"/></svg>,
            subServices: [
              { name: "Automation Testing", path: "/services/quality-engineering/automation" },
              { name: "Continuous Testing", path: "/services/quality-engineering/continuous-testing" },
              { name: "Performance Testing", path: "/services/quality-engineering/performance" }
            ],
            className: "card4"
          },
          {
            title: "Data Engineering",
            icon: <FaDatabase />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad5"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><ellipse cx="100" cy="70" rx="60" ry="18" fill="white" fillOpacity="0.1" stroke="url(#grad5)" strokeWidth="2"/><ellipse cx="100" cy="95" rx="60" ry="18" fill="white" fillOpacity="0.12" stroke="url(#grad5)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite'}}/><ellipse cx="100" cy="120" rx="60" ry="18" fill="white" fillOpacity="0.15" stroke="url(#grad5)" strokeWidth="2" style={{animation: 'pulse 3s ease-in-out infinite 0.5s'}}/><line x1="40" y1="70" x2="40" y2="120" stroke="url(#grad5)" strokeWidth="2"/><line x1="160" y1="70" x2="160" y2="120" stroke="url(#grad5)" strokeWidth="2"/><circle cx="100" cy="70" r="6" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="100" cy="95" r="6" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 0.7s'}}/><circle cx="100" cy="120" r="6" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite 1.4s'}}/><path d="M70 140 L100 155 L130 140" stroke="url(#grad5)" strokeWidth="2" fill="none" opacity="0.4"/></svg>,
            subServices: [
              { name: "ETL", path: "/services/data-engineering/etl" },
              { name: "Data Lakes", path: "/services/data-engineering/data-lakes" },
              { name: "Warehousing", path: "/services/data-engineering/warehousing" },
              { name: "Analytics", path: "/services/data-engineering/analytics" }
            ],
            className: "card5"
          },
          {
            title: "DevOps",
            icon: <FaCogs />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad6"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><g style={{animation: 'rotate360 10s linear infinite', transformOrigin: '60px 100px'}}><circle cx="60" cy="100" r="25" fill="none" stroke="url(#grad6)" strokeWidth="2"/><path d="M60 80 L60 90 M50 85 L60 80 L70 85" stroke="white" strokeWidth="2" opacity="0.5"/><path d="M60 110 L60 120 M50 115 L60 120 L70 115" stroke="white" strokeWidth="2" opacity="0.5"/></g><g style={{animation: 'rotate360 8s linear infinite reverse', transformOrigin: '100px 100px'}}><circle cx="100" cy="100" r="25" fill="none" stroke="url(#grad6)" strokeWidth="2"/><path d="M100 80 L100 90 M90 85 L100 80 L110 85" stroke="white" strokeWidth="2" opacity="0.5"/><path d="M100 110 L100 120 M90 115 L100 120 L110 115" stroke="white" strokeWidth="2" opacity="0.5"/></g><g style={{animation: 'rotate360 10s linear infinite', transformOrigin: '140px 100px'}}><circle cx="140" cy="100" r="25" fill="none" stroke="url(#grad6)" strokeWidth="2"/><path d="M140 80 L140 90 M130 85 L140 80 L150 85" stroke="white" strokeWidth="2" opacity="0.5"/><path d="M140 110 L140 120 M130 115 L140 120 L150 115" stroke="white" strokeWidth="2" opacity="0.5"/></g><path d="M85 100 L75 100" stroke="url(#grad6)" strokeWidth="2" opacity="0.4"/><path d="M125 100 L115 100" stroke="url(#grad6)" strokeWidth="2" opacity="0.4"/></svg>,
            subServices: [
              { name: "CI/CD", path: "/services/devops/cicd" },
              { name: "Kubernetes", path: "/services/devops/kubernetes" },
              { name: "Infrastructure as Code", path: "/services/devops/iac" },
              { name: "Monitoring", path: "/services/devops/monitoring" }
            ],
            className: "card6"
          },
          {
            title: "UX / UI",
            icon: <FaCode />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad7"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><rect x="40" y="50" width="120" height="100" rx="10" fill="white" fillOpacity="0.08" stroke="url(#grad7)" strokeWidth="2"/><rect x="50" y="65" width="45" height="30" rx="6" fill="white" fillOpacity="0.2" stroke="url(#grad7)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><rect x="105" y="65" width="45" height="30" rx="6" fill="white" fillOpacity="0.2" stroke="url(#grad7)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite 0.5s'}}/><line x1="50" y1="110" x2="150" y2="110" stroke="url(#grad7)" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/><line x1="50" y1="125" x2="130" y2="125" stroke="url(#grad7)" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/><line x1="50" y1="140" x2="110" y2="140" stroke="url(#grad7)" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/><circle cx="70" cy="80" r="8" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite'}}/><circle cx="125" cy="80" r="8" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite 0.5s'}}/></svg>,
            subServices: [
              { name: "UX Strategy", path: "/services/ui-ux/ux-strategy" },
              { name: "Frontend Engineering", path: "/services/ui-ux/frontend" },
              { name: "Design Systems", path: "/services/ui-ux/design-systems" }
            ],
            className: "card7"
          },
          {
            title: "Mobility",
            icon: <FaMobileAlt />,
            svg: <svg viewBox="0 0 200 200"><defs><linearGradient id="grad8"><stop offset="0%" stopColor="white" stopOpacity="0.6"/><stop offset="100%" stopColor="white" stopOpacity="0.2"/></linearGradient></defs><rect x="65" y="30" width="70" height="140" rx="12" fill="white" fillOpacity="0.08" stroke="url(#grad8)" strokeWidth="2.5"/><rect x="75" y="50" width="50" height="95" rx="6" fill="white" fillOpacity="0.15" stroke="url(#grad8)" strokeWidth="1.5" style={{animation: 'pulse 3s ease-in-out infinite'}}/><circle cx="100" cy="155" r="8" fill="white" opacity="0.5" style={{animation: 'pulse 2s ease-in-out infinite'}}/><rect x="85" y="38" width="30" height="5" rx="2.5" fill="white" opacity="0.4"/><circle cx="115" cy="40" r="3" fill="white" opacity="0.4"/><rect x="85" y="65" width="30" height="3" rx="1.5" fill="white" opacity="0.3"/><rect x="85" y="75" width="30" height="3" rx="1.5" fill="white" opacity="0.3"/><rect x="85" y="85" width="20" height="3" rx="1.5" fill="white" opacity="0.3"/><circle cx="90" cy="105" r="6" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite 0.3s'}}/><circle cx="110" cy="105" r="6" fill="white" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite 0.6s'}}/></svg>,
            subServices: [
              { name: "Native Apps", path: "/services/mobility/native" },
              { name: "Cross Platform", path: "/services/mobility/cross-platform" },
              { name: "Enterprise Mobility", path: "/services/mobility/enterprise" }
            ],
            className: "card8"
          }
        ].map((service, index) => (
          <div key={index} className="flip-card">
            <div className="flip-inner">
              <div className={`flip-front ${service.className}`}>
                <div className="card-svg-bg">{service.svg}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className={`flip-back ${service.className}`}>
                <ul>
                  {service.subServices.map((sub, i) => (
                    <li key={i} onClick={(e) => { e.stopPropagation(); navigate(sub.path); }}>
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
