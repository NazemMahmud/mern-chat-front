import { Layout } from "antd";
import {Switch, Route} from "react-router-dom";
import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";

const { Content } = Layout;

export const AuthLayout = props => {
    // const [auth] = useAuth();
    return (
        <div>
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

export const MainLayout = () => {
    return (
        <Layout>
            <Content className="main-content">
                <div>Hiiiii!!!!</div>

            </Content>
        </Layout>
    );
}