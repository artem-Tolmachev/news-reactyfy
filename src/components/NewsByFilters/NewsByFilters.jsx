import Pagination from '../Pagination/Pagination';
import styles from './styles.module.css';
import NewsList from '../NewsList/NewsList';
import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

    

    const handleNextPage = () => {
      if (filters.page_number < TOTAL_PAGES) {
        changeFilter('page_number', filters.page_number + 1)
      }
    }
    const handlePrevtPage = () => {
      if (filters.page_number > 1) {
        changeFilter('page_number', filters.page_number - 1)
      }
    }
    const handlePageClick = (PageNumber) => {
      changeFilter('page_number', PageNumber)
    }

    return (
        <section className={styles.section} >
            <NewsFilters filters={filters} changeFilter={changeFilter}/>
            
            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevtPage={handlePrevtPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />

            <NewsList isLoading={isLoading} news={news} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevtPage={handlePrevtPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />
        </section>
    )
}

export default NewsByFilters;