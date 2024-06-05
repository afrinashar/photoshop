 import Fullpage from './components/fullpage/Fullpage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import { PlainDraggable } from 'plain-draggable';
import './App.css';

const App = () => {
  return (
    <Fullpage>
      {/* Your content here */}
    </Fullpage>
  );
}

export default App;


// import  { useEffect } from 'react';
// import { AppBar, Toolbar as MuiToolbar, IconButton, Typography, Container } from '@mui/material';
// import { PhotoCamera } from '@mui/icons-material';
// import { FabricJSCanvas } from 'fabricjs-react';

// import Canvas from './components/Canvas';
// import Toolbar from './components/Toolbar';
// import LayerControls from './components/LayerControls';
// import useCanvasHistory from './hooks/useCanvasHistory';
// import useFabricJSEditor from './hooks/useFabricJSEditor';

// import './App.css';

// function App() {
//   const { editor, onReady } = useFabricJSEditor();
//   const { saveHistory, undo, redo } = useCanvasHistory(editor?.canvas);

//   useEffect(() => {
//     if (editor) {
//       const savedCanvas = localStorage.getItem('canvas');
//       if (savedCanvas) {
//         editor.canvas.loadFromJSON(savedCanvas, () => {
//           editor.canvas.renderAll();
//         });
//       }
//     }
//   }, [editor]);

//   const saveToLocalStorage = () => {
//     const json = editor.canvas.toJSON();
//     localStorage.setItem('canvas', JSON.stringify(json));
//   };

//   const addRectangle = () => {
//     editor.addRectangle();
//     saveHistory();
//     saveToLocalStorage();
//   };

//   const addCircle = () => {
//     editor.addCircle();
//     saveHistory();
//     saveToLocalStorage();
//   };

//   const addText = () => {
//     editor.addText('Hello, world!');
//     saveHistory();
//     saveToLocalStorage();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         editor.canvas.setBackgroundImage(e.target.result, () => {
//           editor.canvas.renderAll();
//           saveHistory();
//           saveToLocalStorage();
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const saveImage = () => {
//     const dataURL = editor.canvas.toDataURL();
//     const link = document.createElement('a');
//     link.href = dataURL;
//     link.download = 'image.png';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const useBrush = () => {
//     editor.canvas.isDrawingMode = true;
//     saveHistory();
//     saveToLocalStorage();
//   };

//   const useEraser = () => {
//     editor.canvas.isDrawingMode = false;
//     editor.canvas.on('mouse:down', (opt) => {
//       const pointer = editor.canvas.getPointer(opt.e);
//       const objects = editor.canvas.getObjects().filter((obj) => obj.containsPoint(pointer));
//       objects.forEach((obj) => {
//         editor.canvas.remove(obj);
//       });
//       saveHistory();
//       saveToLocalStorage();
//     });
//   };

//   const applyFilter = () => {
//     const obj = editor.canvas.getActiveObject();
//     if (obj) {
//       obj.filters.push(new fabric.Image.filters.Grayscale());
//       obj.applyFilters();
//       editor.canvas.renderAll();
//       saveHistory();
//       saveToLocalStorage();
//     }
//   };

//   const bringForward = () => {
//     if (editor.canvas.getActiveObject()) {
//       editor.canvas.bringForward(editor.canvas.getActiveObject());
//       saveHistory();
//       saveToLocalStorage();
//     }
//   };

//   const sendBackward = () => {
//     if (editor.canvas.getActiveObject()) {
//       editor.canvas.sendBackwards(editor.canvas.getActiveObject());
//       saveHistory();
//       saveToLocalStorage();
//     }
//   };

//   return (
//     <div className="App">
//       <AppBar position="static">
//         <MuiToolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <PhotoCamera />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Photoshop-like App
//           </Typography>
//         </MuiToolbar>
//       </AppBar>
//       <Container>
//         <Toolbar
//           actions={{
//             loadImage: handleFileChange,
//             saveImage,
//             addRectangle,
//             addCircle,
//             addText,
//             useBrush,
//             useEraser,
//             applyFilter,
//             bringForward,
//             sendBackward,
//             undo,
//             redo,
//           }}
//         />
//         <LayerControls bringForward={bringForward} sendBackward={sendBackward} />
//         <Canvas onReady={onReady} />
//       </Container>
//     </div>
//   );
// }

// export default App;
