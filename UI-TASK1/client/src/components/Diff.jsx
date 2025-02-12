import React from 'react'

const Diff = () => {
  return (
    <div>
       <div className="diff aspect-video w-full max-w-[750px] rounded-badge mx-auto my-10 md:my-20 px-4 md:px-0">
                    <div className="diff-item-1">
                        <div className="bg-primary text-primary-content grid place-content-center text-3xl md:text-7xl lg:text-9xl font-black p-2 md:p-0">
                        PETLIVIA
                        </div>
                    </div>
                    <div className="diff-item-2">
                        <div className="bg-base-200 grid place-content-center text-3xl md:text-7xl lg:text-9xl font-black p-2 md:p-0">
                        PETLIVIA
                        </div>
                    </div>
                    <div className="diff-resizer"></div>
        </div>
    </div>
  )
}

export default Diff
