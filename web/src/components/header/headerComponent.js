import React, {Component} from 'react'

import { Icon } from 'antd';
import './header.scss'

export default class HeaderComponent extends Component {
    state = {
        title_h:this.props.text
    }
    gos(){
        history.go(-1);
    }
    // componentWillMount(){
    //     console.log(this.hashHistory)
    // }
    render(){
        return (   
            <div className = 'header_f' >
                <Icon type="left" onClick = {this.gos.bind(this)}/>
                <i>{this.state.title_h}</i>
                <Icon type="menu-unfold" />
            </div>        
        )
    }
}
