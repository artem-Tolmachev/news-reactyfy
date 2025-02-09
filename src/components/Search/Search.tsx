import styles from './styles.module.css';

interface Props {
    keywords: string | number;
    setKeywords: (keyword: string) => void;
}
const Search = ({keywords, setKeywords}: Props) => {
   
    return(
        <div className={styles.search}>
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