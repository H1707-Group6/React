import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './cartAction'

import './cart.scss'
import Header from '../header/headerComponent'

let goodsids = [];
let allqty = [];
let onePrice =[];
let uid;
let username;
let cartlist =[];
 // this.props.getCartList();
class CartComponent extends Component {
    componentWillMount(){
        uid  = window.sessionStorage.getItem('userId');
       
        username = window.sessionStorage.getItem('username');
        this.props.getCart(uid).then((res)=>{
            cartlist = res.results;
       });
    }
    state = {
        text:'购物车',
        total:0       
    }

    goPay(){ 
    
            this.props.router.push({
                pathname:'order',
                state:{
                    total:this.state.total,
                    gid:goodsids,
                    allqty:allqty
                }
            })

    }
    updatas(event,idx){
       if(event.target.innerText =='+'){
        cartlist[idx][0].qty = ++ event.target.parentNode.children[1].innerText ;
        }else if(event.target.innerText =='-'){
            cartlist[idx][0].qty = --event.target.parentNode.children[1].innerText ;
            if( cartlist[idx][0].qty<=1){
                 cartlist[idx][0].qty = event.target.parentNode.children[1].innerText = 1;
            }
           
        }
        var checks = document.querySelectorAll('.checks');
        var oneprice =0;
        for(var i =0; i<checks.length;i++){
            if(checks[i].checked){
                allqty.splice(allqty.indexOf(allqty[i]),1,cartlist[i][0].qty)
                oneprice  += Number(cartlist[i][0].qty*cartlist[i][0].saleprice) ;
        
            }
        }
      
        this.setState({total:oneprice})
    }
    selectItem(event,gid,idx){ 
        var checks = document.querySelectorAll('.checks');
        var oneprice =0;
        for(var i =0; i<checks.length;i++){
            if(checks[i].checked){
                
                oneprice  += Number(cartlist[i][0].qty*cartlist[i][0].saleprice);
            }
        }

        this.setState({total:oneprice});

        if(event.target.checked){
            if(goodsids.indexOf(gid) < 0){
                goodsids.push(gid)
            }
            if(allqty.indexOf(cartlist[idx][0].qty) < 0){
                allqty.push(cartlist[idx][0].qty)
            } 
           
                         
        }else{
            if(goodsids.indexOf(gid) > - 1){
                goodsids.splice(goodsids.indexOf(gid), 1)
            } 
            if(allqty.indexOf(cartlist[idx][0].qty) >-1){
                allqty.splice(allqty.indexOf(cartlist[idx][0].qty),1)
            } 
                           
        }
        console.log(goodsids,allqty)
    }
    del(event,gid){

        // console.log(66,gid,uid)
        this.props.del(gid,uid)
    }
    render(){
        return (   
            <div className='cart_f'>
                <div className = 'cart_h'><Header text = {this.state.text}></Header></div>
                <div className = 'cart_fm'>
                    {
                        this.props.cartList.map((item,index) => {
                            if(typeof(item[0].title) =='string'){
                                item[0].title = item[0].title.split('----');
                            }
                            return (
                                <ul key={item[0].id} className = 'cart_table'>
                                    <li>
                                        <div className = 'cart_table1'><input type="checkbox"   className = 'checks' onClick={(event)=>this.selectItem(event,item[0].id,index)}/></div>
                                        <div className = 'cart_table2'><img src = {item[0].mainimg}/></div>
                                        <div className = 'cart_table3'>
                                            <p>{item[0].title[0]}</p>
                                            <p>{item[0].title[1]}</p>
                                            <p><span>{item[0].saleprice}</span><i className ='goods_qty'  onClick = {(event)=>this.updatas(event,index)}><span>-</span><span className = 'goodsqty'>{item[0].qty}</span><span>+</span></i><span onClick={(event)=>this.del(event,item[0].id)}>删除</span></p>
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
                        <span>合计：<i>￥{this.state.total}</i></span>
                        </li>
                        <li onClick ={(event)=>this.goPay(event)}>
                            <span>去结算</span>
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
                        arr[i][0].onePrice =arr[i][0].saleprice* arr[i][0].qty;
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
