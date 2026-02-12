export default function NativeApps() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #475569 0%, #1e40af 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes ping { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } }
        .feature-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s; animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); background: rgba(255,255,255,0.15); }
      `}</style>
      
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent)', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 9s ease-in-out infinite 2s' }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 6%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeInUp 0.8s ease-out' }}>
          <svg width="120" height="120" viewBox="0 0 200 200" style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite' }}>
            <defs><linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.9 }} /><stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0.6 }} /></linearGradient></defs>
            <rect x="60" y="30" width="80" height="140" rx="12" fill="rgba(255,255,255,0.15)" stroke="url(#mobileGrad)" strokeWidth="3" />
            <rect x="70" y="45" width="60" height="100" rx="4" fill="rgba(255,255,255,0.25)" />
            <circle cx="100" cy="160" r="8" fill="#fff" opacity="0.8" />
            <rect x="85" y="35" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.5)" />
          </svg>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Native Mobile Apps</h1>
          <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Build high-performance native mobile applications for iOS and Android with platform-specific features.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {[
            { title: 'iOS Development (Swift)', icon: '🍎', delay: '0s' },
            { title: 'Android Development (Kotlin)', icon: '🤖', delay: '0.1s' },
            { title: 'Native UI/UX Design', icon: '🎨', delay: '0.2s' },
            { title: 'App Store Optimization', icon: '🚀', delay: '0.3s' },
            { title: 'Performance Tuning', icon: '⚡', delay: '0.4s' },
            { title: 'Push Notifications', icon: '🔔', delay: '0.5s' }
          ].map((feature, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: feature.delay }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>Create exceptional mobile experiences with native platform capabilities.</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.2)', animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Technologies & Frameworks</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose', 'Core Data', 'Room', 'Firebase', 'ARKit'].map((tech, i) => (
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
