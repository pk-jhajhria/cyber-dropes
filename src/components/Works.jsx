import React from "react";
import Card from "../Card";

function Works() {
  return (
    <>
      <section className=" bg-black py-5">
        <div className="container">
          <h2
            className=" text-center fw-bold ff_lato fs_4xl text_white pb-3 z_index_4 position-relative mb-0"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-deley="1000"
          >
            How it <span className=" text_primary"> works</span>
          </h2>
          <div className="row justify-content-center">
            {Card.map((data) => {
              return (
                <div
                  className="col-xl-3 col-sm-6 position-relative mt-4"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  data-aos-deley="1000"
                >
                  <div className="text-center h-100 d-flex flex-column align-items-center border_gridient pt-4 mt-3 pb-4 px-3 z_index_4 position-relative transition">
                    <span className=" mt-2">
                      <h4 className=" ff_lato fw-bold fs_2xxl mb-0 bg_primary rounded-circle d-inline-block px-3 py-3 text_white cursor_pointer z_index_4 position-relative transition">
                        {data.heading}
                      </h4>
                      <p className=" ff_lato fw-bold fs_xl mb-0 text_white mt-4 z_index_4 position-relative">
                        {data.para}
                      </p>
                    </span>
                    <span>
                      <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-3 z_index_4 position-relative">
                        {data.lorem}
                      </p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
