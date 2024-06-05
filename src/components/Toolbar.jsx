import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { PhotoCamera, Save, Layers, LayersClear, Brush, Delete, FilterVintage, Undo, Redo } from '@mui/icons-material';

const Toolbar = ({ actions }) => {
  const fileInputRef = useRef(null);

  return (
    <div className="toolbar">
      <input type="file" ref={fileInputRef} onChange={actions.loadImage} style={{ display: 'none' }} />
      <Button variant="contained" color="primary" onClick={() => fileInputRef.current.click()} startIcon={<PhotoCamera />}>
        Load Image
      </Button>
      <Button variant="contained" color="secondary" onClick={actions.saveImage} startIcon={<Save />}>
        Save Image
      </Button>
      <Button variant="contained" color="default" onClick={actions.addRectangle} startIcon={<Layers />}>
        Add Rectangle
      </Button>
      <Button variant="contained" color="default" onClick={actions.addCircle} startIcon={<LayersClear />}>
        Add Circle
      </Button>
      <Button variant="contained" color="default" onClick={actions.addText} startIcon={<Brush />}>
        Add Text
      </Button>
      <Button variant="contained" color="default" onClick={actions.useBrush} startIcon={<Brush />}>
        Brush
      </Button>
      <Button variant="contained" color="default" onClick={actions.useEraser} startIcon={<Delete />}>
        Eraser
      </Button>
      <Button variant="contained" color="default" onClick={actions.applyFilter} startIcon={<FilterVintage />}>
        Apply Filter
      </Button>
      <Button variant="contained" color="default" onClick={actions.bringForward} startIcon={<Layers />}>
        Bring Forward
      </Button>
      <Button variant="contained" color="default" onClick={actions.sendBackward} startIcon={<LayersClear />}>
        Send Backward
      </Button>
      <Button variant="contained" color="default" onClick={actions.undo} startIcon={<Undo />}>
        Undo
      </Button>
      <Button variant="contained" color="default" onClick={actions.redo} startIcon={<Redo />}>
        Redo
      </Button>
    </div>
  );
};

Toolbar.propTypes = {
  actions: PropTypes.shape({
    loadImage: PropTypes.func.isRequired,
    saveImage: PropTypes.func.isRequired,
    addRectangle: PropTypes.func.isRequired,
    addCircle: PropTypes.func.isRequired,
    addText: PropTypes.func.isRequired,
    useBrush: PropTypes.func.isRequired,
    useEraser: PropTypes.func.isRequired,
    applyFilter: PropTypes.func.isRequired,
    bringForward: PropTypes.func.isRequired,
    sendBackward: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
  }).isRequired,
};

export default Toolbar;
