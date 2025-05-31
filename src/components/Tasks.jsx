import { ChevronRightIcon, TrashIcon } from 'lucide-react';

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
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
                    <button className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">
                        <ChevronRightIcon color="white" size={24} />
                    </button>
                    <button 
                        className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
                        onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon color="white" size={24} />
                    </button>
                </li>
            ))} 
        </ul>
    )
}
export default Task;