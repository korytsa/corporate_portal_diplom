import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { sendForm } from 'emailjs-com';

import "./getList.scss";
import listSrc from "../../img/list.png";
import "react-datepicker/dist/react-datepicker.css";

function GetList() {
	const [startDate, setStartDate] = useState(new Date());
	const [close, setClose] = useState(false);
    const [items, setItems] = useState([]);
    const [inputName, setInputName] = useState();
    const [inputSurname, setInputSurname] = useState();
    const [inputOtchestvo, setInputOtchestvo] = useState();
    const [submitMe, setSubmitMe] = useState(false);
    
	const options = [
		{ label: "Справка о нахождении в отпуске по уходу за ребенком", value: "Справка о нахождении в отпуске по уходу за ребенком"},
		{ label: "Справка о периоде работы", value: "Справка о периоде работы"},
		{ label: "Справка о месте работы",value: "Справка о месте работы"},
		{ label: "Справка об уплате обязательных страховых взносов", value: "Справка об уплате обязательных страховых взносов"},
		{ label: "Справка о размере заработной платы", value: "Справка о размере заработной платы"},
		{ label: "Справка о размере пенсии", value: "Справка о размере пенсии"},
		{ label: "Справка  о размере пособия на детей и периоде его выплаты",value: "Справка  о размере пособия на детей и периоде его выплаты"},
	];
	const style1 = {
		control: (base, state) => ({
			...base,
			width: "1370px !important",
			marginTop: "20px",
			height: "62px",
			borderRadius: "15px",
		}),
	};

	

    
    
	useEffect(() => {
		fetch("https://blooming-waters-62886.herokuapp.com/users")
			.then((res) => res.json())
			.then(
				(result) => {
					setItems(result);
				},
			);
	}, []);


    const closeModal = (e) => {
        e.preventDefault();
        setClose(!close);
    };
	
    const nameV = (e) =>{
        setInputName(e.currentTarget.value);
    }
    const surnameV = (e) =>{
        setInputSurname(e.currentTarget.value);
    }
    const otchestvoV = (e) =>{
        setInputOtchestvo(e.currentTarget.value);
    }

    let FIO = inputName + ' ' + inputSurname + ' ' + inputOtchestvo;
    const surname = items.map((item) => (item.name));
    let res = surname.includes(FIO);

    const modal = (
        <div className="overlay">
            <div className="modal">
                <span className="modal__close" onClick={closeModal} >&times;</span> 
                {res ? 
                (<h1 className="modal_text">Сотрудник найден в базе данных!<br></br>
                Справка отправлена вам на почту</h1>) : 
                (<h1 className="modal_text">Сотрудник не найден в базе данных!<br></br>
                Проверьте введенные данные</h1> )}
            </div>
        </div>
    );




    function sendEmail(e) {
		e.preventDefault();

		sendForm("list__for__diploma", "template_phyot67", e.target, "user_bqTAYuI7bpZloaXzmYRus")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
        e.target.reset();
        setSubmitMe(!submitMe)
	}




    return (
        <main>
            <h1 className="titleGetList">Оформление справки</h1>
            <div className="getList">
                <form className="getList__form" onSubmit={sendEmail}>
                    <div className="getList__form__block2">
                        <label>
                            Выберите тип справки, которая вам необходима:
                            <Select options={options} styles={style1} name="list"  />
                        </label>
                    </div>

                    <div className="getList__form__block">
                        <div className="getList__form__block1">
                            <label>
                                Фамилия:
                                <input type="text" name="name" value={inputName} onChange={nameV} />
                            </label>
                            <label>
                                Имя:
                                <input type="text" name="surname" value={inputSurname} onChange={surnameV} />
                            </label>
                            <label>
                                Отчество:
                                <input type="text" name="otchevstvo" value={inputOtchestvo} onChange={otchestvoV} />
                            </label>
                            <label>
                                Должность:
                                <input type="text" name="post" />
                            </label>
                            <label>
                                Дата заполнения:
                                <DatePicker
                                    name="data"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                            </label>
                        </div>
                        <div className="getList__form__img">
                            <img src={listSrc} />
                        </div>
                    </div>

                    <input
                        type="submit"
                        value="Отправить"
                        className="submitForm"
                    />
                </form>
            </div>
            {submitMe === true && close === false ? modal : false}
        </main>
    );
}

export default GetList;
