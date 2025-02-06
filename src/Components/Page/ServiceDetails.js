import React, { Component } from 'react';
import Appointment from '../Appointment';
import Banner from '../Banner';

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner pageTitle='Cosmetic Dentistry' />
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
            <div className='row '>
              <div className='col-md-12 col-lg-12 col-12'>
                <div className='promo-text'>
                  <h2>What is Cosmetic Dentistry?</h2>
                  <p>
                    Cosmetic dentistry, also known as a smile makeover, is a
                    permanent and safe method of enhancing both your smile and
                    overall facial structure. The benefits of a smile makeover
                    extend far beyond just the teeth or smile itself. It is one
                    of the most effective, efficient, and quickest ways to
                    improve your appearance, boost your confidence, and elevate
                    your self-esteem.
                  </p>
                  <p>
                    Cosmetic dentistry addresses a wide range of aesthetic
                    concerns. One of the key advantages of cosmetic dentistry is
                    its versatility. Our treatments can effectively conceal or
                    correct a variety of issues, such as stains, misshapen
                    teeth, teeth that are too small proportionally, chips,
                    cracks, gaps between teeth, uneven gum lines, and much more.
                  </p>
                </div>
                <div className='promo-text mt-30'>
                  <h2>What is Zirconia?</h2>
                  <p>
                    Zirconia is a durable, white, hard material commonly used in
                    dentistry due to its high fracture resistance and
                    compatibility with the tissues. It is one of the most
                    favored materials in dental procedures because it is both
                    robust and biocompatible.
                  </p>
                </div>
              </div>
              <div className='col-md-12 col-lg-8 col-12'>
                <div className='promo-text mt-30'>
                  <h2>Where is Zirconia Used in Dental Treatments?</h2>
                  <p>
                    Zirconia can be utilized for creating veneers for both
                    anterior and posterior teeth. It is also used in the
                    following cases:
                  </p>
                  <ul>
                    <li>
                      For treating severe tooth discoloration or hereditary
                      stains that don't respond well to whitening treatments,
                    </li>
                    <li>
                      As an alternative to orthodontic treatment for cases of
                      slight tooth crowding, spacing, or rotation (such as
                      diastema),
                    </li>
                    <li>To replace old, discolored, or damaged fillings,</li>
                    <li>
                      In implant-supported prostheses to restore lost teeth,
                      both in the front and back regions,
                    </li>
                    <li>To enhance smile aesthetics.</li>
                    <li>What are the Benefits of Zirconium Coatings?</li>
                    <li>
                      Zirconia coatings mimic the pressure resistance of natural
                      teeth and are capable of handling biting and chewing
                      forces effectively.
                    </li>
                    <li>
                      Unlike traditional metal-supported porcelain veneers,
                      which involve stacking porcelain on metal bases (often
                      causing gray discoloration at the gum line), zirconia
                      crowns are a single piece, tooth-colored, and do not lead
                      to gum discoloration.
                    </li>
                    <li>
                      Zirconia’s transparency effect, especially at the edges,
                      can provide a highly natural appearance that blends
                      seamlessly with the patient’s original tooth structure.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-12 col-lg-4 col-12 text-center mt-30'>
                <img
                  src={require('../../assets/img/cosmetic-section-1.jpeg')}
                  alt=''
                />
              </div>
              <div className='col-md-12 col-lg-12 col-12'>
                <div className='promo-text mt-30'>
                  <h2>Who Can Have Zirconia Applications?</h2>
                  <p>
                    Zirconium coatings can be applied to individuals of any age
                    once their permanent teeth have erupted. However, it is not
                    recommended for those under 18-20 years old during their
                    growth period, as jaw development could cause gaps.
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
              <div className='col-md-12 col-lg-5 col-12 text-center mt-30'>
                <img
                  src={require('../../assets/img/cosmetic-section-2.jpeg')}
                  alt=''
                />
              </div>
              <div className='col-md-12 col-lg-7 col-12'>
                <div className='promo-text mt-30'>
                  <h2>Porcelain Laminates</h2>
                  <p>
                    Porcelain veneers offer a solution for enhancing the
                    aesthetics of teeth and creating a more beautiful smile
                    design. A minimal amount of thinning (around 0.3 to 0.5 mm)
                    is done to the front surfaces of the teeth for this
                    procedure.
                  </p>
                </div>
                <div className='promo-text mt-30'>
                  <h2>When Are Porcelain Laminates Not Suitable?</h2>
                  <p>
                    Porcelain laminates are not recommended in the following
                    situations:
                  </p>
                  <ul>
                    <li>Excessive tooth crowding or bite issues,</li>
                    <li>Insufficient tooth length,</li>
                    <li>Severe damage due to cavities,</li>
                    <li>Jaw alignment disorders (Class III malocclusion),</li>
                    <li>
                      For young patients whose permanent teeth have not fully
                      emerged.
                    </li>
                  </ul>
                </div>
                <div className='promo-text mt-30'>
                  <h2>When Are Porcelain Laminates Applied?</h2>
                  <p>
                    Porcelain laminates are typically used in the following
                    cases:
                  </p>
                  <ul>
                    <li>To redesign and enhance the smile,</li>
                    <li>
                      To address decay or old restorations that have lost their
                      original color or form in the front teeth,
                    </li>
                    <li>To correct diastema (gaps between teeth),</li>
                    <li>
                      For teeth that have become discolored due to root canal
                      treatments or tetracycline fluorosis,
                    </li>
                    <li>To repair enamel damage, such as enamel hypoplasia,</li>
                    <li>
                      To correct minor tooth crowding for patients who do not
                      want orthodontic treatment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section section-padding'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusr.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/dotmr.png')}
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
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text'>
                  <h2>What is Teeth Whitening?</h2>
                  <p>
                    Teeth whitening is a cosmetic procedure designed to lighten
                    teeth and reduce discoloration. This is achieved using
                    specialized agents that penetrate the enamel to remove
                    stains, resulting in a whiter, more attractive smile.
                  </p>
                </div>
                <div className='promo-text mt-30'>
                  <h2>What Causes Teeth Discoloration?</h2>
                  <p>
                    Teeth discoloration can occur due to various factors,
                    including:
                  </p>
                  <ul>
                    <li>
                      Frequent consumption of tea, coffee, cigarettes, or
                      colored acidic drinks,
                    </li>
                    <li>
                      Certain medications during pregnancy or breastfeeding,
                    </li>
                    <li>
                      Antibiotics (e.g., tetracycline) used during childhood,
                    </li>
                    <li>Genetic defects in tooth structure,</li>
                    <li>Excessive fluoride exposure from drinking water,</li>
                    <li>Cracks caused by trauma or accidents.</li>
                    <li>Is Teeth Whitening Harmful?</li>
                    <li>
                      Teeth whitening is safe and effective when done under the
                      supervision of a dentist and following proper procedures.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-12 col-lg-6 col-12 mt-30'>
                <img
                  src={require('../../assets/img/cosmetic-section-3.jpeg')}
                  alt=''
                />
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
              <div className='col-md-12 col-lg-6 col-12'>
                <img
                  src={require('../../assets/img/cosmetic-section-4.jpeg')}
                  alt=''
                />
              </div>
              <div className='col-md-12 col-lg-6 col-12'>
                <div className='promo-text mt-30'>
                  <h2>Composite Veneers (Aesthetic Filling Treatment)</h2>
                  <p>
                    Aesthetic filling, or bonding, is a popular cosmetic
                    dentistry procedure where composite materials are adhered to
                    the tooth’s surface without causing damage. It is an
                    affordable and easy method to improve the appearance of
                    teeth.
                  </p>
                </div>
                <div className='promo-text mt-30'>
                  <h2>How is Composite Veneers Applied?</h2>
                  <p>
                    At the dental clinic, photographs of your teeth are taken.
                    The tooth surface is lightly roughened to help the bonding
                    material adhere. Afterward, the composite filling is applied
                    and polished for a natural appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promo-content-section mt-60'>
          <div className='promo-section-shape'>
            <img
              src={require('../../assets/img/shape/plusr.png')}
              alt=''
              className='shape promo1'
            />
            <img
              src={require('../../assets/img/shape/dotmr.png')}
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
              <div className='col-md-12 col-lg-12 col-12'>
                <div className='promo-text'>
                  <h2>What Are the Benefits of Cosmetic Dentistry?</h2>
                  <p>
                    If you are unsatisfied with your smile, you can evaluate the
                    advantages of cosmetic dentistry. Here are some of the
                    advantages of cosmetic dentistry;
                  </p>
                  <h4>It enhances your appearance</h4>
                  <p>
                    Cosmetic dentistry gives your smile a healthier, lively,
                    straighter, and younger look.
                  </p>
                  <h4>It optimises your oral health</h4>
                  <p>
                    Although cosmetic dentistry is performed for aesthetic
                    purposes, its contribution to oral health is excellent. In
                    addition, after cosmetic dental treatments, it is observed
                    that people pay more attention to their oral health in order
                    not to lose their appearance, which affects their general
                    health accordingly
                  </p>

                  <h4>Enhance self-confidence</h4>
                  <p>
                    A defect or deficiency in the teeth is psychologically
                    perceived as a person's shame, and people with visible
                    dental problems try to hide these defects. Cosmetic
                    dentistry is the best way to solve these problems that
                    adversely affect the patient's daily life.
                  </p>

                  <h4>Log-lasting effects</h4>
                  <p>
                    Cosmetic dentistry treatments are long-term solutions. They
                    have an average lifespan of 10 to 20 years. They can be
                    modified at the end of their lifetime.
                  </p>
                </div>
                <div className='promo-text mt-30'>
                  <h2>Why Is Cosmetic Dentistry Cheaper in Turkey?</h2>
                  <p>
                    Aesthetic dental clinics in Turkey is investing in
                    technology and experienced Turkish cosmetic dentist to take
                    their place in dental tourism. Turkish cosmetic dentistry
                    clinics also offer quality dental treatment at quite
                    affordable prices due to the low labor fees and the tax
                    reduction provided by the government to attract more health
                    tourists.
                  </p>
                  <h4>Gum aesthetic</h4>
                  <p>
                    Gingival aesthetics, also called pink aesthetics, corrects
                    the existing recession and asymmetrical disorders in the
                    gums.
                  </p>
                  <h4>Dental crowns</h4>
                  <p>
                    Crowns are applied for more significant tooth loss and
                    require (1 mm–2.5 mm) abrasion from the teeth. In crown
                    treatments, aesthetics come later than functionality.
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

export default ServiceDetails;
