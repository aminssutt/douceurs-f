import { useEffect, useRef, useState } from 'react'
import './Products.css'

const products = [
  {
    category: 'Pains',
    icon: '🥖',
    items: [
      { name: 'Baguette Tradition', desc: 'Croûte dorée, mie alvéolée', price: '1,30€' },
      { name: 'Pain de Campagne', desc: 'Farine de seigle, goût rustique', price: '3,50€' },
      { name: 'Pain aux Céréales', desc: 'Graines et céréales variées', price: '4,20€' },
      { name: 'Pain Complet', desc: 'Farine complète, riche en fibres', price: '3,80€' },
    ]
  },
  {
    category: 'Viennoiseries',
    icon: '🥐',
    items: [
      { name: 'Croissant au Beurre', desc: 'Pur beurre AOP, feuilletage croustillant', price: '1,40€' },
      { name: 'Pain au Chocolat', desc: 'Deux barres de chocolat noir', price: '1,50€' },
      { name: 'Chausson aux Pommes', desc: 'Compote maison, pâte feuilletée', price: '2,20€' },
      { name: 'Brioche Tressée', desc: 'Moelleuse et parfumée', price: '4,50€' },
    ]
  },
  {
    category: 'Pâtisseries',
    icon: '🎂',
    items: [
      { name: 'Éclair au Chocolat', desc: 'Crème pâtissière, glaçage fondant', price: '3,80€' },
      { name: 'Tarte aux Fruits', desc: 'Fruits de saison, crème diplomate', price: '4,50€' },
      { name: 'Paris-Brest', desc: 'Praliné noisette, pâte à choux', price: '5,20€' },
      { name: 'Millefeuille', desc: 'Crème vanille, caramel', price: '4,80€' },
    ]
  }
]

function Products() {
  const [activeCategory, setActiveCategory] = useState(0)
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

  return (
    <section id="products" className="products" ref={sectionRef}>
      <div className="products-bg"></div>
      
      <div className="container">
        <div className="section-title">
          <h2>Nos Créations</h2>
          <p>Découvrez notre sélection de produits artisanaux, préparés avec amour chaque jour</p>
        </div>

        <div className="products-tabs">
          {products.map((product, index) => (
            <button
              key={product.category}
              className={`tab-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span className="tab-icon">{product.icon}</span>
              <span className="tab-text">{product.category}</span>
            </button>
          ))}
        </div>

        <div className="products-content">
          <div className="products-image">
            <img 
              src="/image2.jpg" 
              alt={products[activeCategory].category}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&h=700&fit=crop'
              }}
            />
            <div className="products-image-overlay">
              <span className="overlay-icon">{products[activeCategory].icon}</span>
              <span className="overlay-text">{products[activeCategory].category}</span>
            </div>
          </div>

          <div className="products-list">
            {products[activeCategory].items.map((item, index) => (
              <div 
                key={item.name} 
                className="product-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.desc}</p>
                </div>
                <div className="product-price">
                  <span className="price-line"></span>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-note">
          <p>✨ Tous nos produits sont fabriqués sur place, chaque jour, avec des ingrédients sélectionnés</p>
        </div>
      </div>
    </section>
  )
}

export default Products
