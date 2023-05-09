import React, { useState } from "react";
import nav_logo from "../assets/img/png/nav logo.png";
import boat_img from "../assets/img/svg/boat.svg";
import discord from "../assets/img/svg/discord.svg";
import twitter from "../assets/img/svg/twitter.svg";
import m_img from "../assets/img/svg/m icon.svg";

function Nav() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <section className="position-relative bg-black" id="navbar">
        <nav className=" z_index_3 position-relative rounded-2">
          <div>
            <div className="container">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex gap-5 align-items-center justify-content-center">
                  <a
                    className="ff_inter fw-bold fs_2xl text-white z_index1 my-2"
                    href="#"
                  >
                    <img
                      className="nav_logo_w umbrela"
                      src={nav_logo}
                      alt="nav_logo"
                    />
                  </a>{" "}
                </div>
                <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                  <a
                    className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                    href="#algo"
                  >
                    About
                  </a>
                  <a
                    className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                    href="#meet"
                  >
                    Team
                  </a>
                  <a
                    className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                    href="#roadmap"
                  >
                    Roadmap
                  </a>
                  <a
                    className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                    href="#partner"
                  >
                    Partners
                  </a>
                  <div className="d-flex gap-2">
                    <a className="hoverbg position-relative" href="#">
                      <img
                        className=" z_index_4"
                        src={boat_img}
                        alt="boat_img"
                      />
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
                  <a
                    className=" py-2 px-3 text_white bg_primary rounded-3 connect_btn_hover tra"
                    href="#"
                  >
                    Connect Wallet
                  </a>

                  <div className="d-flex"></div>
                </ul>
                <div
                  style={{ zIndex: "1000" }}
                  className={
                    navShow
                      ? "threeline d-lg-none cursor_pointer my-2"
                      : "threeline d-lg-none cursor_pointer my-2"
                  }
                  onClick={() => setNavShow(!navShow)}
                >
                  <a href="#">
                    <div
                      className={navShow ? " falseline1" : "  threelinechild"}
                    ></div>
                    <div
                      className={navShow ? "falseline" : " threelinechild"}
                    ></div>
                    <div
                      className={navShow ? "falseline3 " : "threelinechild"}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="d-lg-none d-flex flex-column">
              <div className={` ${navShow ? "shownav" : " hidenav"}`}>
                <div className="d-flex flex-column">
                  <div className="container">
                    <ul className="d-flex align-items-center mb-0 gap-4 d-lg-none flex-column justify-content-center ps-0">
                      <a
                        onClick={() => setNavShow(!navShow)}
                        className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                        href="#"
                      >
                        Home
                      </a>
                      <a
                        onClick={() => setNavShow(!navShow)}
                        className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                        href="#"
                      >
                        About
                      </a>
                      <a
                        onClick={() => setNavShow(!navShow)}
                        className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                        href="#"
                      >
                        Team
                      </a>
                      <a
                        onClick={() => setNavShow(!navShow)}
                        className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                        href="#"
                      >
                        Roadmap
                      </a>
                      <a
                        onClick={() => setNavShow(!navShow)}
                        className=" text_white ff_lato fw-normal fs_sm nav_text_hover transition"
                        href="#"
                      >
                        Partners
                      </a>
                      <div className="d-flex gap-2">
                        <a onClick={() => setNavShow(!navShow)} href="#">
                          <img src={boat_img} alt="boat_img" />
                        </a>
                        <a onClick={() => setNavShow(!navShow)} href="#">
                          <img src={boat_img} alt="boat_img" />
                        </a>
                        <a onClick={() => setNavShow(!navShow)} href="#">
                          <img src={boat_img} alt="boat_img" />
                        </a>
                        <a onClick={() => setNavShow(!navShow)} href="#">
                          <img src={boat_img} alt="boat_img" />
                        </a>
                      </div>
                      <a
                        className=" py-2 px-3 text_white bg_primary rounded-3 connect_btn_hover transition"
                        href="#"
                      >
                        Connect Wallet
                      </a>

                      <div className="d-flex"></div>
                    </ul>
                  </div>
                  <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                    <a
                      className=" text_white ff_inter fw-normal fs_xl nav_text_hover"
                      href="#"
                    >
                      1 888 266-6917 (eu?)
                    </a>
                    <span className=" primary_btn position-relative">
                      <a
                        className="fw-semibold text_white fs_md  rounded-5 bg_primary contact_us_btn before_line_nav_btn "
                        href="#"
                      >
                        Contact Us
                      </a>
                    </span>
                    <div className="d-flex"></div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Nav;
