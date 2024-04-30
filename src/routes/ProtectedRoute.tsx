import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ROLE} from "../utils/data";

interface ProtectedRouteProps {
    children: JSX.Element;
    roles?: Array<ROLE>;
}

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRoles, setUserRoles] = useState<string[]>([]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const userItem = JSON.parse(user);
            setUserRoles(userItem.role);
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []); // Run once on mount

    const userHasRequiredRole = roles && userRoles.some(role => roles.includes(role));

    const checkUserRole = () => {
        if (!userHasRequiredRole) {
            navigate("/404");
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            checkUserRole();
        }
    }, [isLoggedIn]); // Run when isLoggedIn changes

    return isLoggedIn ? children : null;
};

export default ProtectedRoute;
