import { useTheme } from '../../context/ThemeContext.js';
import { IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store/index.js';
import { useGetCategoriesQuery } from '../../store/services/newsApi.js';
import { setFilters } from '../../store/slices/newsSlice.js';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider.jsx';
import styles from './styles.module.css';

interface Props {
	filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
	const { isDark } = useTheme();
	const { data} = useGetCategoriesQuery(null);
		const dispatch = useAppDispatch()
	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category =>
							dispatch(setFilters({ key: 'category', value: category }))
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}
			/>
		</div>
	);
};

export default NewsFilters;
