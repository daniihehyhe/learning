import link1 from './assets/ic_email.svg'
import link2 from './assets/ic_mobile.svg'
import link3 from './assets/ic_pin.svg'
import social1 from './assets/iconbase.svg'
import social2 from './assets/iconbase-1.svg'
import social3 from './assets/iconbase-2.svg'
import social4 from './assets/iconbase-3.svg'
import conact from './assets/contact_img.svg'

function ContactPage() {
    const contactData = [
        {
            img: link1,
            title: 'Email',
            link: 'debbie.baker@example.com'
        },
        {
            img: link2,
            title: 'Phone',
            link: '(907) 555-0101'
        },
        {
            img: link3,
            title: 'Phone',
            link: '3891 Ranchview Dr. Richardson, California 62639'
        },
    ]
    const socialData = [
        {
            img: social1,
            href: 'https://www.facebook.com/'
        },
        {
            img: social2,
            href: 'https://www.instagram.com/'
        },
        {
            img: social3,
            href: 'https://www.linkedin.com/'
        },
        {
            img: social4,
            href: 'https://www.twitter.com/'
        },
        

    ]
  return (
    <div>
        <div className='bg-[#F9FAFB] md:py-[80px] md:px-[100px] lg:px-[144px] px-[20px] py-[64px] flex flex-col items-center md:flex-row md:justify-between'>
            <div className='md:w-[50%] w-full'>
                <div className='text-center text-[#212B36] font-bold text-[28px] md:text-left'>Get In Touch</div>
                <div className='mt-[45px]'>
                    {
                        contactData.map((item) => (
                            <div className='flex flex-col items-center mb-[24px] md:items-start'>
                                <div className='flex gap-[10px]'>
                                    <img src={item.img} alt="Link" />
                                    <div className='text-[#212B36] font-semibold text-[14px]'>{item.title}</div>
                                </div>
                                <div className='mt-[8px]'>
                                    <a className='font-regualar text-[14px] text-[#212B36]' href="/">{item.link}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr className='border-dashed md:w-[90%]'/>
                <div className='mt-[24px] text-[#212B36] text-[12px] font-semibold text-center md:text-left'>FOLLOW US</div>
                <div className='flex mt-[26px] items-center justify-center gap-[32px] mb-[74px] md:justify-start'>
                    {
                        socialData.map((item) => (
                           <a  key={item.href} href={item.href} target="blunk"> <img src={item.img} alt="" /></a>
                        ))
                    }
                </div>
            </div>
            <div>
                {/* @ts-ignore */}
            <iframe className='lg:w-[662px] lg:h-[498px] lg:rounded-[16px]' width="335" height="335" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=662&amp;height=498&amp;hl=en&amp;q=ahunbaeva%20133%20bishkek+(bishkek)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
        <div className='pt-[64px] px-[20px] flex items-center justify-center md:justify-between md:gap-[50px] md:px-[100px] md:py-[80px] lg:px-[144px]'>
            <div className='hidden md:block'>
                <img src={conact} alt="Contact" />
            </div>
            <div className='flex flex-col items-center justify-center md:items-start'>
                <div className='text-[#212B36] text-[22px] font-bold text-center md:text-left'>Drop us a line</div>
                <div className='text-[#637381] tetx-[14px] font-regular mt-[8px] text-center mb-[40px]'>We normally respond within 2 business days</div>
                <input className='w-[335px] md:w-[400px] lg:w-[662px] h-[56px] rounded-[8px] px-[12px] py-[14px] bg-[#919EAB14] mb-[24px]' type="text" placeholder='Name'/>
                <input className='w-[335px] md:w-[400px] lg:w-[662px] h-[56px] rounded-[8px] px-[12px] py-[14px] bg-[#919EAB14] mb-[24px]'  type="email" placeholder='email' />
                <input className='w-[335px] md:w-[400px] lg:w-[662px] h-[56px] rounded-[8px] px-[12px] py-[14px] bg-[#919EAB14] mb-[24px]'  type="text" placeholder='Subject' />
                <textarea className='w-[335px] md:w-[400px] lg:w-[662px] h-[128px] rounded-[8px] px-[12px] py-[14px] bg-[#919EAB14]' placeholder='message' />
                <button className='bg-[#FA541C] rounded-[8px] mt-[40px] px-[22px] py-[11px] block mx-auto text-[#fff] text-[14px] font-bold md:mx-0' >Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default ContactPage