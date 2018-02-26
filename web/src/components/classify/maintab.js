import React,{Component} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import {Link} from 'react-router'

// import './maintab.scss'

const tabs = [
  { title: '鲜花' },
  { title: '永生花' },
  { title: '蛋糕' },
  { title: '礼品' },
  { title: '巧克力' },
];

class Maintab extends Component{
  render(){
    return(
        <div style={{ height: 600 }}>
          <WhiteSpace />
          <Tabs tabs={tabs}
            initalPage={'t2'}
            animated={false}
            tabBarPosition="left"
            tabDirection="vertical"
          >
            <div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              
            </div>
            <div style={{  alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      )
  }
}


export default Maintab;