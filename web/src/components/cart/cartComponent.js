import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './cartAction'

import './cart.scss'
import Header from '../header/headerComponent'

let cartids = [];
let goodsids = [];
 // this.props.getCartList();
class CartComponent extends Component {
    componentWillMount(){
        this.props.getCart().then((res)=>{
            res.results.forEach((iten)=>{
                iten[0].goodsqty = 1;
            })
            for(var i = 0;i<res.results.length;i++){
                for(var j = i+1;j <res.results.length;j++){
                    if(res.results[i][0].id == res.results[j][0].id){
                       
                        res.results[i][0].goodsqty++;
                        res.results.splice(j,1);
                    }
                }
            }
            return res;
       });
    }
    state = {
        text:'购物车',
   
    }
    genOrder(){
        this.props.genOrder(cartids.join(','), goodsids.join(',')).then( (res) => {
            this.props.getCartList();
        })
    }

    selectItem(indexid, gid, event){
        if(event.target.checked){
            if(cartids.indexOf(indexid) < 0){
                cartids.push(indexid)
            }
            if(goodsids.indexOf(gid) < 0){
                goodsids.push(gid)
            }            
        } else {
            if(cartids.indexOf(indexid) > -1){
                cartids.splice(cartids.indexOf(indexid), 1)
            }
            if(goodsids.indexOf(gid) > - 1){
                goodsids.splice(goodsids.indexOf(gid), 1)
            }                
        }
        // console.log(cartids, goodsids);
    }

    render(){
        return (   
            <div className='cart_f'>
                <div className = 'cart_h'><Header text = {this.state.text}></Header></div>
                <div className = 'cart_fm'>
               
                    {
                        this.props.cartList.map((item) => {
                            return (
                                <ul key={item[0].id}>
                                    <li>
                                        <input type="checkbox" onClick={this.selectItem.bind(this, item.indexid, item[0].id)}/>

                                        <img src = {item[0].mainimg}/>
                                        <p>{item[0].title}</p>
                                        <p>{item[0].qty}</p>
                                       
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className = 'cart_ff'>
                    <ul>
                        <li>
                        <span>合计：<i>￥168</i></span>
                        </li>
                        <li>
                            <span>去结算(<i>{2}</i>)</span>
                        </li>
                </ul>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.cart.result)
    return {
        cartList: state.cart.result || []
    }
}

export default connect(mapStateToProps, actions)(CartComponent);
 //<input type="button" value="一键下单" onClick={this.genOrder.bind(this)}/>
 //cartList: state.cart.result || []