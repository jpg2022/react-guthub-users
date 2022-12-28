import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;
  // console.log(isAuthenticated);
  // console.log(user);
  if (!isUser) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default PrivateRoute;

// const { isAuthenticated, user } = useAuth0();
// const isUser = isAuthenticated && user;

// return (
//   <Route
//     {...rest}
//     render={() => {
//       return isUser ? children : <Redirect to="login" />;
//     }}
//   ></Route>
// );
