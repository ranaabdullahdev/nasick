"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Chevron, HamBurger, RightChevron } from "../../utils/svgs/svgs";
import { Container } from "../container";

const Header = ({ headersContent }) => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeSubheading, setActiveSubheading] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedHeading, setExpandedHeading] = useState("");
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);

  const router = useRouter();

  const handleClick = (heading) => {
    if (heading.title === "Overview") {
      router.push(heading.subheadings[0]?.content.slug);
    } else if (heading.subheadings.length) {
      toggleMenu(heading.title);
    } else {
      router.push(`/${getDashedString(heading.title)}`);
    }
  };

  const toggleMenu = (heading) => {
    if (activeDropdown === heading) {
      closeTab();
    } else {
      setIsOpen(true);
      setActiveDropdown(heading);
      setActiveSubheading("");
    }
  };

  const handleMouseEnter = (subheading) => {
    setActiveSubheading(subheading);
  };

  const getDashedString = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const handleClickOutside = (event) => {
    const target = event.target;
    if (!target.closest("#mega-menu-full-cta-dropdown")) {
      setIsOpen(false);
    }
  };

  const closeTab = () => {
    setIsOpen(false);
    setActiveDropdown("");
    setActiveSubheading("");
  };

  const isActive = (headingTitle) => {
    return currentPath.includes(getDashedString(headingTitle));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [activeDropdown]);

  const [backdropHeight, setBackdropHeight] = useState("100px");

  useEffect(() => {
    const updateBackdropHeight = () => {
      if (mobileMenu) {
        setBackdropHeight("100vh");
      } else if (isOpen && !mobileMenu) {
        setBackdropHeight(`calc(100px + ${dropdownHeight}px)`);
      } else if (window.innerWidth <= 1024 && mobileMenu) {
        setBackdropHeight("100vh");
      } else {
        setBackdropHeight("100px");
      }
    };

    updateBackdropHeight();

    window.addEventListener("resize", updateBackdropHeight);
    return () => {
      window.removeEventListener("resize", updateBackdropHeight);
    };
  }, [mobileMenu, isOpen, dropdownHeight]);

  const dashedSubheading = getDashedString(activeSubheading);
  const finalSlug = `/${dashedSubheading}`;
  const href = `${finalSlug}`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full ">
      <div
        className="absolute inset-0 z-[-5] bg-[rgba(5,9,19,0.5)] backdrop-blur-md"
        style={{
          height: backdropHeight,
        }}
      ></div>
      <Container>
        <div className="flex min-h-[100px] items-center justify-between ">
          <div className="px-2">
            <Link
              href="/"
              className="flex items-center gap-1 px-3 py-2 text-lg text-white md:p-0 xl:text-xl"
              aria-current="page"
            >
              <span>
                <img
                  className="h-[62px] w-[62px]"
                  src="/assets/logo/logo.png"
                  alt="HEXA.AI logo"
                  style={{
                    filter: "invert(85%) brightness(115%)",
                  }}
                />
              </span>
              <span className=" hidden md:block">Nasick AI</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-4">
              <div
                id="mega-menu-full-cta"
                className={`${
                  isOpen ? "block" : "hidden"
                } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
              >
                <ul className="mt-4 flex flex-col items-center font-light md:mt-0 md:flex-row md:space-x-4 rtl:space-x-reverse">
                  {headersContent?.map((heading, index) => (
                    <li key={index}>
                      <button
                        id="mega-menu-full-cta-dropdown-button"
                        onClick={() => handleClick(heading)}
                        className={`mt-2 flex w-full items-center justify-between rounded-sm px-2 py-2 font-light text-white hover:text-gray-500 dark:text-white ${
                          isActive(heading.title)
                            ? "border-none"
                            : "border-none"
                        }`}
                      >
                        {heading.title}
                        {!!heading.subheadings.length && <Chevron />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {isOpen &&
              !!headersContent?.find(
                (heading) => heading.title === activeDropdown
              )?.subheadings.length && (
                <div
                  id="mega-menu-full-cta-dropdown"
                  ref={dropdownRef}
                  className="absolute left-0 right-0 top-[80px] z-50 py-[40px]"
                >
                  <Container>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 gap-1 pb-4 pt-0 md:grid-cols-4">
                        <div className="col-span-1 p-4 md:col-span-1">
                          {headersContent
                            ?.find(
                              (heading) => heading.title === activeDropdown
                            )
                            ?.subheadings.map((subheading, index) => (
                              <Link
                                href={
                                  subheading.title === "Overview" ||
                                  subheading.title ===
                                    "Diversity, Equity, and Inclusion"
                                    ? subheading.content.slug
                                    : `/${getDashedString(subheading.title)}`
                                }
                                key={index}
                                onClick={() => closeTab()}
                                className={`flex items-center justify-between rounded-5 px-1 py-2 transition duration-300 ease-in-out ${
                                  subheading.title === activeSubheading
                                    ? " bg-gray-800/50 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)]"
                                    : ""
                                }`}
                                onMouseEnter={() =>
                                  handleMouseEnter(subheading.title)
                                }
                              >
                                <span className=" text-md text-white transition duration-300 ease-in-out">
                                  {subheading.title}
                                </span>
                                {subheading.content.list &&
                                  subheading.title !== "Overview" && (
                                    <RightChevron />
                                  )}
                                {subheading.title === "Overview" && (
                                  <RightChevron />
                                )}
                              </Link>
                            ))}
                        </div>
                        <div className="col-span-1 p-4 px-5 md:col-span-3">
                          {headersContent
                            ?.find(
                              (heading) => heading.title === activeDropdown
                            )
                            ?.subheadings.map((subheading, index) => (
                              <div
                                key={index}
                                className={`${
                                  subheading.title === activeSubheading
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <div className="mx-20 mt-3">
                                  {subheading.content.heading && (
                                    <h3 className="text-xl text-white">
                                      {subheading.content.heading}
                                    </h3>
                                  )}
                                  {subheading.content.subheading && (
                                    <p className="text-white">
                                      {subheading.content.subheading}
                                    </p>
                                  )}
                                  {subheading.content.button && (
                                    <a
                                      href={subheading.content.slug}
                                      className="mt-6 inline-block items-center rounded-lg bg-white px-3 py-2 text-center text-black transition-colors"
                                      onClick={() => {
                                        closeTab();
                                      }}
                                    >
                                      {subheading.content.button}
                                    </a>
                                  )}
                                  {subheading.content.list && (
                                    <div className="flex gap-32">
                                      <ul className="list-inside text-white">
                                        {subheading.content.list
                                          .slice(0, 4)
                                          .map((item, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                listStyleType: "none",
                                              }}
                                              className="hover:decoration-dashed-white py-3 text-white hover:underline"
                                            >
                                              <Link
                                                href={
                                                  href +
                                                  "/" +
                                                  getDashedString(item)
                                                }
                                                onClick={() => closeTab()}
                                              >
                                                {item}
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                      <ul className="list-inside text-white ">
                                        {subheading.content.list
                                          .slice(4, 8)
                                          .map((item, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                listStyleType: "none",
                                              }}
                                              className="hover:decoration-dashed-white py-3 text-white hover:underline"
                                            >
                                              <Link
                                                href={
                                                  href +
                                                  "/" +
                                                  getDashedString(item)
                                                }
                                                onClick={() => closeTab()}
                                              >
                                                {item}
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              )}
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white"
            >
              <HamBurger />
            </button>
          </div>
        </div>
      </Container>
      {mobileMenu && (
        <Container>
          <div className=" py-4">
            {headersContent?.map((heading, index) => (
              <div key={index} className="my-4">
                <button
                  onClick={() =>
                    setExpandedHeading(
                      expandedHeading === heading.title ? "" : heading.title
                    )
                  }
                  className="flex w-full justify-between text-white"
                >
                  {heading.title}
                  {!!heading.subheadings.length && <Chevron />}
                </button>
                {expandedHeading === heading.title && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {heading.subheadings.map((subheading, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={
                            subheading.title === "Overview" ||
                            subheading.title ===
                              "Diversity, Equity, and Inclusion"
                              ? subheading.content.slug
                              : `/${getDashedString(subheading.title)}`
                          }
                          className="block text-white"
                          onClick={() => setMobileMenu(false)}
                        >
                          {subheading.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      )}
    </nav>
  );
};

export default Header;
