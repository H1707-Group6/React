import React,{Component} from 'react'
import './footer.scss'
import {Icon} from 'antd'
import { Grid } from 'antd-mobile'
import {Link} from 'react-router'

 class FooterComponent extends Component{
    state={

    }
    render(){
        return(
    		<footer className="idxfooter">
    			<ul>
    				<a href="/"><li><Icon className="icon_footer" type="home" /><p>首页</p></li></a>
    				<a href="#/classify"><li><Icon className="icon_footer" type="shop" /><p>分类</p></li></a>
    				<a href="#/cart"><li><Icon className="icon_footer" type="shopping-cart" /><p>购物车</p></li></a>
    				<a href="#/mine"><li><Icon className="icon_footer" type="user" /><p>我的</p></li></a>
    			</ul>
    		</footer>
        )
    }
}

export default FooterComponent;