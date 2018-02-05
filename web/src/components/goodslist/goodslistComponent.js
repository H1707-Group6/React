import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as action from './goodslistAction'

import './goodslist.scss'


class GoodslistComponent extends Component{
    componentWillMount(){
        // var key = this.props.router.location.state.name
        // console.log(this.props.router.location.state.name)
        // let key = this.props.
        this.props.getGoods()
    }
    goDetalist(gid){
        console.log(gid)
        this.props.router.push({
            pathname:'details',
            state:{gid:gid}
        })
        // this.props.router.push({pathname:'/details'})
    }

    render(){
        return(
            <div className='goodslist_f'>
                <div className = 'goodslist_fh'></div>
                <div className = 'goodslist_fm'>
                    {
                        this.props.ajaxResult.map((iten)=>{
                            return <ul key={iten.id} onClick={this.goDetalist.bind(this,iten.id)}>
                                        <li><img src={iten.mainimg}/></li>
                                        <li>{iten.title}</li>
                                        <li>￥{iten.price}</li>
                                    </ul>
                        })
                    }

                </div>
                <div className = 'goodslist_ff'></div>
            </div>
        )
    }
}


let mapStateToProps = (state)=>{
    // console.log(state.goodslist)
    return {
        ajaxStatus:state.goodslist.status,
        ajaxResult:state.goodslist.result|| []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)