import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Icon, Grid } from 'antd-mobile';




import * as action from './detailsAction'

// import { Button } from 'antd-mobile';


import './details.scss'


class GoodslistComponent extends Component{
    componentWillMount(){
        var key = this.props.router.location.state.gid
        this.props.getDetails(key)
    }

    render(){
        return(
            <div className='details_f'>
                <div className = 'details_fh'>
                 <Icon type="check"/>
                 <Icon type="fast-backward" />
                </div>
                <div className = 'details_fm'>
                    {
                        this.props.ajaxResult.map((iten)=>{
                            return <div key={iten.id}>
                                        <ul>
                                        <li><img src ={iten.mainimg}/></li>
                                        {
                                            iten.detailsimg.split(',').map((simg, idx) => {
                                                return <li><img key={idx} src={simg} /></li>
                                            })
                                        }
                                        </ul>
                                        <p>{iten.title}</p>
                                        <p>￥{iten.price}</p>
                                    </div>
                        })
                    }

                </div>
                <div className = 'details_ff'></div>
            </div>
        )
    }
}


let mapStateToProps = (state)=>{
    // console.log(state.goodslist)
    return {
        ajaxStatus:state.details.status,
        ajaxResult:state.details.result|| []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)