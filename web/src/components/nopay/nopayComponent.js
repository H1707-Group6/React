import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import * as action from './nopayAction'
import './nopay.scss'
var uid;
class NopayComponent extends Component{
    componentWillMount(){
        uid = window.sessionStorage.getItem('userId');
        
        this.props.nopay(uid).then((res)=>{
            
        });
    }
    render(){
        return (
            <div className="nopay">
                <header></header>
                <main>
                    <div className="spmc">
                        {
                            this.props.ajaxResult.map(function(item,index){
                                return <ul key={index}>
                                   <li>
                                        <div className="spmc_img"><img src={item.mainimg}/></div>
                                        <div className="spmc_content">
                                            <p>订单号：<span>{item.orderid}</span></p>
                                            <p>订单金额：<span>{item.price}</span>元</p>
                                            <p>订单状态：<span>{item.status}</span></p>
                                            <p>收货人：<span>{item.uid}</span></p>
                                            <p>配送时间：<span>{item.date}</span></p>
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
console.log(state.nopay.result);
    return {
        ajaxStatus:state.nopay.status,
        ajaxResult:state.nopay.result|| []
    }
}

export default connect (mapStateToProps,action)(NopayComponent);