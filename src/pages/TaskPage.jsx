import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

const TaskPage = () => {

    const navigate = useNavigate();
    // Obtem os parâmetros de busca da URL
    const [searchParams] = useSearchParams();
    const taskId = searchParams.get("id");
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className='w-[500px] space-y-4'>
                <div className="flex justify-center relative mb-6">
                    <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0">
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da tarefa</Title>
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-white font-bold">Tarefa: {title}</h2>
                    <p className="text-white">ID: {taskId}</p>
                    <p className="text-white">Descrição: {description}</p>
                </div>
            </div>
        </div>
    );
}
export default TaskPage;