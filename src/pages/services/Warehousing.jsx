export default function Warehousing() {
  return (
    <div style={{ padding: '100px 6%', minHeight: '100vh', background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '30px' }}>Data Warehousing</h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
          Modern data warehouse solutions for centralized data storage, analytics, and business intelligence.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Key Services</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>Snowflake & Redshift Implementation</li>
            <li>Data Modeling & Schema Design</li>
            <li>Dimensional Modeling</li>
            <li>Data Warehouse Optimization</li>
            <li>BI Tool Integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
