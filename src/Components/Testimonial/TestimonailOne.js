import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';

class TestimonailOne extends Component {
  render() {
    return (
      <section className='testimonial-one-wrapper '>
        <div className='hero-shape service-shape'>
          <img
            src={require('../../assets/img/shape/rmc.png')}
            alt='modinatheme'
            className='shape shape2'
          />
          <img
            src={require('../../assets/img/shape/plusgs.png')}
            alt='modinatheme'
            className='shape shape4'
          />
          <img
            src={require('../../assets/img/shape/plusg.png')}
            alt='modinatheme'
            className='shape shape6'
          />
          <img
            src={require('../../assets/img/shape/plusr.png')}
            alt='modinatheme'
            className='shape shape8'
          />
          <img
            src={require('../../assets/img/shape/sgdot.png')}
            alt='modinatheme'
            className='shape shape9'
          />
        </div>
        <div className='container'>
          <SectionTitleOne BigTitle='Testimonials' />

          <div className='row align-items-center col-12'>
            <div className='author-bio-section col-md-12 col-12'>
              <img
                src={require('../../assets/img/kusadasi-dental-logo.png')}
                style={{
                  width: '65px',
                  height: '65px',
                  backgroundColor: '#e3e3e3',
                  borderRadius: '50%',
                }}
                alt=''
              />
              <h4>
                <span>Anonymous Patient</span>
              </h4>
              <span>
                I’m so happy I chose Kusadasi Dental Care for my dental
                implants! Dr. Aybuke Bakir was incredibly patient and thorough
                with the entire procedure, and the staff made me feel
                comfortable the whole time. I highly recommend them to anyone
                looking for quality implants.
              </span>
            </div>

            <div className='author-bio-section col-md-12 col-12'>
              <img
                src={require('../../assets/img/kusadasi-dental-logo.png')}
                style={{
                  width: '65px',
                  height: '65px',
                  backgroundColor: '#e3e3e3',
                  borderRadius: '50%',
                }}
                alt=''
              />
              <h4>
                <span>Anonymous Patient</span>
              </h4>
              <span>
                I was nervous about getting zirconia crowns but Kusadasi Dental
                Care made the whole process easy. Dr. Aybuke explained
                everything clearly and made sure I understood the process. I
                absolutely love my new smile! I get so many compliments!
              </span>
            </div>

            <div className='author-bio-section col-md-12 col-12'>
              <img
                src={require('../../assets/img/kusadasi-dental-logo.png')}
                style={{
                  width: '65px',
                  height: '65px',
                  backgroundColor: '#e3e3e3',
                  borderRadius: '50%',
                }}
                alt=''
              />
              <h4>
                <span>Anonymous Patient</span>
              </h4>
              <span>
                This is the only dental office I’ve ever been to that actually
                feels welcoming. Everyone is so kind and friendly. I’ve been a
                patient here for several years now, and I wouldn’t go anywhere
                else.
              </span>
            </div>
            <div className='author-bio-section col-md-12 col-12'>
              <img
                src={require('../../assets/img/kusadasi-dental-logo.png')}
                style={{
                  width: '65px',
                  height: '65px',
                  backgroundColor: '#e3e3e3',
                  borderRadius: '50%',
                }}
                alt=''
              />
              <h4>
                <span>Anonymous Patient</span>
              </h4>
              <span>
                "I can’t recommend Kusadasi Dental Care enough. They truly have
                the best equipment and technology to make your smile perfect.
                Aybuke and the staff went above and beyond to help me achieve my
                dream smile!"
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TestimonailOne;
