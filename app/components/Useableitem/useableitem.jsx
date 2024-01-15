import React from 'react'
import "@/app/style/useableitem.css";
import Image from 'next/image';
import kite from "@/public/images/kite.webp"

const usableitem = (props) => {
    const {title,para,listvalue=[] ,seoVal,newtitle,newpara,section,app_main_img,secondimg,alt_tag } =props
    
  return (
    <>         
      <div className="row row1 useable-container col-md-12 m-0">
                <div className="col-md-5  firstCol useable-first mt-5 ">
                    {
                      seoVal ? <h2 className="aboutHeading mut-heading m-0">{title}{newtitle}</h2> :<h1 className="aboutHeading mut-heading m-0">{title}{newtitle}</h1>
                    }
                  {/* here i sending a section value base on this it would be rendering */}
                   {
                    section ?  <div className="button1 mx-0 my-3">
                    <a href="">Service<i class="fa-solid fa-angle-right"></i><span>{title}{newtitle} </span></a>
                </div> :''
                   }
                    <p className='para-para text-start  p-0'>{para}{newpara}</p>
                    <ul className='list-useable'>
                        {listvalue.map((item, index) => (
                            <li key={index}>{item.points}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="col-md-6 secondCol my-auto">
                          <div className=' useable-style d-flex  justify-content-center '>
                          {app_main_img ? (
              <Image className="image img-fluid mobileImage w-[80%]" width={"80%"} height={"80%"} src={app_main_img} alt={alt_tag}  title={alt_tag}/>
            ) : (
              <Image className="image img-fluid mobileImage w-20" width={"80%"} height={"80%"} src={secondimg} alt={alt_tag}  title={alt_tag} />
            )}
                          </div>
       
                </div>
                <Image src={kite}  width={"80%"} height={"80%"} alt="kite-icon" title='kite-icon'   className='kite img-fluid' style={{opacity:0.3}} />
           

            </div>
          
           
    </>
  )
}

export default usableitem
