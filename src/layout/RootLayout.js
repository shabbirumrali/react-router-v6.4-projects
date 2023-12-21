import { Outlet, NavLink } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums';

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <header>
        <nav>
          <h4>HEJ.</h4>

          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>

      <main>
        <BreadCrums />
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout