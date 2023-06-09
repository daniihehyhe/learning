import spotify from '../../connection/assets/spotify.png';
import vimeo from '../../connection/assets/vimeo.png';
import slack from '../../connection/assets/slack.png';
import netflix from '../../connection/assets/netflix.png';
import heroku from '../../connection/assets/heroku.png';
import airbnb from '../../connection/assets/airbnb.png';
import { useTranslation } from 'react-i18next';

function Work() {
    const { t } = useTranslation();
    const workData = [spotify,slack,netflix,heroku,vimeo,airbnb]
  return (
    <div>
        <div className='text-center'>
        <h1 className=' text-5xl my-5 text-center font-bold max-sm:text-3xl dark:text-white'>{t("Connection.title")}</h1>
        <p className=' text-base my-5 text-gray-500 dark:text-white'>Quisque aliquet, libero consequat elementum convallis.</p>
            <div className='flex my-16 py-5 w-full justify-center gap-[85px] max-[1268px]:gap-[25px] max-[912px]: flex-wrap'>
                {
                    workData.map((item) => (
                        <img className='dark:invert dark:text-white' key={item} src={item} alt="Logo" />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Work