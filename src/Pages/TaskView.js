import React, { useEffect, useState } from 'react';
import { getAllTasks, getAllGoals } from '../APIs/APIHandler'


const TaskView = () => {

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [goals, setGoals] = useState([]);
    const [selectedGoal, setSelectedGoal] = useState(null);

    // Placeholder data for demonstration
    const subTasks = [
        { id: 1, name: 'Sub-task 1', description: 'Description 1', dueDate: '2024-05-15' },
        { id: 2, name: 'Sub-task 2', description: 'Description 2', dueDate: '2024-05-20' },
        { id: 3, name: 'Sub-task 3', description: 'Description 3', dueDate: '2024-05-25' }
    ];

    const handleGoalSelect = (goalId) => {
        setSelectedGoal(goalId);
    };

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
        getAllGoals()
            .then(data => {
                setGoals(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching goals:', error);
                setIsLoading(false);
            })
    }, []);

    while (isLoading) {
        return <p>Loading tasks...</p>
    }


    return (
        <div className="task-list-page">
            <div className="goal-tabs">
                {goals.map((goal) => (
                    <button
                        key={goal.id}
                        className={`goal-tab ${selectedGoal === goal.id ? 'active' : ''}`}
                        onClick={() => handleGoalSelect(goal.id)}
                    >
                        {goal.name}
                    </button>
                ))}
            </div>
            <div className="task-list">
                {tasks
                    .filter((task) => selectedGoal === null || task.goalId === selectedGoal)
                    .map((task) => (
                        <div key={task.id} className="task">
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                            <p>Due: {task.dueDate}</p>
                            <ul>
                                {subTasks.map((subTask) => (
                                    <li key={subTask.id}>
                                        <h4>{subTask.name}</h4>
                                        <p>{subTask.description}</p>
                                        <p>Due: {subTask.dueDate}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TaskView