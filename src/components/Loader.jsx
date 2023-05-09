import React, { useEffect, useState } from "react";
import { Overlay } from "react-bootstrap";

function Loader() {
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      document.body.classList.remove("overflow-hidden");
    }, 2000);
  }, []);
  if (Loader === false) {
    document.documentElement.scrollTop = 0;
  } else {
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      {Loader ? (
        <section
          style={{ zIndex: "999999999999999" }}
          className=" position-fixed h-100 w-100 min-vh-100 bg-black"
        >
          <div id="loader-1">
            <div className="loader-content"></div>{" "}
          </div>{" "}
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
