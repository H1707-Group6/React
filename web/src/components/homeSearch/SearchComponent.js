import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import { Grid ,Carousel,Tabs,WhiteSpace,Modal, Button, Toast} from 'antd-mobile'
import * as action from './SearchAction';
import './Search.scss'


const alert = Modal.alert;


class HomeSearchs extends Component{
	componentWillMount(){

	}
	state={
		keyword:''
	}
	goSearch(){
		var keyword = this.refs.myTextInput.value;
		console.log(keyword);
		this.props.getSearch(keyword).then((res)=>{
			console.log(res.results.length)
			if(res.results.length > 0){

				 this.props.router.push({
	                   pathname:'goodslist',
	                   state:{keyword:res.results[0].type}
	              })
			}else{
				alert('无此关键字', '', [
                    { text: '关闭', onPress: () => console.log('关闭') },
                    {
                    text: '确定',
                    onPress: () => new Promise((resolve) => {
                      
                        setTimeout(resolve, 100);
                    }),
                  },
                ])
			}
		});
	}
	goBack(){
		history.go(-1);
	}
	render(){
		
		return(
			<div className="searchs">
				<div className="seach_heah">
					<div className="home_h">
	                    <ul>
	                        <li><i className="home_logo" onClick={this.goBack.bind(this)}></i></li>
	                        <li><Icon type="search" className="homet_search" />
	                            <input type="text" placeholder="情人节鲜花" ref="myTextInput"/>
	                        </li>
	                        <li><a onClick={this.goSearch.bind(this)}>搜索</a></li>
	                    </ul>
	                </div>
				</div>
				
				<div className="seach_main">
					<ul className="content">
						<li className="content_li">热门搜索:</li>
						<li>鲜花</li>
						<li>玫瑰</li>
						<li>爱情鲜花</li>
					</ul>
					<div className="jilu"><span>清除历史记录</span></div>
				</div>
			</div>

		)
	}
}

let mapStateToProps = (state)=>{
   	
    return {
        ajaxStatus:state.search.status,
        ajaxResult:state.search.result|| []
    }
}


export default connect (mapStateToProps,action)(HomeSearchs)

