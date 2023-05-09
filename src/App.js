import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidetoshow from "./components/Slidetoshow";
import Works from "./components/Works";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Nav from "./components/Nav";
import Header from "./components/Header";
import OurMission from "./components/OurMission";
import Algo from "./components/Algo";
import What from "./components/What";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Loader from "./components/Loader";
import BackTop from "./components/BackTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
    <>

        <Loader />

      <BackTop />
      <div className=" bg-black overflow-hidden">
        <div className=" min_vh_100 d-flex flex-column justify-content-center bg-black">
          <div style={{ zIndex: "123" }} className=" position-relative">
            <div className="light_white_shadow_nav z_index_1"></div>
            <Nav />
          </div>
          <div className=" flex-grow-1 d-flex justify-content-center align-items-center">
            <Header />
          </div>
        </div>
        <OurMission />
        <Partners />
        <Algo />
        <What />
        <Works />
        <Slidetoshow />
        <Roadmap />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
