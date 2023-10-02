import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const isloggedId = JSON.parse(localStorage.getItem("loggedId"))?.isloggedId || undefined;
    return isloggedId ? children : <Navigate to="/" />;
}


export default PrivateRoute