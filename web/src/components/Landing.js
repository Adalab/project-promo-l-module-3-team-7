import '../style/layout/_landing-page.scss';
import '../style/layout/Footer.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../images/logo-awesome-profile-cards.svg';

function Landing() {
  return (
    <div className='landing-page'>
      <div className='page__column'>
        <main className='main-landing'>
          <img
            src={logo}
            className='main-landing__logo imageSpin'
            alt='Awesome logo'
            title='Awesome logo'
          />
          <section className='main-landing__content'>
            <h1 className='main-landing__content--title'>
              Crea tu tarjeta de visita
            </h1>
            <h2 className='main-landing__content--subtitle'>
              Crea mejores contactos profesionales de forma fácil y cómoda
            </h2>
          </section>
          <section className='main-landing__rectangle'>
            <div className='main-landing__rectangle--item'>
              <i
                className='fa fa-landing fa-object-ungroup'
                aria-hidden='true'
              ></i>
              <span className='main-landing__rectangle--item-text'>diseña</span>
            </div>
            <div className='main-landing__rectangle--item'>
              <i className='fa fa-landing fa-keyboard-o' aria-hidden='true'></i>
              <span className='main-landing__rectangle--item-text'>
                rellena
              </span>
            </div>
            <div className='main-landing__rectangle--item'>
              <i className='fa fa-landing fa-share-alt' aria-hidden='true'></i>
              <span className='main-landing__rectangle--item-text'>
                comparte
              </span>
            </div>
          </section>
          <Link
            className='main-landing__link link_animation'
            to='/card-generator'
          >
            Comenzar
          </Link>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
