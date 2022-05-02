import React, { useEffect, useState } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import '../../assets/allow-scroll-tab-cross-tab-on-touch-move.less';
import 'antd/dist/antd.css'; 
import { Switch } from 'antd';
export default () => {
  const [destroy, setDestroy] = React.useState(false);
  if (destroy) {
    return null;
  }
  useEffect(() => {
    if(!localStorage.getItem('allowScrollCrossTabOnTouchMove')){
      localStorage.setItem('allowScrollCrossTabOnTouchMove', 'false');
    }
  }, [])
  const getBooleanFromString = (str: string) => {
    return str === 'true' ? true : false;
  }
  const onAllowScrollCrossTabOnTouchMoveChange = (checked) => {
    alert('Wait For Reload');
    localStorage.setItem('allowScrollCrossTabOnTouchMove', String(checked).valueOf()); 
    window.location.reload();
  }
  
  return (
    <React.StrictMode>
       <div className="App">
       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: '0 0 10px 0'}}>
         <p style={{margin: '0', fontWeight: 'bold'}}>allowScrollCrossTabOnTouchMove:</p>
         <Switch style={{marginLeft: '10px'}} onChange={onAllowScrollCrossTabOnTouchMoveChange} checkedChildren="On" unCheckedChildren="Off" defaultChecked={getBooleanFromString(localStorage.getItem('allowScrollCrossTabOnTouchMove'))} />
       </div>
      <Tabs allowScrollCrossTabOnTouchMove={getBooleanFromString(localStorage.getItem('allowScrollCrossTabOnTouchMove'))} defaultActiveKey="2">
        <TabPane tab="tab 1" key="1">
          <h1>first</h1>
        </TabPane>
        <TabPane tab="tab 2" key="2">
          <h1>second</h1>
        </TabPane>
        <TabPane tab="tab 3" key="3">
          <h1>third</h1>
        </TabPane>
      </Tabs>
      <div className='overflow-content'>
        OVERFLOW SCROLL
      </div>
    </div>
    </React.StrictMode>
  );
};
