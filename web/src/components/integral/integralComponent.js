import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import './integral.scss'
import Header from '../header/headerComponent'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
export default class IntegralComponent extends Component{
	state = {
		text:'积分'
	}
	render(){
		return (
			<div className="integral">
				<Header  text = {this.state.text}></Header>
				<main>
					<div className="order_avaluate">
						<p >积分规则</p>
						<p><span>0</span>积分</p>
						<p>积分兑换</p>
					</div>
					<div className="bom">
						<p>暂无任何积分</p>
					</div>
				</main>
			</div>
		)
	}
}