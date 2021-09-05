import React from "react";
import { Link, useLocation } from "react-router-dom";

import Search from "./searchBar";
import Logo from "./logo";
import Registration from "./registration";

export default function MainNavigation() {
  const urlPath = useLocation().pathname;

  const navs = [
    { url: "/", title: "Home" },
    { url: "/menu", title: "Menu" },
    { url: "/contacts", title: "Contact Us" }
  ];

  const renderedNav = navs.map((item) => {
    const curPathClass = item.url === urlPath ? "nav-link active" : "nav-link";
    return (
      <li className="nav-item">
        <Link to={item.url} className={curPathClass}>
          {item.title}
        </Link>

        {/* <Link className="mean-expand" to="/" style={{ fontSize: "18px" }}>
          +
        </Link> */}
      </li>
    );
  });

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <Logo />
        <div className="mean-push"></div>
        <div
          className="collapse navbar-collapse mean-menu"
          id="navbarSupportedContent"
          style={{ display: "none" }}
        >
          <ul className="navbar-nav ms-auto">{renderedNav}</ul>
        </div>

        <div className="navbar-option d-flex align-items-center">
          <Registration />
          <Search />

          <div className="navbar-option-item navbar-option-cart">
            <Link className="productCart" to="#">
              <i class="flaticon-supermarket-basket"></i>
            </Link>
            <span class="option-badge">2</span>
          </div>
          <div className="navbar-option-item navbar-option-order">
            <Link to="#" className="btn text-nowrap">
              Order Online{" "}
              <i className="flaticon-shopping-cart-black-shape"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
