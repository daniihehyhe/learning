// @ts-ignore
import  Slider2  from "react-slick";
import { useRef } from "react"
import next from '../featured/assets/prev.svg'
import prev from '../featured/assets/next.svg'
import vector from './assets/Vector.svg'


function Slider() {
    const arrowRef = useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
    }
  return (
    <div className='lg:px-[144px] lg:py-[120px] px-[20px] py-[64px] md:px-[40px] md:py-[84px] bg-[#F9FAFB]' >
        <div className='text-[What Our Students Say] text-[38px] font-bold text-center'>What Our Students Say</div>
         {/* @ts-ignore */}
         <button onClick={() => arrowRef.current.slickPrev()}><img src={prev} alt='Prev'/></button>
         <div>
            <Slider2 {...settings} ref={arrowRef}>
            {
                [1,1,1,1].map((item, index) => (
                   <div key={index}>
                         <div>
                            <div className="flex items-center flex-col">
                                <img src={vector} alt="" />
                                <div className="text-[#212B36] text-[24px] font-medium md:w-[564px] text-center mt-[34px]">Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!</div>
                            </div>
                        </div>
                   </div>
                ))
            }
            </Slider2>
         </div>
        {/* @ts-ignore */}
        <button className="mt-[10px] block" onClick={() => arrowRef.current.slickNext()}><img src={next} alt='Prev'/></button>
    </div>
  )
}

export default Slider