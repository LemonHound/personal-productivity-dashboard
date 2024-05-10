import React, { useState } from 'react';
import '../Styles/CreateNewTask.css'

const CreateNewTask = () => {

    const [taskName, setTaskName] = useState();
    const [taskDescription, setTaskDescription] = useState();
    const [dueDate, setDueDate] = useState();

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }

    function handleTaskDescriptionChange(event) {
        setTaskDescription(event.target.value);

    }

    function handleDueDateChange(event) {
        setDueDate(event.target.value);

    }

    return(
        <>
            <div>
                <form className="new-task-form">
                    <div>
                        <input
                            onChange={handleTaskNameChange}
                            value={taskName}
                            type="text"
                            name="taskName"
                            placeholder="What do you need to do?"
                        />
                    </div>
                    <div className="new-task-description">
                        <input
                            onChange={handleTaskDescriptionChange}
                            value={taskDescription}
                            type="textfield"
                            name="taskDescription"
                            placeholder=""
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleDueDateChange}
                            value={dueDate}
                            type="date"
                            name="taskkDueDate"
                            placeholder="Due Date"
                        />
                    </div>

                </form>
            </div>
        </>
    );
};

export default CreateNewTask;