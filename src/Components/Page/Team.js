import React, { Component } from 'react';
import Banner from '../Banner';
import Dentist from '../Team/Dentist';
import TeamData from '../Data/TeamData';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: [
        {
          question:
            'Will I be able to eat like my own teeth after implant treatment?',
          answer:
            'Dental implants fuse very well to the jawbone after the healing period. After the prosthesis phase is completed, patients can eat their food by biting and chewing like their own teeth.',
        },
        {
          question: 'To whom cannot implant treatment be applied?',
          answer:
            'It cannot be applied in the presence of uncontrolled systemic diseases such as diabetes, blood pressure and heart, and gum diseases such as periodontitis. It can be applied after these diseases are controlled or treated. Implant application is not suitable for individuals who have not completed their growth and development (under 18 years of age) or who smoke excessively.',
        },
        {
          question:
            'In what cases does the waiting period for implant treatment become longer?',
          answer:
            'When there is not enough jawbone to place an implant, bone powder is applied before or during implant surgery to support the existing bone. In such a case, the waiting period may extend up to 4-6 months.',
        },
        {
          question: 'How long does implant surgery take?',
          answer:
            'Surgical procedure varies depending on the number of implants to be placed and additional procedures to be performed.',
        },
        {
          question: 'Will I feel pain during implant application?',
          answer:
            'The area where the tooth is missing is anesthetized with local injections applied into the mouth and no pain is felt during the procedure.',
        },
        {
          question: 'Will I feel pain after implant application?',
          answer:
            'A slight pain and swelling is normal after the numbing injection in the mouth wears off. These complaints decrease and disappear after the medication prescribed by the doctor and the application of ice.',
        },
        {
          question:
            'What should I pay attention to at home after placing an implant?',
          answer:
            'As in routine jaw surgery procedures, hot drinks should be avoided and hard foods that will mechanically damage the wound area should be avoided. Cold compresses should not be applied to the procedure area from outside the mouth whenever possible. The wound area and the teeth adjacent to this area should be gently brushed with a soft-bristled brush until the stitches are removed.',
        },
        {
          question: 'Can I continue my normal life after surgery?',
          answer:
            'Our patients can return to their daily lives immediately after surgery. In some cases, a 1-day rest may be recommended.',
        },
        {
          question: 'Will dental implants harm my body?',
          answer:
            'Implants are produced from titanium material, which is compatible with the human body and does not have any toxic effects. In case of titanium allergy, which is very rare, implants made of zirconium can be used safely.',
        },
        {
          question:
            'What are the problems encountered in the late period of implant treatment?',
          answer:
            'After the implant treatment is completed and the patient has had his teeth fixed, problems may occur due to various factors. When teeth are clenched at night: Breakage of implants in the neck area, Breakage or loosening of the support screw on the implant, Breaks and cracks may be seen in the porcelain in the superstructure. Additionally, inflammation (periimplantitis) may occur in the tissue around the implant due to various factors.',
        },
        {
          question:
            'How many dental implants should be applied in cases of multiple missing teeth?',
          answer:
            'In cases where there are no teeth in the mouth or all teeth need to be extracted, it is necessary to evaluate the patient in detail clinically and radiologically to determine the number of implants to be placed. The length and width of the patient’s jaw, whether it is a lower or upper jaw, the width of the smile line and some important anatomical formations are important factors in determining the number of implants. In a healthy mouth, not counting the wisdom teeth, there are a total of 28 teeth, 14 in the lower jaw and 14 in the upper jaw. In case of complete edentulism, 26-28 teeth can be made by placing 8-10 implants in the upper jaw and 6-8 implants in the lower jaw. Since the upper jaw bone has a more spongy structure than the lower jaw, the number of implants placed is generally higher than in the lower jaw. Due to the differences in their connection with the bone, connecting the natural tooth and the implant is not a treatment option we prefer unless we have to. Implants connect natural teeth to each other. In case of 3 missing teeth side by side, 2 implants serve as bridge pillars and a total of 3 teeth are made. In some cases where the jaw bone is not of sufficient thickness and length, 4 implants are placed in the front area to complete the missing teeth with a treatment we call "all-on-four", or the existing or to be reconstructed full prosthesis (palate) is supported with 2 implants.',
        },
        {
          question:
            'When is bone powder (bone graft) applied in implant treatment?',
          answer:
            'Bone powders of synthetic, animal or human origin are produced as particles or blocks after various biological and mechanical processes. Processes using bone meal: Sinus membrane removal (Sinus lift) operation; One of the air spaces found in various parts of the skull is the maxillary sinus, which is in close proximity to the upper jaw. If no treatment is applied for a long time for missing upper jaw molars, these air spaces will sag downwards and dissolve the existing bone. To obtain enough bone to place the implant, the sinus membrane is lifted up and bone powder is placed. When the implant is placed on the same day as tooth extraction; Bone powder is applied to support the area between the implant and the extraction space. In teeth lost as a result of infection; It is applied to support the bone around the implant in cases where the existing infection causes osteoporosis.',
        },
        {
          question: 'Are cosmetic procedures safe?',
          answer:
            'To address safety, cosmetic dentistry procedures are generally safe when performed by a qualified and experienced professional. Most treatments are minimally invasive and use materials that are well-tested and approved for dental use. However, it’s crucial to consult with your dentist to understand the specifics of the procedure you are considering.',
        },
        {
          question: 'What’s a smile makeover?',
          answer:
            'As the name suggests, a smile makeover is a complete reimaging of your smile. Note that a full mouth reconstruction focuses on rebuilding a smile destroyed by disease or damage, a smile makeover is more elective and is done specifically to improve one’s appearance. The dentist will thoroughly evaluate your current smile and advise you on the necessary changes you may want to make. Consider showing your dentist photos of your childhood smile or photos of celebrity smiles you admire.',
        },
        {
          question: 'Who qualifies for cosmetic dentistry?',
          answer:
            'Anyone who is unhappy with their smile or has dental problems that affect their oral health and appearance is a good candidate for cosmetic dentistry. However, healthy teeth and gums are essential before cosmetic dental procedures. In addition, if a person has underlying dental issues such as gum disease or tooth decay, they may need to address them before undergoing cosmetic dentistry.',
        },
        {
          question: 'How long do the effects of cosmetic dentistry last?',
          answer:
            "The longevity of cosmetic dentistry procedures varies depending on the type of treatment and your oral hygiene habits. For instance, teeth whitening typically lasts 6-12 months, while veneers and dental implants can last 10-15 years or more with proper care as the cosmetic dentist instructs. Maintaining good oral hygiene habits, such as brushing and flossing regularly, is essential to ensure the longevity of one's cosmetic dental work.",
        },
        {
          question: 'Will it Look Fake?',
          answer:
            'With veneers, and with whitening, we work with you to find a look you want during your consultation. Porcelain veneers and bridges have been centuries in development, and now new technology can work in utterly minute detail to ensure that your smile looks completely natural. The porcelain layers we work with are thin but strong and can be shaped and coloured to match your smile perfectly.',
        },
        {
          question: 'Will it Hurt?',
          answer:
            'If any procedure is invasive or more likely to cause pain, the area will be locally numbed first. Options for this can be discussed with a specialist during a consultation prior to you receiving the treatment. If you have particularly sensitive teeth, a fear of needles or any other concerns about the physical and pain-related aspects of cosmetic dentistry, don’t hesitate to talk to someone at the practice about it. You’re certainly not the first person with these worries, so don’t think that you won’t be taken seriously. We want all our patients to be as comfortable and happy as possible prior to, during and following their procedure.',
        },
        {
          question: 'When is Root Canal Treatment Necessary?',
          answer:
            'In cases of deep decay that reaches the tooth’s nerve, After trauma causing cracks that affect the tooth’s nerve, For tooth sensitivity due to gum recession or severe wear, If the nerve is exposed during crown restoration procedures. Root canal treatment prevents further infection, alleviates pain, and preserves the tooth.',
        },
        {
          question: 'How is treatment for teeth grinding?',
          answer:
            'To alleviate symptoms, strategies such as stress management, the use of nightguards (splints), pain relievers, muscle relaxants, physical therapy, and Botox injections may be recommended.',
        },
        {
          question: 'Do Veneers Last Forever?',
          answer:
            'Veneers have an average lifespan of 10 to 20 years, depending on the material they are made from. Even if they are protected by good oral care, at the end of this period, they will need to be replaced due to recessions in the gums and stains on porcelain veneers.',
        },
        {
          question: 'How Many Veneers are In a Full Set?',
          answer:
            'Dental veneers are made for aesthetic purposes. Generally, 20 dental veneers are used for a complete set of veneer treatments. 10 of them are placed in the upper jaw, and 10 of them are placed in the lower jaw.',
        },
        {
          question: 'How Long in Advance Do I Need to Book my Treatment?',
          answer:
            'Within a few days, we can usually schedule an appointment for you. However, since we are in a tourist area, it is helpful to call us as early as possible during the summer months.',
        },
        {
          question:
            'Do I Need to Make Two Visits? The First for My Consultation and the Second for My Treatment?',
          answer:
            'This is not the case for our clinic. Having an in-house laboratory and computer-aided production technology, we can complete a wide variety of uncomplicated treatments in a few hours.',
        },
        {
          question: 'What are the Possible Side Effects of Hollywood Smile?',
          answer:
            'Hollywood smile design should be done under the supervision of a skilled cosmetic dentist. Depending on the material used during the treatment, some complications may occur. Especially if metal-supported porcelain (PFM) crowns or bridges are preferred in the posterior areas, color variation may be seen in the future due to the inner metal surface. Apart from this, future problems may also occur due to gingival recession.',
        },
        {
          question: 'Is Hollywood Smile Just Veneers?',
          answer:
            "Veneers typically characterize a Hollywood smile design since they are minimally invasive. However, if the patient's mouth structure is too challenging to be restored using veneers, then a Hollywood smile design can be made by utilizing crowns, implants, or bridges.",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Banner pageTitle='MOST ASKED QUESTIONS' />

        <section className='doctors-wrapper section-padding'>
          <div className='container'>
            {this.state.faq.map((item, index) => (
              <div
                className='col-12 mt-30 pb-30'
                style={{ borderBottom: '1px dashed tomato' }}
                key={item?.question}
              >
                <h4>{index + 1 + ' - ' + item?.question}</h4>
                <p>{item?.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Team;
