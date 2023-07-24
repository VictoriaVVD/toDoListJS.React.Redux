import React, { useState } from "react";

const NewTask = ({addTask}) => {

    const [task, setTask] = useState("");
    
    return (
        <input className="bg-lime-300 w-full rounded-2xl p-2 text-white outline-none" 
            type="text" 
            placeholder="Add a task"
            onChange={e => setTask(e.target.value)}
            value={task}
            onKeyPress={e => e.key === "Enter" && addTask(task)}
        />
    )
}

export default NewTask