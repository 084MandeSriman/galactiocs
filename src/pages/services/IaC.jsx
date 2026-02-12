export default function IaC() {
  return (
    <div style={{ padding: '100px 6%', minHeight: '100vh', background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '30px' }}>Infrastructure as Code</h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
          Automate infrastructure provisioning and management with code-based approaches for consistency and scalability.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Key Services</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>Terraform & Terragrunt</li>
            <li>AWS CloudFormation</li>
            <li>Ansible & Puppet</li>
            <li>Infrastructure Automation</li>
            <li>Configuration Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
