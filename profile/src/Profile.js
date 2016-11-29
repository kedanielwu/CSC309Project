import React, { Component } from 'react';

const style = {
	listingInfo: {
		marginLeft: '3%',
	},
	profilepic: {
		marginTop: '20px',
		width:'25%',
  		height:'25%',
  		float: 'left'
	},
	info: {
		float: 'left',
		marginLeft: '3%',
		width: '23%',
		marginTop: '.5%',
	},
	contact: {
		float: 'right',
		marginRight: '3%',
  		borderColor: '#d9ddd9',
		borderRadius: '3px',
		borderStyle: 'solid',
		borderWidth: '1.5px',
		boxShadow: '0px 0px .5px .5px #d9ddd9',
	},
	p: {
		marginTop: '0px',
		marginBottom: '6px',
	},
	h2: {
		borderBottomStyle: 'solid',
		borderColor: 'black',
		borderWidth: '1.5px',
		marginBottom: '.5%',
		paddingBottom: '.5%',
		width: '97%'
	},
	h3: {
		borderBottomStyle: 'solid',
		borderColor: '#c7e899',
		borderWidth: '4px',
		
		marginBottom: '1.5%',
		paddingBottom: '1.5%',
		width: '97%'
	},
	date: {
		paddingBottom: '.5%',
		fontSize: '14px'
	}
};

class Profile extends Component {

	render() {
		return (
            <div id="listing-info" style={style.listingInfo}>
            	<h2 style={style.h2}> user's Profile </h2>
            	<img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" 
            		alt="user" style={style.profilepic}/>

            	<div id="info" style={style.info}>
            		<h3 style={style.h3}> User Information </h3>
            		<p style={style.p}> <strong>User since</strong>: 2016-11-28</p>
	            	<p style={style.p}> <strong>Description</strong>: Description of user
	            	Description of user Description of user Description of user Description of user</p>
	            	<p style={style.p}> <strong>Area</strong>: Mississauga </p>
	            	
	            	<h3 style={style.h3}> Contact Seller </h3>
	            	<p style={style.p}> 
	            		Email: user@hotmail.com
	            	</p>
	            	<p style={style.p}> 
	            		Phone #: 123-456-7890
	            	</p>
	            </div>
            </div>
		);
	}
}

export default Profile;