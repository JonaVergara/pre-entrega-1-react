import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>TennisPro</h3>
          <p>La mejor tienda de raquetas y accesorios de tenis del país.</p>
        </div>

        <div className="footer-links">
          <h4>Categorías</h4>
          <ul>
            <li>Head</li>
            <li>Babolat</li>
            <li>Wilson</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>info@tennispro.com</p>
          <p> +54 11 1234-5678</p>
          <p> Buenos Aires, Argentina</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 TennisPro. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer