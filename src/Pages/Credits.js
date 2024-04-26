import React from 'react'
import '../Styles/Credits.css'

function Credits() {

    return (
        <>
            <div className="flex">
                <div className="contributor">
                    <h2 className="name-card">
                        Kevin Zookski
                    </h2>
                    <h3 className="details">
                        Hi, I'm Kevin.  I designed and created this website using modern React practices.
                    </h3>
                </div>
                <div className="contributor">
                    <h2 className="name-card">
                        Anthony Tselekis
                    </h2>
                    <h3 className="details">

                    </h3>
                </div>
                <div className="contributor">
                    <h2 className="name-card">
                        Kyle Chase
                    </h2>
                    <h3 className="details">

                    </h3>
                </div>
                <div className="contributor">
                    <h2 className="name-card">
                        Matt Kavicky
                    </h2>
                    <h3 className="details">

                    </h3>
                </div>
            </div>
        </>
    )
}

export default Credits;