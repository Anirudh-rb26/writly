"use client";

import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/footer";
import GetStartedButton from "@/components/get-started-button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogPage = ({ params }) => {
  const [blogData, setBlogData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setBlogData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  });

  return (
    <div>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <Image src={assets.logo} alt="Logo" width={180} className="w-[130px] sm:w-auto" />
          <GetStartedButton />
        </div>

        {/* Blog Content */}
        {blogData ? (
          <>
            {/* Blog Title & Author Image, Name */}
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{blogData.title}</h1>
              <Image
                src={blogData.author_img}
                width={60}
                height={60}
                alt="Author Image"
                className="mx-auto mt-6 border border-white rounded-full"
              />
              <p className="mt-1 pb-2 text-lg max-w-[740px] mxau">{blogData.author}</p>
            </div>

            {/* Article */}
            <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
              <Image src={blogData.image} width={1280} height={720} alt="Blog Image" className="border-4 border-white" />
              <h1 className="my-8 text-[26px]">Introduction: </h1>
              <h3 className="my-5 text-[18px]">{blogData.description}</h3>
              <p className="">{blogData.article}</p>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">Unknown Error: Cannot Find Blog.</h1>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
