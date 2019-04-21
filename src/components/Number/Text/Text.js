import React, { Component } from 'react';
import './Text.css'

export default class Text extends Component {

	render() {
		return (
			<div className="animated fadeInDown yx-big" >
				{this.props.num}
			</div>
		)
	}
}
