import { useForm } from "react-hook-form"
import { LuArrowUpRight } from "react-icons/lu";
import Select from "react-select"


const PostTask = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    return (
        <div>
            <h2 className="text-4xl font-bold">Post a Task</h2>
            <form className="w-full md:w-2/3 mx-auto my-24">
                <label htmlFor="title" className="mx-2 text-lg font-semibold">Title</label>
                <input placeholder="Enter Task Title" id="title" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("title")} required />

                <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                <input type="date" min={new Date().toISOString().split('T')[0]} id="deadline" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("deadline")} required />

                <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                <select id="priority" className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("priority")} required>
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                </select>

                <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                <textarea type="text" rows={30} cols={10} placeholder="Enter Task Description" id="description" className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" {...register("description")} required />

                <br />
                <button type='submit' className="btn w-fit mx-auto mt-4 text-[#074c3e] text-start border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]">
                    Post
                    <LuArrowUpRight className='w-6 h-6' />
                </button>
            </form>
        </div>
    );
};

export default PostTask;