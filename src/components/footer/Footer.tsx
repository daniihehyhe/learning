/* eslint-disable no-mixed-spaces-and-tabs */
import React, {FC} from 'react'
import SubFooter from './SubFooter'
import fb from '../../assets/icon/fb.png'
import twit from '../../assets/icon/twit.png'
import link from '../../assets/icon/link.png'
import ins from '../../assets/icon/ins.png'
import mail from '../../assets/icon/mail.png'
import local from '../../assets/icon/local.png'
import logo from '../../assets/logo.png'
import '../../index.css'
import { useTranslation } from 'react-i18next'

const Footer:FC = () => {
  const{t}= useTranslation()
  return (
    <>
        <SubFooter/>
      <div className="container_global dark:bg-[#161C24]">
        <footer className="flex flex-col md:flex-row items-center gap-3 font-raleway">
          <main className="w-full flex flex-col justify-center md:items-start items-center md:w-1/3">
            <img className='dark:invert' src={logo} alt="logo" />
            <p className="mt-6 text-center md:text-left mb-4 dark:text-white">
              {t("footer.discrip")}
            </p>
            <div className="flex gap-1 ">
              <img className='dark:invert' src={fb} alt="faceBook" />
              <img className='dark:invert'  src={ins} alt="instagram" />
              <img className="object-contain dark:invert" src={link} alt="link" />
              <img className='dark:invert' src={twit} alt="twitter" />
            </div>
          </main>
          <main className="flex items-center pb-5 flex-col w-full md:w-1/3 ">
            <div className="flex gap-3 mb-3 dark:text-white font-regular">
              <img className='dark:invert' src={mail} alt="mail" /> info@example.com
            </div>
            <div className="flex gap-3 dark:text-white font-regular">
              <img className='dark:invert ' src={local} alt="local" /> 655 Schaefer Dale
            </div>
          </main>
          <main className="min-w-fit flex lg:w-1/3 pb-10 justify-center">
            <div className="bg-whiterounded-lg p-1">
              <input
                className="p-2"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 text-white font-raleway font-normal">
                D
              </button>
            </div>
          </main>
        </footer>
        <section className="flex justify-between py-5 font-raleway">
          <div className='dark:text-white'>© 2021.{t("footer.info")}</div>
          <div>
            <span className='dark:text-white'>{t("footer.help")}</span>
            <span className="ml-3 dark:text-white">{t("footer.term")}</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer