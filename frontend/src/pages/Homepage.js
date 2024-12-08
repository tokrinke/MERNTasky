import { useEffect } from "react";
import TaskDetails from "../components/TaskDetails";
import { useTasksContext } from "../hooks/useTasksContext"
import { Loader } from 'lucide-react';

const Homepage = () => {
    const {tasks, dispatch} = useTasksContext()

    useEffect(()=>{
        const fetchTasks = async () =>{
            const response = await fetch('/tasks')
            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_TASKS', payload: json})
            }
        }
        fetchTasks()
    }, [])

    return ( 
    <div className="homepage-container">
        <div className="tasks flex flex-col gap-5 m-1 overflow-y-scroll">
            {tasks && tasks.map((task)=>(
                <TaskDetails key={task._id} task={task}/>
            ))}
        </div>
    </div> 
    );
}
 
export default Homepage;