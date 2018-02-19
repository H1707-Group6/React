import React from 'react'
import { Table, Pagination, Divider, Icon, Button } from 'antd';

import http from '../../utils/reqAjax.js'

import './index.less'

export default class SearchComponent extends React.Component{
    state = {
        dbtype:'goods',
        responseData:[],
        pageNum:1,
        pageQty:10,
        pageTotal:0,
        columns:[],
        data:[]
    }

    handleChange = ()=>{}
    changeSearch = event =>{
        var doms = this.refs.change.children;
        var len = doms.length;
        for(var i=0;i<len;i++){
            doms[i].classList.remove('active');
        }
        event.target.classList.add('active');
        this.setState({dbtype:event.target.dataset.dbtype});
    }
    startSearch = () =>{
        var keyword = this.refs.keyword.value;
        this.refs.keyword.value = '';
        var url1 = 'searchgoods?keyword='+keyword;
        var url2 = 'searchuser?keyword='+keyword;
        var url3 = 'searchorder?keyword='+keyword;
        var url4 = 'searchadministrator?keyword='+keyword;
        if(this.state.dbtype === 'goods'){
            http.get({url:url1}).then(res =>{
              if(res.data === 'no'){
                this.setState({pageTotal:1,pageNum:1,responseData:[]});
              }else{
                if(res.data.results.length){
                  this.setState({responseData:res.data.results,pageNum:1},()=>{
                    this.searchGoods();
                  });
                }
              }
            })
        }else if(this.state.dbtype === 'user'){
            http.get({url:url2}).then(res =>{
              if(res.data === 'no'){
                this.setState({pageTotal:1,pageNum:1,responseData:[]});
              }else{
                if(res.data.results.length){
                  this.setState({responseData:res.data.results,pageNum:1},()=>{
                    this.searchUser();
                  });
                }
              }
            })
        }else if(this.state.dbtype === 'order'){
            http.get({url:url3}).then(res =>{
              if(res.data === 'no'){
                this.setState({pageTotal:1,pageNum:1,responseData:[]});
              }else{
                if(res.data.results.length){
                  this.setState({responseData:res.data.results,pageNum:1},()=>{
                    this.searchOrder();
                  });
                }
              }
            })
        }else if(this.state.dbtype === 'administrator'){
            http.get({url:url4}).then(res =>{
              if(res.data === 'no'){
                this.setState({pageTotal:1,pageNum:1,responseData:[]});
              }else{
                if(res.data.results.length){
                  this.setState({responseData:res.data.results,pageNum:1},()=>{
                    this.searchAdministrator();
                  });
                }
              }
            })
        }
    }
    keyDownFun = (event) =>{
      if(event.keyCode === 13){
        this.startSearch();
      }
    }
    changePage = (page,pageSize) =>{
      if(this.state.dbtype === 'goods'){
        this.setState({pageNum:page},()=>{
          this.searchGoods();
        });
      }else if(this.state.dbtype === 'user'){
        this.setState({pageNum:page},()=>{
          this.searchUser();
        });
      }else if(this.state.dbtype === 'order'){
        this.setState({pageNum:page},()=>{
          this.searchOrder();
        });
      }else if(this.state.dbtype === 'administrator'){
        this.setState({pageNum:page},()=>{
          this.searchAdministrator();
        });
      }
    }
    searchGoods = ()=>{
      var len = this.state.responseData.length;
      var pageTotal = Math.ceil(len/this.state.pageQty);
      var responseData = this.state.responseData;
      var columns = [{
        title: 'TITLE',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: 'PRICE',
        dataIndex: 'price',
        key: 'price',
      }, {
        title: 'SALEPRICE',
        dataIndex: 'saleprice',
        key: 'saleprice',
      }, {
        title: 'HOT',
        dataIndex: 'hot',
        key: 'hot',
        }, {
        title: 'COLOR',
        dataIndex: 'color',
        key: 'color',
      }, {
        title: 'DELETE',
        key: 'delete',
        render: (text, record, index) => (
          <Button type="danger" disabled={window.localStorage.getItem('deletelimit')==1 ? "" : 'disabled'} onClick={this.deleteData} data-id={responseData[index].id}>&times;</Button>
        )
      }];
      var lastLen = this.state.pageNum===pageTotal ? len : this.state.pageNum*this.state.pageQty;
      var allData = [];
      for(var i=(this.state.pageNum-1)*this.state.pageQty;i<lastLen;i++){
        allData.push({
          key: this.state.responseData[i].id,
          title: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].title} onBlur={this.updateData} data-fields="title" /> : this.state.responseData[i].title,
          price: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].price} onBlur={this.updateData} data-fields="price" /> : this.state.responseData[i].price,
          saleprice: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].saleprice} onBlur={this.updateData} data-fields="saleprice" /> : this.state.responseData[i].saleprice,
          hot:localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].hot} onBlur={this.updateData} data-fields="hot" /> : this.state.responseData[i].hot,
          color:localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].color} onBlur={this.updateData} data-fields="color" /> : this.state.responseData[i].color
        })
      }
      this.setState({columns:columns,data:allData,pageTotal:pageTotal});
    }
    searchUser = ()=>{
      var len = this.state.responseData.length;
      var pageTotal = Math.ceil(len/this.state.pageQty);
      var responseData = this.state.responseData;
      var columns = [{
        title: 'USERNAME',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: 'GENDER',
        dataIndex: 'gender',
        key: 'gender',
      }, {
        title: 'NICKNAME',
        dataIndex: 'nickname',
        key: 'nickname',
      }, {
        title: 'PHONE',
        dataIndex: 'phone',
        key: 'phone',
        }, {
        title: 'ADDRESS',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'DELETE',
        key: 'delete',
        render: (text, record, index) => (
          <Button type="danger" disabled={window.localStorage.getItem('deletelimit')==1 ? "" : 'disabled'} onClick={this.deleteData} data-id={responseData[index].id}>&times;</Button>
        )
      }];
      var lastLen = this.state.pageNum===pageTotal ? len : this.state.pageNum*this.state.pageQty;
      var allData = [];
      for(var i=(this.state.pageNum-1)*this.state.pageQty;i<lastLen;i++){
        allData.push({
          key: this.state.responseData[i].id,
          username: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].username} onBlur={this.updateData} data-fields="username" /> : this.state.responseData[i].username,
          gender: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].gender} onBlur={this.updateData} data-fields="gender" /> : this.state.responseData[i].gender,
          nickname: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].nickname} onBlur={this.updateData} data-fields="nickname" /> : this.state.responseData[i].nickname,
          phone:localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].phone} onBlur={this.updateData} data-fields="phone" /> : this.state.responseData[i].phone,
          address:localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].address} onBlur={this.updateData} data-fields="address" /> : this.state.responseData[i].address
        })
      }
      this.setState({columns:columns,data:allData,pageTotal:pageTotal});
    }
    searchOrder = ()=>{
      var len = this.state.responseData.length;
      var pageTotal = Math.ceil(len/this.state.pageQty);
      var responseData = this.state.responseData;
      var columns = [{
        title: 'ORDERID',
        dataIndex: 'orderid',
        key: 'orderid'
      }, {
        title: 'USERID',
        dataIndex: 'userid',
        key: 'userid',
      }, {
        title: 'TOTAl',
        dataIndex: 'total',
        key: 'total',
      }, {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        }, {
        title: 'DELETE',
        key: 'delete',
        render: (text, record, index) => (
          <Button type="danger" disabled={window.localStorage.getItem('deletelimit')==1 ? "" : 'disabled'} onClick={this.deleteData} data-id={responseData[index].id}>&times;</Button>
        )
      }];
      var lastLen = this.state.pageNum===pageTotal ? len : this.state.pageNum*this.state.pageQty;
      var allData = [];
      for(var i=(this.state.pageNum-1)*this.state.pageQty;i<lastLen;i++){
        allData.push({
          key: this.state.responseData[i].id,
          orderid: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].id} onBlur={this.updateData} data-fields="orderid" /> : this.state.responseData[i].id,
          userid: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].useid} onBlur={this.updateData} data-fields="userid" /> : this.state.responseData[i].userid,
          total: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].total} onBlur={this.updateData} data-fields="total" /> : this.state.responseData[i].total,
          status:localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].status} onBlur={this.updateData} data-fields="status" /> : this.state.responseData[i].status
        })
      }
      this.setState({columns:columns,data:allData,pageTotal:pageTotal});
    }
    searchAdministrator = ()=>{
      var len = this.state.responseData.length;
      var pageTotal = Math.ceil(len/this.state.pageQty);
      var responseData = this.state.responseData;
      var columns = [{
        title: 'USERNAME',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: 'POSITION',
        dataIndex: 'position',
        key: 'position',
      }, {
        title: 'UPDATELIMIT',
        dataIndex: 'updatelimit',
        key: 'updatelimit',
      }, {
        title: 'DELETELIMIT',
        dataIndex: 'deletelimit',
        key: 'deletelimit',
        }, {
        title: 'DELETE',
        key: 'delete',
        render: (text, record, index) => (
          <Button type="danger" disabled={window.localStorage.getItem('deletelimit')==1 ? "" : 'disabled'} onClick={this.deleteData} data-id={responseData[index].id}>&times;</Button>
        )
      }];
      var lastLen = this.state.pageNum===pageTotal ? len : this.state.pageNum*this.state.pageQty;
      var allData = [];
      for(var i=(this.state.pageNum-1)*this.state.pageQty;i<lastLen;i++){
        allData.push({
          key: this.state.responseData[i].id,
          username: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].username} onChange={window.localStorage.getItem('updatelimit')==1 ? this.updateDate : this.popup} onBlur={this.updateData} data-fields="username" /> : this.state.responseData[i].username,
          position: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].position} onChange={window.localStorage.getItem('updatelimit')==1 ? this.updateDate : this.popup} onBlur={this.updateData} data-fields="position" /> : this.state.responseData[i].position,
          updatelimit: localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].updatelimit} onChange={window.localStorage.getItem('updatelimit')==1 ? this.updateDate : this.popup} onBlur={this.updateData} data-fields="updatelimit" /> : this.state.responseData[i].updatelimit,
          deletelimit:localStorage.getItem('updatelimit')==1 ? <input type="text" defaultValue={this.state.responseData[i].deletelimit} onChange={window.localStorage.getItem('updatelimit')==1 ? this.updateDate : this.popup} onBlur={this.updateData} data-fields="deletelimit" /> : this.state.responseData[i].deletelimit
        })
      }
      this.setState({columns:columns,data:allData,pageTotal:pageTotal});
    }
    deleteData = (event)=>{
      var target = event.target.parentNode.parentNode;
      target.parentNode.removeChild(target);
      if(this.state.dbtype === 'goods'){
        http.post({url:'deleteGoods',params:{id:event.target.dataset.id}}).then(res =>{
        })
      }else if(this.state.dbtype === 'user'){
        http.post({url:'deleteUser',params:{id:event.target.dataset.id}}).then(res =>{
        })
      }else if(this.state.dbtype === 'order'){
        http.post({url:'deleteOrder',params:{id:event.target.dataset.id}}).then(res =>{
        })
      }else if(this.state.dbtype === 'administrator'){
        http.post({url:'deleteAdministrator',params:{id:event.target.dataset.id}}).then(res =>{
        })
      }
    }
    updateData = (event)=>{
      var id = event.target.parentNode.parentNode.lastElementChild.firstElementChild.dataset.id;
      var value = event.target.value;
      var fields = event.target.dataset.fields;
      if(this.state.dbtype === 'goods'){
        http.post({url:'updateGoods',params:{id:id,[fields]:value}}).then(res =>{
        })
      }else if(this.state.dbtype === 'user'){
        http.post({url:'updateUser',params:{id:id,[fields]:value}}).then(res =>{
        })
      }else if(this.state.dbtype === 'order'){
        http.post({url:'updateOrder',params:{id:id,[fields]:value}}).then(res =>{
        })
      }else if(this.state.dbtype === 'administrator'){
        http.post({url:'updateAdministrator',params:{id:id,[fields]:value}}).then(res =>{
        })
      }
    }
    render(){
        return(
            <div className="searchpage">
                <div className="searchpage_t">
                    <ul ref="change" onClick={this.changeSearch}>
                        <li data-dbtype="goods" className="active">商品</li>
                        <li data-dbtype="user">用户</li>
                        <li data-dbtype="order">订单</li>
                        <li data-dbtype="administrator">管理员</li>
                    </ul>
                    <input type="text" ref="keyword" onKeyDown={this.keyDownFun} />
                    <button onClick={this.startSearch}>搜索</button>
                </div>
                <div className="searchpage_b">
                    <Table columns={this.state.columns} dataSource={this.state.data} pagination={false} />
                    <Pagination defaultCurrent={this.state.pageNum} total={this.state.pageTotal*10} style={{float:'right',marginTop:'10px'}} onChange={this.changePage} />
                </div>
            </div>
        )
    }
}