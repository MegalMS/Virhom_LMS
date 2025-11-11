"use client"
import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

// Simple animation component
const FadeInDiv = ({ children, className, delay = 0 }) => {
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

function Join() {
  return (
    <div className="relative bg-gradient-to-br from-[#6B4F4F] via-[#8B7355] to-[#A27B5C] py-24 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#DCC7AA]/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#CBB59D]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>

      {/* Top Wave Decoration
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#F5F1ED"
            d="M0,48L48,42.7C96,37,192,27,288,32C384,37,480,59,576,64C672,69,768,59,864,53.3C960,48,1056,48,1152,53.3C1248,59,1344,69,1392,74.7L1440,80L1440,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        {/* Icon Badge */}
        <FadeInDiv delay={100} className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border-2 border-white/30 shadow-xl animate-bounce">
            <Sparkles className="text-[#DCC7AA] w-8 h-8" />
          </div>
        </FadeInDiv>

        {/* Heading */}
        <FadeInDiv delay={200}>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            Ready for a <span className="text-[#DCC7AA]">fun and successful</span>
            <br />
            journey to English fluency?
          </h2>
        </FadeInDiv>

        {/* Subheading */}
        <FadeInDiv delay={300}>
          <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
            Join our unique teacher-supported self-study programme today!
          </p>
        </FadeInDiv>

        {/* Feature Pills */}
        <FadeInDiv delay={400}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['Structured Learning', 'Expert Support', 'Flexible Schedule'].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 text-white font-medium hover:bg-white/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <CheckCircle size={18} className="text-[#DCC7AA]" />
                {feature}
              </div>
            ))}
          </div>
        </FadeInDiv>

        {/* CTA Button */}
        <FadeInDiv delay={500}>
          <a
            href="/join"
            className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-[#6B4F4F] text-2xl font-bold rounded-2xl hover:bg-[#DCC7AA] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            
            <span className="relative z-10">Join Programme</span>
            <ArrowRight 
              size={28} 
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" 
            />
          </a>
        </FadeInDiv>

        {/* Trust Indicators */}
        <FadeInDiv delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CBB59D] to-[#A27B5C] border-2 border-white flex items-center justify-center text-white font-bold text-xs"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="font-medium">Join 10,000+ learners</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#FFD700] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">4.9/5 rating</span>
            </div>
          </div>
        </FadeInDiv>

        {/* Small Text */}
        <FadeInDiv delay={700}>
          <p className="mt-8 text-white/70 text-sm">
            No credit card required • Start your free trial today
          </p>
        </FadeInDiv>
      </div>

      {/* Bottom Wave Decoration
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#F5F1ED"
            d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,80L0,80Z"
          ></path>
        </svg>
      </div> */}
    </div>
  )
}

export default Join