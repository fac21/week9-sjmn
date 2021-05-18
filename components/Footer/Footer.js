import Container from "../Container/Container";

import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; Rollernuts
      </Container>
    </footer>
  );
}
