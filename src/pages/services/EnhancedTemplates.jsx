// Enhanced Sub-Service Pages - Copy this template structure for remaining pages

// Example: LifecycleManagement.jsx
export const LifecycleManagementEnhanced = () => (
  <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative', overflow: 'hidden' }}>
    <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes pulse{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}.feature-card{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:16px;padding:24px;border:1px solid rgba(255,255,255,0.2);transition:all 0.3s;animation:fadeInUp 0.6s ease-out forwards}.feature-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(0,0,0,0.3);background:rgba(255,255,255,0.15)}`}</style>
    <div style={{position:'absolute',top:'10%',left:'5%',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,255,255,0.1),transparent)',animation:'float 6s ease-in-out infinite'}}/>
    <div style={{position:'absolute',bottom:'10%',right:'5%',width:'400px',height:'400px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,255,255,0.08),transparent)',animation:'float 8s ease-in-out infinite 1s'}}/>
    <div style={{maxWidth:'1200px',margin:'0 auto',padding:'100px 6%',position:'relative',zIndex:1}}>
      <div style={{textAlign:'center',marginBottom:'60px',animation:'fadeInUp 0.8s ease-out'}}>
        <svg width="120" height="120" viewBox="0 0 200 200" style={{marginBottom:'20px',animation:'float 4s ease-in-out infinite'}}>
          <defs><linearGradient id="lcGrad"><stop offset="0%" stopColor="#fff" stopOpacity="0.9"/><stop offset="100%" stopColor="#fff" stopOpacity="0.6"/></linearGradient></defs>
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#lcGrad)" strokeWidth="3"/>
          <path d="M70 100 A30 30 0 1 1 130 100 A30 30 0 1 1 70 100" fill="none" stroke="url(#lcGrad)" strokeWidth="2" style={{animation:'pulse 3s ease-in-out infinite'}}/>
          <circle cx="100" cy="70" r="8" fill="#fff" opacity="0.8"/>
          <circle cx="85" cy="115" r="8" fill="#fff" opacity="0.8"/>
          <circle cx="115" cy="115" r="8" fill="#fff" opacity="0.8"/>
        </svg>
        <h1 style={{fontSize:'56px',fontWeight:'800',color:'#fff',marginBottom:'20px',textShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>Application Lifecycle Management</h1>
        <p style={{fontSize:'22px',color:'rgba(255,255,255,0.9)',maxWidth:'800px',margin:'0 auto',lineHeight:'1.6'}}>End-to-end application support, maintenance, and continuous improvement throughout the entire software lifecycle.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'24px',marginBottom:'60px'}}>
        {[{title:'Application Maintenance & Support',icon:'🔧',desc:'24/7 support and maintenance services'},{title:'Performance Optimization',icon:'⚡',desc:'Enhance application speed and efficiency'},{title:'Security Patching & Updates',icon:'🔒',desc:'Regular security updates and patches'},{title:'Technical Debt Reduction',icon:'🛠️',desc:'Refactor and modernize legacy code'},{title:'Continuous Enhancement',icon:'📈',desc:'Ongoing feature improvements'},{title:'Monitoring & Analytics',icon:'📊',desc:'Real-time application monitoring'}].map((f,i)=>(
          <div key={i} className="feature-card" style={{animationDelay:`${i*0.1}s`}}>
            <div style={{fontSize:'48px',marginBottom:'16px'}}>{f.icon}</div>
            <h3 style={{fontSize:'18px',fontWeight:'700',color:'#fff',marginBottom:'8px'}}>{f.title}</h3>
            <p style={{fontSize:'14px',color:'rgba(255,255,255,0.8)',lineHeight:'1.6'}}>{f.desc}</p>
          </div>
        ))}
      </div>
      <div style={{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(10px)',borderRadius:'20px',padding:'40px',border:'1px solid rgba(255,255,255,0.2)',animation:'fadeInUp 0.8s ease-out 0.6s backwards'}}>
        <h2 style={{fontSize:'32px',fontWeight:'800',color:'#fff',marginBottom:'30px',textAlign:'center'}}>Tools & Platforms</h2>
        <div style={{display:'flex',flexWrap:'wrap',gap:'16px',justifyContent:'center'}}>
          {['JIRA','ServiceNow','New Relic','Datadog','PagerDuty','Splunk','AppDynamics','Dynatrace'].map((t,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.15)',padding:'12px 24px',borderRadius:'30px',color:'#fff',fontSize:'16px',fontWeight:'600',border:'1px solid rgba(255,255,255,0.3)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={e=>{e.target.style.transform='scale(1.1)';e.target.style.background='rgba(255,255,255,0.25)'}} onMouseLeave={e=>{e.target.style.transform='scale(1)';e.target.style.background='rgba(255,255,255,0.15)'}}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
