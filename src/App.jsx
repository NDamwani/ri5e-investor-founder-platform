import Footer from "./components/Footer";
import Header from "./components/Header";
import Team from "./components/Team";
import React from "react";
import Hero from "./components/Hero/Hero";
import Vision from "./components/Vision/Vision";
import Services from "./components/Service/Services";
import News from "./components/News";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Vision />
      <Services />
      <News />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
