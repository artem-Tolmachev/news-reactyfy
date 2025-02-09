import styles from './styles.module.css';
import {formatTimeAgo} from '../../helpers/formatTimeAgo';
import Img from '../image/Img';
import { INews } from '../../interfaces';

interface Props {
    item: INews;
}

const NewsBanner = ({ item }: Props) => {
   
    return(
        <li className={styles.banner}>
            <Img image={item?.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </li>
    )
}

export default NewsBanner;