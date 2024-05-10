import React from 'react'

const Description = () => {
  return (
    <div className = "my:6 md:my-[120px] md:mx-[170px] mt-5 ">
        <div className='flex '>
            <div className='flex items-center justify-center text-[14px] md:text-base font-semibold  h-[35px] w-[171px] md:h-[70px] border boredr-[#d0d0d0]'>
                Description
            </div>
            <div className='bg-[#fbfbfb] flex items-center justify-center text-[14px] md:text-base font-semibold  h-[35px] w-[171px] md:h-[70px] border boredr-[#d0d0d0] text-[#555]'>
                Reviews (122)
            </div>
        </div>
        <div className='flex flex-col md:gap-[25px] border border-[#d0d0d0] p-4 md:p-12 md:pb-[70px]'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or service over the internet . It serves as a virtual marketplace where businesses and indiviual can showcase their products. Interact with customers and conduct transaction without the need for a physical preesence E-commerce website have gained immense popularity due to their convenience accessibilty, and the global reach they offer.</p>
            <p>E-commerce website typically display products as services along the deatialed description images prices and they only avaiable varients (e.g. sizes colors) Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default Description