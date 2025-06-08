import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './components/Title.jsx';

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  useEffect(() => {
    // Chamar API
    const fetchTasks = async () =>{
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', { method: 'GET' });
        const data = await response.json();
        const formattedTasks = data.map(task => ({
          id: task.id,
          title: task.title,
          description: 'This is a sample description',
          isCompleted: task.completed
        }));
        setTasks(formattedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
    // pegar os dados que ela retorna
    // Armazenar/Persistir esses dados no state
  }, []);

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
        <Title>
          Gerenciador de tarefas
        </Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}

export default App
