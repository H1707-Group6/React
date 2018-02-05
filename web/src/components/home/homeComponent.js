import React,{Component} from 'react'
import Footer from '../footer/footerComponent'

import './home.scss'
import {Icon} from 'antd';
import { Grid ,Carousel} from 'antd-mobile';


export default class HomeComponent extends Component{
     state = {
        data: ['./src/assets/imgs/banner/banner1.jpg', './src/assets/imgs/banner/banner4.jpg', './src/assets/imgs/banner/banner9.jpg'],
        imgHeight: 360,
        slideIndex: 0,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
        }, 100);
      }
    render(){
        return(

            <div className = "home">
                <div className="home_h">
                    <ul>
                        <li><i className="home_logo"></i></li>
                        <li><Icon type="search" className="homet_search"/><input type="text" placeholder="情人节鲜花" /></li>
                        <li><a>登录</a></li>
                    </ul>
                </div>
                <div className="home_m">
                    <div className="h_banner">
                       <Carousel
                            autoplay
                            infinite
                            selectedIndex={1}
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}>
                                {this.state.data.map(val => (
                                    <a
                                      key={val}
                                      href="http://localhost:3002/#/goodslist"
                                      style={{ display: 'inline-block', width: '100%', height:'4.8rem', overflow:'hidden',
                                            position:'relative'}}
                                    >
                                        <img
                                        src={val}
                                        alt=""
                                        style={{ width: '12.666667rem', height:'4.8rem',verticalAlign: 'top',
                                                position:'absolute',top:'0',left:'-1.333333rem'
                                                }}
                                        onLoad={() => {

                                          window.dispatchEvent(new Event('resize'));
                                          this.setState({ imgHeight: 'auto' });
                                        }}/>
                                    </a>
                            ))}
                        </Carousel>
                    </div>
                    <ul className="main_caption">
                        <li style={{width:'25%'}}>· 认证龙头企业</li>
                        <li style={{width:'21%'}}>· 12年品牌</li>
                        <li style={{width:'21%'}}>· 3小时送达</li>
                        <li style={{width:'33%'}}>· 最近<a style={{textDecoration: 'underline'}} href="#" id="pjCount">236335</a>条好评</li>
                    </ul>
                </div>
            	<div className="home_f">
                    <Footer/>
                </div>
            </div>
        )
    }
}

