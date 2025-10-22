import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { domainName } from "../../App";
import HeroHeader from "../HeroHeader";
import { handleApiRequest } from "../../services/apiHandler";
import CustomImage from "../CustomImage";
import { blogData } from "./BlogData";

// Blog Card (works for both backend + local blogs)
const BlogCard = ({ slug, title, author, date, image, isLocal,altText }) => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="max-w-[24rem]">
        <Link to={`/blogs/${slug}`}>
          <section className="flex flex-col gap-5 flex-shrink-0">
            <div className="h-[180px] md:h-[200px] bg-primary/20 relative rounded-xl overflow-hidden">
              <CustomImage
                alt={altText ? altText : title}
                loading="lazy"
                decoding="async"
                src={image}
                isLocal={isLocal}
                className={`absolute inset-0 w-full h-full ${
    isLocal ? "object-contain bg-white" : "object-cover"
  }`}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row gap-2 flex-1">
                <div className="flex-1">
                  <h3 className="text-xl md:text-lg font-semibold leading-[33px]">
                    {title}
                  </h3>
                </div>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 w-6 h-6"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/50 relative overflow-hidden">
          <img
            alt={author}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
            src={`${domainName}/images/image.svg`}
          />
        </div>
        <div className="md:text-base">
          <h3 className="font-semibold">{author}</h3>
          <p className="text-[#79717f]">Published {date}</p>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [superBlogs, setSuperBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchSuperBlogs();
  }, [currentPage, rowsPerPage]);

  const fetchSuperBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await handleApiRequest({
        url: `/superblogs/grid?page=${currentPage}&rows=${rowsPerPage}`,
        method: "GET",
      });

      if (result.success) {
        setSuperBlogs(result.data.rows || []);
        if (result.data?.total) {
          setTotalPages(Math.ceil(result.data.total / rowsPerPage));
        }
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // ✅ Merge backend + local blogs
  const combinedBlogs = [
    ...superBlogs.map((b) => ({
      slug: b.slug || b._id,
      title: b.title,
      author: b.author,
      date: b.date,
      image: b.image,
      isLocal: false,
    })),
    ...blogData.map((b) => ({
      slug: b.slug,
      title: b.title,
      author: b.authorName,
      date: b.date,
      image: b.imageSrc,
      isLocal: true,
    })),
  ];

  if (loading && superBlogs.length === 0) {
    return (
      <>
        <HeroHeader />
        <div className="relative py-6 flex flex-col mb-20 items-center">
          <p className="text-xl">Loading blogs...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <HeroHeader />
        <div className="relative py-6 flex flex-col mb-20 items-center">
          <p className="text-xl text-red-500">Error loading blogs: {error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroHeader />
      <div className="relative py-6 md:pt-[4.5rem] flex flex-col mb-20 items-center gap-6">
        <div className="bg-[#EBF4F5] w-full">
          <div className="py-4 mt-10 md:pt-[4.5rem] flex flex-col items-center gap-4">
            <h1 className="mx-2 text-[24px] md:text-[3rem] font-bold text-center">
              Your Health &amp; Wellness Knowledge Hub
            </h1>
            <p className="text-[0.9375rem] md:text-xl text-center text-[#79717f] max-w-[48rem]">
              Explore our collection of expert-backed articles on health,
              wellness, and balanced living.
            </p>
          </div>
        </div>

        {/* ✅ Combined Blogs Grid */}
        <div className="p-6 w-full">
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[800px]:grid-cols-3 gap-x-8 gap-y-16">
            {combinedBlogs.map((blog) => (
              <div key={blog.slug} className="p-4 cursor-pointer">
                <BlogCard
                  slug={blog.slug}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                  image={blog.image}
                  isLocal={blog.isLocal}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
