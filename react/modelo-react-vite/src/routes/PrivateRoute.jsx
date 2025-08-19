import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ element: Element, isClosed }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Element />;
}

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isClosed: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isClosed: false,
};

export default PrivateRoute;
