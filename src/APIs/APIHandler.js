import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with the backend server's URL

// This is the primary function of this class.  It handles the actual traffic as a standardized call.
async function handleAPICall(path) {

    let fullURL = API_BASE_URL + path;

    try {
        const response = await axios.get(fullURL);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${path} data:`, error);
        throw error;
    }
}


/*
    All API calls can now be defined with a simple URL path definition
    Note: the path here may be different than the path to the SQL query file.
    This path should be the path defined in the database.js file APIs section
*/

export const getAllUsers = async () => {
    let path = "/Users/FullUserDownload";
    return await handleAPICall(path);
};

export const getAllTasks = async () => {
    let path = "/Tasks/GetAllTasks";
    return await handleAPICall(path);
};

export const getAllGoals = async () => {
    let path = "/Goals/GetAllGoals";
    return await handleAPICall(path);
};