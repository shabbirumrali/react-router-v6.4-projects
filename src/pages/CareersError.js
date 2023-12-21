import { Link, useRouteError } from 'react-router-dom';

const CareersError = () => {
  const error = useRouteError();
  
  return (
    <div>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to Homepage</Link>
    </div>
  )
}

export default CareersError