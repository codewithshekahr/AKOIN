import { motion } from 'framer-motion';
import { Target, ShieldAlert, Cpu, Activity, ArrowRight, Layers, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const Advisory = () => {
  const [riskScore, setRiskScore] = useState(50);
  
  const getRiskStatus = () => {
    if (riskScore < 30) return { label: 'Secure Framework', color: '#10B981', desc: 'Robust digital posture. Routine monitoring advised.' };
    if (riskScore < 70) return { label: 'Elevated Risk', color: '#F59E0B', desc: 'Vulnerabilities detected. Strategic audit recommended.' };
    return { label: 'Critical Vulnerability', color: '#EF4444', desc: 'Immediate remediation required to prevent exploitation.' };
  };

  const status = getRiskStatus();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ paddingTop: '80px', overflow: 'hidden' }}>
      <section className="section" style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="blob-bg" style={{ width: '400px', height: '400px', background: 'var(--color-orange-glow)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }} />
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}
          >
            <motion.div variants={fadeInUp} style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '50px', border: '1px solid rgba(255,90,0,0.3)', marginBottom: '2rem', background: 'rgba(255,90,0,0.05)', color: 'var(--color-orange)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
              Consulting Excellence
            </motion.div>
            <motion.h1 className="title-xl" variants={fadeInUp}>
              Expert <span className="text-orange">Advisory</span> Hub
            </motion.h1>
            <motion.p className="title-md" variants={fadeInUp} style={{ color: '#C0C0C0', fontWeight: 400, marginTop: '2rem', lineHeight: 1.6 }}>
              Tailored consulting services fortifying your organization's digital foundations against rapidly emerging threats and stringent compliance mandates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
            <h2 className="title-lg" style={{ marginBottom: 0 }}>Key Offerings</h2>
          </motion.div>

          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <Target size={40} className="text-orange" style={{ marginBottom: '1.5rem', dropShadow: '0 0 10px rgba(255,90,0,0.5)' }} />
              <h3 className="title-md">Risk Audits</h3>
              <p style={{ color: '#C0C0C0', lineHeight: 1.7 }}>Comprehensive evaluations of your current infrastructure, revealing seamlessly hidden vulnerabilities deeply embedded across your technical stack.</p>
            </motion.div>

            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <ShieldAlert size={40} className="text-orange" style={{ marginBottom: '1.5rem' }} />
              <h3 className="title-md">Cyber Resilience</h3>
              <p style={{ color: '#C0C0C0', lineHeight: 1.7 }}>Ensuring continuous business operations through proven strategies and highly responsive incident management pipelines built for scale.</p>
            </motion.div>

            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <Cpu size={40} className="text-orange" style={{ marginBottom: '1.5rem' }} />
              <h3 className="title-md">AI Risk Integration</h3>
              <p style={{ color: '#C0C0C0', lineHeight: 1.7 }}>Navigating the absolute complexities of deploying AI safely, verifying model fairness, and fiercely maintaining overarching data sovereignty.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)', position: 'relative' }}>
        <div className="container grid-2">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Layers size={56} className="text-orange" style={{ marginBottom: '2.5rem' }} />
              <h2 className="title-lg">Framework Alignment</h2>
              <p style={{ color: '#E0E0E0', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                We proactively map our methodologies directly against globally recognized resilient standards ensuring highly predictable outcomes.
              </p>
            </motion.div>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#C0C0C0' }}>
              {[
                "NIST Cybersecurity Framework Integration",
                "ISO 27001 Readiness and Auditing",
                "GDPR & Regional Data Strict Compliance"
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} whileHover={{ x: 10, color: 'var(--color-white)' }} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', cursor: 'default' }}>
                  <div style={{ background: 'var(--color-orange)', padding: '0.5rem', borderRadius: '50%' }}>
                    <Activity size={20} color="#fff" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleUp}
            style={{ border: '1px solid rgba(255, 90, 0, 0.2)', background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)', padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <AlertTriangle size={24} color={status.color} />
              <h3 className="title-md" style={{ margin: 0 }}>Interactive Threat Exposure</h3>
            </div>
            
            <p style={{ color: '#A0A0A0', marginBottom: '2rem', fontSize: '0.95rem' }}>Adjust the slider below to visually estimate the impact of unmanaged infrastructure configurations on your core operations.</p>
            
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#E0E0E0' }}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#10B981' }}>Low Exposure</span>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#EF4444' }}>High Vulnerability</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={riskScore} 
                onChange={(e) => setRiskScore(e.target.value)}
                className="risk-slider"
              />
            </div>

            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1.5rem', borderRadius: '12px', borderLeft: `4px solid ${status.color}`, marginBottom: '2rem' }}>
              <h4 style={{ color: status.color, marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 700 }}>{status.label}</h4>
              <p style={{ color: '#C0C0C0', fontSize: '0.95rem' }}>{status.desc}</p>
            </div>

            <button className="btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>
              Defend Your Infrastructure <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Advisory;
