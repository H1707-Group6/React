import React,{Component} from 'react'
import './order.scss'

import {connect} from 'react-redux'

import {Icon} from 'antd';
import * as action from './orderAction'
var username;
// var uid;

class OrderComponent extends Component{
    componentWillMount(){
        username = window.sessionStorage.getItem('username');
    }
    nopay(){
        var gid = [1,2,3];
        var qty = [3,4,5];
        var total = 666;
        var uid = window.sessionStorage.getItem('userId');
        // var goods = [{gid:1,qty:2,total:2000},{gid:3,qty:9,total:2000}];
        this.props.myorder(uid,gid.join(','),qty.join(','),total);
    }
    render(){
        return (
            <div className="order">
            	<header></header>
                <main>
					<div className="step1">
                        <p>收货人:<Icon type="user-add" />韦职丽<span><Icon type="mobile" />手机号：{username}</span><Icon type="right" /></p>
                        <p>广东省广州市裕隆公寓</p>
					</div>
                    <div className="step2">
                        <p>下单人:<Icon type="user-add" />孟星宇<span><Icon type="mobile" />手机号：1366776979</span><Icon type="right" /></p>
                    </div>
                    <div className="step3">
                        <ul>
                            <li>
                                <span>送达日期</span>
                                <span>请选择<Icon type="right" /></span>
                            </li>
                            <li>
                                <span>贺卡留言（选填）</span>
                                <span>请选择<Icon type="right" /></span>
                            </li>
                            <li>
                                <span>优惠卷</span>
                                <span>无可用<Icon type="right" /></span>
                            </li>
                            <li>
                                <span>备注/发票</span>
                                <span><Icon type="right" /></span>
                            </li>
                            <li>
                                <span>商品金额</span>
                                <span>{}</span>
                            </li>
                        </ul>
                    </div>
                </main>
                <footer>
                    <div className="footer">
                        <p>实付款：<span className="total">{}</span></p>
                        <p><span className="btn_total" onClick={this.nopay.bind(this)}>去结算</span></p>
                    </div>
                </footer>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
   
    return {
        ajaxStatus:state.order.status,
        ajaxResult:state.order.result|| []
    }
}

export default connect (mapStateToProps,action)(OrderComponent);