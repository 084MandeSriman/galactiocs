export default function Frontend() {
  return (
    <div style={{ padding: '100px 6%', minHeight: '100vh', background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '30px' }}>Frontend Engineering</h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
          Build modern, responsive, and performant user interfaces with cutting-edge frontend technologies.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Key Services</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>React, Vue, Angular Development</li>
            <li>Next.js & Server-Side Rendering</li>
            <li>Progressive Web Apps</li>
            <li>Responsive Design Implementation</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
