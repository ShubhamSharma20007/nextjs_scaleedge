"use client"
import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/navbar";
import "@/app/style/contactPage.css"
import sectionOne from "@/public/images/contactImage.webp";
import Footer from "@/app/components/Footer/footer"
import AOS from "aos";
import Swal from 'sweetalert2'
// import "aos/dist/aos.css";
import Usableitem from '@/app/components/Useableitem/useableitem';
const contact = () => {
  useEffect(() => {
    AOS.init();
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);


   
  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (email === '' && name === '' && product === '' && contact === '') {
        Swal.fire({
          icon: 'error',
          // title: 'Invalid Name',
          text: 'Please Enter All Details',
        });
        return;
      }
      else if (name === '') {
        Swal.fire({
          icon: 'error',
          // title: 'Invalid Name',
          text: 'Please Enter Your Name',
        });
        return;
      }
      else if (email === '') {
        Swal.fire({
          icon: 'error',
          // title: 'Caution',
          text: 'Please  Enter Your Email',
        });
        return;
      }
      else if (product === '') {
        Swal.fire({
          icon: 'error',
          // title: 'Fill The Module',
          text: 'Enter  Your Requirement',
        });
        return;
      }
      else if (contact.length < 10) {
        Swal.fire({
          icon: 'error',
          // title: 'Invalid Contact Number',
          text: 'Please enter a valid contact number with at least 10 digits',
        });
        return;
      }
    }
    try {
      $.ajax({
        url: "https://appj.scaleedge.in/register",
        type: "POST",
        data: {
          email: email,
          name: name,
          contact: contact,
          product: product,
          message: message,
          subject: "Query Form",
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (response) {
          console.log("Email sent successfully");
          Swal.fire(
            'Good job!',
            'Mail Send Successfully',
            'success'
          );
          console.log(response);
          setEmail("");
          setName("");
          setProduct("");
          setContact("");
          setMessage("");
          setValidated(false)

        },
        error: function (err) {
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
    }

    setValidated(true);
  };

  
  // useEffect(()=>{
  //   const wrap =  document.querySelector('.wrapper')
  //   const side = document.getElementById('mySidenav');
  //   wrap.addEventListener('click',function(){
  //     if (side.style.width >= '200px') {
  //       side.style.width = '0px';
  //     }
  //   else{
  //     side.style.width == '300px'
  //   }
  //   })
  // })
  return (
    <>


      {/* <Navbar /> */}
<div className="wrapper">
      <div className=" contact_page  py-0">
      <div className="col-md-12 d-flex justify-content-center align-items-center ">
        <div className="col-md-11">
        <Usableitem
       title="Contact"
      alt_tag="contact us"
       app_main_img = {sectionOne}
       section={1}
       
       />
        </div>
      </div>

        <div
          className="col-md-12 container-for-input d-flex justify-content-center"
          data-aos="fade-left"
          data-aos-offset="000"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-once="false"
        >
          <div className="row col-md-10">
            <div className="col-md-8">
          <p className="contact_page_subtitle">Get in contact</p>
              <div className="row">
                <div className="col-md-8">
                  <h3 >
                    Feel free to get in touch <br />contact with us.
                  </h3>
                  <p className="text-start">
                  Join us in realizing your goals. Our expert team is ready to collaborate with you from start to finish, guiding you through the entire process. We specialize in crafting digital solutions that captivate and elevate. From web development to mobile apps and custom software, we turn ideas into impactful realities.
                  </p>
                </div>
                <div className="col-md-4 message-icon">
                  <i
                    className="fa fa-comments fa-4x"
                    style={{ color: "#ffdc60", margin: "30px 0px" }}
                  ></i>
                </div>
              </div>

              <div className="contact_page_form">
                <form>
                  <div className="row">
                    <div className="col-md-10 first-input">
                      <div class="row">
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 first-input">
                      <div class="row">
                        <div class="col">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="number"
                            name="contact"
                            value={contact}
                            maxLength={10}
                            onInput={(e)=>{if(e.target.value >e.target.maxLength){
                              e.target.value =  e.target.value.slice(0,e.target.maxLength)
                           
                            }}}
                            onChange={(e) => setContact(e.target.value)}
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Requirement"
                            name="product"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-area-form">
                      <textarea
                        name="message"
                        placeholder="message"
                        id=""
                        className="border outline-none"
                        cols="82"
                        rows="8"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    class="button-30 btn-btn mt-4 w-auto"
                    role="button"
                    onClick={sendEmail}
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-md-4 content-content"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-once="false"
            >
              <div className="contact_page_right col-md-12">
                <div
                  className="row contact_right col-md-11"
                  style={{ minHeight: "110px",maxWidth:"380px" }}
                >
                  <div className="col-md-2 contact_page_icon  ">
                    <i className="fa fa-phone fa-2x"></i>
                  </div>
                  <div
                    className="col-md-6 "
                    style={{ width: "fit-content", margin: "0px 20px" }}
                  >
                    <div className="page_right_content w-100 ">
                      <h4 className="call-us md:text-start text-center">Call Us</h4>
                      <a href="tel:+919511568993">+919511568993</a>
                      <br />
                      <a href="tel:+919358589005">+919358589005</a>
                    </div>
                  </div>
                </div>
                <div
                  className="row contact_right col-md-11"
                  style={{ minHeight: "110px",maxWidth:"380px" }}
                >
                  <div className="col-md-2 contact_page_icon  ">
                    <i className="fa-solid fa-envelope fa-2x"></i>
                  </div>
                  <div
                    className="col-md-6 "
                    style={{ width: "fit-content", margin: "0px 20px" }}
                  >
                    <div className="page_right_content ">
                      <h4 className="email-us md:text-start text-center">Email Us</h4>
                      <a href="mailto:anupriya@scaleedge.in">anupriya@scaleedge.in</a>
                      <br />
                      <a href="mailto:saurabh@oneklick.in">
                        saurabh@oneklick.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      </div>
    </>
  );
};

export default contact;
