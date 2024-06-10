import React, { useState } from 'react';

const dataCollection = [
  {
    question: 'What is National Commission on Indigenous Peoples?',
    answer: 'The National Commission on Indigenous Peoples is the agency of the national government of the Philippines that is responsible for protecting the rights of the indigenous peoples of the Philippines. The commission is composed of seven commissioners. It is attached to the Department of Social Welfare and Development.'
  }, {
    question: 'What is the meaning of COC in indigenous people?',
    answer: 'Certificate of Confirmation (COC) is a written certification issued by the National Commission on Indigenous Peoples (NCIP) to bona fide indigenous peoples confirming his authenticity and ethnicity as an IP as defined/prescribed in Republic Act No.'
  }, {
    question: 'What is the main task of the NCIP or the National Commission on Indigenous People?',
    answer: 'The NCIP shall protect and promote the interest and well-being of the ICCs/IPs with due regard to their beliefs, customs, traditions and institutions. An esteemed Commission committed to the delivery of quality services to ICCs/IPs with their rights fully respected, recognized, promoted, and protected.'
  }, {
    question: 'How is a person classified as Indigenous?',
    answer: 'Indigenous Peoples are distinct social and cultural groups that share collective ancestral ties to the lands and natural resources where they live, occupy or from which they have been displaced.'
  },{
    question: 'What is the age limit for Napolcom?',
    answer: 'Must weigh not more or less than five kilograms (5.0 kg) from the standard weight corresponding to his/her height, age and sex; and Page 4 of NAPOLCOM MC No. 2021-001 Page 5 1 C 11. Must not be less than twenty-one (21) nor more than thirty (30) years of age..'
  }
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index:number) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-20 font-primary">
        <div>
          <span className="text-4xl font-bold text-black pb-5 block">Frequently Asked Questions</span>
          <h1 className="text-xl text-gray-800 mb-8">Find quick answers to common questions about our services, process and
          more. We’re here to help you understand everything you need.</h1>
        </div>
        <div className="accordion__faq space-y-5">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)} className="bg-white p-4 rounded-md shadow cursor-pointer">
              <div className="flex justify-between items-center">
                <h3 className={`font-semibold ${accordion === index ? 'text-gray-900' : 'text-gray-500'}`}>{item.question}</h3>
                <div>
                  {accordion === index ? <span className="text-xl">-</span> : <span className="text-xl">+</span>}
                </div>
              </div>
              <div>
                <p className={`transition-all duration-300 pt-5 ${accordion === index ? 'block' : 'hidden'}`}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
