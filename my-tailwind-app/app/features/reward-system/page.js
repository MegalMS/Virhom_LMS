"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Reusable SVG check icon
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// Reusable Heading with green underline
function Heading({ children }) {
  return (
    <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-8px] after:left-0">
      {children}
    </h6>
  );
}

// Reusable Check Item
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

export default function StudyMaterialPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const toolData = studyToolsData[slug];

  if (!toolData) {
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
  }

  return (
    <main className="bg-amber-50 mt-12">
      {/* Study Tool Header Section */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* Trophies & Ranks Section */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
          <Heading>Trophies & Ranks</Heading>

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
            Every time you pass a test and complete a lesson successfully, you are
            awarded trophies. The higher your test score, the more trophies you
            collect, and the faster you can move up in our ranks. To keep you
            focused on your target, we have defined six ranks that approximately
            match the CEFR levels (A1 to C2).
          </p>

          <Link
            href="#"
            className="text-sky-500 font-medium hover:underline inline-block mb-10"
          >
            Learn more about our ranks
          </Link>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Free Credits
          </h3>

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-6">
            There are three membership levels: Bronze, Silver, and Gold. Each level
            provides access to certain resources. To facilitate your access to the
            resources that are not included in your chosen membership level, we have
            introduced a credit system. You can use your credits for downloads and
            one-to-one lessons, or you can use them to unlock some of the online
            resources.
          </p>

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] mb-4">
            There are several ways you can earn free credits:
          </p>

          <ul className="list-none pl-0 space-y-2 mb-8">
            <CheckItem>
              You receive <strong>25 free credits</strong> when you first join.
            </CheckItem>
            <CheckItem>
              Silver members receive <strong>60 free credits</strong> per month of
              membership (2 credits a day).
            </CheckItem>
            <CheckItem>
              Gold members receive <strong>150 free credits</strong> per month of
              membership (5 credits a day).
            </CheckItem>
            <CheckItem>
              Every time you move up a rank, you receive a certain number of free
              credits.
            </CheckItem>
            <CheckItem>
              You can earn an extra free credit per day by completing a{" "}
              <strong>Daily Challenge</strong>.
            </CheckItem>
          </ul>

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