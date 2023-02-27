import './App.css';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
     <div className='my-tasks__container'>
      <h1>Tasks to do:</h1>
      <TasksList />
     </div>
    </div>
  );
}

export default App;
