import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFabricJSEditor from '../hooks/useFabricJSEditor';

const Canvas = ({ onReady }) => {
  const { editor } = useFabricJSEditor();

  useEffect(() => {
    if (editor) {
      onReady(editor);
    }
  }, [editor, onReady]);

  return <canvas id="canvas" className="canvas" />;
};

Canvas.propTypes = {
  onReady: PropTypes.func.isRequired,
};

export default Canvas;
