import cn from "classnames";

import s from "./styles.module.css";

const SvgIcon = ({ backgroundColor = "#191A23", iconColor = "#B9FF66" }) => (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20.5" cy="20.5" r="20.5" fill={backgroundColor} />
    <path
      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
      fill={iconColor}
    />
  </svg>
);

const ServicesSection = () => (
  <section className={s.section}>
    <div className={s.textContainer}>
      <h2 className={s.heading}>Services</h2>
      <p>
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>
    </div>

    <div className={s.container}>
      <div className={cn(s.card, s.primaryCard)}>
        <div className={s.innerContainer}>
          <h3>
            <span>Search engine</span>
            <span>Optimization</span>
          </h3>
          <a className={s.cardAction}>
            <SvgIcon />
            Learn more
          </a>
        </div>
        <img src="/services/seo.svg" alt="SEO" />
      </div>

      <div className={cn(s.card, s.secondaryCard)}>
        <div className={s.innerContainer}>
          <h3>
            <span>Pay-per-click</span>
            <span>Advertising</span>
          </h3>
          <a className={s.cardAction}>
            <SvgIcon />
            Learn more
          </a>
        </div>
        <img src="/services/pay-per-click.svg" alt="PPC" />
      </div>

      <div className={cn(s.card, s.tertiaryCard)}>
        <div className={s.innerContainer}>
          <h3>
            <span>Social Media</span>
            <span>Marketing</span>
          </h3>
          <a className={s.cardAction}>
            <SvgIcon backgroundColor="#fff" iconColor="#000" />
            Learn more
          </a>
        </div>
        <img src="/services/social-media.svg" alt="Social Media" />
      </div>

      <div className={cn(s.card, s.primaryCard)}>
        <div className={s.innerContainer}>
          <h3>
            <span>Email marketing</span>
          </h3>
          <a className={s.cardAction}>
            <SvgIcon />
            Learn more
          </a>
        </div>
        <img src="/services/email-marketing.svg" alt="Email Marketing" />
      </div>

      <div className={cn(s.card, s.secondaryCard)}>
        <div className={s.innerContainer}>
          <h3>
            <span>Content</span>
            <span>Creation</span>
          </h3>
          <a className={s.cardAction}>
            <SvgIcon />
            Learn more
          </a>
        </div>
        <img src="/services/content-creation.svg" alt="Content Creation" />
      </div>

      <div className={cn(s.card, s.tertiaryCard)}>
        <div className={s.innerContainer}>
          <h3>
            <span>Analytics and</span>
            <span>Tracking</span>
          </h3>
          <a className={s.cardAction}>
            <SvgIcon backgroundColor="#fff" iconColor="#000" />
            Learn more
          </a>
        </div>
        <img src="/services/analytics.svg" alt="Analytics" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
