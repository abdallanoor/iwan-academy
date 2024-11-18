import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourses } from "@/constants";
import { cn } from "@/lib/utils";

export default function Courses({ section }) {
  const t = useTranslations("courses");
  const courses = getCourses(t);
  return (
    <section className="bg-section py-section">
      <div className="container">
        {section && <h1 className="section-title">{t("title")}</h1>}
        <p className="mb-6 text-center">{t("description")}</p>
        <div className="flex flex-col gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="py-5 px-[10px] shadow-coursesCard rounded-md"
            >
              <h2 className="course-title">{course.title}</h2>
              <div
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8",
                  course?.id % 2 === 0 && "md:flex-row-reverse"
                )}
              >
                <Image
                  src={course.imgSrc}
                  width={350}
                  height={250}
                  alt={course.title}
                  className="w-full md:w-2/5 h-full"
                />
                <Accordion
                  type="single"
                  className="w-full flex flex-col gap-[5px]"
                  collapsible
                >
                  {course.courseContent.map((courseContent, i) => (
                    <AccordionItem key={i} value={i + 1} className="border-0">
                      <AccordionTrigger className="bg-[#dae6ee] px-2 md:px-4 hover:no-underline ">
                        {courseContent.title}
                      </AccordionTrigger>
                      <AccordionContent className="p-2 md:p-4 border border-t-0 flex flex-col gap-3 border-[#dae6ee]">
                        {courseContent.content.map((content, i) => (
                          <p key={i}>{content}</p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
