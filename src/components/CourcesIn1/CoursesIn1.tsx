import React from 'react';
import { useTranslation } from "react-i18next";

import video from './assets/video.png';
import play from './assets/playIcon.png';
import person from './assets/person.png';
import like from './assets/like.png';
import hands from './assets/hands.png';
import quotes from './assets/quotes.png';
import laptop from './assets/laptop.png';
import insta from './assets/insta.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import linkedin from './assets/linkedin.png';
import avatar from './assets/avatar.png';
import social from './assets/social.png';
import LatestPost from '../main/latest/LatestPost';




function CoursesIn1() {

    const { t } = useTranslation();

    return (
        <>
            <div className='px-[144px] py-[100px]'>
                <img className='w-[82%] rounded-[16px] absolute' src={video} alt="" />
                <div className='flex justify-center pt-[270px]'>
                    <img className='relative' src={play} alt="" />
                </div>
            </div>

            <div className='pt-[230px] px-[340px] ' >
                <div className=' flex flex-col items-center'>
                    <p className='text-gray-500 text-center'>{t("courses.p")}</p>
                    <h1 className='mt-[24px] text-center text-[48px] font-bold w-[760px]'>{t("courses.title")}</h1>
                    <p className='text-center leading-8 text-[20px] w-[760px] mt-[24px]'>
                        Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum,
                        sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                        metus varius laoreet. Praesent egestas tristique nibh.
                    </p>
                </div>
                <div className=' py-[48px]'>
                    <hr className='h-[1px] border text-gray-500' />
                    <div className='py-[24px] flex'>
                        <img src={person} alt="" />
                        <div className='ml-[18px]'>
                            <p className='font-semibold'>{t("courses.name")}</p>
                            <p className='text-gray-500'>16 Mar 2020 12:35 PM</p>
                        </div>
                        <div className='flex ml-[410px]'>
                            <img className='' src={like} alt="" />
                            <img className='' src={like} alt="" />
                        </div>
                    </div>
                    <hr className='h-[1px] border text-gray-500' />
                </div>

                <div className=''>
                    <div className='flex gap-[15px]'>
                        <p className='text-[80px] font-bold'>P</p>
                        <p className='mt-[27px] w-[682px] text-4 font-normal leading-7'>
                            ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis
                            condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                            Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
                        </p>
                    </div>
                    <p className='text-4 font-normal leading-7'>Donec posuere vulputate arcu. Quisque rutrum.</p>
                    <p className='text-4 font-normal leading-7 my-[40px] w-[760px]'>
                        Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                        Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
                    </p>
                    <p className='text-4 font-normal leading-7  w-[760px]'>
                        Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis
                        condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                        Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
                    </p>
                    <img className='rounded-2xl my-10' src={hands} alt="" />
                    <h1 className='text-[24px] font-bold leading-9 '>Curabitur suscipit suscipit tellus</h1>
                    <p className='mt-4 text-4 font-normal leading-7 w-[760px]'>
                        Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                        Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                    <h1 className='text-[24px] font-bold leading-9 mt-10'>Nullam accumsan lorem in</h1>
                    <p className='mt-4 text-4 font-normal leading-7  w-[760px]'>
                        Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                        Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                    <div className='flex my-20'>
                        <img className='mx-[46px]' src={quotes} alt="" />
                        <p className='text-[20px] font-medium leading-8 w-[554px]'>
                            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                        </p>
                    </div>
                    <img className='rounded-2xl' src={laptop} alt="" />
                    <p className='text-4 font-normal leading-7 my-[40px] w-[700px]'>
                        Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                        Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                    <p className='text-4 font-normal leading-7 my-[40px] w-[680px]'>
                        Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis
                        condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                        Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
                    </p>
                    <p className='text-4 font-normal leading-7 my-[40px] w-[700px]'>
                        Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                        Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
                    </p>
                </div>
            </div>

            <div className='px-[340px]'>
                <div className='flex gap-6 my-[50px] '>
                    <p>{t("courses.tags")}</p>
                    <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.marketing")}</div>
                    <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.development")}</div>
                    <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.hr")}</div>
                    <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.design")}</div>
                    <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.management")}</div>
                </div>
                <div className='flex gap-6'>
                    <p>{t("courses.share")}</p>
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>

            <div className='flex flex-col gap-[64px] py-[66px] px-[340px]'>
                <hr className='h-[1px] border text-gray-500' />
                <div className='flex gap-8'>
                    <img className='h-[90px]' src={avatar} alt="" />
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <h1 className='w-[184px] text-2xl font-bold'>{t("courses.name2")}</h1>
                                <p className='w-[184px] text-gray-500 text-[13px]'>{t("courses.curator")}</p>
                            </div>
                            <img className='h-[40px] ml-[250px] cursor-pointer' src={social} alt="" />
                        </div>
                        <p className='my-4 text-gray-500 text-[13px]'>
                            Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper,
                            dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..
                        </p>
                        <p className='text-gray-400 text-[13px]'>{t("courses.yaer")}</p>
                    </div>
                </div>
                <hr className='h-[1px] border text-gray-500' />
            </div>

            <div className='py-[100px]'>
                <LatestPost/>
            </div>
        </>
    )
}

export default CoursesIn1