import React, { Component } from 'react';
import Banner from '../Banner';
import SectionTitleOne from '../SectionTitleOne';
import Appointment from '../Appointment';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner pageTitle='About Us' />

        <section className='about-page-top-content-wrap section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-12 col-lg-8 offset-lg-2 text-center'>
                <div className='section-text-wrap'>
                  <h1>Our Dental Practice</h1>
                  <p>
                    Kusadasi Dental Care has been proud to combine modern
                    techniques and high-tech equipment with a warm, friendly and
                    caring environment. Our top priority is to provide you and
                    your family with the highest quality dental care available
                    in a comfortable and state-of-the-art environment. Dt. Bakir
                    and her team deliver a personalized and comfortable dental
                    care experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='patient-focused-wrap section-padding text-white section-bg text-center'>
          <div className='container'>
            <SectionTitleOne BigTitle='Patient Focused Approach' />

            <div className='row'>
              <div className='col-md-6 col-lg-4 col-12'>
                <div className='best-service-item-box'>
                  <div className='service-box-icon'>
                    <img
                      src={require('../../assets/img/icons/like.png')}
                      alt=''
                    />
                  </div>
                  <h3>
                    <a href='.#'>Understanding Approach</a>
                  </h3>
                  <p>
                    We understand how traumatic and difficult dental treatment
                    can be. We offer you a comfortable treatment without causing
                    pain or triggering trauma.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 col-12'>
                <div className='best-service-item-box'>
                  <div className='service-box-icon'>
                    <img
                      src={require('../../assets/img/icons/love.png')}
                      alt=''
                    />
                  </div>
                  <h3>
                    <a href='.#'>Family</a>
                  </h3>
                  <p>
                    With the warm and sincere conversation that our dental team
                    will establish with you, you can reach us 7/24 and we will
                    answer your questions on any subject you wish.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 col-12'>
                <div className='best-service-item-box'>
                  <div className='service-box-icon'>
                    <img
                      src={require('../../assets/img/icons/respect.png')}
                      alt=''
                    />
                  </div>
                  <h3>
                    <a href='.#'>Outcome</a>
                  </h3>
                  <p>
                    We do not promise to make you laugh throughout your life,
                    but we promise that you will have smiles that you can laugh
                    without hesitation in every happy moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='promo-content-section promo-bg section-padding'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className=' col-12'>
                <div className='promo-text mt-5 mt-lg-0'>
                  <h2>Experimental Dentistry</h2>
                  <p>
                    Smiling comes naturally to Dt. Aybüke İlayda Bakır. She has
                    embraced Cosmetic Dentistry and has redesigned the smiles
                    for the thousands of patients.
                  </p>
                  <p>
                    Dt. Bakır believes in providing her patients with more than
                    just world-class dental care. She also helps patients
                    recognize the vital connection between dental health and
                    whole body health. A graduate of the University of İzmir
                    Katip Çelebi of Dentistry, Dt. Bakır is a leader in the
                    movement to bring environmental sanity and well-being into
                    the dental world for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-bg text-white promo-bg section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusr.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/plusg.png')}
              alt=''
              className='shape promo2'
            />
            <img
              src={require('../../assets/img/shape/circle1.png')}
              alt=''
              className='shape promo3'
            />
            <img
              src={require('../../assets/img/shape/bluef.png')}
              alt=''
              className='shape promo4'
            />
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo5'
            />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12 col-lg-6 col-12 mb-4 mb-lg-0'>
                <img
                  src={require('../../assets/img/service-details-promo2.png')}
                  alt=''
                />
              </div>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Evidence Based Dentistry</h2>
                  <p>
                    An approach to oral healthcare that requires the judicious
                    integration of systematic assesments of clinically relevant
                    scientific evidence, relating to patient's oral and medical
                    condition and history,with the dentists' clinical expertise
                    and the patient's treatment needs and preferences.
                  </p>
                  <p>
                    The goal of evidence-based dentistry is to help
                    practitioners provide their patients with optimal care.This
                    is achieved by integrating sound research evidence with
                    personal clinical expertise and patient values to determine
                    the best course of treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/plusg.png')}
              alt=''
              className='shape promo2'
            />
            <img
              src={require('../../assets/img/shape/dotmr.png')}
              alt=''
              className='shape promo3'
            />
            <img
              src={require('../../assets/img/shape/xsrdot.png')}
              alt=''
              className='shape promo4'
            />
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo5'
            />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Dental Ethics</h2>
                  <p>
                    Simply means moral duties and obligations of the dentists
                    towards the patients and to the society.It deals with
                    choices made by both clinicians and patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-bg text-white promo-bg section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusr.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/plusg.png')}
              alt=''
              className='shape promo2'
            />
            <img
              src={require('../../assets/img/shape/circle1.png')}
              alt=''
              className='shape promo3'
            />
            <img
              src={require('../../assets/img/shape/bluef.png')}
              alt=''
              className='shape promo4'
            />
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo5'
            />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12 col-lg-6 col-12 mb-4 mb-lg-0'>
                <img
                  src={require('../../assets/img/minimal-mudahale.jpeg')}
                  alt=''
                  style={{ transform: 'rotate(90deg)' }}
                />
              </div>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Minimally Invasive Dentistry</h2>
                  <p>
                    The goal of minimally invasive dentistry is to conserve
                    healthy tooth structure.It focuses on
                    prevention,remineralization,and minimal dentist
                    intervention. Using scientific advances,minimally invasive
                    dentistry allows dentists to perform the least amount of
                    dentistry needed while never removing more of the tooth
                    structure than is required to restore teeth to their normal
                    condition. In addition,in minimally invasive
                    dentistry,dentists use long-lasting dental materials that
                    conserve the maximum tooth structure so the need for future
                    repairs is reduced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/plusg.png')}
              alt=''
              className='shape promo2'
            />
            <img
              src={require('../../assets/img/shape/dotmr.png')}
              alt=''
              className='shape promo3'
            />
            <img
              src={require('../../assets/img/shape/xsrdot.png')}
              alt=''
              className='shape promo4'
            />
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo5'
            />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Preventive Dentistry</h2>
                  <p>
                    Is a branch of dentistry that focuses on maintaining good
                    oral health and preventing dental issues before they
                    occur.It plays a crucial role in reducing the risk of
                    various dental problems such as cavities,gum disease,enamel
                    wear,and more serious conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-bg text-white promo-bg section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusr.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/plusg.png')}
              alt=''
              className='shape promo2'
            />
            <img
              src={require('../../assets/img/shape/circle1.png')}
              alt=''
              className='shape promo3'
            />
            <img
              src={require('../../assets/img/shape/bluef.png')}
              alt=''
              className='shape promo4'
            />
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo5'
            />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12 col-lg-6 col-12 mb-4 mb-lg-0'>
                <img
                  src={require('../../assets/img/dijital-dentist-approach.jpeg')}
                  alt=''
                />
              </div>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Digital Dentistry</h2>
                  <p>
                    With expeditious evolution in the digital dentistry,it's now
                    feasible for the dentists to make their practice more
                    efficient,productive via use of computer aided technology.
                    Though many of digital Technologies are slow to be
                    incorporated into dental practice but,still there are
                    maximum dentists reaping the benefits of digital dentistry.A
                    quantum leap in intraoral imaging,CAD/CAM and digital
                    impressions have led dentists to convey additional
                    information to the patients,improved communication along
                    with exceptional documentation of existing dental
                    issues,collaborate with the dental lab easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/plusg.png')}
              alt=''
              className='shape promo2'
            />
            <img
              src={require('../../assets/img/shape/dotmr.png')}
              alt=''
              className='shape promo3'
            />
            <img
              src={require('../../assets/img/shape/xsrdot.png')}
              alt=''
              className='shape promo4'
            />
            <img
              src={require('../../assets/img/shape/plusb.png')}
              alt=''
              className='shape promo5'
            />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>Multidisciplinary Dentistry</h2>
                  <p>
                    Multidisciplinary dentistry refers to dental treatment that
                    uses more than one type of dental tactic.This type of
                    multilevel care occurs when there are complex cases that
                    need to be treated in many steps. Often we come across this
                    type of situation when dental care has been put off or
                    ignored for many years. The key is to buid a team of
                    like-minded,dedicated professionals WHO share a common goal
                    of providing optimum oral healthcare to patients.
                  </p>
                  <ul>
                    <li>
                      The Team Approach Advantages Personalized treatment
                      options
                    </li>
                    <li>
                      Advanced technology and 3d imaging Surgery performed by
                      experienced specialist Quality ımplant lab and components
                    </li>
                    <li>Hygiene maintanance and follow-up</li>
                  </ul>
                </div>
              </div>
              <div className='col-md-12 col-lg-6 col-12 mt-4 mt-lg-0'>
                <img
                  src={require('../../assets/img/service-details-promo1.png')}
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-8 offset-lg-2 text-center'>
              <div className='section-text-wrap pb-25'>
                <h1>Safety First</h1>
                <p>
                  Since 1998, Donto Dentistry has been proud to combine modern
                  techniques and high-tech equipment. Dr. John Dae, Micha and
                  his team deliver a personalized and comfortable dental care
                  experience unlike any other Mason dentist.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-12'>
              <div className='single-video-item'>
                <div className='col-md-12 col-lg-6 col-12 mt-4 mt-lg-0'>
                  <img
                    src={require('../../assets/img/safetyfirst.jpeg')}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-12'>
              <div className='single-video-item'>
                <div className='col-md-12 col-lg-6 col-12 mt-4 mt-lg-0'>
                  <img
                    src={require('../../assets/img/safetyfirst2.jpeg')}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Appointment />
      </React.Fragment>
    );
  }
}

export default About;
