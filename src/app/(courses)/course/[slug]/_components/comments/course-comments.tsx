"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import Comment from "@/app/_components/comment/comment";

const CourseComments: React.FC = () => {
  const { slug } = useParams();
  const { dataComments } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  return (
    <>
      {dataComments?.data.map((comment) => (
        <Comment variant="info" key={`comment-${comment.id}`} {...comment} />
      ))}
    </>
  );
};

export default CourseComments;
