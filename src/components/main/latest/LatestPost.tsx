import { latestData } from "../../../constants/sliderData"
import cooper from '../../main/featured/assets/cooper.svg'
import orangeRight from '../assets/orangeRight.svg'


function LatestPost() {
  return (
    <div className='px-[20px] py-[64px] sm:px-[60px] md:px-[100px] lg:px-[144px]'>
        <div className="flex justify-between">
            <div className='text-[32px] font-bold text-[#212B36] text-center lg:text-left'>Latest Posts</div>
            <div className="items-center gap-5 justify-center hidden lg:flex">
                <div className='text-[15px] font-semibold text-[#FA541C] text-center'>View All </div>
                <img src={orangeRight} alt="Right" />
            </div>
        </div>
        <div className="mt-[60px] sm:flex sm:flex-wrap sm:justify-center sm:gap-5 sm:items-center md:flex-wrap lg:flex-row lg:justify-between">
            {
                latestData.map((item) => (
                    <div key={item.title} className="flex mt-5 gap-5 sm:flex-col sm:w-[362px] sm:border-[1px] sm:rounded-[10px] sm:border-solid sm:border-[#919EAB3D]">
                        <img className="w-[80px] h-[80px] rounded-[10px] sm:w-[362px] sm:h-[362px] sm:rounded-b-none" src={item.img} alt="Latest" />
                        <div className="sm:p-[24px] flex gap-5">
                            <div className="flex flex-col gap-3">
                                <div className="hidden sm:block text-[14px] font-semibold text-[#212B36] mx-auto">{item.month}</div>
                                <hr className="hidden sm:block"/>
                                <div className="hidden sm:block text-[#212B36] text-[30px] font-bold">{item.day}</div>
                            </div>
                            <div>
                                <div className="text-[19px] text-[#212B36] font-semibold leading-[26px]">{item.title}</div>
                                <div className="hidden sm:block text-[#637381] text-[14px] font-regular sm:mt-[8px]">Moment in the life of any aspiring astronomer of that it is time to.</div>
                                <div className="sm:mt-[23px] flex gap-3">
                                    <img className="hidden sm:block" src={cooper} alt="cooper" />
                                    <div className="flex items-center gap-2 sm:flex-col sm:gap-0 sm:items-start">
                                        <div className="hidden sm:block text-[#212B36] text-[14px] font-regular">{item.name}</div>
                                        <div className="text-[12px] text-[#919EAB] font-regular sm:hidden">May 29, 2017</div>
                                        <div className="w-[4px] h-[4px] bg-[#919EAB] rounded-full sm:hidden"></div>
                                        <div className="text-[12px] text-[#919EAB] font-regular">8 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="flex items-center mt-[70px] gap-5 justify-center lg:hidden">
            <div className='text-[15px] font-semibold text-[#FA541C] text-center'>View All </div>
            <img src={orangeRight} alt="Right" />
        </div>
    </div>
  )
}

export default LatestPost