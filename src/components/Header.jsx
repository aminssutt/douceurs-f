import { useState, useEffect } from 'react'
import './Header.css'

function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#about', label: 'Notre Histoire' },
    { href: '#products', label: 'Nos Produits' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#hours', label: 'Horaires' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#accueil" className="logo">
          <div className="logo-text">
            <span className="logo-name">Les Douceurs</span>
            <span className="logo-subtitle">de Françoise</span>
          </div>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
