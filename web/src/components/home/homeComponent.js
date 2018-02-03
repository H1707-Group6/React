import React,{Component} from 'react'

export default class HomeComponent extends Component{
    render(){
        return(
            <div className = "project">
                <div className = "main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}