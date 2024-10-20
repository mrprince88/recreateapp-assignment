import Button from "src/components/Button";

import s from "./styles.module.css";

const companies = [
  {
    name: "Amazon",
    logo: "/companies/amazon.svg",
  },
  {
    name: "Dribble",
    logo: "/companies/dribble.svg",
  },
  {
    name: "Hubspot",
    logo: "/companies/hubspot.svg",
  },
  {
    name: "Notion",
    logo: "/companies/notion.svg",
  },
  { name: "Netflix", logo: "/companies/netflix.svg" },
  { name: "Zoom", logo: "/companies/zoom.svg" },
];

const HeroSection = () => (
  <section>
    <div className={s.container}>
      <div className={s.textSection}>
        <h1 className={s.heroTitle}>
          Navigating the digital landscape for success
        </h1>
        <p className={s.heroSubtitle}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button variant="secondary">Book a consultation</Button>
      </div>
      <img
        className={s.hero__image}
        src="/illustration.svg"
        alt="Illustration"
      />
    </div>
    <div className={s.companies}>
      {companies.map((company) => (
        <img
          key={company.name}
          className={s.companyLogo}
          src={company.logo}
          alt={company.name}
        />
      ))}
    </div>
  </section>
);

export default HeroSection;
