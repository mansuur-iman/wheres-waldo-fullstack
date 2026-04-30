import { Link } from "react-router";
import { Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.css";
import { useTheme } from "../context/useTheme";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logo}>
            Where&apos;s <span className={styles.accent}>Waldo?</span>
          </h1>
        </Link>

        <div className={styles.right}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <div className={styles.actions}>
            {!user && (
              <>
                <Link to="/login" className={styles.login}>
                  Login
                </Link>
                <Link to="/register" className={styles.register}>
                  Register
                </Link>
              </>
            )}

            {user && (
              <button
                onClick={logout}
                className={styles.register}
                style={{ border: "none " }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
