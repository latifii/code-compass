import { readData } from "@/core/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

type GetCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

function getComments({
  params,
}: GetCommentsOptions): Promise<CourseCommentList> {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
}

export function useCourseComments({ params }: GetCommentsOptions) {
  const {
    data: dataComments,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["courseComments", params.slug],
    queryFn: ({ pageParam }) =>
      getComments({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 60 * 1000,
    gcTime: 6 * 60 * 60 * 1000,
  });

  return {
    dataComments,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
}
