import Img from "../static/ban1.jpeg";
import Image from "next/image"; 

export default function car1()
{
    return(

        <div className="carousel w-full">
        <Image   src={Img} className="w-full h-30" alt="Drink" />
  </div> 
        )

}