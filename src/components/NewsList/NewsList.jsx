import NewsItem from '../NewsItem/NewsItem'
import styles from './styles.module.css'
export const NewsList = ({items}) => {
    return <ul className={styles.list}>
        {items.map(item=>{
            return <NewsItem key={item.id} item={item}/>
        })}
    </ul>
}