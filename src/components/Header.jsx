import React from "react";
import hero_umbrela from "../assets/img/png/hero umbrela.png";

function Header() {
  return (
    <>
      <section className=" bg-black py-sm-5 py-4 overflow-hidden" id="home">
        <div className="container z_index_4 position-relative">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5">
              <h1
                className=" ff_lato fw_bolder fs_7xl text_white mb-0 z_index_4 position-relative"
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                Welcome to <span className=" text_primary">Cyber Drops</span>
              </h1>
              <p
                className=" ff_lato fw-normal fs_md text_white mb-2 mt-xl-4 mt-3 pt-1"
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <a
                className=" py_12 px-4 text_white bg_primary rounded-3 d-inline-block mt-xl-5 mt-3 connect_btn_hover transition"
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
                href="#"
              >
                Explore Now
              </a>
            </div>
            <div className="col-md-5">
              <img
                className=" w-100 px-sm-5 px-4 px-md-0 px-lg-4 umbrela mt-4 mt-md-0"
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
                src={hero_umbrela}
                alt="hero_umbrela"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
