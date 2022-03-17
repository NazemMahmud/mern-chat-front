import React, {useState} from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Chat from './containers/Chat.js';
import {AuthLayout, MainLayout} from "./Layout/MainLayout";
import SnackBar from "./components/shared/Snackbar";


function App() {
    const [error, setError] = useState({
        error: false,
        message: ''
    });
    const handleCallback = message  => {
        // console.log('HERE ', message);
        setError({error: true, message })
        // console.log('error ', error);
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
                        {/*true ? <MainLayout /> : <AuthLayout />*/}
                        <AuthLayout snackbarCallBack = {handleCallback}  />
                    </Switch>
                </Router>

                {/*<Chat />*/}
            </div>
        </div>
        // </Layout>
    );
}

export default App;
