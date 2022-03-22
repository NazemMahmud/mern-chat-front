import { Layout } from "antd";
import {Switch, Route, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {useEffect} from "react";
import Chat from "../containers/Chat";

const { Content } = Layout;



const MainLayout = ({authUser}) => {
    let history = useHistory();

    useEffect(() => {
        pageRedirect();
    }, [authUser]);

    // if not logged in, then redirect to home page
    const pageRedirect = () => {
        if (!authUser || authUser.error) {
            history.push("/login");
        }
    }

    return (
        <Layout>
            <Content className="main-content">
                <Chat />
            </Content>
        </Layout>
    );
}

const mapStateToProps = state  => {
    return { authUser: state.authUser }
}

export default connect(mapStateToProps)(MainLayout)
