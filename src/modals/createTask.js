import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    //const [taskName, setTaskName] = useState('');
    //const [description, setDescription] = useState('');
    const [formValue, setFormValue] = useState({
      ID: "",
      Name:"",
      Deadline: "",
      IsCompleted: "",
    });

    const handleChange = (event) => {
      const{name, value} = event.target
      setFormValue((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    };
    const {ID, Name, Deadline, IsCompleted} = formValue;
    const handleSave = (event) => {
      event.preventDefault()
      let taskObj = {}
      taskObj["ID"] = ID
      taskObj["Name"] = Name
      taskObj["IsCompleted"] = IsCompleted
      taskObj["Deadline"] = Deadline
      save(taskObj)
    }
    
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
          
                  <div className = "form-group">
                      <label>ID</label>
                      <input type="text" className = "form-control" value = {ID} onChange = {handleChange} name = "ID"/>
                  </div>
                  <div className = "form-group">
                      <label>Name</label>
                      <input type="text" className = "form-control" value = {Name} onChange = {handleChange} name = "Name"/>
                  </div>
                  <div className = "form-group">
                      <label>Deadline</label>
                      <input type="date" className = "form-control" value = {Deadline} onChange = {handleChange} name = "Deadline"/>
                  </div>
                  <div className = "form-group" >
                      <label>State</label>
                      <input type="text" className = "form-control" value = {IsCompleted} onChange = {handleChange} name = "IsCompleted"/>
                  </div>
                
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={handleSave}>Create New</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
         </Modal>
    );
};

export default CreateTaskPopup;