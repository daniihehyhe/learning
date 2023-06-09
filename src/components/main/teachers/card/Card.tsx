import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import {Teachers2} from '../TEachers2';


interface props {
    socialData : any,
    item: Teachers2
}


function Card({socialData,item}: props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
      
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const { t } = useTranslation();
      
  return (
    <>
        <div key={item.img} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                className='flex flex-col gap-4 items-center border rounded-[16px] dark:bg-[#212B36] dark:border-none cursor-pointer relative'>
                <h1 className='mt-[24px] text-[18px] font-semibold dark:text-white'>{t(item.name)}</h1>
                <p className='text-[13px] text-gray-500 font-normal dark:text-white'>{t(item.description)}</p>
                <img className='rounded-[16px] rounded-t-none' src={item.img} alt=""/>
                {
                    isHovered  && (
                        <div className='absolute w-[270px] h-[270px] top-[105px] rounded-b-[16px] flex justify-center gap-[20px] pt-[225px]'  style={{background:'linear-gradient(180deg, rgba(0, 0, 0, 0) -1.23%, #000000 80%)'}}>
                           {
                                socialData.map((item:any) => (
                                <a  key={item.href} href={item.href} target="blunk"> <img src={item.img} alt="Social" /></a>
                                ))
                            }
                        </div>
                    )
                }
            </div>
    </>
  )
}

export default Card