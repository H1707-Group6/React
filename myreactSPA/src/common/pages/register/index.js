import React from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import createHistory from 'history/createHashHistory';

import http from '../../utils/reqAjax.js';

import './index.less'

const FormItem = Form.Item;
const history = createHistory();

class LoginPage extends React.Component {
    state = {
        hint:''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let uname = this.props.form.getFieldsValue().username;
        let upsw1 = this.props.form.getFieldsValue().password1;
        let upsw2 = this.props.form.getFieldsValue().password2;
        if(!uname){
            this.refs.hint.value = '用户名不能为空';
            this.refs.hint.style.display = 'block';
        }else if(!upsw1 || !upsw2){
            this.refs.hint.value = '密码不能为空';
            this.refs.hint.style.display = 'block';
        }else if(upsw1 !== upsw2){
            this.refs.hint.value = '两次输入的密码不一致';
            this.refs.hint.style.display = 'block';
        }else{
            let url = 'verify?uname='+uname;
            http.get({url:url}).then(res =>{
                var data = res.data;
                if(data === 'no'){
                    this.refs.hint.value = '该用户名已被注册';
                    this.refs.hint.style.display = 'block';
                }else{
                    http.post({url:'register',params:{uname:uname,upsw:upsw1}}).then(res =>{
                        var data = res.data;
                        var id = data.data.results.insertId;
                        if(data.status){
                            var url = 'selectlimit?id='+id;
                            http.get({url:url}).then(res =>{
                                var updatelimit = res.data.updatelimit;
                                var deletelimit = res.data.deletelimit;
                                window.localStorage.setItem('id',id);
                                window.localStorage.setItem('username',uname);
                                window.localStorage.setItem('updatelimit',updatelimit);
                                window.localStorage.setItem('deletelimit',deletelimit);
                                history.push('/index');
                            })
                        }
                    })
                }
            })
        }
    }

    // 返回一个弹框对象
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '用户名&密码',
            description: '默认新注册帐户没有修改和删除权限',
            duration: 10,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="registerpagewrap">
                <div className="box">
                    <p>Welcome to the HUA.com</p>
                    <div className="registerWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password1', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password2', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input type="password" placeholder="请再次输入密码" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="registerBtn">Register</Button>
                            <input type="text" disabled ref="hint" value={this.state.hint} />
                        </Form>
                    </div>
                </div>
                <div className="fixed">
                    已经注册？去<a href="#/login">登录</a>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;