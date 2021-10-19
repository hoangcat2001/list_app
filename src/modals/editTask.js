import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [formValue, setFormValue] = useState({
        Name: "",
        Deadline: "",
        IsCompleted:"",
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
    
      const {Name, Deadline, IsCompleted } = formValue;

    const handleUpdate = (event) => {
        event.preventDefault();
        let tempObj = {}
        tempObj['Name'] = Name
        tempObj['IsCompleted'] = IsCompleted
        tempObj['Deadline'] = Deadline
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control" value = {Name} onChange = {handleChange} name = "Name"/>
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <input type="date" className="form-control"  value={Deadline} onChange= {handleChange} name="Deadline"/>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" className = "form-control" value = {IsCompleted} onChange = {handleChange} name = "IsCompleted"/>
                
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;