import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import * as action from './allorderAction'
import './allorder.scss'
import Header from '../header/headerComponent'
var uid;

class AllorderComponent extends Component{
    state = {
        text:'全部订单'
    }
    componentWillMount(){
        uid = window.sessionStorage.getItem('userId');

        this.props.allorder(uid);
    }
    Del(event,gid,orderid){
        
        this.props.delorder(uid,gid,orderid);
    }
    render(){
        var self = this;
        return (
            <div className="allorder">
               <Header  text = {this.state.text}></Header>
                <main>
                    <div className="spmc">
                        {
                            this.props.ajaxResult.map(function(item,index){
                                if(item.status =='0'){
                                    item.cc= '未支付'
                                }else{
                                    item.cc = '已支付'

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
                                        <div className="btn_del" onClick={(event)=>self.Del(event,item.gid,item.orderid)}>
                                            <span>删除</span>
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

    return {
        ajaxStatus:state.allorder.status,
        ajaxResult:state.allorder.result|| []
    }
}

export default connect (mapStateToProps,action)(AllorderComponent);