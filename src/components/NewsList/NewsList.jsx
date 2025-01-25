import styles from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({news}) => {

    return(
        <ul className={styles.list}>
          {  news.map((item) => {
                return <NewsItem className={styles.list} key={item.id} item={item}/>
            })}
        </ul>
    )
}

export default NewsList;