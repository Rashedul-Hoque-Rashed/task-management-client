import { useForm } from "react-hook-form";
import { LuArrowUpRight } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios";
import Swal from "sweetalert2";


const Update = () => {

    const [task] = useLoaderData();
    const { register } = useForm();
    const axios = UseAxios();

    const handelUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const description = form.description.value;

        const updateTask = { title, deadline, priority, description };

        axios.put(`/update/${task._id}`, updateTask)
        .then(data => {
            console.log(data.data);
            if (data.data.modifiedCount > 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Task updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl font-bold">Update a Task</h2>
            <form onSubmit={handelUpdate} className="w-full md:w-2/3 mx-auto my-24">
                <label htmlFor="title" className="mx-2 text-lg font-semibold">Title</label>
                <input type="text" defaultValue={task.title} placeholder="Enter Task Title" name="title" id="title" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("title")} required />

                <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                <input defaultValue={task.deadline} type="date" name="deadline" min={new Date().toISOString().split('T')[0]} id="deadline" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("deadline")} required />

                <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                <select defaultValue={task.priority} id="priority" name="priority" className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("priority")} required>
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                </select>

                <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                <textarea defaultValue={task.description} type="text" name="description" rows={30} cols={10} placeholder="Enter Task Description" id="description" className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" {...register("description")} required />

                <br />
                <button type='submit' className="btn w-fit mx-auto mt-4 text-[#074c3e] text-start border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]">
                    Update
                    <LuArrowUpRight className='w-6 h-6' />
                </button>
            </form>
        </div>
    );
};

export default Update;