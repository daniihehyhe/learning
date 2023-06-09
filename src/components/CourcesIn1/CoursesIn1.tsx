import React from 'react';
import { useTranslation } from "react-i18next";

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
    const embedUrl = `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;
    return (
        <>

            <div className='pt-[50px] px-[240px] max-[1350px]:px-[150px] max-[700px]:px-[50px]'>
                <iframe
                    className="rounded-2xl h-[493px] w-[1152px] max-[1550px]:w-[1000px] max-[1450px]:w-[900px] 
                    max-[1230px]:w-[700px] max-[990px]:w-[600px] max-[880px]:w-[500px] max-[880px]:h-[400px] 
                    max-[760px]:h-[258px] max-[760px]:w-[450px] max-[560px]:w-[335px] max-[560px]:h-[188px]"
                    src={embedUrl}
                    title="video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div className=' flex flex-col items-center pt-[70px] '>
                <p className='text-gray-500 text-center'>{t("courses.p")}</p>
                <h1 className='mt-[24px] text-center text-[48px] font-bold w-[760px] max-[910px]:text-[36px] max-[650px]:text-[24px]
                max-[820px]:w-[600px] max-[650px]:w-[400px]  dark:text-white'>{t("courses.title")}</h1>
                <p className='text-center leading-8 text-[20px] w-[760px] mt-[24px]  dark:text-white max-[820px]:w-[600px] 
                max-[650px]:w-[400px] max-[650px]:text-[18px]'>
                    Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum,
                    sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                    metus varius laoreet. Praesent egestas tristique nibh.
                </p>
            </div>
            <div className='px-[340px] max-[1390px]:px-[300px] max-[1310px]:px-[250px] max-[1210px]:px-[200px] max-[1110px]:px-[150px] max-[1010px]:px-[100px] max-[910px]:px-[50px]'>
                <div className='px-[100px] max-[1590px]:px-[50px] max-[1490px]:px-[0px] '>
                    <div className=' py-[48px]'>
                        <hr className='h-[1px] border text-gray-500' />
                        <div className='py-[24px] flex'>
                            <img src={person} alt="" />
                            <div className='ml-[18px]'>
                                <p className='font-semibold dark:text-white'>{t("courses.name")}</p>
                                <p className='text-gray-500 dark:text-white'>16 Mar 2020 12:35 PM</p>
                            </div>
                            <div className='flex ml-[410px] max-[910px]:ml-[350px] max-[750px]:ml-[250px] max-[650px]:ml-[50px]'>
                                <img className='' src={like} alt="" />
                                <img className='' src={like} alt="" />
                            </div>
                        </div>
                        <hr className='h-[1px] border text-gray-500' />
                    </div>

                    <div className=''>
                        <div className='flex gap-[15px]'>
                            <p className='text-[80px] font-bold dark:text-white'>P</p>
                            <p className='mt-[27px] w-[682px] max-[820px]:w-[550px] text-4 font-normal leading-7 dark:text-white'>
                                ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis
                                condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                                Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
                            </p>
                        </div>
                        <p className='text-4 font-normal leading-7 dark:text-white'>Donec posuere vulputate arcu. Quisque rutrum.</p>
                        <div className='flex'>
                            <p className='text-4 font-normal leading-7 my-[40px] w-[760px] dark:text-white max-[820px]:w-[550px]'>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                                Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
                            </p>
                        </div>
                        <div className='flex'>
                            <p className='text-4 font-normal leading-7  w-[760px] max-[820px]:w-[550px] dark:text-white'>
                                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis
                                condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                                Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
                            </p>
                        </div>
                        <img className='rounded-2xl my-10' src={hands} alt="" />
                        <h1 className='text-[24px] font-bold leading-9 dark:text-white max-[650px]:text-[20px]'>Curabitur suscipit suscipit tellus</h1>
                        <div className='flex'>
                            <p className='mt-4 text-4 font-normal leading-7 w-[760px] max-[820px]:w-[550px] dark:text-white'>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                                Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                        </div>
                        <h1 className='text-[24px] font-bold leading-9 mt-10 dark:text-white max-[650px]:text-[20px]'>Nullam accumsan lorem in</h1>
                        <div className='flex'>
                            <p className='mt-4 text-4 font-normal leading-7  w-[760px] max-[820px]:w-[550px] dark:text-white'>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                                Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                        </div>
                        <div className='flex my-20'>
                            <img className='mx-[46px]' src={quotes} alt="" />
                            <p className='text-[20px] font-medium leading-8 w-[554px] max-[820px]:w-[440px] max-[820px]:text-[16px] dark:text-white'>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                            </p>
                        </div>
                        <img className='rounded-2xl' src={laptop} alt="" />
                        <div className='flex'>
                            <p className='text-4 font-normal leading-7 my-[40px] w-[700px] max-[820px]:w-[600px] max-[750px]:my-[15px] dark:text-white'>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                                Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                        </div>
                        <div className='flex'>
                            <p className='text-4 font-normal leading-7 my-[40px] w-[680px] max-[820px]:w-[600px] max-[750px]:my-[15px] dark:text-white'>
                                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis
                                condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                                Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
                            </p>
                        </div>
                        <div className='flex'>
                            <p className='text-4 font-normal leading-7 my-[40px] w-[700px] max-[820px]:w-[600px] max-[750px]:my-[15px] dark:text-white'>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.
                                Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='px-[100px] max-[840px]:px-[10px]'>
                    <div className='flex gap-6 my-[50px] flex-wrap'>
                        <p className='dark:text-white'>{t("courses.tags")}</p>
                        <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.marketing")}</div>
                        <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.development")}</div>
                        <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.hr")}</div>
                        <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.design")}</div>
                        <div className='cursor-pointer text-[14px] bg-gray-100 text-gray-700 rounded-md'>{t("courses.management")}</div>
                    </div>
                    <div className='flex gap-6 flex-wrap'>
                        <p className='dark:text-white'>{t("courses.share")}</p>
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>

                <div className='flex flex-col gap-[64px] py-[66px]'>
                    <hr className='h-[1px] border text-gray-500' />
                    <div className='flex gap-8'>
                        <img className='h-[90px]' src={avatar} alt="" />
                        <div className='flex flex-col'>
                            <div className='flex max-[710px]:flex-col'>
                                <div className='flex flex-col'>
                                    <h1 className='w-[184px] text-2xl font-bold dark:text-white'>{t("courses.name2")}</h1>
                                    <p className='w-[184px] text-gray-500 text-[13px] dark:text-white'>{t("courses.curator")}</p>
                                </div>
                                <img className='h-[40px] ml-[250px] cursor-pointer max-[800px]:ml-[150px] max-[710px]:hidden' src={social} alt="" />
                            </div>
                            <p className='my-4 text-gray-500 text-[13px] dark:text-white'>
                                Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper,
                                dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..
                            </p>
                            <p className='text-gray-400 text-[13px] dark:text-white'>{t("courses.yaer")}</p>
                        </div>
                    </div>
                    <hr className='h-[1px] border text-gray-500' />
                </div>
            </div>
            <div>

            </div>
            <div className='py-[100px]'>
                <LatestPost />
            </div>
        </>
    )
}

export default CoursesIn1