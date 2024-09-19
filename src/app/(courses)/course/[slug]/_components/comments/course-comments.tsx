"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import Comment from "@/app/_components/comment/comment";
import { TextPlaceholder } from "@/app/_components/palceholders/text/text-placeholder";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CourseComments: React.FC = () => {
  const { slug } = useParams();
  const { ref, inView } = useInView({});
  const {
    dataComments,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      {dataComments?.pages.map((currentPage, i) => (
        <Fragment key={`comment-page-${i}`}>
          {currentPage.data.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="info"
            />
          ))}
        </Fragment>
      ))}

      {(isFetching || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
    </>
  );
};

export default CourseComments;
