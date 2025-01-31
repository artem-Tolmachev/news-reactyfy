import styles from './styles.module.css';
import {formatTimeAgo} from '../../helpers/formatTimeAgo';
import withSkeleton from '../../helpers/hocs/withSkeleton';

import Img from '../image/Img';

const NewsBanner = ({item}) => {
   
    return(
        <div className={styles.banner}>
            <Img image={item?.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;