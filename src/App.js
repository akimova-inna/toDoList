import './App.css';
import { ToDoList } from './ToDoList';
import imageOne  from './image1.jpg';
import imageTwo  from './image2.jpg'

function App() {
  return (
    <div className='App'>
    <div className="container" >
      <img src={ imageOne } width="200px" alt="list"/>  
        </div>
    <div className="container">
      <h1>TO DO LIST</h1>
       </div>
         <ToDoList />
    <div className="container">
      <img src={ imageTwo } width="200px" alt="list"/>
    </div>
    </div>
  )
}

export default App;
