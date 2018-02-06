import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as action from './goodslistAction'

import './goodslist.scss'
import Header from '../header/headerComponent'

class GoodslistComponent extends Component{
    state = {
        text:'列表页'
    }
    componentWillMount(){
        // var key = this.props.router.location.state.name
        // console.log(this.props.router.location.state.name)
        // let key = this.props.
        this.props.getGoods()
    }
    goDetalist(gid){
        sessionStorage.setItem('gid', gid);
        this.props.router.push({
            pathname:'details',
            state:{gid:gid}
        })
        // this.props.router.push({pathname:'/details'})
    }

    render(){
        return(
            <div className='goodslist_f'>
                <div className = 'goodslist_fh'>
                    <Header  text = {this.state.text}></Header>
                </div>
                <div className = 'goodslist_fm'>
                    {
                        this.props.ajaxResult.map((iten)=>{
                            iten.title=iten.title.split('----');
                            return <ul key={iten.id} onClick={this.goDetalist.bind(this,iten.id)}>
                                        <li><img src={iten.mainimg}/></li>
                                        <li>{iten.title[0]}</li>
                                        <li>{iten.title[1]}</li>
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
   
    return {
        ajaxStatus:state.goodslist.status,
        ajaxResult:state.goodslist.result|| []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)