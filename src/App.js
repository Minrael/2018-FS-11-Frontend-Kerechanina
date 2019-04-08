import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Auth from './containers/Auth.js'
import { Chat } from './containers/Chat'




const IndexPage = () => {
	return (
		<div id='indPage'>
		    <div id='aut'>Привет, я будущая страница авторизации!</div>
		    <Link to='/login'><div id='linkChat'>Auth</div></Link>
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
          		<Route exact path='/chats/list' component={ChatList} />
        		<Route exact path='/login' exact component={Auth} />
			<Route exact path='/chats/chat1' component={ () => <Chat />} />
			<Route exact path='/chats/chat2' component={ () => <Chat />} />

		    </div>
      		</Router>
        )

    }
}


export default App;

