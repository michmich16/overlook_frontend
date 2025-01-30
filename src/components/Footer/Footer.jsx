import s from "./Footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <p>© 2021 hotel Overlook. Alle rettigheder forbeholdt.</p>
            <div className={s.footerIcons}>
                <FaTwitterSquare />
                <FaFacebook />
            </div>
            <ul className={s.footerNav}>
                <li><NavLink to="/">FORSIDE</NavLink></li>
                <li><NavLink to="/info">HOTELLER & DESTINATIONER</NavLink></li>
                <li><NavLink to="/rooms">VÆRELSER</NavLink></li>
                <li><NavLink to="/reservation">RESERVATION</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </div>
    );
}