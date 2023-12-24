"use client";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function page() {
  const navItems = ["Home", "About", "Portfolio", "Contact"];

  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  // const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      // setWidth(newWidth);

      if (newWidth < 700) {
        setMobile(true);
        setShow(false);
      } else {
        setMobile(false);
        setShow(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1 style={{ zIndex: "20", position: "absolute", top: 0, left: 20 }}>
        Portfolio Website
      </h1>

      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "auto",
        }}
        src="/portfolio.jpg"
      ></img>
      <div
        style={{
          position: "absolute",
          width: mobile ? "245px" : "500px",
          overflow: "hidden",
          height: mobile ? "65vh" : "10vh",
          top: 0,
          right: mobile ? 0 : 20,
          backgroundColor:
            show && mobile ? "lightgoldenrodyellow" : "transparent",
          // backgroundColor: "red",
          display: "grid",
          // gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr 1fr",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: "orange",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            position: "absolute",
            top: 10,
            right: 10,
            display: mobile ? "block" : "none",
          }}
        >
          <FontAwesomeIcon
            style={{ color: "white", marginLeft: "4px" }}
            icon={show ? faTimes : faBars}
            onClick={() => setShow((m) => !m)}
          ></FontAwesomeIcon>
        </motion.div>

        <div
          style={{
            marginTop: mobile ? "35px" : "0",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr 1fr",
          }}
        >
          {show &&
            navItems.map((item, index) => (
              <motion.div
                initial={{
                  x: index % 3 === 0 ? -20 : index % 3 === 1 ? -15 : -10,
                }}
                animate={{ x: 0 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: (index % 3) / 0.9 }}
                className="nav"
                style={{
                  display: "flex",
                  // backgroundColor: "whitesmoke",
                  margin: "10px",
                  // backgroundColor: "red",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    // backgroundColor: "lightcoral",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    display: mobile ? "block" : "none",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "lightcoral",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80%",
                      height: "80%",
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="navItem"
                  style={{
                    width: "70px",
                    flexBasis: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    margin: "5px",
                    // backgroundColor: "lightpink",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid salmon",
                  }}
                  key={index}
                >
                  {" "}
                  <a
                    href="https://youtube.com/@coolprojectsonly"
                    style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default page;
