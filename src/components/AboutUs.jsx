import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { domainName } from "../App";
import FounderCard from "./FounderCard";
import HeroHeader from "./HeroHeader";
import TeamMemberCard from "./TeamMemberCard";
import CustomImage from "./CustomImage";
import { blogData } from "./Blogs/BlogData";
import { handleApiRequest } from "../services/apiHandler";
const AboutUs = () => {
  // Add this at the top of your AboutUs component
// Inside AboutUs component

const [superBlogs, setSuperBlogs] = React.useState([]);
const [loading, setLoading] = React.useState(false);

React.useEffect(() => {
  const fetchSuperBlogs = async () => {
    setLoading(true);
    try {
      const result = await handleApiRequest({
        url: `/superblogs/grid?page=1&rows=4`, // get latest 4 superblogs
        method: "GET",
      });
      if (result.success) {
        setSuperBlogs(result.data.rows || []);
      }
    } catch (err) {
      console.error("Error fetching featured blogs", err);
    } finally {
      setLoading(false);
    }
  };
  fetchSuperBlogs();
}, []);

// Combine backend + local blogs, limit to 4
const combinedBlogs = [
  ...superBlogs.map((b) => ({
    slug: b.slug || b._id,
    title: b.title,
    image: b.image,
    isLocal: false,
  })),
  ...blogData.map((b) => ({
    slug: b.slug,
    title: b.title,
    image: b.imageSrc,
    isLocal: true,
  })),
].slice(-4); // show only first 4 blogs



  const sliderRef = useRef(null);

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 640,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "0",
              },
          },
      ],
  };

  const scroll = (direction) => {
      if (sliderRef.current) {
          if (direction === "left") {
              sliderRef.current.slickPrev();
          } else {
              sliderRef.current.slickNext();
          }
      }
  };


  const features = [
    {
      title: "Access to Leading Experts",
      description:
        "Consult with top specialists globally, ensuring you receive the best advice for your condition.",
    },
    {
      title: "Convenience & Flexibility ",
      description:
        "Easily schedule consultations online, eliminating the need for travel or long waits.",
    },
    {
      title: "Trusted & Confidential ",
      description:
        "We prioritize your privacy, ensuring your data is protected and shared only with authorized professionals.",
    },
    {
      title: "Empowering Decision-Making",
      description:
        "Gain clarity and confidence to make informed healthcare choices tailored to your needs.",
    },
    {
      title: "Personalized Care ",
      description:
        "We listen to your concerns and provide guidance that’s tailored specifically to you.",
    },
  ];

  const employeeContainer = useRef(null);

  const images = [
    "/images/AboutUs/slideshow1.jpeg",
    "/images/AboutUs/slideshoe2.jpeg",
    "/images/AboutUs/slideshow3.jpeg",
    "/images/AboutUs/slideshow4.jpeg",
    "/images/AboutUs/slideshow5.jpeg",
    "/images/AboutUs/slideshow6.jpeg",
  ];

 

  const articles = [
    {
      path: "/blogs/habit-formation",
      imgSrc: `${domainName}/images/BlogsContent/habit.svg`,
      title: "The Science of Habit Formation: Integrating Nutraceuticals into Daily Routines",
      // source: "open.com",
    },
    {
      path: "/blogs/boost-health",
      imgSrc: `${domainName}/images/BlogsContent/boost_health.png`,
      title: "5 Simple Ways to Boost Your Health and Well-Being",
      // source: "open.com",
    },
    {
      path: "/blogs/secondopinion",
      imgSrc: `${domainName}/images/BlogsContent/second_opinion_save_time.png`,
      title: "How a Second Opinion Can Save Time and Money",
      // source: "open.com",
    },
    {
      path: "/blogs/secondopinionhealthcare",
      imgSrc: `${domainName}/images/BlogsContent/second_opinion_importance.png`,
      title: "The Importance of Getting a Second Opinion in Healthcare",
      // source: "open.com",
    },
    // Continue adding more articles here...
  ];


  const contactData = [
    // {
    //   alt: "email",
    //   icon: "https://www.alyve.health//icons/gradient-mail.svg",
    //   title: "Talk to Support",
    //   link: "mailto:support@myewacare.com",
    //   target: "_self",
    //   buttonText: "support@myewacare.com",
    // },

    {
      alt: "email",
      icon: "https://www.alyve.health//icons/gradient-mail.svg",
      title: "Talk to Support",
      link: "support@myewacare.com",
      target: "_blank",
      buttonText: "support@myewacare.com",
      useGmail: true, // New property to identify email links
    },

    {
      alt: "chat",
      icon: "https://www.alyve.health//icons/gradient-message.svg",
      title: "Live chat",
      link: "https://wa.me/9686638384",
      target: "_blank",
      buttonText: "Talk to Us",
    },
    {
      alt: "calendar",
      icon: "https://www.alyve.health//icons/gradient-calendar.svg",
      title: "Schedule a Demo",
      link: "https://wa.me/9686638384",
      target: "_blank",
      buttonText: "Book a Slot",
    },
    {
      alt: "phone",
      icon: "https://www.alyve.health//icons/gradient-phone.svg",
      // title: "24x7 Tollfree support",
      title: "Contact Us",
      link: "tel:9686638384",
      target: "_blank",
      buttonText: "9686638384",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Medical Second Opinion Telehealth Services | About MyEwaCare</title>
        <meta name="description" content="Discover how MyEwaCare delivers expert medical second opinions, telehealth services, and personalized care plans to support better health decisions across India  " />
        <link rel="canonical" href="https://myewacare.com/about" />
      </Helmet>
      <HeroHeader />

      <div className="about-us-container">
        <div className="pb-0 pt-2 md:pt-8 overflow-hidden">
          <div className="pt-2 md:pt-8 flex gap-2 md:gap-6 lg:gap-8 anim-scroll overflow-x-auto scrollbar-hide">
            {/* Duplicate images for infinite loop effect */}
            {images.concat(images).map((image, index) => (
              <div
                key={index}
                className="shrink-0 relative rounded-2xl overflow-hidden shadow-md md:shadow-lg border-4 border-background"
                style={{
                  width: "90vw", // Responsive width
                  maxWidth: "800px", // Max width to maintain structure
                  height: "50vw", // Responsive height
                  maxHeight: "400px", // Max height for large screens
                }}
              >
                <img
                  alt={`Ewa health team ${index}`}
                  fetchpriority="high"
                  loading="lazy"
                  decoding="async"
                  srcSet={`${image}?w=640&q=75 640w, ${image}?w=750&q=75 750w, ${image}?w=828&q=75 828w, ${image}?w=1080&q=75 1080w, ${image}?w=1200&q=75 1200w, ${image}?w=1920&q=75 1920w, ${image}?w=2048&q=75 2048w, ${image}?w=3840&q=75 3840w`}
                  src={`${image}?w=3840&q=75`}
                  className="absolute h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col gap-6 items-center mb-10 mt-20 px-8 max-w-[1400px] mx-auto">
          {/* First Card - Top (Wider & Better Aligned) */}
          <div className="bg-[#EBF4F5] p-8 w-full flex flex-col justify-between rounded-lg shadow-lg mb-4 md:mb-0 md:w-[100%]">
            <p className="text-gray-700 text-lg">
              {/* At My Ewa Care, we provide trusted second opinions from top
              healthcare providers to help you make informed decisions about
              your health. Our platform connects you with expert doctors and
              specialists globally, offering unbiased, evidence-based advice for
              a variety of medical conditions. Whether you're seeking a second
              opinion on a diagnosis, exploring treatment options, we ensure
              that your medical concerns are addressed with care,
              confidentiality, and accuracy. Empower your healthcare journey
              with our reliable second opinion healthcare services, available at
              your convenience. */}
              MyEwacare provides expert second opinion services and personalized health wellness programs designed to empower you to make informed decisions about your health. Whether you're seeking a second opinion on a diagnosis, exploring treatment options, we ensure that your medical concerns are addressed with care, confidentiality, and accuracy. Empower your healthcare journey with our reliable second opinion healthcare services, available at your convenience.
            </p>
          </div>

          {/* Second Row - 2 Cards Side by Side */}
          <div className="flex flex-col gap-6 justify-center w-full md:flex-row">
            <div className="bg-[#ebf4f5] p-8 flex-1 flex flex-col text-[#02989D]  rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                {/* At My Ewa Care, our mission is to empower patients with the
                knowledge and confidence to make informed healthcare decisions.
                We believe that every individual deserves access to expert
                medical advice, no matter where they are. Through our platform,
                we connect patients with a global network of experienced
                healthcare professionals to provide trustworthy, comprehensive,
                and unbiased second opinions. Our goal is to ensure that every
                patient feels heard, understood, and supported throughout their
                healthcare journey. */}
                Our mission is simple: to provide accessible, high-quality second opinion services and health wellness programs to help you take control of your health. We aim to assist you in making confident, well-informed decisions about medical treatments and wellness strategies that are tailored to your unique needs.
                <br></br><br></br>We believe that everyone deserves a clear, accurate understanding of their health, and that by providing trusted second opinions and holistic health wellness programs, we can improve lives and outcomes.
              </p>
            </div>
            <div className="bg-[#ebf4f5] p-8 flex-1 flex flex-col text-[#02989D]  rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                {/* Our vision is to create a world where every patient has access
                to accurate, reliable, and second opinions from top-tier medical
                professionals. We aim to foster a healthcare system that values
                transparency, collaboration, and patient-centric care. By
                breaking down barriers to expert consultations, we strive to
                revolutionize the way people approach medical decision-making,
                empowering them with the information they need to make the best
                choices for their health and well-being. */}
                Our vision is to be a leading resource for individuals seeking second opinions in healthcare and comprehensive wellness programs. We strive to build a healthier world by providing accessible, reliable information and personalized wellness solutions that prioritize your overall well-being.
                <br></br><br></br>Through collaboration with top healthcare professionals, our goal is to give you the confidence to make informed decisions that positively impact your health and life.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-[#EbF4F5] py-12 ">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold text-[#1E1028]">
              Why choose us ?
            </h2>
            <p className="text-center text-lg text-gray-600 mb-6">
              Our commitment is to your peace of mind and well-being.
            </p>

            {/* Button Container */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => scroll("left")}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm md:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !p-0 rounded-full hover:bg-accent/5 hover:text-accent-foreground border-input border bg-background h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 mr-2"
              >
                <img
                  alt="left"
                  loading="lazy"
                  width="32"
                  height="32"
                  className="w-5 h-5 md:w-8 md:h-8"
                  src="/images/chevron-left.png"
                />
              </button>

              <button
                onClick={() => scroll("right")}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm md:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !p-0 rounded-full hover:bg-accent/5 hover:text-accent-foreground border-input border bg-background h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4"
              >
                <span className="rotate-180">
                  <img
                    alt="right"
                    loading="lazy"
                    width="32"
                    height="32"
                    className="w-5 h-5 md:w-8 md:h-8"
                    src="/images/chevron-left.png"
                  />
                </span>
              </button>
            </div>

            {/* Slider Container */}
            <div className="gap-8 w-full px-2 py-4 ">
              <Slider ref={sliderRef} {...settings}>
                {features.map((feature, index) => (
                  <div key={index} className="px-2 h-[9rem]">
                    <div className="bg-white shadow-md rounded-lg p-4 text-center h-full mx-4">
                      <div className="flex items-center justify-center gap-2 ">
                        <span className="text-blue-600 text-xl">✔</span>
                        <h3 className="font-semibold text-[#1E1028]">
                          {feature.title}
                        </h3>
                      </div>
                      <div className="h-[1px] w-10 bg-red-500 my-2 mx-auto "></div>
                      <p className="text-gray-700 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8 py-8 bg-[#EBF4F5] px-6 md:px-12 w-full">
          {/* Values Section in a single box */}
          <div className="flex flex-col gap-6 p-6 mx-auto w-full max-w-screen-xl">
            {/* Heading and Subheading */}
            <div className="flex flex-col items-center gap-3 md:gap-6 mx-auto">
              <h2 className="text-[24px] sm:text-3xl md:text-4xl font-semibold text-center max-w-[37rem]">
                Our Values: Putting You First
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-center text-[#79717f]">
                Turning our vision for a healthier you into reality.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col sm:flex-row md:flex-row gap-6 justify-center">
              {/* Value 1 */}
              <div className="flex-1 flex flex-col items-center gap-4">
                <img
                  alt="Transparency and Accessibility"
                  loading="lazy"
                  width="64"
                  height="64"
                  className="w-[4rem] h-[4rem]"
                  src="https://www.alyve.health//icons/value-shield.svg"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h3 className="text-[0.94rem] sm:text-base md:text-xl text-center font-semibold mb-2">
                    Transparency and Accessibility
                  </h3>
                  <p className="text-[0.94rem] sm:text-base md:text-xl text-center text-[#79717f]">
                    We believe in making health accessible and open
                    communication. Good health shouldn't come with anxiety or a
                    hefty price tag.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="flex-1 flex flex-col items-center gap-4">
                <img
                  alt="By Your Side at Every Step"
                  loading="lazy"
                  width="64"
                  height="64"
                  className="w-[4rem] h-[4rem]"
                  src="https://www.alyve.health//icons/value-headphone.svg"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h3 className="text-[0.94rem] sm:text-base md:text-xl text-center font-semibold mb-2">
                    By Your Side at Every Step
                  </h3>
                  <p className="text-[0.94rem] sm:text-base md:text-xl text-center text-[#79717f]">
                    We value great experiences and high-quality care. We only
                    partner with trusted providers to ensure that you receive
                    the care you deserve.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex-1 flex flex-col items-center gap-4">
                <img
                  alt="Making It Happen for You"
                  loading="lazy"
                  width="64"
                  height="64"
                  className="w-[4rem] h-[4rem]"
                  src="https://www.alyve.health//icons/value-wond.svg"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h3 className="text-[0.94rem] sm:text-base md:text-xl text-center font-semibold mb-2">
                    Making It Happen for You
                  </h3>
                  <p className="text-[0.94rem] sm:text-base md:text-xl text-center text-[#79717f]">
                    We go beyond just treatment by addressing the 7 key areas
                    that impact your health. Achieve your best life, every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FounderCard />
        <TeamMemberCard />

        <section className="bg-[#EBF4F5] py-16 flex flex-col gap-8">
          <div className="px-4 md:px-16 flex justify-between items-center container mx-auto">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center">
                Holistic Care For a Healthier You
              </h2>
            </div>
          </div>

          <div
            ref={employeeContainer}
            className="flex gap-4 overflow-x-auto py-4 snap-x snap-mandatory [&>section]:snap-center [&>section]:px-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Card 1 */}
            <section className="flex-shrink-0 w-[80%] mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-2xl flex justify-center items-center h-full"
              >
                <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-8 bg-white rounded-xl p-2">
                  {/* Content (40%) */}
                  <div className="sm:col-span-2 flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold text-primary">
                    Clarity & Confidence For Your Health
                    </h3>
                    <p className="text-[#79717f] text-lg">
                    At MyewaCare, we prioritize your well-being with a holistic approach that combines advanced medical care, Ayurvedic treatments, diagnostics, and expert consultations. Whether you need a second opinion, surgery, or personalized wellness solutions, we ensure you receive the right care at the right time. With our dedicated team of specialists, we bring clarity to your health concerns and empower you with the confidence to make informed decisions for a healthier future.
                    </p>
                  </div>

                  {/* Video (60%) */}
                  <div className="sm:col-span-3 relative w-full aspect-video">
                    <video
                      className="w-full h-full object-contain rounded-xl"
                      controls
                      autoPlay
                      muted
                      loop
                      src="images/AboutUs/12stMP4.mp4"
                    />
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </section>

        {/* Blog Section */}
<section className="py-12 bg-[#EBF4F5] px-4 md:px-16">
  <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-center">
      Blog Section
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {loading ? (
        <p className="col-span-2 text-center">Loading...</p>
      ) : combinedBlogs.length === 0 ? (
        <p className="col-span-2 text-center">No blogs available</p>
      ) : (
        combinedBlogs.map((blog, index) => (
          <Link
            key={index}
            to={`/blogs/${blog.slug}`}
            className="group flex items-center gap-4 bg-white rounded-xl shadow-md hover:shadow-lg p-4 transition-shadow duration-300"
          >
            {/* Image Left */}
            <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 relative rounded-lg overflow-hidden">
              <CustomImage
                alt={blog.title}
                src={blog.image}
                isLocal={blog.isLocal}
                className={`absolute inset-0 w-full h-full ${
                  blog.isLocal ? "object-contain bg-white" : "object-cover"
                }`}
              />
            </div>

            {/* Title Right */}
            <h3 className="text-base md:text-lg font-medium text-[#1E1028] group-hover:text-[#02989D] transition-colors duration-300">
              {blog.title}
            </h3>
          </Link>
        ))
      )}
    </div>
  </div>
</section>


        <div className="flex flex-col md:flex-row gap-8 py-6 px-4">
          {/* Left Section - Contact Us */}
          <div className="flex-1 flex flex-col gap-8 md:gap-16">
            {/* Hidden on small screens, visible on medium and up */}
            <div className="flex-col gap-2 md:gap-5 mx-0 items-start hidden md:block">
              <h2 className="text-[24px] sm:text-3xl md:text-4xl font-semibold text-center md:text-left max-w-[37rem] mx-auto md:mx-0">
                Contact Us
              </h2>
              <p className="pt-2 text-sm md:text-xl text-center md:text-left text-[#79717f] max-w-[800px] mx-auto md:mx-0">
                We'd love to hear from you
              </p>
            </div>

            {/* Visible only on small screens */}
            <div className="flex-col items-center gap-2 md:gap-5 mx-auto block md:hidden">
              <h2 className="text-[24px] sm:text-3xl md:text-4xl font-semibold text-center max-w-[37rem]">
                Contact Us
              </h2>
            </div>

            {/* Contact Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
              {contactData.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <span>
                    <img
                      alt={item.alt}
                      src={item.icon}
                      loading="lazy"
                      width="24"
                      height="24"
                      className="mr-2"
                    />
                  </span>
                  <p className="mt-3 md:mt-4 md:mb-2 text-[15px] md:text-lg font-medium">
                    {item.title}
                  </p>  {item.useGmail ? (
                    // Open Gmail in a new tab for email links
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        item.link
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline !p-0 !h-auto h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 underline !text-[15px] md:!text-lg text-[#6A43C7] font-semibold"
                    >
                      {item.buttonText}
                    </a>
                  ) : (
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline !p-0 !h-auto h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 underline !text-[15px] md:!text-lg text-[#6A43C7] font-semibold">
                    <Link target={item.target} to={item.link}>
                      {item.buttonText}
                    </Link>
                  </button>
                     )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="hidden md:block flex-1 relative overflow-hidden rounded-xl">
            <img
              alt="Ewa Health team photo"
              loading="lazy"
              className="object-cover w-full h-full"
              src={`${domainName}/images/AboutUs/123.jpg`}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
