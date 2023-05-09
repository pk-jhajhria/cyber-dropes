import React from "react";
import Accordion from "react-bootstrap/Accordion";
import faq_umbrela from "../assets/img/png/faq umbrela.png";

function Faq() {
  return (
    <>
      <section className="py-5 position-relative">
        <div className="light_white_shadow_faq z_index_1"></div>
        <img
          className=" position-absolute umbrela umbrela_width_faq w_15"
          src={faq_umbrela}
          alt="faq_umbrela"
        />
        <div className="container z_index_4 position-relative">
          <h2
            className=" text-center ff_lato fw-bold fs_4xl mb-0 text_primary"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-deley="1000"
          >
            FAQ<span className=" text_white">’s</span>
          </h2>
          <div className="row pt-sm-4">
            <div className="col-md-9 mx-auto">
              <div
                className=" mt-5"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="2000"
                data-aos-deley="1000"
              >
                <Accordion className="Faq_classes" defaultActiveKey="0" flush>
                  <Accordion.Item
                    className="border_gridient_faq position-relative py-4"
                    eventKey="0"
                  >
                    <Accordion.Header className="accordion_Header">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Egestas scelerisque duis quis aliquet. Consectetur?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className="d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="border_gridient_faq position-relative mt-4 py-4"
                    eventKey="1"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Ac nec enim amet, leo lorem quis neque vitae aliquet?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className="d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="border_gridient_faq position-relative mt-4 py-4"
                    eventKey="2"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Sit laoreet nibh sit hac potenti. Non ullamcorper fames
                        nibh donec?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className="d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="border_gridient_faq position-relative mt-4 py-4"
                    eventKey="3"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Porta amet tortor nec pulvinar urna. Et blandit sit id?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className="d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="border_gridient_faq position-relative mt-4 py-4"
                    eventKey="4"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Tellus hendrerit fermentum ut hendrerit ac vestibulum?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className="d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
