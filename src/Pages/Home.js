import React, {useState } from 'react'
import '../Styles/HomePage.css'
import CreateNewTask from './CreateNewTask'
import TaskView from './TaskView'


function Home() {

    const [isShowCreateTask, setShowCreateTask] = useState(false);


    return (
        <div className="general">
            <button onClick={() => setShowCreateTask(!isShowCreateTask)}>Create New Task</button>
            {isShowCreateTask ?
                <CreateNewTask />
                :
                <div></div>}

            <TaskView/>

        </div>
    )
}

export default Home;