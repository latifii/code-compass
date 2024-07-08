import { Badge } from "@/app/_components/badge/badge";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourseSummary & {};
export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="warning">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between">
          <Badge variant="accent"> {duration}</Badge>
          {basePrice === 0
            ? "رایگان"
            : `${basePrice.toLocaleString("fa-IR")} تومان`}
        </div>
      </div>
      <Link href={`/course/${slug}`} className="card-footer justify-center">
        مشاهده جزئیات دوره
      </Link>
    </div>
  );
};
