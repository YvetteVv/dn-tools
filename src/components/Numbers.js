import React, { Component } from 'react';

import Number from './Number/Number'
import './Numbers.css'

export default class Numbers extends Component {
	render() {
		let arr = this.props.arr;
		console.log(arr)
		return (
			<div className="container-flex">
				{arr.map((item, i) => {
						return <Number num={item} key={i}/>
					})}
			</div>
		)
	}
}