import React, { Component } from 'react';
import HeroOne from './Hero/HeroOne';
import FeaturesOne from './Features/FeaturesOne';
import ServiceOne from './Service/ServiceOne';
import Appointment from './Appointment';
import TestimonailOne from './Testimonial/TestimonailOne';
import ServiceData from './Data/ServiceData';
import FeaturesData from './Data/FeaturesData';

class HomeOne extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroOne />
        <FeaturesOne FeaturesData={FeaturesData} />
        {/* <AboutOne /> */}
        <ServiceOne ServiceData={ServiceData} />
        {/* <TeamOne TeamData={TeamData} /> */}
        <Appointment />
        {/* <GalleryOne /> */}
        <TestimonailOne />
        {/* <BlogOne BlogData={BlogData} /> */}
        {/* <Promo /> */}
        {/* <ClientLogos /> */}
      </React.Fragment>
    );
  }
}

export default HomeOne;
