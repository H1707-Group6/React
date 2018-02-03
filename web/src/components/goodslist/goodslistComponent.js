import React, {Component} from 'react'
import {connect} from 'react-redux'

import header from 'hre'
import * as action from './goodslistAction'

class GoodslistComponent extends Component{
    componentWillMount(){
        this.props.getGoods()
    }
    render(){
        return(
            <div>
                <div className='goodslist_f'>列表页</div>
            </div>
        )
    }
}


let mapStateToProps = (state)=>{
    return {
        ajaxStatus:state.goodslist.status,
        ajaxResult:state.goodslist.reault || []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)