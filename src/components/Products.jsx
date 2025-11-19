import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const Products = () => {
  const [listProducts, setListProduct] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((Response) => Response.json())
      .then((data) => {
        setListProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  console.log(listProducts);

  return (
    <>
      <nav className="w-full h-20 bg-gray-900 text-white flex justify-between items-center px-10 mb-10">
        <span className="text-2xl font-bold ">BOUTIQUE</span>
      </nav>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[300px]">
          <ScaleLoader
            color="#111824"
            height={50}
            width={6}
            radius={2}
            margin={2}
          />
        </div>
      ) : (
        <div className="grid items-center px-10 gap-y-10 mb-10 lg:grid-cols-4 lg:gap-4 lg:px20 md:grid-cols-2 md:px-10 md:gap-y-10 sm:grid-cols-1 sm:px-10 sm:gap-y-10">
          {listProducts.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt="image"
                className="w-[200px] h-[200px]"
              />
              <h1>Title: <span className="text-blue-500 font-bold">{product.title}</span> </h1>
           
              <p>Price: <span className="text-orange-500 font-bold">{product.price} Frw</span></p>
              <button className="bg-blue-500 text-white px-10 py-2 rounded-xl">
                Bay
              </button>
              <button className="bg-gray-500 text-white px-8 py-2 rounded-xl ml-4">
                Add +
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
