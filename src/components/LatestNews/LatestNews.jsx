import  {formatDate} from '../../helpers/formatDate';
import styles from './styles.module.css';
import BannersList from '../../components/BannersList/BannersList';

const LatestNews = ({banners, isLoading}) => {
   
    return(
        <section className={styles.section}>
           <BannersList banners={banners} isLoading={isLoading}/>
        </section>
    )
}

export default LatestNews;