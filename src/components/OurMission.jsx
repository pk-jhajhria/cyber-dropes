import React from "react";
import our_mission_img from "../assets/img/png/our mission img.png";

function OurMission() {
  return (
    <>
      <section className=" py-5 position-relative">
        <div className="light_white_shadow_mission z_index_1"></div>
        <div className="light_white_shadow z_index_1"></div>
        <div className="container z_index_4 position-relative">
          <div className="row justify-content-between align-items-center flex-column-reverse flex-md-row mb-md-5 pb-md-5">
            <div className="col-lg-5 col-md-6">
              <img
                className=" w-100 px-sm-5 px-4 mt-5"
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
                src={our_mission_img}
                alt="our_mission_img"
              />
            </div>
            <div className="col-md-5">
              <h2
                className=" ff_lato fw-bold fs_4xl text_white mb-0"
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                Our <span className=" text_primary">Mission</span>
              </h2>
              <p
                className=" ff_lato fw-normal fs_md text_white mb-0 mt-xl-3 mt-2 pt-1"
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
              <a
                className=" py_12 px-4 text_white bg_primary rounded-3 d-inline-block mt-xl-5 mt-3 connect_btn_hover transition"
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurMission;
