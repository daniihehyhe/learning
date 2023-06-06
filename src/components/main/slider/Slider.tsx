// @ts-ignore
import  Slider2  from "react-slick";
import { useRef } from "react"
import next from '../featured/assets/prev.svg'
import prev from '../featured/assets/next.svg'
import vector from './assets/Vector.svg'
import slide1 from './assets/img.svg' 
import slide2 from './assets/img-1.svg' 
import slide3 from './assets/cooper.svg' 
import slide4 from './assets/img-2.svg' 
import slide5 from './assets/img-3.svg' 


function Slider() {
    const arrowRef = useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
    }
    const slideData = [slide1,slide2,slide3, slide4, slide5]
  return (
    <div className='lg:px-[144px] lg:py-[120px] px-[20px] py-[64px] md:px-[40px] md:py-[84px] bg-[#F9FAFB] dark:bg-[#161C24] dark:opacity-[0.95]' >
        <div className='text-[What Our Students Say] text-[38px] font-bold text-center'>What Our Students Say</div>
        <div className="flex gap-10 items-center justify-center my-[20px] md:relative ">
            {/* @ts-ignore */}
            <button className="md:absolute top-[200px] -left-[20px]" onClick={() => arrowRef.current.slickPrev()}><img src={prev} alt='Prev'/></button>
            {/* @ts-ignore */}
            <button className="block md:absolute top-[200px] -right-[20px]" onClick={() => arrowRef.current.slickNext()}><img src={next} alt='Prev'/></button>
        </div>
         <div>
            <Slider2 {...settings} ref={arrowRef}>
            {
                [1,1,1,1].map((item, index) => (
                   <div key={index}>
                         <div>
                            <div className="flex items-center flex-col">
                                <img src={vector} alt="" />
                                <div className="text-[#212B36] md:text-[24px] text-[20px] font-medium md:w-[564px] text-center mt-[34px]">Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!</div>
                                <div className="flex md:gap-[40px] gap-[24px] mt-[64px] ">
                                    {
                                        slideData.map((item) => (
                                            <img key={item} className="w-[48px] h-[48px] opacity-[0.5] hover:opacity-[1] hover:scale-150 ease-in duration-300 first:hidden md:first:block last:hidden md:last:block" src={item} alt="Slide" />
                                        ))
                                    }
                                </div>
                                <div className="mt-[24px] text-[18px] text-[#212B36] font-semibold mx-auto">Robert Fox</div>
                                <div className="mt-[4px] text-[#637381] text-[13px] font-regular">Designer</div>
                            </div>
                        </div>
                   </div>
                ))
            }
            </Slider2>
         </div>
    </div>
  )
}

export default Slider