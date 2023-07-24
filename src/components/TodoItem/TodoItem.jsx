import React from "react";  
import CheckIcon from "../CheckIcon/CheckIcon";
import cn from "classnames";
import { LiaTrashRestoreAltSolid } from "react-icons/lia";


const TodoItem = ({todo, removeTodo, toggleCheckIcon}) => {

    return (
      <div className="flex justify-between items-center">
        <button className="flex items-center rounded-3xl bg-cyan-700 p-5 my-3" onClick={() => toggleCheckIcon(todo.id)} >
          <CheckIcon isCompleted={todo.isCompleted} />
          <span className={cn("text-white", {
            "line-through ": todo.isCompleted,
            })}>
            {todo.task}
          </span>
        </button>
        <button onClick={() => removeTodo(todo.id)}>
          <LiaTrashRestoreAltSolid size={32} />
        </button>
      </div>
    )
}

export default TodoItem