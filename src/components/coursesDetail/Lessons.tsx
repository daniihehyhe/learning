/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react'
import lessonsData from '../../constants/lessonsData.json'
import play from '../../assets/icon/ic_play.png'
import right from '../../assets/icon/ic_right.png'
import lock from '../../assets/icon/ic_lock.png'
import file from '../../assets/detail/ic_file.png'
import certficate from '../../assets/detail/ic_certificate.png'
import data from '../../assets/detail/ic_data_accessor.png'
import device from '../../assets/detail/ic_devices.png'
import document from '../../assets/detail/ic_document_download.png'
import fb from '../../assets/detail/fb_btn.png'
import inn from '../../assets/detail/in_btn.png'
import ins from '../../assets/detail/ins_btn.png'
import twit from '../../assets/detail/twit_btn.png'
import Instructors from './Instructors'

interface Data {
	name: string;
	id: string;
	lock: boolean;
}

const Lessons = () => {
	const [lessons, setLessons] = useState<Data[]>([])
	useEffect(() => setLessons(lessonsData), [lessons]);
  const lesson_btn: string[] =["Photography", "Design", "Art", "History", "Museums", "Creativty", "Art History"]
  return (
    <div className="my-5 flex flex-col md:flex-row gap-14 mb-10">
      <main className="md:w-4/6">
        <h1 className="font-roboto font-bold text-2xl mb-6">Lessons</h1>
        <ul>
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className="flex justify-between p-5 border-b-2 border-solid hover:bg-gray-200">
              <div className="flex">
                <img src={lesson.lock ? lock : play} alt="play_icon" />
                <h5 className="ml-3">{lesson.name}</h5>
              </div>
              <div className="flex ">
                <span className="font-roboto text-gray-500 font-normal">
                  02:23
                </span>
                <img className="h-5 pt-1 ml-4" src={right} alt="right_icon" />
              </div>
            </li>
          ))}
        </ul>
        <div className="my-10 ml-7">
          <h1 className="font-roboto font-bold text-2xl mb-6 pb-2">
            What You Will Learn
          </h1>
          <ul className="list-image-checkmark flex flex-col justify-center">
            <li className=" pl-3 pb-2 font-raleway text-base">
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>
            <li className="pl-3 pb-2 font-raleway texts-sm">
              Consequat feugiat habitant gravida quisque elit bibendum id
              adipiscing sed.
            </li>
            <li className="pl-3 pb-2 font-raleway texts-sm">
              Etiam duis lobortis in fames ultrices commodo nibh.
            </li>
            <li className="pl-3 pb-2 font-raleway texts-sm">
              Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis,
              molestie non, velit.{" "}
            </li>
            <li className="pl-3 pb-2 font-raleway texts-sm">
              Curabitur a felis in nunc fringilla tristique. Praesent congue
              erat at massa.{" "}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-roboto font-bold text-2xl mb-6 pb-2">
            Skills You Will Gain
          </h1>
          <div className="flex flex-wrap gap-2 transition-all">
            {lesson_btn.map((btn, i)=>
            <button key={i} className="rounded-lg px-3 p-1 bg-gray-100 text-gray-600 font-light font-raleway hover:bg-gray-300">
              {btn}
            </button>
                )}
          </div>
        </div>
        <div>
          <h1 className="font-roboto font-bold text-2xl mt-6 mb-6 pb-2">
            Overview
          </h1>
          <p className="font-raleway texts-sm">
            Consentaneum aeternitate dignitati commoventur primisque cupit mea
            officia peccata parens egone dolorem minuis. Secundae neglegi
            sextilius conantur commodaita siti philosophi ioca tenere lorem
            apparet assentior pudoris sint leves neglegebat unde reliquisti
            simile.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 w-5/6 md:w-full justify-center md:justify-start mb-4">
          <h1 className="font-roboto font-bold text-2xl mt-6 mb-6 pb-2">
            Share:
          </h1>
          <img className="object-contain" src={fb} alt="fb" />
          <img className="object-contain" src={ins} alt="fb" />
          <img className="object-contain" src={inn} alt="fb" />
          <img className="object-contain" src={twit} alt="fb" />
        </div>
        <Instructors/>
      </main>
      <aside className="flex flex-col items-center md:w-2/6">
        <div className="p-6 shadow-2xl w-fit rounded-lg select-none">
          <div className="flex mb-6 ">
            <p className="font-roboto font-bold text-gray-500 text-2xl line-through">
              $99
            </p>
            <p className="font-roboto font-bold text-4xl ml-2">$59</p>
          </div>
          <h1 className="font-roboto font-normal text-base  ">
            This course includes:
          </h1>
          <ul>
            <li className="flex p-4">
              <img src={file} alt="file" />
              <span className="font-roboto text-sm font-medium ml-4">
                20 Lessons
              </span>
            </li>
            <li className="flex p-4">
              <img src={document} alt="file" />
              <span className="font-roboto text-sm font-medium ml-4">
                12 Downloadable resources
              </span>
            </li>
            <li className="flex p-4">
              <img src={data} alt="file" />
              <span className="font-roboto text-sm font-medium ml-4">
                Full lifetime access
              </span>
            </li>
            <li className="flex p-4 ">
              <img className="object-contain" src={device} alt="file" />
              <span className="font-roboto text-sm font-medium ml-4">
                Access on desktops, tablets, mobile
              </span>
            </li>
            <li className="flex p-4">
              <img src={certficate} alt="file" />
              <span className="font-roboto text-sm font-medium ml-4">
                Certificate of completion
              </span>
            </li>
          </ul>
          <button className="bg-[#FA541C] px-[22px] w-full py-[11px] rounded-[8px] mt-[40px] mx-auto text-[15px] font-medium text-white block lg:mx-0">
            Enrol Now
          </button>
        </div>
        <div className="bg-aside_img w-fit md:w-full flex flex-col items-center bg-no-repeat bg-cover mt-10 rounded-lg p-6">
          <h1 className="mt-32 mb-5 text-[#22B8CF] font-roboto font-bold">
            Advertisement
          </h1>
          <h4 className="text-white font-raleway texts-sm text-center">
            Duis leo. Donec orci lectus, aliquam ut, faucibus non
          </h4>
          <button className="bg-[#FA541C] px-[22px] py-[11px] rounded-[8px] mt-[40px] mx-auto text-[15px] font-medium text-white block lg:mx-0">
            Go Now
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Lessons