import Img from "../static/banner.jpeg";
import Image from "next/image"; 

export default function corousel() {
  return (
    <div className="carousel carousel-end box ">
    <div className="carousel-item  ">
      <img width={350} height={400} src="https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHdvcmt8ZW58MHx8MHx8fDA%3D" alt="Drink" />
    </div> 
    <div className="carousel-item">
    <img width={350} height={400} src="https://images.unsplash.com/photo-1583243552320-73d7f2f21e7a?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
     
    </div> 
    <div className="carousel-item">
      <img width={350} height={400} src="https://images.unsplash.com/photo-1581592487771-132f53bd2b48?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
    </div> 
    <div className="carousel-item">
      <img width={350} height={400} src="https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
    </div> 
    <div className="carousel-item">
      <img width={350} height={400} src="https://images.unsplash.com/photo-1616000076806-7d7609499994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0d29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="Drink" />
    </div> 
    <div className="carousel-item">
    <img width={350} height={400} src="https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
    </div> 
    <div className="carousel-item">
      <img width={350} height={400} src="https://images.unsplash.com/photo-1577686716048-ba6d0abbb4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
    </div>
  </div>
  );
}
