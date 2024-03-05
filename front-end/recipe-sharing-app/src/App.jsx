// App.js
import React, { useState, useEffect } from "react";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import axios from "axios";
import AllRecipe from "./components/AllRecipe.jsx";
import CreateRe from "./components/CreateRe.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true); 
    const [view, setView] = useState("allRecipe");
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            fetchRecipes();
        }
    }, [isAuthenticated]);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/recipe/getAll");
            setData(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    const changeView = (view) => {
        setView(view);
    }
  

    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/recipe/${id}`);
            setData(data.filter(recipe => recipe.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const renderView = () => {
        if (!isAuthenticated) {
            return isSignIn ? <SignIn toggleView={toggleView} /> : <SignUp toggleView={toggleView} />;
        } else if (view === "allRecipe") {
            return <AllRecipe items={data} onDelete={deleteRecipe} />;
        } else if (view === "createRe") {
            
            return <CreateRe  fet = {fetchRecipes} func2={changeView} />;
        }
    };

    const toggleView = () => {
        setIsAuthenticated(!isAuthenticated);
        setIsSignIn(!isSignIn)
    };

    return (
        <div>
            {renderView()}
            {isAuthenticated && (
                <nav className="nav">
                    <div className={view !== "createRe" ? "nav-unselected" : "nav-selected"} onClick={() => changeView("createRe")}>
                        Create Post
                    </div>
                    <div className={view === "allRecipe" ? "nav-selected" : "nav-unselected"} onClick={() => changeView("allRecipe")}>
                        All Posts
                    </div>
                </nav>
            )}
            
        </div>
    );
}

export default App;
