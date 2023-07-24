
import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import TaskList from './components/TaskList/TaskList';


const data = [
  {
    id: 1,
    task: "Lorem ipsum dolor sit amet",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Lorem ipsum dolor sit amet",
    isCompleted: false,
  }
];

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([
      {
        id: todos.length + 1,
        task,
        isCompleted: false,
      },
      ...todos,
    ])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(e => e.id !== id))
  }

  const toggleCheckIcon = (id) => {
    const currentTask = todos.find(e => e.id === id);
    currentTask.isCompleted = !currentTask.isCompleted;
    setTodos(todos)
  }

  return (
    <div className="flex justify-center">
      <div className='p-5 flex-col space-y-5'>
        <h2 className='font-bold text-2xl text-center'>Todo List</h2>
        <NewTask addTask={addTask} />
        <TaskList todos={todos} toggleCheckIcon={toggleCheckIcon} removeTodo={removeTodo} />
      </div>   
    </div>
  )
}

export default App;
