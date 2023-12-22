import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Hooks/UseAxios";
import Lottie from "lottie-react";
import loading from '../../public/loading.json'


const TaskManagement = () => {

    const axios = UseAxios();

    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('/tasks');
            return res.data
        }
    })

    const todoTasks = tasks.filter(task => task.status === 'To-Do');
    const ongoingTasks = tasks.filter(task => task.status === 'Ongoing');
    const completedTasks = tasks.filter(task => task.status === 'Completed');

    if(isLoading){
        return <div className="my-40 flex justify-center">
        <Lottie animationData={loading} className="h-96 w-96" />
    </div>
    }


    return (
        <div className="flex justify-between gap-10 flex-col lg:flex-row">
            <div className="flex-1">
                <div className="border-4 border-red-400 rounded-full"></div>
                <h4 className="text-center text-2xl font-bold mt-2 mb-6">To-Do</h4>
                <div>
                    {
                        todoTasks.map(task => <div key={task._id} className="card bg-base-100 shadow-xl mb-4">
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                <h2 className="card-title text-[#222E48] ">{task.title}</h2>
                                <h4 className="text-[#222e48] text-base font-medium">Deadline: {task.deadline}</h4>
                                </div>
                                <p className="text-[#222E48] my-2">{task.description}</p>
                                <p className="text-base font-medium text-white px-4 py-2 bg-rose-700 w-fit rounded-full">{task.priority}</p>
                                <div className="flex items-center mt-4 gap-4 flex-col md:flex-row">
                                    <img src={task.userImage} alt="" className="w-14 h-14 rounded-full"/>
                                    <div>
                                        <h4 className="text-[#222E48] font-medium">{task.userName}</h4>
                                        <h6 className="text-[#222E48] text-sm font-medium">{task.userEmail}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="flex-1">
                <div className="border-4 border-amber-400 rounded-full"></div>
                <h4 className="text-center text-2xl font-bold mt-2 mb-6">Ongoing</h4>
                <div>
                    {
                        ongoingTasks.map(task => <div key={task._id} className="card bg-base-100 shadow-xl mb-4">
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                <h2 className="card-title text-[#222E48] ">{task.title}</h2>
                                <h4 className="text-[#222e48] text-base font-medium">Deadline: {task.deadline}</h4>
                                </div>
                                <p className="text-[#222E48] my-2">{task.description}</p>
                                <p className="text-base font-medium text-white px-4 py-2 bg-rose-700 w-fit rounded-full">{task.priority}</p>
                                <div className="flex items-center mt-4 gap-4 flex-col md:flex-row">
                                    <img src={task.userImage} alt="" className="w-14 h-14 rounded-full"/>
                                    <div>
                                        <h4 className="text-[#222E48] font-medium">{task.userName}</h4>
                                        <h6 className="text-[#222E48] text-sm font-medium">{task.userEmail}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="flex-1">
                <div className="border-4 border-green-400 rounded-full"></div>
                <h4 className="text-center text-2xl font-bold mt-2 mb-6">Completed</h4>
                <div>
                    {
                        completedTasks.map(task => <div key={task._id} className="card bg-base-100 shadow-xl mb-4">
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                <h2 className="card-title text-[#222E48] ">{task.title}</h2>
                                <h4 className="text-[#222e48] text-base font-medium">Deadline: {task.deadline}</h4>
                                </div>
                                <p className="text-[#222E48] my-2">{task.description}</p>
                                <p className="text-base font-medium text-white px-4 py-2 bg-rose-700 w-fit rounded-full">{task.priority}</p>
                                <div className="flex items-center mt-4 gap-4 flex-col md:flex-row">
                                    <img src={task.userImage} alt="" className="w-14 h-14 rounded-full"/>
                                    <div>
                                        <h4 className="text-[#222E48] font-medium">{task.userName}</h4>
                                        <h6 className="text-[#222E48] text-sm font-medium">{task.userEmail}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;