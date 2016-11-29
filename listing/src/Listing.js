import React, { Component } from 'react';

const style = {
	listingInfo: {
		marginLeft: '3%',
	},
	image: {
		width:'35%',
  		height:'35%',
  		float: 'left'
	},
	info: {
		float: 'left',
		marginLeft: '3%',
		
	},
	contact: {
		float: 'right',
		marginRight: '3%',
  		borderColor: '#d9ddd9',
		borderRadius: '3px',
		borderStyle: 'solid',
		borderWidth: '1.5px',
		boxShadow: '0px 0px .5px .5px #d9ddd9',
		padding: '1%'
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
	date: {
		paddingBottom: '.5%',
		fontSize: '14px'
	}
};

class LoginSignup extends Component {

	render() {
		return (
            <div id="listing-info" style={style.listingInfo}>
            	<h2 style={style.h2}> Listing Title </h2>
            	<p style={style.date}> Created on: 2016-11-27</p>
            	<img src="http://tinyurl.com/hgq23rc" alt="used books" style={style.image}/>

            	<div id="info" style={style.info}>
	            	<p style={style.p}> <strong>Price</strong>: $50</p>
	            	<p style={style.p}> <strong>Status</strong>: Pending</p>
	            	<p style={style.p}> <strong>Description</strong>: Used textbooks</p>
	            	<p style={style.p}> <strong>Area</strong>: Mississauga </p>
	            </div>
	            <div id="contact" style={style.contact}>
	            	<h3> Contact Seller </h3>
	            	<p style={style.p}> 
	            		Seller:  <a href="profile.html">annetran </a> 
	            	</p>
	            	<p style={style.p}> 
	            		Email: annetran@hotmail.com
	            	</p>
	            	<p style={style.p}> 
	            		Phone #: 123-456-7890
	            	</p>
	            </div>
            </div>
		);
	}
}

export default LoginSignup;