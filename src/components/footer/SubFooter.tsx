import React,{FC} from 'react'
import news from '../../assets/footer/news.png'
import { useTranslation } from 'react-i18next';





const SubFooter:FC = () => {
const {t}= useTranslation()
  return (
    <div className="flex mb-3 md:mb-40 mt-10">
      <main className="w-full flex flex-col-reverse md:flex-row bg-orange-100 p-28 justify-between gap-10 items-center rounded-lg">
        <section className="flex justify-center flex-col items-center text-center md:items-start md:w-1/2 md:text-left">
          <h1 className="font-roboto text-3xl font-medium">
           {t("footer.title")}
          </h1>
          <p className="mt-4 mb-11 font-raleway ">
           {t("footer.text")}
          </p>
          <div className='bg-white flex w-fit rounded-lg p-1'>
            <input className="p-2" type="text" placeholder="register"/>
            <button className="px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 text-white font-raleway font-normal">
              {t("footer.regis")}
            </button>
          </div>
        </section>
        <section className='object-cover'>
          <img src={news} alt="news image" />
        </section>
      </main>
    </div>
  );
}

export default SubFooter