import React from 'react'
import main from './assets/mainRight.svg'
import play from './assets/mainPlay.svg'
import mainBg from './assets/mainBg.svg'


function Main() {
    const mainData =[
        {
            count: '14k+',
            title: 'Learners',
        },
        {
            count: '1,05k+',
            title: 'Courses',
        },
        {
            count: '59k+',
            title: 'Graduates',
        }
    ]
  return (
    < div className='container mt-20 pb-[136px]'>
      <div className='sm:flex-column flex flex-col md:flex-row md:gap-7'>
        <div className='w-full sm:w-full  md:w-1/2'>
          <div className='text-black w-3/4 mx-auto leading-tight text-40px text-center sm:w-full md:text-left md:w-5/6 md:mx-0 lg:text-64px  font-bold dark:text-white'>
            Free <span className='text-[#637381]'>Online</span> <br /> <span className='text-[#FA541C] underline'>Courses</span> From The Experts
          </div>
          <div className='text-[#637381] text-16px mt-2 md:text-left text-center px-5 sm:mt-5 md:px-0 lg:w-[446px] font-regular dark:text-[#919EAB]'>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. 
          </div>
          <div className='flex flex-col gap-7 items-center mt-14 sm:flex-row justify-center md:w-full lg:justify-start'>
            <button className='bg-[#FA541C] text-white flex gap-2 px-6 py-3 rounded-lg md:px-3 font-bold md:text-[16px]'>Ready Start <img src={main} alt="mainRight" /></button>
            <div className='flex gap-5 items-center'>
                <div className='w-12 h-12 flex justify-center items-center rounded-full bg-[#22B8CF] shadow-playShadow '><img src={play} alt="mainPlay" /></div>
                <div className='text-black text-18px font-semibold md:text-[16px] dark:text-white'>Watch Video</div>
            </div>
          </div>
          <hr className='mt-12 w-full border-dashed dark:border-[#919EAB3D]'/>
          <div className='flex items-center gap-9 mt-12 justify-center sm:gap-32 md:gap-16 lg:gap-36 lg:justify-start'>
            {
                mainData.map((item) => (
                    <div key={item.count}>
                        <div className='text-black text-24px font-bold relative before:absolute before:content-before before:w-[24px] before:h-[24px] before:-left-2 before:bg-[#FFC1073D] before:-z-9 before:rounded-full dark:text-white'>{item.count}</div>
                        <div className='text-[#637381] mt-1 text-[16px] font-regular dark:text-[#919EAB]'>{item.title}</div>
                    </div>
                ))
            }
          </div>
        </div>
        <div className='hidden sm:block sm:mt-20 md:mt-0'>
            <img src={mainBg} alt="MainBg" />
        </div>
      </div>
    </div>
  )
}

export default Main