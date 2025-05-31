import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      descripion: 'Estudar React para aprender a criar aplicações web',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar JavaScript',
      descripion: 'Estudar JavaScript para aprender a criar aplicações web',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Estudar Node.js',
      descripion: 'Estudar Node.js para aprender a criar aplicações web',
      isCompleted: false
    }
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks);
  }

  const onDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  const onAddTaskSubmit = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 text-center flex items-center justify-center">
      <div className='w-[500px] space-y-4'>
        <h1 className='text-red-500text-3xl text-slate-100 font-bold '>
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}

export default App
