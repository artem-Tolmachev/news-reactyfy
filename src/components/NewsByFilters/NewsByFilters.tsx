import styles from './styles.module.css';
import NewsList from '../NewsList/NewsList';
import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

const NewsByFilters = () => {
 
  const filters = useAppSelector(state => state.news.filters)
  const dispath = useAppDispatch()

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords
  })
 
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispath(setFilters({key: 'page_number', value: filters.page_number + 1}))
    }
  }
  const handlePrevtPage = () => {
    if (filters.page_number > 1) {
      dispath(setFilters({key: 'page_number', value: filters.page_number - 1}))
    }
  }
  const handlePageClick = (PageNumber: number) => {
    dispath(setFilters({key: 'page_number', value: PageNumber}))
  }

    return (
        <section className={styles.section}>
          <NewsFilters filters={filters}/>
          <PaginationWrapper 
            top
            bottom
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePrevtPage={handlePrevtPage}
            handlePageClick={handlePageClick}
            currentPage={filters.page_number}
          >
            <NewsList isLoading={isLoading} news={data?.news}/>
          </PaginationWrapper>
        </section>
    )
}

export default NewsByFilters;