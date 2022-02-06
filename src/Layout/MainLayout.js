import { Layout } from "antd";
import {Switch, Route} from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";

const { Content } = Layout;

export const AuthLayout = () => {
    // const [auth] = useAuth();

    return (
        <div>
            {/*<Layout>*/}
            {/*<Layout style={{ minHeight: "90vh" }}>*/}
            {/* <Content className='main-content'>*/}

                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Registration} />
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