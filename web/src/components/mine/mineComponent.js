import React,{Component} from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import * as action from './mineAction'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
var uid;
var self = this;
const alert = Modal.alert;
// const showAlert = () => {
//   const alertInstance = alert('退出登入', '你确定要退出吗?', [
//     { text: '关闭', onPress: () => {style: 'default'} },
//     { text: '确定', onPress: () => {window.sessionStorage.removeItem('userId'),slef.props.router.push({ pathname:'login'})}},
//   ]);
//   setTimeout(() => {
//     // 可以调用close方法以在外部close  onpres:function(){}
//     console.log('auto close');
//     alertInstance.close();
//   }, 500000);
// };
import './mine.scss'
class MineComponent extends Component{
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
        gotoAllorder(){
            this.props.router.push({
                pathname:'allorder'
            })
        }
        //跳到未付款订单
        gotonopay(){
            this.props.router.push({
                    pathname:'nopay'
                })
            }
        //跳转到登入
        gotoLogin(){
            if(uid){
                this.setState({
                    text:'登入成功'
                })
            }else{
                this.props.router.push({
                    pathname:'login'
                })  
            } 
        }
        //调到home页面
        gotohome(){
            this.props.router.push({
                pathname:'/'
            })
        }
      render(){
        return (
            <div className="mine">
            	<div className="user_info">
            		<img src="https://img02.hua.com/m/member/center/backgroundv3.png"/>
            		<div className="header_bar">
            			<Icon type="left" onClick={()=>this.gotohome()}/>
                        
                        <Icon type="setting"  
                            
                                onClick={() => {if(uid != null){
                                    alert('退出登入', '你确定要退出吗？', [
                                        { text: '关闭', onPress: () => console.log('关闭') },
                                        {
                                        text: '确定',
                                        onPress: () => new Promise((resolve) => {
                                            window.sessionStorage.removeItem('userId');
                                            this.props.router.push({ pathname:'login'});
                                            Toast.info('退出成功', 1);
                                            setTimeout(resolve, 100);
                                        }),
                                      },
                                    ])}
                                }
                            }
                      
                        />
            		</div>
            		<div className="no_login" onClick={()=>this.gotoLogin()}>
            			<p>Hi,欢迎来到花礼网</p>
            			<span>{this.state.text}</span>
            		</div>
            		<div className="top_bar">
            			<ul>
            				<li onClick={()=>this.gotonopay()}>
          						<Icon type="wallet" />
            					<p>待付款</p>
                                <span>{}</span>
            				</li>
            				<li>
          						<Icon type="car" />
            					<p>今日配送</p>
            				</li>
            				<li>
          						<Icon type="form" />
            					<p>待评价</p>
            				</li>
            				<li onClick={()=>this.gotoAllorder()}>
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
        ajaxStatus:state.mine.status,
        ajaxResult:state.mine.result|| []
    }
}

export default connect (mapStateToProps,action)(MineComponent);