import { useEffect, useRef } from 'react'
import './About.css'

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-decoration">
        <svg viewBox="0 0 200 200" className="decoration-circle">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>
      
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src="/image1.jpg" 
                alt="Notre boulangerie" 
                className="about-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=800&fit=crop'
                }}
              />
              <div className="image-frame"></div>
            </div>
            <div className="about-badge">
              <span className="badge-number">25+</span>
              <span className="badge-text">Années d'expérience</span>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">Notre Histoire</div>
            <h2 className="about-title">
              Une passion transmise de <span>génération en génération</span>
            </h2>
            
            <p className="about-text">
              Depuis 1998, <strong>Les Douceurs de Françoise</strong> perpétue la tradition 
              boulangère française au cœur du Plessis-Robinson. Notre secret ? 
              Un amour inconditionnel pour les produits de qualité et un savoir-faire 
              artisanal transmis avec passion.
            </p>
            
            <p className="about-text">
              Chaque matin, avant l'aube, notre équipe s'affaire à préparer des pains 
              croustillants, des viennoiseries dorées à point et des pâtisseries qui 
              émerveillent les papilles. Nous sélectionnons les meilleures farines 
              et ingrédients pour vous offrir des produits d'exception.
            </p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">🌾</div>
                <div className="value-content">
                  <h4>Ingrédients Locaux</h4>
                  <p>Farines françaises et produits de saison</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">👨‍🍳</div>
                <div className="value-content">
                  <h4>Fait Maison</h4>
                  <p>Tout est préparé sur place, chaque jour</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <div className="value-content">
                  <h4>Avec Amour</h4>
                  <p>La passion au cœur de chaque création</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
