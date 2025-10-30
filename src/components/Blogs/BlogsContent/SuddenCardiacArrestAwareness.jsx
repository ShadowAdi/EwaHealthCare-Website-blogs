import React, { useEffect } from "react";
import warningImg from "../../../../public/images/BlogsContent/blog5.2.png";
import cprStepsImg from "../../../../public/images/BlogsContent/blog5.1.png";
const SuddenCardiacArrestAwareness = () => {
  useEffect(() => {
    // Set Meta Title
    const previousTitle = document.title;
    document.title =
      "Sudden Cardiac Arrest Awareness: Save Lives with CPR & AED ";

    // Meta Description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Learn sudden cardiac arrest awareness, hands-only CPR steps and AED use to save lives. Join Cardiac Arrest Awareness Week 2025 and get CPR trained today ";
    document.head.appendChild(metaDescription);

    // Meta Keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "sudden cardiac arrest awareness, CPR training, AED guide, hands-only CPR steps, cardiac arrest symptoms, how to use an AED, heart emergency response, CPR certification India, cardiac arrest prevention tips, cardiac arrest awareness week 2025, heart health and CPR, emergency heart care, CPR and AED for beginners";
    document.head.appendChild(metaKeywords);

    return () => {
      document.title = previousTitle;
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="w-full px-0 py-10 text-[#404040] text-left">
      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        What is Sudden Cardiac Arrest?
      </h2>
      <p className="mb-4">
        Sudden cardiac arrest (SCA) is a life-threatening condition in which the
        heart suddenly stops beating. Unlike a heart attack, which is caused by
        blocked blood flow to the heart, cardiac arrest results from an
        electrical malfunction in the heart, leading to a sudden loss of heart
        function, breathing, and consciousness.
      </p>
      <p className="mb-4">
        <ul className="list-disc pl-6 mb-4">
          <li>
            Every year, thousands of people experience sudden cardiac death.
          </li>
          <li>
            Raising awareness of sudden cardiac arrest can save lives by
            ensuring an immediate response.
          </li>
        </ul>
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Warning Signs and Symptoms of Cardiac Arrest
      </h2>
      <p className="mb-2">
        Recognizing the warning signs of cardiac arrest can help save lives:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Sudden collapse or loss of consciousness</li>
        <li>No pulse or irregular heartbeat</li>
        <li>Absence of normal breathing</li>
        <li>Chest discomfort, dizziness, or extreme fatigue</li>
      </ul>
      <p className="mb-4">
        While some individuals may have no warning signs, certain risk factors
        increase the likelihood of SCA, including coronary artery disease,
        family history of cardiac problems, and lifestyle factors such as
        smoking or poor diet.
      </p>

      <div className="my-8 mx-auto">
        <img
          src={warningImg}
          alt="Symptoms of cardiac arrest"
          className="w-4/5 max-w-2xl rounded-lg shadow-md mx-auto"
        />
      </div>

      {/* H3 */}
      <h3 className="text-xl font-semibold mt-6 mb-3">
        Preventive Measures for Heart Health:
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Regular check-ups and screenings for heart conditions</li>
        <li>Healthy diet and exercise</li>
        <li>Stress management techniques</li>
        <li>Avoiding smoking and moderating alcohol intake</li>
      </ul>
      <p className="mb-4">
        Regular health screenings are crucial for early detection of heart
        conditions. Schedule your screening today with{" "}
        <a
          href="https://myewacare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          <b>Myewacare</b>
        </a>
        .
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Why Awareness Matters
      </h2>
      <p className="mb-4">
        Immediate intervention significantly improves survival chances.
        Awareness campaigns, such as:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="font-semibold">Cardiac Arrest Awareness Week 2025</li>
        <li className="font-semibold">World Heart Day 2025</li>
      </ul>
      <p className="mb-4">
        focus on educating the public about{" "}
        <span className="font-semibold">hands-only CPR </span> and{" "}
        <span className="font-semibold">AED use</span>. <br /> Key statistics
        show that early CPR can double or triple survival rates.{" "}
        <a
          href="https://myewacare.com/event"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          <b>Awareness campaigns</b>
        </a>{" "}
        aim to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Train bystanders to act confidently during emergencies</li>
        <li>Promote AED availability in public spaces</li>
        <li>Reduce fear or hesitation in performing CPR</li>
      </ul>
      <p className="mb-4">
        Life-saving CPR tips empower ordinary people to act as first responders,
        turning potential bystanders into lifesavers.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Hands-Only CPR: Step by Step
      </h2>
      <p className="mb-1">
        Performing <span className="font-semibold">hands-only CPR</span> is
        simple and highly effective:
      </p>
      <ul className="list-decimal pl-6 mb-4">
        <li>
          <span className="font-semibold">
            Call emergency services immediately
          </span>{" "}
          – dial your local emergency number.
        </li>
        <li>
          <span className="font-semibold">Position your hands </span>- Place the
          heel of one hand in the center of the chest, with the other hand on
          top.
        </li>
        <li>
          <span className="font-semibold">Push hard and fast</span> - Compress
          the chest at 100–120 compressions per minute, allowing the full chest
          to recoil after each push.
        </li>
        <li>
          {" "}
          <span className="font-semibold">Continue until help arrives,</span> or
          the person begins to breathe.
        </li>
      </ul>

      <div className="my-8 mx-auto">
        <img
          src={cprStepsImg}
          alt="How to perform CPR"
          className="w-4/5 max-w-2xl rounded-lg shadow-md mx-auto"
        />
      </div>
      {/* H3 */}
      <h3 className="text-xl font-semibold mt-6 mb-3">
        Tips for Effective CPR:
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Do not stop out of fear—you cannot harm a person in cardiac arrest by
          performing CPR.
        </li>
        <li>
          Consider taking{" "}
          <a
            href="https://myewacare.com/our-services#healthAndWellness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            <b>CPR training near you</b>
          </a>{" "}
          or obtaining CPR certification to gain confidence and hands-on
          experience.
        </li>
      </ul>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Using an AED (Automated External Defibrillator)
      </h2>
      <p className="mb-4">
        An AED is a portable device that can restore a normal heart rhythm
        during cardiac arrest.
      </p>

      {/* H3 */}
      <h3 className="text-xl font-semibold mt-6 mb-3">How to Use an AED:</h3>
      <ul className="list-decimal pl-6 mb-4">
        <li>Turn on the AED and follow the voice prompts.</li>
        <li>Place the electrode pads on the person’s bare chest.</li>
        <li>Allow the AED to analyze the heart rhythm.</li>
        <li>Deliver a shock if instructed by the AED.</li>
      </ul>

      {/* H3 */}
      <h3 className="text-xl font-semibold mt-6 mb-3">Tips:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Take AED training to become familiar with the device.</li>
        <li>Locate AED in public places or workplaces.</li>
        <li>
          Identify the best AED devices for public areas to ensure quick access.
        </li>
      </ul>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Prevention and Heart Health Tips
      </h2>
      <p className="mb-1">
        Prevention is key to reducing the risk of sudden cardiac arrest. Follow
        these <span className="font-semibold">heart health tips:</span>
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-semibold">Exercise regularly:</span> 30 minutes
          of moderate activity daily improves heart function.
        </li>
        <li>
          <span className="font-semibold">Eat a balanced diet: </span>
          Include fruits, vegetables, whole grains, and lean proteins.
        </li>
        <li>
          <span className="font-semibold">Manage stress: </span>
          Practice meditation, yoga, or relaxation techniques.
        </li>
        <li>
          <span className="font-semibold">
            Avoid smoking and excessive alcohol:{" "}
          </span>
          Both increase the risk of heart disease.
        </li>
        <li>
          <span className="font-semibold">Get regular screenings: </span>
          Blood pressure, cholesterol, and heart tests are crucial.
        </li>
      </ul>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Real-Life Stories and Campaign Highlights
      </h2>
      <p className="mb-1">
        Real-life stories demonstrate the life-saving power of{" "}
        <span className="font-semibold">CPR and AEDs</span>:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-4">
          During the{" "}
          <span className="font-semibold">
            National Sudden Cardiac Arrest Awareness Campaign in India,
          </span>
          thousands were trained in <span>hands-only CPR,</span> and several
          lives were saved by newly trained individuals.
        </li>
        <li className="mb-4">
          Ordinary bystanders performing CPR have revived friends, family
          members, and strangers, highlighting the importance of public
          education.
        </li>
      </ul>
        <p>
          Sharing these stories raises{" "}
          <span className="font-semibold">cardiac arrest awareness</span> and
          motivates communities to participate in training and campaigns.
        </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        How You Can Get Involved
      </h2>
      <p className="mb-1">You can actively contribute By:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Enrolling in CPR and AED training, such as CPR training in Mumbai
        </li>
        <li>Participating in Cardiac Arrest Awareness Week 2025 events</li>
        <li>Educating family, friends, and colleagues about CPR and AED use</li>
        <li>Supporting organizations focused on cardiac health</li>
      </ul>
      <p className="mb-4">
        Every trained individual increases the chances of survival during sudden
        cardiac arrest emergencies.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Conclusion</h2>
      <p className="mb-4">
        Sudden cardiac arrest awareness is critical for saving lives. Knowing
        hands-only CPR and how to use an AED equips you to act immediately and
        effectively during emergencies.
      </p>
      <p className="mb-4">
        Learn CPR, locate AEDs in your area, and participate in awareness
        campaigns. Together, we can save lives—because every second counts!
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">FAQs</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-6">
        <li>
          <strong>What is Sudden Cardiac Arrest (SCA)?</strong>
          <p>
            Sudden Cardiac Arrest occurs when the heart suddenly stops beating
            due to an electrical malfunction, leading to a sudden loss of heart
            function, breathing, and consciousness. It is different from a heart
            attack, which is caused by blocked blood flow to the heart.
          </p>
        </li>
        <li>
          <strong>How can I recognize if someone is experiencing SCA?</strong>
          <p>
            Signs of SCA include collapse, no pulse, no breathing, and loss of
            consciousness. Immediate action is critical, as survival chances
            decrease by 7–10% with each minute without defibrillation.
          </p>
        </li>
        <li>
          <strong>What should I do if I witness someone collapse?</strong>
          <p>
            If someone collapses and is unresponsive, immediately call emergency
            services, begin CPR with chest compressions, and use an Automated
            External Defibrillator (AED) if available. Early intervention
            significantly increases survival chances.
          </p>
        </li>
        <li>
          <strong>Is it safe to perform CPR on someone?</strong>
          <p>
            Yes, performing CPR is safe and can save lives. You cannot harm
            someone by performing CPR if they are in cardiac arrest. Immediate
            CPR can double or triple the chance of survival.
          </p>
        </li>
        <li>
          <strong>Do I need special training to use an AED?</strong>
          <p>
            No special training is required to use an AED. Most devices provide
            voice prompts to guide you through the process. However, CPR and AED
            training can increase confidence and effectiveness in an emergency.
          </p>
        </li>
        <li>
          <strong>Can CPR and AED use really save lives?</strong>
          <p>
            Yes, immediate CPR and AED use can dramatically increase survival
            chances. Survival chances decrease by 10% for every minute that
            immediate CPR and AED use is delayed.
          </p>
        </li>
        <li>
          <strong>Who should be trained in CPR and AED use?</strong>
          <p>
            Everyone can benefit from CPR and AED training. It's especially
            important for individuals in high-risk environments, such as
            schools, workplaces, and public spaces, as well as for parents,
            caregivers, and community members.
          </p>
        </li>
        <li>
          <strong>How can I reduce the risk of Sudden Cardiac Arrest?</strong>
          <p>
            Maintain heart health through regular exercise, a balanced diet,
            stress management, avoiding smoking and excessive alcohol, and
            routine screenings for heart conditions.
          </p>
        </li>
      </ol>

      <p className="mt-6">
        <strong>Also Read:</strong>{" "}
        <a
          href="https://myewacare.com/blogs/child-cancer-early-warning-signs-for-immediate-action"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          <b> 5 Signs of Cancer in Children That Require Immediate Attention</b>
        </a>
      </p>
    </div>
  );
};

export default SuddenCardiacArrestAwareness;
