import { aboutData, coreData } from '../../constants/sliderData'
import about from './assets/about_bg.svg'
import about_img from './assets/about_img.svg'

function AboutPage() {
  return (
    <>
        <div className="bg-[#FA541C14] lg:px-[144px] lg:py-[160px] flex flex-col px-[20px] py-[80px] gap-[64px] items-center md:flex-row md:px-[80px] md:py-[120px]">
            <div className='md:w-[50%]'>
                <div className='text-[35px] font-bold text-[#212B36] text-center md:text-left' >Online Courses</div>
                <div className='text-[#212B36] text-[16px] font-regular mt-[24px] text-center  md:text-left lg:w-[464px]'>Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</div>
                <button className='bg-[#FA541C] px-[22px] py-[11px] text-[#fff] text-[15px] font-semibold rounded-[8px] mt-[48px] block mx-auto md:ml-0'>Browse Courses</button>
            </div>
            <div className='md:w-[50%]'>
                <img src={about} alt="" />
            </div>    
        </div>
        <div className='lg:px-[144px] lg:py-[120px] px-[20px] py-[64px] md:px-[40px] md:py-[84px]'>
            <div className='flex flex-col items-center md:flex-row md:items-start'>
                <div className='text-[#FA541C] text-[12px] font-semibold uppercase md:w-[50%]'>Nullam accumsan lorem in dui.</div>
                <div className='md:w-[50%]'>
                    <div className='text-[24px] text-[#212B36] font-bold text-center mt-[16px] md:text-left md:mt-0 md:text-[36px]'>Effective Forms Advertising Internet Web Site</div> 
                    <div className='mt-[24px] text-[16px] text-[#637381] font-regular text-center md:text-left'>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility and even when it is it almost always leaves broken Windows</div>
                </div>
            </div>
            <div className='flex flex-col items-center lg:justify-between mt-[80px] md:flex-row md:items-start'>
                <div className='mt-[64px] md:order-first md:mt-0'>
                    {
                        aboutData.map((item) => (
                            <div key={item.count} className='mb-[80px] flex flex-col items-center md:items-start md:gap-[5]'>
                                <div className='text-[#919EAB] text-[20px] font-bold'>{item.title}</div>
                                <div className='text-[#212B36] text-[36px] font-bold mt-[8px]'>{item.count}</div>
                                <div className='text-[#637381] text-[16px] font-regular mt-[16px] text-center px-[20px] md:w-[90%] md:text-left md:px-0 '>{item.descr}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='order-first'>
                    <img src={about_img} alt="" />
                </div>
            </div>
        </div>
        <div className='lg:px-[144px] lg:py-[120px] px-[20px] py-[64px] md:px-[40px] md:py-[84px] bg-[#F9FAFB]'>
            <div className='flex flex-col items-center md:flex-row md:items-start'>
                <div className='text-[#212B36] text-[28px] font-bold md:w-[50%]'>Core Values</div>
                <div className='mt-[24px] text-[#637381] text-[16px] text-center font-regular md:w-[50%] md:mt-0 md:text-left'> Etiam ultricies nisi vel augue. Suspendisse potenti. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus viverra nulla ut metus varius laoreet.</div>
            </div>
            <div className='mt-[67px] flex flex-col items-center lg:mt-[120px] md:flex-row md:flex-wrap gap-[20px] lg:flew-nowrap'>
            {
                coreData.map((item) => (
                    <div key={item.title} className='flex flex-col items-center mb-[40px] lg:w-[23%] lg:items-start'>
                        <img src={item.img} alt="Core" />
                        <div className='text-[#212B36] text-[18px] font-semibold mt-[40px]'>{item.title}</div>
                        <div className='text-[#637381] text-[16px] font-regular mt-[16px] text-center md:w-[335px] lg:w-full lg:text-left'>{item.subtitle}</div>
                    </div>
                ))
            }
        </div>
        </div>
    </>
  )
}

export default AboutPage