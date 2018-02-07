import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Icon } from 'antd';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import {hashHistory} from 'react-router'
// import {Link} from 'react-router';

import * as action from './detailsAction'

// import { Button } from 'antd-mobile';


import './details.scss'

var key = '';
sessionStorage.setItem('userId', 2);

var username = '';
class GoodslistComponent extends Component{
    state = { 
        imgHeight: 800,
        slideIndex: 0,
    }
    componentWillMount(){
        key = this.props.router.location.state.gid ||sessionStorage.getItem('gid');
        
        username = sessionStorage.getItem('userId');
        this.props.getDetails(key)
    }
    addCart(){
        this.props.addCart(key,username)
    }
    goCart(){
        // console.log(this.props.router.go('cart'))
       hashHistory.push('cart');
    }
    render(){
        return(
            <div className='details_f'>
                <div className = 'details_fh'>
                    <Icon type="left" />
                    <Icon type="home" />
                </div>
                <div className = 'details_fm'>
                    {
                        this.props.ajaxResult.map((iten)=>{
                            if(typeof(iten.detailsimg)=='string'){
                                   iten.detailsimg = iten.detailsimg.split(',')
                                   console.log(iten.detailsimg)
                                }else{
                                    iten.detailsimg = iten.detailsimg
                                    console.log(iten.detailsimg)
                            }  
                            return <div key={iten.id}>
                                    <Carousel className="space-carousel" className = 'details_img'
                                        autoplay
                                        infinite
                                        beforeChange={(from, to) =>(`slide from ${from} to ${to}`)}
                                    >   
                                        {   
                                           
                                            iten.detailsimg.map((val, index) => (
                                                <a key={index}
                                                  style={{
                                                    display: 'block', 
                                                    height:700
                                                  }}
                                                >
                                                <img src={val} style={{ width: '80%'}}/>
                                                </a>
                                            ))
                                        }
                                    </Carousel>
                                    <p className = 'title'>
                                        {iten.title}
                                        <Icon type="heart-o"/>
                                    </p>
                                    <p className = 'price'><span>￥{iten.saleprice}</span><span>￥{iten.price}</span></p>
                                    <p><span className = 'details_type'>颜色：</span><span className='datails_cent'>{iten.color}</span></p>
                                    <p><span className = 'details_type'>配送：</span><span className='datails_cent'>全国</span></p>
                                    <p><span className = 'details_type'>附送：</span><span className='datails_cent'>下单填写留言，即免费赠送精美贺卡！</span></p>
                                    <p><span className = 'details_type'>说明：</span><span className='datails_cent'>2.14情人节特别定制款</span></p>
                                    <div className = 'Order_evaluation'>
                                        <h4><span>订单评价</span><span><i>{11}</i>条评论<Icon type="right" /></span></h4>

                                    </div>
                            </div>
                        })
                    }
                </div>
                <div className = 'details_ff'>
                    <p> 
                        <ul>
                            <li><Icon type="message" /><span>客服</span></li>
                            <li><Icon type="mobile" /><span>手机</span></li>
                            <li onClick = {this.goCart.bind(this)}><Icon type="shopping-cart" /><span>购物车</span></li>
                        </ul>
                    </p>
                    <p>
                        <span onClick = {this.addCart.bind(this)}>加入购物车</span>
                        <span>立即购买</span>
                    </p>
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state)=>{
    // console.log(state.goodslist)
    return {
        ajaxStatus:state.details.status,
        ajaxResult:state.details.results|| []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)