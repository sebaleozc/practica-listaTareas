import React, { useState } from "react";
import "../styles/form.css";
import { v4 as uuidv4 } from "uuid";

                                  /*props from TaskList   */
export default function FormIn ({ onSubmit }){

  const [input, setInput] = useState("");

  const changeHandler = e => {
    setInput(e.target.value);
  }

  const sendHandler = (e)=>{
      e.preventDefault();
      
      const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }
    onSubmit(newTask)
  }

  return(
    <form className="form__container" onSubmit={sendHandler}>
      <input 
        className="form__input"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={changeHandler}
      />
      <button className="form__button">Add a Task</button>
    </form>
  );
}