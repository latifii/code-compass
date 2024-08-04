import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";

// type CourseCardListProps = {
//   courses: CourseSummary[];
// };
async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return res.json();
}

export const CourseCardList: React.FC = async () => {
  const courses = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-2">
      {courses.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
