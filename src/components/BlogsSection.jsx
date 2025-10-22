import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { domainName } from "../App";
import { handleApiRequest } from "../services/apiHandler";
import CustomImage from "./CustomImage";
import { blogData } from "./Blogs/BlogData";

const BlogsSection = () => {
  const [superBlogs, setSuperBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSuperBlogs();
  }, []);

  const fetchSuperBlogs = async () => {
    setLoading(true);
    try {
      const result = await handleApiRequest({
        url: `/superblogs/grid?page=1&rows=3`, // ✅ get only 3 latest blogs
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

  // ✅ Combine backend + local blogs, limit to 2 or 3
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
  ].slice(-2); // ✅ show only first 2 blogs

  return (
    <div className="bg-[#faf8f7] px-10 py-14 font-poppins">
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="flex-[0_0_32%] flex flex-col gap-5 ">
          <h3 className="text-4xl font-semibold">Featured blogs</h3>
          <p className="text-xl text-[#1e1028] opacity-70">
            Explore expert tips, latest trends, and inspiring stories curated just for you.
          </p>
          <Link
            className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-full text-sm md:text-base font-medium transition-all bg-[#02989D] hover:bg-[#02797D] hover:opacity-80 h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 self-start"
            to="/blogs"
          >
            View all
          </Link>
        </div>

        {/* ✅ Featured Blogs */}
        <div className="flex flex-col md:flex-row gap-8 mt-4 overflow-hidden">
          {loading ? (
            <p>Loading...</p>
          ) : (
            combinedBlogs.map((blog, index) => (
              <div key={index} className="max-w-[24rem]">
                <Link to={`/blogs/${blog.slug}`}>
                  <section className="flex flex-col gap-5 flex-shrink-0">
                    <div className="h-[180px] md:h-[200px] bg-primary/20 relative rounded-xl overflow-hidden">
                      <CustomImage
                        alt={blog.title}
                        src={blog.image}
                        isLocal={blog.isLocal}
                        className={`absolute inset-0 w-full h-full ${
                          blog.isLocal ? "object-contain bg-white" : "object-cover"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl md:text-lg font-semibold leading-[33px]">
                      {blog.title}
                    </h3>
                  </section>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
