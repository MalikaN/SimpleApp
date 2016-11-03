import React from 'react';
import {Link} from 'react-router';
import AddData from './AddData';
import Post from './Post';

class Home extends React.Component{

	render(){

		return(
			<div >
				<Link to="/post/add">Post</Link>
				<br/>
				<Link to="/post/addform" >AddData</Link>
			</div>
			);
	}
}

export default Home;