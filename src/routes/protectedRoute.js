import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading } = useSelector((state) => state.loader);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  return (
    <>
      {loading === false &&
        (!!user === false ? (
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
