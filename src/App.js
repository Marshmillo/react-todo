import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import InputTask from './components/InputTask';
import {useState, useEffect} from 'react'
import TaskContent from './components/TaskContent';

function App() {
  let initialTasks = JSON.parse(localStorage.getItem('tasks'));

  if(!initialTasks){
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const currentTasks = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTasks);
  }

  useEffect(() => {
    if(initialTasks){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, [initialTasks, tasks]);
  return (
    <Container>
      <Header/>
      <InputTask createTask={createTask}/>
      <TaskContent tasks={tasks} deleteTask={deleteTask}></TaskContent>
    </Container>
  );
}

export default App;
