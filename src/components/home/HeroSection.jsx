

// import React, { useEffect, useState, useCallback, useMemo } from "react";
// import { ChevronLeft, ChevronRight, Cpu, Activity, Globe, Shield, Database } from "lucide-react";
// import {
//   LineChart, Line, AreaChart, Area, BarChart, Bar,
//   ComposedChart, PieChart, Pie, Cell,
//   ResponsiveContainer
// } from "recharts";

// const generateData = () => 
//   Array.from({ length: 15 }, (_, i) => ({ 
//     name: i, 
//     val: Math.floor(Math.random() * 400) + 200,
//     val2: Math.floor(Math.random() * 200) + 150 
//   }));

// export default function PremiumVanguardHero() {
//   const [active, setActive] = useState(0);
//   const [data, setData] = useState(generateData());

//   // Real-time data movement jitter
//   useEffect(() => {
//     const jitter = setInterval(() => {
//       setData(prev => prev.map(item => ({
//         ...item,
//         val: Math.max(100, item.val + (Math.random() * 80 - 40)),
//         val2: Math.max(50, item.val2 + (Math.random() * 50 - 25))
//       })));
//     }, 1500);
//     return () => clearInterval(jitter);
//   }, []);

//   const slides = useMemo(() => [
//     {
//       title: "NEURAL NETWORK",
//       subtitle: "Edge-computing nodes processing petabytes of telemetry via AI nodes.",
//       label: "AI_NODE_ACTIVE",
//       icon: <Cpu size={18} />,
//       color: "#0ea5e9", // Light blue
//       bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
//       chart: (d) => (
//         <AreaChart data={d}>
//           <defs>
//             <linearGradient id="c1" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
//               <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
//             </linearGradient>
//           </defs>
//           <Area type="monotone" dataKey="val" stroke="#0ea5e9" strokeWidth={3} fill="url(#c1)" />
//         </AreaChart>
//       )
//     },
//     {
//       title: "MARKET VELOCITY",
//       subtitle: "High-frequency analysis across global crypto and equity exchanges.",
//       label: "MARKET_SYNC_04",
//       icon: <Activity size={18} />,
//       color: "#f43f5e", // Rose pink
//       bg: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1600&q=80",
//       chart: (d) => (
//         <BarChart data={d}>
//           <Bar dataKey="val" fill="#f43f5e" radius={[4, 4, 0, 0]} />
//           <Bar dataKey="val2" fill="rgba(0,0,0,0.08)" radius={[4, 4, 0, 0]} />
//         </BarChart>
//       )
//     },
//     {
//       title: "GLOBAL MESH",
//       subtitle: "Zero-latency peering across 12 availability zones world-wide.",
//       label: "NETWORK_HEALTH_99",
//       icon: <Globe size={18} />,
//       color: "#10b981", // Emerald green
//       bg: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=1600&q=80",
//       chart: (d) => (
//         <LineChart data={d}>
//           <Line type="stepAfter" dataKey="val" stroke="#10b981" strokeWidth={3} dot={false} />
//           <Line type="stepAfter" dataKey="val2" stroke="rgba(0,0,0,0.15)" strokeWidth={2} dot={false} strokeDasharray="5 5" />
//         </LineChart>
//       )
//     },
//     {
//       title: "CLOUD SHIELD",
//       subtitle: "Advanced DDoS mitigation and neural-firewall protection suites.",
//       label: "FIREWALL_ARMED",
//       icon: <Shield size={18} />,
//       color: "#8b5cf6", // Violet
//       bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
//       chart: (d) => (
//         <ComposedChart data={d}>
//           <Area type="monotone" dataKey="val" fill="rgba(139, 92, 246, 0.15)" stroke="#8b5cf6" strokeWidth={3} />
//           <Line type="monotone" dataKey="val2" stroke="#334155" strokeWidth={2} dot={{ r: 4, fill: '#8b5cf6' }} />
//         </ComposedChart>
//       )
//     },
//     {
//       title: "DATA VAULT",
//       subtitle: "256-bit quantum-ready encryption for enterprise cold storage.",
//       label: "ENCRYPTION_SAFE",
//       icon: <Database size={18} />,
//       color: "#f59e0b", // Amber
//       bg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
//       chart: (d) => (
//         <PieChart>
//           <Pie data={d} dataKey="val" innerRadius="65%" outerRadius="85%" paddingAngle={6}>
//             {d.map((_, i) => <Cell key={i} fill={i % 3 === 0 ? "#f59e0b" : "rgba(0,0,0,0.05)"} />)}
//           </Pie>
//         </PieChart>
//       )
//     }
//   ], []);

