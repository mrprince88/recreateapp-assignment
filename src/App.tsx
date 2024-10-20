import Heading from "src/components/HeaderSection";
import HeroSection from "src/components/HeroSection";
import ServicesSection from "src/components/ServicesSection";
import Layout from "src/components/Layout";
import Footer from "src/components/Footer";

import "./App.css";
import "./variables.css";

function App() {
  return (
    <Layout>
      <Heading />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
