import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent'
// import ClassifyComponent from '../components/classify/classifyComponent'
import GoodslistComponent from '../components/goodslist/goodslistComponent'
import DetailsComponent from '../components/details/detailsComponent'

const routes = (
    <Route>
        <Route path = '/' component={HomeComponent}/>
        <Route path = '/goodslist' component={GoodslistComponent}/>
        <Route path = '/details' component={DetailsComponent}/>
    </Route>
)
export default routes;