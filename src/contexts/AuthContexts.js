import {createContext, useContext, useState} from "react";
// import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const profile = {};
    const [isAuthenticated, setIsAuthenticated] = useState(); // profile !== null

    const handleAuth = (result, prf) => {
        setIsAuthenticated(false); // result
    }

    const auth = { isAuthenticated, profile };
    const data = [auth, handleAuth];
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context == undefined) {
        throw new Error("provider needed");
    }

    return context;
}

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// }