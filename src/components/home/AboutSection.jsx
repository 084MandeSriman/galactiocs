import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const COUNT = 35;
    const MAX_DIST = 120;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: 1.5 + Math.random() * 2,
      });
    }

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        40,
        canvas.width / 2,
        canvas.height / 2,
        300
      );
      gradient.addColorStop(0, "rgba(0,120,255,0.15)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const m = particles[j];
          const dist = Math.hypot(p.x - m.x, p.y - m.y);

          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(0,120,255,${1 - dist / MAX_DIST})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,120,255,0.9)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0,120,255,0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 100px 8%;
          gap: 80px;
          background: linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);
        }

        .about-left {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .about-canvas {
          width: 100%;
          max-width: 500px;
          height: 350px;
          border-radius: 20px;
          background: rgba(0,120,255,0.05);
          box-shadow: 0 20px 60px rgba(0,120,255,0.15);
        }

        .about-right {
          flex: 1;
          max-width: 600px;
        }

        .about-right h2 {
          font-size: 42px;
          font-weight: 700;
          color: #003f88;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .about-right p {
          font-size: 17px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .highlight-box {
          margin-top: 20px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 30px;
          background: rgba(0,120,255,0.08);
          color: #005a9c;
          font-weight: 600;
          font-size: 14px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0078ff;
          box-shadow: 0 0 12px rgba(0,120,255,0.8);
        }

        .about-btn {
          display: inline-block;
          margin-top: 30px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #0078ff, #003f88);
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 30px;
          box-shadow: 0 8px 24px rgba(0,120,255,0.3);
          transition: 0.3s;
        }

        .about-btn:hover {
          transform: translateY(-3px);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-section {
            padding: 80px 6%;
            gap: 50px;
          }

          .about-right h2 {
            font-size: 34px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
            text-align: center;
            padding: 60px 5%;
          }

          .about-right {
            max-width: 100%;
          }

          .about-right h2 {
            font-size: 28px;
          }

          .about-right p {
            font-size: 15px;
          }

          .about-canvas {
            height: 280px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .about-right h2 {
            font-size: 22px;
          }

          .about-right p {
            font-size: 14px;
          }

          .about-canvas {
            height: 220px;
          }
        }
      `}</style>

      <section className="about-section">
        {/* LEFT SIDE ANIMATION */}
        <div className="about-left">
          <canvas ref={canvasRef} className="about-canvas" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-right">
          <h2>We are technology experts and problem solvers</h2>

          <p>
            For nearly <strong>three decades</strong>, we’ve been deploying our
            technology expertise in continuous value creation.
          </p>

          <p>
            Our digital engineering solutions are crafted to deliver scalable,
            resilient, and future-ready transformations.
          </p>

          <div className="highlight-box">
            <span className="dot"></span>
            Trusted Digital Engineering Partner
          </div>

          <Link to="/contact" className="about-btn">
            Connect With Us
          </Link>
        </div>
      </section>
    </>
  );
}