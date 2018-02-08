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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      )
  }
}


export default Maintab;