import React,{Component} from 'react'
import {connect} from 'react-redux'
import './register.scss'
import {Icon} from 'antd';
import * as action from './registerAction'
import Header from '../header/headerComponent'
class RegisterComponent extends Component{
    // componentWillMount(){
    //         console.log(this.props.randomCode()) 
    // }
    state = {
        phone:'',
        pwd:'',
        text:'注册'
    }
    //验证码判断
    codeCheck(event){
        
    }
    //手机号判断  
    telCheck(event){
       
        this.tel=event.target.value  
        var reg=/^1[34578]\d{9}$/;  
        if(!reg.test(this.tel)){  
            this.setState({  
               phone:"请输入正确的手机号"  
            })  
            return;
        }else{  
            this.setState({  
                phone:"" 
            })  
        }  
        this.props.verify(this.refs.username.value).then((res)=>{
            if(res.results.length == 0){
                this.setState({
                    phone:''
                })
            }else{
                this.setState({
                    phone:'此手机号已存在！'
                })
            }
        })   
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
    //注册
    register(event){
        this.props.register(this.refs.username.value,this.refs.password.value).then((res)=>{
            if(this.refs.username.value == '' || this.refs.password.value == ''){
                alert('您还未填写注册信息！');
            }else{
            console.log(666);
                this.props.router.push({
                    pathname:'login'
                })
            }
        })
    }
    render(){
        return (
            <div className="register">
                <Header  text = {this.state.text}></Header>
                <main>
                    <div className="content">
                        <nav className="menus">
                            <span>手机注册</span>
                            <span>邮箱注册</span>
                        </nav>
                        <div className="login_mc">
                            <div className="l_mc_num">
                                <input type="number" ref='username' placeholder="请输入手机号" onBlur={(event)=>this.telCheck(event)}/>
                                <p>{this.state.phone}</p>
                            </div> 
                            <div className="l_mc_code">
                                <input type="number" placeholder="请输入验证码"/>
                                <span>dsfs</span>
                            </div> 
                            <div className="l_mc_pwd">
                                <input type="number" ref='password' placeholder="请设置密码" onBlur={(event)=>this.passwordCheck(event)}/>
                                <p>{this.state.pwd}</p>
                            </div>
                            <div className="l_mc_msg">
                                <input type="number" placeholder="请输入手机验证码" />
                                <span>获取短信验证码</span>
                            </div>
                            <div className="sub_btn">
                                <input type="submit" value="下一步" onClick={(event)=>this.register(event)}/>
                            </div>
                        </div>
                        <div className="links">
                            <span>找回密码</span>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
   
    return {
        ajaxStatus:state.register.status,
        ajaxResult:state.register.result|| []
    }
}

export default connect(mapStateToProps,action)(RegisterComponent);