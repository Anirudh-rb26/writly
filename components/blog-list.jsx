import { blog_data } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import BlogItem from "./blog-item";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [animationStyle, setAnimationStyle] = useState({});
  const buttonRefs = useRef({});

  useEffect(() => {
    if (buttonRefs.current.All) {
      const button = buttonRefs.current.All;
      setAnimationStyle({
        width: button.offsetWidth,
        height: button.offsetHeight,
        left: button.offsetLeft,
        top: button.offsetTop,
      });
    }
  }, []);

  const handleMenuClick = (category) => {
    setMenu(category);
    const button = buttonRefs.current[category];
    setAnimationStyle({
      width: button.offsetWidth,
      height: button.offsetHeight,
      left: button.offsetLeft,
      top: button.offsetTop,
    });
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      {/* Category Navigation */}
      <div className="relative flex justify-center my-10">
        <div className="inline-flex relative gap-1 md:gap-4">
          <div
            className="absolute shadow-[-7px_7px_0px_#000000] transition-all duration-300 ease-in-out rounded-sm"
            style={animationStyle}
          />
          {["All", "Technology", "Startup", "Lifestyle"].map((category) => (
            // CategoryButton
            <button
              key={category}
              ref={(el) => (buttonRefs.current[category] = el)}
              onClick={() => handleMenuClick(category)}
              // CategoryButton Styling
              className="py-1 px-4 rounded-sm relative transition-colors duration-300 border border-black hover:bg-black hover:text-white hover:border-white">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Lists */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16">
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog, index) => (
            <BlogItem
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              id={blog.id}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
