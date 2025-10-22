import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = lazy(() => import("../components/Blogs/Blogs"));
const FloatingButtons = lazy(() => import("../components/FloatingButtons"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));

const BlogsPage = () => {
  return (
    <>
    <Helmet>
        <title>Health Tips, Expert Insights & Care Guides | MyEwaCare</title>
        <meta name="description" content="Discover expert-written wellness blogs on preventive care, diagnostic clarity, holistic healing & lifestyle tips to enhance your personal healthcare journey "/>
        <link rel="canonical" href="https://myewacare.com/blogs" />
      </Helmet>
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense>
        <Header />
        <Blogs />
        <FloatingButtons />
        <Footer />
      </Suspense>
    </>
  );
};

export default BlogsPage;
