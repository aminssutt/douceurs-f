import { useEffect, useRef } from 'react'
import './Hours.css'

const schedule = [
  { day: 'Lundi', hours: '07:00 - 19:30', isOpen: true },
  { day: 'Mardi', hours: '07:00 - 19:30', isOpen: true },
  { day: 'Mercredi', hours: '07:00 - 19:30', isOpen: true },
  { day: 'Jeudi', hours: '07:00 - 19:30', isOpen: true },
  { day: 'Vendredi', hours: '07:00 - 19:30', isOpen: true },
  { day: 'Samedi', hours: '08:00 - 19:30', isOpen: true },
  { day: 'Dimanche', hours: '08:00 - 14:00', isOpen: true },
]

function Hours() {
  const sectionRef = useRef(null)
  
  const today = new Date().getDay()
  const dayMap = [6, 0, 1, 2, 3, 4, 5] // Mapping JS day (0=Sunday) to our array
  const currentDayIndex = dayMap[today]

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
    <section id="hours" className="hours" ref={sectionRef}>
      <div className="hours-decoration">
        <div className="deco-bread">🥖</div>
        <div className="deco-croissant">🥐</div>
      </div>
      
      <div className="container">
        <div className="section-title">
          <h2>Nos Horaires</h2>
          <p>Nous vous accueillons avec le sourire tous les jours de la semaine</p>
        </div>

        <div className="hours-content">
          <div className="hours-card">
            <div className="hours-header">
              <div className="hours-icon">🕐</div>
              <h3>Heures d'ouverture</h3>
            </div>
            
            <ul className="schedule-list">
              {schedule.map((item, index) => (
                <li 
                  key={item.day}
                  className={`schedule-item ${currentDayIndex === index ? 'today' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="schedule-day">
                    {item.day}
                    {currentDayIndex === index && <span className="today-badge">Aujourd'hui</span>}
                  </span>
                  <span className="schedule-dots"></span>
                  <span className={`schedule-hours ${item.isOpen ? '' : 'closed'}`}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hours-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>Arrivée du pain chaud dès l'ouverture !</span>
            </div>
          </div>

          <div className="hours-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Notre Adresse</h4>
              <p>99 Rue de Fontenay</p>
              <p>92350 Le Plessis-Robinson</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Téléphone</h4>
              <a href="tel:+33961625717">+33 9 61 62 57 17</a>
            </div>
            
            <div className="info-card special">
              <div className="info-icon">🎂</div>
              <h4>Commandes Spéciales</h4>
              <p>Gâteaux d'anniversaire, pièces montées... Contactez-nous 48h à l'avance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hours
