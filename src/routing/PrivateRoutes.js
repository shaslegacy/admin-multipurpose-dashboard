import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
    const getTokenFromLocaleStorage = JSON.parse(localStorage.getItem("user"));
    console.log(getTokenFromLocaleStorage?.token)
    return getTokenFromLocaleStorage?.token !== undefined ? children : (<Navigate to='/' replace={true} />)
}