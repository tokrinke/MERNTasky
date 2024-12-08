import { TasksContext } from "../contexts/TasksContext";
import { useContext } from "react";

export const useTasksContext = () => {
    const context = useContext(TasksContext)

    if(!context){
        throw Error('context can only be used inside TaskContextProvider')
    }

    return context
}