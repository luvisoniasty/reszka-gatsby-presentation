import PropTypes from 'prop-types'
import React from 'react'
import clients from '../images/clients.jpg'
import teva from '../images/clients/teva-logo-180x64.png'
import undofen from '../images/clients/undofen.png'
import bosch from '../images/clients/bosch.jpg'
import siemens from '../images/clients/siemens-logo-180px.jpg'
import basecamp from '../images/clients/basecamp.jpg'
import dominos from '../images/clients/dominos.png'
import tempur from '../images/clients/tempur.jpg'
import akademiasmaku from '../images/clients/logo-akademia.png'
import philipiak from '../images/clients/philipiak.png'
import results from '../images/results.jpg'
import testwiedzy from '../images/testwiedzy.jpg'
import tempurtop10 from '../images/tempurwyniki.jpg'
import akademiasmakutop10 from '../images/aswyniki.jpg'
import kuchniawppl from '../images/publications/kuchniawppl.jpg'
import echodnia from '../images/publications/echodnia.jpg'
import edziecko from '../images/publications/edziecko.jpg'
import nicponwkuchni from '../images/publications/nicponwkuchni.jpg'
import expressilustrowany from '../images/publications/expressilustrowany.jpg'
import gk24 from '../images/publications/gk24.jpg'
import documents from '../images/documents.jpg'
import YTIcon from '../assets/icons/youtube.svg'
import MigrationIcon from '../assets/icons/file.svg'
import KeyIcon from '../assets/icons/key.svg'
import TechnicalIcon from '../assets/icons/customer-support.svg'
import ContentIcon from '../assets/icons/content.svg'
import OtherIcon from '../assets/icons/clipboards.svg'
import GReszka from '../images/greszka.jpg'
import PerformanceMedia from '../images/performance_media.png'
import HeartIcon from '../assets/icons/love-and-romance.svg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="documents"
          className={`${this.props.article === 'documents' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Dokumenty</h2>
          <span className="image main">
            <img src={documents} alt="Documents" />
          </span>
          <div
            className="documents-section"
            style={{ justifyContent: 'flex-start' }}
          >
            <div className="icon-container">
              <div className="icon">
                <img src={YTIcon} alt="youtube" className="icon" />
              </div>
              <h3>YouTube</h3>
            </div>
            <ul>
              <li>Karcher</li>
              <li>Bonduelle</li>
              <li>Dominos</li>
              <li>Braun</li>
              <li>Kuchnia Lidla</li>
              <li>Akademia smaku</li>
              <li>ORAL-B</li>
            </ul>
          </div>
          <div
            className="documents-section"
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row-reverse',
            }}
          >
            <div className="icon-container">
              <div className="icon" style={{ marginBottom: '12px' }}>
                <img src={MigrationIcon} alt="migration" className="icon" />
              </div>
              <h3>Migracja</h3>
            </div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginRight: '16px',
              }}
            >
              <li>Mazda</li>
              <li>Desa</li>
            </ul>
          </div>
          <div
            className="documents-section"
            style={{ justifyContent: 'flex-start' }}
          >
            <div className="icon-container">
              <div className="icon" style={{ marginBottom: '12px' }}>
                <img src={KeyIcon} alt="key" className="icon" />
              </div>
              <h3 className="align-center">
                Keyword
                <br />
                research
              </h3>
            </div>
            <ul>
              <li>Voltaren</li>
              <li>Yoursmileon</li>
              <li>DESA</li>
              <li>Libero Katowice</li>
              <li>Merlin</li>
              <li>Lidl</li>
              <li>Tempur</li>
              <li>Mercedes</li>
              <li>Braun</li>
              <li>Akademia smaku - aktualizacje</li>
            </ul>
          </div>
          <div
            className="documents-section"
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row-reverse',
            }}
          >
            <div className="icon-container">
              <div className="icon" style={{ marginBottom: '12px' }}>
                <img src={TechnicalIcon} alt="technical" className="icon" />
              </div>
              <h3>Techniczne</h3>
            </div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginRight: '16px',
              }}
            >
              <li>Accu Chek - Audyt SEO</li>
              <li>Galeria Młociny - Audyt SEO & Usability</li>
              <li>blinkee - performance & crawl budget</li>
              <li>GC5 - crawl serwisu</li>
            </ul>
          </div>
          <div
            className="documents-section"
            style={{ justifyContent: 'flex-start' }}
          >
            <div className="icon-container">
              <div className="icon" style={{ marginBottom: '8px' }}>
                <img src={ContentIcon} alt="content" className="icon" />
              </div>
              <h3 className="align-center">Content</h3>
            </div>
            <ul>
              <li>Galeria Młociny - audyt treści</li>
              <li>SONY - uzupełnienie treści na stronie (CMS)</li>
              <li>Semmelrock - uzupełnienie treści na stronie (CMS)</li>
              <li>Yoursmileon - teksty na stronę klienta</li>
              <li>Bosch - analiza + rozbudowa contentu zmywarki</li>
              <li>Dominos - rozkład nagłówków</li>
              <li>Semmelrock - title & description</li>
              <li>BSH - bsh-group, siemens, bosch-home - ALT</li>
              <li>Polocard - ALT</li>
            </ul>
          </div>
          <div
            className="documents-section"
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row-reverse',
            }}
          >
            <div className="icon-container">
              <div className="icon" style={{ marginBottom: '12px' }}>
                <img src={OtherIcon} alt="inne" className="icon" />
              </div>
              <h3>Inne</h3>
            </div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginRight: '16px',
              }}
            >
              <li>Yoursmileon - audyt wdrożeniowy</li>
              <li>Baldivian - audyt wdrożeniowy</li>
              <li>Semmelrock - korelacja GA i GSC z publikacjami w prasie</li>
              <li>Semmelrock - analiza i wytyczne dla dystrbutorów</li>
              <li>Kruk, infokonsument - audyt linkowania</li>
              <li>Tempur - nowa formatka raportu</li>
              <li>Dominos - wytyczne onsite dla nowej wersji</li>
              <li>Vileda - audyt kart produktowych allegro</li>
            </ul>
          </div>
          {close}
        </article>

        <article
          id="clients"
          className={`${this.props.article === 'clients' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Klienci</h2>
          <span className="image main">
            <img src={clients} alt="clients" />
          </span>
          <div className="clients">
            <h3 className="align-center">Byli</h3>
            <img src={teva} alt="teva" style={{ width: '165px' }} />
            <h3 className="align-center">Aktualni</h3>
            <img
              src={akademiasmaku}
              alt="akademia smaku"
              style={{ width: '350px' }}
            />
            <img src={tempur} alt="tempur" style={{ width: '300px' }} />
            <img src={dominos} alt="dominos" style={{ width: '165px' }} />
            <img src={philipiak} alt="philipiak" style={{ width: '165px' }} />
            <img src={basecamp} alt="basecamp" style={{ width: '165px' }} />
            <img src={bosch} alt="bosch" style={{ width: '165px' }} />
            <img src={siemens} alt="siemens" style={{ width: '165px' }} />
            <h3>Przyszli</h3>
            <img src={undofen} alt="undofen" style={{ width: '165px' }} />
          </div>
          {close}
        </article>

        <article
          id="results"
          className={`${this.props.article === 'results' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Wyniki</h2>
          <span className="image main">
            <img src={results} alt="Wyniki" />
          </span>
          <div className="clients">
            <h3>Test wiedzy</h3>
            <img src={testwiedzy} alt="test wiedzy" />
            <h3>Tempur TOP 10</h3>
            <img
              src={tempurtop10}
              alt="top 10 tempur"
              style={{ width: '80%' }}
            />
            <h3>Akademia Smaku TOP 10</h3>
            <img
              src={akademiasmakutop10}
              alt="top 10 akademia smaku"
              style={{ width: '80%' }}
            />
            <h3>Publikacje</h3>
            <a
              href="https://kuchnia.wp.pl/szklanka-maki-i-szklanka-cukru-ile-to-gramow-6408073748154497a  "
              style={{ marginBottom: '5px' }}
            >
              Szklanka mąki i szklanka cukru - ile to gramów?
            </a>
            <img
              src={kuchniawppl}
              alt="kuchniawppl"
              style={{ width: '80%', marginBottom: '16px' }}
            />
            <a
              href="https://echodnia.eu/tradycyjne-potrawy-wielkanocne-co-przygotowac-na-swiateczny-stol/ar/c17-14896939"
              style={{ marginBottom: '5px' }}
            >
              Tradycyjne potrawy wielkanocne - co przygotować na świąteczny
              stół?
            </a>
            <img
              src={echodnia}
              alt="echodnia"
              style={{ width: '80%', marginBottom: '16px' }}
            />
            <a
              href="https://www.edziecko.pl/edziecko/7,79308,24931026,jaki-materac-dla-dziecka-podpowiadamy.html "
              style={{ marginBottom: '5px' }}
            >
              Jaki materac dla dziecka? Podpowiadamy!
            </a>
            <img
              src={edziecko}
              alt="edziecko"
              style={{ width: '80%', marginBottom: '16px' }}
            />
            <a
              href="https://nicponwkuchni.pl/pizza-bezglutenowa-przepis/"
              style={{ marginBottom: '5px' }}
            >
              Pizza bezglutenowa. Prosty przepis na ciasto i dodatki
            </a>
            <img
              src={nicponwkuchni}
              alt="nicponwkuchni"
              style={{ width: '80%', marginBottom: '16px' }}
            />
            <a
              href="https://expressilustrowany.pl/przetwory-z-jablek-nie-tylko-dzemy/ar/c8-14239289"
              style={{ marginBottom: '5px' }}
            >
              Przetwory z jabłek: nie tylko dżemy
            </a>
            <img
              src={expressilustrowany}
              alt="expressilustrowany"
              style={{ width: '80%', marginBottom: '16px' }}
            />
            <a
              href="https://gk24.pl/kaszel-w-nocy-u-dziecka-czego-jest-objawem-i-jak-go-leczyc/ar/c14-14623275"
              style={{ marginBottom: '5px' }}
            >
              Kaszel w nocy u dziecka – czego jest objawem i jak go leczyć?
            </a>
            <img
              src={gk24}
              alt="gk24"
              style={{ width: '80%', marginBottom: '16px' }}
            />
          </div>
          {close}
        </article>

        <article
          id="partnership"
          className={`${this.props.article === 'partnership' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Współpraca</h2>
          <div className="love">
            <div className="circle" style={{ marginBottom: '20px' }}>
              <img src={GReszka} alt="Grzegorz Reszka" style={{ borderRadius: '50%'}}/>
            </div>
            <div className="heart-icon">
            <img
              src={HeartIcon}
              alt="heart"
              style={{ width: '64px', height: '64px'}}
            />
            </div>
            <div className="circle" style={{ marginTop: '20px' }}>
              <img src={PerformanceMedia} alt="Performance media" />
            </div>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
