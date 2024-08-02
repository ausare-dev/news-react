import styles from './styles.module.css'
const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
	return (
		<div className={styles.categories}>
			{categories.map(c=>{
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
};

export default Categories;
