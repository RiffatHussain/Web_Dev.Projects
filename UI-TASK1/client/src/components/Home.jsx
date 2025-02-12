import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel.jsx";
import ProductCard from "./ProductCard.jsx";
import Footer from "./Footer.jsx";
import Timer from './Timer.jsx';
import Diff from './Diff.jsx';
import Hero from './Hero.jsx';




const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerTop = document.getElementById('header-text').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (headerTop < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [ 
    { 
      image: './image/image-1.jpg', 
      name: 'Puppy Gadgets Combo', 
      description: 'Well Suited for your puppy!' 
    }, 
    { 
      image: './image/image-2.jpg', 
      name: 'Puppy Woody Combo', 
      description: 'Limited Edition' 
    }, 
    { 
      image: './image/image-3.jpg', 
      name: 'Puppy playful combo', 
      description: 'specially designed for...' 
    }
  ];

  return (
        
          <>
            <main className="p-4">
              <Carousel products={products} />
              <div className='bg-white w-full max-h-[400px] flex flex-wrap justify-around items-center my-10'>
                <div className='text-gray-900  text-base md:text-4xl lg:text-6xl p-2 m-4 font-bold'>PETLIVIA</div>
                <div className='text-gray-900 text-sm md:text-2xl lg:text-4xl p-2 m-4 font-bold'>Especially designed for your pet!</div>
              </div>

              <Timer />
              <ProductCard />
              
              <Diff />
              <Hero />
              <div className='bg-white w-full max-h-[400px] flex flex-wrap justify-around items-center my-10'></div>
            </main>
            <Footer />
          </>
      
    
  );
};

export default Home;
