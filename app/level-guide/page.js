// // // "use client";
// // // import React from "react";

// // // export default function Page() {
// // //   const levels = [
// // //     {
// // //       level: "Beginner",
// // //       CEFR: "A1",
// // //       IELTS: "1.0",
// // //       Cambridge: "KET Pass (100-119)",
// // //       TOEFL: "0 - 19",
// // //     },
// // //     {
// // //       level: "Lower Elementary",
// // //       CEFR: "A2",
// // //       IELTS: "3.0",
// // //       Cambridge: "KET/PET Pass (120-139)",
// // //       TOEFL: "20 - 31",
// // //     },
// // //     {
// // //       level: "Upper Elementary",
// // //       CEFR: "B1",
// // //       IELTS: "4.0",
// // //       Cambridge: "PET (140 - 148)",
// // //       TOEFL: "32 - 38",
// // //     },
// // //     {
// // //       level: "Lower Intermediate",
// // //       CEFR: "B1+",
// // //       IELTS: "5.0",
// // //       Cambridge: "PET (150 - 159)",
// // //       TOEFL: "39 - 45",
// // //     },
// // //     {
// // //       level: "Upper Intermediate",
// // //       CEFR: "B2",
// // //       IELTS: "6.0",
// // //       Cambridge: "FCE (160 - 169)",
// // //       TOEFL: "46 - 70",
// // //     },
// // //     {
// // //       level: "Lower Advanced",
// // //       CEFR: "B2+",
// // //       IELTS: "6.5",
// // //       Cambridge: "FCE (170 - 179)",
// // //       TOEFL: "71 - 83",
// // //     },
// // //     {
// // //       level: "Upper Advanced",
// // //       CEFR: "C1",
// // //       IELTS: "7.0",
// // //       Cambridge: "CAE (180 - 189)",
// // //       TOEFL: "94 - 101",
// // //     },
// // //     {
// // //       level: "Fluent",
// // //       CEFR: "C1+",
// // //       IELTS: "7.5",
// // //       Cambridge: "CAE (190 - 199)",
// // //       TOEFL: "102 - 114",
// // //     },
// // //     {
// // //       level: "Proficient",
// // //       CEFR: "C2",
// // //       IELTS: "8.0",
// // //       Cambridge: "CPE (200 - 219)",
// // //       TOEFL: "115 - 117",
// // //     },
// // //     {
// // //       level: "Expert (near-native)",
// // //       CEFR: "C2+",
// // //       IELTS: "9.0",
// // //       Cambridge: "CPE (220 - 230)",
// // //       TOEFL: "118 - 120",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="bg-white py-20">
// // //       <div className="max-w-5xl mx-auto px-4">
// // //         {/* Heading */}
// // //         <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
// // //           Anglo-Link's ranks in the framework of international tests
// // //         </h2>

