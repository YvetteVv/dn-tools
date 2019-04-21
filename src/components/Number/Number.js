import React, { Component } from 'react';
import Text from "./Text/Text"
import './Number.css'

export default class Number extends Component {
	render() {
		return (
			<div className="num-container">
				<Text num={this.props.num} />
			</div>
		)
	}
}