//   const next = useCallback(() => setActive(p => (p + 1) % slides.length), [slides.length]);
//   const prev = () => setActive(p => (p - 1 + slides.length) % slides.length);

//   // Faster scroll speed: 2500ms (2.5 seconds)
//   useEffect(() => {
//     const timer = setInterval(next, 2500);
//     return () => clearInterval(timer);
//   }, [next]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600;800&display=swap');

//         .h-root {
//           position: relative;
//           height: 100vh;
//           background: #f8fafc;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           overflow: hidden;
//           color: #0f172a;
//         }

//         .h-bg-canvas {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           transition: background-image 1s cubic-bezier(0.4, 0, 0.2, 1);
//           z-index: 1;
//         }

//         /* Light Overlay */
//         .h-bg-canvas::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, rgba(255,255,255,0.7), #f1f5f9 95%);
//         }

//         .h-dashboard {
//           position: absolute;
//           top: 50%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 90vw; height: 80vh;
//           background: rgba(255, 255, 255, 0.45);
//           backdrop-filter: blur(40px) saturate(1.8);
//           border: 1px solid rgba(255, 255, 255, 0.6);
//           border-radius: 48px;
//           z-index: 10;
//           display: flex;
//           overflow: hidden;
//           box-shadow: 0 40px 100px -20px rgba(0,0,0,0.08);
//         }

//         .h-slide {
//           position: absolute;
//           inset: 0;
//           display: flex;
//           align-items: center;
//           padding: 0 8%;
//           opacity: 0;
//           transition: opacity 0.6s ease, transform 0.6s ease;
//           pointer-events: none;
//         }

//         .h-slide.active { opacity: 1; pointer-events: all; }

//         .h-text-col { flex: 1.2; z-index: 20; }

//         .h-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 16px;
//           background: rgba(0,0,0,0.03);
//           border: 1px solid rgba(0,0,0,0.05);
//           border-radius: 100px;
//           font-size: 0.75rem;
//           font-weight: 700;
//           letter-spacing: 2px;
//           margin-bottom: 24px;
//         }

//         .h-text-col h1 {
//           font-size: clamp(3rem, 6vw, 6.5rem);
//           font-weight: 800;
//           line-height: 0.85;
//           margin-bottom: 25px;
//           letter-spacing: -4px;
//           color: #0f172a;
//         }

//         .h-viz-col {
//           flex: 1;
//           height: 60%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           filter: drop-shadow(0 20px 40px rgba(0,0,0,0.05));
//         }

//         .h-nav-dots {
//           position: absolute;
//           bottom: 48px; left: 8%;
//           display: flex; gap: 12px;
//           z-index: 30;
//         }

//         .h-dot {
//           width: 24px; height: 4px;
//           background: rgba(0,0,0,0.1);
//           border-radius: 2px;
//           cursor: pointer;
//           transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }

//         .h-dot.active { background: #0f172a; width: 50px; }

//         .h-side-arrows {
//           position: absolute;
//           bottom: 40px; right: 48px;
//           display: flex; gap: 15px;
//           z-index: 30;
//         }

//         .h-arrow-btn {
//           width: 56px; height: 56px;
//           border-radius: 50%;
//           background: rgba(0,0,0,0.02);
//           border: 1px solid rgba(0,0,0,0.05);
//           color: #0f172a;
//           cursor: pointer; transition: 0.3s;
//           display: flex; align-items: center; justify-content: center;
//         }

//         .h-arrow-btn:hover { background: #0f172a; color: #fff; border-color: #0f172a; }

//         /* Smooth slide entry */
//         .h-slide.active .h-text-col { animation: slideUp 0.8s forwards; }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @media (max-width: 1100px) {
//           .h-dashboard { flex-direction: column; width: 94vw; height: 85vh; border-radius: 32px; }
//           .h-slide { flex-direction: column; text-align: center; padding: 60px 20px; }
//           .h-viz-col { width: 100%; height: 40%; margin-top: 20px; }
//           .h-text-col h1 { font-size: 3rem; }
//           .h-nav-dots { left: 50%; transform: translateX(-50%); bottom: 100px; }
//           .h-side-arrows { right: 50%; transform: translateX(50%); bottom: 30px; }
//         }
//       `}</style>

