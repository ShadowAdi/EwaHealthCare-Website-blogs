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
  const [rowsPerPage, setRowsPerPage] = useState(9); // Changed to 9 for better 3-column grid
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    fetchSuperBlogs();
  }, []); // Only fetch once on component mount since we're handling pagination client-side for combined blogs

  const fetchSuperBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch all blogs at once (increase limit to get all blogs)
      const result = await handleApiRequest({
        url: `/superblogs/grid?page=1&rows=1000`, // High limit to get all blogs
        method: "GET",
      });

      if (result.success) {
        setSuperBlogs(result.data.rows || []);
        setTotalBlogs(result.data?.total || 0);
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
    // Calculate totalCombinedPages here since it's computed inside render
    const allBlogs = [
      ...superBlogs.map((b) => ({
        slug: b.slug || b._id,
        title: b.title,
        author: b.author,
        date: b.date,
        image: b.image,
        isLocal: false,
        dateObj: new Date(b.date),
      })),
      ...blogData.map((b) => ({
        slug: b.slug,
        title: b.title,
        author: b.authorName,
        date: b.date,
        image: b.imageSrc,
        isLocal: true,
        dateObj: new Date(b.date),
      })),
    ];
    const totalPages = Math.ceil(allBlogs.length / rowsPerPage);
    
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ✅ Merge backend + local blogs and sort by date (latest first)
  const combinedBlogs = [
    ...superBlogs.map((b) => ({
      slug: b.slug || b._id,
      title: b.title,
      author: b.author,
      date: b.date,
      image: b.image,
      isLocal: false,
      dateObj: new Date(b.date),
    })),
    ...blogData.map((b) => ({
      slug: b.slug,
      title: b.title,
      author: b.authorName,
      date: b.date,
      image: b.imageSrc,
      isLocal: true,
      dateObj: new Date(b.date),
    })),
  ].sort((a, b) => b.dateObj - a.dateObj); // Sort by date descending (latest first)

  // Calculate pagination for combined blogs
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedBlogs = combinedBlogs.slice(startIndex, endIndex);
  const totalCombinedPages = Math.ceil(combinedBlogs.length / rowsPerPage);

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

        {/* ✅ Blog Controls */}
        <div className="p-6 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Blogs per page:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page when changing page size
                }}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
                <option value={18}>18</option>
              </select>
            </div>
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, combinedBlogs.length)} of {combinedBlogs.length} blogs
            </div>
          </div>

          {/* ✅ Combined Blogs Grid */}
          {loading && combinedBlogs.length === 0 ? (
            <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[800px]:grid-cols-3 gap-x-8 gap-y-16">
              {Array.from({ length: rowsPerPage }, (_, i) => (
                <div key={i} className="p-4">
                  <div className="animate-pulse">
                    <div className="h-[180px] md:h-[200px] bg-gray-300 rounded-xl mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[800px]:grid-cols-3 gap-x-8 gap-y-16">
              {paginatedBlogs.map((blog) => (
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
          )}

          {/* Empty State */}
          {paginatedBlogs.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
            </div>
          )}
        </div>

        {/* ✅ Enhanced Pagination */}
        {totalCombinedPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1 || loading}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                First
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Page Numbers */}
              {Array.from({ length: Math.min(5, totalCombinedPages) }, (_, i) => {
                let pageNum;
                if (totalCombinedPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalCombinedPages - 2) {
                  pageNum = totalCombinedPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-2 rounded transition-colors ${
                      currentPage === pageNum
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalCombinedPages || loading}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
              <button
                onClick={() => handlePageChange(totalCombinedPages)}
                disabled={currentPage === totalCombinedPages || loading}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Last
              </button>
            </div>

            <span className="text-sm text-gray-600 mt-2 sm:mt-0">
              Page {currentPage} of {totalCombinedPages}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
