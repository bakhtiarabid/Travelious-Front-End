import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
   const { user, isLoading } = useAuth();
   if (isLoading) {
      return (
         <div className="text-center">
            {" "}
            <Spinner animation="border" variant="danger" />
         </div>
      );
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            user.displayName ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: "/login",
                     state: { from: location },
                  }}
               ></Redirect>
            )
         }
      ></Route>
   );
};

export default PrivateRoute;
