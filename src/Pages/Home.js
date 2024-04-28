import React, {useState } from 'react'
import '../Styles/HomePage.css'
import CreateNewTask from './CreateNewTask'

function Home() {

    const [isShowCreateTask, setShowCreateTask] = useState(false);


    return (
        <>
            <button onClick={() => setShowCreateTask(!isShowCreateTask)}>Show Task Creation</button>
            {isShowCreateTask ? <CreateNewTask/> : <div></div>}
        </>
    )
}

export default Home;