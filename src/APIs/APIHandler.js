import React, { useRef, useEffect } from 'react';

function useAPIHandler(value) {

    const APIURL = "http://localhost:3001/api/";

    console.log(APIURL + value);

    const output = useRef(null);


    useEffect(() => {
        // Fetch data from the backend when the component mounts
        fetch(APIURL + value) // Use the const URL + connector targeted from the page calling this handler'
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("data received: ", data);
                output.current = data;
            })
            .catch(error => {
                // Handle fetch errors
                console.error('Fetch error: ', error);
            });
    }, [value]); // Empty dependency array ensures the effect runs only once

    return output;
}

export default useAPIHandler;