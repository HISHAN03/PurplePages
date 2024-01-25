import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import Link from 'next/link';
export default function Art() {
  const [arts, setArts] = useState<{ _id: any, ImgLink: string, ImgName: string, ImgPrice: number,ImgCategory:string }>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const find = async () => {
      try {
        console.log("request");
        const response = await fetch("/api/find", {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ id })
        });
        const foundart = await response.json();
        setArts(foundart.foundArt);
        console.log(foundart.foundArt.ImgName);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    find();
  }, []);

  return (
    <div>
    <Navbar />
    {arts  ? (
      <>
        <div className="container mx-auto p-4">
          <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
            <img
              src={arts.ImgLink}
              alt={arts.ImgName}
              className="w-full h-auto rounded-md border border-gray-300 mb-4"
            />
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-2">{arts.ImgCategory}</h1>
            <h1 className="text-2xl font-bold mb-2">{arts.ImgName}</h1>
            <p className="text-gray-700">{arts.ImgPrice}</p>

            <Link href={`https://wa.me/919019164209?text=Hello,+I+am+interested+in+buying+${encodeURIComponent(arts.ImgName)}.`} passHref>
                <button className="btn btn-primary mt-4" target="_blank" rel="noopener noreferrer">
                  Click to Buy
                </button>
              </Link>
          </div>
        </div>
      </>
    ) : null}
    <Footer />
  </div>
  
  );
}
