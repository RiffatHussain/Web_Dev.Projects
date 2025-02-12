import React, { useState, useEffect, useRef } from "react";


const ProductCard = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setCardProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);


  return (
    <div className="w-full h-full mx-2 my-20">
      <div
        className="w-full h-auto flex flex-wrap justify-around gap-8"
        ref={containerRef}
      >
        {cardProducts.map((product) => (
          <div className="bg-white card w-96 min-w-[300px] sm:min-w-[50px] sm:min-h-[50px] shadow-xl p-2" key={product.id}>
            <figure className="px-3 py-3">
              <img
                src={product.image}
                alt="Product"
                className="rounded-xl w-[90%] h-[180px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              <div className="card-content">Price : {product.price}</div>
              <p>{product.description}</p>
              <div className="card-actions flex justify-center gap-2">
                <button className="btn btn-primary w-[90%]">Buy Now</button>
                <button className="btn btn-outline w-[90%]">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
