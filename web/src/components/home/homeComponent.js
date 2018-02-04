import React,{Component} from 'react'
import Footer from '../footer/footerComponent'

import './home.scss'

export default class HomeComponent extends Component{
    render(){
        return(
            <div className = "home">
                <div className="home_h">1</div>
                <div className="home_m">2</div>
            	<div className="home_f">
                    <Footer/>
                </div>
            </div>
        )
    }
}