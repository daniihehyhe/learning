import bg from './assets/iMG.svg'
import cooper from '../main/featured/assets/cooper.svg'
import { blogData, recentData } from '../../constants/sliderData'
import { Pagination } from '@mui/lab';
import { useState } from 'react';
import blog from './assets/blog_img.svg'

function BlogPage() {
    const [page, setPage] = useState(1);

    const handlePageChange = (event:any, value:number) => {
        setPage(value);
    };

    const liData = ['Marketing', 'Community', 'Tutorials', 'Business', 'Management']
    const tagData = ['Marketing', 'Development', 'Banking', 'HR & Recruting', 'Design' , 'Management', 'Business', 'Community', 'Tutorials']
  return (
    <>
        <div className='flex bg-[#F9FAFB] px-[20px] py-[80px] flex-col md:flex-row md:px-[100px] lg:px-[144px] sm:px-[60px]'>
            <div>
                <img className='rounded-[10px]' src={bg} alt="blogBg" />
            </div>
            <div className='py-[24px] md:px-[34px] md:py-[24px] lg:py-[34px] lg:px-[64px] lg:w-[33%]'>
                <div className='text-[#919EAB] text-[12px] font-regular flex items-center'>February 28, 2018 <div className="w-[4px] h-[4px] bg-[#919EAB] rounded-full mx-[10px]"></div> 8 min read</div>
                <div className='mt-[8px] text-[#212B36] text-[24px] font-bold'>How to Maximize Your ROI Through Scientific SEM?</div>
                <div className='mt-[8px] text-[14px] font-regular text-[#637381]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
                <div className='flex gap-3 items-center mt-5 lg:mt-[185px]'>
                    <img src={cooper} alt="Cooper" />
                    <div className='text-[#212B36] text-[14px] font-regular'>Jane Cooper</div>
                </div>
            </div>
        </div>
        <div className='sm:px-[20px] md:px-[100px] lg:px-[140px] mt-[100px] md:flex md:flex-wrap lg:gap-[50px] lg:justify-between'>
            <div className='flex flex-col items-center md:flex-row md:flex-wrap md:w-full lg:justify-between lg:w-[65%] md:justify-between'>
            {
                blogData.map((item) => (
                    <div key={item.title} className="flex gap-5 flex-col h-[630px] w-[362px] border-[1px] mb-[32px] rounded-[10px] border-solid border-[#919EAB3D] md:w-[330px]">
                        <img className="rounded-[10px] w-full h-[362px] rounded-b-none md:h-[328px]" src={item.img} alt="Latest" />
                        <div className="p-[24px] flex gap-5">
                            <div className="flex flex-col gap-3">
                                <div className="sm:block text-[14px] font-semibold text-[#212B36] mx-auto">{item.month}</div>
                                <hr className="sm:block"/>
                                <div className="sm:block text-[#212B36] text-[30px] font-bold">{item.day}</div>
                            </div>
                            <div>
                                <div className="text-[19px] text-[#212B36] font-semibold leading-[26px]">{item.title}</div>
                                <div className="sm:block text-[#637381] text-[14px] font-regular mt-[8px]">Moment in the life of any aspiring astronomer of that it is time to.</div>
                                <div className="mt-[23px] flex gap-3">
                                    <img className="sm:block" src={cooper} alt="cooper" />
                                    <div className="flex items-start justify-center flex-col">
                                        <div className="block text-[#212B36] text-[14px] font-regular">{item.name}</div>
                                        <div className="text-[12px] text-[#919EAB] font-regular">8 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
                <div className='mx-auto mb-[50px]'>
                    <Pagination
                        count={10}
                        page={page} 
                        onChange={handlePageChange} 
                        sx={{
                            '.Mui-selected': {
                            color: '#FA541C',
                            backgroundColor: 'rgba(250, 84, 28, 0.08) !important',
                            },
                        }}
                    />
                </div>
            </div>
            <div className='lg:w-[30%] w-[90%] mx-auto'>
                <input type="text" placeholder='search' className='bg-[#919EAB14] w-[280px] h-[54px] p-[15px] rounded-[8px]'/>
                <div className='font-bold text-[24px] text-[#212B36] mt-[40px]'>Categories</div>
                <ul className='px-[20px] mt-[16px]'>
                    {
                        liData.map((item) => (
                            <li key={item} className='relative before:content-[""] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#FA541C] before:absolute before:top-[10px] before:left-[-18px] mb-[8px]'>{item}</li>
                        ))
                    }
                </ul>
                <div className='font-bold text-[24px] text-[#212B36] mt-[40px]'>Recent Posts</div>
                {
                    recentData.map((item) => (
                        <div key={item.title} className="flex mt-5 gap-5 ">
                            <img className="w-[80px] h-[80px] rounded-[10px]" src={item.img} alt="Latest" />
                            <div>
                                <div className="text-[19px] text-[#212B36] font-semibold leading-[26px]">{item.title}</div>
                                <div className='flex items-center'>
                                    <div className="text-[12px] text-[#919EAB] font-regular">May 29, 2017</div>
                                    <div className="w-[4px] h-[4px] bg-[#919EAB] rounded-full mx-[8px]"></div>
                                    <div className="text-[12px] text-[#919EAB] font-regular">8 min read</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='font-bold text-[24px] text-[#212B36] mt-[40px]'>Popular Tags</div>
                <div className='flex gap-[8px] flex-wrap mt-[24px]'>
                    {
                        tagData.map((item) => (
                            <div key={item} className='bg-[#919EAB29] rounded-[8px] px-[12px] py-[4px] text-[14px] font-regular text-[#637381]'>{item}</div>
                        ))
                    }
                </div>
                <div className='w-[342px] h-[342px] mt-[40px] relative flex flex-col items-center'>
                    <img className='absolute z-[-2]' src={blog} alt="" />
                    <div className='pt-[146px] text-[#22B8CF] text-[24px] font-bold '>Advertisement</div>
                    <div className='px-[40px] text-center text-[#fff] text-[14px] mt-[8px] font-regular'>Duis leo. Donec orci lectus, aliquam ut, faucibus non</div>
                    <button className='bg-[#FA541C] px-[16px] py-[6px] mt-[24px] rounded-[8px] text-[#fff] text-[14px] font-semibold '>Go Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogPage