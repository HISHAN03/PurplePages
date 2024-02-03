import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "./LoadingSpinner";

export default function Card() {
  const [arts, setArts] = useState<Array<{ _id: any, ImgLink: string, ImgName: string, ImgPrice: number, ImgCategory: string }>>([]);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [categoryHeading, setCategoryHeading] = useState("All Categories");

  const handleCategoryChange = (event: any) => {
    const category = event.target.value;

    setSelectedCategory(category);
    switch (category) {
      case "All":
        setCategoryHeading("All Categories");
        break;
      case "casual":
        setCategoryHeading("Casual");
        break;
      case "aesthetic":
        setCategoryHeading("Aesthetic");
        break;
      case "moody":
        setCategoryHeading("Moody");
        break;
      default:
        setCategoryHeading("All Categories");
    }
  };

  const handleBuyNow = (productId: Number) => {
    router.push(`/art/${productId}`);
  };

  const filteredArts = selectedCategory === "All"
    ? arts
    : arts.filter((art) => art.ImgCategory === selectedCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/Arts");
        const artsData = await response.json();
        setIsLoading(false);
        setArts(artsData.arts);
      } catch (error) {
        console.error('Error fetching data', error);
        setIsLoading(false);
        setErrorMessage("Unable to fetch user list ");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mt-10 text-center">
        <h1 className="btn btn-ghost text-purple-700 text-xl mt-10">ARTS</h1>
      </div>
      <div className="navbar bg-white text-neutral-content">
        <h1 className="btn btn-ghost text-purple-700 text-xl">{categoryHeading}</h1>
        <div className="ml-auto">
          <div className="dropdown">
            <select
              className="dropdown-trigger btn btn-sm btn-outline text-purple-700"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="All">All Categories</option>
              <option value="casual">Casual</option>
              <option value="aesthetic">Aesthetic</option>
              <option value="moody">Moody</option>
            </select>
          </div>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : errorMessage ? (
        <p className="text-red-500 mt-4">{errorMessage}</p>
      ) : (
        <div className="flex flex-wrap justify-start">
          {filteredArts.length === 0 ? (
            <h1 className="text-purple-700 text-xl mt-10 p-10">🚫 Out of Stock 🚫</h1>
          ) : (
            filteredArts.map((art) => (
              <div key={art._id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="card card-compact bg-white shadow-xl">
                  <figure>
                    <img
                      src={art.ImgLink}
                      alt={art.ImgName}
                      className="w-full object-cover h-28 md:h-48 lg:h-48 xl:h-48"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-black text-sm md:text-sm lg:text-base xl:text-lg">
                      {art.ImgName}
                    </h2>
                    <p>{art.ImgPrice}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-outline btn-purple-700 btn-sm text-purple-700"
                        onClick={() => handleBuyNow(art._id)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
