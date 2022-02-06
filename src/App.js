import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Chat from './containers/Chat.js';
import {AuthLayout, MainLayout} from "./Layout/MainLayout";


function App() {
    return (
        // <Layout >
        //     <Router>
        //         <Switch>
        //             true ? <MainLayout /> : <AuthLayout />
        //         </Switch>
        //     </Router>
        <div className="App">
            <div className="main__body">
                <Router>
                    <Switch>
                        {/*true ? <MainLayout /> : <AuthLayout />*/}
                        <AuthLayout />
                    </Switch>
                </Router>

                {/*<Chat />*/}
            </div>
        </div>
        // </Layout>
    );
}

export default App;
