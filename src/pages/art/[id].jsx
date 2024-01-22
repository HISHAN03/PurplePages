import { useRouter } from "next/router";
import getProductList from "../../components/Products";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Art() {
  const router = useRouter();
  const { id } = router.query;
  const products = getProductList();
  const selectedProduct = products.find(
    (product) => String(product.id) === String(id)
  );

  if (!selectedProduct) {
    return <h1>No products found</h1>;
  }

  const { shoeName, description, imageUrl } = selectedProduct;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
          <img
            src={imageUrl}
            alt={shoeName}
            className="w-full h-auto rounded-md border border-gray-300 mb-4"
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-2">{shoeName}</h1>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
