import React, { useState } from "react";
import getProductList from "./Products";
import { useRouter } from "next/router";

export default function Card() 
{
  const router = useRouter();
  const products = getProductList();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryHeading, setCategoryHeading] = useState("All Categories");
  const handleCategoryChange = (event:any) => {
    const category = event.target.value;
    
    setSelectedCategory(category);
    switch (category) {
      case "All":
        setCategoryHeading("All Categories");
        break;
      case "Casual":
        setCategoryHeading("Casual Shoes");
        break;
      case "Athletic":
        setCategoryHeading("Athletic Shoes");
        break;
      case "Fashion":
        setCategoryHeading("Fashion Shoes");
        break;
      default:
        setCategoryHeading("All Categories");
    }};

  const handleBuyNow = (productId:Number) => {
    router.push(`/art/${productId}`);

  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white">
      <div className="navbar bg-white text-neutral-content">
        <h1 className="btn btn-ghost text-purple-700 text-xl">{categoryHeading}</h1>
        <div className="ml-auto">
          <div className="dropdown ">
            <select
              className="dropdown-trigger btn btn-sm  btn-outline text-purple-700"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="All">All Categories</option>
              <option value="Casual">Casual</option>
              <option value="Athletic">Athletic</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-start">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 p-4 "
          >
            <div className="card card-compact bg-white shadow-xl">
              <figure>
                <img
                  src={product.imageUrl}
                  alt={product.shoeName}
                  className="w-full object-cover h-28 md:h-48 lg:h-48 xl:h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-black text-sm md:text-sm lg:text-base xl:text-lg">
                  {product.shoeName}
                </h2>
                {/* <p>{product.description}</p> */}
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-purple-700 btn-sm text-purple-700" 
                  onClick={() => handleBuyNow(product.id)}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
