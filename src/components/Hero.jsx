import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="accueil" className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}></div>
        ))}
      </div>
      
      <div className="hero-content">
        <div className="hero-logo">
          <img src="/logo.png" alt="Les Douceurs de Françoise" />
        </div>
        
        <p className="hero-subtitle">
          Boulangerie & Pâtisserie artisanale au cœur du Plessis-Robinson
        </p>
        
        <p className="hero-description">
          Découvrez le goût authentique de nos pains traditionnels, 
          viennoiseries dorées et pâtisseries gourmandes, 
          préparés chaque jour avec passion et savoir-faire.
        </p>
        
        <div className="hero-buttons">
          <a href="#products" className="btn btn-primary">
            Nos Créations
          </a>
          <a href="#contact" className="btn btn-secondary">
            Nous Trouver
          </a>
        </div>

        <div className="hero-features">
          <div className="feature">
            <div className="feature-icon">🥖</div>
            <span>Pain Frais</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🥐</div>
            <span>Viennoiseries</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🎂</div>
            <span>Pâtisseries</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span className="scroll-text">Découvrir</span>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
