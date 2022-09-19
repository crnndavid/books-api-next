import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles["main-content"]}>{children}</main>
    </div>
  );
};

export default Layout;
