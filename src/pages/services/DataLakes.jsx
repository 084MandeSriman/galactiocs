export default function DataLakes() {
  return (
    <div style={{ padding: '100px 6%', minHeight: '100vh', background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '30px' }}>Data Lakes</h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
          Build scalable data lakes to store, process, and analyze massive volumes of structured and unstructured data.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Key Services</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>Data Lake Architecture Design</li>
            <li>AWS S3 & Azure Data Lake</li>
            <li>Data Cataloging & Governance</li>
            <li>Delta Lake & Lakehouse</li>
            <li>Data Security & Compliance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
