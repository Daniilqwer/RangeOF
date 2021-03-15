import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/react';

import Hand from '../img/Рука.svg';
import Arrow from '../img/Arrow.svg';

const RangeOf = () => {

	const [position, setPosition] = useState(25); // Позиция диапозона, от 0 до 50

	let i = 36; // Заглушка, выпало число N ( от 0 до 100 )

	let idL = position, // MIN число диапозона
		idR = position + 50; // MAX число диапозона

// Изменение положения диапозона.

// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе. 
// Mouseleave / Курсор покинул облость объекта.
// mousemove / Движение мыши над элементом.
// Math.round / Округление до целого

const rangeChange = (e) => {
// e.currentTarget - Элемент на котором сработало событие. 
// e.currentTarget.onmousemove ..Так можно записывать события. 
};
const rangeChange_stop = (e) => {

};

// Цвет выповшего числа при выйгрыше и проигрыше.
	const condition = () => {
		if (idL <= i && i <= idR) {
			return '#66FCF1';
		} else {
			return '#C3073F';
		}
	};
// Рассположение стрелки
	let id = () => {
		if (i < 50) {
			return i - 1;
		} else if (i > 50) {
			return i - 4;
		} else if (i == 50) {
			return i - 2;
		}
	}
// Показ крайних чисел
	const leftTxN = () => {
		if (i < 2) {
			return 'none';
		}
		return 'block';
	};
	const rightTxN = () => {
		if (i > 96) {
			return 'none';
		}
		return 'block';
	};
// / Показ крайних чисел /

// Стили ============================
	const Range = styled.div({
		margin: "0 auto",
		marginTop: '165px',
		'.ran': {
			background: '#950740',
			height: '8px',
			'#rLeft, #rRight, #gLeft, #gRight': {
				position: 'absolute',
				width: '5px',
				height: '47px',
				top: '-21px',

				backgroundColor: '#14EEC7',
				'.textR, .textG': {
					position: 'absolute',
					
					fontWeight: '100',
					fontSize: '48px',
					textAlign: 'center',
				},
				'.textR': {
					color: '#C3073F',
					top: '-65px',
					left: '-13px'
				},
				'.L': {
					display: `${leftTxN()}`
				},
				'.R': {
					display: `${rightTxN()}`
				}
			},
			'#rRight, #gRight': {
				right: '0',
				'.textR': {
					left: '-38px'
				}
			},

			'.arrow': {
				position: 'absolute',
				textAlign: 'center',

				top: '-90px',
				left: `${id()}%`,
				'.textArrow': {
					fontWeight: '600',
					fontSize: '40px',

					color: `${condition()}`
				}
			}
		},
		'.ranGood': {
			background: '#00FF00',
			height: '8px',
			left: `${position}%`,
			'.imgHand': {
				position: 'relative',
				margin: '0 auto',
				width: '48px',
				top: '-19px',
				'.hand_box': {
					width: '50px',
					height: '50px',
					position: 'absolute',
					top: '0px',
					left: '-1px'
				}
			},
			'.textG': {
				color: '#14EEC7',
				width: '78px',
				top: '38px',
				left: '-36px'
			}
		}
	});

	return (
		<Range className="col-md-10">
			<div className="ran">
				<div id="rLeft">
					<div className="textR L">
						0
					</div>
				</div>

				<div className="arrow">
					<div className="textArrow">{i}</div>
					<img src={Arrow} alt="Arrow" className="arrow1"/>
				</div>

				<div
					onMouseDown={rangeChange}
					onMouseUp={rangeChange_stop} 
					className="ranGood col-6">
					<div id="gLeft">
						<div className="textG">
							<span>{idL}</span>
						</div>
					</div>
					<div className="imgHand">
						<img src={Hand} alt="Hand"/>
						<div className="hand_box"></div>
					</div>	
					<div id="gRight">
						<div className="textG">
							<span>{idR}</span>
						</div>
					</div>
				</div>

				<div id="rRight">
					<div className="textR R">
						100
					</div>
				</div>
			</div>
		</Range>
	);
}

export default RangeOf;