import { NavLink } from 'react-router-dom'

const FallBack = () => {
  return (
    <div className='fallback_container'>
        <h4>Something went wrong</h4>
        <p>back to <NavLink to="/">homepage</NavLink></p>
    </div>
  )
}

export default FallBack;