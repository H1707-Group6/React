import React,{Component} from 'react'
import './order.scss'

import {connect} from 'react-redux'

import {Icon} from 'antd';
import * as action from './orderAction'

import Header from '../header/headerComponent'

/*----------------参数-----------*/

var username;
var gid;
var qty;

/*----------------------*/
class OrderComponent extends Component{
    state = {
        text:'我的订单',
        total:this.props.router.location.state.total,
        orderId:''
    }
    componentWillMount(){
        gid = this.props.router.location.state.gid;
        qty = this.props.router.location.state.allqty;
        // total = this.props.router.location.state.total ;
        username = window.sessionStorage.getItem('username');
        console.log(this.state.total,qty,gid)
    }
    nopay(){
        // var gid = [1,2,3];
        // var qty = [3,4,5];
        // var total = 666;
        var uid = window.sessionStorage.getItem('userId');

        // var goods = [{gid:gid,qty:2,total:2000},{gid:3,qty:9,total:2000}];
        this.props.myorder(uid,gid.join(','),qty.join(','),this.state.total).then((res)=>{
            this.props.router.push({pathname:'nopay'})
        });
    }
    allorder(){
        var gid = 3;
        var oid = 58;
        this.props.delorder(gid,oid);
    }
    gotopay(){
        var uid = window.sessionStorage.getItem('userId');
        this.props.myorder(uid,gid.join(','),qty.join(','),this.state.total).then((res)=>{
            console.log(res.results[0].orderid)
            this.setState({orderId:res.results[0].orderid});
            this.props.router.push({
                pathname:'pay',
                state:{
                    total:this.state.total,
                    gid:gid,
                    allqty:qty,
                    orderId:this.state.orderId
                }
            })
        });
       
        // this.props.router.push({
        //     pathname:'pay',
        //     state:{
        //         total:this.state.total,
        //         gid:gid,
        //         allqty:qty
        //     }
        // })
    }
    render(){
        var slef = this;
        return (
            <div className="order">
            	 <Header  text = {this.state.text}></Header>
                <main>
					<div className="step1">
                        <p>收货人:<Icon type="user-add" />韦职丽
                        <span><Icon type="mobile" />手机号：{username}</span><Icon type="right" />
                        </p>
                        <p>广东省广州市裕隆公寓</p>
					</div>
                    <div className="step2">
                        <p>下单人:<Icon type="user-add" />李小花<span><Icon type="mobile" />手机号：{username}</span><Icon type="right" /></p>
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
                                <span>￥{this.state.total}</span>
                            </li>
                        </ul>
                    </div>
                </main>
                <footer>
                    <div className="footer">
                        <p>实付款：<span className="total">￥{this.state.total}</span></p>
                        <p><span className="btn_total" onClick={()=>slef.gotopay()}>去结算</span></p>
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