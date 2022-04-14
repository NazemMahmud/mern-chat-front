import {Route, Switch} from "react-router-dom";

import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";

const AuthLayout = props => {
    // const [auth] = useAuth();

    return (
        <div style={{margin: '0 auto'}}>
            {/*<Layout>*/}
            {/*<Layout style={{ minHeight: "90vh" }}>*/}
            {/* <Content className='main-content'>*/}

            <Switch>
                <Route exact path="/login" render={() => (<Login {...props} />) } />
                <Route exact path="/signup" render={() => (<Registration {...props} />) } />
                {/*            <Route*/}
                {/*                render={({ location }) => {*/}
                {/*                    return auth.isAuthenticated ? (*/}
                {/*                        <Redirect to="/dashboard" />*/}
                {/*                    ) : (*/}
                {/*                        <Redirect*/}
                {/*                            to={{*/}
                {/*                                pathname: "/login",*/}
                {/*                                state: { from: location }*/}
                {/*                            }}*/}
                {/*                        />*/}
                {/*                    )*/}
                {/*                }}*/}
                {/*            />*/}
            </Switch>
            {/* </Content>*/}
            {/*</Layout>*/}
            {/*</Layout>*/}
        </div>
    );
}

export default AuthLayout;
