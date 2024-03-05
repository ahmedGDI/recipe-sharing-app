// App.js
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleView = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div>
    {isSignIn ? <SignIn toggleView={toggleView} /> : <SignUp toggleView={toggleView} />}
        </div>
    );
}

export default App;
