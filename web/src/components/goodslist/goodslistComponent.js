import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as action from './goodslistAction'

import './goodslist.scss'
import Header from '../header/headerComponent'
import Footer from '../footer/footerComponent'
var goodstype = ['综合','销量','价钱','鲜花分类'];
var key;
var dec = true;
class GoodslistComponent extends Component{
    state = {
        text:'列表页'
    }
    componentWillMount(){
        var keys = this.props.router.location.state.keyword ;
       
        key = keys;
        this.props.getGoods(key);
    }
    goDetalist(gid){
        sessionStorage.setItem('gid', gid);
        this.props.router.push({
            pathname:'details',
            state:{gid:gid}
        })
    }
    type(event,type){
        if(type == '鲜花分类'){
            this.props.router.push({
                pathname:'classify'
            })
        }else{
            dec = !dec;
            this.props.getGoods(key,type,dec); 
        }
    }


    render(){
        console.log(this.props.location)
        return(
            <div className='goodslist_f'>
                <div className = 'goodslist_fh'>
                    <Header  text = {this.state.text} ref = 'goodslist'> {this.props.location}</Header>
                    
                </div>
                <ul className = 'goodstype'>
                   {
                    goodstype.map((item,idx)=>{
                        return <li key = {idx} onClick = {(event)=>this.type(event,item)}>{item}</li>
                    })
                   }
                </ul>
                <div className = 'goodslist_fm'>
                    {
                        this.props.ajaxResult.map((iten)=>{
                            if(typeof(iten.title) =='string'){
                                iten.title=iten.title.split('----');
                            }

                            return <ul key={iten.id} onClick={this.goDetalist.bind(this,iten.id)}>
                                        <li><img src={iten.mainimg}/></li>
                                        <li>{iten.title[0]}</li>
                                        <li>{iten.title[1]}</li>
                                        <li>￥{iten.price}</li>
                                    </ul>
                        })
                    }

                </div>
                <div className = 'goodslist_ff'>
                    <Footer></Footer>
                </div>
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