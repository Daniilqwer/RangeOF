import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/react';

const Form = ({onDataAccount}) => {

	const [text1, setText1] = useState('Ваш логин'),
		  [text2, setText2] = useState('Ваш пароль'),
		  [newAccount, setNewAccount] = useState(false),
		  [buttomNewAcc, setButtomNewAcc] = useState('block');

	const onNewAccount = () => {
		if (!newAccount) {

			setText1('Придумайте логин');
			setText2('Придумайте пароль');
			setNewAccount(true);
			setButtomNewAcc('none');
		}
	}

	let login,
		password,
		password_new;


// Отправка данных ====================

	const fetchApi = async () => {
		let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				login: login,
				password: password
			})
		});

		let result = await response.json();

		if (result) {
			onDataAccount({
				login: 'User_name',
				balance: 130
			}); // Пока стоит заглушка. 
		}
	}

	const onComeIn = () => {
		if (!newAccount && login && password && password.length > 5) {
			
			console.log("Войти");
			fetchApi();
		} else if (newAccount && login && password && password == password_new && password.length > 5) {
			
			console.log('Регистрация');
			fetchApi();
		}
	}
// /Отправка данных ====================


// ==============Style==============
		const H3 = styled.h6({
			color: `#C3073F`,
			fontSize: '30px',
			fontWeight: 300,
			margin: '10px 0'
		});
		const For = styled.form({
			padding: '40px',
			margin: '40px auto',
			borderLeft: '2px solid #66FCF1',
			'@media(max-width: 500px)': {
				padding: '7px'
			},
			'.div': {
				padding: '10px 20px 10px 20px',
				borderTop: '2px solid #950740',
			},
			'.div_bbuttoms': {
				margin: '0 0 0 1px'
			},
			'.buttom': {
				textAlign: 'center',
				border: '1px solid #66FCF1',
				padding: '3px',
				cursor: 'pointer'
			},
			'.span': {
				border: 'none',
				color: '#950740',
				lineHeight: '38px',
				margin: 'auto'
			},
			input: {
  				marginBottom: '10px',
  				borderRadius: `1px`,
  				color: '#45A29E',
  				fontWeight: 500,
  				fontSize: '21px',
  				background: '#0B0C10',
  				padding: '10px 0',
    			border: 'none',
    			outline: 'none'
			},
			'#new_account': {
				display: `${buttomNewAcc}`
			}
		});
// ==============/ Style==============

		let log;

		if (newAccount) {
			log = (<div className='div'>
					<input
						onChange={(e) => {password_new = e.target.value}} 
						type='password' placeholder='Повторите пароль' autoComplete="current-password"/>
				   </div>);
		}

		return (
			<>
				<For className="col-md-7 col-sm-10 col-10">
					<div className='div'>
						<input 
							onChange={(e) => {login = e.target.value}}
							type='text' placeholder={text1}/>
					</div>
					<div className='div'>
						<input 
							onChange={(e) => {password = e.target.value}}
							type='password' placeholder={text2} autoComplete="current-password"/>
					</div>
					{log}
					<div className="row div_bbuttoms">
						<div 
							onClick={onComeIn}
							className="buttom col-sm-7">
							<H3>Войти</H3>
						</div>
						<div id='new_account'
						    onClick={onNewAccount}
						    className="span buttom col-sm-5">
							<span>Зарегестрироваться</span>
						</div>
					</div>
				</For>
			</>
		);
};

export default Form;

// {
// 	#0B0C10
// 	#1F2833
// 	#C5C6C7
// 	#66FCF1
// 	#45A29E
// }