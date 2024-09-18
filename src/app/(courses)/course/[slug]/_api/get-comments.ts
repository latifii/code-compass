import { readData } from "@/core/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useQuery } from "@tanstack/react-query";

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
  const { data: dataComments } = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => getComments({ params }),
  });

  return { dataComments };
}
