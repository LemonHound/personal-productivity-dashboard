import '../Styles/SignIn.css';
import React, { useState } from 'react';
import { useUserContext } from '../Resources/UserContext'


function SignIn() {

    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const { updateData } = useUserContext();

    async function LogIn() {

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