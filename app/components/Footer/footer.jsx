"use client"
import React, { useEffect } from 'react'
import '@/app/style/footer.css'
import scalewhitelogo from "@/public/images/scaleedge-white-logo.webp"
import footericon from  "@/public/images/footer-lady-logo.webp"
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function footer() {
  <ToastContainer
  autoClose={4000}
  ></ToastContainer>

  const [email, setEmail] = React.useState(''); 

  
  // const sendEmail = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const axiosIntance = axios.create({
  //       baseURL :"http://localhost:8000"
  //     })
  //     const res = await axiosIntance.post('/footerMail', {
  //       email: email, 
  //     });
  //     const data = await res.data;
  //     console.log(data);
  //     toast.success(data.message)
  //     setEmail('')
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };


  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (email === '' ) {
        Swal.fire({
          icon: 'error',
          // title: 'Invalid Name',
          text: 'Please Enter All Details',
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
          subject: "Query Form",
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (response) {
          console.log("Email sent successfully");
         toast.success("mail sended!")
          console.log(response);
          setEmail("");
          setValidated(false);
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
  

  
  useEffect(()=>{
    document.querySelector(".topid").addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })
  return (
    <div>
      <div className="flex justify-center items-center">
       <div className='row footer-small flex-wrap col-md-10  col-12 '>
    <Image src={footericon} alt="footicon_logo" title='footicon_logo'  width={'50%'} height={'50%'} className='img-fluid footer-lady w-40' />
    <h4 className='text-center col-md-5'>Ready to Grow Your Business? </h4>
    <p  className='col-md-5'>Let's Start the Conversation. Contact Us Today and Discover How ScaleEdge Solutions Can Propel Your Growth</p>
    <Link  href={"/"} className='magnetic topid'>Get Started</Link>

   </div>
   </div>
   <div className='container-fluid footer-container flex justify-center items-center'>
   <div className='row footer-row col-md-11 col-12'>
    <div className='col-md-4 footer-col-1 footer-col '>
      <Image className='footer-logo-img img-fluid w-40' src={scalewhitelogo} title='scaleedge logo' width={'50%'} height={'50%'} alt="scaleedge logo"  />
      <p className='footer-para-1'>At ScaleEdge Solutions, we are dedicated to simplifying the most complex challenges with ease.</p>
      <div className='footer-phone'>
      <i className="fa-solid fa-phone"></i>
        <p className='mobilenum-content'>Have any questions? <br /> <a href="tel:9251697397">9251697397 </a></p>
      </div>
    </div>
    <div className='col-md-3 footer-col-2 footer-col mx-auto col-10 '>
      <h4 className='footer-heading text-light '>Service</h4>
      <a href="/web-development-service" className='text-decoration-none text-white '> <h5 className=''>Web Design</h5></a>
      <a href="/app-development-service" className='text-decoration-none text-white '>  <h5 className=''>App Development</h5></a>
      <a href="/software-development-service" className='text-decoration-none text-white '>  <h5 className=''>Software Development</h5></a>
 
     <a href="/digital-marketing-service" className='text-decoration-none text-white '><h5 className=''>Online Marketing</h5></a> 
    </div>
   
    <div className='col-md-4 footer-col-4 footer-col ml-auto'>
      <h4 className='footer-heading text-light mb-1'>Newslatter</h4>
      <p>Get in touch with us today to explore how our experts can enhance your business</p>
      
      <form onSubmit={sendEmail} className='footer-seach'>
      <input type="text"  name='email' value={email} onClick={sendEmail}  onChange={(e)=>setEmail(e.target.value)}  placeholder='Your Email'/>
      <button>Subscribe</button>
      <ToastContainer/>
      </form>
      
     
      <div className='footer-social-media-wrapper ' >
      <h5>Social Media:</h5>
      <a href="https://m.facebook.com/profile.php/?id=100089878991548" className="fa-brands icon-edit-second fa-facebook-f icon-wrapper face"></a>
      
      <a href='https://www.linkedin.com/company/scaleedge-solutions/' class="fa-brands fa-linkedin-in icon-edit-three icon-wrapper"></a>
      <a href="https://www.instagram.com/scaleedge/" className="fa-brands fa-instagram icon-edit-four icon-wrapper"></a>

      </div>
    </div>
   </div>
   </div>
    </div>
  )
}
