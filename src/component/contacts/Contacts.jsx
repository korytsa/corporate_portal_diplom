import React from "react";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import { MapContainer, Marker, Popup } from "react-leaflet";
// import worldGeoJSON from 'geojson-world-map';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { NavLink } from 'react-router-dom';

import "./contacts.scss";
import contactsScr from "../../img/contacts.png";
import checkedScr from "../../img/checked.svg";
import locationScr from "../../img/location.svg";
import phoneScr from "../../img/phone.svg";
import emailScr from "../../img/message.svg";
import timeScr from "../../img/time.svg";
import questionScr from "../../img/question.png";

function Contacts() {
	
	const mapData = {
		center: [53.905381570677314, 27.534980499999953],
		zoom: 15,
        size: (100, 100),
	};

	const coordinates = [[53.905381570677314, 27.534980499999953]];

	return (
		<main>
            <div className='aboutContacts'>
			<div className="aboutContacts__container">
				<div className="aboutContacts__info">
					<span className="aboutContacts__info__title">
						Наши контакты
					</span>
					<div className="aboutContacts__info__subtitle">
						<img
							className="aboutContacts__info__subtitle__checked"
							src={checkedScr}
							alt="checked"
						/>
						<span>Есть вопросы? Мы поможем!</span>
					</div>
					<div className="aboutContacts__info__subtitle">
						<img
							className="aboutContacts__info__subtitle__checked"
							src={checkedScr}
							alt="checked"
						/>
						<span>Свяжитесь с нами любым удобным способом</span>
					</div>
					<div className="aboutContacts__info__subtitle">
						<img
							className="aboutContacts__info__subtitle__checked"
							src={checkedScr}
							alt="checked"
						/>
						<span>На связи 24/7</span>
					</div>
				</div>
                <button className="aboutContacts__info__btn"><NavLink to='/technicalSupport'>
                    <img  className="aboutContacts__info__btn__img" src={questionScr} alt='question' />
                    Задать вопрос
                    </NavLink>
                    </button>
				

			</div>
            <img
					className="aboutContacts__picture"
					src={contactsScr}
					alt="contacts"
				/>
            
            </div>

			<div className="contacts">
				<div className="contacts__container">
					<div className="contacts__info">
						<img
							className="contacts__info__location"
							src={locationScr}
							alt="location"
						/>
						<span>
							Адрес: 220004, Республика Беларусь, г. Минск, ул.
							Кальварийская, 7
						</span>
					</div>

					<div className="contacts__info">
						<img
							className="contacts__info__location"
							src={phoneScr}
							alt="phone"
						/>
						<span>Телефон: +375 17 395 29 16</span>
					</div>

					<div className="contacts__info">
						<img
							className="contacts__info__location"
							src={emailScr}
							alt="email"
						/>
						<span>Email: cbt@cbt.by</span>
					</div>

                    <div className="contacts__info">
						<img
							className="contacts__info__location"
							src={timeScr}
							alt="time"
						/>
						<span>Время работы: с 8:30 до 17:30 пн-пт</span>
					</div>
                    
				</div>

                <div className="mapYandex">
                <YMaps>
                    <Map 
                    defaultState={mapData} 
                    width='630px'
                    height='400px'
                    >
                        {coordinates.map((coordinate) => (
                            <Placemark geometry={coordinate} />
                        ))}
                    </Map>
                </YMaps>
                </div>
			</div>
		</main>
	);
}
export default Contacts;
