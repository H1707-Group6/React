import React,{Component} from 'react'
import {connect} from 'react-redux'
import Footer from '../footer/footerComponent'
import Tabs from './tabsComponent'

import './home.scss'
import {Icon} from 'antd';
import { Grid ,Carousel} from 'antd-mobile';
import * as action from './homeAction';

var res = [];
 class HomeComponent extends Component{

    componentWillMount(){
        
        var keyword = ['鲜花','永生花','礼品'];
        for(let i=0;i<keyword.length;i++){

            this.props.getHotgoods(keyword[i]);
        }
    }
    state = {
        data: ['./src/assets/imgs/banner/banner1.jpg', 
                './src/assets/imgs/banner/banner4.jpg',
                './src/assets/imgs/banner/banner9.jpg'],
        imgHeight: 360,
        slideIndex: 0,

        iconImg:['./src/assets/imgs/other/icon001.png',
                './src/assets/imgs/other/icon002.png',
                './src/assets/imgs/other/icon003.png',
                './src/assets/imgs/other/icon004.png',
                './src/assets/imgs/other/icon005.png'],
        text:['鲜花','永生花','蛋糕','礼品','巧克力'],

        cate:[  './src/assets/imgs/other/cate001.png',
                './src/assets/imgs/other/cate002.png',
                './src/assets/imgs/other/cate003.png',
                './src/assets/imgs/other/cate004.png'],
        catetext:['爱情鲜花','友情鲜花','送长辈鲜花','商务鲜花'],
    }
    componentDidMount(){

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
                        <li><Icon type="search" className="homet_search"/>
                            <input type="text" placeholder="情人节鲜花" />
                        </li>
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
                            afterChange={index => console.log('slide to', index)} >
                                {this.state.data.map(val => (
                                    <a
                                      key={val}
                                      href="#/goodslist"
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
                    <ul className="main02_caption">
                        <li style={{width:'25%'}}>· 认证龙头企业</li>
                        <li style={{width:'21%'}}>· 12年品牌</li>
                        <li style={{width:'21%'}}>· 3小时送达</li>
                        <li style={{width:'33%'}}>· 最近<a style={{textDecoration: 'underline'}} href="#" id="pjCount">236335</a>条好评</li>
                    </ul>
                    <ul className="main03_classify">
                        {this.state.iconImg.map( (val,index) =>(
                            <li  key={val}>
                                <img src={val} 
                                    href="#/goodslist"
                                />
                                <span>{this.state.text[index] }</span>
                            </li>

                        ))}
                    </ul>
                    <div className="main04_category">
                        {this.state.cate.map((val,index)=>(
                            <a key={val}>
                                <img src={val} 
                                    href="#/goodslist"/>
                                <p>{this.state.catetext[index]}</p>
                            </a>
                            ))}
                    </div>
                    <div className="featured">
                        <div className="title">
                            <div className="title_line"></div>
                            <p className="title_name">热销鲜花</p>
                        </div>
                    </div>
                    <div className="main05_fea_list">
                        <ul>
                        {
                            this.props.ajaxResult()[0].map((item,index)=>{
                                var titles = item.title.split('----');

                                return <li key={item.id}>
                                            <div className="pro_box">
                                                <a href="#/goodslist">
                                                    <img src={item.mainimg} />
                                                    <div className="pro_text">
                                                        <p className="pro_name">鲜花/{titles[0]}</p>
                                                        <p className="pro_detail">{titles[1]}</p>
                                                        <p className="pro_price">￥{item.price}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        
                            })
                        }
                        </ul>

                        <div >
                            <a href="#/goodslist" className="more_btn">
                            全部鲜花<span className="arrow_right"></span></a>
                        </div>
                    </div>
                    <div className="featured">
                        <div className="title">
                            <div className="title_line"></div>
                            <p className="title_name">热销永生花</p>
                        </div>
                    </div>
                    <div className="main05_fea_list">
                        <ul>
                        {
                            this.props.ajaxResult()[1].map((item,index)=>{
                                var titles = item.title.split('----');

                                return <li key={item.id}>
                                            <div className="pro_box">
                                                <a href="#/goodslist">
                                                    <img src={item.mainimg} />
                                                    <div className="pro_text">
                                                        <p className="pro_name">鲜花/{titles[0]}</p>
                                                        <p className="pro_detail">{titles[1]}</p>
                                                        <p className="pro_price">￥{item.price}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        
                            })
                        }
                        </ul>

                        <div >
                            <a href="#/goodslist" className="more_btn">
                            全部永生花<span className="arrow_right"></span></a>
                        </div>
                    </div>
                    <div className="featured">
                        <div className="title">
                            <div className="title_line"></div>
                            <p className="title_name">热销礼品</p>
                        </div>
                    </div>
                    <div className="main05_fea_list">
                        <ul>
                        {
                            this.props.ajaxResult()[2].map((item,index)=>{
                                var titles = item.title.split('----');

                                return <li key={item.id}>
                                            <div className="pro_box">
                                                <a href="#/goodslist">
                                                    <img src={item.mainimg} />
                                                    <div className="pro_text">
                                                        <p className="pro_name">鲜花/{titles[0]}</p>
                                                        <p className="pro_detail">{titles[1]}</p>
                                                        <p className="pro_price">￥{item.price}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        
                            })
                        }
                        </ul>

                        <div >
                            <a href="#/goodslist" className="more_btn">
                            全部礼品<span className="arrow_right"></span></a>
                        </div>
                    </div>

                    <Tabs/>
                    
                    <div className="login_help">
                        <ul className="user_login">
                            <li><a href="#">花语大全</a></li>
                            <li><a href="#">查单</a></li>
                            <li><a href="#">关于我们</a></li>
                        </ul>
                    </div>
                    <div className="platform">
                        <dl>
                            <dt><a href="#" rel="nofollow"><img src="./src/assets/imgs/other/icon-phone.png" alt="mobile" /></a></dt>
                        </dl>
                        <dl>
                            <dt><a id="kefu" href="#"><img src="./src/assets/imgs/other/icon-kefu.png" alt="客服" /></a></dt>
                        </dl>
                    </div>
                    <div className="copyright">Copyright @ 2005~2018 花礼网(中国鲜花礼品网) 版权所有<br/>中国鲜花网领先品牌，鲜花速递专家！</div>
                </div>

            	<div className="home_f">
                    <Footer/>
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state)=>{
    if(state.home.status == 1){
        res.push(state.home.result);
    }
    // console.log(res);
    return {
        ajaxStatus:state.home.status,
        ajaxResult:function(){
            if(res.length == 3){
                return res;
            }else{
                return [[],[],[]];
            }
        }
    }
}

export default connect (mapStateToProps,action)(HomeComponent)