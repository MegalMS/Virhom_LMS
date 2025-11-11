import Image from "next/image";

export default function StudyToolsSection({ title, description, image }) {
  return (
    <section className="relative w-full py-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5E6D3] via-[#F9F3E8] to-[#F5E6D3]">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23926F59%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      {/* Brown gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#926F59]/5 via-transparent to-[#A27B5C]/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6B4423] drop-shadow-sm mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-lg lg:text-xl text-[#705350] max-w-4xl mx-auto leading-relaxed font-medium">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}




// import Image from "next/image";

// export default function StudyToolsSection({ title, description, image }) {
//   return (
//     <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       {/* <Image
//         src={image || "/default-bg.jpg"} // fallback image
//         alt={title}
//         fill
//         priority
//         className="object-cover brightness-90"
//       /> */}

//       {/* Overlay with brown tint */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#926F59]/80 via-[#A27B5C]/40 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#926F59] drop-shadow-md mb-4">
//           {title}
//         </h1>
//         {description && (
//           <p className="text-lg font-bold md:text-xl text-[#705350] max-w-3xl mx-auto">
//             {description}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
