export default function CICD() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes flowRight { 0% { transform: translateX(-100%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(100%); opacity: 0; } }
        .feature-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s; animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); background: rgba(255,255,255,0.15); }
      `}</style>
      
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)', animation: 'float 6s ease-in-out infinite' }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 6%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeInUp 0.8s ease-out' }}>
          <svg width="120" height="120" viewBox="0 0 200 200" style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite' }}>
            <defs><linearGradient id="cicdGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.9 }} /><stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0.6 }} /></linearGradient></defs>
            <circle cx="50" cy="100" r="25" fill="rgba(255,255,255,0.2)" stroke="url(#cicdGrad)" strokeWidth="3" />
            <circle cx="100" cy="100" r="25" fill="rgba(255,255,255,0.2)" stroke="url(#cicdGrad)" strokeWidth="3" />
            <circle cx="150" cy="100" r="25" fill="rgba(255,255,255,0.2)" stroke="url(#cicdGrad)" strokeWidth="3" />
            <path d="M75 100 L85 100" stroke="url(#cicdGrad)" strokeWidth="3" markerEnd="url(#arrow)" />
            <path d="M125 100 L135 100" stroke="url(#cicdGrad)" strokeWidth="3" markerEnd="url(#arrow)" />
            <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#fff" /></marker></defs>
          </svg>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>CI/CD Solutions</h1>
          <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Automate your software delivery pipeline with continuous integration and continuous deployment practices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {[
            { title: 'Jenkins & GitLab CI/CD', icon: '🔄', delay: '0s' },
            { title: 'GitHub Actions & Azure DevOps', icon: '🚀', delay: '0.1s' },
            { title: 'Pipeline Automation', icon: '⚡', delay: '0.2s' },
            { title: 'Deployment Strategies', icon: '🎯', delay: '0.3s' },
            { title: 'Release Management', icon: '📦', delay: '0.4s' },
            { title: 'Quality Gates', icon: '✅', delay: '0.5s' }
          ].map((feature, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: feature.delay }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>Streamline your development workflow with automated testing and deployment.</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.2)', animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>CI/CD Tools We Use</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'Azure DevOps', 'ArgoCD', 'Spinnaker', 'Travis CI'].map((tech, i) => (
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
