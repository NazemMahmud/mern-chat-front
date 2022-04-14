import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import SnackBar from "./components/shared/Snackbar";
import Login from "./components/Authentication/Login";
import {getUserData} from "./utility/utils";


function App({authUser}) {
    const [error, setError] = useState({
        error: false,
        message: ''
    });

    const [authLayout, setLayout] = useState(true);

    useEffect(() => {
        if (getUserData()) {
            setLayout(false);
        } else {
            setLayout(true);
        }
    }, [authUser])
    // to show snackbar error message
    const handleCallback = message  => {
        setError({error: true, message })
    }

    return (
        // <Layout >
        //     <Router>
        //         <Switch>
        //             true ? <MainLayout /> : <AuthLayout />
        //         </Switch>
        //     </Router>
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
        // </Layout>
    );
}
const mapStateToProps = state  => {
    return { authUser: state.authUser }
}

export default connect(mapStateToProps)(App);
