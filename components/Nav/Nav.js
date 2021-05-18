import Link from 'next/link';

// import Container from '../Container/';

import styles from './Nav.module.css';

export default function Nav({ children }) {
  return (
    <nav className={styles.nav}>
      {/* <Container className={styles.navContainer}> */}
        <p className={styles.title}>
          <Link href="/">
            <a>
              RollerNuts
            </a>
          </Link>
        </p>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            
            <strong className="sr-only">Cart</strong>
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>
      {/* </Container> */}
      </nav>
  )
}