import s from "./styles.module.css";

const Footer = () => (
  <footer className={s.container}>
    <img src="/logo-light.svg" alt="Logo" />

    <nav className={s.navMenu}>
      <ul>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/use-cases">Use Cases</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
