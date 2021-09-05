import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="navbar-brand" to="index.html">
      <img src="/images/logo.png" alt="logo" className="logo" />
    </Link>
  );
}
