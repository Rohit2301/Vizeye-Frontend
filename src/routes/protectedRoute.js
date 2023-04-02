import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const location = useLocation();
  return (
    <>
      {loading === false &&
        (isAuthenticated === false ? (
          <Navigate
            to="/signUp"
            state={{ from: location.pathname }}
            replace={true}
          />
        ) : (
          children
        ))}
    </>
  );
};

export default ProtectedRoute;
