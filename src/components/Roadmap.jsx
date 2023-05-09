import React from "react";
import right_line from "../assets/img/png/right line.png";
import left_line from "../assets/img/png/left line.png";
import map_1 from "../assets/img/png/map1.png";
import map_2 from "../assets/img/png/map2.png";
import map_3 from "../assets/img/png/map3.png";
import map_4 from "../assets/img/png/map4.png";
import map_5 from "../assets/img/png/map5.png";
import map_6 from "../assets/img/png/map6.png";
import map_7 from "../assets/img/png/map7.png";
import map_8 from "../assets/img/png/map8.png";
import roadmap_umbrela1 from "../assets/img/png/meet umbrela.png";
import roadmap_umbrela2 from "../assets/img/png/roadmap umbrela2.png";
import roadmap_umbrela3 from "../assets/img/png/what umbrela img.png";

function Roadmap() {
  return (
    <>
      <section className=" bg-black py-5 position-relative" id="roadmap">
        <div className=" layer_position position-absolute"></div>
        <img
          className=" position-absolute umbrela top-0 end-0 what_umbrela_img"
          src={roadmap_umbrela1}
          alt="roadmap_umbrela1"
        />
        <img
          className=" position-absolute umbrela roadmap_umbrela2_position"
          src={roadmap_umbrela2}
          alt="roadmap_umbrela2"
        />
        <img
          className=" position-absolute umbrela roadmap_umbrela3_position"
          src={roadmap_umbrela3}
          alt="roadmap_umbrela3"
        />

        <section className="roadmap_bg_img">
          <h2
            className=" text-center ff_lato fw-bold fs_4xl text_white mb-5 pb-sm-5 pt-sm-5 mt-lg-5 z_index_4 position-relative"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-deley="1000"
          >
            Road<span className=" text_primary">Map</span>
          </h2>
          <div className="container pt-sm-5 pb-5">
            <div className="row justify-content-between position-relative roadmap_line_after mb-5">
              <div className=" d-flex justify-content-md-end">
                <div className="col-md-6 d-flex flex-column justify-content-center position-relative ps-sm-5 ps-3">
                  <img
                    className=" position-absolute map_img_1 z_index_5"
                    src={map_1}
                    alt="map_1"
                  />
                  <img
                    className=" position-absolute right_line_position"
                    src={right_line}
                    alt="right_line"
                  />
                  <div
                    className="text-start ps-5 ms-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 ps-lg-4">
                      March 2022
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 ps-lg-4">
                      1000 Drops Launch on Ethereum
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex mt-xl-5">
                <div className="col-md-6 mt-5 mb-5 position-relative pe-lg-4">
                  <img
                    className=" position-absolute right_line_position d-md-none"
                    src={right_line}
                    alt="right_line"
                  />
                  <img
                    className="left_line_position position-absolute d-none d-md-block"
                    src={left_line}
                    alt="left_line"
                  />
                  <img
                    className=" map_2_img position-absolute z_index_5"
                    src={map_2}
                    alt="map_2"
                  />
                  <div
                    className=" pe-md-5 me-md-5 ps-sm-5 ps-3 ms-5 ms-md-0 ps-md-0"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 text-md-end pe-md-5 ps-5 ps-md-0 ">
                      March 2022
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 text-md-end pe-md-5 ps-5 ps-md-0 ">
                      1000 Drops Launch on Ethereum
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex justify-content-md-end">
                <div className="col-md-6 my-xl-5 d-flex flex-column justify-content-center position-relative ps-md-5 ps-4">
                  <img
                    className=" position-absolute map_img_1 z_index_5"
                    src={map_3}
                    alt="map_3"
                  />
                  <img
                    className=" position-absolute right_line_position"
                    src={right_line}
                    alt="right_line"
                  />
                  <div
                    className="text-start ps-sm-5 ps-3 ms-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 ps-lg-4 ms-4 ms-md-0">
                      March 2022
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 ps-lg-4 ms-4 ms-md-0">
                      Creation of Treasury
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex">
                <div className="col-md-6 mt-5 mb-xl-5 ps-5 ps-md-0 position-relative pe-lg-4">
                  <img
                    className=" position-absolute right_line_position d-md-none"
                    src={right_line}
                    alt="right_line"
                  />
                  <img
                    className="left_line_position position-absolute d-none d-md-block"
                    src={left_line}
                    alt="left_line"
                  />
                  <img
                    className=" map_2_img position-absolute z_index_5"
                    src={map_4}
                    alt="map_4"
                  />
                  <div
                    className=" pe-md-5 me-md-5 ps-sm-5 ps-3 ps-md-0"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 text-md-end pe-md-5 ps-5 ps-md-0">
                      April 2022
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 text-md-end pe-md-5 ps-5 ps-md-0">
                      Our First Airdrop
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex justify-content-md-end">
                <div className="col-md-6 mt-5 d-flex flex-column justify-content-center position-relative ps-5">
                  <img
                    className=" position-absolute map_img_1 z_index_5"
                    src={map_5}
                    alt="map_5"
                  />
                  <img
                    className=" position-absolute right_line_position"
                    src={right_line}
                    alt="right_line"
                  />
                  <div
                    className="text-start ps-sm-5 ps-3 ms-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 ps-lg-4">
                      June 2022
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 ps-lg-4">
                      Major Collabs
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex mt-xl-5">
                <div className="col-md-6 mt-5 mb-5 position-relative pe-lg-4">
                  <img
                    className=" position-absolute right_line_position d-md-none"
                    src={right_line}
                    alt="right_line"
                  />
                  <img
                    className="left_line_position position-absolute d-none d-md-block"
                    src={left_line}
                    alt="left_line"
                  />
                  <img
                    className=" map_2_img position-absolute z_index_5"
                    src={map_6}
                    alt="map_6"
                  />
                  <div
                    className=" pe-md-5 me-md-5 ps-sm-5 ps-3 ms-5 ms-md-0 ps-md-0"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 text-md-end pe-md-5 ps-5 ps-md-0 ">
                      Sometime in Q3
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 text-md-end pe-md-5 ps-5 ps-md-0 ">
                      Cyber Celebs come on Ethereum
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex justify-content-md-end">
                <div className="col-md-6 my-xl-5 d-flex flex-column justify-content-center position-relative ps-md-5 ps-4">
                  <img
                    className=" position-absolute map_img_1 z_index_5"
                    src={map_7}
                    alt="map_7"
                  />
                  <img
                    className=" position-absolute right_line_position"
                    src={right_line}
                    alt="right_line"
                  />
                  <div
                    className="text-start ps-sm-5 ps-3 ms-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 ps-4 ps-md-0 ms-lg-4">
                      Sometime in Q3
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 ps-4 ps-md-0 ms-lg-4">
                      Streetwear + Merch
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex">
                <div className="col-md-6 mt-5 ps-5 ps-md-0 pe-lg-4 position-relative">
                  <img
                    className=" position-absolute right_line_position d-md-none"
                    src={right_line}
                    alt="right_line"
                  />
                  <img
                    className="left_line_position position-absolute d-none d-md-block"
                    src={left_line}
                    alt="left_line"
                  />
                  <img
                    className=" map_2_img position-absolute z_index_5"
                    src={map_8}
                    alt="map_8"
                  />
                  <div
                    className=" pe-md-5 me-md-5 ps-sm-5 ps-3 ps-md-0"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    data-aos-deley="1000"
                  >
                    <h3 className=" ff_lato fw-semibold fs_2xl text_white mb-0 text-md-end pe-md-5 ps-5 ps-md-0">
                      Sometime in Q4
                    </h3>
                    <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1 text-md-end pe-md-5 ps-5 ps-md-0">
                      Enhanced Partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Roadmap;
