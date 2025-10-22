import React from "react";
import HealthyJoints from "./BlogsContent/HealthyJoints";
import SecondMedicalOpinion from "./BlogsContent/SecondMedicalOpinion";
import HeartDisease from "./BlogsContent/HeartDisease";
import ChildCancerWarningSigns from "./BlogsContent/ChildCancerWarningSigns";
import SuddenCardiacArrestAwareness from "./BlogsContent/SuddenCardiacArrestAwareness.jsx";

export const blogDomainName = window.location.origin;

export const blogData = [
  {
    slug: "simple-everyday-habits-for-healthy-joints", // unique slug for routing
    imageSrc: `${blogDomainName}/images/BlogsContent/healthy_joints.png`,
    title: "Simple Everyday Habits for Healthy Joints",
    date: "2025-08-24",
    authorImage: `${blogDomainName}/src/assets/images/image.svg`,
    authorName: "Team Ewa Health",
     isLocal: true,
     altText:"Joint Health Simple Exercises",
    content: <HealthyJoints />,
  },
  {
    slug: "is-a-second-medical-opinion-necessary-before-surgery", // unique slug for routing
    imageSrc: `${blogDomainName}/images/BlogsContent/blog2.png`,
    title: "Is a second medical opinion necessary before surgery?",
    date: "2025-08-24",
    authorImage: `${blogDomainName}/src/assets/images/image.svg`,
    authorName: "Team Ewa Health",
     isLocal: true,
     altText:" Second Surgical Opinion",
    content: < SecondMedicalOpinion/>,
  },
  {
    slug: "second-opinions-for-cancer-heart-disease", // unique slug for routing
    imageSrc: `${blogDomainName}/images/BlogsContent/blog3.png`,
    title: "Why Second Opinions Are Crucial for Serious Diagnoses like Cancer & Heart Disease",
    date: "2025-08-24",
    authorImage: `${blogDomainName}/src/assets/images/image.svg`,
    authorName: "Team Ewa Health",
     isLocal: true,
     altText:"Online Second Opinion Consultation for Serious Diagnoses",
    content: < HeartDisease/>,
  },
  {
    slug: "child-cancer-early-warning-signs-for-immediate-action", // unique slug for routing
    imageSrc: `${blogDomainName}/images/BlogsContent/blog4.jpg`,
    title: "5 Signs of Cancer in Children That Require Immediate Attention",
    date: "2025-09-23",
    authorImage: `${blogDomainName}/src/assets/images/image.svg`,
    authorName: "Team Ewa Health",
     isLocal: true,
     altText:"Child cancer early warning signs",
    content: < ChildCancerWarningSigns/>,
  },
  {
  slug: "sudden-cardiac-arrest-awareness-save-lives-with-cpr-and-aed", // unique slug for routing
  imageSrc: `${blogDomainName}/images/BlogsContent/blog5.png`,
  title: "Sudden Cardiac Arrest Awareness: Save Lives with CPR & AED",
  date: "2025-10-10",
  authorImage: `${blogDomainName}/src/assets/images/image.svg`,
  authorName: "Team Ewa Health",
  isLocal: true,
  altText: "Sudden cardiac arrest awareness CPR AED",
  content: <SuddenCardiacArrestAwareness />,
},


];
