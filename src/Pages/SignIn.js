import '../Styles/SignIn.css';
import React, { useState } from 'react';
import { useUserContext } from '../Resources/UserContext'
import useAPIHandler from '../APIs/APIHandler'


function SignIn() {

    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const { updateData } = useUserContext();

    async function LogIn() {

        try {
            const users = await useAPIHandler("fullUserDownload");
            console.log(users.current);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        updateData('displayName', displayName);
        setDisplayName("");
        setPassword("");
    }

    function handleUsernameChange(event) {
        setDisplayName(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <>
            <div>
                <form className="sign-in-card">
                    <div>
                        <input
                            onChange={handleUsernameChange}
                            value={displayName}
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            onChange={handlePasswordChange}
                            value={password}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <button onClick={LogIn} type="button"> Log In </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;