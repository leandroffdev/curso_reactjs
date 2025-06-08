import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    const onSeeDetailsClick = (task) => {
        // Redireciona para a página de detalhes da tarefa
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/tasks?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{
            tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick(task.id)} 
                        className="bg-slate-400 w-full text-white p-2 rounded-md cursor-pointer">
                        {task.title}
                        {task.isCompleted ? "COMPLETE" : "INCOMPLETE"}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">
                        <ChevronRightIcon color="white" size={24} />
                    </Button>
                    <Button 
                        className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
                        onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon color="white" size={24} />
                    </Button>
                </li>
            ))} 
        </ul>
    )
}
export default Task;