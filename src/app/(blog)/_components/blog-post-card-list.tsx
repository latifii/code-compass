import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";
// import { BlogPostCard } from "./blog-post-card";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { BlogPostCard } from "./blog-post-card";

type BlogPostCardListProps = {
  posts: BlogPostSummary[];
};

export const BlogPostCardList: React.FC<BlogPostCardListProps> = ({
  posts,
}) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {posts?.map((post) => (
        <BlogPostCard key={`course-${post.slug}`} {...post} />
      ))}
    </div>
  );
};
