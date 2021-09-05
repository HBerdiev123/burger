import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar bg-main">
      <div className="container">
        <div className="topbar-inner">
          <div className="topbar-item topbar-padding">
            <ul className="social-list social-list-white">
              <li>
                <Link to="">
                  <i className="flaticon-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="flaticon-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="flaticon-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="flaticon-youtube"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="flaticon-instagram-1"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="topbar-item">
            <div className="topbar-right d-flex flex-wrap topbar-right justify-content-center justify-content-md-start full-height">
              <div className="topbar-right-item topbar-padding color-white">
                <i className="flaticon-clock"></i>
                Friday Closed
              </div>
              <div className="topbar-right-item topbar-padding color-white">
                <i className="flaticon-placeholder-1"></i>
                12 Poor Street, New York.
              </div>
              <div className="topbar-right-item topbar-padding color-white">
                <i className="flaticon-smartphone-call"></i>
                <a href="tel:001-964-565-87652" className="color-white">
                  +1 964 565 87652
                </a>
              </div>
              <div className="topbar-right-item topbar-padding language-button language-option">
                <button
                  className="dropdown-toggle color-white lang-compo"
                  type="button"
                  id="language1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/images/uk.png" alt="flag" />
                  English
                </button>
                <div
                  className="dropdown-menu language-dropdown-menu"
                  aria-labelledby="language1"
                >
                  <Link className="dropdown-item" to="">
                    <img src="/images/uk.png" alt="flag" />
                    English
                  </Link>
                  <Link className="dropdown-item" to="">
                    <img src="/images/germany.png" alt="flag" />
                    Deutsch
                  </Link>
                  <Link className="dropdown-item" to="">
                    <img src="/images/china.png" alt="flag" />
                    简体中文
                  </Link>
                  <Link className="dropdown-item" to="">
                    <img src="/images/arab.png" alt="flag" />
                    العربيّة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
