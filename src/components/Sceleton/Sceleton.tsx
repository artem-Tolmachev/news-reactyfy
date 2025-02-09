import { DirectionType, SkeletonType } from '../../interfaces';
import styles from './styles.module.css';
// type='banner', direction='column' имеют конкретные значения (type: string direction: string не подходит)
interface Props {
    type?: SkeletonType, 
    count?: number, 
    direction?: DirectionType
}

const Sceleton = ({count = 1, type='banner', direction='column'}: Props) => {
    
    return(
        <>
            {count > 1 ? (
                <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
                    {[...Array(count)].map((_, index) => (
                        
                        <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
                    ))}
                </ul>
            ) : (
                <li className={type === 'banner' ? styles.banner : styles.item}></li>
            )} 
        </>
    )
}
export default Sceleton;