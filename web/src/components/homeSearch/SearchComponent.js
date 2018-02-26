import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import { Grid ,Carousel,Tabs,WhiteSpace,Modal, Button, Toast} from 'antd-mobile'
import * as action from './SearchAction';
import './Search.scss'


const alert = Modal.alert;

class HomeSearchs extends Component{
	componentWillMount(){

		if(localStorage.getItem('key')){
			this.state.data2 = JSON.parse(localStorage.getItem('key'));
		}
	  
	}
	componentDidMount(){
	
	}
	state={
		data2:[],
		hotContent:['鲜花','永生花','郁金香','玫瑰','礼品']
	}
	goSearch(){
		var keyword = this.refs.myTextInput.value;
	
		if(localStorage.getItem('key')){
			var data1 = JSON.parse(localStorage.getItem('key'));
			
			if(data1.indexOf(keyword) == -1){
				data1.unshift(keyword);
			}
		}else{
			var data1=[];
			data1.push(keyword);
		}
		this.state.data2 = data1;
		localStorage.setItem('key', JSON.stringify(data1));
		

		this.props.getSearch(keyword).then((res)=>{
			
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

		// var element = React.findDOMNode(this.refs.element);
		// var lis = React.createElement('li',null,keyword);
		// var root = React.createElement('ul', { className: 'my-list'}, lis);
		// element.inserBefore(lis);
	}
	delete(){
		localStorage.removeItem('key');
		this.setState({data2:[]});
	}
	goBack(){
		history.go(-1);
	}
	goGoodslist(goodsname){
		this.props.getSearch(goodsname).then((res)=>{
			this.props.router.push({
	            pathname:'goodslist',
	            state:{keyword:res.results[0].type}
	        })
		});
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
					<p className="content_p">热门搜索 :</p>
					<ul  className="content_div" >
						{
							this.state.hotContent.map((item,index)=>{
								return <li onClick={this.goGoodslist.bind(this,item)} >{item}</li>

							})
						}
					</ul>
					<ul className="content" ref="element">
						{
							this.state.data2.map((item,index)=>{
								return <li>{item}</li>
							})
						}
					</ul>
					<div className="jilu" onClick={this.delete.bind(this)}><span>清除历史记录</span></div>
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

