import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Hooks/UseAxios";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import loading from "../../public/loading.json"


const MyTask = () => {

    const {user} = useContext(AuthContext);
    const axios = UseAxios();

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['myTasks'],
        queryFn: async () => {
            const res = await axios.get(`/tasks/${user.email}`);
            return res.data
        }
    })

    if(isLoading){
        return <div className="my-40 flex justify-center">
        <Lottie animationData={loading} className="h-96 w-96" />
    </div>
    }

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://task-manage-ten.vercel.app/tasks/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Task has been deleted successfully.',
                                    'success'
                                )
                                refetch();
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2 className="text-4xl font-bold">My Task</h2>
            {
                tasks.length === 0 ? <p className="text-4xl font-bold my-24 text-center">You don&apos;t post any task</p> : 
                <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tasks.map(task => <div key={task._id} className="card bg-base-100 shadow-xl mb-4">
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <h2 className="card-title text-[#222E48] ">{task.title}</h2>
                                <div>
                                    <Link to={`/task/myTask/update/${task._id}`}>
                                    <button>
                                        <MdUpdate className="w-14 h-14 text-orange-400 p-2 rounded-xl hover:bg-base-200" />
                                    </button>
                                    </Link>
                                    <button onClick={() => handelDelete(task._id)}>
                                        <MdDelete className="w-14 h-14 text-red-600 p-2 rounded-xl hover:bg-base-200" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-[#222E48] my-2">{task.description}</p>
                            <div className="flex items-center gap-2 w-fit">
                                <p className="text-base font-medium text-white px-4 py-2 bg-rose-700 w-fit rounded-full">{task.priority}</p>
                                <p className="text-base font-medium text-white px-4 py-2 bg-blue-700 w-fit rounded-full">{task.status}</p>
                            </div>
                            <div className="flex items-center mt-4 gap-4 flex-col md:flex-row">
                                <img src={task.userImage} alt="" className="w-14 h-14 rounded-full" />
                                <div>
                                    <h4 className="text-[#222E48] font-medium">{task.userName}</h4>
                                    <h6 className="text-[#222E48] text-sm font-medium">{task.userEmail}</h6>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            }
        </div>
    );
};

export default MyTask;