import React from "react";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Modal from "../components/layouts/Modal";
import Portofolio from "../components/layouts/Portofolio";
import Services from "../components/layouts/Services";
import Team from "../components/layouts/Team";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <Portofolio />
      <About />
      <Team />
      <Contact />
      <Footer />
      <Modal />
    </>
  );
}

export default App;
