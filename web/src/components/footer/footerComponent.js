import React,{Component} from 'react'
import './footer.scss'
import {Icon} from 'antd';
import { Grid } from 'antd-mobile';


 class FooterComponent extends Component{
    render(){
        return(
    		<footer className="idxfooter">
    			<ul>
    				<li><Icon className="icon_footer" type="home" /><a>首页</a></li>
    				<li><Icon className="icon_footer" type="shop" /><a>分类</a></li>
    				<li><Icon className="icon_footer" type="shopping-cart" /><a>购物车</a></li>
    				<li><Icon className="icon_footer" type="user" /><a>我的</a></li>
    			</ul>
    		</footer>
        )
    }
}

export default FooterComponent;