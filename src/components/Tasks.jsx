import React from "react";
import "../styles/tasks.css"
import { AiTwotoneDelete } from "react-icons/ai";

export default function Tasks({ id, text, complete, completeTask, removeTask }){

  return(
    <div className={ complete ? "tasks__container complete" : "tasks__container"}>
      <div className="tasks__text" onClick={()=> completeTask(id)}>
        {text}
      </div>
      <div className="tasks__container__icon" onClick={()=> removeTask(id)}>
        <AiTwotoneDelete className="tasks__icon"/>
      </div>
    </div>
  );
}