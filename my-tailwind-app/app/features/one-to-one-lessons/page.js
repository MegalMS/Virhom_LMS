"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

export default function TargetedNeedsPage() {
  const pathname = usePathname(); // e.g. "/features/targeted-needs"
  const slug = pathname.split("/").pop(); // "targeted-needs"

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

      {/* === Targeted Needs Static Section === */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Targeted to your specific needs
            </h2>
            <div className="w-16 h-[2px] bg-[#A8E063] mb-6"></div>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Once you have started your journey towards fluency on your online English
              course, there may be times when you feel the need to talk to a teacher to
              find out how you are doing, and get some advice on what you need to focus
              on during the rest of your journey.
            </p>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Or, you may need a few lessons to focus on an important task, for example
              to prepare for the speaking or writing part of an English Language test
              like IELTS or TOEFL, or to prepare for an interview or a presentation.
            </p>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-8">
              All you need to do in order to book your one-to-one lesson for your
              specific need is to visit our teachers' calendars, and choose the date,
              time, and length of your lesson. Once you have made your choice, you can
              use your accumulated free credits, or buy the necessary number of credits
              in store to finalise your booking.
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
