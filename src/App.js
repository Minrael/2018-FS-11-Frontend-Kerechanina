import React, { Component } from 'react';
import './App.css';
import Chat from './lib/components/chat/chat.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';



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
		    <li><Link to='/chats/chat1'>Chat1</Link></li>
		    <li><Link to='/chats/chat2'>Chat2</Link></li>
		    <li><Link to='/'>Выйти из аккаунта</Link></li>
		</div>
	)
}

class App extends Component {
  

    render() {

        return(
		<Router>
		    <div>
			<Route exact path='/' component={IndexPage} />
          		<Route path='/chats/list' component={ChatList} />
			<Route path='/chats/chat1' component={Chat} />
			<Route exact path='/chats/chat2' component={Chat} />
		    </div>
      		</Router>
        )
    }
}

export default App;

