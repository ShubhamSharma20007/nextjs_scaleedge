"use client"
import React, { useEffect } from "react";
// import "../Blog/blog";
import '@/app/style/navbar.css'
import NavImg from "@/public/images/scaleedge.webp";
import "@/app/style/navbar.css";
import Image from "next/image";
import Link from "next/link";
import "@/app/style/navbar.css";
import Flower from "@/public/images/flowerimg.jpg";
// import "../About/about";
import scalewhitelogo from "@/public/images/scaleedge-white-logo.webp";
import Imgwing from "@/public/images/yellowwing.webp";
// import "../ServicePage/app-development-service";
// import "../ServicePage/web-development-service";
// import "../ServicePage/software-development-service";
// import "../ServicePage/digital-marketing-service";
// import "../ServicePage/graphic-design";
// import MagnetMouse from 'magnet-mouse';
import { gsap, Power3 } from "gsap";
import roundblue from "@/public/images/roundblue.webp";
import "../Contact/contact";
export default function navbar() {

  // magnetic effect
  useEffect(() => {
    const btns = document.querySelectorAll(".magnetic");

    btns.forEach((btn) => {
      // const rect = btn.getBoundingClientRect();
      
      btn.addEventListener('mousemove', (e) => {
      
        const x = e.offsetX
        const y = e.offsetY

        const btnWidth = btn.clientWidth;
        const btnHeight = btn.clientHeight;

        const transX = x - btnWidth / 2;
        const transY = y - btnHeight / 2;

        gsap.to(btn, {
          x: transX,
          y: transY,
          ease: 'ease',
          duration:0.3,
          
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          ease: 'ease'
        });
      });
    });
  }, []);
  

  useEffect(() => {
    const Mousemove = () => {
      const circleboll = document.getElementById("circle-round");
      const dropdown = document.querySelectorAll(".nav-unorder .dropdown");
      dropdown.forEach((ele) => {
        ele.addEventListener("mousemove", (event) => {
          gsap.to(circleboll, {
            x: event.clientX + "px",
            y: event.clientY + "px",
            scale: 4,
        
          });
        });
        ele.addEventListener("mouseleave", (event) => {
          gsap.to(circleboll, {
            x: event.clientX + "px",
            y: event.clientY + "px",
            scale: 1,
           
          });
        });
        return () => {
          ele.removeEventListener('mousemove',Mousemove)
          ele.removeEventListener('mouseleave',Mousemove)
          
      
        };
      });
    };
    Mousemove();
   
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  useEffect(()=>{
    document.addEventListener("DOMContentLoaded", function () {
        const closebtn = document.getElementById("close");
        const openbtn = document.getElementById("bars-icon");
        openbtn.addEventListener("click", openNav);
        closebtn.addEventListener("click", closeNav);
      });
    
  },[])
  useEffect(() => {
    function handlesize() {
      const fullysidebar = document.querySelector(".aling-value");
      const navitem = document.querySelectorAll(".dropdown");
      const mobilenav = document.querySelector(".mobile-nav");
      navitem.forEach(function (value) {
        if (window.innerWidth < 1150) {
          fullysidebar.style.display = "none";
          value.style.display = "none";
          mobilenav.style.display = "block";
        } else {
          fullysidebar.style.display = "block";
          value.style.display = "block";
          mobilenav.style.display = "none";
        }
      });
    }

    handlesize();
    window.addEventListener("resize", handlesize);

    return () => {
      window.removeEventListener("resize", handlesize);
    };
  }, []);

  useEffect(() => {
    const allContainer = document.querySelectorAll([
      ".main-page-container",
      ".cate-main-container",
      ".main-page-container-second",
      ".country-server-container",
      ".server-main-container",
      ".socialmedia-main-container",
      ".solution-main-container",
      ".testimonial-main-container",
      ".footer-small",
  
    ]);
    const side = document.getElementById("mySidenav");

    allContainer.forEach((ele) => {
      ele.addEventListener("click", () => {
        if (side.style.width >= "200px") {
          side.style.width = "0px";
        } else {
          side.style.width == "300px";
        }
      });
    });
  });

  useEffect(() => {
    const circleboll = document.getElementById("circle-round");
    function Mouseboll(event) {
      circleboll.style.transform = `translate(${event.clientX}px , ${event.clientY}px)`;
    }
    window.addEventListener("mousemove", Mouseboll);

    return () => {
      window.removeEventListener("mousemove", Mouseboll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const updownbtn = document.querySelector(".updown");
      updownbtn.classList.toggle("sticky-content", window.scrollY > 20);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navhead = this.document.querySelector(".navbar-container");
      navhead.classList.toggle("sticky-content-second", window.scrollY > 200);
    });
  });

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const navbuttons = document.querySelectorAll(".dropbtn");
    navbuttons.forEach((ele) => {
      ele.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      });
    });
  });

  return (
    <>
      <div id="circle-round"></div>
      <section className="navbar-container col-md-12 " id="top-nav-section">
        <Image
        height={"60%"}
        width={'60%'}
          src={roundblue}
          alt="round-icon"
          title="round-icon"
          className="roundblue img-fluid"
         
        />

        <div className="row  " id="nav-context">
          <div className="left-nav-container  ">
            <div className="wingimg-container">
              <Image
              height={"60%"}
              width={'60%'}
                src={Imgwing}
                className="imgwing img fluid"
                alt="design-wing"
                title="design-wing"
               
              />
            </div>
            <div className="fluid-class img-fluid">
              <Image
              height={"60%"}
              width={'60%'}
                src={NavImg}
                alt="scaleedge logo"
                className=" com-logo"
                title="scaleedge logo"
               
              />
            </div>
          </div>
          <div className="right-nav-container ">
            <ul className="nav-unorder col-md-12">
              <div className="dropdown">
                <li className="home dropbtn ">
                  <Link href={"/"}>Home</Link>
                </li>
              </div>

              <div className="dropdown">
                <li className="home dropbtn ">
                  <Link href={"/about"}>About</Link>
                </li>
              </div>

              <div className="dropdown">
                <li className="home  dropbtn ">
                  Service <i className="fa-solid fa-angles-down"></i>
                </li>

                <div className="dropdown-content mb-2">
                  <Link href={"/app-development-service"}>Mobile App</Link>
                  <Link href={"/web-development-service"}>Web Service</Link>
                  <Link href={"/software-development-service"}>
                    Software Service
                  </Link>
                  <Link href={"/digital-marketing-service"}>Marketing Service</Link>
                  {/* <Link to="/graphic-design">Graphic Design Service</Link> */}
                </div>
              </div>

              {/* <div className="dropdown">
                <li className="home dropbtn">
                  <Link to="/blog">Blog</Link>
                </li>
              </div> */}
              <div className="dropdown">
                <li className="home magnet-home  dropbtn">
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </div>
              <div className="btn-wrapper">
              <div className="query-section dropdown query-section-btn ">
                <a href="https://api.whatsapp.com/send?phone=9251697397" method="get" target="__blank">Get A Query</a>
              </div>
              </div>
              <i
                className="fa-solid fa-bars nav-bar-logo fluid-container bar-i"
                id="bars-icon"
                onClick={openNav}
              ></i>

              <div id="mySidenav" className="sidenav">
                <div className="align-wrap">
                  <div className="aling-value">
                    <p
                      className="closebtn"
                      id="close"
                      onClick={closeNav}
                      style={{ cursor: "pointer" }}
                    >
                      &times;
                    </p>
                    <div className="empty">
                      <Image
                      height={'60%'}
                      width={'60%'}
                        src={scalewhitelogo}
                        alt="scaleedge-side-logo"
                        title="scaleedge-side-logo"
                        className="img-fluid mb-2"
                      />
                    </div>
                    <div className="sidenav-para">
                      <p className="text-start">
                      At ScaleEdge Solutions , we believe in providing the easiest solution to the most challenging problem. Contact us today and discuss how our expert can benefit your business.
                      </p>
                      <hr className="hr-tag" />
                      <div className="sidebar-title">
                        <p>Get In Touch</p>
                      </div>
                      <div className="contact-sidebar-section col-md-12">
                        <div className="col-md-3">
                          <i className="fa-regular fa-envelope fa-2x compartment "></i>
                        </div>
                        <div className="label-section col-md-9" >
                          <a href="mailto:info@scaleedge.in" className="text-decoration-none" >
                          <p >
                            <strong >Email </strong>
                          </p>
                          <p >
                            <strong >info@scaleedge.in</strong>
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="contact-sidebar-section col-md-12">
                        <div className="col-md-3">
                          <i className="fa-solid fa-phone fa-2x compartment"></i>
                        </div>
                        <div className="label-section col-md-9 " >
                          <a href="tel:9251697397" className="text-decoration-none">
                          <p>
                            <strong> Phone </strong>
                          </p>
                          <p>
                            <strong>9251697397 </strong>
                          </p>
                          </a>
                        </div>
                      </div>
                      {/* <div className="contact-sidebar-section col-md-12">
                        <div className="col-md-3">
                          <i
                            className="fa-solid fa-location-dot fa-2x compartment"
                            style={{ padding: "10px 13px" }}
                          ></i>
                        </div>
                        <div className="label-section col-md-9">
                          <p>
                            <strong> Location </strong>
                          </p>
                          <p>
                            <strong> Alwar</strong>
                          </p>
                        </div>
                      </div> */}
                      <hr className="hr-tag" />
                      <ul className="social col-md-12">
                        <a href="https://m.facebook.com/profile.php/?id=100089878991548">
                          {" "}
                          <i
                            className="fab fa-facebook-f compartment"
                            style={{ padding: "10px 13px" }}
                          ></i>
                        </a>
                        
                        <a href="https://www.instagram.com/scaleedge/">
                          {" "}
                          <i className="fab fa-instagram insta compartment"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/scaleedge-solutions/" >
                          <i className="fa-brands fa-linkedin-in compartment"></i>
                        </a>
                      </ul>
                    </div>
                    <div className="flower">
                      <Image
                      height={'100%'}
                      width={'100%'}
                        src={Flower}
                        alt="flower"
                        title="flower"
                       
                      />
                    </div>
                  </div>

                  <div className="mobile-nav">
                    <p
                      className="closebtn"
                      onClick={closeNav}
                      style={{ cursor: "pointer" }}
                    >
                      &times;
                    </p>
                    <div id="accordion">
                      <div class="card">
                        <div class="card-header card-header-manual ">
                          <p class="mb-0 mobile-nav-para">
                            <button class="btn btn-link">
                              <Link
                                href={"/"}
                                className="text-light links"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                Home
                              </Link>
                            </button>
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div
                          class="card-header card-header-manual"
                          id="headingTwo"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                        >
                          <p class="mb-0 mobile-nav-para">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <Link href={"/about"} className="text-light links">
                                About
                              </Link>
                            </button>
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div
                          class="card-header card-header-manual "
                          id="headingThree"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          <p class="mb-0 mobile-nav-para">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Services
                            </button>
                          </p>
                          <i
                            className="fa-solid fa-plus"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                          ></i>
                        </div>
                        <div
                          id="collapseThree"
                          class="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <ul>
                              <li>
                                <Link
                                  href={"/app-development-service"}
                                  className="links"
                                >
                                  Mobile App
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/web-development-service"}
                                  className="links"
                                >
                                  Web Services
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/software-development-service"}
                                  className="links"
                                >
                                  Software Service
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/digital-marketing-service"}
                                  className="links"
                                >
                                  Marketing Service
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/graphic-design" className="links">
                                  Graphic Design Service
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="sidenav-para">
                        <div className="sidebar-title">
                          <p className="m-4">Get In Touch</p>
                        </div>
                        <div className="contact-sidebar-section col-md-12">
                          <div className="col">
                            <i className="fa-regular fa-envelope fa-2x compartment "></i>
                          </div>
                          <div className="label-section col-md-9">
                          <a href="mailto:9251697397" className="text-decoration-none">
                            <p>
                              <strong>Email </strong>
                            </p>
                            <p>
                              <strong>info@scaleedge.in</strong>
                            </p>
                            </a>
                          </div>
                        </div>
                        <div className="contact-sidebar-section col-md-12">
                          <div className="col">
                            <i className="fa-solid fa-phone fa-2x compartment"></i>
                          </div>
                          <div className="label-section col-md-9">
                          <a href="tel:9251697397" className="text-decoration-none">
                            <p>
                              <strong> Phone </strong>
                            </p>
                            <p>
                              <strong> 9251697397</strong>
                            </p>
                            </a>
                          </div>
                        </div>
                        {/* <div className="contact-sidebar-section col-md-12">
                          <div className="col">
                            <i
                              className="fa-solid fa-location-dot fa-2x compartment"
                              style={{ padding: "10px 13px" }}
                            ></i>
                          </div>
                          <div className="label-section col-md-9">
                            <p>
                              <strong> Location </strong>
                            </p>
                            <p>
                              <strong> Alwar </strong>
                            </p>
                          </div>
                        </div> */}
                        <hr className="hr-tag" />
                        <ul className="social col-md-12">
                          <li>
                            <a
                              href="https://www.facebook.com/OneKlickTechnoRenewable"
                              target="_blank"
                              rel="noopener"
                              title="facebook"
                              data-aos="zoom-out"
                              data-aos-once="true"
                            >
                              <i
                                className="fab fa-facebook-f"
                                style={{ padding: "10px 13px" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/OneklickTechno"
                              target="_blank"
                              rel="noopener"
                              title="twitter"
                              data-aos="zoom-out"
                              data-aos-once="true"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/oneklicktechno/"
                              target="_blank"
                              rel="noopener"
                              title="instagram"
                              data-aos="zoom-out"
                              data-aos-once="true"
                            >
                              <i className="fab fa-instagram insta"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/oneklicktechno"
                              data-aos="zoom-out"
                              target="_blank"
                              rel="noopener"
                              title="linkedin"
                              data-aos-once="true"
                            >
                              <i className="fa-brands fa-linkedin-in "></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <div className="updown" id="nav-context" onClick={ScrollUp}>
        <i
          className="fa-solid fa-arrow-up-long nav-bar-logo fluid-container"
          style={{ fontSize: "25px", padding: "10px 13px" }}
        ></i>
      </div>
    </>
  );
}
