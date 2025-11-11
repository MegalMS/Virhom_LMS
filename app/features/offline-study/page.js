"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

export default function AccessAnywherePage() {
  const pathname = usePathname(); // e.g. "/features/access-anywhere"
  const slug = pathname.split("/").pop(); // "access-anywhere"

  const toolData = studyToolsData[slug];
  console.log("slug:", slug);
  console.log("toolData:", toolData);

  if (!toolData) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        404 - Not Found
      </p>
    );
  }

  return (
    <main className="bg-amber-50 mt-12">
      {/* === Reusable Component === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Extra Static Section === */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Access anytime & anywhere
            </h2>
            <div className="w-16 h-[2px] bg-[#A8E063] mb-6"></div>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
              It can be frustrating not to be able to study English when you have
              the opportunity and the time, but no Internet access. To avoid this
              situation, we have made all the video lessons and audio recordings
              downloadable so you can access them offline anytime, anywhere.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Working with pen and paper
            </h3>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-8">
              We know that some of you still prefer working with pen and paper.
              Also, if you are an English teacher, you may want to print and
              photocopy some of the material for your students. To meet your
              needs, we have prepared downloadable PDF transcripts of the written
              content of the online course.
            </p>
          </div>

          {/* === Centered View all features link === */}
          <div className="flex justify-center">
            <a
              href="/features"
              className="text-sky-500 font-medium hover:underline inline-flex items-center"
            >
              View all features
              <span className="ml-1">›</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
