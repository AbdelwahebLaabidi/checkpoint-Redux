import './App.css';
import AddTasks from './Components/AddTasks';
import FilterTasks from './Components/FilterTasks';
import ListeTasks from './Components/ListeTasks';


function App() {
  return (
    <div>
      <h1> To Do Liste</h1>
      <FilterTasks/>
      <br/>
      <ListeTasks/>
      <br/>
      <AddTasks/>
      
    </div>
  );
}

export default App;
