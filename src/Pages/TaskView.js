import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../APIs/APIHandler'


const TaskView = () => {

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllTasks()
            .then(data => {
                setTasks(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            });
    }, []);

    while (isLoading) {
        return <p>Loading tasks...</p>
    }

    return (
        <>
            <div className="flex-body-left">
                {tasks.map((task) => (
                    <div className="task">
                    <div key={task.task_id}>
                        <h2>{task.name}</h2>
                        <p>{task.description}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    );
}

export default TaskView