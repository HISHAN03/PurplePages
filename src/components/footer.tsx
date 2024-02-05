import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function footer()
{
    return(

        <footer className="footer p-10 bg-white-200 text-purple-500 mb-0">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Custom Arts</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Oil-Paintings</a>
  </nav> 
  <nav>
    <header className="footer-title">Contact Us</header> 
    <a className="link link-hover">+91 9019164209</a>
    <a className="link link-hover">@purple.pages._</a>
    <a className="link link-hover">wepurplepages@gmail.com</a>
  </nav> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
    <a href="https://www.instagram.com/purple.pages._" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="2em" />
        </a>


        <a href={`https://wa.me/+919019164209`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size="2em" />
        </a>
      
        <a href="https://www.github.com/hishan03/PurplePages" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" />
        </a>


  
    </div>
  </nav>
</footer>
        )
}