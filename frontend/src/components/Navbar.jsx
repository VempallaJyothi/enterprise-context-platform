import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useAuth } from "../context/AuthContext";

const NAV_LINKS = [
  { label: "Platform", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "Architecture", path: "/architecture" },
  { label: "Why Us", path: "/why-us" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar({ brand }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <div className="navbar__logo-mark">{brand.charAt(0)}</div>
        <span className="navbar__logo-text">{brand}</span>
      </Link>

      <ul className={menuOpen ? "navbar__links navbar__links--open" : "navbar__links"}>
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} end className="navbar__link" onClick={closeMenu}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="navbar__cta" onClick={closeMenu}>
        Request a Demo →
      </Link>

      {isLoggedIn ? (
        <button className="navbar__auth" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="navbar__auth" onClick={closeMenu}>
          Login
        </Link>
      )}

      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Navbar;