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

      <div className="container">
        <div className="footer-content">
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
              <div className="footer-logo-text">
                <span className="brand-name">Les Douceurs</span>
                <span className="brand-subtitle">de Françoise</span>
              </div>
            </div>
            <p className="footer-tagline">
              Votre boulangerie artisanale au Plessis-Robinson depuis 1998.
              Pain frais, viennoiseries et pâtisseries faites maison avec passion.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/p/Les-douceurs-de-fran%C3%A7oise-100088722922395/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#about">Notre Histoire</a></li>
              <li><a href="#products">Nos Produits</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#hours">Horaires</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <span className="contact-icon">📍</span>
                <span>99 Rue de Fontenay, 92350 Le Plessis-Robinson</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+33961625717">+33 9 61 62 57 17</a>
              </li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4>Horaires</h4>
            <ul>
              <li>Lun - Ven : 07:00 - 19:30</li>
              <li>Samedi : 08:00 - 19:30</li>
              <li>Dimanche : 08:00 - 14:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Les Douceurs de Françoise. Tous droits réservés.</p>
          <p className="footer-credit">
            Fait avec ❤️ au Plessis-Robinson
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
