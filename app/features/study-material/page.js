  // "use client"
  // import React from 'react'
  // import StudyToolsSection from '../../../src/components/StudyToolsSection'
  // import {studyToolsData} from '../../../src/data/studyToolsData'
  // import { useParams } from "next/navigation";
  // import { usePathname } from 'next/navigation';

  // export default function StudyMaterialPage() {
  //     const pathname = usePathname(); // e.g. "/features/study-material"
  //   const slug = pathname.split("/").pop(); // "study-material"

  //   const toolData = studyToolsData[slug];
  //   console.log("slug:", slug); // ✅ should log "study-material"

  //   if (!toolData) {
  //     return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
  //   }
  //   console.log("toolData:", toolData); // ✅ should log the data for "study-material"
    
  //   return (
  //     <main className=" bg-[#F3F9FE] mt-12">
  // <StudyToolsSection
  //         title={toolData.title}
  //         description={toolData.description}
  //         image={toolData.image}
  //       />
  //       {/* Hero Image Section */}
  //       <div className="dark rounded-2xl mb-10">

  //         <div className="container mx-auto p-6">
  //           <div className="inner">

  //             <section className="space-y-6 pl-80 pr-80">
  //               <div>
  //                 <h6 className="relative font-normal text-2xl leading-[1.2] mb-10 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-5] after:left-0">
  //   Complete and relevant content
  // </h6>

  //                 <p className="text-base leading-[2.2] mb-8">
  //                   To become fluent in English, you need to master all its components:
  //                   pronunciation, grammar, and vocabulary. You also need to practise all four
  //                   skills: reading, writing, listening, and speaking.
  //                 </p>
  //                 <p className='text-base leading-[2.2] mb-20'> 
  //                   We have divided your online course into three categories: pronunciation,
  //                   grammar, and conversation. However, we have made sure that whichever category a
  //                   particular lesson focuses on, it also allows you to review and practise relevant
  //                   content from the other two categories. In this way, every lesson helps you to
  //                   improve your English grammar, vocabulary, and pronunciation simultaneously. We
  //                   have also made sure that you get the opportunity to practise all four skills in
  //                   every lesson.
  //                 </p>
  //               </div>

  //               <div>
  //                                 <h6 className="relative font-normal text-2xl leading-[1.2] mb-10 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  //   Graded
  // </h6>
                
  //                 <p className='text-base leading-[2.2] mb-5'>
  //                   Another important aspect of a self-study course is that the content needs to be
  //                   graded, going from easy to more difficult.
  //                 </p>

  //                 <p className='mb-5'> We have made sure that:</p>
  // <ul className="text-sm ml-4 space-y-3 mb-15">

  //   <li className="flex items-start gap-2">
  //     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 flex-shrink-0"
  //     />
  //     <span>
  //       The lessons in each category follow a logical sequence of easy to more
  //       difficult, with difficulty levels clearly marked for you.
  //     </span>
  //   </li>

  //   <li className="flex items-start gap-2">
  //     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 flex-shrink-0"
  //     />
  //     <span>
  //       More advanced lessons revise and build on the contents of earlier lessons.
  //     </span>
  //   </li>
  // </ul>

  //               </div>

  //               <div>
  //                                           <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  //   Clear explanations
  // </h6>
  // <p className='text-base leading-[2.2] mb-3'>We have ensured that our explanations are clear and easy-to-follow by using:</p>
  //                 <ul className="list-disc text-sm ml-6 mb-15">
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //               <span>Simple English</span>   </li>
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span> Tables</span></li>
  //                   <li className='flex items-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span>  Timelines</span></li>
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span>  Colour coding</span></li>
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //               <span>    Tips &amp; notes</span></li>
  //                 </ul>
  //               </div>

  //               <div>
  //                                           <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  //   Meaningful examples
  // </h6>
  // <p className='text-base leading-[2.2] mb-3'>We have made sure that our example phrases and sentences:</p>

  //                 <ul className="list-disc text-sm ml-6">
  //                   <li className='flex item-start gap-2'>
  //                       <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span> Easily clarify the point you are learning.</span></li>
  //                   <li className='flex item-start gap-2'>
  //                       <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                     <span>Include useful daily English expressions.</span></li>
  //                   <li className='flex item-start gap-2'>
  //                       <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                         <span>Perfectly match the language level you are studying.</span></li>
  //                 </ul>
  //               </div>
  //             </section>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Light Section */}
  //       <div className="light bg-white rounded-2xl p-6 ">
  //         <div className="container mx-auto ml-75 mr-75">
  //           <div className="inner space-y-6">
  //             <h5 className="text-3xl font-semibold flex item-center justify-center">What do I learn in each type of lesson?</h5>

  //             <div>

  //                                                       <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  // Pronunciation</h6>
  //               <p className='text-base leading-[2.2]'>
  //                 In pronunciation lessons, you learn about the sounds, stress patterns, and
  //                 intonation patterns of Standard British English (Received Pronunciation).
  //                 Understanding the sound system of the English language is essential in developing
  //                 good listening skills so you can understand native speakers, movies, news, and
  //                 other broadcasts in English. You can then use these resources to expand your active
  //                 vocabulary. It is also important for you to develop a clear pronunciation yourself,
  //                 and our self-study course gives you many opportunities to actively work on your own
  //                 pronunciation.
  //               </p>
  //             </div>

  //             <div>
  //                                                         <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  // Grammar</h6>
  //               <p className='text-base leading-[2.2]'>
  //                 In Grammar lessons, you learn all the important grammatical structures in English.
  //                 Mastering these is necessary for writing English fluently. A good knowledge of
  //                 grammar also improves your reading and listening skills. It is true that absolute
  //                 grammatical accuracy is not essential for speaking fluently. However, a good
  //                 knowledge of grammatical structures can definitely increase your self-confidence.
  //                 When we do not know the grammar rules, we may think we are making too many mistakes,
  //                 and we can lose our confidence to speak English in front of others. On the
  //                 contrary, when we know the rules, we are able to recognise and correct our mistakes,
  //                 and this is a great boost to our self-confidence.
  //               </p>
  //             </div>

  //             <div>
  //                                                         <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  // Conversation</h6>
  //               <p className='text-base leading-[2.2]'>
  //                 In conversation lessons, you focus on expanding your range of vocabulary and
  //                 expressions in a variety of everyday contexts. Learning English vocabulary in
  //                 situational dialogues reduces the need for translation and ensures that you can use
  //                 the vocabulary you learn reflexively. All the situational dialogues in the course
  //                 have been voice-recorded so you can improve your listening skills and pronunciation
  //                 at the same time as you learn new vocabulary and expressions.
  //               </p>
  //             </div>
  //           </div>
  //         </div>

  //       <div className="text-center mt-8">
  //   <a
  //     href="https://VirHome.com/features/"
  //     className="inline-block text-blue-400 px-5 py-2 rounded-full transition"
  //   >
  //     View all features
  // <img
  //   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' fill='%2337aadc'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"
  //   alt="arrow"
  //   className="inline-block ml-2 w-6 h-6 align-middle"
  // />

  //   </a>
  // </div>

  //       </div>
  //     </main>
  //   );
  // }

  "use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