//       <div className="h-root">
//         {/* LIGHT-GRADIENT BACKGROUND */}
//         <div className="h-bg-canvas" style={{ backgroundImage: `url(${slides[active].bg})` }} />
        
//         <div className="h-dashboard">
//           {slides.map((slide, i) => (
//             <div key={i} className={`h-slide ${i === active ? 'active' : ''}`}>
//               <div className="h-text-col">
//                 <div className="h-label" style={{ color: slide.color }}>
//                   {slide.icon} {slide.label}
//                 </div>
//                 <h1>{slide.title}</h1>
//                 <p style={{ color: '#64748b', fontSize: '1.25rem', maxWidth: '480px', lineHeight: 1.4 }}>
//                   {slide.subtitle}
//                 </p>
//               </div>

//               <div className="h-viz-col">
//                 <ResponsiveContainer width="100%" height="100%">
//                   {slide.chart(data)}
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           ))}

//           {/* DASHBOARD NAVIGATION */}
//           <div className="h-nav-dots">
//             {slides.map((_, i) => (
//               <div key={i} className={`h-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} />
//             ))}
//           </div>

//           <div className="h-side-arrows">
//             <button className="h-arrow-btn" onClick={prev}><ChevronLeft size={24} /></button>
//             <button className="h-arrow-btn" onClick={next}><ChevronRight size={24} /></button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cpu, Activity, Globe, Shield, Database } from "lucide-react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  ComposedChart, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis
} from "recharts";

// Data generator for the live-moving effect
const generateData = () => 
  Array.from({ length: 15 }, (_, i) => ({ 
    name: i, 
    val: Math.floor(Math.random() * 400) + 200,
    val2: Math.floor(Math.random() * 200) + 150 
  }));

