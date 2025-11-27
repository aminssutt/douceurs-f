import { useEffect, useRef, useState } from 'react'
import './Contact.css'

function Contact() {
  const sectionRef = useRef(null)
  const [logoError, setLogoError] = useState(false)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Nous Trouver</h2>
          <p>Venez nous rendre visite au cœur du Plessis-Robinson</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>📍 Adresse</h3>
              <p className="address">
                99 Rue de Fontenay<br />
                92350 Le Plessis-Robinson<br />
                France
              </p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=99+Rue+de+Fontenay+92350+Le+Plessis-Robinson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Itinéraire
              </a>
            </div>

            <div className="contact-card">
              <h3>📞 Contact</h3>
              <a href="tel:+33961625717" className="contact-phone">
                +33 9 61 62 57 17
              </a>
              <p className="contact-hint">
                N'hésitez pas à nous appeler pour vos commandes spéciales
              </p>
            </div>

            <div className="contact-card transport">
              <h3>🚇 Accès</h3>
              <ul className="transport-list">
                <li>
                  <span className="transport-icon">🚌</span>
                  <span>Bus 290, 395 - Arrêt Fontenay</span>
                </li>
                <li>
                  <span className="transport-icon">🚗</span>
                  <span>Parking gratuit à proximité</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="map-container">
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.0547650000002!2d2.2631!3d48.7811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9a9a9a9a9a%3A0x0!2s99%20Rue%20de%20Fontenay%2C%2092350%20Le%20Plessis-Robinson!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Les Douceurs de Françoise"
              ></iframe>
            </div>
            <div className="map-overlay-info">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="map-logo" 
                  onError={() => setLogoError(true)} 
                />
              ) : (
                <div className="map-logo-fallback">🥐</div>
              )}
              <div>
                <strong>Les Douceurs de Françoise</strong>
                <span>Boulangerie Artisanale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
