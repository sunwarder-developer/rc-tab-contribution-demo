import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import '../../assets/allow-scroll-tab-cross-tab-on-touch-move.less';

export default () => {
  const [destroy, setDestroy] = React.useState(false);
  if (destroy) {
    return null;
  }

  return (
    <React.StrictMode>
       <div className="App">
      <Tabs allowScrollCrossTabOnTouchMove={true} defaultActiveKey="2">
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
