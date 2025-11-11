// app/features/support-minoo/page.js   (or any folder you prefer)
"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* ────────────────────── Re‑usable helpers ────────────────────── */
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

function Heading({ children }) {
  return (
    <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-8px] after:left-0">
      {children}
    </h6>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2">
      <img src={CHECK_ICON} alt="check" className="w-5 h-5 mt-1 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

/* ────────────────────── Page component ────────────────────── */
export default function SupportFromMinooPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const toolData = studyToolsData[slug];

  if (!toolData) {
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
  }

  return (
    <main className="bg-amber-50 mt-12">
      {/* ── Dynamic header (same as every other page) ── */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* ── Support from Minoo content ── */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">

          {/* Main heading */}
          <div className="mb-16">
            <Heading>Support from Minoo</Heading>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-4">
              Send Minoo any questions you have about the programme or about the English language. You can do this:
            </p>

            <ul className="list-none pl-0 space-y-2 mb-6">
              <CheckItem>By posting your question in the Students' Forum</CheckItem>
              <CheckItem>By messaging Minoo directly from your course dashboard</CheckItem>
              <CheckItem>By opening a 'Teacher Support' ticket</CheckItem>
            </ul>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Join Minoo’s weekly LIVE workshops and Q/A sessions to actively revise and practise the course materials
              with her and with your peers.
            </p>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-10">
              Book one-to-one sessions with Minoo for your specific needs, such as improving your pronunciation,
              confidence training, presentation or job interview practice, or exam preparation (IELTS, TOEFL).
            </p>

            {/* Technical / Sales Support */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Technical / Sales Support
            </h3>

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-8">
              If you have any questions about the features, or if you need help using the platform, you are welcome
              to open a ticket for the technical / sales team.
            </p>
          </div>

          {/* Centered link */}
          <div className="flex justify-center">
            <Link
              href="#"
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