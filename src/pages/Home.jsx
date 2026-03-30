import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, BookOpen, Lightbulb, Users } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    let interval = null;
    
    interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      
      if(iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={ref}>
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <motion.div className="hero-bg" style={{ y: yBg, position: 'absolute', width: '100%', height: '110%', top: '-10%', zIndex: '-1' }}>
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Cyber Security Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(3,3,3,1) 10%, rgba(3,3,3,0.6) 100%)' }} />
        </motion.div>
        
        <div className="blob-bg" style={{ width: '500px', height: '500px', background: 'var(--color-orange-glow)', top: '10%', right: '-10%', zIndex: 0 }} />

        <div className="container" style={{ zIndex: 2 }}>
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className="title-xl" variants={fadeInUp}>
              Mastering <span className="hero-gradient-text" style={{ background: 'linear-gradient(135deg, #FFF 0%, var(--color-orange) 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', minWidth: '320px' }}>
                <ScrambleText text="Digital Risk" />
              </span> <br/>& Resilience
            </motion.h1>
            
            <motion.p className="title-md" variants={fadeInUp} style={{ color: '#E0E0E0', marginTop: '1.5rem', marginBottom: '3rem', fontWeight: 400, maxWidth: '800px', lineHeight: 1.5 }}>
              Leading advisory and academy frameworks for modern business risks, regulatory compliance, and unmatched digital safeguarding.
            </motion.p>
            
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/advisory" className="btn-primary">
                Explore Advisory <ArrowRight size={20} />
              </Link>
              <Link to="/academy" className="btn-outline">
                View Academy Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
        <div className="threat-node" style={{ width: '10px', height: '10px', top: '20%', left: '15%', animationDelay: '0s' }} />
        <div className="threat-node" style={{ width: '15px', height: '15px', top: '50%', right: '10%', animationDelay: '1s' }} />
        <div className="threat-node" style={{ width: '8px', height: '8px', bottom: '15%', left: '45%', animationDelay: '0.5s' }} />
        <div className="blob-bg" style={{ width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', bottom: '-10%', left: '-10%' }} />
        
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 2 }}
          >
            <h2 className="title-lg">What We <span className="text-orange">Do</span></h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>Comprehensive solutions for modern organizations navigating the complex digital landscape.</p>
          </motion.div>
          
          <motion.div 
            className="grid-2" 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <div style={{ background: 'rgba(255,90,0,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Shield size={36} className="text-orange" />
              </div>
              <h3 className="title-md">Advisory</h3>
              <p style={{ color: '#E0E0E0', marginBottom: '2rem', fontSize: '1.1rem' }}>Strategic consulting for digital risk management, strict regulatory compliance, and deep system resilience.</p>
              <Link to="/advisory" style={{ color: 'var(--color-orange)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <div style={{ background: 'rgba(255,90,0,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <BookOpen size={36} className="text-orange" />
              </div>
              <h3 className="title-md">Academy</h3>
              <p style={{ color: '#E0E0E0', marginBottom: '2rem', fontSize: '1.1rem' }}>Premium educational programs and certifications empowering professionals to take charge of cyber resilience.</p>
              <Link to="/academy" style={{ color: 'var(--color-orange)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Explore Courses <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <div style={{ background: 'rgba(255,90,0,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Lightbulb size={36} className="text-orange" />
              </div>
              <h3 className="title-md">Innovation</h3>
              <p style={{ color: '#E0E0E0', marginBottom: '2rem', fontSize: '1.1rem' }}>Cutting-edge research and development integrating AI insights precisely into robust risk prediction platforms.</p>
              <a href="#" style={{ color: 'var(--color-orange)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Read Insights <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div className="glass-card" variants={scaleUp} whileHover={{ y: -15, scale: 1.02 }}>
              <div style={{ background: 'rgba(255,90,0,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Users size={36} className="text-orange" />
              </div>
              <h3 className="title-md">Professional Development</h3>
              <p style={{ color: '#E0E0E0', marginBottom: '2rem', fontSize: '1.1rem' }}>Corporate training and specialized workshops designed to rapidly upskill teams on modern framework alignments.</p>
              <a href="#" style={{ color: 'var(--color-orange)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Contact Us <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)', position: 'relative' }}>
        <div className="blob-bg" style={{ width: '600px', height: '600px', background: 'rgba(255,90,0,0.05)', top: '10%', right: '0' }} />
        
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h2 className="title-lg">Featured <span className="text-orange">Programs</span></h2>
            <div style={{ height: '4px', width: '60px', background: 'var(--color-orange)', margin: '0 auto', borderRadius: '2px' }} />
          </motion.div>

          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ marginBottom: '3rem' }}
          >
            {[
              { title: 'Digital Risk Specialization', text: 'Master core frameworks including NIST and ISO standards implementation in real-world environments.' },
              { title: 'AI Risk Management', text: 'Identify vulnerabilities and unearth compliance gaps strategically in emerging AI system deployments.' },
              { title: 'Cyber Resilience Expert', text: 'Advanced certification meticulously structured for maintaining operations during critical incidents.' }
            ].map((program, idx) => (
              <motion.div 
                key={idx} 
                className="glass-card" 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                style={{ perspective: 1000 }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-orange)', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} />
                <h4 className="title-md" style={{ color: 'var(--color-white)', marginTop: '0.5rem' }}>{program.title}</h4>
                <p style={{ color: '#C0C0C0', marginBottom: '2.5rem', lineHeight: 1.8 }}>{program.text}</p>
                <Link to="/academy" className="btn-outline" style={{ width: '100%', border: '1px solid rgba(255,90,0,0.3)', color: 'var(--color-orange)' }}>Enroll Now</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
