import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import { Grid ,Carousel,Tabs,WhiteSpace} from 'antd-mobile'

import * as action from './classifyAction'
import Footer from '../footer/footerComponent'

import './classify.scss'

const tabs = [
  { title: '鲜花' },
  { title: '永生花' },
  { title: '蛋糕' },
  { title: '巧克力' },
  { title: '礼品' },
];

var res = [];

class ClassifyComponent extends Component{
	componentWillMount(){
		var type = ['鲜花','永生花','蛋糕','巧克力','礼品'];
		
		this.props.getClassify(type);
		
	}
	state={
		imgs:['./src/assets/imgs/other/classify01.jpg',
                './src/assets/imgs/other/classify02.jpg',
                './src/assets/imgs/other/classify03.jpg',
                './src/assets/imgs/other/classify04.jpg',
                './src/assets/imgs/other/classify05.jpg'],
        xianhua:['爱情鲜花','友情鲜花','生日鲜花','问候鲜花','汇报老师','祝福庆祝','婚庆鲜花','探病慰问'],
        yongsheng:['经典花盒','巨型玫瑰','薰衣草','永生瓶花','特色永生花'],
        dangao:['元祖','诺心','INCAKE','贝思客','BONVCAKE'],
        qiaokeli:['进口巧克力','巧罗巧克力','瑞士莲巧巧克力','巧蔻巧克力'],
        lipin:['水晶内雕','永生瓶花','音乐盒','化妆镜','品牌巧克力','品牌公仔'],
	}
	goGoodslists(gid){
		console.log(gid);
        this.props.router.push({
                   pathname:'goodslist',
                   state:{keyword:gid}
               })
    }
    homeSearch(){ 
        this.props.router.push({
                   pathname:'search',
                   // state:{gid:keyword}
               })
    }
	render(){
		return(
			<div className="classify">
				<div className="classify_h">
					<div className="classify_sousuo">
						<input type="text" placeholder="搜索鲜花、蛋糕、礼品" onFocus={this.homeSearch.bind(this)}/>
						<Icon type="search" size={'md'} className="icon-sousuo"/>
					</div>
				</div>
				<div className="classify_m">
					<div style={{ height: 600 }} className="classify_ms">
				        <Tabs tabs={tabs}
				            initalPage={'t2'}
				            animated={false}
				            tabBarPosition="left"
				            tabDirection="vertical"
				          
				         >
				            <div className="tabs-r" style={{ display: 'flex', justifyContent: 'center'}}>
				             	<div className="tabs-r1">
				             		<img src={this.state.imgs[0]} />
				             		<p  className="tabs_p">用途<a href="#" >鲜花排行榜 &gt;</a></p>
									<ul>
										<li>
											<img src="./src/assets/imgs/other/more_btn.png" />
											<span>全部</span>
										</li>
										{
				                            this.props.ajaxResult[0].map((item,index)=>{

				                                return <li key={item.id} onClick={this.goGoodslists.bind(this,tabs[0].title)}>
				                                            <img src={item.mainimg} />
															<span>{this.state.xianhua[index]}</span>
				                                        </li>     
				                            })
				                        }
									</ul>
				             	</div>
				            </div>
				            <div className="tabs-r" style={{ display: 'flex', justifyContent: 'center'}}>
				             	<div className="tabs-r1">
				             		<img src={this.state.imgs[1]} />
				             		<p  className="tabs_p">永生花<a href="#" >永生花排行榜 &gt;</a></p>
				             		<ul>
										<li>
											<img src="./src/assets/imgs/other/more_btn.png" />
											<span>全部</span>
										</li>
										{
				                            this.props.ajaxResult[1].map((item,index)=>{

				                                return <li key={item.id} onClick={this.goGoodslists.bind(this,tabs[1].title)}>
				                                            <img src={item.mainimg} />
															<span>{this.state.yongsheng[index]}</span>
				                                        </li>   
				                            })
				                        }
									</ul>
				             	</div>
				            	
				            </div>
				            <div className="tabs-r" style={{ display: 'flex', justifyContent: 'center'}}>
				              	<div className="tabs-r1">
				             		<img src={this.state.imgs[2]} />
				             		<p  className="tabs_p">精选品牌蛋糕</p>
				             		<ul>
										<li>
											<img src="./src/assets/imgs/other/more_btn.png" />
											<span>全部</span>
										</li>
										{
				                            this.props.ajaxResult[2].map((item,index)=>{

				                                return <li key={item.id} onClick={this.goGoodslists.bind(this,tabs[2].title)}>
				                                            <img src={item.mainimg} />
															<span>{this.state.dangao[index]}</span>
				                                        </li>      
				                            })
				                        }
									</ul>
				             	</div>

				            </div>
				            <div className="tabs-r" style={{ display: 'flex', justifyContent: 'center'}}>
				              	<div className="tabs-r1">
				             		<img src={this.state.imgs[3]} />
				             		<p  className="tabs_p">巧克力<a href="#" >巧克力排行榜 &gt;</a></p>
				             		<ul>
										<li>
											<img src="./src/assets/imgs/other/more_btn.png" />
											<span>全部</span>
										</li>
										{
				                            this.props.ajaxResult[3].map((item,index)=>{

				                                return <li key={item.id} onClick={this.goGoodslists.bind(this,tabs[3].title)}>
				                                            <img src={item.mainimg} />
															<span>{this.state.qiaokeli[index]}</span>
				                                        </li>
				                                        
				                            })
				                        }
									</ul>
				             	</div>
				            </div>
				            <div className="tabs-r" style={{ display: 'flex', justifyContent: 'center'}}>
				              	<div className="tabs-r1">
				             		<img src={this.state.imgs[4]} />
				             		<p  className="tabs_p">礼品分类<a href="#" >特色礼品排行榜 &gt;</a></p>
				             		<ul>
										<li>
											<img src="./src/assets/imgs/other/more_btn.png" />
											<span>全部</span>
										</li>
										{
				                            this.props.ajaxResult[4].map((item,index)=>{
				                                return <li key={item.id} onClick={this.goGoodslists.bind(this,tabs[4].title)}>
				                                            <img src={item.mainimg} />
															<span>{this.state.lipin[index]}</span>
				                                        </li>
				                                        
				                            })
				                        }
									</ul>
				             	</div>
				            </div>
				        </Tabs>
				       
				    </div>
				</div>
				<div className="classify_f">
					<Footer/>
				</div>

			</div>
		)
	}
}

let mapStateToProps = (state)=>{
    return {
        ajaxStatus:state.classify.status,
        ajaxResult:state.classify.result || [[],[],[],[],[]]
    }
}


export default connect (mapStateToProps,action)(ClassifyComponent)