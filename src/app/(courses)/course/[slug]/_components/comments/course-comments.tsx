"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";

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
        <p className="mb-8" key={comment.id}>
          {comment.commentText}
        </p>
      ))}
    </>
  );
};

export default CourseComments;
