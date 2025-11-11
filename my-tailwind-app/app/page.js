  "use client";

  import { useState, useEffect } from "react";
  import { Menu, X, Globe, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
  import {
    FileText,
    Play,
    Edit,
    Mic,
    BarChart3,
    Video,
    WifiOff,
    LifeBuoy,
  } from "lucide-react";

  // Framer Motion simulation with CSS
  const MotionDiv = ({ children, className, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  const testimonials = [
    {
      text: "This is one of the best tools you can find on the Internet to finally learn English. The structured approach and supportive community made all the difference.",
      name: "Wellington",
      location: "Brazil",
      rating: 5,
    },
    {
      text: "The grammar is explained in a very clear and understandable way. The media and video lessons used are useful and perfect for my learning style.",
      name: "Alfred",
      location: "Albania",
      rating: 5,
    },
    {
      text: "Minoo is an excellent teacher who combines a friendly and intuitive style of teaching with a structured approach. Highly recommended!",
      name: "Samantha",
      location: "Iran",
      rating: 5,
    },
  ];

  export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeTab, setActiveTab] = useState("silver");
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const membershipContent = {
      bronze: {
        title: "Bronze",
        description:
          "If you want to study only online and without teacher support.",
        color: "#A27B5C",
        features: [
          { icon: <FileText size={40} />, active: true },
          { icon: <Play size={40} />, active: true },
          { icon: <Edit size={40} />, active: false },
          { icon: <Mic size={40} />, active: false },
          { icon: <BarChart3 size={40} />, active: false },
          { icon: <Video size={40} />, active: false },
          { icon: <WifiOff size={40} />, active: false },
          { icon: <LifeBuoy size={40} />, active: false },
        ],
      },
      silver: {
        title: "Silver",
        description:
          "If you want to study both online and offline with some teacher support.",
        color: "#8B7355",
        features: [
          { icon: <FileText size={40} />, active: true },
          { icon: <Play size={40} />, active: true },
          { icon: <Edit size={40} />, active: true },
          { icon: <Mic size={40} />, active: true },
          { icon: <BarChart3 size={40} />, active: true },
          { icon: <Video size={40} />, active: true },
          { icon: <WifiOff size={40} />, active: false },
          { icon: <LifeBuoy size={40} />, active: false },
        ],
      },
      gold: {
        title: "Gold",
        description:
          "If you want to study both online and offline with maximum teacher support and tools.",
        color: "#6B4F4F",
        features: [
          { icon: <FileText size={40} />, active: true },
          { icon: <Play size={40} />, active: true },
          { icon: <Edit size={40} />, active: true },
          { icon: <Mic size={40} />, active: true },
          { icon: <BarChart3 size={40} />, active: true },
          { icon: <Video size={40} />, active: true },
          { icon: <WifiOff size={40} />, active: true },
          { icon: <LifeBuoy size={40} />, active: true },
        ],
      },
    };

    const content = membershipContent[activeTab];

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 100) {
          setIsNavbarVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);

    return (
      <div className="min-h-screen bg-[#F5F1ED]" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Floating Navbar */}
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#A27B5C] via-[#8B7355] to-[#6B4F4F] text-white overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }}></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32 lg:pt-40 lg:pb-40">
            <MotionDiv className="text-center lg:text-left" delay={200}>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                Your roadmap to fluency
                <br />
                <span className="text-[#DCC7AA]">and confidence</span> in English
              </h1>
            </MotionDiv>
            
            <MotionDiv delay={400}>
              <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto lg:mx-0">
                Reach an advanced (C1) level of English with our unique
                teacher-supported self-study programme.
              </p>
            </MotionDiv>
            
            <MotionDiv delay={600}>
              <a
                href="/join"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#6B4F4F] text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Join Programme
                <ArrowRight size={24} />
              </a>
            </MotionDiv>
          </div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#F5F1ED"
                d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Why VirHom Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-[#F5F1ED] to-[#EDE5DD]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <MotionDiv delay={100}>
              <h2 className="text-5xl font-bold text-[#3E2723] mb-4">
                Why VirHom?
              </h2>
            </MotionDiv>
            
            <MotionDiv delay={200}>
              <p className="text-xl text-[#6B4F4F] mb-16 max-w-3xl mx-auto">
                Our goal is to offer you one of the best self-study English courses
                available online.
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Easy-to-use",
                  desc: "Follow a structured but flexible study plan that takes you step by step towards fluency and confidence in English.",
                  delay: 300
                },
                {
                  title: "Complete",
                  desc: "Improve your reading, writing, listening, and speaking skills with a complete set of grammar, pronunciation, and conversation lessons.",
                  delay: 400
                },
                {
                  title: "Teacher-supported",
                  desc: "Minoo will support you every step of the way! You can send her your questions, attend her live workshops, and book one-to-one lessons.",
                  delay: 500
                }
              ].map((item, idx) => (
                <MotionDiv key={idx} delay={item.delay}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#CBB59D] to-[#A27B5C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl font-bold text-[#6B4F4F]">
                        {idx + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3E2723] mb-4 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-[#6B4F4F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships Section */}
        <section id="memberships" className="bg-gradient-to-b from-[#EDE5DD] to-[#F5F1ED] py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <MotionDiv delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#3E2723]">
                Your options
              </h2>
            </MotionDiv>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-16">
              <div className="flex-1 max-w-3xl">
                <MotionDiv delay={200}>
                  <p className="text-xl lg:text-2xl mb-16 text-[#6B4F4F] max-w-3xl mx-auto">
                    Choose your membership level and get started
                  </p>
                </MotionDiv>

                <MotionDiv delay={300}>
                  <div className="flex rounded-t-2xl overflow-hidden shadow-lg">
                    {["bronze", "silver", "gold"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-6 text-xl font-bold transition-all duration-300 ${
                          activeTab === tab
                            ? `text-white shadow-inner`
                            : "bg-[#CBB59D]/30 text-[#6B4F4F] hover:bg-[#CBB59D]/50"
                        }`}
                        style={{
                          backgroundColor: activeTab === tab ? membershipContent[tab].color : undefined
                        }}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </MotionDiv>

                <MotionDiv delay={400}>
                  <div 
                    className="bg-white/80 backdrop-blur-sm rounded-b-2xl shadow-2xl p-10 relative overflow-hidden transition-all duration-500"
                    key={activeTab}
                  >
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                      <div className="text-[150px] font-bold text-[#6B4F4F] uppercase whitespace-nowrap">
                        {content.title}
                      </div>
                    </div>
                    
                    <p className="text-xl text-[#6B4F4F] mb-10 relative z-10 max-w-xl mx-auto">
                      {content.description}
                    </p>
                    
                    <div className="flex gap-6 relative z-10 flex-wrap justify-center">
                      {content.features.map((feature, index) => (
                        <div
                          key={index}
                          className={`transition-all duration-300 ${
                            feature.active
                              ? "text-[#6B4F4F] scale-100"
                              : "text-[#CBB59D] opacity-40 scale-90"
                          }`}
                        >
                          {feature.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionDiv>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 lg:mt-24">
                <div className="text-5xl font-bold text-[#A27B5C]">OR</div>
              </div>

              <MotionDiv delay={500}>
                <div>
                  <button className="px-12 py-5 bg-gradient-to-r from-[#A27B5C] to-[#6B4F4F] text-white text-2xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Explore for free
                  </button>
                </div>
              </MotionDiv>
            </div>

            <MotionDiv delay={600}>
              <a
                href="/memberships"
                className="inline-flex items-center gap-2 text-xl text-[#6B4F4F] font-semibold hover:text-[#A27B5C] transition-colors"
              >
                Learn more about memberships
                <ArrowRight size={20} />
              </a>
            </MotionDiv>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 text-white overflow-hidden bg-gradient-to-br from-[#6B4F4F] via-[#8B7355] to-[#A27B5C]">
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            <MotionDiv delay={100}>
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                What our students say
              </h2>
            </MotionDiv>

            <div 
              key={current}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500"
            >
              <div className="text-6xl text-[#DCC7AA] mb-4">"</div>
              
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {testimonials[current].text}
              </p>

              {/* Rating stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#FFD700] fill-[#FFD700]"
                    size={24}
                  />
                ))}
              </div>

              {/* Name and location */}
              <p className="text-lg font-medium text-[#DCC7AA]">
                {testimonials[current].name}, {testimonials[current].location}
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-white w-8" : "bg-white/40"
                    }`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </section>
      
      </div>
    );
  }
// "use client";

// import { useState, useEffect } from "react";
// import { Menu, X, Globe, MessageCircle, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// import { Star, Quote, ChevronLeft } from "lucide-react";
// import {
//   FileText,
//   Play,
//   Edit,
//   Mic,
//   BarChart3,
//   Video,
//   WifiOff,
//   LifeBuoy,
//   ChevronRight,
// } from "lucide-react";

// const testimonials = [
//   {
//     name: "Wellington, Brazil",
//     text: "This is one of the best tools you can find on the Internet, to finally learn English.",
//   },
//   {
//     name: "Alfred, Albania",
//     text: "The grammar is explained in a very clear and understandable way. The media and video lessons used are useful and perfect.",
//   },
//   {
//     name: "Samantha, Iran",
//     text: "Minoo is an excellent teacher who combines a friendly and intuitive style of teaching with a structured approach.",
//   },
//   {
//     name: "Sajjad, India",
//     text: "The process of evaluating ourselves through test & understanding our improvement areas gives us a clear picture for learning.",
//   },
//   {
//     name: "Duyen, Vietnam",
//     text: "This is a smart and friendly platform, huge materials and well organized. With this website I can study English anytime, anywhere.",
//   },
//   {
//     name: "Nicu, Romania",
//     text: "I like the new look of the site. It keeps you motivated by earning trophies. It is also very well organized in a logical manner.",
//   },
// ];

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const [activeTab, setActiveTab] = useState("silver");

//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };
//   const testimonials = [
//     {
//       text: "I started studying English on this amazing website yesterday, and I am in love...",
//       name: "Paula",
//       location: "Brazil",
//       rating: 5,
//     },
//     {
//       text: "The lessons are easy to follow and super helpful. Highly recommend!",
//       name: "Ahmed",
//       location: "Egypt",
//       rating: 5,
//     },
//     {
//       text: "I improved my English confidence so fast! Amazing experience.",
//       name: "Sophie",
//       location: "France",
//       rating: 5,
//     },
//   ];

//   const membershipContent = {
//     bronze: {
//       title: "Bronze",
//       description:
//         "If you want to study only online and without teacher support.",
//       color: "#5B9BD5",
//       features: [
//         { icon: <FileText size={40} />, active: true },
//         { icon: <Play size={40} />, active: true },
//         { icon: <Edit size={40} />, active: false },
//         { icon: <Mic size={40} />, active: false },
//         { icon: <BarChart3 size={40} />, active: false },
//         { icon: <Video size={40} />, active: false },
//         { icon: <WifiOff size={40} />, active: false },
//         { icon: <LifeBuoy size={40} />, active: false },
//       ],
//     },
//     silver: {
//       title: "Silver",
//       description:
//         "If you want to study both online and offline with some teacher support.",
//       color: "#C0C0C0",
//       features: [
//         { icon: <FileText size={40} />, active: true },
//         { icon: <Play size={40} />, active: true },
//         { icon: <Edit size={40} />, active: true },
//         { icon: <Mic size={40} />, active: true },
//         { icon: <BarChart3 size={40} />, active: true },
//         { icon: <Video size={40} />, active: true },
//         { icon: <WifiOff size={40} />, active: false },
//         { icon: <LifeBuoy size={40} />, active: false },
//       ],
//     },
//     gold: {
//       title: "Gold",
//       description:
//         "If you want to study both online and offline with maximum teacher support and tools.",
//       color: "#5B9BD5",
//       features: [
//         { icon: <FileText size={40} />, active: true },
//         { icon: <Play size={40} />, active: true },
//         { icon: <Edit size={40} />, active: true },
//         { icon: <Mic size={40} />, active: true },
//         { icon: <BarChart3 size={40} />, active: true },
//         { icon: <Video size={40} />, active: true },
//         { icon: <WifiOff size={40} />, active: true },
//         { icon: <LifeBuoy size={40} />, active: true },
//       ],
//     },
//   };

//   const content = membershipContent[activeTab];
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < 100) {
//         // Always show navbar at the top of the page
//         setIsNavbarVisible(true);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         // Scrolling down - hide navbar
//         setIsNavbarVisible(false);
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up - show navbar
//         setIsNavbarVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       {/* <header className="bg-[#207FC5] text-white relative">
//         {/* Mobile Header */}
//       <div className="flex justify-between items-center p-6 lg:hidden">
//         <h className="text-3xl font-bold text-[#7ED957]">VirHom</h>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-white"
//         >
//           {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>
//       </div>
//       {isMenuOpen && (
//         <div className="lg:hidden bg-[#207FC5] p-6">
//           <nav className="flex flex-col gap-4">
//             <a
//               href="#features"
//               className="py-2 text-lg"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Features
//             </a>
//             <a
//               href="#memberships"
//               className="py-2 text-lg"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Memberships
//             </a>
//             <a
//               href="/level-guide"
//               className="py-2 text-lg"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Level Guide
//             </a>
//             <div className="pt-4 space-y-3">
//               <button className="w-full px-4 py-2 border-2 border-white rounded-lg flex items-center justify-center gap-2">
//                 <Globe size={16} />
//                 <span>English</span>
//               </button>
//               <a
//                 href="/trial"
//                 className="block w-full text-center px-6 py-3 bg-white text-[#207FC5] font-bold rounded-lg"
//               >
//                 Free trial
//               </a>
//               <a
//                 href="/login"
//                 className="block w-full text-center px-6 py-3 border-2 border-white font-bold rounded-lg"
//               >
//                 Login
//               </a>
//             </div>
//           </nav>
//         </div>
//       )}
//       {/* </header> */}

//       {/* Hero Section with Wave SVG */}
//       <div className="relative bg-[#207FC5] text-white overflow-hidden">
//         {/* Hero Section */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center lg:text-left lg:pt-32">
//           <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
//             Your roadmap to fluency
//             <br />
//             and confidence in English
//           </h1>
//           <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto lg:mx-0">
//             Reach an advanced (C1) level of English with our unique
//             teacher-supported self-study programme.
//           </p>
//           <a
//             href="/join"
//             className="inline-block px-10 py-5 bg-[#7ED957] text-white text-xl font-bold rounded-lg hover:bg-[#6EC847] transition shadow-xl transform hover:scale-105"
//           >
//             Join programme
//           </a>
//         </div>

//         {/* Wave SVG */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             viewBox="0 0 1440 320"
//             className="w-full"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#1e40af"
//               fillOpacity="0.4"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Rest of your components remain exactly the same */}
//       {/* Why VirHom Section */}
//       <section className="py-24 bg-[#293A4C]">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-5xl font-bold text-white mb-4">
//             Why VirHom?
//           </h2>
//           <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
//             Our goal is to offer you one of the best self-study English courses
//             available online.
//           </p>

//           <div className="grid md:grid-cols-3 gap-12">
//             <div className="flex flex-col items-center">
//               <Image
//                 src="/why_us_easy_to_use.svg"
//                 alt="Easy-to-use"
//                 width={280}
//                 height={280}
//                 className="mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-2xl"
//               />
//               <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
//                 Easy-to-use
//               </h3>
//               <p className="text-gray-300 text-center max-w-xs leading-relaxed">
//                 Follow a structured but flexible study plan that takes you step
//                 by step towards fluency and confidence in English.
//               </p>
//             </div>

//             <div className="flex flex-col items-center">
//               <Image
//                 src="/why_us_complete.svg"
//                 alt="Complete"
//                 width={280}
//                 height={280}
//                 className="mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-2xl"
//               />
//               <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
//                 Complete
//               </h3>
//               <p className="text-gray-300 text-center max-w-xs leading-relaxed">
//                 Improve your reading, writing, listening, and speaking skills
//                 with a complete set of grammar, pronunciation, and conversation
//                 lessons containing written, audio, and video content, exercises,
//                 and tests.
//               </p>
//             </div>

//             <div className="flex flex-col items-center">
//               <Image
//                 src="why_us_personalised.svg"
//                 alt="Teacher-supported"
//                 width={280}
//                 height={280}
//                 className="mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-2xl"
//               />
//               <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
//                 Teacher-supported
//               </h3>
//               <p className="text-gray-300 text-center max-w-xs leading-relaxed">
//                 Minoo will support you every step of the way! You can send her
//                 your questions, attend her live workshops, and book one-to-one
//                 lessons with her.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Memberships Section */}
//       {/* MEMBERSHIPS SECTION - 100% LIKE YOUR IMAGE */}
//       <section id="memberships" className="bg-gray-50 py-24">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           {/* Title */}
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
//             Your options
//           </h2>

//           <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-16 grid-cols-3">
//             <div className="flex-1 max-w-3xl">
//               <p className="text-xl lg:text-2xl mb-16 text-gray-700 max-w-3xl mx-auto">
//                 Choose your membership level and get started
//               </p>

//               <div className="flex rounded-t-2xl overflow-hidden shadow-lg">
//                 <button
//                   onClick={() => setActiveTab("bronze")}
//                   className={`flex-1 py-6 text-xl font-bold transition-all ${
//                     activeTab === "bronze"
//                       ? "bg-[#5B9BD5] text-white"
//                       : "bg-gray-300 text-gray-600 hover:bg-gray-400"
//                   }`}
//                 >
//                   Bronze
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("silver")}
//                   className={`flex-1 py-6 text-xl font-bold transition-all ${
//                     activeTab === "silver"
//                       ? "bg-[#C0C0C0] text-white"
//                       : "bg-gray-300 text-gray-600 hover:bg-gray-400"
//                   }`}
//                 >
//                   Silver
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("gold")}
//                   className={`flex-1 py-6 text-xl font-bold transition-all ${
//                     activeTab === "gold"
//                       ? "bg-[#5B9BD5] text-white"
//                       : "bg-gray-300 text-gray-600 hover:bg-gray-400"
//                   }`}
//                 >
//                   Gold
//                 </button>
//               </div>
//               <div className="bg-gray-200 rounded-b-2xl shadow-lg p-10 relative overflow-hidden">
//                 {/* Watermark */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
//                   <div className="text-[200px] font-bold text-gray-400 uppercase whitespace-nowrap">
//                     {content.title}
//                   </div>
//                   <div className="text-center text-6xl font-semibold text-gray-400 -mt-8">
//                     Membership
//                   </div>
//                 </div>
//                 <p className="text-xl text-gray-700 mb-10 relative z-10 max-w-xl">
//                   {content.description}
//                 </p>
//                 <div className="flex gap-6 relative z-10 flex-wrap">
//                   {content.features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className={`${
//                         feature.active
//                           ? "text-gray-600"
//                           : "text-gray-400 opacity-40"
//                       }`}
//                     >
//                       {feature.icon}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Tabs */}
//             </div>
//             <div className="flex flex-col items-center justify-center gap-6 lg:mt-24">
//               <div className="text-5xl font-bold text-gray-400">OR</div>
//             </div>
//             <div>
//               <button className="px-12 py-5 bg-[#7ED957] text-white text-2xl font-bold rounded-xl hover:bg-[#6EC847] transition shadow-lg mt-15">
//                 Explore for free
//               </button>
//             </div>
//           </div>

//           {/* Bottom Link */}
//           <Link
//             href="/memberships"
//             className="inline-block text-xl text-[#207FC5] font-semibold hover:underline transition"
//           >
//             Learn more about memberships →
//           </Link>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section
//         className="relative flex flex-col items-center justify-center text-center py-24 px-6 text-white overflow-hidden"
//         style={{
//           backgroundColor: "#36AADD",
//           backgroundImage: "url('/feedback.png')",
//           backgroundRepeat: "repeat",
//           backgroundSize: "auto", // can use 'contain' or '100px' to control tile size
//           backgroundPosition: "center",
//         }}
//       >
//         {/* ✅ Overlay tint */}
//         <div className="absolute inset-0 bg-[#2AA0D7]/10"></div>

//         {/* ✅ Foreground Content */}
//         <div className="relative z-10 max-w-4xl">
//           <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//             What our students say
//           </h2>

//           <p className="text-lg md:text-xl mb-10 leading-relaxed">
//             {testimonials[current].text}
//           </p>

//           {/* ⭐ Rating stars */}
//           <div className="flex justify-center gap-1 mb-6">
//             {[...Array(testimonials[current].rating)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="text-yellow-400 fill-yellow-400"
//                 size={28}
//               />
//             ))}
//           </div>

//           {/* 👤 Name and location */}
//           <p className="text-lg font-medium">
//             {testimonials[current].name}, {testimonials[current].location}
//           </p>

//           {/* ⬅️➡️ Arrows + Dots */}
//           <div className="mt-10 flex items-center justify-center gap-6">
//             {/* Left Arrow */}
//             <button
//               onClick={prevSlide}
//               className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//             >
//               <ChevronLeft size={28} />
//             </button>

//             {/* Dots */}
//             <div className="flex justify-center gap-2">
//               {testimonials.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`w-2.5 h-2.5 rounded-full transition-all ${
//                     i === current ? "bg-black scale-110" : "bg-blackrt/40"
//                   }`}
//                 ></div>
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button
//               onClick={nextSlide}
//               className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//             >
//               <ChevronRight size={28} />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }