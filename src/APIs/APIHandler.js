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