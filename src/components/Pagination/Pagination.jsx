import styles from './styles.module.css';
const Pagination = ({
	handlePreviousPage,
	handleNextPage,
	handlePageClick,
	totalPage,
	currentPage,
}) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.arrow}
				onClick={handlePreviousPage}
				disabled={currentPage === 1}
			>
				{'<'}
			</button>

			<div className={styles.list}>
				{[...Array(totalPage)].map((_, i) => {
					return (
						<button
							className={styles.pageNumber}
							key={i}
							onClick={() => handlePageClick(i + 1)}
							disabled={currentPage === i + 1}
						>
							{i + 1}
						</button>
					);
				})}
			</div>

			<button
				className={styles.arrow}
				onClick={handleNextPage}
				disabled={currentPage === 10}
				>{'>'}
			</button>
		</div>
	);
};

export default Pagination;
