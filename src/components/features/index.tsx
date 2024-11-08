"use client";
import React, { useState } from "react";
import { GoDatabase } from "react-icons/go";
import { PiPaletteLight } from "react-icons/pi";
import { LiaCogSolid } from "react-icons/lia";
import { IoShieldOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { CiMobile1 } from "react-icons/ci";
import { IoIosCloudOutline } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { BiBrain } from "react-icons/bi";
import Link from "next/link";

import { Container } from "../container";

const services = [
  {
    id: 1,
    title: "Artificial Intelligence",
    icon: <BiBrain />,
    description:
      "Implement AI solutions to automate tasks, gain insights, and drive innovation.",
    link: "/industries/artificial-intelligence",
  },
  {
    id: 2,
    title: "Workflow Automation",
    icon: <LiaCogSolid />,
    description:
      "Streamline your business processes with our cutting-edge workflow automation solutions.",
    link: "/services/workflow-automation",
  },
  {
    id: 3,
    title: "Custom Solutions",
    icon: <VscTools />,
    description:
      "Develop tailor-made software solutions to address your unique business challenges.",
    link: "/services/custom-solutions",
  },
  {
    id: 4,
    title: "Data Engineering",
    icon: <GoDatabase />,
    description:
      "Build robust data pipelines and infrastructure to support your analytics and AI initiatives.",
    link: "/services/data-engineering",
  },
  {
    id: 5,
    title: "Cloud Solutions",
    icon: <IoIosCloudOutline />,
    description:
      "Leverage cloud technology to scale your business and improve efficiency.",
    link: "/services/cloud-solutions",
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <PiPaletteLight />,
    description:
      "Create intuitive and aesthetically pleasing user interfaces and experiences.",
    link: "/services/ui-ux-design",
  },
  {
    id: 7,
    title: "Cybersecurity",
    icon: <IoShieldOutline />,
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions.",
    link: "/services/cyber-security",
  },
  {
    id: 8,
    title: "Mobile App Development",
    icon: <CiMobile1 />,
    description:
      "Develop high-performance mobile applications for both iOS and Android platforms.",
    link: "/services/mobile-app-development",
  },
  {
    id: 9,
    title: "IT Consulting",
    icon: <GoLightBulb />,
    description:
      "Get expert advice and strategic IT consulting to optimize your technology stack.",
    link: "/services/it-consulting",
  },
];

const Features= () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="relative">
      <div className="z-10 bg-[#050913] px-8 py-28 text-white">
        <Container>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:space-x-24">
            {/* Left Section */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:mb-0 lg:w-3/5 lg:grid-cols-3 ">
              {services.map((service) => (
                <Link
                  href={service.link}
                  key={service.id}
                  className="group relative h-44 bg-transparent px-4 py-8 text-center lg:h-48"
                >
                  {/* Top border */}
                  <div className="absolute inset-x-0 top-0 z-10 transform transition-transform before:absolute before:inset-x-0 before:top-0 before:h-full before:border-t before:border-[#8dbcff]/35 before:opacity-70 before:transition-all before:content-[''] group-hover:scale-x-150 before:group-hover:border-[#8dbcff]/100 group-hover:before:shadow-[0_0_10px_5px_rgba(141,188,255,0.35)]"></div>

                  {/* Bottom border */}
                  <div className="absolute inset-x-0 bottom-0 z-10 transform transition-transform before:absolute before:inset-x-0 before:bottom-0 before:h-full before:border-b before:border-[#8dbcff]/35 before:opacity-70 before:transition-all before:content-[''] group-hover:scale-x-150 before:group-hover:border-[#8dbcff]/100 group-hover:before:shadow-[0_0_10px_5px_rgba(141,188,255,0.35)]"></div>

                  {/* Left border */}
                  <div className="absolute bottom-0 left-0 top-0 z-10 transform transition-transform before:absolute before:bottom-0 before:left-0 before:top-0 before:border-l before:border-[#8dbcff]/35 before:opacity-70 before:transition-all before:content-[''] group-hover:scale-y-150 before:group-hover:border-[#8dbcff]/100 group-hover:before:shadow-[0_0_10px_5px_rgba(141,188,255,0.35)]"></div>

                  {/* Right border */}
                  <div className="absolute bottom-0 right-0 top-0 z-10 transform transition-transform before:absolute before:bottom-0 before:right-0 before:top-0 before:border-r before:border-[#8dbcff]/35 before:opacity-70 before:transition-all before:content-[''] group-hover:scale-y-150 before:group-hover:border-[#8dbcff]/100 group-hover:before:shadow-[0_0_10px_5px_rgba(141,188,255,0.35)]"></div>

                  <div className="z-20 flex flex-col items-center justify-center">
                    <div className="text-icon-group-color mb-4 text-2xl text-[#fff] transition-all duration-300 group-hover:scale-105 group-hover:text-[#8dbcff]/100">
                      {service.icon}
                    </div>
                    <h5 className="text-sm font-bold text-[#fff] transition-all duration-300 group-hover:text-[#fff] ">
                      {service.title.split(" ").map((word, index) => (
                        <div key={index}>{word}</div>
                      ))}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="lg:w-2/5">
              <p className="mb-4 text-sm md:text-md">
                We develop the relationships that underpin the next phase in
                your organisation&apos;s growth. We do this by discerning the
                people and that platforms where interests converge.
              </p>
              <div className="item justify-space mb-4 flex w-fit border-b-[1px] border-[#0c245385]">
                <button
                  onClick={() => setSelectedOption(0)}
                  className={`relative  pb-2 pr-6 font-semibold text-sm md:text-md text-white ${
                    selectedOption === 0
                      ? "border-b-[1px] border-[#6794f1]"
                      : "border-[#6794f1] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-[#6794f1] before:transition-transform before:duration-300 hover:before:scale-x-100"
                  }`}
                >
                  Our Skill
                </button>
                <button
                  onClick={() => setSelectedOption(1)}
                  className={`relative pb-2 pr-6 font-semiboldtext-sm md:text-md text-white ${
                    selectedOption === 1
                      ? "border-b-[1px] border-[#6794f1]"
                      : "border-[#6794f1] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-[#6794f1] before:transition-transform before:duration-300 hover:before:scale-x-100"
                  }`}
                >
                  Why choose us?
                </button>
                <button
                  onClick={() => setSelectedOption(2)}
                  className={`relative pb-2 pr-6 font-semiboldtext-sm md:text-md text-white ${
                    selectedOption === 2
                      ? "border-b-[1px] border-[#6794f1]"
                      : "border-[#6794f1] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-[#6794f1] before:transition-transform before:duration-300 hover:before:scale-x-100"
                  }`}
                >
                  Our philosophy
                </button>
              </div>

              <div className="mt-4">
                <div
                  className={`transition-opacity duration-500 ${
                    selectedOption === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {selectedOption === 0 && (
                    <div>
                      <p className="mb-3 text-sm md:text-md">
                        Forging relationships between multi-national
                        corporations, governments, and global NGOs begins with
                        connections between people.
                      </p>
                      {/* Progress bars code */}
                    </div>
                  )}
                </div>

                <div
                  className={`transition-opacity duration-500 ${
                    selectedOption === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {selectedOption === 1 && (
                    <div>
                      <div className="mb-5">
                        What started as a single product lease finance company
                        back in 1985 with 5 staff members, 33 years down the
                        line, emerged as the largest multi-product multi-segment
                        Non-Banking Financial Institution in the country.
                      </div>
                      <div>
                        As one of the most respected financial brands the
                        industry, Finance Limited holds a strong and diversified
                        footing in Corporate.
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`transition-opacity duration-500 ${
                    selectedOption === 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {selectedOption === 2 && (
                    <div>
                      <div className="mb-5">
                        Today, We marks its presence over 20 cities, represented
                        by 40 branches and booths with over 1400 employees,
                        serving over 45,000 clients.
                      </div>
                      <div>
                        However, it would be constricting to say that we are
                        merely in the financing business, as we try to do
                        something more. We strive to help people achieve their
                        dreams - the dream of owning a home.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Features;
