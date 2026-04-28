import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Where's Waldo? Game. All rights
      reserved.
    </footer>
  );
}
