import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import Link from 'next/link';
import LoadingSpinner from "@/components/LoadingSpinner";
export default function Art() {

  const [arts, setArts] = useState<{ _id: any, ImgLink: string, ImgName: string, ImgPrice: number,ImgCategory:string }>();
  const router = useRouter(); 
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        const foundart = await response.json();
        setIsLoading(false);
        setArts(foundart.foundArt);
        console.log(foundart.foundArt.ImgName);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    find();
  }, [router]);

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
            <p className="text-2xl font-bold mb-2 text-purple-700">{arts.ImgName}</p>
          <p className="text font-bold mb-2 text-gray-500">{arts.ImgCategory}</p>
            <p className="text-xl font-bold text-purple-700">₹{arts.ImgPrice}</p>

            <Link href={`https://wa.me/919019164209?text=Hello,+I+am+interested+in+buying+this+art+${encodeURIComponent(arts.ImgName)}.`} passHref>
                <button className="mt-2 btn btn-wide btn btn-outline btn-info" rel="noopener noreferrer">
                   Buy
                </button>
              </Link>
          </div>
        </div>
      </>
    ) : <LoadingSpinner />}
    <Footer />
  </div>
  
  );
}
