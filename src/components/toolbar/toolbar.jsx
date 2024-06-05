import { useEffect } from 'react';
import { useState } from 'react';
import './toolbar.css';
import cross from '../../assets/cross.png';
import moveIcon from '../../assets/move.png';
import selectionIcon from '../../assets/selection.png';
import lassoIcon from '../../assets/lasso.png';
import magicIcon from '../../assets/magic.png';
import cropIcon from '../../assets/crop.png';
import eyeIcon from '../../assets/eye.png';
import healingIcon from '../../assets/healing.png';
import brushIcon from '../../assets/brush.png';
import stampIcon from '../../assets/stamp.png';
import historyIcon from '../../assets/history.png';
import eraserIcon from '../../assets/eraser.png';
import gradientIcon from '../../assets/gradient.png';
import blurIcon from '../../assets/blur.png';
import dodgeIcon from '../../assets/dodge.png';
import penIcon from '../../assets/pen.png';
import textIcon from '../../assets/text.png';
import pathIcon from '../../assets/path.png';
import rectangleIcon from '../../assets/rectangle.png';
import handIcon from '../../assets/hand.png';
import magIcon from '../../assets/mag.png';
import editIcon from '../../assets/edit.png';
import Draggable from 'react-draggable';

const Toolbar = () => {
  const [cursor, setCursor] = useState('');

  useEffect(() => {
    const handleClick = (cursorType) => () => {
      setCursor(`url(${cursorType}), auto`);
    };

    document.querySelectorAll('.toolbar-btn').forEach((btn) => {
      const cursorType = btn.getAttribute('data-cursor');
      btn.addEventListener('click', handleClick(cursorType));
    });

    return () => {
      document.querySelectorAll('.toolbar-btn').forEach((btn) => {
        const cursorType = btn.getAttribute('data-cursor');
        btn.removeEventListener('click', handleClick(cursorType));
      });
    };
  }, []);

  return (
    <Draggable>
      <div id="toolbar">
        <div className="tbtop">
          <img className="nicross" src={cross} alt="" />
        </div>
        <div className="tbbody">
          <ul>
            <li><button className="toolbar-btn" data-cursor={`url(${moveIcon}), auto`}><img src={moveIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${selectionIcon}), auto`}><img src={selectionIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${lassoIcon}), auto`}><img src={lassoIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${magicIcon}), auto`}><img src={magicIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${cropIcon}), auto`}><img src={cropIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${eyeIcon}), auto`}><img src={eyeIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${healingIcon}), auto`}><img src={healingIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${brushIcon}), auto`}><img src={brushIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${stampIcon}), auto`}><img src={stampIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${historyIcon}), auto`}><img src={historyIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${eraserIcon}), auto`}><img src={eraserIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${gradientIcon}), auto`}><img src={gradientIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${blurIcon}), auto`}><img src={blurIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${dodgeIcon}), auto`}><img src={dodgeIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${penIcon}), auto`}><img src={penIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${textIcon}), auto`}><img src={textIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${pathIcon}), auto`}><img src={pathIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${rectangleIcon}), auto`}><img src={rectangleIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${handIcon}), auto`}><img src={handIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${magIcon}), auto`}><img src={magIcon} alt="" /></button></li>
            <li><button className="toolbar-btn" data-cursor={`url(${editIcon}), auto`}><img src={editIcon} alt="" /></button></li>
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default Toolbar;
