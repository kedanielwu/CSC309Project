import React, { Component } from 'react';

const style = {
	listings: {
		float:'left',
		marginLeft: '2%',
	},
	profilepic: {
		width:'25%',
  		height:'25%',
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
		borderColor: '#c7e899',
		borderWidth: '3px',
		marginBottom: '.5%',
		paddingBottom: '.5%',
		width: '100%'
	},
	h3: {
		borderBottomStyle: 'solid',
		borderColor: '#c7e899',
		borderWidth: '2px',
		marginBottom: '1.5%',
		paddingBottom: '1.5%',
		width: '97%'
	},
	date: {
		paddingBottom: '.5%',
		fontSize: '13px'
	},
	scroll: {
		backgroundColor: '#d9ddd9',
		width:'550px',
		height:'290px', 
		lineHeight:'5em',
		overflow:'auto',
	},
	list: {
		listStyle: 'none'
	},
	item: {
		marginTop: '0px',
		marginBottom: '0px',
	}
};

class UserListings extends Component {

	render() {
		return (
            <div id="listings" style={style.listings}>
            	<h2 style={style.h2}> Listings </h2>
            	<div style={style.scroll}>
            		<ul style={style.list}>
            			<li style={style.item}>
            				Listing 1
            			</li>
            			<li>Listing 2 </li>
            			<li>Listing 3</li>
            			<li>etc. </li>
            			<li> </li>
            			<li> </li>
            			<li> </li>
            		</ul>
				</div>           	
            </div>
		);
	}
}

export default UserListings;