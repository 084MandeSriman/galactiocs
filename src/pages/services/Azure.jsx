export default function Azure() {
  return (
    <div style={{ padding: '100px 6%', minHeight: '100vh', background: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '30px' }}>Azure Cloud Services</h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
          End-to-end Azure solutions including infrastructure setup, application deployment, and enterprise integration.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Key Services</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>Azure Infrastructure Setup</li>
            <li>Azure DevOps & CI/CD</li>
            <li>Azure SQL & Cosmos DB</li>
            <li>Azure Active Directory Integration</li>
            <li>Azure Security & Governance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
