import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { homeFeatures } from "./data/home-features";
import Feature from "./_components/feature/feature";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: { revalidate: 24 * 60 * 60 },
    }
  );
  return res.json();
}
export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />
      <section className="dark:bg-base-75 mt-10">
        <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
          {homeFeatures.map((feauture) => (
            <Feature feature={feauture} key={`key-${feauture.title}`} />
          ))}
        </div>
      </section>
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز موندن، یاد گرفتن نکته های تازه و ضروری</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
