export default function AWS() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .feature-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s; animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); background: rgba(255,255,255,0.15); }
      `}</style>
      
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent)', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 9s ease-in-out infinite 1.5s' }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 6%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeInUp 0.8s ease-out' }}>
          <svg width="120" height="120" viewBox="0 0 200 200" style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite' }}>
            <defs><linearGradient id="awsGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.9 }} /><stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0.6 }} /></linearGradient></defs>
            <rect x="40" y="60" width="120" height="80" rx="8" fill="none" stroke="url(#awsGrad)" strokeWidth="3" />
            <rect x="60" y="40" width="80" height="60" rx="6" fill="rgba(255,255,255,0.2)" stroke="url(#awsGrad)" strokeWidth="2" />
            <circle cx="100" cy="70" r="15" fill="#fff" opacity="0.8" />
            <path d="M85 70 L95 80 L115 60" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>AWS Cloud Services</h1>
          <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Comprehensive AWS solutions including architecture design, migration, optimization, and managed services.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {[
            { title: 'AWS Architecture & Design', icon: '🏛️', delay: '0s' },
            { title: 'EC2, Lambda & Serverless', icon: '⚡', delay: '0.1s' },
            { title: 'RDS, DynamoDB & Data Services', icon: '📊', delay: '0.2s' },
            { title: 'AWS Security & Compliance', icon: '🔒', delay: '0.3s' },
            { title: 'Cost Optimization & FinOps', icon: '💰', delay: '0.4s' },
            { title: 'CloudFormation & IaC', icon: '🛠️', delay: '0.5s' }
          ].map((feature, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: feature.delay }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>Leverage AWS cloud infrastructure for scalable, secure, and cost-effective solutions.</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.2)', animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>AWS Services We Master</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB', 'CloudFront', 'ECS', 'EKS'].map((tech, i) => (
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