// // //         {/* Table */}
// // //         <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md">
// // //           <table className="w-full text-center border-collapse">
// // //             <thead>
// // //               <tr className="bg-[#E8F3FC] border-b border-blue-300">
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   Anglo-Link level
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   CEFR
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   IELTS
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   Cambridge
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800">
// // //                   TOEFL iBT
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {levels.map((row, i) => (
// // //                 <tr
// // //                   key={i}
// // //                   className={`text-gray-700 text-sm ${
// // //                     i % 2 === 0 ? "bg-gray-50" : "bg-white"
// // //                   } hover:bg-blue-50 transition`}
// // //                 >
// // //                   <td className="p-3 border border-gray-200">{row.level}</td>
// // //                   <td className="p-3 border border-gray-200">{row.CEFR}</td>
// // //                   <td className="p-3 border border-gray-200">{row.IELTS}</td>
// // //                   <td className="p-3 border border-gray-200">
// // //                     {row.Cambridge}
// // //                   </td>
// // //                   <td className="p-3 border border-gray-200">{row.TOEFL}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Notes */}
// // //         <div className="mt-6 text-sm text-gray-600">
// // //           <p className="mt-2">
// // //             * The Common European Framework of Reference for Languages{" "}
// // //             <a href="#" className="text-[#207FC5] hover:underline font-medium">
// // //               (CEFR)
// // //             </a>
// // //           </p>
// // //           <p className="mt-1">
// // //             ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE: First,
// // //             CAE: Advanced, CPE: Proficiency
// // //           </p>
// // //         </div>

// // //         {/* Tabs */}
// // //         <div className="flex justify-center mt-10 overflow-x-hidden whitespace-nowrap">
// // //           {[
// // //             "Beginner (A1)",
// // //             "Elementary (A2)",
// // //             "Intermediate (B1-B2)",
// // //             "Advanced (C1)",
// // //             "Fluent (C1+)",
// // //             "Proficient (C2)",
// // //             "Expert (Near Native) (C2+)",
// // //           ].map((tab, i) => (
// // //             <button
// // //               key={i}
// // //               className={`text-xs px-3 py-1.5 border-t-2 border-x border-b-0 ${
// // //                 i === 0
// // //                   ? "bg-[#207FC5] text-white border-[#207FC5]"
// // //                   : "bg-[#E8F3FC] text-gray-700 border-[#C8E0F5]"
// // //               } hover:bg-[#207FC5]/90 hover:text-white transition`}
// // //             >
// // //               {tab}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";
// // import React from "react";
// // import { GraduationCap } from "lucide-react";

// // export default function Page() {
// //   const levels = [
// //     {
// //       level: "Beginner",
// //       CEFR: "A1",
// //       IELTS: "1.0",
// //       Cambridge: "KET Pass (100-119)",
// //       TOEFL: "0 - 19",
// //     },
// //     {
// //       level: "Lower Elementary",
// //       CEFR: "A2",
// //       IELTS: "3.0",
// //       Cambridge: "KET/PET Pass (120-139)",
// //       TOEFL: "20 - 31",
// //     },
// //     {
// //       level: "Upper Elementary",
// //       CEFR: "B1",
// //       IELTS: "4.0",
// //       Cambridge: "PET (140 - 148)",
// //       TOEFL: "32 - 38",
// //     },
// //     {
// //       level: "Lower Intermediate",
// //       CEFR: "B1+",
// //       IELTS: "5.0",
// //       Cambridge: "PET (150 - 159)",
// //       TOEFL: "39 - 45",
// //     },
// //     {
// //       level: "Upper Intermediate",
// //       CEFR: "B2",
// //       IELTS: "6.0",
// //       Cambridge: "FCE (160 - 169)",
// //       TOEFL: "46 - 70",
// //     },
// //     {
// //       level: "Lower Advanced",
// //       CEFR: "B2+",
// //       IELTS: "6.5",
// //       Cambridge: "FCE (170 - 179)",
// //       TOEFL: "71 - 83",
// //     },
// //     {
// //       level: "Upper Advanced",
// //       CEFR: "C1",
// //       IELTS: "7.0",
// //       Cambridge: "CAE (180 - 189)",
// //       TOEFL: "94 - 101",
// //     },
// //     {
// //       level: "Fluent",
// //       CEFR: "C1+",
// //       IELTS: "7.5",
// //       Cambridge: "CAE (190 - 199)",
// //       TOEFL: "102 - 114",
// //     },
// //     {
// //       level: "Proficient",
// //       CEFR: "C2",
// //       IELTS: "8.0",
// //       Cambridge: "CPE (200 - 219)",
// //       TOEFL: "115 - 117",
// //     },
// //     {
// //       level: "Expert (near-native)",
// //       CEFR: "C2+",
// //       IELTS: "9.0",
// //       Cambridge: "CPE (220 - 230)",
// //       TOEFL: "118 - 120",
// //     },
// //   ];

// //   return (
// //     <>
// //       {/* ---------------- Table Section ---------------- */}
// //       <section className="bg-white py-20">
// //         <div className="max-w-5xl mx-auto px-4">
// //           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
// //             Anglo-Link's ranks in the framework of international tests
// //           </h2>

// //           <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md">
// //             <table className="w-full text-center border-collapse">
// //               <thead>
// //                 <tr className="bg-[#E8F3FC] border-b border-blue-300">
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     Anglo-Link level
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     CEFR
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     IELTS
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     Cambridge
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800">
// //                     TOEFL iBT
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {levels.map((row, i) => (
// //                   <tr
// //                     key={i}
// //                     className={`text-gray-700 text-sm ${
// //                       i % 2 === 0 ? "bg-gray-50" : "bg-white"
// //                     } hover:bg-blue-50 transition`}
// //                   >
// //                     <td className="p-3 border border-gray-200">{row.level}</td>
// //                     <td className="p-3 border border-gray-200">{row.CEFR}</td>
// //                     <td className="p-3 border border-gray-200">{row.IELTS}</td>
// //                     <td className="p-3 border border-gray-200">
// //                       {row.Cambridge}
// //                     </td>
// //                     <td className="p-3 border border-gray-200">{row.TOEFL}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="mt-6 text-sm text-gray-600">
// //             <p className="mt-2">
// //               * The Common European Framework of Reference for Languages{" "}
// //               <a
// //                 href="#"
// //                 className="text-[#207FC5] hover:underline font-medium"
// //               >
// //                 (CEFR)
// //               </a>
// //             </p>
// //             <p className="mt-1">
// //               ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
// //               First, CAE: Advanced, CPE: Proficiency
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------- Beginner Section ---------------- */}
// //       <section className="bg-[#1E5373] text-white py-12 md:py-20">
// //         {/* Tabs */}
// //         <div className="flex justify-center flex-wrap gap-1 mb-8">
// //           {[
// //             "Beginner (A1)",
// //             "Elementary (A2)",
// //             "Intermediate (B1-B2)",
// //             "Advanced (C1)",
// //             "Fluent (C1+)",
// //             "Proficient (C2)",
// //             "Expert (Near Native) (C2+)",
// //           ].map((tab, i) => (
// //             <button
// //               key={i}
// //               className={`text-xs md:text-sm px-3 py-2 font-medium ${
// //                 i === 0
// //                   ? "bg-[#207FC5] text-white"
// //                   : "bg-[#F2F2F2] text-[#333]"
// //               } rounded-t-md`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Content */}
// //         <div className="max-w-4xl mx-auto text-center px-6">
// //           <h2 className="text-xl md:text-2xl font-semibold mb-6">
// //             Beginner (A1)
// //           </h2>

// //           <div className="flex justify-center mb-6">
// //             <div className="bg-white/10 p-3 rounded-md">
// //               <GraduationCap size={36} className="text-white" />
// //             </div>
// //           </div>

// //           <div className="text-sm md:text-base leading-relaxed space-y-6">
// //             <div>
// //               <h3 className="font-semibold mb-2">Your abilities</h3>
// //               <p className="text-gray-100 max-w-2xl mx-auto">
// //                 You understand and can use some basic English phrases to say
// //                 hello, goodbye, thank you, etc. You can also say a few things
// //                 about yourself (name, nationality, age, possessions), but you
// //                 are not able to understand or engage in a conversation or any
// //                 form of written exchange.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="font-semibold mb-2">Your goals</h3>
// //               <p className="text-gray-100 max-w-2xl mx-auto">
// //                 Your goals working through this level are to:
// //               </p>
// //               <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
// //                 <li>
// //                   Learn the basic structure and the most common daily vocabulary
// //                   and phrases.
// //                 </li>
// //                 <li>
// //                   Open your ears to English sounds and rhythm by hearing English
// //                   in the background (without trying to understand anything).
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// "use client";
// import React, { useState } from "react";
// import { GraduationCap } from "lucide-react";

// export default function Page() {
//   const levels = [
//     {
//       tab: "Beginner (A1)",
//       title: "Beginner (A1)",
//       abilities:
//         "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
//       goals: [
//         "Learn the basic structure and the most common daily vocabulary and phrases.",
//         "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything).",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Elementary (A2)",
//       title: "Elementary (A2)",
//       abilities:
//         "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
//       goals: [
//         "Expand your vocabulary and improve your pronunciation.",
//         "Understand short phrases and simple sentences used in daily life.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Intermediate (B1-B2)",
//       title: "Intermediate (B1-B2)",
//       abilities:
//         "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
//       goals: [
//         "Learn to express opinions, agree/disagree, and describe events clearly.",
//         "Start reading and listening to English media for comprehension.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Advanced (C1)",
//       title: "Advanced (C1)",
//       abilities:
//         "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
//       goals: [
//         "Improve advanced grammar and idiomatic expressions.",
//         "Work on writing essays and formal correspondence.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Fluent (C1+)",
//       title: "Fluent (C1+)",
//       abilities:
//         "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
//       goals: [
//         "Refine your accent and vocabulary range.",
//         "Engage in debates and discussions on complex topics.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Proficient (C2)",
//       title: "Proficient (C2)",
//       abilities:
//         "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
//       goals: [
//         "Perfect your understanding of cultural nuances in communication.",
//         "Write and speak with precision and natural flow.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Expert (Near Native) (C2+)",
//       title: "Expert (Near Native) (C2+)",
//       abilities:
//         "You have a level of English comparable to that of a well-educated native speaker.",
//       goals: [
//         "Master stylistic variety and cultural references in all contexts.",
//         "Communicate effortlessly with full natural fluency.",
//       ],
//       bg: "#1E5373",
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <>
//       {/* ---------- Table Section ---------- */}
//       <section className="bg-white py-20 relative">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
//             Anglo-Link's ranks in the framework of international tests
//           </h2>

//           {/* Table */}
//           <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md mb-20">
//             <table className="w-full text-center border-collapse">
//               <thead>
//                 <tr className="bg-[#E8F3FC] border-b border-blue-300">
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     Anglo-Link level
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     CEFR
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     IELTS
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     Cambridge
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800">
//                     TOEFL iBT
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {levels.map((row, i) => (
//                   <tr
//                     key={i}
//                     className={`text-gray-700 text-sm ${
//                       i % 2 === 0 ? "bg-gray-50" : "bg-white"
//                     } hover:bg-blue-50 transition`}
//                   >
//                     <td className="p-3 border border-gray-200">{row.title}</td>
//                     <td className="p-3 border border-gray-200">
//                       {row.tab.match(/\(([^)]+)\)/)?.[1] || ""}
//                     </td>
//                     <td className="p-3 border border-gray-200">–</td>
//                     <td className="p-3 border border-gray-200">–</td>
//                     <td className="p-3 border border-gray-200">–</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Notes */}
//           <div className="mt-6 text-sm text-gray-600">
//             <p className="mt-2">
//               * The Common European Framework of Reference for Languages{" "}
//               <a
//                 href="#"
//                 className="text-[#207FC5] hover:underline font-medium"
//               >
//                 (CEFR)
//               </a>
//             </p>
//             <p className="mt-1">
//               ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
//               First, CAE: Advanced, CPE: Proficiency
//             </p>
//           </div>
//         </div>

//         {/* Tabs overlapping between white and blue section */}
//         <div className="absolute left-1/2 -bottom-[24px] transform -translate-x-1/2 z-20 flex flex-wrap justify-center bg-transparent">
//           {levels.map((level, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTab(i)}
//               className={`text-xs md:text-sm px-3 py-2 font-medium border-t-2 border-x border-b-0 transition ${
//                 activeTab === i
//                   ? "bg-[#207FC5] text-white border-[#207FC5]"
//                   : "bg-[#E8F3FC] text-[#333] border-[#C8E0F5] hover:bg-[#207FC5]/90 hover:text-white"
//               }`}
//             >
//               {level.tab}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Dynamic Blue Section ---------- */}
//       <section
//         className="text-white py-16 md:py-20 relative z-10"
//         style={{ backgroundColor: levels[activeTab].bg }}
//       >
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-xl md:text-2xl font-semibold mb-6">
//             {levels[activeTab].title}
//           </h2>

//           <div className="flex justify-center mb-6">
//             <div className="bg-white/10 p-3 rounded-md">
//               <GraduationCap size={36} className="text-white" />
//             </div>
//           </div>

//           <div className="text-sm md:text-base leading-relaxed space-y-6">
//             <div>
//               <h3 className="font-semibold mb-2">Your abilities</h3>
//               <p className="text-gray-100 max-w-2xl mx-auto">
//                 {levels[activeTab].abilities}
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">Your goals</h3>
//               <p className="text-gray-100 max-w-2xl mx-auto">
//                 Your goals working through this level are to:
//               </p>
//               <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
//                 {levels[activeTab].goals.map((goal, i) => (
//                   <li key={i}>{goal}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import React, { useState } from "react";
import { GraduationCap } from "lucide-react";

export default function Page() {
  const levels = [
    {
      tab: "Beginner (A1)",
      title: "Beginner (A1)",
      abilities:
        "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
      goals: [
        "Learn the basic structure and the most common daily vocabulary and phrases.",
        "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything).",
      ],
      bg: "#1E5373",
    },
    {
      tab: "Elementary (A2)",
      title: "Elementary (A2)",
      abilities:
        "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
      goals: [
        "Expand your vocabulary and improve your pronunciation.",
        "Understand short phrases and simple sentences used in daily life.",
      ],
      bg: "#1E5373",
    },
    {
      tab: "Intermediate (B1-B2)",
      title: "Intermediate (B1-B2)",
      abilities:
        "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
      goals: [
        "Learn to express opinions, agree/disagree, and describe events clearly.",
        "Start reading and listening to English media for comprehension.",
      ],
      bg: "#1E5373",
    },
    {
      tab: "Advanced (C1)",
      title: "Advanced (C1)",
      abilities:
        "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
      goals: [
        "Improve advanced grammar and idiomatic expressions.",
        "Work on writing essays and formal correspondence.",
      ],
      bg: "#1E5373",
    },
    {
      tab: "Fluent (C1+)",
      title: "Fluent (C1+)",
      abilities:
        "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
      goals: [
        "Refine your accent and vocabulary range.",
        "Engage in debates and discussions on complex topics.",
      ],
      bg: "#1E5373",
    },
    {
      tab: "Proficient (C2)",
      title: "Proficient (C2)",
      abilities:
        "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
      goals: [
        "Perfect your understanding of cultural nuances in communication.",
        "Write and speak with precision and natural flow.",
      ],
      bg: "#1E5373",
    },
    {
      tab: "Expert (Near Native) (C2+)",
      title: "Expert (Near Native) (C2+)",
      abilities:
        "You have a level of English comparable to that of a well-educated native speaker.",
      goals: [
        "Master stylistic variety and cultural references in all contexts.",
        "Communicate effortlessly with full natural fluency.",
      ],
      bg: "#1E5373",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ---------- Table Section ---------- */}
      <section className="bg-white py-20 relative">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
            Anglo-Link's ranks in the framework of international tests
          </h2>

          {/* Table */}
          <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md mb-20">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#E8F3FC] border-b border-blue-300">
                  <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
                    Anglo-Link level
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
                    CEFR
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
                    IELTS
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
                    Cambridge
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-800">
                    TOEFL iBT
                  </th>
                </tr>
              </thead>
              <tbody>
                {levels.map((row, i) => (
                  <tr
                    key={i}
                    className={`text-gray-700 text-sm ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-3 border border-gray-200">{row.title}</td>
                    <td className="p-3 border border-gray-200">
                      {row.tab.match(/\(([^)]+)\)/)?.[1] || ""}
                    </td>
                    <td className="p-3 border border-gray-200">–</td>
                    <td className="p-3 border border-gray-200">–</td>
                    <td className="p-3 border border-gray-200">–</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-6 text-sm text-gray-600">
            <p className="mt-2">
              * The Common European Framework of Reference for Languages{" "}
              <a
                href="#"
                className="text-[#207FC5] hover:underline font-medium"
              >
                (CEFR)
              </a>
            </p>
            <p className="mt-1">
              ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
              First, CAE: Advanced, CPE: Proficiency
            </p>
          </div>
        </div>

        {/* ---------- Tabs (Single Horizontal Line) ---------- */}
        <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 z-20 whitespace-nowrap overflow-x-auto scrollbar-hide">
          <div className="flex justify-center">
            {levels.map((level, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-xs md:text-sm px-3 py-2 font-medium border-t-2 border-x border-b-0 transition ${
                  activeTab === i
                    ? "bg-[#207FC5] text-white border-[#207FC5]"
                    : "bg-[#E8F3FC] text-[#333] border-[#C8E0F5] hover:bg-[#207FC5]/90 hover:text-white"
                }`}
              >
                {level.tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Dynamic Blue Section ---------- */}
      <section
        className="text-white py-16 md:py-20 relative z-10"
        style={{ backgroundColor: levels[activeTab].bg }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {levels[activeTab].title}
          </h2>

          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-3 rounded-md">
              <GraduationCap size={36} className="text-white" />
            </div>
          </div>

          <div className="text-sm md:text-base leading-relaxed space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Your abilities</h3>
              <p className="text-gray-100 max-w-2xl mx-auto">
                {levels[activeTab].abilities}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Your goals</h3>
              <p className="text-gray-100 max-w-2xl mx-auto">
                Your goals working through this level are to:
              </p>
              <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
                {levels[activeTab].goals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
