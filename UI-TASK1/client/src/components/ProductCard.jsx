import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCard = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setCardProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: "smooth",
      });
      checkButtons();
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: "smooth",
      });
      checkButtons();
    }
  };

  const checkButtons = () => {
    const container = containerRef.current;
    if (container) {
      document.querySelector(".arrow-left").disabled = container.scrollLeft === 0;
      document.querySelector(".arrow-right").disabled =
        container.scrollLeft + container.clientWidth >= container.scrollWidth;
    }
  };

  useEffect(() => {
    checkButtons();
  }, [cardProducts]);

  return (
    <div className="w-full overflow-hidden mx-2">
      <div id="header-text" className="text-center font-bold text-3xl mt-5">
        Exclusive Products
      </div>
      <div className="text-center font-bold my-5 text-5xl">
        New Year Offer, Grab it Quickly
      </div>
      <div
        className="w-full h-[500px] flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide"
        ref={containerRef}
      >
        {cardProducts.map((product) => (
          <div className="bg-white card w-96 min-w-[300px] shadow-xl" key={product.id}>
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
      <div className="w-full flex justify-end px-20 pt-10 gap-4">
        <button className="arrow-left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <button className="arrow-right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
