import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    <h1>Protected</h1>
 if (!isLoggedIn) {
 return <Navigate to="/" replace />;
 }
 return children;
};
export default Protected;