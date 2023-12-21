

const TaskManagement = () => {
    return (
        <div className="flex items-center justify-between gap-10">
            <div className="flex-1">
                <div className="border-4 border-red-400 rounded-full"></div>
                <h4 className="text-center text-2xl font-bold mt-2">To-Do</h4>
            </div>
            <div className="flex-1">
            <div className="border-4 border-amber-400 rounded-full"></div>
                <h4 className="text-center text-2xl font-bold mt-2">Ongoing</h4>
            </div>
            <div className="flex-1">
            <div className="border-4 border-green-400 rounded-full"></div>
                <h4 className="text-center text-2xl font-bold mt-2">Completed</h4>
            </div>
        </div>
    );
};

export default TaskManagement;