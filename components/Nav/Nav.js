import Link from "next/link";
import Image from "next/image";
import Container from "../Container/Container.js";

import styles from "./Nav.module.css";

export default function Nav({ children }) {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <p className={styles.title}>
          <Link href="/">
            <a>
              RollerNuts
              <Image
                src="/../public/images/donut-logo.svg"
                alt="donut-logo"
                width={100}
                height={100}
                className=""
              ></Image>
            </a>
          </Link>
        </p>

        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <strong className="sr-only">Cart</strong>
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>
      </Container>
    </nav>
  );
}
