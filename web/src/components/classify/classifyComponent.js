import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd';

import * as action from './classifyAction'
import Footer from '../footer/footerComponent'

import './classify.scss'
import { Grid ,Carousel} from 'antd-mobile';

class ClassifyComponent extends Component{
	// componentWillMount(){
	// 	 // this.props.getClassify(keyword);
	// }
	state={

	}
	render(){
		return(
			<div className="classify">
				<div className="classify_h">
					<div className="classify_sousuo">
						<input type="text" placeholder="搜索鲜花、蛋糕、礼品" />
						<Icon type="search" size={'md'} className="icon-"/>
					</div>
				</div>
				<div className="classify_m"></div>
				<div className="classify_f">
					<Footer/>
				</div>

			</div>
		)
	}
}

let mapStateToProps = (state)=>{
 
    return {
        ajaxStatus:state.home.status,
        ajaxResult:state.goodslist.result|| []
    }
}


export default connect (mapStateToProps,action)(ClassifyComponent)