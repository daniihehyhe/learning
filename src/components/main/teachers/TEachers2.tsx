import Pena from '../../connection/assets/Pena.png';
import Murphy from '../../connection/assets/Murphy.png';
import Russel from '../../connection/assets/Russel.png';
import Howard from '../../connection/assets/Howard.png';
import first from '../../connection/assets/first.png';
import second from '../../connection/assets/second.png';
import third from '../../connection/assets/third.png';
import last from '../../connection/assets/last.png';


import { useTranslation } from 'react-i18next';

export interface Teachers2 {
    img: string,
    name: string,
    description: number,
}

export const Teachers2Data = [
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
                <div className='mt-10 flex gap-[55px] flex-wrap max-[1400px]:gap-[40px] max-[1300px]:gap-[15px] max-[1250px]:flex-col '>
                    {
                        Teachers2Data.map((item) => (
                            <div className='mt-10 flex flex-col gap-4 items-center border rounded-[16px] shadow-2xl dark:bg-[#212B36]'>
                                <h1 className='mt-[24px] text-[18px] font-semibold dark:text-white'>{t(item.name)}</h1>
                                <p className='text-[13px] text-gray-500 font-normal dark:text-white'>{t(item.description)}</p>
                                <img className='rounded-[16px] rounded-t-none' src={item.img} alt=""/>
                            </div>
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