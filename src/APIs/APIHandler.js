import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with the backend server's URL

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Users/FullUserDownload`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const getAllTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Tasks/GetAllTasks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Task data:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const getAllGoals = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Goals/GetAllGoals`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Goal data:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const getAPIData = async (queryDefinition) => {

    const apiUrl = "";

    try {
        fetch('../Database/sql/queries/SQL_query_definitions.json')
            .then(response => response.json())
            .then(data => {
                const { folder, query } = data.GoalsDownloadByUser;
                apiUrl = API_BASE_URL + folder + query;
            })
            .catch(error => {
                console.error(`Error fetching ${queryDefinition} data:`, error);
            });

        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${queryDefinition} data:`, error);
        throw error;
    }
}