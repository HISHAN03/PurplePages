import React, { useState, useEffect } from "react";


export default function Delet() {

  const [arts, setArts] = useState<Array<{ _id: any, ImgLink: string, ImgName: string, ImgPrice: number, ImgCategory: string }>>([]);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    const enteredPassword = prompt('Enter the password:');
    if (enteredPassword === process.env.NEXT_PUBLIC_MY_PASSWORD) {
      setIsPasswordCorrect(true);
    } else {
      alert('Incorrect password. Access denied.');

    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Arts");
        const artsData = await response.json();
        setArts(artsData.arts);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  }, []);



  const handleDelete = async (artId: any) => {
    try {
      const response = await fetch("/api/delet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: artId }),
      });

      if (response.ok) {
        setArts((prevArts) => prevArts.filter((art) => art._id !== artId));
        console.log('Art deleted successfully');
        alert('Art deleted successfully');

      } else {
        console.error('Error deleting art:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting art:', error);
    }
  };

  if (!isPasswordCorrect) {
    // If password is incorrect, do not render the page content
    return null;
  }

  return (
    <>
      <div className="flex flex-wrap justify-start bg-white">
        {arts.map((art) => (
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
                    className="btn btn-outline btn-error btn-sm "
                    onClick={() => handleDelete(art._id)}
                  >
                    Delete
                  </button>
                  {/* <button
                    className="btn btn-outline btn-primary btn-sm "
                    onClick={() => handleUpdate(art._id)}
                  >
                    Update
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
