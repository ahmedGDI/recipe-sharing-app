// SignUp.js
import React, { useState } from "react";
import axios from "axios";

function SignUp({ toggleView }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/users/getAll", {
                name: name,
                password: password
            });
            console.log(response.data);
            if (response.data && response.data.success) {
                
                console.log("Sign-up successful!");

                
            } else {
                
                setError('Error signing up');
            }
        } catch (error) {
            console.error(error);
            setError('Error signing up');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
            <p>Already have an account? <span onClick={toggleView}>Sign In</span></p>
        </div>
    );
}

export default SignUp;
