<<<<<<< HEAD

import "../style/layout/Header.scss";
import logo from "../images/logo-awesome-profile-cards.svg"

function Header() {
    return (
        <header className="header__cards">
            <div className="header__cards--container">
                <a className="header__cards--link" href="index.html" alt="landing page link"
                ><img
                        className="header__cards--photo"
                        src={logo}
                        title="awesome-profile cards logo"
                    /></a>
            </div>
        </header>
    );
}

export default Header;
=======
import "../style/layout/Header.scss";
import logo from "../images/logo-awesome-profile-cards.svg";

function Header() {
  return (
    <header className="header__cards">
      <div className="header__cards--container">
        <a
          className="header__cards--link"
          href="index.html"
          alt="landing page link"
        >
          <img
            className="header__cards--photo"
            src={logo}
            title="awesome-profile cards logo"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
>>>>>>> ef7a318701b1ce8869841e63becafbbf125fbf6f
