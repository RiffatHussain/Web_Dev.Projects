import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const Carousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover : true,
    fade : true
  };

  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const carouselTop = carouselRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (carouselTop < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={carouselRef}
      className={`w-full min-h-[60vh] md:min-h-[90vh] sm:min-h-[50vh] bg-gray-900 carousel-slide  transform transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "translate-y-full"  
      } rounded-xl overflow-hidden mt-20`}
    >
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="relative">
            <img src={product.image} alt={product.name} className="w-full h-[90vh] object-cover" />
            <div className="absolute bottom-4 left-4 text-white bg-opacity-50 bg-black p-2 rounded">
              <h3 className="text-2xl">{product.name}</h3>
              <p className="text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
