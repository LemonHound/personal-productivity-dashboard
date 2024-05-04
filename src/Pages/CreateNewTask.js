import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../APIs/APIHandler'

const CreateNewTask = () => {
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
        
    }

    return (
        <div>

        </div>
    );
};

export default CreateNewTask;