import { useTasksContext } from "../hooks/useTasksContext"
import { CircleCheckBig } from 'lucide-react';

const TaskDetails = ({task}) => {
    const {dispatch} = useTasksContext()
    const handleClick = async () => {
        const response = await fetch('/tasks/'+ task._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_TASK', payload: json})
        }
    }
    return ( <>
        <div className="task">
            <div className="task-details">
                <div className="task-details-top">
                    <div>
                        <h2 className="text-2xl h-10 border-b shadow-sm flex items-center">{task.title}</h2>
                        <p className="text-gray-700 ">{task.description}</p>
                    </div>
                    <div>
                        <strong className="text-sm text-gray-500">Task added at: {task.createdAt.toString().slice(0,10)}</strong>
                    </div>
                </div>
                <div className="task-details-bot">
                    <button onClick={handleClick} className="btn-complete"><CircleCheckBig size={20} />Mark as complete</button>
                </div>
            </div>
        </div>
    </> );
}
 
export default TaskDetails;