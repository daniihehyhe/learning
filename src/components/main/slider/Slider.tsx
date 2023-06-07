import React, { useRef } from "react";
import { Carousel } from "antd";
import next from "../featured/assets/prev.svg";
import prev from "../featured/assets/next.svg";
import vector from "./assets/Vector.svg";
import slide1Img from "./assets/img.svg";
import slide2Img from "./assets/img-1.svg";
import slide3Img from "./assets/cooper.svg";
import slide4Img from "./assets/img-2.svg";
import slide5Img from "./assets/img-3.svg";

function ImageSlider() {
  const arrowRef = useRef(null);
  const slideData = [slide1Img, slide2Img, slide3Img, slide4Img, slide5Img];

  return (
    <div className="lg:px-[144px] lg:py-[120px] px-[20px] py-[64px] md:px-[40px] md:py-[84px] bg-[#F9FAFB] dark:bg-[#161C24] dark:opacity-[0.95]">
      <div className="text-[What Our Students Say] text-[38px] font-bold text-center">
        What Our Students Say
      </div>
      <div className="flex gap-10 items-center justify-center my-[20px] md:relative">
        <button
          className="md:absolute top-[200px] -left-[20px]"
          onClick={() => arrowRef.current.prev()}>
          <img src={prev} alt="Prev" />
        </button>
        <button
          className="block md:absolute top-[200px] -right-[20px]"
          onClick={() => arrowRef.current.next()}>
          <img src={next} alt="Next" />
        </button>
      </div>
      <div>
        <Carousel ref={arrowRef}>
          {slideData.map((item, index) => (
            <div key={index}>
              <div>
                <div className="flex items-center flex-col">
                  <img src={vector} alt="" />
                  <div className="text-[#212B36] md:text-[24px] text-[20px] font-medium md:w-[564px] text-center mt-[34px]">
                    Amazing experience I love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate their attitude and
                    approach. Truly professionals!
                  </div>
                  <div className="flex md:gap-[40px] gap-[24px] mt-[64px] ">
                    {slideData.map((item, i) => (
                      <img
                        key={i}
                        className={`w-[48px] h-[48px] opacity-[${
                          i === index ? 1 : 0.5
                        }] hover:opacity-[1] hover:scale-150 ease-in duration-300 first:hidden md:first:block last:hidden md:last:block`}
                        src={item}
                        alt={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="mt-[24px] text-[18px] text-[#212B36] font-semibold mx-auto">
                    Robert Fox
                  </div>
                  <div className="mt-[4px] text-[#637381] text-[13px] font-regular">
                    Designer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
