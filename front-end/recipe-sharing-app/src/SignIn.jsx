// SignIn.js
import React, { useState } from "react";
import axios from "axios";

function SignIn({ toggleView }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/users/add", {
                name: name,
                password: password
            });
            console.log(response.data);
            if (response.data && response.data.message === 'Login successful') {
                
                console.log("Sign-in successful!");
    
                
            } else {
                
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button onClick={handleSignIn}>Sign In</button>
            <p>Don't have an account? <span onClick={toggleView}>Sign Up</span></p>
        </div>
    );
}

export default SignIn;
