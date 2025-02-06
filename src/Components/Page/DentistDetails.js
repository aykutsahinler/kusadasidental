import React, { Component } from 'react';
import Appointment from '../Appointment';
import Banner from '../Banner';

class DentistDetails extends Component {
  render() {
    var bg = require('../../assets/img/digital-section-1.jpeg');
    var achievementImg = require('../../assets/img/digital-section-2.jpg');
    var digitalSection3 = require('../../assets/img/digital-section-3.jpeg');
    var digitalSection4 = require('../../assets/img/digital-section-4.jpeg');

    return (
      <React.Fragment>
        <Banner pageTitle='Digital Dentistry' />

        <section className='dentist-details-wrap section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 col-lg-8 col-12'>
                <div className='single-dentist-details'>
                  <h2>What is Digital Dentistry?</h2>
                  <p>
                    Digital dentistry involves the use of computer-assisted
                    devices, techniques, and technologies for diagnosis,
                    treatment planning, and execution of dental procedures. It
                    encompasses both fully and partially computerized methods to
                    enhance precision, reduce human error, and minimize
                    treatment times.
                  </p>
                  <p>
                    These digital methods are designed to improve accuracy,
                    reduce errors, and shorten the time needed for treatments,
                    ranging from routine fillings to more complex procedures
                    like implants. Digital technologies now support a variety of
                    dental applications, including aesthetic planning, smile
                    design, orthodontics, and porcelain veneers.
                  </p>
                  <p>
                    A key benefit of digital production techniques is the
                    ability to store data related to fillings, veneers, bridges,
                    orthodontic appliances, and other patient-specific
                    treatments. This data can be kept in a database for future
                    reference, allowing for the replication of dental
                    restorations without the need to retake measurements.
                  </p>
                  <p>
                    Additionally, current scans of a patient’s oral condition
                    can be archived and compared with future scans to track
                    changes such as wear, displacement, or other alterations in
                    the dental structure.
                  </p>
                </div>
              </div>
              <div className='col-md-5 col-lg-4 col-12'>
                <div className='dentist-profile-details'>
                  <div
                    className='profile-img bg-cover mt-50'
                    style={{ backgroundImage: 'url(' + bg + ')' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='achievements-content-section section-padding pt-0 pb-0'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6 col-lg-6 col-12'>
                <div
                  className='achievement-img-banner bg-cover bg-center mt-50 mb-30'
                  style={{ backgroundImage: 'url(' + achievementImg + ')' }}
                ></div>
              </div>
              <div className='col-md-6 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Digital Surgical Guide (Surgical Guided Implants)</h2>
                  <p>
                    A digital surgical guide significantly enhances the success
                    of implant procedures by ensuring implants are placed at the
                    most optimal angle and position relative to the jawbone.
                    This technique helps reduce bleeding by eliminating the need
                    for extensive gum removal.
                  </p>
                  <p>
                    Prior to using a digital surgical guide, 3D tomography scans
                    are taken to create detailed images of the jawbone. This
                    data allows for precise planning of the implant’s size,
                    angle, and placement to effectively replace missing teeth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='dentist-details-wrap section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 col-lg-6 col-12'>
                <div className='single-dentist-details'>
                  <h2>Digital Smile Design</h2>
                  <p>
                    Digital tools enable dentists to align a patient’s teeth,
                    gums, lips, and facial features with great precision to
                    create a smile that is both natural and aesthetically
                    pleasing. Digital smile design focuses on a patient-specific
                    approach, ensuring that each smile is uniquely tailored to
                    the individual’s features.
                  </p>
                </div>
              </div>
              <div className='col-md-5 col-lg-6 col-12'>
                <div className='dentist-profile-details'>
                  <div
                    className='profile-img bg-cover mt-30'
                    style={{ backgroundImage: 'url(' + digitalSection3 + ')' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='achievements-content-section section-padding pt-0 pb-0'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6 col-lg-4 col-12'>
                <div
                  className='achievement-img-banner bg-cover bg-center mb-30'
                  style={{ backgroundImage: 'url(' + digitalSection4 + ')' }}
                ></div>
              </div>
              <div className='col-md-6 col-lg-8 col-12'>
                <div className='promo-text'>
                  <h2>Digital Measurement and Scanning</h2>
                  <p>
                    Traditional measurement methods can sometimes trigger a gag
                    reflex, making it difficult to obtain accurate data. Digital
                    measurement systems, however, minimize these issues by
                    transferring images into a virtual space for precise
                    computer modeling. This method improves accuracy and
                    comfort, reducing patient discomfort during the process.
                  </p>
                  <p>
                    Teeth are scanned using optical cameras, and 3D scans
                    provide precise measurements, ensuring high-quality outcomes
                    for dental procedures.
                  </p>
                </div>
                <div className='promo-text mt-20'>
                  <h2>Digital 3D Imaging</h2>
                  <p>
                    Advanced 3D tomography x-rays now allow dental professionals
                    to create detailed images of teeth and anatomical structures
                    in just 30 seconds. This technology enables highly accurate
                    implant and aesthetic treatments, reducing risks through
                    careful planning.
                  </p>
                </div>
                <div className='promo-text mt-20'>
                  <h2>InLab System</h2>
                  <p>
                    The InLab CAD software is optimized for CAD/CAM systems in
                    dental laboratories, providing a more seamless experience
                    for both scanning and production units. As a standalone CAD
                    tool, it is flexible, user-friendly, and tailored to meet
                    the specific needs of various dental applications, with an
                    emphasis on efficiency and precise design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Appointment />
      </React.Fragment>
    );
  }
}

export default DentistDetails;
