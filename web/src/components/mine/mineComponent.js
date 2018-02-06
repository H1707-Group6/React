import React,{Component} from 'react'
import './mine.scss'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import * as action from './mineAction'
var uid;
class OrderComponent extends Component{
        state = {
            text:''
        }
        componentWillMount(){
            uid = window.sessionStorage.getItem('userId');
            if(uid){
                this.setState({
                    text:'登入成功'
                })
            }else{
                this.setState({
                    text:'登入/注册'
                })
            }
        }
        //跳转到订单
        genorder(){
            this.props.genorder(uid).then((res)=>{
                console.log(res);
            });
        }
        //跳转到登入
        gotoLogin(){
            if(uid){
                this.setState({
                    text:''
                })
            }else{
                this.props.router.push({
                    pathname:'login'
                })  
            } 
        }
      render(){
        return (
            <div className="mine">
            	<div className="user_info">
            		<img src="https://img02.hua.com/m/member/center/backgroundv3.png"/>
            		<div className="header_bar">
            			<Icon type="left" />
            		</div>
            		<div className="no_login">
            			<p>Hi,欢迎来到花礼网</p>
            			<span onClick={this.gotoLogin.bind(this)}>{this.state.text}</span>
            		</div>
            		<div className="top_bar">
            			<ul>
            				<li>
          						<Icon type="wallet" />
            					<p>待付款</p>
            				</li>
            				<li>
          						<Icon type="car" />
            					<p>今日配送</p>
            				</li>
            				<li>
          						<Icon type="form" />
            					<p>待评价</p>
            				</li>
            				<li onClick={()=>this.genorder()}>
          						<Icon type="solution" />
            					<p>全部订单</p>
            				</li>
            			</ul>
            		</div>
            		<div className="link_box">
            			<ul>
            				<li>
            					<Icon type="printer" />
            					<p>优惠卷</p>
            				</li>
            				<li>
            					<Icon type="codepen" />
            					<p>积分</p>
            				</li>
            				<li>
            					<Icon type="clock-circle" />
            					<p>生日/纪念日提醒</p>
            				</li>
            				<li>
            					<Icon type="star-o" />
            					<p>我的收藏</p>
            				</li>
            				<li>
            					<Icon type="alipay-circle" />
            					<p>在线付款</p>
            				</li>
            				<li>
            					<Icon type="customer-service" />
            					<p>联系客服</p>
            				</li>
            				<li>
            					<Icon type="question-circle" />
            					<p>帮助</p>
            				</li>
            				<li>
            					<Icon type="info-circle-o" />
            					<p>关于花礼</p>
            				</li>
            			</ul>
            		</div>
            		<div className="account">
            			<span>账户管理</span>
            			<span>
            				<span>管理收货地址等</span>
            				<Icon type="right" />
            			</span>
            		</div>
            		<div className="banner">
            			<img src="//img02.hua.com/m/member/center/banner@2x.png" />
            		</div>
            	</div>
            </div>
        )
      }
}
let mapStateToProps = (state)=>{
   
    return {
        ajaxStatus:state.login.status,
        ajaxResult:state.login.result|| []
    }
}

export default connect (mapStateToProps,action)(OrderComponent);