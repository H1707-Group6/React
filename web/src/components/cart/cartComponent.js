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
       });
    }
    state = {
        text:'购物车',
        Allcart:''
   
    }
    genOrder(){
        this.props.genOrder(cartids.join(','), goodsids.join(',')).then( (res) => {
            this.props.getCartList();
        })
    }
    updata(event){
        if(event.target.innerText =='+'){
            event.target.parentNode.children[1].innerText++;
          
        }else if(event.target.innerText =='-'){
            event.target.parentNode.children[1].innerText--;
            if(event.target.parentNode.children[1].innerText<=1){
                event.target.parentNode.children[1].innerText=1;
            }
        }
    }
    selectItem(gid, event){
       
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
                            item[0].title=item[0].title.split('----');
                            return (
                                <ul key={item[0].id} className = 'cart_table'>
                                    <li>
                                        <div className = 'cart_table1'><input type="checkbox" onClick={this.selectItem.bind(this, item[0].id)}/></div>
                                        <div className = 'cart_table2'><img src = {item[0].mainimg}/></div>
                                        <div className = 'cart_table3'>
                                            <p>{item[0].title[0]}</p>
                                            <p>{item[0].title[1]}</p>
                                            <p><span>{item[0].saleprice}</span><i className = 'goods_qty' onClick = {(event)=> this.updata(event)}><span>-</span><span>{item[0].qty}</span><span>+</span></i><span>删除</span></p>
                                        </div>
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
    var carts = [];
    if(state.cart.status =='1'){
        carts = state.cart.result;
        carts.forEach((iten)=>{
            iten[0].qty = 1;
        })
        goodsQty(carts);
        function goodsQty(arr){
            for(var i = 0;i < arr.length;i++){
                for(var j = i+1;j < arr.length;j++){
                    if(arr[i][0].id == arr[j][0].id){
                        arr[i][0].qty++;
                        arr.splice(j,1);
                        goodsQty(arr);
                    }
                }
            }
            return arr;
        }  
    }
    return {
        cartList: state.cart.result || [],
        
    }
}

export default connect(mapStateToProps, actions)(CartComponent);
 //<input type="button" value="一键下单" onClick={this.genOrder.bind(this)}/>
 //cartList: state.cart.result || []