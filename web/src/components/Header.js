import '../style/layout/Header.scss';
import logo from '../images/new_logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header__cards'>
      <div className='header__cards--container'>
        <Link className='header__cards--link' to='/'>
          <img
            className='header__cards--photo'
            src={logo}
            title='awesome-profile cards logo'
            alt='landing page link'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
