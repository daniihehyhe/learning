/* eslint-disable no-mixed-spaces-and-tabs */
import React,{FC} from 'react'
import { Breadcrumb } from "antd";
import '../../index.css'
import clock from '../../assets/icon/clock.png'
import avatar from '../../assets/icon/avatar.png'
import global from '../../assets/icon/global.png'
import lvl from '../../assets/icon/lvl.png'
import page from '../../assets/icon/page.png'
import question from '../../assets/icon/question.png'
import star from '../../assets/icon/star.png'
import { useTranslation } from 'react-i18next';




const Design:FC = () => {
	const {t} =useTranslation()
	const embedUrl = `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;
  return (
    <div className=" bg-gray-100 container_global py-10">
      <Breadcrumb
        items={[
          {
            title: "Design",
          },
          {
            title: <a href="">{t("design.bread1")}</a>,
          },
          {
            title: <a href="">{t("design.title")}</a>,
          },
        ]}
      />
      <section className="flex flex-col-reverse md:flex-row mt-14 gap-x-10">
        <main>
          <div>
            <div className="bg-yellow-400 mt-10 md:mt-0 font-roboto font-semibold px-2 py-1 text-xs w-fit rounded-lg">
              {t("design.best")}
            </div>
            <h1 className="font-roboto font-bold text-3xl my-4 ">
              {t("design.title")}
            </h1>
            <h6 className="text-xs text-blue-500 font-black font-raleway mb-4">
              {t("design.desg")}
            </h6>
            <p className="font-raleway font-normal">{t("design.text")}</p>
          </div>
          <div className="flex flex-col mt-6">
            <header className=" border-b-2 pb-6 border-dashed">
              <div className="flex items-center mb-5">
                <img src={star} alt="avatar" />
                <h2 className="font-roboto font-medium text-base mx-3">4.8</h2>
                <span className="font-roboto text-gray-500 border-r-2 border-solid pr-3">
                  {t("design.review")}
                </span>
                <h2 className="font-roboto font-medium text-base mx-3">180k</h2>
                <span className="font-raleway font-semibold">
                  {t("design.students")}
                </span>
              </div>
              <div className="flex items-center">
                <img src={avatar} alt="avatar" />
                <h2 className="font-roboto font-medium text-base mx-3">
                  Kevin Watson
                </h2>
                <span className="font-roboto	 underline text-gray-500 ">
                  +10 {t("design.teachers")}
                </span>
              </div>
            </header>
            <footer className="flex items-center flex-wrap md:w-4/6 gap-10 mt-6">
              <div className="flex items-center ">
                <img src={clock} alt="lvl" />{" "}
                <span className="font-roboto ml-2 pt-1">
                  100 {t("design.hours")}
                </span>
              </div>
              <div className="flex items-center">
                <img src={lvl} alt="lvl" />{" "}
                <span className="font-roboto ml-2 pt-1">{t("design.lvl")}</span>
              </div>
              <div className="flex items-center">
                <img src={page} alt="lvl" />{" "}
                <span className="font-roboto ml-2 pt-1">
                  {t("design.lesson")}
                </span>
              </div>
              <div className="flex items-center">
                <img src={global} alt="lvl" />{" "}
                <span className="font-roboto ml-2 pt-1">
                  {t("design.english")}
                </span>
              </div>
              <div className="flex items-center ml-3">
                <img src={question} alt="lvl" />{" "}
                <span className="font-roboto ml-2">{t("design.qiuz")}</span>
              </div>
            </footer>
          </div>
        </main>
        <aside className="flex justify-center">
          <iframe
            className="rounded-2xl"
            width="432"
            height="546"
            src={embedUrl}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </aside>
      </section>
    </div>
  );
}

export default Design