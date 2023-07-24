import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TaskList = ({todos, removeTodo, toggleCheckIcon}) => {
    
    return (
        <div>
            {todos.map(todo => 
                <TodoItem todo={todo} 
                    toggleCheckIcon={toggleCheckIcon} 
                    removeTodo={removeTodo} 
                    key={todo.id} />
            )}
        </div>
    )
}

export default TaskList

