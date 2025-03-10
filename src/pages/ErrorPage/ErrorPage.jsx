// import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
import './ErrorPage.css';
const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="center">
        <Link to="/" className="btn primary">
          Go Back Home
        </Link>
        <h2>Page Not Found</h2>
      </div>
    </section>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
