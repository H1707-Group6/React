import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.less'
import * as actions from './ordersAction'
import { Pagination,Tooltip,Popconfirm, message} from 'antd';
class OrdersComponent extends Component{
    componentWillMount(){
        this.props.getOrders()
console.log(this.props.getOrders())
    }
    confirm(proItem) {
      console.log(proItem)
      this.props.deleteOrders(proItem.id).then(res => {
            console.log(res);
            if(res.results.affectedRows == 1){
                this.props.getOrders();
            }
        });
      message.success('删除成功');
    }

    cancel(e) {
      console.log(e);
      message.error('取消删除');
    }
    
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.props.getOrders(pageNumber);
    }
    render(){
        return (

            <div>
                <table className="ordersTable">
                    <thead>
                        <tr>
                            <th>用户ID</th>
                            <th>用户名</th>
                             <th className="title">用户地址</th>
                             <th>用户电话</th>
                             <th>订单状态</th>
                             <th>下单时间</th>
                             <th>操作</th>
                         </tr>
                    </thead>
                   

                        {

                    this.props.ajaxResult.map( item => {
                        
                            return (
                                 <tbody key={item.id} >
                                 <tr>
                                    <td className="tdId">{item.id}</td>
                                    <td className="tdType">
                                       {item.username}
                                    </td>
                                    <td className="tdTitle">
                                        {item.address}
                                    </td>
                                    <td className="tdPrice">
                                        {item.phone}
                                    </td>
                                    <td className="tdSaleqty">
                                        {item.status}
                                    </td>
                                    <td className="tdDate">
                                        {item.date.slice(0,10)}
                                        
                                    </td>
                                    <td className="tdButton">
                                    <Popconfirm title="是否确认删除?" onConfirm={this.confirm.bind(this, item)} onCancel={this.cancel} okText="Yes" cancelText="No">
                                    <Tooltip title="三思而后行哦" placement="right">
                                    <a href="#"><button>删除</button></a>
                                    </Tooltip>
                                    </Popconfirm>
                                    </td>
                                    
                                
                                    
                                 </tr>

                               
                                </tbody>
                                
                            )
                       
                    })
                }

                 </table>

                 <div className="pages">
                    <Pagination showQuickJumper defaultCurrent={2} total={this.props.totalcount} onChange={this.onChange.bind(this)} />
                </div>
            </div>
        ) 
    }
} 
//store.getSate() => state
let mapStateToProps1 = (state1) => {
    console.log(state1)
    return {
        ajaxStatus: state1.orders.status,
        ajaxResult: state1.orders.result || [],
        totalcount: state1.orders.totalcount === undefined ? [] : state1.orders.totalcount[0].rowscount
        
        
    }
}

export default connect(mapStateToProps1, actions)(OrdersComponent);

