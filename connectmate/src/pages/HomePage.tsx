import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';


const HomePage: React.FC = () => {
  return <>
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to={ROUTES.AUTH}>auth</Link>
      <br />
      <Link to={ROUTES.DASHBOARD}>Dashb</Link>
    </div>
  </>;
};

export default HomePage;
