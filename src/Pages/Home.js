import React, { useState } from 'react'
import '../Styles/HomePage.css'
import CreateNewTask from './CreateNewTask'
import TaskView from './TaskView'


function Home() {

    const [isShowCreateTask, setShowCreateTask] = useState(false);


    return (
        <div className="general">
            {isShowCreateTask ?
                <div>
                    <button onClick={() => setShowCreateTask(!isShowCreateTask)}>Create New Task</button>
                    <div className="modal-overlay">
                        <div className="modal">
                            <button className="positive-button" onClick={() => setShowCreateTask(!isShowCreateTask)}>Submit</button>
                            <button className="negative-button" onClick={() => setShowCreateTask(!isShowCreateTask)}>Cancel</button>
                            <CreateNewTask />
                        </div>
                    </div>
                </div>
                :
                <div>
                    <button onClick={() => setShowCreateTask(!isShowCreateTask)}>Create New Task</button>
                </div>}

            <TaskView/>

        </div>
    )
}

export default Home;