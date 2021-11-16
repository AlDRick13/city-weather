import React from 'react';
import {Link} from 'react-router-dom';

//bootstrap
import { Navbar, Container} from 'react-bootstrap';


const MainLayout = ({children}) => {
  
    return (
        <div>
       <Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/">
      <Navbar.Brand >
        <img
          alt=""
          src="https://img.icons8.com/cute-clipart/128/000000/apple-weather.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      Weather App by Aldo!
      </Navbar.Brand>
      </Link>
     
    </Container>
  </Navbar>
  <div className="App">
     
  {children}

   
       </div>
        </div>
    );
};

export default MainLayout;