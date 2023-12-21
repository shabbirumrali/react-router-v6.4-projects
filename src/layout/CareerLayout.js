import { Outlet } from 'react-router-dom';

const CareerLayout = () => {
  return (
    <div className='careers_container'>
        <h3>Careers</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

        <Outlet />
    </div>
  )
}

export default CareerLayout