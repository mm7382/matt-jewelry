import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import './App.css'

const DUMMY_PRODUCTS = [
  { id: 1, name: 'Symmetric Emerald Cut', price: '$1,200', category: 'Loose Gems', image: '' },
  { id: 2, name: 'Hexagonal Geometric Ring', price: '$2,500', category: 'Rings', image: '' },
  { id: 3, name: 'Prism Reflection Necklace', price: '$3,100', category: 'Necklaces', image: '' },
  { id: 4, name: 'Architectural Studs', price: '$850', category: 'Earrings', image: '' },
]

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <section className="section-padding container" id="shop">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Exclusive Gallery</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '30px' 
          }}>
            {DUMMY_PRODUCTS.map(product => (
              <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </section>
        
        <section className="section-padding" id="process" style={{ backgroundColor: 'var(--secondary-bg)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>The Precision Process</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div style={{ padding: '40px', border: '1px solid var(--border-color)', background: 'var(--bg-color)' }}>
                <span style={{ fontSize: '2rem', color: '#666', marginBottom: '20px', display: 'block' }}>01</span>
                <h3>Digital Mapping</h3>
                <p style={{ color: 'var(--accent-color)', marginTop: '15px', lineHeight: '1.8' }}>
                  Every gem starts as a mathematical model. We map each facet to maximize internal light reflection and fire.
                </p>
              </div>
              <div style={{ padding: '40px', border: '1px solid var(--border-color)', background: 'var(--bg-color)' }}>
                <span style={{ fontSize: '2rem', color: '#666', marginBottom: '20px', display: 'block' }}>02</span>
                <h3>Symmetric Execution</h3>
                <p style={{ color: 'var(--accent-color)', marginTop: '15px', lineHeight: '1.8' }}>
                  Our master cutters translate digital precision into physical reality, maintaining sub-micron accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
