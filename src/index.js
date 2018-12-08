import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppNew from './lib/app/a.js';


const IndexPage = () => {

	return (
		<div id='indPage'>
		    <div id='aut'>Привет, я будущая страница авторизации!</div>
		    <Link to='/chats/list'><div id='linkChat'>Перейти к списку диалогов</div></Link>
		</div>
	)
}


const ChatList = () => {

	return (
		<div id = 'Chats'>
		    <div>Диалоги</div>
		    <Link to='/chats/chat1'>Chat1</Link>
		    <Link to='/chats/chat2'>Chat2</Link>
		    <Link to='/'><button>Выйти из аккаунта</button></Link>
		</div>
	)
}


ReactDOM.render(      		

		<Router>
		    <div>
          		<Route path='/chats/list' component={ChatList} />
			<Route exact path='/' component={IndexPage} />
			<Route exact path='/chats/chat1' component={AppNew} />
			<Route exact path='/chats/chat2' component={AppNew} />
		    </div>
      		</Router>, 



document.getElementById('root'));

serviceWorker.unregister();
