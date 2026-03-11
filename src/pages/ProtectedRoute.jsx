import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  //return children;// if the user hasnt logged in,when the page loads, before the use effect, the children will be null and throw an error, the below is necessary

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
