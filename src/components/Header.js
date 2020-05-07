import PropTypes from 'prop-types'
import React from 'react'
import performanceMedia from '../images/performance_media.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={performanceMedia} alt="Performance media" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Grzegorz Reszka</h1>
        <h3>Młodszy specjalista SEO</h3>
        <p>
          Rozmowa roczna
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('documents')
            }}
          >
            Dokumenty
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('clients')
            }}
          >
            Klienci
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('results')
            }}
          >
            Wyniki
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('partnership')
            }}
          >
            Współpraca
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
