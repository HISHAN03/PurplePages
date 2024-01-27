import Img from "../static/logo.jpeg";
import Image from "next/image"; 

export default function Navbar() {
  return (

    <div className="navbar bg-white">
      <div className="navbar-start">
  

      </div>
      <div className="navbar-center">
      <div className="w-10 h-10 mask mask-squircle">
    <Image src={Img}  alt="logo"/>
  </div>
        <a className="btn btn-ghost text-xl text-purple-700 ">PurplePages</a>
      </div>
      <div className="navbar-end">

      </div>
    </div>
  )
}