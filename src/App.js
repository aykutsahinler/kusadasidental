import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeOne from './Components/HomeOne';
import Header from './Components/Header/Header';
import FooterOne from './Components/Footer/FooterOne';
import About from './Components/Page/About';
import Team from './Components/Page/Team';
import ServiceDetails from './Components/Page/ServiceDetails';
import DentistDetails from './Components/Page/DentistDetails';
import Contact from './Components/Page/Contact';
import BlogDetails from './Components/Page/BlogDetails';
import FooterData from './Components/Data/FooterData';
import './App.css';

function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Header />

        <Route
          exact
          path='/'
          render={(props) => (
            <React.Fragment>
              <HomeOne />
            </React.Fragment>
          )}
        />

        <Route path='/Page/About' component={About} />
        <Route path='/Page/CosmeticDentistry' component={ServiceDetails} />
        <Route path='/Page/DigitalDentistry' component={DentistDetails} />
        <Route path='/Page/AfterCare' component={BlogDetails} />
        <Route path='/Page/FAQ' component={Team} />
        <Route path='/Page/Contact' component={Contact} />

        <FooterOne FooterData={FooterData} />
      </Router>
    </div>
  );
}

export default App;
