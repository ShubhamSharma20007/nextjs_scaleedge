
import  Contact from "@/app/components/Contact/contact";
import Navbar from "../components/Navbar/navbar";

export const metadata = {
    title: 'Contact page ',
    description: 'Contact page description',
    keywords: "contact keyword keyword",
  
  
  }

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Contact></Contact>
    </div>
  )
}

export default page
