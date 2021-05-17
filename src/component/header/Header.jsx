import React, { useState } from 'react';

import styles from './header.module.scss';

import burgerMenuSrc from '../../img/burger menu.svg';
import userSrc from '../../img/user.png';
import { NavLink } from 'react-router-dom';

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setBurgerMenu(!burgerMenu);
        setCloseMenu(!closeMenu);
    }
    
    const openBurgerMenu = (
        <div className={styles.burgerMenu}>
            <ul> 
                <li><NavLink to='/'>Главная страница</NavLink></li>
                <li><NavLink to='/news'>Новости</NavLink></li>
                <li><NavLink to='/document'>Документы</NavLink></li>
                <li><NavLink to='/calendar'>Календарь</NavLink></li>
                <li><NavLink to='/contacts'>Контакты</NavLink></li>
                <li><NavLink to='/person'>Сотрудники</NavLink></li>
                <li><NavLink to='/meeting'>Мероприятия</NavLink></li>
                <li><NavLink to='/chats'>Чаты</NavLink></li>
                <li><NavLink to='/goal'>Достижения</NavLink></li>
                <li><NavLink to='/settings'>Настройки</NavLink></li>
                <li><NavLink to='/anketa'>Анкета</NavLink></li>
                <li><NavLink to='/projects'>Проекты</NavLink></li>
                <li><NavLink to='/getList'>Заказать справку</NavLink></li>
                <li><NavLink to='/technicalSupport'>Техническая поддержка</NavLink></li>
            </ul>
            <span className={styles.burgerClose} onClick={toggleMenu}>&times;</span> 
        </div>
        
    );

    return(
        <header>
            <img className={styles.burgerLogo} onClick={toggleMenu} src={burgerMenuSrc} alt='burgerMenu' />
            {burgerMenu && openBurgerMenu}
            <div className={styles.personInfo}>
                <img className={styles.userPhoto} src={userSrc} alt='userPhoto' />
                <span className={styles.userName}>Анна Корытько</span>
            </div>
        </header>
    )
}

export default Header;