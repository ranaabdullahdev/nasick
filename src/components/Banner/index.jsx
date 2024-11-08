"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../container";

const VideoPlayer = ({ bgVideo = "" }) => {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden" ref={videoRef}>
      {isVideoVisible && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          muted
          autoPlay
          loop
          id="myVideo"
          playsInline
          preload="metadata"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
const services = [
  {
    link: "/services/artificial-intelligence",
    title: "AI/ML Development",
  },
  {
    link: "/services/data-engineering",
    title: "Data Engineering",
  },
  {
    link: "/services/custom-solutions",
    title: "Custom Development",
  },
  {
    link: "/services/workflow-automation",
    title: "Workflow Automation",
  },
];
const Banner = ({ bgVideo = "" }) => {
  return (
    <div className=" relative h-[100vh]">
      <VideoPlayer bgVideo={bgVideo} />
      <Container>
        <div className=" absolute top-1/2 -translate-y-1/2 transform  text-center text-white ">
          <div className="w-full pl-4 pt-16 text-white">
            <h1 className="text-left text-lg font-light leading-tight md:text-2xl lg:text-3xl">
              Transform Your Business with <br />
              <span className="text-gradient">AI-Powered</span> Solutions
            </h1>
            <p className="mt-4 text-left text-sm font-light md:text-md lg:text-lg">
              We engineer custom AI solutions to optimize your business workflow
            </p>
            <div className="mt-8 w-full items-center justify-items-start">
              <h2 className="mb-4 text-left text-xl font-medium text-white">
                Our Services
              </h2>
              <div className="flex flex-wrap gap-4">
                {services.map(({ link, title }) => {
                  return (
                    <Link
                      key={link}
                      href={link}
                      className="relative mb-2 rounded-lg border bg-[#050913]/30 px-4 py-2 text-white transition duration-200 hover:bg-white hover:text-black md:text-[1rem]"
                      style={{
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                        borderColor: "rgba(5, 9, 19, 0.4)",
                        borderWidth: "1px",
                        fontSize: "16px",
                      }}
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      
      </Container>
    </div>
  );
};
export default Banner;
