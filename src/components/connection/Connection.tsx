import React, { FC } from 'react';
import { useTranslation } from "react-i18next";



import laptop from './assets/laptop.png';
import line from './assets/line.png';



function Connection() {


  const { t } = useTranslation();



  return (
    <section className='mt-[80px] '>

      <div className='flex flex-col gap-[80px] py-[80px] w-[100%] max-[1120px]:gap-[20px] max-[1000px]:px-[80px] max-[600px]:py-[20px] max-[470px]:px-[40px]'>
        <p className='text-[12px] text-orange h-5 font-semibold text-[#FA541C] uppercase'>Nullam accumsan lorem in dui.</p>
        <div className='flex gap-[200px] max-[1500px]:gap-[140px] max-[1400px]:gap-[70px]'>
          <img className='rounded-[20px] max-[1300px]:w-[366px] max-[1300px]:h-[521px] max-[1120px]:w-[266px] max-[1120px]:h-[421px] max-[950px]:hidden'
            src={laptop} alt=""
          />
          <div>
            <h1 className='text-[36px] font-bold mt-[110px] leading-[44px] w-[564px] max-[1300px]:mt-[50px] max-[1300px]:text-[30px] 
            max-[1120px]:mt-0 max-[950px]:text-[36px] max-[700px]:text-[30px] max-[600px]:text-[24px] max-[600px]:w-[335px] dark:text-white '>
              Phasellus gravida semper nisi. Vestibulum rutrum, mi
            </h1>
            <p className=' mt-[24px] text-[16px] font-normal text-gray-500 leading-[28px] w-[564px] max-[1200px]:w-[400px] max-[950px]:w-[564px] max-[700px]:w-[400px] max-[600px]:w-[335px] dark:text-[#919EAB]'>
              Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget
              lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos hymenaeos.
            </p>
            <div className='flex gap-[80px] mt-[80px] max-[1150px]:gap-[20px] max-[950px]:gap-[80px] max-[700px]:gap-[20px] max-[600px]:flex-col'>
              <div>
                <img src={line} alt="" />
                <p className=' w-[230px] text-[14px] font-normal text-gray-500 leading-[26px] mt-[24px] max-[600px]:w-[335px] dark:text-[#919EAB]'>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                </p>
              </div>
              <div>
                <img src={line} alt="" />
                <p className=' w-[230px] text-[14px] font-normal text-gray-500 leading-[26px] mt-[24px] max-[600px]:w-[335px] dark:text-[#919EAB]'>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connection