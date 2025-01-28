import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import NewsList from "../../components/NewsList/NewsList";
import Sceleton from "../../components/Sceleton/Sceleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const PageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews(currentPage, PageSize)
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage])

  const handleNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevtPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (PageNumber) => {
    setCurrentPage(PageNumber)
  }

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Sceleton type={'banner'} count={1} />}
      <Pagination 
      totalPages={totalPages}
      handleNextPage={handleNextPage} 
      handlePrevtPage={handlePrevtPage}
      handlePageClick={handlePageClick}
      currentPage={currentPage}
      />
      {!isLoading ? <NewsList news={news} /> : <Sceleton type={'item'} count={10} />}
      <Pagination 
      totalPages={totalPages}
      handleNextPage={handleNextPage} 
      handlePrevtPage={handlePrevtPage}
      handlePageClick={handlePageClick}
      currentPage={currentPage}
      />
    </main>
  )
}

export default Main;