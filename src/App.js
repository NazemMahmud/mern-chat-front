import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import SnackBar from "./components/shared/Snackbar";
import {getUserData} from "./utility/utils";


function App() {
    const [error, setError] = useState({
        error: false,
        message: ''
    });

    const [authLayout, setLayout] = useState(true);

    useEffect(() => {
        setLayout(getUserData() ? false : true);
    }, [])
    // to show snackbar error message
    const handleCallback = message  => {
        setError({error: true, message })
    }

    return (
        <div className="App">
            <div className="main__body">
                {error.error ? <SnackBar data={error} /> : ''}
                <Router>
                    <Switch>
                        {
                            authLayout ? <AuthLayout snackbarCallBack={handleCallback}/>
                                : <MainLayout/>
                        }
                    </Switch>
                </Router>
            </div>
        </div>

    );
}

export default App;
