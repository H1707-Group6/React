import React from 'react'
import './index.less'

export default class GuideComponent extends React.Component{
    render(){
        return(
            <div className="guideMsg">
                本系统为花礼网后台管理系统。<br />
                旨为更好的管理商品及用户等信息。<br />
                感谢您的使用。<br />
                希望您能有个好的体验。<br />
                如有不及之处还望不吝指出。
                <p style={{color:'red',marginTop:'30px'}}>另：本系统设有权限分级，一些操作可能无法实现</p>
            </div>
        )
    }
}