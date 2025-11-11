"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

const Page = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    const toolData = studyToolsData[slug];
     if (!toolData)
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;

  
  return (
    <main className="font-sans">
        <StudyToolsSection
              title={toolData.title}
              description={toolData.description}
              image={toolData.image}
            />
      {/* ===== Top Title Section =====
      <div className="page_title has_img text-center py-12 bg-gradient-to-b from-amber-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Video lessons
        </h1>
        <p className="text-lg text-gray-600">With over 80 million views</p>
      </div> */}

      {/* ===== Dark Section ===== */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="feature_desc space-y-8">
            <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-amber-500 after:absolute after:bottom-[-5] after:left-0">
              English students love our video lessons, and we love making them.
            </h6>
            <p className="text-gray-600 leading-relaxed">
              We are delighted that you like our video lessons, and we are
              grateful for all the positive feedback we receive from you.
            </p>

            <img
              src="https://VirHom.com/images/comments.png"
              alt="Comments"
              className="comments mx-auto"
            />

            <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-amber-500 after:absolute after:bottom-[-5] after:left-0">
              What makes our videos different?
            </h6>
            <p className="text-gray-600">
              We do our very best to make every one of our English video lessons:
            </p>

            {/* === Content-rich Section === */}
            <div className="wrapper_collapse no_pad grid md:grid-cols-2 gap-10 items-center mt-10">
              <div>
                <h7 className="block text-xl text-amber-700 font-semibold mb-3">
                  Content-rich
                </h7>
                <p className="text-gray-600 text-left leading-relaxed">
                  We make sure that you get all the essential information as well
                  as many meaningful examples on the topic of study. Most lessons
                  also include a practice activity that deepens your understanding
                  and active use of the language point.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://VirHom.com/images/comment_1.png"
                  alt="Comment 1"
                  className="comment rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* === Easy-to-follow Section === */}
            <div className="wrapper_collapse no_pad grid md:grid-cols-2 gap-10 items-center mt-10">
              <div className="order-2 md:order-1 flex justify-center">
                <img
                  src="https://VirHom.com/images/comment_2.png"
                  alt="Comment 2"
                  className="comment rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h7 className="block text-xl text-amber-700 font-semibold mb-3">
                  Easy-to-follow
                </h7>
                <p className="text-gray-600 text-left leading-relaxed">
                  We present the content in simple English, and we speak clearly
                  so the explanations are easy to follow.
                </p>
              </div>
            </div>

            {/* === Professionally presented Section === */}
            <div className="wrapper_collapse no_pad grid md:grid-cols-2 gap-10 items-center mt-10">
              <div>
                <h7 className="block text-xl text-amber-700 font-semibold mb-3">
                  Professionally presented
                </h7>
                <p className="text-gray-600 text-left leading-relaxed">
                  We use extensive animations, colour coding, and visual cues to
                  clarify concepts for you. This greatly enhances your
                  understanding of the topic and helps you to easily remember the
                  examples when you want to use them in your own writing or
                  speech.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://VirHom.com/images/comment_3.png"
                  alt="Comment 3"
                  className="comment rounded-lg shadow-md"
                />
              </div>
            </div>

            <p className="text-gray-600 mt-10">
              To give you an idea of how much we care about the quality of our
              video lessons, we spend an average of 20 hours to produce one video
              lesson for you.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Light Section ===== */}
      <div className="light bg-amber-50 text-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6 feature_desc">
          <div className="inner space-y-8 relative">
            <h5 className="text-3xl text-amber-900 font-semibold text-center mb-10">
              Types of video lessons
            </h5>

            <div>
              <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-amber-500 after:absolute after:bottom-[-5] after:left-0">
                Grammar videos
              </h6>
              <p className="text-gray-700 leading-relaxed">
                Our grammar video lessons are voice-recorded and animated versions of
                our written explanations. They offer additional examples and exercises
                to deepen your understanding of the grammar topic.
              </p>
            </div>

            <div>
              <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-amber-500 after:absolute after:bottom-[-5] after:left-0">
                Pronunciation, conversation, and vocabulary videos
              </h6>
              <p className="text-gray-700 leading-relaxed">
                These videos review and expand on the contents of pronunciation and
                conversation lessons. Their aim is to help you to fully assimilate the
                material and to continue to improve your English listening skills and
                your pronunciation. Some of them include dictation exercises that help
                you with your spelling and writing skills too.
              </p>
            </div>

            <div>
              <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-amber-500 after:absolute after:bottom-[-2] after:left-0">
                Tutorials
              </h6>
              <p className="text-gray-700 leading-relaxed">
                These videos give you tips on how to study different areas of the
                English language effectively and how to improve different skills.
              </p>
            </div>

            <div>
              <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-amber-500 after:absolute after:bottom-[-2]  after:left-0">
                Exclusive videos
              </h6>
              <p className="text-gray-700 leading-relaxed">
                These English videos provide follow-up lessons and additional exercises
                on the more challenging topics in every category (grammar,
                pronunciation, and vocabulary). These video lessons are exclusive to
                Silver and Gold study plans.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://VirHom.com/features/"
            className="inline-flex items-center text-amber-700 font-medium hover:text-amber-900 hover:underline transition-all"
          >
            View all features
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ml-2 w-5 h-5 fill-current">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </a>
        </div>
      </div>

    </main>
  );
};

export default Page;