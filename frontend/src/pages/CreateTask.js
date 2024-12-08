import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext"

const CreateTask = () => {
    const {dispatch} = useTasksContext()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const task = {title, description}

        const response = await fetch('/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDescription('')
            setError(null)
            console.log('success', json)
            dispatch({type: 'CREATE_TASK', payload: json})
        }
    }


    return ( <>
        <div className="create-container">
            <form className="create" onSubmit={handleSubmit}>
                <h3 className="font-extrabold text-3xl">Create New Task</h3>

                <div className="inputs">
                    <label className="font-bold">Task Title:</label>
                    <input
                    maxLength={16}
                    className="input-field overflow-hidden"
                    type="text"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    />
                </div>

                <div className="inputs">
                    <label className="font-bold">Task Description:</label>
                    <textarea 
                    className="input-field"
                    rows={3}
                    maxLength={45}
                    style={{resize: 'none'}}
                    type="text"
                    onChange={(e)=>setDescription(e.target.value)}
                    value={description}
                    />
                </div>

                <button className="button border-blue-500 hover:bg-blue-500 hover:text-white w-48">Add Task</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    </> );
}
 
export default CreateTask;