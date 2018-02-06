import React,{Component} from 'react'
import './login.scss'
export default class LoginComponent extends Component{
    render(){
        return (
            <div className="login">
                <header></header>
                <main>
                    <div className="content_main">     
                        <div className="login_verify">
                            <a href="#">使用手机验证登入</a>
                        </div>
                        <div className="login_content">
                            <div className="login_phone">
                                <input type="text" placeholder="请输入邮箱/手机号"/> 
                            </div>
                            <div className="login_pwd">
                                <input type="password"/> 
                            </div>
                            <div className="login_choose">
                                <label for="mdr">一个月内免登入
                                    <input type="checkbox" id="mdr" />
                                </label>
                            </div>
                            <div className="login_btn">
                                <input type="button" value="登入"/>
                            </div>
                            <div className="login_type">
                                <span>
                                    <i></i>
                                    <a href="#">快速注册</a>
                                </span>
                                <span>
                                    <i></i>
                                    <a href="#">找回密码</a>
                                </span>
                            </div>
                            <div className="login_other">
                                <span className="line"></span>
                                <span className="text">其他登入方式</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}