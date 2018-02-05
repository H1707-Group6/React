import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './cartAction'

let cartids = [];
let goodsids = [];

class CartComponent extends Component {
    componentWillMount(){
        this.props.getCartList();
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
            <div>
                {
                    this.props.cartList.map((item) => {
                        return (
                            <ul key={item.indexid}>
                                <li>
                                    <input type="checkbox" onClick={this.selectItem.bind(this, item.indexid, item.gid)}/>
                                    <p>{item.name}</p>
                                    <img src={item.smallImage.split(',')[0]} />
                                </li>
                            </ul>
                        )
                    })
                }
                <ul>
                    <li>
                        <input type="button" value="一键下单" onClick={this.genOrder.bind(this)}/>
                    </li>
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cartList: state.cart.result || []
    }
}

export default connect(mapStateToProps, actions)(CartComponent);