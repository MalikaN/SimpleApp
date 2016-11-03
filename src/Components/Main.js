import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AddData from './AddData';



class Main extends React.Component{
	render(){
	return(
		<div >
			<Header/>
			<div>
				{this.props.children}
			</div>

			<Footer/>
		</div>
)
	}
}

export default Main;