export default function PremiumVanguardHero() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(generateData());

  // Real-time data movement
  useEffect(() => {
    const jitter = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        val: Math.max(100, item.val + (Math.random() * 80 - 40)),
        val2: Math.max(50, item.val2 + (Math.random() * 50 - 25))
      })));
    }, 1800);
    return () => clearInterval(jitter);
  }, []);

  const slides = useMemo(() => [
    {
      title: "NEURAL NETWORK",
      subtitle: "Edge-computing nodes processing petabytes of telemetry via AI nodes.",
      label: "AI_NODE_ACTIVE",
      icon: <Cpu size={18} />,
      color: "#00d2ff",
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <AreaChart data={d}>
          <defs>
            <linearGradient id="c1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d2ff" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#00d2ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="val" stroke="#00d2ff" strokeWidth={3} fill="url(#c1)" />
        </AreaChart>
      )
    },
    {
      title: "MARKET VELOCITY",
      subtitle: "High-frequency analysis across global crypto and equity exchanges.",
      label: "MARKET_SYNC_04",
      icon: <Activity size={18} />,
      color: "#ff0080",
      bg: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <BarChart data={d}>
          <Bar dataKey="val" fill="#ff0080" radius={[2, 2, 0, 0]} />
          <Bar dataKey="val2" fill="rgba(255,255,255,0.15)" radius={[2, 2, 0, 0]} />
        </BarChart>
      )
    },
    {
      title: "GLOBAL MESH",
      subtitle: "Zero-latency peering across 12 availability zones world-wide.",
      label: "NETWORK_HEALTH_99",
      icon: <Globe size={18} />,
      color: "#39ff14",
      bg: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <LineChart data={d}>
          <Line type="stepAfter" dataKey="val" stroke="#39ff14" strokeWidth={3} dot={false} />
          <Line type="stepAfter" dataKey="val2" stroke="rgba(255,255,255,0.2)" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        </LineChart>
      )
    },
    {
      title: "CLOUD SHIELD",
      subtitle: "Advanced DDoS mitigation and neural-firewall protection suites.",
      label: "FIREWALL_ARMED",
      icon: <Shield size={18} />,
      color: "#7000ff",
      bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <ComposedChart data={d}>
          <Area type="monotone" dataKey="val" fill="rgba(112, 0, 255, 0.25)" stroke="#7000ff" strokeWidth={3} />
          <Line type="monotone" dataKey="val2" stroke="#fff" strokeWidth={2} dot={{ r: 4, fill: '#7000ff' }} />
        </ComposedChart>
      )
    },
    {
      title: "DATA VAULT",
      subtitle: "256-bit quantum-ready encryption for enterprise cold storage.",
      label: "ENCRYPTION_SAFE",
      icon: <Database size={18} />,
      color: "#faff00",
      bg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
      chart: (d) => (
        <PieChart>
          <Pie data={d} dataKey="val" innerRadius="65%" outerRadius="85%" paddingAngle={6}>
            {d.map((_, i) => <Cell key={i} fill={i % 3 === 0 ? "#faff00" : "rgba(255,255,255,0.05)"} />)}
          </Pie>
        </PieChart>
      )
    }
  ], []);

  const next = useCallback(() => setActive(p => (p + 1) % slides.length), [slides.length]);
  const prev = () => setActive(p => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600;800&display=swap');

        .h-root {
          position: relative;
          height: 100vh;
          background: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          color: white;
        }

        .h-bg-canvas {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: background-image 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .h-bg-canvas::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.4), #000 95%);
        }

        .h-dashboard {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw; height: 80vh;
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(40px) saturate(1.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 48px;
          z-index: 10;
          display: flex;
          overflow: hidden;
          box-shadow: 0 80px 150px -40px rgba(0,0,0,0.9);
        }

        .h-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 0 8%;
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
          pointer-events: none;
        }

        .h-slide.active { opacity: 1; pointer-events: all; }

        .h-text-col { flex: 1.2; z-index: 20; }

        .h-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }

        .h-text-col h1 {
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 800;
          line-height: 0.9;
          margin-bottom: 20px;
          letter-spacing: -3px;
        }

        .h-viz-col {
          flex: 1;
          height: 55%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .h-btn {
          padding: 18px 45px;
          border-radius: 100px;
          border: none;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: 0.3s;
          text-transform: uppercase;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .h-btn:hover { transform: translateY(-3px) scale(1.05); }

        .h-nav-dots {
          position: absolute;
          bottom: 48px; left: 8%;
          display: flex; gap: 12px;
          z-index: 30;
        }

        .h-dot {
          width: 30px; height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          cursor: pointer;
          transition: 0.4s;
        }

        .h-dot.active { background: #fff; width: 60px; box-shadow: 0 0 15px rgba(255,255,255,0.5); }

        .h-side-arrows {
          position: absolute;
          bottom: 40px; right: 48px;
          display: flex; gap: 15px;
          z-index: 30;
        }

        .h-arrow-btn {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          cursor: pointer; transition: 0.3s;
          display: flex; align-items: center; justify-content: center;
        }

        .h-arrow-btn:hover { background: #fff; color: #000; }

        /* Mobile View */
        @media (max-width: 1100px) {
          .h-dashboard { flex-direction: column; width: 94vw; height: 85vh; border-radius: 32px; }
          .h-slide { flex-direction: column; text-align: center; padding: 60px 20px; }
          .h-viz-col { width: 100%; height: 35%; margin-top: 20px; }
          .h-text-col h1 { font-size: 3rem; }
          .h-nav-dots { left: 50%; transform: translateX(-50%); bottom: 100px; }
          .h-side-arrows { right: 50%; transform: translateX(50%); bottom: 30px; }
        }

        @media (max-width: 768px) {
          .h-dashboard { 
            width: 95vw; 
            height: 90vh; 
            padding: 40px 0;
            border-radius: 24px;
          }
          .h-slide { 
            padding: 40px 16px; 
            gap: 20px;
          }
          .h-text-col h1 { 
            font-size: 2rem; 
            letter-spacing: -2px;
          }
          .h-text-col p {
            font-size: 1rem !important;
          }
          .h-btn { 
            padding: 14px 35px; 
            font-size: 0.85rem;
          }
          .h-label {
            font-size: 0.7rem;
            padding: 6px 12px;
            gap: 6px;
          }
          .h-nav-dots { bottom: 80px; gap: 8px; }
          .h-dot { width: 24px; height: 3px; }
          .h-dot.active { width: 48px; }
          .h-side-arrows { bottom: 20px; right: 20px; gap: 10px; }
          .h-arrow-btn { width: 48px; height: 48px; }
        }

        @media (max-width: 640px) {
          .h-dashboard { 
            width: 96vw; 
            height: auto;
            min-height: 85vh;
            padding: 35px 0;
            border-radius: 20px;
          }
          .h-slide { 
            padding: 35px 12px;
            min-height: 100vh;
          }
          .h-text-col h1 { 
            font-size: 1.6rem; 
            line-height: 1;
            margin-bottom: 16px;
            letter-spacing: -1px;
          }
          .h-text-col p {
            font-size: 0.9rem !important;
            margin-bottom: 30px;
          }
          .h-btn { 
            padding: 12px 30px; 
            font-size: 0.8rem;
          }
          .h-label {
            font-size: 0.65rem;
            margin-bottom: 16px;
          }
          .h-viz-col { height: 30%; }
          .h-nav-dots { bottom: 70px; gap: 6px; }
          .h-dot { width: 20px; height: 2px; }
          .h-dot.active { width: 40px; }
          .h-side-arrows { bottom: 15px; right: 15px; gap: 8px; }
          .h-arrow-btn { width: 44px; height: 44px; font-size: 0.9rem; }
        }

        @media (max-width: 480px) {
          .h-dashboard { 
            width: 97vw; 
            border-radius: 16px;
            padding: 30px 0;
          }
          .h-slide { 
            padding: 30px 10px;
            flex-direction: column;
          }
          .h-text-col h1 { 
            font-size: 1.3rem; 
            margin-bottom: 12px;
            letter-spacing: -0.5px;
          }
          .h-text-col p {
            font-size: 0.8rem !important;
            margin-bottom: 24px;
          }
          .h-btn { 
            padding: 10px 24px; 
            font-size: 0.75rem;
          }
          .h-label {
            font-size: 0.6rem;
            margin-bottom: 12px;
          }
          .h-viz-col { height: 25%; margin-top: 15px; }
          .h-nav-dots { bottom: 60px; gap: 4px; }
          .h-dot { width: 16px; height: 2px; }
          .h-dot.active { width: 32px; }
          .h-side-arrows { bottom: 10px; right: 10px; gap: 6px; }
          .h-arrow-btn { width: 40px; height: 40px; font-size: 0.8rem; }
        }

        @media (max-width: 360px) {
          .h-dashboard { 
            width: 98vw; 
            border-radius: 14px;
            padding: 25px 0;
          }
          .h-slide { 
            padding: 25px 8px;
          }
          .h-text-col h1 { 
            font-size: 1.1rem; 
            margin-bottom: 10px;
          }
          .h-text-col p {
            font-size: 0.75rem !important;
            margin-bottom: 20px;
          }
          .h-btn { 
            padding: 9px 20px; 
            font-size: 0.7rem;
          }
          .h-label {
            font-size: 0.55rem;
            margin-bottom: 10px;
          }
          .h-viz-col { height: 20%; margin-top: 12px; }
          .h-nav-dots { bottom: 50px; gap: 3px; }
          .h-dot { width: 14px; height: 1.5px; }
          .h-dot.active { width: 28px; }
          .h-side-arrows { bottom: 8px; right: 8px; gap: 4px; }
          .h-arrow-btn { width: 36px; height: 36px; font-size: 0.7rem; }
        }
      `}</style>

      <div className="h-root">
        {/* ANIMATED BACKGROUND */}
        <div className="h-bg-canvas" style={{ backgroundImage: `url(${slides[active].bg})` }} />
        
        <div className="h-dashboard">
          {slides.map((slide, i) => (
            <div key={i} className={`h-slide ${i === active ? 'active' : ''}`}>
              <div className="h-text-col">
                <div className="h-label" style={{ color: slide.color }}>
                  {slide.icon} {slide.label}
                </div>
                <h1>{slide.title}</h1>
                <p style={{ color: '#aaa', fontSize: '1.25rem', maxWidth: '480px', marginBottom: '40px' }}>
                  {slide.subtitle}
                </p>
                <button className="h-btn" style={{ background: slide.color, color: '#000' }}>
                  EXPLORE PLATFORM
                </button>
              </div>

              <div className="h-viz-col">
                <ResponsiveContainer width="100%" height="100%">
                  {slide.chart(data)}
                </ResponsiveContainer>
              </div>
            </div>
          ))}

          {/* DASHBOARD NAVIGATION */}
          <div className="h-nav-dots">
            {slides.map((_, i) => (
              <div key={i} className={`h-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} />
            ))}
          </div>

          <div className="h-side-arrows">
            <button className="h-arrow-btn" onClick={prev}><ChevronLeft size={24} /></button>
            <button className="h-arrow-btn" onClick={next}><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </>
  );
}                                                      