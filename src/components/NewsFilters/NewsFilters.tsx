import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';
import { CategoriesApiResponse, IFilters } from '../../interfaces';

interface Props{
    changeFilter: (key: string, value: string | number | null) => void;
    filters: IFilters;
}

const NewsFilters = ({ filters, changeFilter }:Props) => {
    const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilter('category', category)} />
                </Slider>
            )
                : null}
            <Search keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </div>
    )
}

export default NewsFilters;