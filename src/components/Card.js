import React, { useState } from "react";
import EditTaskPopup from "../modals/editTask";

const Card= ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#b4a7d6",
            secondaryColor : "#d9d2e9"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#fff2cc"
        },
    
    ]
    const toggle =() =>{
        setModal (!modal);
    }
    const updateTask = (obj) =>{
        updateListArray(obj, index)
    }
    const handleDelete = () => {
        deleteTask(index)
    }

    return(
        <div class = "card-wrapper mr-5" >
        <div class = "card-top" style={{"background-color": colors[index%2].primaryColor}}></div>
        <div class = "task-holder">
            <span class = "card-header" style={{"background-color": colors[index%2].secondaryColor, "border-radius": "10px"}}>{taskObj.ID}</span>
            <p className = "mt-3">Name: {taskObj.Name}</p>
            <p className = "mt-3">Deadline: {taskObj.Deadline}</p>
            <p className = "mt-3">State: {taskObj.IsCompleted}</p>

            <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                <i class = "far fa-edit mr-3" style={{"color" : colors[index%2].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                <i class="fas fa-trash-alt" style = {{"color" : colors[index%2].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
            </div>
        </div> 
        <EditTaskPopup modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;