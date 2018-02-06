import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title:'行业龙头' },
  { title:'品牌理念' },
  { title:'三小时送达' },
  { title:'送前实拍' },
];
const tabImg =[
  {imgs:'./src/assets/imgs/other/brand_icon01.png'},
  {imgs:'./src/assets/imgs/other/brand_icon02.png'},
  {imgs:'./src/assets/imgs/other/brand_icon03.png'},
  {imgs:'./src/assets/imgs/other/brand_icon04.png'},
  
];
class TabExample extends Component{
  render(){
    return(
      <div className="main_tabs" style={{height:'9.093333rem'}}>
        <WhiteSpace />
          <StickyContainer>
            <Tabs tabs={tabs}
              initalPage={'t2'}
              renderTabBar={renderTabBar}
            >
              <div className="tabs" style={{alignItems: 'center', justifyContent: 'center' }}>
                <img src="./src/assets/imgs/other/brand001.jpg" />
                <div className="tabs_active">
                  <p>专注鲜花礼品12年，2016年获评“鲜花行业龙头企业”</p>
                </div>
              </div>
              <div className="tabs" style={{alignItems: 'center', justifyContent: 'center' }}>
                <img src="./src/assets/imgs/other/brand002.jpg" />
                <div className="tabs_active">
                  <p>花礼网倡导勇敢表达爱，享受爱的美好</p>
                </div>
              </div>
              <div className="tabs" style={{alignItems: 'center', justifyContent: 'center' }}>
                <img src="./src/assets/imgs/other/brand003.jpg" />
                <div className="tabs_active">
                  <p>覆盖全国1000+城市，最快1~3小时送达</p>
                </div>
              </div>
              <div className="tabs" style={{alignItems: 'center', justifyContent: 'center' }}>
                <img src="./src/assets/imgs/other/brand004.jpg" />
                <div className="tabs_active">
                  <p>坚持公开所有花款实拍，严格管控质量</p>
                </div>
              </div>
            </Tabs>
          </StickyContainer>
        <WhiteSpace />
      </div>
    )
  }
}

export default TabExample;