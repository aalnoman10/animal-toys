import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    if (user) {
        return children
    }
    else if (loading) {
        return <>lo</>
    }
    return navigate('/login', { state: { from: location }, replace: true });


};

export default PrivateRoute;