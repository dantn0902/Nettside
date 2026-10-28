import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "CV", to: "/cv" },
  { label: "Blog", to: "/blog" },
  { label: "Socials", to: "/socials" },
];

export default function Navbar() {
  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          DTN
        </NavLink>

        <div className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
