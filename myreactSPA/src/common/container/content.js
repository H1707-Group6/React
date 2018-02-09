import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import index from 'pages/index'
import Editor from 'pages/editor'
import addGoods from 'pages/addGoods'
import guide from 'pages/guide'
import search from 'pages/search'
import Goods from '../pages/goods/goodsComponent'
import Orders from '../pages/orders/ordersComponent'
import AddAdmin from 'pages/addAdmin'
import Manager from 'pages/manager/managerComponent.js'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content" id="content">
        <Route path="/index" component={index} />
        <Route path="/editor" component={Editor} />
        <Route path="/addGoods" component={addGoods} />
        <Route path="/guide" component={guide} />
        <Route path="/goSearch" component={search} />
        <Route path="/goods" component={Goods} />
        <Route path="/orders" component={Orders} />
        <Route path="/addAdmin" component={AddAdmin} />
        <Route path="/manager" component={Manager} />
      </Content>
    );
  }
}