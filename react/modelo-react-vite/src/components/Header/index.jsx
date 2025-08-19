import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li>
          <Link to="/" className={styles.link}>
            <FaHome size={24} />
          </Link>
        </li>
        <li>
          <Link to="/profile" className={styles.link}>
            <FaUserAlt size={24} />
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.link}>
            <FaSignInAlt size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
