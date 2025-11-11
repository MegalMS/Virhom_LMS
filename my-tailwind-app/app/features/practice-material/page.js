"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

export default function PracticeMaterialPage() {
  const pathname = usePathname(); // e.g. "/features/practice-material"
  const slug = pathname.split("/").pop(); // "practice-material"

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
      {/* === Reusable Top Section === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Practice Section === */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
          {/* === Practice makes perfect === */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Practice makes perfect
            </h2>
            <div className="w-16 h-[2px] bg-[#A8E063] mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px]">
              To be able to reflexively use the English vocabulary and grammar that you
              learn in each lesson, you need to practise the material many times and in
              different contexts. That is why every lesson includes its own exercise
              section, and we have included additional exercises in the video lessons too.
            </p>
          </div>

          {/* === Written exercises === */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Written exercises
            </h2>
            <div className="w-16 h-[2px] bg-[#A8E063] mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
              This is where you put into practice what you have just studied. As you type
              your answer to each written exercise, our software analyses your answer. If
              you make a mistake while typing, our software warns you and guides you
              towards the correct answer. Thanks to this great feature, your spelling and
              punctuation improves at the same time as your knowledge of English grammar
              and vocabulary.
            </p>
          </div>

          {/* === Oral exercises === */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Oral exercises
            </h2>
            <div className="w-16 h-[2px] bg-[#A8E063] mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Written exercises to assimilate grammar and vocabulary are essential.
              However, if they are only in written form and you never hear the correct
              English pronunciation, you will develop a gap in your listening skills.
              Also, if you have to imagine the pronunciation of what you are reading, you
              will inevitably make mistakes that come from the influence of your native
              language.
            </p>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-8">
              The key to achieving fluency and confidence to speak English is oral
              practice. That is why all the pronunciation lessons, conversation lessons,
              and grammar exercises are professionally voice-recorded so you can hear and
              repeat everything you study.
            </p>

            {/* === Centered link === */}
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
        </div>
      </section>
    </main>
  );
}
