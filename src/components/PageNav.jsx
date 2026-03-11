import { NavLink, useNavigate } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";

function PageNav() {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <li>
          {isAuthenticated ? (
            <button onClick={handleClick}>Logout</button>
          ) : (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
