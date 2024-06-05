import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const useFabricJSEditor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    // Initialize the Fabric.js canvas
    const canvas = new fabric.Canvas('canvas');
    setEditor({
      canvas,
      addRectangle: () => {
        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          fill: 'red',
          width: 100,
          height: 100,
        });
        canvas.add(rect);
      },
      addCircle: () => {
        const circle = new fabric.Circle({
          left: 100,
          top: 100,
          fill: 'blue',
          radius: 50,
        });
        canvas.add(circle);
      },
      addText: (text) => {
        const textObj = new fabric.Text(text, {
          left: 100,
          top: 100,
          fill: 'black',
        });
        canvas.add(textObj);
      },
    });

    return () => {
      // Cleanup the Fabric.js canvas on unmount
      canvas.dispose();
    };
  }, []);

  return { editor };
};

export default useFabricJSEditor;
