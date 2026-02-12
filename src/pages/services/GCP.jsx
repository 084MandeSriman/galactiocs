export default function GCP() {
  return (
    <div style={{ padding: '100px 6%', minHeight: '100vh', background: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '30px' }}>Google Cloud Platform Services</h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
          Leverage Google Cloud's powerful infrastructure, AI/ML capabilities, and data analytics for your business transformation.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Key Services</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>GCP Infrastructure & Compute</li>
            <li>BigQuery & Data Analytics</li>
            <li>AI/ML with Vertex AI</li>
            <li>Kubernetes Engine (GKE)</li>
            <li>Cloud Functions & App Engine</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
