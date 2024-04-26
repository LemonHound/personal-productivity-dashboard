import React from 'react'

function Projects() {


    return (
        <>
            <h2 className="project-page">Current Projects</h2>
            <div className="flex">
                <div>
                    <h3 className="project-title">Sample Project 1</h3>
                    <br />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKN-mZ3kHrQbk7flS9ImX_LGKRppEQLepPjs5PqE-7xQ&s" alt="" />
                </div>
                <div>
                    <h3 className="project-title">Sample Project 2</h3>
                    <br />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3068BeG8p-8hLyGyD4PmkMp6_djq8VQQnntbM9gqcbw&s" alt="" />
                </div>
            </div>
        </>
    )
}

export default Projects;