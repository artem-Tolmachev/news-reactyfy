import styles from './styles.module.css';
import BannersList from '../BannersList/BannersList';
import { useGetLatestNewsQuery } from '../../store/services/newsApi';

    const LatestNews = () => {
      // useFetch<NewsApiResponse, null> сообщает TypeScript, что data будет соответствовать структуре NewsApiResponse
    // const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
    const {data, isLoading} = useGetLatestNewsQuery(null);
 
    return(
        <section className={styles.section}>
          <BannersList banners={data && data.news} isLoading={isLoading}/>
        </section> 
    )
}

export default LatestNews;