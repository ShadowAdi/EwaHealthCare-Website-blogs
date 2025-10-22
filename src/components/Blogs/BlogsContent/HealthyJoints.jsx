import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HealthyJoints = () => {
  useEffect(() => {
    // Add <title>
    const prevTitle = document.title;
    document.title = "Simple Everyday Habits for Healthy Joints by Myewacare";

    // Add meta keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "simple exercises for joint pain relief, best foods for joint health, natural ways to support joint health, how to prevent joint problems naturally, everyday habits for healthy joints, early warning signs of joint trouble, bone health testing, affordable bone health test near me, online joint health consultation India";
    document.head.appendChild(metaKeywords);

    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Maintain healthy joints with simple daily habits that reduce pain & improve mobility. Get expert tips & personalized joint care support from MyEwacare.";
    document.head.appendChild(metaDescription);

    // Cleanup on unmount
    return () => {
      document.title = prevTitle;
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* H1 */}
      {/* <h1 className="text-3xl font-bold text-black-600">
        Introduction
      </h1> */}

      <p>
        Keeping your joints healthy is essential for staying active and pain-free.
        Whether you’re a student, working professional, or retired person, small
        daily habits can help protect your joints and prevent bigger problems later.
        This guide shares easy steps anyone can follow to maintain joint health,
        based on expert advice and current trends.
      </p>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        Why Focus on Everyday Habits for Healthy Joints?
      </h2>
      <p>
        Taking care of your joints doesn’t have to wait until you feel pain. The
        best way to keep moving comfortably is by making <Link to="/our-services#healthAndWellness" target="_blank" rel="noopener noreferrer" className="text-blue-600"><b><u>simple lifestyle changes</u></b></Link>
        <span> </span>
         every day. Preventing joint problems early means better mobility and less
        pain in the future. Health experts and leading wellness sites agree that in
        2025, more people seek practical advice on <b>everyday habits for healthy
        joints.</b>
      </p>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        Move Regularly with Simple Exercises for Joint Pain Relief
      </h2>
      <p>
        Gentle daily exercise keeps joints flexible and muscles strong. You don’t
        need a gym—just try:
      </p>
      <ul className="list-disc ml-6">
        <li>Short walks in the fresh air</li>
        <li>Morning stretches for arms, legs, and back</li>
        <li>Low-impact activities like swimming or yoga</li>
      </ul>
      <p>
        These <b>simple exercises for joint pain relief</b> help reduce stiffness and
        protect your joints from wear.
      </p>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        Eat Well: Include the Best Foods for Joint Health
      </h2>
      <p>What you eat directly affects your joint strength. Aim to include:</p>
      <ul className="list-disc ml-6">
        <li>Dairy, leafy greens, and ragi for <b>calcium</b></li>
        <li>Fish, eggs, mushrooms, and sunlight for <b>Vitamin D</b></li>
        <li>Nuts and seeds rich in omega-3 fatty acids and antioxidants</li>
      </ul>
      <p>
        Research shows these foods reduce joint inflammation and support cartilage.
      </p>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        Additional Natural Ways to Support Joint Health
      </h2>
      <ul className="list-disc ml-6">
        <li>Maintain a healthy weight to reduce joint stress</li>
        <li>Drink plenty of water to keep joints lubricated</li>
        <li>Practice good posture sitting, standing, and sleeping</li>
        <li>Wear comfortable shoes with proper support</li>
        <li>Take regular breaks to move, especially if you sit long hours</li>
      </ul>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        Learn How to Prevent Joint Problems Naturally
      </h2>
      <ul className="list-disc ml-6">
        <li>Stay active even if you don’t have pain yet</li>
        <li>Avoid smoking and limit alcohol, which weaken bones</li>
        <li>Listen to your body and seek help if small pains persist</li>
      </ul>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        Watch for Early Warning Signs of Joint Trouble
      </h2>
      <ul className="list-disc ml-6">
        <li>Pain or swelling during walking or climbing stairs</li>
        <li>Morning stiffness lasting more than 15 minutes</li>
        <li>Warmth or redness around a joint</li>
        <li>Limited movement or decreased flexibility</li>
      </ul>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">
        When to Get Checked: Bone Health Testing and Ewa’s Support
      </h2>
      <p>
        If you’re over 40, have a family history of joint or bone issues, or
        notice the signs:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <b>Affordable bone</b>{" "}
          <Link to="/about" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            <b>health test near me</b>
          </Link>{" "}
          with home sample collection
        </li>
        <li>
            <b>Digital joint assessment MyEwaCare</b>
          {" "}with clear, easy-to-understand reports
        </li>
        <li>
          <Link to="/our-services#ourpackages" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            <b>Online joint health consultation India</b>
          </Link>{" "}
          connecting you to specialists from home
        </li>
      </ul>

      {/* H2 */}
      <h2 className="text-xl font-semibold text-black-500">FAQs and Quick Tips</h2>

<ul className="list-disc space-y-4 mt-2 pl-5">
  <li>
    <div className="ml-1">
      <b>Why care about joint health early?</b>
      <p className="ml-1">
        Maintaining joint health ensures freedom of movement and reduces pain risks.
      </p>
    </div>
  </li>
  <li>
    <div className="ml-1">
      <b>Are supplements needed?</b>
      <p className="ml-1">
        Not always. Start with diet and exercise; consult a doctor before adding supplements.
      </p>
    </div>
  </li>
  <li>
    <div className="ml-1">
      <b>Can beginners try these tips?</b>
      <p className="ml-1">
        Yes! These habits are safe and effective for all ages and fitness levels.
      </p>
    </div>
  </li>
</ul>



      <p className="mt-4">
       <b> Book Affordable Bone Health Test with{" "}
        <Link to="/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          MyEwaCare
        </Link>{" "}
        now.</b>
      </p>

      <p>
       <b> Also Read:{" "}
        <Link to="/blogs/is-a-second-medical-opinion-necessary-before-surgery" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Is a Second Medical Opinion Necessary Before Surgery?
        </Link>
        </b>
      </p>
      
    </div>
  );
};

export default HealthyJoints;
