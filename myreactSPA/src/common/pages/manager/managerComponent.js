import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.less'
import * as actions from './managerAction'
import { Pagination,Tooltip,Popconfirm, message} from 'antd';
class Manageromponent extends Component{
    componentWillMount(){
        this.props.getManagers()
    }
    showInsert(){
    console.log(56)
        document.querySelector('.insertBox').style.display = 'block';
        document.querySelector('.cont').style.display = 'block';
    }
    hideInsert(){
    console.log(2)
        document.querySelector('.insertBox').style.display = 'none';
        document.querySelector('.cont').style.display = 'none';
        
    }
    confirm(proItem) {
      this.props.deleteManagers(proItem.id).then(res => {
            console.log(res);
            if(res.results.affectedRows == 1){
                this.props.getManagers();
            }
        });
      message.success('删除成功');
    }

    cancel(e) {
      console.log(e);
      message.error('取消删除');
    }
    confirmInsert(proItem) {
        var  managerName = document.querySelector('.managerName').value;
        var  managerPassword = document.querySelector('.managerPassword').value;
        var  managerPosition = document.querySelector('.managerPosition').value;
        var  managerUpdatelimit = document.querySelector('.managerUpdatelimit').value;
        var  managerDeletelimit = document.querySelector('.managerDeletelimit').value;
      this.props.insertManagers(managerName,managerPassword,managerPosition,managerUpdatelimit,managerDeletelimit).then(res => {
            console.log(res);
            if(res.results.affectedRows == 1){
                this.props.getManagers();
            }
        });
      message.success('添加成功');
      this.hideInsert()
    }

    cancelInsert(e) {
      console.log(e);
      message.error('取消添加');
      this.hideInsert()

    }
    editTab(proItem,event){
       event.persist()
        // 利用事件源对象判断是否点击了td
        if(event.target.tagName.toLowerCase() === 'td'){
            // 第一列与最后一列不可编辑
            // firstElementChild/lastElementChild
            console.log(event.target)

            var idx =event.target.cellIndex;
            if(idx===0 ||  idx===6 ||  idx===7){
                return;
            }

            // 创建一个input
            var input = document.createElement('input');
            input.type = 'text';
            input.value = event.target.innerText;

            event.target.innerHTML = '';
            event.target.appendChild(input);

            input.focus();

            input.onblur = function(){
                //如何在此处获取td
                event.target.innerHTML = input.value;
                this.editValue = event.target.innerHTML;
                if(idx===1){
                    var username = this.editValue;
                    this.props.updateManagers(proItem.id,username,proItem.password,proItem.position,proItem.updatelimit,proItem.deletelimit).then(res => {
                        console.log(res);
                        // if(res.results.affectedRows == 1){
                        //     this.props.getGoods();
                        // }
                    });
                }
                if(idx===2){
                    var password = this.editValue;
                    this.props.updateManagers(proItem.id,proItem.username,password,proItem.position,proItem.updatelimit,proItem.deletelimit).then(res => {
                        console.log(res);
                        
                    });
                }
                if(idx===3){
                    var position = this.editValue;
                   this.props.updateManagers(proItem.id,proItem.username,proItem.password,position,proItem.updatelimit,proItem.deletelimit).then(res => {
                        console.log(res);
                       
                    });
                }
                if(idx===4){
                    var updatelimit = (this.editValue)*1;
                   this.props.updateManagers(proItem.id,proItem.username,proItem.password,proItem.position,updatelimit,proItem.deletelimit).then(res => {
                        console.log(res);
                        
                    });
                }
                if(idx===5){
                    var deletelimit = (this.editValue)*1;
                   this.props.updateManagers(proItem.id,proItem.username,proItem.password,proItem.position,proItem.updatelimit,deletelimit).then(res => {
                        console.log(res);
                        
                    });
                }

            }.bind(this)
        }
    }
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.props.getManagers(pageNumber);
    }
    render(){
        return (
            <div>
                <table className="managerTable">
                    <thead>
                        <tr>
                            <th>管理员ID</th>
                            <th>管理员名称</th>
                             <th>管理员密码</th>
                             <th>管理员职位</th>
                             <th>修改权限</th>
                             <th>删除权限</th>
                             <th>注册时间</th>
                             <th>操作</th>
                         </tr>
                    </thead>
                        {
                    this.props.ajaxResult.map( item => {
                        return (
                             <tbody key={item.id} onDoubleClick={localStorage.getItem('updatelimit')==1 ? this.editTab.bind(this,item) : ''}>
                             <tr>
                                <td className="tdId">{item.id}</td>
                                <td className="tdName">
                                   {item.username}
                                </td>
                                <td className="tdPassword">
                                    {item.password}
                                </td>
                                <td className="tdPosition">
                                    {item.position}
                                </td>
                                <td className="tdUpdatelimit">
                                    {item.updatelimit}
                                </td>
                                 <td className="tdDeletelimit">
                                    {item.deletelimit}
                                </td>
                                <td className="tdDate">
                                    {item.date.slice(0,10)}
                                </td>

                                <td className="tdButton">
                                <Popconfirm title="是否确认删除?" onConfirm={this.confirm.bind(this, item)} onCancel={this.cancel} okText="Yes" cancelText="No">
                                <Tooltip title="三思而后行哦" placement="right">
                                <a href="#"><button disabled={localStorage.getItem('deletelimit')==1 ? '' : 'disabled'}>删除</button></a>
                                </Tooltip>
                                </Popconfirm>
                                
                                <div className="insertBox">
                                    </div>
                                    <div className="cont">
                                        <h3><span>添加数据</span></h3>
                                        <ul className="insertUl">
                                            
                                            <li><h4>管理员名称：</h4><input type="text" placeholder="给自己起个中意的名字吧"className="managerName"/></li>
                                            <li><h4>管理员密码：</h4><input type="text" placeholder="请输入密码" className="managerPassword"/></li>
                                            <li><h4>管理员职位：</h4><input type="text" placeholder="请输入职位" className="managerPosition"/></li>
                                            <li><h4 className="marin50">修改权限：</h4><input type="text" placeholder="请输入0或1" className="managerUpdatelimit"/></li>
                                            <li><h4 className="marin50" >删除权限：</h4><input type="text" placeholder="请输入0或1" className="managerDeletelimit"/></li>
                                            
                                        </ul>
                                        <div className="add">
                                            <Popconfirm title="是否确认添加？" onConfirm={this.confirmInsert.bind(this, item)} onCancel={this.cancelInsert.bind(this)} okText="Yes" cancelText="No">
                                                <a><button >确认添加</button></a>
                                            </Popconfirm>
                                        </div>
                                        
                                    </div>
                                </td>
                                
                             </tr>

                            </tbody>
                        )
                    })
                }

                 </table>

                 <div className="boxM">
                 <div className="btnAdd"><a><button onClick={localStorage.getItem('updatelimit')==1 ? this.showInsert : ''}>添加</button></a></div>
                    <div  className="pages">
                    <Pagination showQuickJumper defaultCurrent={2} total={this.props.totalcount} onChange={this.onChange.bind(this)} />
                    </div>
                </div>

            </div>
        )
    }
}
//store.getSate() => state
let mapStateToProps = (state) => {
    console.log(state)
    return {
        ajaxStatus: state.manager.status,
        ajaxResult: state.manager.result || [],
        totalcount: state.manager.totalcount === undefined ? [] : state.manager.totalcount[0].rowscount,
        ajaxbigtype:state.manager.bigtype,
    }
}

export default connect(mapStateToProps, actions)(Manageromponent);

