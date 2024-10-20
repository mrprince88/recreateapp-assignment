import Button from "src/components/Button";

import s from "./styles.module.css";

const items = [
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Use Cases",
    href: "/use-cases",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Heading = () => (
  <header className={s.container}>
    <img src="/logo.svg" alt="logo" />

    <nav>
      <ul className={s.navMenu}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
        <li>
          <Button>Request a quote</Button>
        </li>
      </ul>
    </nav>

    <div className={s.hamburgerMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
);

export default Heading;