// ✅ reusable SVG constant (check icon)
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// ✅ reusable section heading with green underline
function Heading({ children }) {
  return (
    <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-8px] after:left-0">
      {children}
    </h6>
  );
}

// ✅ reusable checklist component
function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2">
      <img src={CHECK_ICON} alt="check" className="w-5 h-5 mt-1 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function StudyMaterialPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const toolData = studyToolsData[slug];

  if (!toolData)
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;

  return (
    <main className="bg-amber-50 mt-12">
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* Dark Section */}
      <div className="dark rounded-2xl mb-10">
        <div className="container mx-auto p-6">
          <section className="space-y-10 max-w-4xl mx-auto">
            {/* ✅ Section 1 */}
            <div>
              <Heading>Complete and relevant content</Heading>
              <p className="text-base leading-[2.2] mb-8">
                To become fluent in English, you need to master all its components:
                pronunciation, grammar, and vocabulary. You also need to practise all
                four skills: reading, writing, listening, and speaking.
              </p>
              <p className="text-base leading-[2.2] mb-8">
                We have divided your online course into three categories:
                pronunciation, grammar, and conversation. However, we have made sure
                that whichever category a particular lesson focuses on, it also allows
                you to review and practise relevant content from the other two
                categories. In this way, every lesson helps you to improve your English
                grammar, vocabulary, and pronunciation simultaneously. We have also made
                sure that you get the opportunity to practise all four skills in every
                lesson.
              </p>
            </div>

            {/* ✅ Section 2 */}
            <div>
              <Heading>Graded</Heading>
              <p className="text-base leading-[2.2] mb-4">
                Another important aspect of a self-study course is that the content
                needs to be graded, going from easy to more difficult.
              </p>
              <p className="text-base mb-5">We have made sure that:</p>
              <ul className="space-y-3 ml-4 text-sm">
                <CheckItem>
                  The lessons in each category follow a logical sequence of easy to more
                  difficult, with difficulty levels clearly marked for you.
                </CheckItem>
                <CheckItem>
                  More advanced lessons revise and build on the contents of earlier
                  lessons.
                </CheckItem>
              </ul>
            </div>

            {/* ✅ Section 3 */}
            <div>
              <Heading>Clear explanations</Heading>
              <p className="text-base leading-[2.2] mb-4">
                We have ensured that our explanations are clear and easy-to-follow by
                using:
              </p>
              <ul className="space-y-2 ml-4 text-sm">
                <CheckItem>Simple English</CheckItem>
                <CheckItem>Tables</CheckItem>
                <CheckItem>Timelines</CheckItem>
                <CheckItem>Colour coding</CheckItem>
                <CheckItem>Tips &amp; notes</CheckItem>
              </ul>
            </div>

            {/* ✅ Section 4 */}
            <div>
              <Heading>Meaningful examples</Heading>
              <p className="text-base leading-[2.2] mb-4">
                We have made sure that our example phrases and sentences:
              </p>
              <ul className="space-y-2 ml-4 text-sm">
                <CheckItem>
                  Easily clarify the point you are learning.
                </CheckItem>
                <CheckItem>Include useful daily English expressions.</CheckItem>
                <CheckItem>
                  Perfectly match the language level you are studying.
                </CheckItem>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* ✅ Light Section */}
      <div className="light rounded-2xl p-10">
        <div className="container mx-auto max-w-4xl space-y-10">
          <h5 className="text-3xl font-semibold text-center">
            What do I learn in each type of lesson?
          </h5>

          {/* ✅ Repeated Sections */}
          <div>
            <Heading>Pronunciation</Heading>
            <p className="text-base leading-[2.2]">
              In pronunciation lessons, you learn about the sounds, stress patterns,
              and intonation patterns of Standard British English (Received
              Pronunciation). Understanding the sound system of the English language is
              essential in developing good listening skills so you can understand native
              speakers, movies, news, and other broadcasts in English. You can then use
              these resources to expand your active vocabulary. It is also important for
              you to develop a clear pronunciation yourself, and our self-study course
              gives you many opportunities to actively work on your own pronunciation.
            </p>
          </div>

          <div>
            <Heading>Grammar</Heading>
            <p className="text-base leading-[2.2]">
              In Grammar lessons, you learn all the important grammatical structures in
              English. Mastering these is necessary for writing English fluently. A good
              knowledge of grammar also improves your reading and listening skills. It
              is true that absolute grammatical accuracy is not essential for speaking
              fluently. However, a good knowledge of grammatical structures can
              definitely increase your self-confidence. When we do not know the grammar
              rules, we may think we are making too many mistakes, and we can lose our
              confidence to speak English in front of others. On the contrary, when we
              know the rules, we are able to recognise and correct our mistakes, and this
              is a great boost to our self-confidence.
            </p>
          </div>

          <div>
            <Heading>Conversation</Heading>
            <p className="text-base leading-[2.2]">
              In conversation lessons, you focus on expanding your range of vocabulary
              and expressions in a variety of everyday contexts. Learning English
              vocabulary in situational dialogues reduces the need for translation and
              ensures that you can use the vocabulary you learn reflexively. All the
              situational dialogues in the course have been voice-recorded so you can
              improve your listening skills and pronunciation at the same time as you
              learn new vocabulary and expressions.
            </p>
          </div>

          {/* ✅ CTA */}
          <div className="text-center mt-8">
            <a
              href="/features"
              className="inline-flex items-center text-blue-400 px-5 py-2 rounded-full transition"
            >
              View all features
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' fill='%2337aadc'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"
                alt="arrow"
                className="ml-2 w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

