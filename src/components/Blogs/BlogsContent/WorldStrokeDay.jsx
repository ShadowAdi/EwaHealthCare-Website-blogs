import React, { useEffect } from "react";
import Blog6New from "../../../../public/images/BlogsContent/blog-6-1-new.jpg";
import secondImage from "../../../../public/images/BlogsContent/blog-6-2.jpg";

const WorldStrokeDay2025 = () => {
  useEffect(() => {
    // Set Meta Title
    const previousTitle = document.title;
    document.title =
      "World Stroke Day 2025: Causes, Symptoms & Prevention Tips";

    // Meta Description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Learn about World Stroke Day 2025 — understand stroke causes, early symptoms, and prevention tips. Recognize signs early and act FAST to save lives.";
    document.head.appendChild(metaDescription);

    // Meta Keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "world stroke day 2025, stroke causes, stroke symptoms, stroke prevention, act FAST, ischemic stroke, hemorrhagic stroke, stroke awareness, stroke treatment, stroke recovery, brain health, stroke risk factors, world stroke day awareness, prevent stroke, stroke early signs, stroke health checkup, myewacare stroke blog";
    document.head.appendChild(metaKeywords);

    return () => {
      document.title = previousTitle;
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="w-full px-0 py-10 text-[#404040] text-left">
      {/* H1 */}
      <p className="mb-4">
        Every year, <strong>World Stroke Day</strong> (observed on October 29)
        reminds us of the urgent need to raise awareness about one of the
        leading causes of death and disability worldwide — stroke. In 2025, the
        campaign continues to focus on the importance of recognizing the signs
        early and preventing stroke through lifestyle awareness and timely care.
      </p>
      <p className="mb-4">
        Understanding what causes a stroke and how to spot its early symptoms
        can save lives — sometimes even your own or a loved one’s.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">What Is a Stroke?</h2>
      <p className="mb-4">
        A stroke occurs when the blood supply to a part of the brain is
        interrupted or reduced, preventing brain tissue from getting enough
        oxygen and nutrients. When this happens, brain cells begin to die within
        minutes — making it a medical emergency that requires immediate
        attention.
      </p>
      <p className="mb-4">There are two main types of stroke:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Ischemic Stroke:</strong> Caused by a blockage in the arteries
          that carry blood to the brain. This is the most common type,
          accounting for nearly 85% of all strokes.
        </li>
        <li>
          <strong>Hemorrhagic Stroke:</strong> Occurs when a weakened blood
          vessel bursts, leading to bleeding in or around the brain.
        </li>
      </ul>

        <div className="my-8 mx-auto">
        <img
          src={Blog6New}
          alt="Types of brain stroke"
          className="w-4/5 max-w-2xl rounded-lg shadow-md mx-auto"
        />
      </div>
      <p className="mb-4">
        A <strong>Transient Ischemic Attack (TIA)</strong>, also known as a
        mini-stroke, serves as a warning sign that a full stroke may occur soon.
        Recognizing and addressing a TIA promptly can help prevent a major
        stroke later.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Common Causes of Stroke
      </h2>
      <p className="mb-4">
        A stroke doesn’t happen overnight — it’s often the result of multiple
        health and lifestyle factors building up over time. Knowing these causes
        helps you take preventive steps early.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Lifestyle Factors</h3>
      <p className="mb-1">
       Unhealthy habits can significantly increase the risk of stroke. These include: 
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Smoking or excessive alcohol use</li>
        <li>Poor diet high in saturated fats, salt, and sugar</li>
        <li>Physical inactivity or obesity</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Medical Conditions</h3>
       <p className="mb-1">
       Several underlying health conditions raise stroke risk:  
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>High blood pressure (the leading cause)</li>
        <li>Diabetes</li>
        <li>High cholesterol</li>
        <li>Heart disease or irregular heartbeat (atrial fibrillation)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Other Triggers</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Chronic stress</li>
        <li>Family history of stroke</li>
        <li>Advanced age (risk increases after 55)</li>
      </ul>


      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Recognizing the Symptoms — Act FAST
      </h2>
      <p className="mb-4">
        When it comes to stroke, every second counts. Quick action can minimize
        brain damage and improve recovery. The <strong>FAST test</strong> helps
        identify the most common symptoms:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>F – Face:</strong> Ask the person to smile. Is one side
          drooping?
        </li>
        <li>
          <strong>A – Arm:</strong> Ask them to raise both arms. Is one arm
          drifting down?
        </li>
        <li>
          <strong>S – Speech:</strong> Ask them to repeat a simple phrase. Is
          their speech slurred or strange?
        </li>
        <li>
          <strong>T – Time:</strong> If you notice any of these signs, call
          emergency services immediately.
        </li>
      </ul>

      <div className="my-8 mx-auto">
        <img
          src={secondImage}
          alt="FAST stroke symptoms"
          className="w-4/5 max-w-2xl rounded-lg shadow-md mx-auto"
        />
      </div>

      <p className="mb-4">Other symptoms may include:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Sudden numbness or weakness (especially on one side of the body)
        </li>
        <li>Difficulty understanding speech or confusion</li>
        <li>Sudden vision problems</li>
        <li>Severe headache with no known cause</li>
        <li>Dizziness or loss of balance</li>
      </ul>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Why Early Diagnosis Matters
      </h2>
      <p className="mb-4">
        Stroke is a time-sensitive condition. The sooner medical help is
        received, the greater the chances of recovery. In many cases, treatment
        within the first few hours can restore blood flow to the brain and
        prevent long-term disability.
      </p>
      <p className="mb-4">
        Early diagnosis also helps identify underlying conditions — like
        hypertension or diabetes — that could lead to another stroke. <br />
        That’s why regular health screenings and{" "}
        <a target="_blank" className="text-blue-700 underline font-semibold" href="https://myewacare.com/second-opinion">
          second medical opinions
        </a>{" "}
        play a vital role in long-term prevention.
      </p>
      <p className="mb-4">
        If you have a family history of stroke or experience any risk factors,
        consult a specialist right away.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Preventing Stroke — Small Steps, Big Difference
      </h2>
      <p className="mb-1">
        Stroke prevention starts with simple, everyday actions that keep your
        heart and brain healthy: <br />
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Maintain a balanced diet rich in fruits, vegetables, and whole grains.
        </li>
        <li>Exercise regularly — even a 30-minute walk daily helps.</li>
        <li>Quit smoking and limit alcohol intake.</li>
        <li>Keep your blood pressure, sugar, and cholesterol in check.</li>
        <li>Manage stress through yoga, meditation, or mindfulness.</li>
        <li>
          Schedule regular <a target="_blank" className="underline font-semibold text-blue-600" href="https://myewacare.com/our-services#ourpackages">preventive health check-ups</a> to detect issues early.
        </li>
      </ul>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Join the Awareness on World Stroke Day 2025
      </h2>
      <p className="mb-4">
        This <strong>World Stroke Day 2025</strong>, let’s come together to
        spread awareness and take proactive steps toward stroke prevention.
        Small actions — like sharing information, recognizing the signs, or
        encouraging a loved one to get screened — can make a huge difference.
      </p>
      <p className="mb-4">
        Together, we can prevent stroke. Learn, act, and share — because
        awareness saves lives.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Take Control of Your Health with MyEwaCare
      </h2>
      <p className="mb-4">
        Your health is in your hands. Regular screenings and timely
        consultations can help detect risk factors early and prevent
        complications. Schedule your preventive health check-up or get a trusted
        second medical opinion with{" "}
        <a
          href="https://myewacare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          <b>MyEwaCare</b>
        </a>{" "}
        — your partner in proactive, accessible healthcare.
      </p>

      <p className="mt-6">
        <strong>Also Read:</strong>{" "}
        <a
          href="https://myewacare.com/blogs/sudden-cardiac-arrest-awareness-save-lives-with-cpr-and-aed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          <b>Sudden Cardiac Arrest Awareness: Save Lives with CPR & AED</b>
        </a>
      </p>
    </div>
  );
};

export default WorldStrokeDay2025;
