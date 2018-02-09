import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import * as action from './payAction'
import './pay.scss'
import Header from '../header/headerComponent'
var uid;
var gid;
var qty;


class PayComponent extends Component{
    state = {
        text:'订单支付',
        total:this.props.router.location.state.total,
        orderId:this.props.router.location.state.orderId
    }
    componentWillMount(){
        uid = window.sessionStorage.getItem('userId');
        gid = this.props.router.location.state.gid;
        qty = this.props.router.location.state.allqty;

    }
    goPay(){
        var status =1;
        this.props.payed(uid,this.state.orderId,status)
    }
    render(){
        var self = this;
        return (
            <div className="pay">
                <Header  text = {this.state.text}></Header>
                <main>
                    <div className="pay_order">
                        <p>定单号：<span>{this.state.orderId}</span>金额：<span>￥{this.state.total}</span></p>
                    </div>
                    <ul className="ways">
                        <li>
                            <span className="big"> <Icon type="alipay" /></span>
                           
                            <Icon type="right" />
                        </li>
                        <li>
                            <span className="big"> <Icon type="qq" /></span>
                            
                            <Icon type="right" />
                        </li>
                        <li>
                            <span className="big"> <Icon type="wechat" /></span>
                            
                            <Icon type="right" />
                        </li>
                        
                        <div className="zf">
                            <span onClick = {this.goPay.bind(this)}>支付</span>
                        </div>
                    </ul>
                </main>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
// console.log(state.nopay.result);
    return {
        ajaxStatus:state.pay.status,
        ajaxResult:state.pay.result|| []
    }
}

export default connect (mapStateToProps,action)(PayComponent);