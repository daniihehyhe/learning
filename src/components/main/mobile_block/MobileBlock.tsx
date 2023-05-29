/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { useTranslation } from 'react-i18next';
import apple from '../../../assets/mobile_app/apple.png'
import mobile from '../../../assets/mobile_app/mobile_app.png'
import pm from '../../../assets/mobile_app/pm.png'
import qr from '../../../assets/mobile_app/qr.png'

function MobileBlock() {
	const {t} =useTranslation()
  return (
    <div className="flex ">
      <section className="w-1/2">
        <h1 className="font-roboto font-medium text-3xl">
          {t("mobile.title")}
        </h1>
        <p className="font-raleway font-normal text-gray-400 mt-5">
          {t("footer.text")}
        </p>
        <main className="flex flex-col items-center mt-16 border-solid border-2 border-gray-400-500 p-10 rounded-lg ">
          <div className="flex my-10 w-96">
            <img src={qr} alt="" />
            <h2 className="font-roboto font-medium ml-8 text-xl">
              {t("mobile.qr")}
            </h2>
          </div>
          <div>
            <button className="bg-black pl-10 p-3 rounded-lg font-raleway text-gray-300 relative">
              <img className="absolute left-2 top-2" src={apple} alt="" />
              <p>{t("mobile.download")}</p>
              <h6 className="font-roboto text-white font-medium text-lg">
                Apple Store
              </h6>
            </button>
            <button className="bg-black ml-5 pl-10 p-3 rounded-lg font-raleway text-gray-300 relative">
              <img className="absolute left-2 top-2" src={pm} alt="" />
              <p>{t("mobile.download")}</p>
              <h6 className="font-roboto text-white font-medium text-lg">
                Google Play
              </h6>
            </button>
          </div>
        </main>
      </section>
      <section className="w-1/2 object-cover">
        <img src={mobile} alt="" />
      </section>
    </div>
  );
}

export default MobileBlock