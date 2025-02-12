import React, { useEffect, useState } from 'react'

const PhoneUI = () => {
    const [cardProducts, setCardProducts] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then((response) => response.json())
        .then((data) => setCardProducts(data))
        .catch((error) => console.error("Error:", error))
    }, [])

  return (
    <div>
        <div className='w-full h-[500px] flex gap-8 overflow-x-auto overflow-y-hidden justify-center scrollbar-hide p-10' >
        {
            cardProducts.map((product) => {
                return (

                <div key={product.id} className="mockup-phone border-primary min-w-[200px] min-h-[300px]">
                    <div className="camera"></div>
                    <div className="display ">
                    <div className="block artboard artboard-demo phone-1">
                        <figure>
                            <img src={product.image} alt="product-image" className='object-cover min-w-[200px] min-h-[200px]' />
                        </figure>
                    </div>
                    </div>
                </div>
                )       
            })
        }


       

        
        </div>
    </div>
  )
}

export default PhoneUI
