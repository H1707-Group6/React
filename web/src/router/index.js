import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent'
import GoodslistComponent from '../components/goodslist/goodslistComponent'

const routes = (
    <Route path = '/' component={HomeComponent}>
        <Route path = 'goodslist' component={GoodslistComponent}/>
    </Route>
)

export default routes;