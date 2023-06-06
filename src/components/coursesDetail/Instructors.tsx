import React, {FC} from 'react'
import { instructors } from "../../constants/InstructorsData";

import star from '../../assets/icon/star.png'
import book from '../../assets/icon/book.png'
import group from '../../assets/icon/group.png'

const Instructors:FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {instructors.map((item) => (
        <div
          key={item.id}
          className="p-5 flex  rounded-lg border-solid border-2 w-fit">
          <div>
            <img className="w-16 object-cover mr-4" src={item.img} alt={item.name} />
          </div>
          <div className="w-fit mr-3">
            <h1 className="font-roboto font-semibold text-xxl">{item.name}</h1>
            <p className="text-[#637381] text-[13px] font-regular mt-[4px]">
              {item.prof}
            </p>
            <div className="w-fit flex my-2">
              <img src={star} className="object-contain mr-5" alt="star" />{" "}
              <span className='text-lg font-semibold mr-2'>4.8</span>
              <span className="text-[#637381] text-[13px] font-regular mt-[4px]">
                (1,089 ratings)
              </span>
            </div>
            <div className="w-fit flex">
              <img src={group} className="object-contain mr-5" alt="group" />{" "}
              <span className="text-[#637381] text-[13px] font-regular mt-[4px]">
                1,3k students
              </span>
            </div>
            <div className="w-fit flex">
              <img src={book} className="object-contain mr-5" alt="book" />{" "}
              <span className="text-[#637381] text-[13px] font-regular mt-[4px]">
                50 courses
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Instructors