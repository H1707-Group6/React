import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import * as action from './nopayAction'
import './nopay.scss'
import Header from '../header/headerComponent'
var uid;

class NopayComponent extends Component{
    state = {
        text:'未支付订单'
    }
    componentWillMount(){
        uid = window.sessionStorage.getItem('userId');
        console.log(uid);
        this.props.nopayorder(uid);
    }
    del(event,gid,orderid){
        console.log(event.target);
        this.props.delorder(uid,gid,orderid);
    }
    render(){
        var self = this;
        return (
            <div className="nopay">
                <Header  text = {this.state.text}></Header>
                <main>
                    <div className="spmc">
                        {
                            this.props.ajaxResult.map(function(item,index){
                                if(item.status =='0'){
                                    item.cc= '未支付'
                                }else{
                                    item.cc = '已经支付'

                                }
                                return <ul key={index}>
                                   <li>
                                        <div className="spmc_img"><img src={item.mainimg}/></div>
                                        <div className="spmc_content">
                                            <p>订单号：<span>{item.orderid}</span></p>
                                            <p>订单金额：<span>{item.price}</span>元</p>
                                            <p>订单状态：<span>{item.cc}</span></p>
                                            <p>收货人：<span>{}</span></p>
                                            <p>配送时间：<span>{item.date}</span></p>
                                        </div>
                                        <div className="btn_del">
                                            <span onClick={(event)=>self.del(event,item.gid,item.orderid)}>删除</span>
                                        </div>
                                   </li>
                                </ul>
                            })
                        }
                    </div>
                </main>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
// console.log(state.nopay.result);
    return {
        ajaxStatus:state.nopay.status,
        ajaxResult:state.nopay.result|| []
    }
}

export default connect (mapStateToProps,action)(NopayComponent);