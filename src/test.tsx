import axios from "axios";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import "../../index.css";
import raiting from "../../assets/icon/Rating.png";
import reply from "../../assets/icon/reply.png";
import like from "../../assets/icon/like.png";

interface NewsData {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

function Comments() {
  const [news, setNews] = useState<NewsData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const displayedNews = news.slice((currentPage - 1) * 3, currentPage * 3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=Apple&from=2023-05-26&sortBy=popularity&apiKey=a6763d06b47f48d1aecb11d38466cfcf"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container_global border-t-2 border-solid pt-5">
      <main className="w-4/6">
        {displayedNews.map((article: NewsData) => (
          <div className="w-full my-12" key={article.title}>
            <div className="flex justify-between w-full">
              <div className="flex w-fit">
                <img
                  className="w-6 h-6 object-cover mr-3"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <div>
                  <h1 className="font-roboto font-semibold text-sm mb-2 ">
                    {article.author}
                  </h1>
                  <p className="text-[#637381] text-[13px] font-regular mt-[4px]">
                    {article.publishedAt}
                  </p>
                </div>
              </div>
              <div className="w-fit">
                <img className="object-contain" src={raiting} alt="Rating" />
              </div>
            </div>
            <p className="font-raleway my-3">{article.description}</p>
            <div className="flex font-roboto text-sm font-semibold">
              <img className="object-contain mr-3" src={like} alt="like" />{" "}
              <span>Helpful (20)</span>
              <img className="object-contain mr-3" src={reply} alt="reply" />
              <span>Reply</span>
            </div>
            <div className="pl-5 mt-10 flex justify-between w-full">
              <div className="flex w-fit">
                <img
                  className="w-6 h-6 object-cover mr-3"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <div>
                  <h1 className="font-roboto font-semibold text-sm mb-2 ">
                    {article.author}
                  </h1>
                  <p className="text-[#637381] text-[13px] font-regular mt-[4px]">
                    {article.publishedAt}
                  </p>
                </div>
              </div>
            </div>
            <p className="font-raleway my-3 ml-14">{article.content}</p>
          </div>
        ))}
        <Pagination
          current={currentPage}
          total={news.length}
          pageSize={5}
          onChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default Comments;