import React from "react";
import what2 from "../assets/img/png/what2.png";
import what3 from "../assets/img/png/what3.png";
import umbrela_img from "../assets/img/png/what umbrela img.png";

function What() {
  return (
    <>
      <section className=" py-5 z_index_4 position-relative">
        <img
          className=" position-absolute umbrela what_umbrela_img w_15"
          src={umbrela_img}
          alt="umbrela_img"
        />
        <div className="light_white_shadow_partners z_index_1"></div>
        <div className="container z_index_4 position-relative py-sm-5">
          <div className="row justify-content-between align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-5">
              <div
                className="row mt-sm-5 mt-4 mt-md-0"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                <div className="col-6 pe-0">
                  <img className=" w-100" src={what2} alt="what2" />
                </div>
                <div className="col-6 ps-0">
                  <img className=" w-100" src={what2} alt="what2" />
                </div>
              </div>
              <div
                className="mt_neg_custom"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                <div className="row tranform_translet_x  mt-sm-4 mt-3 mt-md-0">
                  <div className="col-6 pe-0">
                    <img className=" w-100" src={what3} alt="what3" />
                  </div>
                  <div className="col-6 ps-0">
                    <img className=" w-100" src={what3} alt="what3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <h2
                className=" ff_lato fw-bold fs_4xl text_white mb-0"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                What <span className=" text_primary">we do</span>
              </h2>
              <p
                className=" ff_lato fw-normal fs_md text_white mb-0 mt-3 pt-1"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                1000 Cyber Drops will be dropping on Ethereum in March 2022.
                Each and every Cyber Drop is uniquely hand crafted. This is just
                the beginning of our journey. Owning a Cyber Drop will unlock
                monthly airdrops and future governance rights in addition to our
                revolutionary algorithm. We strive to always bring innovation
                and keep BUILDing. Cyber Drops is a community driven project and
                always will be that way. That’s our promise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default What;
