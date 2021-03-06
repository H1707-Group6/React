import React,{Component} from 'react'
import {connect} from 'react-redux'
import './login.scss'
import '../header/header.scss'
import {Icon} from 'antd';
import * as action from './loginAction'
import Header from '../header/headerComponent'
class LoginComponent extends Component{
    state = {
        phone:'',
        pwd:'',
        imageShow:true,
        show:'',
        text:'登入'
    }
    login(){
        this.props.login(this.refs.username.value,this.refs.password.value).then((res)=>{
            if(res.results.length == 0){
                this.setState({
                    phone:'此帐号未注册！'
                })
            }else if(this.refs.username.value != '' && this.refs.password.value != ''){
                window.sessionStorage.setItem('userId',res.results[0].id);
                window.sessionStorage.setItem('username',this.refs.username.value);
                this.props.router.push({
                    pathname:'/'
                })
            }else if(this.refs.username.value == '' || this.refs.password.value == ''){
                alert('请填写登入账号！');
            }
           
        });
    }
     //手机号判断  
    telCheck(event){  
        this.tel=event.target.value  
        console.log(this.tel)  
        var reg=/^1[34578]\d{9}$/;  
        if(!reg.test(this.tel)){  
            this.setState({  
               phone:"请输入正确的手机号"  
            })  
        }else{  
            this.setState({  
                phone:""  
            })  
        }  
    }    
    //密码判断  
    passwordCheck(event){  
        this.password=event.target.value  
        var reg=/^\w{6,20}$/;  
        if(!reg.test(this.password)){  
            this.setState({  
                pwd:"密码为6-20位数字或字母或下划线!"  
            })  
        }else{  
            this.setState({  
                pwd:""  
            })  
        }  
  
    } 
    //记住密码
    isRemember(){  
        this.setState({  
            imageShow:!this.state.imageShow  
        })  
    } 
    //跳转到注册页面
    goRegister(){
        this.props.router.push({
            pathname:'register'
        })
    }
    godo(){
        // history.go(-1);
        this.props.router.push({
            pathname:'mine'
        })
    }
    render(){
        return (
            <div className="login">
            
                <div className = 'header_f' >
                    <Icon type="left" onClick={this.godo.bind(this)}/>

                    <i>{this.state.title_h}</i>
                <Icon type="menu-unfold" />
            </div>        
                <main>
                    <div className="content_main">     
                        <div className="login_verify">
                            <span>使用手机验证登入</span>
                        </div>
                        <div className="login_content">
                            <div className="login_phone">
                                <input type="text"  ref='username' placeholder="请输入邮箱/手机号" onBlur={(event)=>this.telCheck(event)} />
                                <p>{this.state.phone}</p>
                            </div>
                            <div className="login_pwd">
                                <input type="password"  ref='password'  onBlur={(event)=>this.passwordCheck(event)}/> 
                                <p>{this.state.pwd}</p>
                            </div>
                            <div className="login_choose">
                                <label for="mdr">一个月内免登入
                                    <input type="checkbox" id="mdr" onClick={()=>this.isRemember()}/>
                                </label>
                            </div>
                            <div className="login_btn">
                                <input type="button" value="登入" onClick ={this.login.bind(this)}/>
                            </div>
                            <div className="login_type">
                                <span>
                                    <i></i>
                                    <span onClick={this.goRegister.bind(this)}>快速注册</span>
                                </span>
                                <span>
                                    <i></i>
                                    <span>找回密码</span>
                                </span>
                            </div>
                            <div className="login_other">
                                <span className="line"></span>
                                <span className="text">其他登入方式</span>
                                <span className="line"></span>
                            </div>
                            <div className="login_link">
                                <span>
                                    <p><Icon type="qq" /></p>
                                   
                                    <span>QQ</span>
                                </span>
                                 <span>
                                    <p><Icon type="alipay" /></p>
                                    
                                    <span>支付宝</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
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

export default connect (mapStateToProps,action)(LoginComponent)