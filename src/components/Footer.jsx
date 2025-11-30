import { useState } from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="footer-bg-decoration">
        <div className="footer-circle footer-circle-1"></div>
        <div className="footer-circle footer-circle-2"></div>
      </div>

      <div className="container">
        <div className="footer-main">
          {/* Section Logo et Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Les Douceurs de Françoise" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="footer-logo-fallback">🥐</div>
              )}
            </div>
            <div className="footer-brand-text">
              <h3 className="brand-name">Les Douceurs de Françoise</h3>
              <p className="footer-tagline">
                Boulangerie artisanale au cœur du Plessis-Robinson. 
                Savourez l'authenticité de nos créations gourmandes.
              </p>
            </div>
            <div className="footer-social">
              <a 
                href="https://www.facebook.com/p/Les-douceurs-de-fran%C3%A7oise-100088722922395/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                <span>Suivez-nous</span>
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div className="footer-section">
            <h4>
              <span className="section-icon">🧭</span>
              Navigation
            </h4>
            <ul className="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#about">Notre Histoire</a></li>
              <li><a href="#products">Nos Produits</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="footer-section">
            <h4>
              <span className="section-icon">🕐</span>
              Horaires
            </h4>
            <ul className="footer-hours">
              <li>
                <span className="day">Lun - Ven</span>
                <span className="time">07:00 - 19:30</span>
              </li>
              <li>
                <span className="day">Samedi</span>
                <span className="time">08:00 - 19:30</span>
              </li>
              <li>
                <span className="day">Dimanche</span>
                <span className="time">08:00 - 14:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>
              <span className="section-icon">📍</span>
              Nous Trouver
            </h4>
            <div className="footer-contact-info">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=99+Rue+de+Fontenay+92350+Le+Plessis-Robinson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item address"
              >
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span>99 Rue de Fontenay</span>
                  <span>92350 Le Plessis-Robinson</span>
                </div>
              </a>
              <a href="tel:+33961625717" className="contact-item phone">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <span>+33 9 61 62 57 17</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <strong>Les Douceurs de Françoise</strong>
            </p>
            <div className="footer-bottom-center">
              <span className="made-with">
                Fait avec <span className="heart">❤️</span> au Plessis-Robinson
              </span>
            </div>
            <div className="footer-badges">
              <span className="badge">🥖 Artisan</span>
              <span className="badge">🇫🇷 France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
