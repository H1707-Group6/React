import react,{Component} from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import { Grid ,Carousel,Tabs,WhiteSpace} from 'antd-mobile'
import * as action from './SearchAction';
import './Search.scss'

class HomeSearchs extends Component{
	componentWillMount(){

	}
	state={

	}
	goSearch(){
		this.props.getSearch();

	}
	render(){
		return(
			<div className="searchs">
				<div className="seach_heah"></div>
				<div className="seach_main"></div>
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

