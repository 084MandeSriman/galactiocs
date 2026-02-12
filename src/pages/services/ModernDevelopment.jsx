export default function ModernDevelopment() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .feature-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s; animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); background: rgba(255,255,255,0.15); }
      `}</style>
      
      <div style={{ position: 'absolute', top: '15%', right: '8%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent)', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 9s ease-in-out infinite 1.5s' }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 6%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeInUp 0.8s ease-out' }}>
          <svg width="120" height="120" viewBox="0 0 200 200" style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite' }}>
            <defs><linearGradient id="modGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.9 }} /><stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0.6 }} /></linearGradient></defs>
            <rect x="40" y="60" width="120" height="80" rx="8" fill="none" stroke="url(#modGrad)" strokeWidth="3" />
            <path d="M60 80 L80 100 L60 120 M90 80 L110 100 L90 120 M120 80 L140 100 L120 120" stroke="url(#modGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="70" cy="100" r="4" fill="#fff" opacity="0.8" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <circle cx="100" cy="100" r="4" fill="#fff" opacity="0.8" style={{ animation: 'pulse 2s ease-in-out infinite 0.5s' }} />
            <circle cx="130" cy="100" r="4" fill="#fff" opacity="0.8" style={{ animation: 'pulse 2s ease-in-out infinite 1s' }} />
          </svg>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Modern Development</h1>
          <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Build scalable, high-performance applications using modern frameworks, agile methodologies, and DevOps practices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {[
            { title: 'Full-Stack Development', icon: '🚀', desc: 'End-to-end application development with modern tech stacks', delay: '0s' },
            { title: 'Progressive Web Apps', icon: '📱', desc: 'Build fast, reliable web apps that work offline', delay: '0.1s' },
            { title: 'Serverless Architecture', icon: '⚡', desc: 'Scale automatically with cloud-native serverless solutions', delay: '0.2s' },
            { title: 'Real-time Applications', icon: '🔄', desc: 'WebSocket and real-time data synchronization', delay: '0.3s' },
            { title: 'API-First Development', icon: '🔌', desc: 'RESTful and GraphQL API design and implementation', delay: '0.4s' },
            { title: 'Microservices', icon: '🏗️', desc: 'Distributed systems with independent services', delay: '0.5s' }
          ].map((feature, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: feature.delay }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.2)', animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Modern Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Go', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL'].map((tech, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '30px', color: '#fff', fontSize: '16px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; e.target.style.background = 'rgba(255,255,255,0.25)'; }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.background = 'rgba(255,255,255,0.15)'; }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
