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
        let upsw = this.props.form.getFieldsValue().password;
        if(!uname){
            this.refs.hint.value = '用户名不能为空';
            this.refs.hint.style.display = 'block';
        }else if(!upsw){
            this.refs.hint.value = '密码不能为空';
            this.refs.hint.style.display = 'block';
        }else{
            http.post({url:'login',params:{uname:uname,upsw:upsw}}).then(res =>{
                var data = res.data;
                if(data === 'no'){
                    this.refs.hint.value = '请输入正确的用户名密码';
                    this.refs.hint.style.display = 'block';
                }else{
                    var id = data.result.id;
                    var updatelimit = data.result.updatelimit;
                    var deletelimit = data.result.deletelimit;
                    window.localStorage.setItem('id',id);
                    window.localStorage.setItem('username',uname);
                    window.localStorage.setItem('updatelimit',updatelimit);
                    window.localStorage.setItem('deletelimit',deletelimit);
                    history.push('/index');
                }
            })
        }
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '用户名&密码',
            description: '使用有权限：admin&123 |*|*|*|*|*|*|*|*|*|*|*|*|使用没权限：react&123456',
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
            <div className="loginpagewrap">
                <div className="box">
                    <p>Welcome to the HUA.com</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                            <input type="text" disabled ref="hint" value={this.state.hint} />
                        </Form>
                    </div>
                </div>
                <div className="fixer">
                    还没注册？去<a href="#/register">注册</a>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;