import styles from './styles.module.css';

const Search = ({keywords, setKeywords}) => {
   
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