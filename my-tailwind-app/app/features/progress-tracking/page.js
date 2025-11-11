"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Reusable SVG constant (check icon)
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// Reusable section heading with green underline
function Heading({ children }) {
  return (
    <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-8px] after:left-0">
      {children}
    </h6>
  );
}

// Reusable checklist component
function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2">
      <img
        src={CHECK_ICON}
        alt="check"
        className="w-5 h-5 mt-1 flex-shrink-0"
      />
      <span>{children}</span>
    </li>
  );
}

export default function CompletedLessonsPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const toolData = studyToolsData[slug];

  if (!toolData) {
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
  }

  return (
    <main className="bg-amber-50 mt-12">
      {/* Top Section: Dynamic Study Tool Header */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* Bottom Section: Completed Lessons + Progress */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">

          {/* === Completed lessons === */}
          <div className="mb-20">
            <Heading>Completed lessons</Heading>
            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px]">
              A lesson is 'completed' when you have taken the test for that lesson and
              obtained the minimum pass rate. You can then move on to the next lesson in
              your personal study plan. You can easily see, both in your study plan and
              on your dashboard, which lessons you have successfully completed and which
              ones you still need to study or revise.
            </p>
          </div>

          {/* === Test results & progress charts === */}
          <div className="mb-20">
            <Heading>Test results & progress charts</Heading>
            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px]">
              Each time you take the test for a certain lesson, your score is recorded in
              a chart so you can track your progress in each topic through time. Our goal
              is to help you achieve 100% on every test by giving you detailed feedback on
              your test results.
            </p>
          </div>

          {/* === Feedback & recommendations === */}
          <div className="mb-16">
            <Heading>Feedback & recommendations</Heading>
            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-8">
              Our feedback system highlights your mistakes, gives you some tips, and
              directs you to the section(s) of the lesson that you specifically need to
              revise. After your revision, you must retake the test for further feedback
              and guidance.
            </p>
          </div>

          {/* === Centered Link === */}
          <div className="flex justify-center">
            <Link
              href="/features"
              className="text-sky-500 font-medium hover:underline inline-flex items-center"
            >
              View all features
              <span className="ml-1">›</span>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}