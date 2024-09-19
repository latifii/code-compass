"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import Comment from "@/app/_components/comment/comment";
import { TextPlaceholder } from "@/app/_components/palceholders/text/text-placeholder";

const CourseComments: React.FC = () => {
  const { slug } = useParams();
  const { dataComments, isLoading } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  if (isLoading) return <TextPlaceholder />;

  return (
    <>
      {dataComments?.data.map((comment) => (
        <Comment variant="info" key={`comment-${comment.id}`} {...comment} />
      ))}
    </>
  );
};

export default CourseComments;
