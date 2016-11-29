import React, { Component } from 'react';

const style = {
	commentSection: {
		marginLeft: '3%',
		marginBottom: '5%'
	},
	info: {
		float: 'left',
	},
	user: {
		float: 'left',
		borderStyle: 'solid',
		borderWidth: '1.5px',
		borderRadius: '3px',
		borderColor: '#c7e899',
		padding: '10px'
	},
	p: {
		float: 'left',
		borderStyle: 'solid',
		borderWidth: '1.5px',
		borderRadius: '3px',
		borderColor: 'grey',
		padding: '10px',
		marginLeft: '2px'
	},
	h2: {
		float: 'left',
		borderBottomStyle: 'solid',
		borderColor: 'black',
		borderWidth: '1.5px',
		marginTop: '2.5%',
		marginBottom: '.5%',
		paddingBottom: '.5%',
		width: '97%'
	},
	response: {
		borderStyle: 'solid',
		borderWidth: '1.5px',
		borderRadius: '3px',
		borderColor: 'grey',
		padding: '10px',
	}
};

class Comments extends Component {	

	constructor(props) {
		super(props);

		this.state = {
	      value: 'Type your response..',
	      submitted: false
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleChange(event) {
		this.setState({value: event.target.value});
		event.preventDefault();
	}

	handleSubmit(event) {
		this.setState({value: this.state.value});
		this.setState({submitted: true});
		console.log(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
            <div id="comment-section" style={style.commentSection}>
            	<h2 style={style.h2}> Comments </h2>
            	<div id="comments" style={style.info}> 
            		<div id="comment" style={style.commentSection}>
            			<p style={style.user}> <a href="profile.html">other_user</a> asked:
            			How many books?</p>
						<form onSubmit={this.handleSubmit}>
					        <label >
					          {this.state.submitted === false ?
					          	<textarea value={this.state.value} onChange={this.handleChange} />
					          	: <p style={style.response}>{this.state.value}</p>
					          }
					        </label>
					        <div>
					        	{this.state.submitted === false ? 
					        		<input type="submit" value="Reply" id="reply-box"/>
					        		: <p id="submitted"> Submitted </p>}
					        </div>
					    </form>
            		</div>
            	</div>
            </div>
		);
	}
}

export default Comments;