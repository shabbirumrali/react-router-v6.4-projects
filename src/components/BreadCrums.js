import { Link, useLocation } from 'react-router-dom';

const BreadCrums = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
        .filter(crumb => crumb != '')
        .map(crumb => {
            currentLink = `/${crumb}`;
            return (
                <div className='crumbs' key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })
  return (
    <div className='breadcrumbs'>{crumbs}</div>
  )
}

export default BreadCrums