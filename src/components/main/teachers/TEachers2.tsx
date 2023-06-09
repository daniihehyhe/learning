import Pena from '../../connection/assets/Pena.png';
import Murphy from '../../connection/assets/Murphy.png';
import Russel from '../../connection/assets/Russel.png';
import Howard from '../../connection/assets/Howard.png';
import first from '../../connection/assets/first.png';
import second from '../../connection/assets/second.png';
import third from '../../connection/assets/third.png';
import last from '../../connection/assets/last.png';
import social1 from '../../connection/assets/social1.svg'
import social2 from '../../connection/assets/social2.svg'
import social3 from '../../connection/assets/social3.svg'
import social4 from '../../connection/assets/social4.svg'


import { useTranslation } from 'react-i18next';
import Card from './card/Card';

export interface Teachers2 {
    img: string,
    name: string,
    description: string,
}

export const Teachers2Data : Array<Teachers2>= [
    {
        name: "Eleanor Pena",
        description: "teachers.founder",
        img: first
    },
    {
        name: "Eleanor Pena",
        description: "teachers.analyst",
        img: second
    },
    {
        name: "Eleanor Pena",
        description: "teachers.curator",
        img: third
    },
    {
        name: "Eleanor Pena",
        description: "teachers.HR",
        img: Pena
    },
    {
        name: "Eleanor Pena",
        description: "teachers.program",
        img: Murphy
    },
    {
        name: "Eleanor Pena",
        description: "teachers.marketer",
        img: Russel
    },
    {
        name: "Eleanor Pena",
        description: "teachers.of",
        img: Howard
    },
    {
        name: "Eleanor Pena",
        description: "teachers.course",
        img: last
    },
]

const socialData = [
    {
        img: social1,
        href: 'https://www.facebook.com/'
    },
    {
        img: social2,
        href: 'https://www.instagram.com/'
    },
    {
        img: social3,
        href: 'https://www.linkedin.com/'
    },
    {
        img: social4,
        href: 'https://www.twitter.com/'
    },
]

function TEachers2() {
    const { t } = useTranslation();
    

    return (
        <div>
            <div className='py-[80px] flex flex-col items-center max-[600px]:px-[40px]'>
                <h1 className='text-[48px] font-bold max-[1300px]:text-[40px] max-[750px]:text-[32px] max-[750px]:w-[300px] dark:text-white'>
                    {t("teachers.title")}
                </h1>
                <p className='mt-3 text-[16px] font-normal text-gray-500 leading-[28px] w-[500px] text-center max-[750px]:w-[335px] dark:text-white'>
                    {t("teachers.description")}
                </p>
                <div className='mt-10 flex gap-[20px] flex-wrap max-[1400px]:gap-[40px] max-[1300px]:gap-[15px] max-[1250px]:flex-col '>
                    {
                        Teachers2Data.map((item) => (
                            <Card socialData={socialData} item={item}/>
                        ))
                    }
                </div>
                <button className=' mt-24 border border-gray-300 rounded-xl w-[178px] h-[48px]'>
                    <p className='text-[15px] font-semibold dark:text-white'>{t("teachers.button")}</p>
                </button>
            </div>
        </div>
    )
}

export default TEachers2