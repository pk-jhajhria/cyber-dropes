import React from "react";
import play_bit from "../assets/img/png/play.png";
import capital from "../assets/img/png/img 24.png";
import trading from "../assets/img/png/trading.png";
import focus from "../assets/img/png/focus.png";

function Partners() {
  return (
    <>
      <section
        className=" pb-5 pt-sm-5 bg-black bg_partner_img position-relative"
        id="partner"
      >
        <div className="light_white_shadow_partners z_index_1"></div>
        <div className="container">
          <h2
            className=" ff_lato fw-bold fs_4xl text_white text-center mb_60_custom pb-xl-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-deley="1000"
          >
            Part<span className=" text_primary">ners</span>
          </h2>
          <div className="row align-items-center justify-content-center">
            <div
              className="col-xl-4 mt-xl-3 mt-5"
              data-aos="fade-up-right"
              data-aos-easing="linear"
              data-aos-duration="2000"
              data-aos-deley="1000"
            >
              <div className="position-relative border_gridient_partners d-flex justify-content-center align-items-center">
                <img
                  className="h_145 py-sm-5 py-3 px-sm-5"
                  src={play_bit}
                  alt="play_bit"
                />
              </div>
              <p className=" text-center mt-md-4 mt-2 ff_lato fw-bold fs_md mb-0 text_black">
                Playbit
              </p>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div
                  className="col-4 mt-3"
                  data-aos="fade-up-right"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  data-aos-deley="1000"
                >
                  <div className="position-relative border_gridient_partners d-flex justify-content-center align-items-center ">
                    <img className="h_145 " src={capital} alt="capital" />
                  </div>
                  <p className=" text-center mt-2 mt-md-4 ff_lato fw-bold fs_md mb-0 text_black">
                    24 Capital
                  </p>
                </div>
                <div
                  className="col-4 mt-3"
                  data-aos="fade-up-left"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  data-aos-deley="1000"
                >
                  <div className="position-relative border_gridient_partners d-flex justify-content-center align-items-center ">
                    <img className="h_145" src={trading} alt="trading" />
                  </div>
                  <p className=" text-center mt-md-4 mt-2 ff_lato fw-bold fs_md mb-0 text_black">
                    TradingHive
                  </p>
                </div>
                <div
                  className="col-4 mt-3"
                  data-aos="fade-up-left"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  data-aos-deley="1000"
                >
                  <div className="position-relative border_gridient_partners d-flex justify-content-center align-items-center ">
                    <img
                      className="py-sm-5 py-3 px-sm-5 h_145"
                      src={focus}
                      alt="focus"
                    />
                  </div>
                  <p className=" text-center mt-md-4 mt-2 ff_lato fw-bold fs_md mb-0 text_black">
                    Focus Group Equities
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p
            className=" text-center ff_lato fw-bold fs_md text_primary mt_60_custom pt-sm-3 p-xl-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-deley="1000"
          >
            For business and collaborations, contact us team@cyberdrops.finance
          </p>
        </div>
      </section>
    </>
  );
}

export default Partners;
