import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ChildCancerWarningSigns = () => {
  useEffect(() => {
    // Save previous title
    const prevTitle = document.title;
    document.title = "Child Cancer: 5 Early Warning Signs Parents Must Notice";

    // Add meta keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "childhood cancer early signs, cancer symptoms in children, unexplained lumps in kids, persistent fever child cancer, unusual bruising in children, unexplained weight loss kids, persistent headaches children cancer, child cancer awareness month, golden ribbon childhood cancer";
    document.head.appendChild(metaKeywords);

    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Child cancer awareness: Parents should know 5 early warning signs in children, from lumps to fatigue & why early detection improves survival chances.";
    document.head.appendChild(metaDescription);

    // Cleanup
    return () => {
      document.title = prevTitle;
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="space-y-4 max-w-8xl mx-auto px-0 py-6">
      <p>
        Every September, the world comes together to observe{" "}
        <b>Childhood Cancer Awareness Month</b>, symbolized by the{" "}
        <b>golden ribbon</b>. This campaign is more than a reminder—it’s a call
        to action to recognize the early warning signs of cancer in children and
        take immediate steps toward diagnosis and treatment.
      </p>

      <p>
        While <b>childhood cancer</b> is relatively rare, it remains one of the leading
        causes of disease-related deaths in children. The good news is that
        <b> early detection and timely <Link
            to="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >pediatric oncology care</Link></b> can
        significantly improve survival rates. As a parent or caregiver, being
        aware of the <b>child cancer symptoms</b> that require urgent medical
        attention could save a child’s life.
      </p>
      <p>
        Here are five important <b>signs of cancer in children</b> that should never be ignored.

      </p>
      {/* Signs */}
      <h2 className="text-xl font-semibold text-black-600">
        1. Unexplained Lumps or Swelling in Children
      </h2>
      <p>
        One of the earliest and most noticeable <b>child cancer symptoms</b> is
        the appearance of unusual lumps or swelling. These may be painless and
        can occur in areas such as the neck, chest, abdomen, or underarms.
      </p>
      <p>
        While not every lump is cancerous, <b>persistent swelling in children</b> that
        does not go away with time or treatment should raise concern. Conditions
        like <b>lymphoma or solid tumors</b> often present this way. Parents
        should consult a pediatrician immediately if such signs are observed.
      </p>

      <h2 className="text-xl font-semibold text-black-600">
        2. Persistent or Unexplained Fever
      </h2>
      <p>
        Fever is common in children, usually linked to infections. However, a{" "}
        <b>persistent fever in child</b> that does not respond to antibiotics or occurs
        without a clear cause may indicate something more serious.
      </p>
      <p>
        This could be an <b>early warning sign of <Link
            to="https://myewacare.com/our-services#surgeries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >childhood cancer</Link></b>, particularly leukemia <b>leukemia</b> or
        other blood-related cancers. Recurrent fevers,{" "}
        night sweats, or infections that come back often should be
        checked by a doctor as soon as possible.
      </p>

      <h2 className="text-xl font-semibold text-black-600">
        3. Unusual Bruising or Bleeding in Kids
      </h2>
      <p>
        Another red flag is <b>unusual bleeding or bruising in kids</b>. Parents may
        notice frequent nosebleeds, bleeding gums, or tiny red spots on the skin
        (petechiae). Easy bruising without injury is also a warning sign.
      </p>
      <p>
        These symptoms often occur when the bone marrow is unable to produce
        enough healthy blood cells, as seen in <b>leukemia</b> and other blood cancers.
        Immediate medical evaluation is critical to rule out underlying
        conditions.
      </p>

      <h2 className="text-xl font-semibold text-black-600">
        4. Unexplained Weight Loss and Fatigue
      </h2>
      <p>
        Children are usually full of energy. If your child experiences sudden{" "}
        <b>unexplained weight loss</b>, persistent tiredness, or looks unusually
        pale, it could be more than just a growth phase.
      </p>
      <p>
        <b>Unexplained weight loss in children</b>, combined with fatigue, can be linked to 
        <b> childhood cancers</b> like leukemia, lymphoma, or kidney tumors. These symptoms may 
        develop gradually, which is why many parents mistake them for normal health 
        fluctuations. Monitoring these changes closely can make all the difference.
      </p>

      <h2 className="text-xl font-semibold text-black-600">
        5. Persistent Pain and Headaches in Children
      </h2>
      <p>
        <b>Frequent headaches in children</b>—especially when accompanied by vomiting or vision
        problems—should not be dismissed as just migraines or stress. They can
        indicate <b>brain tumors</b> or other neurological conditions.
      </p>
      <p>
        Similarly, ongoing bone or joint pain that does not resolve with rest or
        treatment could be associated with <b>pediatric cancers</b> like{" "}
        bone cancer. Children may complain of pain at night or difficulty walking. 
        These symptoms warrant immediate medical attention.
      </p>
        {/* Also Read */}
      <p>
        <b>
          Also Read:{" "}
          <Link
            to="/blogs/second-opinions-for-cancer-heart-disease"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Why Second Opinions Are Crucial for Serious Diagnoses like Cancer &
            Heart Disease
          </Link>
        </b>
      </p>
      {/* Early Detection */}
      <h2 className="text-xl font-semibold text-black-600">
        Why Early Detection of Childhood Cancer Matters
      </h2>
      <p>
        Early recognition of these <b>child cancer early warning signs</b> is vital.
        Studies show that children diagnosed in the early stages of 
        cancer have a much higher chance of successful treatment and recovery.
      </p>
      <p>
        Modern <b>pediatric oncology</b> has advanced greatly in chemotherapy,
        radiation, surgery, and targeted therapies. Still, the success of these
        treatments depends heavily on how quickly the disease is detected.
      </p>
      <ul className="list-disc ml-6">
        <li>Keep a symptom diary if concerns persist</li>
        <li>Trust their instincts—if something feels unusual, seek medical advice.</li>
        <li>Consult a <b>pediatric oncologist</b> when symptoms align with multiple warning signs.</li>
      </ul>

      {/* Awareness */}
      <h2 className="text-xl font-semibold text-black-600">
        Child Cancer Awareness Month and the Golden Ribbon
      </h2>
      <p>
        <b>Child Cancer Awareness Month</b>, observed every September, shines a
        light on the challenges faced by young patients and their families. The{" "}
        <b>golden ribbon</b> symbolizes strength, resilience, and hope.
      </p>
      <p>
       In India, awareness is especially important because many cases 
       are diagnosed late due to lack of knowledge about the symptoms. 
       Increased awareness helps more children receive <b>timely pediatric cancer treatment</b>, 
      giving them a better chance at survival.

      </p>
      <p>
        At <Link
            to="https://myewacare.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          ><b> MyEwaCare</b></Link>, we believe that spreading knowledge is the first step
        toward saving lives. By learning, sharing, and recognizing these
        symptoms, we can empower parents to act swiftly.
      </p>

      {/* Conclusion */}
      <h2 className="text-xl font-semibold text-black-600">
        Conclusion: Recognizing Childhood Cancer Symptoms
      </h2>
      <p>
        Recognizing the <b>early warning signs of childhood cancer</b> can make the
        difference between delayed treatment and life-saving intervention. As
        parents and caregivers, vigilance is key.
      </p>
      <p>
        This <b>Childhood Cancer Awareness Month</b>, let’s pledge to stay informed,
        support families in need, and spread awareness about the <b>signs of cancer in children</b>. Together, we can ensure
        that every child has the chance to live a healthy, hopeful future.
      </p>

      <p>
        If you notice any of these symptoms in your child, don’t wait—consult a
        doctor immediately. And don’t forget to share this blog to help others
        learn the critical signs of <b>child cancer</b>.
      </p>
      <h2 className="text-xl font-semibold text-black-500">FAQs</h2>

<ul className="list-disc space-y-4 mt-2 pl-5">
  <li>
    <div className="ml-2">
      <b>What are the most common symptoms of childhood cancer?</b>
      <p className="ml-2"> 
      Common childhood cancer symptoms include unexplained lumps, persistent fever, unusual bruising or bleeding, frequent headaches, fatigue, and sudden weight loss. Parents should watch closely for these early warning signs.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>When should parents be concerned about childhood cancer warning signs?</b>
      <p className="ml-2">
      If a child has symptoms such as swelling, fever, or fatigue that do not improve with standard treatment, parents should seek medical advice immediately. Early diagnosis is key in pediatric oncology.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>How soon should I see a doctor if I notice these symptoms in a child?</b>
      <p className="ml-2">
      Parents should not delay. If symptoms like unusual bruising, persistent fever, or severe headaches appear, consult a pediatrician right away for timely evaluation.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>Can childhood cancer symptoms be confused with common illnesses?</b>
      <p className="ml-2">
      Yes, early symptoms like fever, fatigue, or bone pain can resemble infections or growth issues. That’s why persistent or unusual symptoms should never be ignored.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>What types of cancers cause these warning signs in children?</b>
      <p className="ml-2">
      Different symptoms may lead to different cancers. For example, leukemia often causes bruising and fever, brain tumors cause headaches and vision issues, while lymphoma may present as swollen glands or lumps.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>Does early detection improve survival rates for childhood cancer?</b>
      <p className="ml-2">
      Absolutely. Early detection of child cancer greatly improves treatment outcomes and survival rates. Pediatric oncology emphasizes awareness for this reason.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>What should parents do if symptoms persist or worsen?</b>
      <p className="ml-2">
      If symptoms don’t improve or get worse, parents should immediately seek medical evaluation. Delaying diagnosis can reduce treatment effectiveness.
      </p>
    </div>
  </li>

  <li>
    <div className="ml-2">
      <b>How can MyEwaCare support families concerned about child cancer?</b>
      <p className="ml-2">
      MyEwaCare provides trusted health information, helps raise awareness about childhood cancer symptoms, and guides parents toward informed decisions for their child’s care.
      </p>
    </div>
  </li>
</ul>


    
    </div>
  );
};

export default ChildCancerWarningSigns;
