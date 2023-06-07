import { filteredData, listData, starImg } from '../../constants/sliderData'
import css from './ListPage.module.scss'
import star from '../main/featured/assets/star.svg'
import cooper from '../main/featured/assets/cooper.svg'
import clock from '../main/featured/assets/clock.svg'
import level from '../main/featured/assets/level.svg'
import filter from '../list/assets/filter.svg'
import down from './assets/down.svg'
import { Pagination } from "antd";
import { PaginationProps } from 'antd';
import { useState } from 'react';
import { Rate } from 'antd';


interface NewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}


const ListPage: React.FC<PaginationProps> = () => {

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
  
    const [currentPage, setCurrentPage] = useState<number>(1);
    const displayedNews = listData.slice((currentPage - 1) * 8, currentPage * 8);

  
  return (
    <>
        <div className='flex justify-between items-center '>
            <div className='text-[#212B36] text-[40px] font-bold dark:text-white'>Courses</div>
            <div className='w-[87px] h-[34px] rounded-[8px] bg-[#212B36] flex items-center justify-center gap-[10px] cursor-pointer lg:hidden'>
                <img src={filter} alt="Filter" />
                <div className='text-[#fff] text-[14px] font-regular'>Filters</div>
            </div>
        </div>
        <div className='flex flex-col justify-center lg:flex-row lg:justify-between  mt-[60px]'>
            <div className='hidden lg:block'>
                <input type="text" placeholder='search' className='bg-[#919EAB14] w-[280px] h-[54px] p-[15px] rounded-[8px]'/>
                <div className='my-[24px] text-[#637381] text-[12px] font-semibold uppercase'>Ratings</div>
                {
                    starImg.map((item) => (
                        <div className='flex gap-[10px] mb-[16px] items-center' key={item.img}>
                            <Rate/>
                            <div className='text-[#212B36] text-[14px] font-regular cursor-pointer dark:text-white'>& up</div>
                        </div>
                    ))
                }
                <div>
                    {
                        filteredData.map((item) => (
                            <div key={item.title} className='mt-[24px]'>
                                <div className='text-[#637381] text-[12px] relative font-semibold uppercase mb-[12px]'>{item.title} <img className='absolute left-[244px] top-[55px]' src={down} alt="Down" /></div>
                                <select className='bg-[#919EAB14] w-[280px] h-[56px] rounded-[8px] appearance-none px-[24px] text-[#919EAB] text-[14px] font-regular' name="" id="">
                                    <option value="">{item.placeholder}</option>
                                    <option value="">option 1</option> 
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex flex-col items-center gap-[40px] sm:flex-wrap sm:flex-row sm:gap-0 sm:justify-between lg:flex-col lg:w-[70%]'>
                {
                    displayedNews.map((item,index) => (
                        <div key={index} className='w-[335px] h-[666px] rounded-[10px] shadow-list sm:mb-[20px] lg:flex lg:w-full lg:h-[320px] relative dark:bg-[#919EAB1F]'> 
                            <img className='w-full h-[323px] rounded-[10px] rounded-b-none lg:h-full lg:rounded-r-none lg:rounded-bl-[10px] lg:w-[335px]' src={item.img} alt="List" />
                            {item.status && (
                                <div className='absolute px-[8px] text-[#212B36] font-semibold uppercase bg-[#FFC81A] text-[12px] left-[12px] top-[12px] rounded-[6px]'>BEST SELLER</div>
                            )}
                            <div className='lg:w-full'>
                                <div className='flex justify-between mt-[24px] px-[24px] items-center'>
                                    <div className='text-[#FA541C] uppercase text-[12px] font-semibold '>{item.title}</div>
                                    <div className='flex gap-2'>
                                        <div className='text-[#919EAB] text-[18px] font-bold'>{item.oldPrice}</div>
                                        <div className='text-[18px] font-bold text-[#212B36] dark:text-[#fff]'>$59</div>
                                    </div>
                                </div>
                                <div className='px-[24px] text-[15px] font-semibold text-black mt-[24px] dark:text-[#fff]'>The Complete Product Management Cours</div>
                                <div className='hidden lg:block text-[#637381] text-[14px] font-regular px-[24px] mt-[8px] dark:text-[#919EAB]'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</div>
                                <div className='flex px-8 mt-4 items-center'>
                                    <img src={star} alt="Star" />
                                    <div className='text-black font-semibold text-[18px] ml-2 dark:text-[#fff]'>4.8 <span className='text-[#637381] text-[14px] font-regular dark:text-[#919EAB]'> (10,35k reviews)</span></div>
                                    <div className='w-[1px] h-[20px] bg-[#919EAB3D] mx-5'></div>
                                    <div className='font-semibold text-black text-[14px] dark:text-[#fff] '>180k <span className='font-regular'>students</span></div>
                                </div>
                                <div className='flex gap-3 items-center mt-5 px-8'>
                                    <img src={cooper} alt="Cooper" />
                                    <div className='text-[14px] font-regular text-black dark:text-[#fff]'>Maddox Fletcher</div>
                                    <div className='text-[#637381] text-[14px] font-regular underline dark:text-[#919EAB]'>+10 teachers</div>
                                </div>
                                <hr className='my-6 w-[322px] border-dashed mx-auto lg:hidden'/>
                                <div className='flex pl-6 gap-4 items-end lg:mt-[24px]'>
                                    <img src={clock} alt="Clock" />
                                    <div className='text-[#919EAB] text-[14px] font-regular dark:text-[#919EAB]'>100 hours</div>
                                    <img src={level} alt="Clock" />
                                    <div className='text-[#919EAB] text-[14px] font-regular dark:text-[#919EAB]'>Beginner</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='mt-[80px]'>
                    <Pagination
                    current={currentPage}
                    total={listData.length}
                    pageSize={8}
                    onChange={handlePageChange}
                    itemRender={(page, type, originalElement) => {
                        if (type === 'page' && page === currentPage) {
                          return <span style={{ color: 'rgb(250, 84, 28)'}}>{page}</span>
                        }
                        return originalElement;
                      }}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default ListPage