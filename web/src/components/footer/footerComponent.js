import React,{Component} from 'react'
import './footer.scss'
import {Icon} from 'antd'
import { Grid } from 'antd-mobile'
import {Link} from 'react-router'

 class FooterComponent extends Component{
    state={
    }
    colors(){
    }
    render(){
        return(
    		<footer className="idxfooter">
    			<ul >
    				<Link to="/"><li ><Icon className="icon_footer" type="home" /><p>首页</p></li></Link>
    				<Link to="/classify"><li ><Icon className="icon_footer" type="shop" /><p>分类</p></li></Link>
    				<Link to="/cart"><li ><Icon className="icon_footer" type="shopping-cart" /><p>购物车</p></li></Link>
    				<Link to="/mine"><li ><Icon className="icon_footer" type="user" /><p>我的</p></li></Link>
    			</ul>
    		</footer>
        )
    }
}

export default FooterComponent;