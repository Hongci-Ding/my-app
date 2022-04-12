import ZipMap from './complements/ZipMap';
import './App.css';
import BoundaryMap from './complements/Boundry'
import Todo from './complements/Todo';
import Backdrop from './complements/Backdrop';

function App() {
  return (
    <div>
      <h1>My todo</h1>
      <Todo text = "i am so funny"></Todo>
      <ZipMap></ZipMap>
    </div>
  );
}

export default App;
