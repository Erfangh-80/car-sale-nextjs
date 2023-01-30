import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>car slate</h2>
          <p>choose an buy your car</p>
        </Link>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <Link href="https://github.com/erfangh-80" target="_blank">
          Erfan Github
        </Link>
        | nextjs | Car sales project &copy;
      </footer>
    </>
  );
};

export default Layout;
