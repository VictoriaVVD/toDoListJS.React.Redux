import React from "react";
import { GiCheckMark } from "react-icons/gi";
import cn from "classnames";

const CheckIcon = ({isCompleted}) => {
    return (
        <span className={cn("rounded w-6 h-6 border-2 border-lime-500 mr-3", {
            "bg-lime-500": isCompleted,
        })}>
            {isCompleted &&
                <GiCheckMark size={20} className="fill-cyan-700 p-0.5" />
            }
        </span>
    )
}

export default CheckIcon