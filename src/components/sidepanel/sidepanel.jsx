import { useEffect } from 'react';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Draggable from 'react-draggable';
import './sidepanel.css';
import cross from '../../assets/cross.png';

const Sidepanel = () => {
  const [display, setDisplay] = useState('block');

  const handleCrossClick = () => {
    setDisplay('none');
  };

  useEffect(() => {
    document.querySelectorAll('.spcross').forEach((cross) => {
      cross.addEventListener('click', handleCrossClick);
      return () => cross.removeEventListener('click', handleCrossClick);
    });
  }, []);

  return (
    <Draggable>
      <div id="sidepanel" style={{ display: display }}>
        <div className="paneltop">
          <img className="spcross" src={cross} alt="" />
        </div>
        <div className="panelbody">
          <div id="layer-tab">
            <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
              <Tab eventKey="1" title="Layer">
                <div className="sec-1">
                  {/* Content for the first tab */}
                </div>
              </Tab>
              <Tab eventKey="2" title="Menu 1">
                <div className="container tab-pane fade"><br /></div>
              </Tab>
              <Tab eventKey="3" title="Menu 2">
                <div className="container tab-pane fade"><br /></div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Sidepanel;
