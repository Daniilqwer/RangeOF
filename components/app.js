import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import './global_style.css';

import Form from './form.js';
import HeaderGame from './headerGame.js';
import RangeOf from './RangeOf/rangeGame.js';

const App = () => {

	const [dataAccount, onDataAccount] = useState({
				login: 'User_name',
				balance: 345
			}); // Заглушка

	const pageGame = (
		<>
		<HeaderGame data={dataAccount}/>
		<RangeOf/>
		</>
	);
	const page = dataAccount? pageGame : <Form onDataAccount={onDataAccount}/>;

	return (
		<>
			{page}
		</>
	);
}

export default App;