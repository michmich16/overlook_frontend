import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";


export const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const logo = './hotel-overlook-logo.png'
    const toggleBurgerMenu = () => {
        setBurgerOpen(!burgerOpen);
    };

    return (
        <>
            <header className={s.headerContainer}>
                <hgroup className={s.headerStyle}>
                    <ul className={s.logoWrapper}>
                        <img src={logo} alt="hotel-overlook.dk" />
                    </ul>
                    <nav className={`${s.nav} ${burgerOpen ? s.open : ''}`}>
                        <ul>
                            <li><NavLink to="/">FORSIDE</NavLink></li>
                            <li><NavLink to="/info">HOTELLER & DESTINATIONER</NavLink></li>
                            <li><NavLink to="/rooms">VÆRELSER</NavLink></li>
                            <li><NavLink to="/reservation">RESERVATION</NavLink></li>
                            <li><NavLink to="/login">LOGIN</NavLink></li>
                        </ul>
                    </nav>
                    <div className={s.burgerMenu} onClick={toggleBurgerMenu}>
                        <span className={burgerOpen ? s.openIcon : ''}></span>
                        <span className={burgerOpen ? s.openIcon : ''}></span>
                        <span className={burgerOpen ? s.openIcon : ''}></span>
                    </div>
                </hgroup>
            </header>
        </>
    );
};
