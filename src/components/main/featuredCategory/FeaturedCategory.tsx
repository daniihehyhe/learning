import React from 'react'
import { categoryData } from '../../../constants/sliderData'

function FeaturedCategory() {
  return (
    <div className='px-[20px] py-[80px] bg-[#F9FAFB] sm:px-[60px] lg:px-[144px] lg:py-[120px] dark:bg-[#161C24] dark:opacity-[0.95]' >
        <div className='lg:flex lg:justify-between lg:items-start lg: gap-[100px]'>
            <div className='lg:w-[368px]'>
                <div className='text-black text-[32px] font-bold text-center lg:text-left'>Featured Category</div>
                <div className='text-[#637381] mt-2 font-regular text-center text-[16px] lg:text-left'>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</div>
                <button className='bg-[#FA541C] px-[22px] py-[11px] rounded-[8px] mt-[40px] mx-auto text-[15px] font-semibold text-white block lg:mx-0'>Explore more</button>
            </div>
            <div className='mt-[64px] flex flex-wrap justify-between gap-[16px] lg:w-[662px] lg:mt-0'> 
                {
                    categoryData.map((item,index) => (
                        <div key={index} className='w-[155px] h-[130px] rounded-[12px] bg-white border-solid border-[1px] border-[#919EAB3D] lg:hover:text-[#FA541C] cursor-pointer p-[24px]  lg:w-[205px] lg:h-[108px] lg:bg-[#F9FAFB] lg:hover:bg-white lg:hover:shadow-category '>
                            <div className='text-black text-[14px] font-semibold lg:hover:text-[#FA541C]'>{item.title}</div>
                            <div className='text-[#637381] text-[13px] font-regular mt-[4px]'> {item.subtitle}</div>
                        </div> 
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FeaturedCategory