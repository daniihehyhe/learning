/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import  Slider  from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import star from './assets/star.svg'
import cooper from './assets/cooper.svg'
import clock from './assets/clock.svg'
import level from './assets/level.svg'
import { sliderData } from '../../../constants/sliderData';
import next from './assets/prev.svg'
import prev from './assets/next.svg'
import { useRef } from "react";

function Featured() {

      const arrowRef = useRef<Slider>(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        slidesToScroll: 1,
      };


  return ( 
    <div className="dark:bg-[#161C24]">
        <div >
          <div className='text-black text-[32px] font-bold pt-20 text-center md:text-left dark:text-white' >Featured Courses</div>
          <div className="flex items-center justify-between flex-col md:flex-row">
              <div className='text-[#637381] mt-2 font-regular text-center text-[16px] dark:text-[#919EAB]'>Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.</div>
              <div className=" flex mt-8 gap-8">
                  {/* @ts-ignore */}
                  <button onClick={() => arrowRef.current.slickPrev()}><img src={prev} alt='Prev'/></button>
                  {/* @ts-ignore */}
                  <button onClick={() => arrowRef.current.slickNext()}><img src={next} alt='Prev'/></button>
              </div>
          </div>
        </div>
        <div className='mt-20'>
            <Slider {...settings} ref={arrowRef}>
                {
                    sliderData.map((item) => (
                        <div key={item.name} className="mx-auto  pb-[80px]">
                            <div className='border-[1px] rounded-[16px] w-[335px] h-[703px] dark:shadow-none dark:bg-[#919EAB1F]'>
                                <img className='rounded-tr-[16px] rounded-tl-[16px]' src={item.img} alt="Slider" />
                                <div className='flex justify-between items-center px-8 my-8'>
                                    <div className='font-semibold text-[#FA541C] text-[12px] uppercase'>Management</div>
                                    <div className='font-bold text-[24px] dark:text-[#fff]'>${item.price}</div>
                                </div>
                                <div className='font-semibold text-black text-[18px] px-8 dark:text-[#fff]'>{item.title}</div>
                                <div className='flex px-8 mt-4 items-center'>
                                    <img src={star} alt="Star" />
                                    <div className='text-black font-semibold text-[18px] ml-2 dark:text-[#fff]'>4.8 <span className='text-[#637381] text-[14px] font-regular'> (1.089)</span></div>
                                    <div className='w-[1px] h-[20px] bg-[#919EAB3D] mx-5'></div>
                                    <div className='font-semibold text-black text-[14px] dark:text-[#fff]'>180k <span className='font-regular'>students</span></div>
                                </div>
                                <div className='flex gap-3 items-center mt-5 px-8'>
                                    <img src={cooper} alt="Cooper" />
                                    <div className='text-[#212B36] text-[14px] font-regular dark:text-[#fff]' >Bessie Cooper</div>
                                </div>
                                <hr className='my-6 w-[322px] border-dashed mx-auto dark:border-[#919EAB3D]'/>
                                <div className='flex pl-6 gap-4 items-end'>
                                    <img src={clock} alt="Clock" />
                                    <div className='text-[#919EAB] text-[14px] font-regular'>100 hours</div>
                                    <img src={level} alt="Clock" />
                                    <div className='text-[#919EAB] text-[14px] font-regular'>Beginner</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  );
}

export default Featured