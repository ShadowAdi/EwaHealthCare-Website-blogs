import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroHeader from "../HeroHeader";
import { handleApiRequest } from "../../services/apiHandler";
import CustomImage from "../CustomImage";
import { FaWhatsapp, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import { blogData } from "./BlogData";

const BlogDetail = () => {
  const { id } = useParams(); // slug OR backend id
  const [loading, setLoading] = useState(true);
  const [superBlog, setSuperBlog] = useState(null);
  const [blogSections, setBlogSections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    // 1. Check if it's a local blog
    const local = blogData.find((b) => b.slug === id);
    if (local) {
      setSuperBlog({ ...local, isLocal: true,altText: local.altText}); // mark as local
      setBlogSections([
        { isLocal: true, content: local.content, image: local.imageSrc,altText: local.altText},
      ]);
      setLoading(false);
      return;
    }

    // 2. Else fetch from backend
    fetchSuperBlog();
  }, [id]);

  const fetchSuperBlog = async () => {
    setLoading(true);
    try {
      const result = await handleApiRequest({
        url: `/superblogs/grid?_id=${id}`,
        method: "GET",
      });

      if (result.success && result.data?.rows?.length > 0) {
        const superBlogData = result.data.rows[0];
        setSuperBlog(superBlogData);

        if (superBlogData.blogs?.length > 0) {
          await fetchBlogSections(superBlogData.blogs);
        } else {
          setError("No blog content found for this superblog");
          setLoading(false);
        }
      } else {
        setError(result.error || "Failed to fetch blog details");
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch blog details");
      setLoading(false);
    }
  };

  const fetchBlogSections = async (blogIds) => {
    try {
      const blogPromises = blogIds.map((blogId) =>
        handleApiRequest({
          url: `/blogs/grid?_id=${blogId}`,
          method: "GET",
        })
      );

      const results = await Promise.all(blogPromises);

      const blogSectionsData = results
        .filter((result) => result.success && result.data?.rows?.length > 0)
        .map((result) => result.data.rows[0]);

      setBlogSections(blogSectionsData);

      if (blogSectionsData.length === 0) {
        setError("No blog content could be loaded");
      }
    } catch (err) {
      setError("Failed to fetch blog content");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <HeroHeader />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mt-10">Loading blog...</h1>
        </div>
      </>
    );
  }

  if (error || !superBlog) {
    return (
      <>
        <HeroHeader />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mt-10">Blog Not Found</h1>
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <Link
            to="/blogs"
            className="mt-6 inline-block text-primary hover:underline"
          >
            Return to blogs
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroHeader />
      <div className="container sm:w-[60%] mx-auto w-full px-4 flex flex-col gap-12">
        <div className=" mx-auto  flex flex-col justify-center  space-y-6 md:gap-8 mt-12 md:mt-16">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center gap-2 md:gap-4">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-[1.75rem] md:text-[2.5rem] font-semibold">
                {superBlog.title}
              </h1>
            </div>

            {superBlog.authorName || superBlog.author ? (
              <div className="flex flex-col md:gap-1">
                <p className="text-[15px] md:text-xl font-medium text-primary">
                  Written by
                </p>
                <p className="text-[15px] md:text-xl">
                  {superBlog.authorName || superBlog.author}
                </p>
                <div className="flex items-center gap-4 mt-4 flex-wrap">
                  <span className="text-gray-600 font-medium">Share via:</span>

                  {/* social share icons */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 text-2xl"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(superBlog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-2xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 text-2xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(
                      superBlog.title
                    )}&body=Check out this blog: ${encodeURIComponent(
                      window.location.href
                    )}`}
                    className="text-red-600 text-2xl"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Image */}
          <div className="w-full max-w-3xl mx-auto">
            <CustomImage
              alt={superBlog.altText?superBlog.altText:superBlog.title}
              loading="lazy"
              decoding="async"
              src={superBlog.image || superBlog.imageSrc}
              isLocal={superBlog.isLocal}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>

        </div>

        {/* Blog Content */}

        <div className=" mx-auto px-4 md:px-8">
          {superBlog.isLocal ? (
            // Render local blog content directly (no image/content split)
            <div className="w-full text-[#4b4656] text-[17px] md:text-[18px] space-y-6">
              {typeof superBlog.content === "string" ? (
                <div
                  className="pt-6 border-t border-gray-300"
                  dangerouslySetInnerHTML={{ __html: superBlog.content }}
                />
              ) : (
                // fallback in case it's JSX or something else
                superBlog.content
              )}
            </div>
          ) : (
            // Default layout for backend blogs
            blogSections.map((section, index) => (
              <section key={section._id || index}>
                <div className="w-full flex flex-col md:flex-row gap-6 items-start">
                  {section.image ? (
                    <>
                      {/* With Image → 2-column */}
                      <div className="w-full md:w-[45%] lg:w-[40%] mb-4 md:mb-0">
                        <CustomImage
                          alt={`Blog section image ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          src={section.image}
                          className="w-full h-auto rounded-lg object-cover shadow-md"
                        />
                      </div>
                      <div className="flex-1 md:w-[60%] lg:w-[60%] text-[#4b4656] text-[17px] md:text-[18px]">
                        <div
                          className="pt-6 border-t border-gray-300"
                          dangerouslySetInnerHTML={{
                            __html: section.description || section.content,
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    /* No Image → full width text */
                    <div className="w-full text-[#4b4656] text-[17px] md:text-[18px]">
                      <div
                        className="pt-6 border-t border-gray-300"
                        dangerouslySetInnerHTML={{
                          __html: section.description || section.content,
                        }}
                      />
                    </div>
                  )}
                </div>
              </section>
            ))
          )}
        </div>

      </div>
    </>
  );
};

export default BlogDetail;
