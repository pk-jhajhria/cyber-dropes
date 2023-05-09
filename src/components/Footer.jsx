import React from "react";
import boat_img from "../assets/img/svg/boat.svg";
import discord from "../assets/img/svg/discord.svg";
import twitter from "../assets/img/svg/twitter.svg";
import m_img from "../assets/img/svg/m icon.svg";
import footer_umbrela from "../assets/img/png/footer umbrela.png";

function Footer() {
  return (
    <>
      <section className=" pt-sm-5 mt-sm-5 position-relative">
        <div className="light_white_shadow_footer z_index_1"></div>
        <img
          className=" position-absolute umbrela footer_umbrela_position"
          src={footer_umbrela}
          alt="footer_umbrela"
        />
        <div className="container pt-sm-5 mt-5 z_index_4 position-relative">
          <div className="text-center">
            <h2 className=" ff_lato fw-semibold fs_3xl text_primary mb-0 mt-5  pt-5">
              Cyber Drops
            </h2>
            <p className=" ff_lato fw-normal fs_sm text_white mb-0 mt-2 pt-1">
              Viverra metus viverra rhoncus eget quam suspendisse diam
              <span className=" d-md-block">
                amet, nisl. Mattis maecenas libero lacinia accumsan amet.
              </span>
            </p>
            <div className="d-flex gap-3 mt-4 justify-content-center">
              <a className="hoverbg position-relative" href="#">
                <img className=" z_index_4" src={boat_img} alt="boat_img" />
              </a>
              <a className="hoverbg position-relative" href="#">
                <img src={discord} alt="discord" />
              </a>
              <a className="hoverbg position-relative" href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a className="hoverbg position-relative" href="#">
                <img src={m_img} alt="m_img" />
              </a>
            </div>
          </div>
        </div>
        <div className=" border_gray mt-4"></div>
        <p className=" ff_lato fw-normal fs_sm text_gray text-center pt-3">
          Copyright By 2022
        </p>
      </section>
    </>
  );
}

export default Footer;
