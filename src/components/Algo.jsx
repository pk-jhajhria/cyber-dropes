import React from "react";
import algo1 from "../assets/img/png/algo.png";
import algo2 from "../assets/img/png/algo2.png";
import algo3 from "../assets/img/png/algo3.png";

function Algo() {
  return (
    <>
      <section className=" py-5 position-relative" id="algo">
        <div className="light_white_shadow_algo z_index_1"></div>
        <div className="container pt-md-5 z_index_4 position-relative">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6">
              <h2
                className=" ff_lato fw-bold fs_4xl text_white mb-0"
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                Our <span className=" text_primary">Algo</span>
              </h2>
              <p
                className=" ff_lato fw-normal fs_md mb-0 text_white mt-3 pt-1"
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                We have perfected our algorithm, which prioritizes a low risk
                and consistent profit stream without the need for daily
                micromanagement. While most trading algorithms can’t stand up
                against a volatile or risky market, our algorithm thrives in
                those conditions. Early-stage testers have seen a consistent
                flow of income with minimal ups and downs. Our algorithm has
                been in the works for YEARS. This has given us the time to
                rigorously backtest and release any needed hotfixes. As of early
                March 2022, we have close to a quarter of a million under direct
                management!
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row align-items-center justify-content-center mt-5 mt-lg-0">
                <div className="col-5">
                  <img
                    className=" w-100"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                    src={algo1}
                    alt="algo1"
                  />
                  <img
                    className=" w-100 mt-3 pt-1"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                    src={algo2}
                    alt="algo2"
                  />
                </div>
                <div className="col-6">
                  <img
                    className=" w-100"
                    data-aos="fade-up-left"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                    src={algo3}
                    alt="algo3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Algo;
