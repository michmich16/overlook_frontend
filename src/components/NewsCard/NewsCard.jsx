import { NavLink } from "react-router-dom";
import s from './NewsCard.module.scss'


export const NewsCard = ({ link, img, title, id }) => {
    return (
        <>
            <NavLink to={link} className={s.newsCard}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </NavLink>
        </>
    )
}