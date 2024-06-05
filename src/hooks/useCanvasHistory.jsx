import { useState, useCallback } from 'react';

const useCanvasHistory = (canvas) => {
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const saveHistory = useCallback(() => {
    const json = canvas.toJSON();
    setHistory([...history.slice(0, currentIndex + 1), json]);
    setCurrentIndex(currentIndex + 1);
  }, [canvas, history, currentIndex]);

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      canvas.loadFromJSON(history[currentIndex - 1], () => {
        canvas.renderAll();
        setCurrentIndex(currentIndex - 1);
      });
    }
  }, [canvas, history, currentIndex]);

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      canvas.loadFromJSON(history[currentIndex + 1], () => {
        canvas.renderAll();
        setCurrentIndex(currentIndex + 1);
      });
    }
  }, [canvas, history, currentIndex]);

  return { saveHistory, undo, redo };
};

export default useCanvasHistory;
