import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../APIs/APIHandler'

const CreateNewTask = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Example of calling the getAllUsers function
        getAllUsers()
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading user...</p>
    }

    if (!users) {
        return <p>No user found.</p>
    }


    return (
        <>
            <div>
                {users.map((user) => (
                    <div key={user.user_id}>
                        <h2>User Details:</h2>
                        <p>Name: {user.first_name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                    ))
                }
            </div>
        </>
    );
};

export default CreateNewTask;