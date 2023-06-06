import React, {FC} from 'react';
import { useTranslation } from "react-i18next";


import spotify from './assets/spotify.png';
import vimeo from './assets/vimeo.png';
import slack from './assets/slack.png';
import netflix from './assets/netflix.png';
import heroku from './assets/heroku.png';
import airbnb from './assets/airbnb.png';


function Connection() {
    const { t } = useTranslation();
  return (
    <section>

      <div className='text-center my-20 px-16'>
        <h1 className=' text-5xl my-5 text-center font-bold max-sm:text-3xl'>{t("Connection.title")}</h1>
        <p className=' text-base my-5 text-gray-500'>Quisque aliquet, libero consequat elementum convallis.</p>
        <div className='flex py-5 w-full justify-center gap-[85px] max-[1268px]:gap-[55px] max-[912px]: flex-wrap'>
          <img src={spotify} alt="logo"  />
          <img src={slack} alt="logo" />
          <img src={netflix} alt="logo"  />
          <img src={heroku} alt="logo"  />
          <img src={vimeo} alt="logo"  />
          <img src={airbnb} alt="logo"  />
        </div>
      </div>
    </section>

  )
}

export default Connection