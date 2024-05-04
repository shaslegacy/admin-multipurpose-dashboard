import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
    const getTokenFromLocaleStorage = JSON.parse(localStorage.getItem("user"));
    return getTokenFromLocaleStorage?.token === undefined ? children : (<Navigate to="/admin" replace={true} />)
}