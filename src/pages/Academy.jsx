import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const Academy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "backOut" } }
  };

  const timelineSteps = [
    { title: 'Foundational Resilience', icon: <ShieldCheck size={28} />, text: 'Learn the ground rules of modern cybersecurity strategies, threat typologies, and standard compliance checkpoints mapping to NIST.', level: 'Level 01' },
    { title: 'AI Ethics & Governance', icon: <GraduationCap size={28} />, text: 'Understand the intersection of data privacy, algorithmic biases, and global AI legislation rapidly shaping corporate deployment paths.', level: 'Level 02' },
    { title: 'Advanced Threat Modeling', icon: <Award size={28} />, text: 'Adopt aggressive red-team strategies mapping out zero-day vulnerabilities across comprehensive enterprise digital architectures.', level: 'Level 03' }
  ];

  return (
    <div style={{ paddingTop: '80px', overflow: 'hidden' }}>
      <section className="section" style={{ backgroundColor: 'var(--color-black)', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="blob-bg" style={{ width: '500px', height: '500px', background: 'var(--color-orange-glow)', top: '10%', right: '10%', opacity: 0.15 }} />
        
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}
          >
            <motion.div variants={fadeInUp} style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', color: 'var(--color-white)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
              Professional Certification
            </motion.div>
            <motion.h1 className="title-xl" variants={fadeInUp}>
              Digital Risk <span className="text-orange" style={{ textShadow: '0 0 40px rgba(255,90,0,0.4)' }}>Academy</span>
            </motion.h1>
            <motion.p className="title-md" variants={fadeInUp} style={{ color: '#C0C0C0', fontWeight: 400, marginTop: '2rem', lineHeight: 1.6 }}>
              Master the deep intricacies of modern global regulatory frameworks and intense cyber readiness with our elite industry-leading certification programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)', position: 'relative' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 className="title-lg" variants={fadeInUp}>A New Standard of Learning</motion.h2>
              <motion.p variants={fadeInUp} style={{ color: '#E0E0E0', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.7 }}>
                Effectively bridging the critical gap between conceptual theoretical knowledge and high-stakes practical execution in aggressively fast-changing digital threat environments.
              </motion.p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#C0C0C0', marginBottom: '2rem' }}>
                <motion.li variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem' }}>
                  <div style={{ background: 'rgba(255,90,0,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                    <ShieldCheck size={24} className="text-orange" />
                  </div>
                  NIST & ISO Focused Architectures
                </motion.li>
                <motion.li variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem' }}>
                  <div style={{ background: 'rgba(255,90,0,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                    <Activity size={24} className="text-orange" />
                  </div>
                  Immersive Real-world Threat Scenarios
                </motion.li>
                <motion.li variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem' }}>
                  <div style={{ background: 'rgba(255,90,0,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                    <CheckCircle size={24} className="text-orange" />
                  </div>
                  Real-time Regulatory Compliance Modules
                </motion.li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariant}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              style={{ padding: '4rem 3rem', background: 'linear-gradient(135deg, rgba(255,90,0,0.05) 0%, rgba(30,30,30,0.6) 100%)', border: '1px solid rgba(255, 90, 0, 0.4)', perspective: 1000, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
            >
              <div style={{ background: 'var(--color-orange)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', boxShadow: '0 10px 20px rgba(255,90,0,0.4)' }}>
                <BookOpen size={32} color="#fff" />
              </div>
              <h3 className="title-md" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Transformative Outcomes</h3>
              <p style={{ color: '#E0E0E0', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>Become an undeniably vital asset unconditionally driving secure innovation within your enterprise ecosystem.</p>
              <button className="btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1.2rem' }}>
                View Masterclasses <ArrowRight size={22} className="text-white" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ position: 'relative' }}>
        <div className="blob-bg" style={{ width: '400px', height: '400px', background: 'rgba(255,255,255,0.03)', bottom: '5%', left: '5%' }} />
        
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h2 className="title-lg" style={{ marginBottom: '1rem' }}>The <span className="text-orange">Mastery Timeline</span></h2>
            <p style={{ color: '#A0A0A0', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Navigate your professional progression dynamically through carefully structured pedagogical milestones.</p>
          </motion.div>

          <div className="timeline-container">
            <motion.div 
              className="timeline-line" 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {timelineSteps.map((step, idx) => (
              <motion.div 
                className="timeline-item"
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
                }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="text-orange" style={{ background: 'rgba(255,90,0,0.1)', padding: '0.8rem', borderRadius: '12px' }}>
                      {step.icon}
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--color-orange)', textTransform: 'uppercase' }}>{step.level}</span>
                  </div>
                  <h4 className="title-md" style={{ color: 'var(--color-white)', fontSize: '1.75rem', marginBottom: '1rem' }}>{step.title}</h4>
                  <p style={{ color: '#C0C0C0', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>{step.text}</p>
                  <button className="btn-outline" style={{ padding: '0.8rem 1.5rem' }}>Explore Module</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
