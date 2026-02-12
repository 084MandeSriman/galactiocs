const SubServiceTemplate = ({ title, description, features, techStack, gradient, svgIcon }) => {
  return (
    <div style={{ minHeight: '100vh', background: gradient, position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .feature-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s; animation: fadeInUp 0.6s ease-out forwards; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); background: rgba(255,255,255,0.15); }
      `}</style>
      
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)', animation: 'float 6s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', animation: 'float 8s ease-in-out infinite 1s' }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 6%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeInUp 0.8s ease-out' }}>
          <div style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite' }}>{svgIcon}</div>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>{title}</h1>
          <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>{description}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {features.map((feature, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.2)', animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Technologies & Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {techStack.map((tech, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '30px', color: '#fff', fontSize: '16px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; e.target.style.background = 'rgba(255,255,255,0.25)'; }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.background = 'rgba(255,255,255,0.15)'; }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceTemplate;
