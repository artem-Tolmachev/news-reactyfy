import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import {getCategories} from '../../api/apiNews';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import NewsList from "../../components/NewsList/NewsList";
import Sceleton from "../../components/Sceleton/Sceleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';

const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState('');
  const totalPages = 10;
  const PageSize = 10;
  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews({
          page_number: currentPage, 
          page_size: PageSize,
          category: selectedCategory === 'All' ? null : selectedCategory,
          keywords
        }
      )
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await getCategories()
      setCategories(['All', ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords])

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
      <Categories 
      categories={categories} 
      setSelectedCategory={setSelectedCategory} 
      selectedCategory={selectedCategory}/>
      <Search keywords={keywords} setKeywords={setKeywords}/>

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