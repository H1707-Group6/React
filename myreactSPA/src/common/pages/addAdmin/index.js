import React,{Component} from 'react'
import { notification, Icon } from 'antd';
import http from '../../utils/reqAjax.js'

import './index.less'

export default class AddPro extends Component{
    addTo(){
        let theusername = this.refs.theusername.value;
        let thepassword = this.refs.thepassword.value;
        let theposition = this.refs.theposition.value;
        let theupdatelimit = this.refs.theupdatelimit.value;
        let thedeletelimit = this.refs.thedeletelimit.value;
        http.post({url:'addAdmin',params:{username:theusername,password:thepassword,position:theposition,updatelimit:theupdatelimit,deletelimit:thedeletelimit}}).then(res =>{
            if(res.data.status){
                this.openNotificationWithIcon('info');
                for(var item in this.refs){
                    this.refs[item].value = ''
                }
            }else{
                alert('添加出错，请检查输入格式是否正确');
            }
        })
    }
    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '温馨提示',
            description: '添加操作已成功完成',
            duration: 10,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
    }
    render(){
        return(
            <div id="addadmin">
                <label htmlFor="theusername">username:</label>
                <input type="text" ref="theusername" id="theusername" /><br />
                <label htmlFor="thepassword">password:</label>
                <input type="text" ref="thepassword" id="thepassword" /><br />
                <label htmlFor="theposition">position:</label>
                <input type="text" ref="theposition" id="theposition" /><br />
                <label htmlFor="theupdatelimit">updatelimit:</label>
                <input type="text" ref="theupdatelimit" id="theupdatelimit" /><br />
                <label htmlFor="thedeletelimit">deletelimit:</label>
                <input type="text" ref="thedeletelimit" id="thedeletelimit" /><br />
                <button disabled={window.localStorage.getItem('updatelimit')==1 ? '' : 'disabled'} onClick={this.addTo.bind(this)}>添加</button>
            </div>
        )
    }
}