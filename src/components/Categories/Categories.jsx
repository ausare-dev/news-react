import { forwardRef } from 'react';
import styles from './styles.module.css'
const Categories = forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) => {
	return (
		<div ref={ref}className={styles.categories}>
			<button
				onClick={() => setSelectedCategory(null)}
				className={!selectedCategory ? styles.active : styles.item}
			>
				All
			</button>
			{categories.map(c => {
				return (
					<button
						onClick={() => setSelectedCategory(c)}
						key={c}
						className={selectedCategory === c ? styles.active : styles.item}
					>
						{c}
					</button>
				);
			})}
		</div>
	);
});

Categories.displayName = 'Categories'

export default Categories;
