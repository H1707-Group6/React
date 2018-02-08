import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import './evaluate.scss'
import Header from '../header/headerComponent'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
export default class EvaluateComponent extends Component{
	state = {
		text:'待评价'
	}
	render(){
		return (
			<div className="avaluate">
				<Header  text = {this.state.text}></Header>
				<main>
					<div className="order_avaluate">
						<Icon type="profile" />
						<p>暂无相关订单</p>
					</div>
				</main>
			</div>
		)
	}
}