<div className="mobile-nav mean-container">
  <div className="mean-bar">
    <Link
      to="#nav"
      className="meanmenu-reveal"
      style={{ right: 0, left: "auto" }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Link>
    <nav className="mean-nav">
      <ul className="navbar-nav ms-auto" style={{ display: "none" }}>
        {renderedNav}
      </ul>
    </nav>
  </div>

  <Link to="/" className="mobile-brand">
    <img src="/images/logo.png" alt="logo" className="blue-logo" />
  </Link>

  <div className="navbar-option d-flex align-items-center">
    <div className="navbar-option-item navbar-option-dots mobile-hide">
      <button
        className="dropdown-toggle"
        type="button"
        id="mobileOptionDropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="flaticon-menu-1"></i>
      </button>
      <div className="dropdown-menu" aria-labelledby="mobileOptionDropdown">
        <div className="navbar-option-item navbar-option-cart">
          <Link to="#" className="productCart">
            <i className="flaticon-supermarket-basket"></i>
          </Link>
          <span className="option-badge">2</span>
        </div>
        <div className="navbar-option-item navbar-option-order">
          <Link to="shops-grid.html" className="btn">
            <i className="flaticon-shopping-cart-black-shape"></i>
          </Link>
        </div>
      </div>
    </div>

    <Search />

    <div className="navbar-option-item navbar-option-cart mobile-block">
      <Link to="#" className="productCart">
        <i className="flaticon-supermarket-basket"></i>
      </Link>
      <span className="option-badge">2</span>
    </div>
    <div className="navbar-option-item navbar-option-order mobile-block">
      <Link href="shops-grid.html" className="btn">
        <i className="flaticon-shopping-cart-black-shape"></i>
      </Link>
    </div>
  </div>
</div>;
