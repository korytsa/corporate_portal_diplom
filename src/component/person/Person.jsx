import React, { useEffect, useState } from "react";

import "./person.scss";

import loadSrc from "../../img/load.png";
import failSrc from "../../img/fail.png";

function Person() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("https://blooming-waters-62886.herokuapp.com/users")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	const persons = items.map((item) => (
		<>
			<span key={item.id} className="grid__info">
				{item.ordialNumber}
			</span>
			<span key={item.id} className="grid__info">
				{item.name}
			</span>
			<span key={item.id} className="grid__info">
				{" "}
				{item.post}
			</span>
			<span key={item.id} className="grid__info">
				{" "}
				{item.email}
			</span>
			<span key={item.id} className="grid__info">
				{" "}
				{item.number}
			</span>
			<span key={item.id} className="grid__info">
				{" "}
				{item.mobile}
			</span>
		</>
	));

	if (error) {
		return (
			<div className="load">
				<img src={failSrc} alt="fail" />
				<span>Ошибка: {error.message}</span>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div className="load">
				<img src={loadSrc} alt="loading" />
				<span>Загрузка данных...</span>
			</div>
		);
	} else {
		return (
			<div className="grid">
				<span className="grid__title">
					<strong></strong>
				</span>
				<span className="grid__title">
					<strong>ФИО</strong>
				</span>
				<span className="grid__title">
					<strong>Должность</strong>
				</span>
				<span className="grid__title">
					<strong>Email</strong>
				</span>
				<span className="grid__title">
					<strong>Телефон</strong>
				</span>
				<span className="grid__title">
					<strong>Мобильный телефон</strong>
				</span>
				{persons[0]}
				{persons[1]}
				{persons[2]}
				{persons[3]}
				{persons[4]}
				{persons[5]}
				{persons[6]}
				{persons[7]}
				{persons[8]}
				{persons[9]}
				{persons[10]}
				{persons[11]}
				{persons[12]}
				{persons[13]}
			</div>
		);
	}
}

export default Person;

