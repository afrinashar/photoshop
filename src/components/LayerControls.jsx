import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Layers, LayersClear } from '@mui/icons-material';

const LayerControls = ({ bringForward, sendBackward }) => {
  return (
    <div className="layer-controls">
      <Button variant="contained" onClick={bringForward} startIcon={<Layers />}>
        Bring Forward
      </Button>
      <Button variant="contained" onClick={sendBackward} startIcon={<LayersClear />}>
        Send Backward
      </Button>
    </div>
  );
};

LayerControls.propTypes = {
  bringForward: PropTypes.func.isRequired,
  sendBackward: PropTypes.func.isRequired,
};

export default LayerControls;
