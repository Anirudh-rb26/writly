"use client";

import BlogItem from "@/components/blog-item";
import BlogList from "@/components/blog-list";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
