import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory } from 'react-router';

import Main from './Components/Main';
import Post from './Components/Post';
import Home from './Components/Home';
import AddData from './Components/AddData';
import AddPost from './Containers/AddPost';
import From from './Containers/From';

const router =(

	<Router history={browserHistory}>
	<Route path="/" component={Main}>
		<IndexRoute component={Home}/>		

		<Route path="/post/add" component={AddPost} >
		</Route>
		<Route path="/post/addform" component={From} >
		</Route>
	</Route>
</Router>

	);


ReactDOM.render(
  router,
  document.getElementById('root')
);
