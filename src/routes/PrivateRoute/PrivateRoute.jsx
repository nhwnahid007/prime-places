import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/448500/loading.svg"
          alt="Loading icon"
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
