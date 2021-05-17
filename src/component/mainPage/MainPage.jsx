import React from 'react';
import { NavLink } from 'react-router-dom';

import "./mainPage.scss" ;

import newsScr from '../../img/news.png';
import documentScr from '../../img/document.png';
import calendarScr from '../../img/calendar.png';
import contactsScr from '../../img/contacts.png';
import personScr from '../../img/person.png';
import meetingScr from '../../img/meeting.png';
import chatScr from '../../img/chats.png';
import settingsScr from '../../img/settings.png';
import anketaScr from '../../img/anketa.PNG';
import projectScr from '../../img/projects.png';
import supportScr from '../../img/support.png';
import achievementsScr from '../../img/achievements.png';
import referenceScr from '../../img/reference.png';

function mainPage() {
    return(
        <main className='container__card'>
            <NavLink className='card' to='/news'>
                <span className='card__title'>Новости</span>
                <img className='card__picture__news' src={newsScr} alt='news' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Документы</span>
                <img className='card__picture__document' src={documentScr} alt='document' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Календарь</span>
                <img className='card__picture__calendar' src={calendarScr} alt='calendar' />
            </NavLink>

            <NavLink className='card' to='/contacts'>
                <span className='card__title'>Контакты</span>
                <img className='card__picture__contacts' src={contactsScr} alt='contacts' />
            </NavLink>

            <NavLink className='card' to='/person'>
                <span className='card__title'>Сотрудники</span>
                <img className='card__picture__person' src={personScr} alt='person' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Мероприятия</span>
                <img className='card__picture__meeting' src={meetingScr} alt='meeting' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Чаты</span>
                <img className='card__picture__chat' src={chatScr} alt='chat' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Достижения</span>
                <img className='card__picture__achievements' src={achievementsScr} alt='achievements' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Настройки</span>
                <img className='card__picture__settings' src={settingsScr} alt='settings' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Анкета</span>
                <img className='card__picture__anketa' src={anketaScr} alt='anketa' />
            </NavLink>

            <NavLink className='card' to='/news'>
                <span className='card__title'>Проекты</span>
                <img className='card__picture__projects' src={projectScr} alt='projects' />
            </NavLink>

            <NavLink className='card' to='/getList'>
                <span className='card__title'>Заказать справку</span>
                <img className='card__picture__reference' src={referenceScr} alt='reference' />
            </NavLink>

            <NavLink className='card' to='/technicalSupport'>
                <span className='card__title'>Техническая поддержка</span>
                <img className='card__picture__support' src={supportScr} alt='support' />
            </NavLink>
        </main>
    )
}

export default mainPage;