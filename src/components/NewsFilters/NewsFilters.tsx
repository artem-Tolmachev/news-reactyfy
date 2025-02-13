import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';
import {  IFilters } from '../../interfaces';
import { useTheme } from '../../context/ThemeContext';
import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

interface Props{
    filters: IFilters;
}

const NewsFilters = ({ filters }:Props) => {
    // const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);
    const { data: dataCategories } = useGetCategoriesQuery(null);
    const {isDark} = useTheme();
    const dispath = useAppDispatch();

    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider isDark={isDark}>
                    <Categories
                        categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => 
                            dispath(setFilters({key: 'category', value: category}))}
                        />
                </Slider>
            )
                : null}
            <Search 
            keywords={filters.keywords}
            setKeywords={(keywords) => dispath(setFilters({key: 'keywords', value: keywords}))}/>
        </div>
    )
}

export default NewsFilters;