import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/react';

import logo from '../img/Логотип.svg';
import sum from '../img/icons8-рубль-44 1.svg';

//data == {
// 	login: 'User_name',
// 	balance: 130
// } 

const HeaderGame = ({data}) => {

	const Header = styled.div({
		margin: '0 132px',
		'.header': {
			height: '80px',
			borderBottom: '4px solid #45A29E',
			'*': {
				margin: "auto 0"
			},
			'.logo': {
				width: '223px',
				height: '53px',
				display: 'block'
			},
		},
		'.menu': {
			'.btn_menu': {
				width: '183px',
				height: '41px',
				border: '1px solid #14EEC7',
				boxSizing: 'border-box',
				fontStyle: 'normal',
				fontWeight: '900',
				fontSize: '26px',
				lineHeight: '41px',
				textAlign: 'center',
				position: 'relative',

				color: '#45A29E',
			},
			'.p': {
				marginRight: '40px' 
			},
			'.k': {
				border: '1px solid #C3073F'
			},
			'.contur': {
				width: '145.15px',
				height: '21px',

				border: '3px solid #0B0C10',
				boxSizing: 'border-box',
				position: 'absolute',
			    left: '38px',
			    top: '-2px'
			},
		},
		'.balik': {
			'.sum': {
				paddingRight: '3.33px',
				fontStyle: 'normal',
				fontWeight: '300',
				fontSize: '44px',
				lineHeight: '54px',
				alignItems: 'center',
				textAlign: 'right',

				color: '#C3073F',

				textShadow: '2px 4px 4px rgba(195, 7, 63, 0.73)',
				img: {
				    position: 'relative',
				    top: '-3px'
				},
			},
			'.btn_balik': {
				position: 'relative',
				height: '48px',

				border: '1px solid #14EEC7',
				boxSizing: 'border-box',

				fontStyle: 'normal',
				fontWeight: '300',
				fontSize: '35px',
				lineHeight: '43px',
				alignItems: 'center',
				textAlign: 'center',

				color: '#C3073F'
			},
			'.contur_balik': {
				position: 'absolute',
				
				height: '35px',
				left: '15px',
				top: '-2px',

				border: '3px solid #0B0C10',
				boxSizing: 'border-box',
				borderRadius: '0px 0px 30px 0px'
			},
		},
		h1: {
			color: '#fff'
		}
	});

	return (
		<Header>
			<div className='header row'>
				<div className="img col-md-3">
					<img className='logo' src={logo} alt="logo"/>
				</div>
				<div className="col-md-5 menu row">
					<div className="btn_menu p">
						<div className="contur"></div>
						Пополнить
					</div>
					<div className="btn_menu k">
						<div className="contur"></div>
						<span>Как играть</span>
					</div>
				</div>
				<div className="balik col-md-4 row">
					<div className="sum col-md-7">
						{data.balance}
						<img src={sum} alt="sum"/>
					</div>
					<div className="btn_balik col-md-5">
						<div className="col-md-9 contur_balik"></div>
						Вывод
					</div>
				</div>
			</div>
		</Header>
	);
};

export default HeaderGame;