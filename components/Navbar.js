import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={navStyles.navContainer}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;