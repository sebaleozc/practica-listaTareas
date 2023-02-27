import React, { useState } from "react";
import Form from "../components/Form";
import "../styles/tasksList.css";
import Tasks from "./Tasks";


  /* I add Form and Tasks in one component */
export default function TasksList(){

  const [tasks, setTasks] = useState([]);

  const addTask = task => {   /* the task is passed from Form */
    if(task.text.trim()){      /* string is not empty? */
      task.text = task.text.trim(); /* remove empty spaces */
      
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }   
  }

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  } 

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        task.complete = !task.complete;
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  return(
    <>
      <Form onSubmit={addTask} />  
      <div className="tasksList__container">
        {
          tasks.map( (task) => 
            <Tasks
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </>
  );

}