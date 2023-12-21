import { Link, useLoaderData } from 'react-router-dom';

const Careers = () => {
  const careers = useLoaderData();   
  
  return (
    <div className="career">
        {careers.map(career => (
          <Link to={`${career.id}`} className='career_element'  key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))}
    </div>
  )
}

export const careerLoader = async () => {
  const response = await fetch('http://localhost:4000/careers');
  if(!response.ok) {
    throw Error('Could not fetch data for careers');
  }
  return response.json();
}

export default Careers;