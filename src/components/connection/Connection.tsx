import React, { FC } from 'react';
import { useTranslation } from "react-i18next";


import spotify from './assets/spotify.png';
import vimeo from './assets/vimeo.png';
import slack from './assets/slack.png';
import netflix from './assets/netflix.png';
import heroku from './assets/heroku.png';
import airbnb from './assets/airbnb.png';


import laptop from './assets/laptop.png';
import line from './assets/line.png';
import Pena from './assets/Pena.png';
import Murphy from './assets/Murphy.png';
import Russel from './assets/Russel.png';
import Howard from './assets/Howard.png';


function Connection() {

  const { t } = useTranslation();



  return (
    <section>

      <div className='text-center my-20 px-16'>
        <h1 className=' text-5xl my-5 text-center font-bold max-sm:text-3xl'>{t("Connection.title")}</h1>
        <p className=' text-base my-5 text-gray-500'>Quisque aliquet, libero consequat elementum convallis.</p>
        <div className='flex py-5 w-full justify-center gap-[85px] max-[1268px]:gap-[25px] max-[912px]: flex-wrap'>
          <img src={spotify} alt="logo" className='' />
          <img src={slack} alt="logo" className='' />
          <img src={netflix} alt="logo" className='' />
          <img src={heroku} alt="logo" className='' />
          <img src={vimeo} alt="logo" className='' />
          <img src={airbnb} alt="logo" className='' />
        </div>
      </div>

      <div className='px-[144px] flex flex-col gap-[80px] py-[80px] w-[100%] max-[1120px]:gap-[20px] max-[1000px]:px-[80px] max-[600px]:py-[20px] max-[470px]:px-[40px]'>
        <p className='text-[12px] text-orange h-5 font-semibold'>Nullam accumsan lorem in dui.</p>
        <div className='flex gap-[200px] max-[1500px]:gap-[140px] max-[1400px]:gap-[70px]'>
          <img className='rounded-[20px] max-[1300px]:w-[366px] max-[1300px]:h-[521px] max-[1120px]:w-[266px] max-[1120px]:h-[421px] max-[950px]:hidden'
            src={laptop} alt=""
          />
          <div>
            <h1 className='text-[36px] font-bold mt-[110px] leading-[44px] w-[564px] max-[1300px]:mt-[50px] max-[1300px]:text-[30px] 
            max-[1120px]:mt-0 max-[950px]:text-[36px] max-[700px]:text-[30px] max-[600px]:text-[24px] max-[600px]:w-[335px] '>
              Phasellus gravida semper nisi. Vestibulum rutrum, mi
            </h1>
            <p className=' mt-[24px] text-[16px] font-normal text-gray-500 leading-[28px] w-[564px] max-[1200px]:w-[400px] max-[950px]:w-[564px] max-[700px]:w-[400px] max-[600px]:w-[335px]'>
              Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget
              lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos hymenaeos.
            </p>
            <div className='flex gap-[80px] mt-[80px] max-[1150px]:gap-[20px] max-[950px]:gap-[80px] max-[700px]:gap-[20px] max-[600px]:flex-col'>
              <div>
                <img src={line} alt="" />
                <p className=' w-[230px] text-[14px] font-normal text-gray-500 leading-[26px] mt-[24px] max-[600px]:w-[335px]'>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                </p>
              </div>
              <div>
                <img src={line} alt="" />
                <p className=' w-[230px] text-[14px] font-normal text-gray-500 leading-[26px] mt-[24px] max-[600px]:w-[335px]'>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-[144px] py-[80px] flex flex-col items-center max-[600px]:px-[40px]'>
        <h1 className='text-[48px] font-bold max-[1300px]:text-[40px] max-[750px]:text-[32px] max-[750px]:w-[300px]'>
          {t("teachers.title")}
        </h1>
        <p className='mt-3 text-[16px] font-normal text-gray-500 leading-[28px] w-[500px] text-center max-[750px]:w-[335px]'>
          {t("teachers.description")}
        </p>
        <div className='mt-10 flex gap-[75px] max-[1400px]:gap-[40px] max-[1300px]:gap-[15px] max-[1250px]:flex-col '>
          <div className='flex gap-[75px] max-[1400px]:gap-[40px] max-[1300px]:gap-[15px] max-[750px]:flex-col'>
            <div className='mt-10 flex flex-col gap-4 items-center  border rounded-[16px] shadow-lg'>
              <h1 className='mt-[24px] text-[18px] font-semibold'>Eleanor Pena</h1>
              <p className='text-[13px] text-gray-500 font-normal'>{t("teachers.designer")}</p>
              <img className='' src={Pena} alt="" />
            </div>
            <div className='mt-10 flex flex-col gap-4 items-center border rounded-[16px] shadow-2xl'>
              <h1 className='mt-[24px] text-[18px] font-semibold'>Kathryn Murphy</h1>
              <p className='text-[13px] text-gray-500 font-normal'>{t("teachers.manager")}</p>
              <img className='' src={Murphy} alt="" />
            </div>
          </div>
          <div className='flex gap-[75px] max-[1400px]:gap-[40px] max-[1300px]:gap-[15px] max-[750px]:flex-col'>
            <div className='mt-10 flex flex-col gap-4 items-center  border rounded-[16px] shadow-lg'>
              <h1 className='mt-[24px] text-[18px] font-semibold'>Dianne Russell</h1>
              <p className='text-[13px] text-gray-500 font-normal'>{t("teachers.Leader")}</p>
              <img className='' src={Russel} alt="" />
            </div>
            <div className='mt-10 flex flex-col gap-4 items-center border rounded-[16px] shadow-lg'>
              <h1 className='mt-[24px] text-[18px] font-semibold'>Esther Howard</h1>
              <p className='text-[13px] text-gray-500 font-normal'>{t("teachers.project")}</p>
              <img className='' src={Howard} alt="" />
            </div>
          </div>
        </div>
        <button className=' mt-24 border border-gray-300 rounded-xl w-[178px] h-[48px]'>
          <p className='text-[15px] font-semibold'>{t("teachers.button")}</p>
        </button>
      </div>

    </section>
  )
}

export default Connection