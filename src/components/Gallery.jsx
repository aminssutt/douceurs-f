import { useEffect, useRef, useState } from 'react'
import './Gallery.css'

const images = [
  { src: '/image1.jpg', fallback: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop', alt: 'Pain artisanal' },
  { src: '/image2.jpg', fallback: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&h=400&fit=crop', alt: 'Viennoiseries' },
  { src: '/image3.jpg', fallback: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop', alt: 'Pâtisseries' },
  { src: '/image4.jpg', fallback: 'https://images.unsplash.com/photo-1517433670267-30f41c087ed8?w=600&h=400&fit=crop', alt: 'Boulangerie' },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleImageError = (e, fallback) => {
    e.target.src = fallback
  }

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Notre Galerie</h2>
          <p>Un aperçu de nos créations gourmandes</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`gallery-item gallery-item-${index + 1}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                onError={(e) => handleImageError(e, image.fallback)}
              />
              <div className="gallery-overlay">
                <span className="gallery-zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            onError={(e) => handleImageError(e, selectedImage.fallback)}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
