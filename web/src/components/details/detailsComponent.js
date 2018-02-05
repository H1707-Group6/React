import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Icon } from 'antd';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';



import * as action from './detailsAction'

// import { Button } from 'antd-mobile';


import './details.scss'


class GoodslistComponent extends Component{

    state = { 
        imgHeight: 800,
        slideIndex: 0,
    }
    componentDidMount() {
        setTimeout(() => {
        }, 100);
    }
    componentWillMount(){
        var key = this.props.router.location.state.gid
        this.props.getDetails(key)
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
                            return <div key={iten.id}>
                                        <Carousel className="space-carousel" className = 'details_img'
                                            slideWidth={1}
                                            autoplay
                                            infinite
                                            beforeChange={(from, to) =>(`slide from ${from} to ${to}`)}
                                           
                                        >
                                            {iten.detailsimg.split(',').map((val, index) => (
                                                    <a key={index}
                                                      style={{
                                                        display: 'block', 
                                                        height:700
                                                      }}
                                                    >
                                                    <img
                                                        src={val}
                                                        style={{ width: '80%'}}
                                                        onLoad={() => {
                                                          window.dispatchEvent(new Event('resize'));
                                                        }}
                                                    />
                                                    </a>
                                            ))}
                                        </Carousel>
                                        <p className = 'title'>
                                            {iten.title}
                                            <Icon type="heart-o" />
                                        </p>
                                        <p className = 'price'><span>￥{iten.saleprice}</span><span>￥{iten.price}</span></p>
                                        <p><span className = 'details_type'>颜色：</span><span className='datails_cent'>{iten.color}</span></p>
                                        <p><span className = 'details_type'>配送：</span><span className='datails_cent'>全国</span></p>
                                        <p><span className = 'details_type'>附送：</span><span className='datails_cent'>下单填写留言，即免费赠送精美贺卡！</span></p>
                                        <p><span className = 'details_type'>说明：</span><span className='datails_cent'>2.14情人节特别定制款</span></p>
                                        <div className = 'Order evaluation'>
                                        <p><span>订单评价</span><span><i>{}</i>条评论<Icon type="right" /></span></p>
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
                            <li><Icon type="shopping-cart" /><span>购物车</span></li>
                        </ul>
                    </p>
                    <p>
                        <span>加入购物车</span>
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
        ajaxResult:state.details.result|| []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)