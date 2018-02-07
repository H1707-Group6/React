import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './cartAction'

import './cart.scss'
import Header from '../header/headerComponent'

let goodsids = [];
let onePrice =[];

let cartlist =[];
 // this.props.getCartList();
class CartComponent extends Component {
    componentWillMount(){
        this.props.getCart().then((res)=>{
            cartlist = res.results;

       });
    }
    states = {
        total : 0,
    }
    state = {
        text:'购物车',
        total:0,
       
        
    }

    genOrder(){
        this.props.genOrder(cartids.join(','), goodsids.join(',')).then( (res) => {
            this.props.getCartList();
        })
    }
    updatas(event,idx){
        // var checks = document.querySelectorAll('.checks');
        // var f_checks = this.props.check(checks);
        // console.log(this)
        this.props.updata(event,idx, cartlist);
        

    }
    // updatas(event,idx){
    //    if(event.target.innerText =='+'){
    //     cartlist[idx][0].qty = ++ event.target.parentNode.children[1].innerText ;
    //     s
    //     // this.total += Number(onePrice)
    //     }else if(event.target.innerText =='-'){
    //         cartlist[idx][0].qty = --event.target.parentNode.children[1].innerText ;
    //         if( cartlist[idx][0].qty<=1){
    //              cartlist[idx][0].qty = event.target.parentNode.children[1].innerText = 1;
    //         }
           
    //     }
    //     var checks = document.querySelectorAll('.checks');

    // }

    // check(){
    //     var checks = document.querySelectorAll('.checks');
    //     this.props.check(checks);
    // }
    selectItem(event,gid,idx){ 
        console.log(this)
        // console.log(this.states)
        // this.state.check();
        // console.log(total)
        // console.log(this.state.total) 
        if(event.target.checked){

            // this.state.updata(event,idx,all)
            
            
            // console.log(cartlist[idx][0].qty*cartlist[idx][0].saleprice)
            // console.log(gid,cart)
            // console.log(this.state.total)
            // this.state.updata(event,price)  console.log(cartlist[idx][0].onePrice)
          
            // this.setState({total: this.state.total += onePrice})
            // console.log(event.target.parentNode.nextSibling.nextSibling.children[2].children[1].children[1].innerText)
            if(goodsids.indexOf(gid) < 0){
                goodsids.push(gid)
            }            
        } else {
            // total -= onePrice;
            // this.setState({total: this.state.total-= onePrice})
            if(goodsids.indexOf(gid) > - 1){
                goodsids.splice(goodsids.indexOf(gid), 1)
            }                
        } 
        // console.log(this.state.total)

  
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
                                            <p><span>{item[0].saleprice}</span><i className ='goods_qty'  onClick = {(event)=>this.updatas(event,index)}><span>-</span><span className = 'goodsqty'>{item[0].qty}</span><span>+</span></i><span>删除</span></p>
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
                        <span>合计：<i>￥{this.states.total}</i></span>
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
 //<input type="button" value="一键下单" onClick={this.genOrder.bind(this)}/>
 //cartList: state.cart.result || []
 //
 //
 // updata:function(event,idx){
 //            console.log(this)
 //            if(event.target.innerText =='+'){
 //                cartlist[idx][0].qty = ++ event.target.parentNode.children[1].innerText ;
                
 //                // this.total += Number(onePrice)
 //            }else if(event.target.innerText =='-'){
 //                cartlist[idx][0].qty = --event.target.parentNode.children[1].innerText ;
 //                if( cartlist[idx][0].qty<=1){
 //                     cartlist[idx][0].qty = event.target.parentNode.children[1].innerText = 1;
 //                }
               
 //            }
 //            // cartlist[idx][0].onePrice =  cartlist[idx][0].qty*cartlist[idx][0].saleprice;
 //            this.check();

 //            // this.total = onePrice;
 //            // // setState({total:})
 //            // return this.total;
 //        },