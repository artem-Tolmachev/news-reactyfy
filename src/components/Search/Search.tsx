import { useTheme } from '../../context/ThemeContext';
import styles from './styles.module.css';

interface Props {
    keywords: string | number;
    setKeywords: (keyword: string) => void;
}
const Search = ({keywords, setKeywords}: Props) => {
   const{isDark} = useTheme()
    return(
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
            <input type="text" 
            value={keywords} 
            onChange={(event) => setKeywords(event.target.value)} 
            className={styles.input}
            placeholder='React'
            />
        </div>
    )
}

export default Search;