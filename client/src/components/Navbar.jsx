import { Link } from "react-router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">
          <h1 className={styles.logo}>Where's Waldo?</h1>
        </Link>
        <div className={styles.left}>
          <Link to="/login">
            <button className={styles.login}>Login</button>
          </Link>
          <Link to="/register">
            <button className={styles.register}>Register</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
