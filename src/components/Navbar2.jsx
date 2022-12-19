/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  CheckBadgeIcon,
  NewspaperIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";

const solutions = [
  {
    name: "Book a Party",
    description:
      "Book an upcoming party or check availability on your event date",
    to: "/booking",
    icon: CalendarDaysIcon,
  },
  {
    name: "Contact Us",
    description: "Send us any feedback or inquiries",
    to: "/contact",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Waivers",
    description: "Sign a waiver for your children in advance",
    to: "/waiver",
    icon: ShieldCheckIcon,
  },
  {
    name: "About us",
    description: "Learn more about the team.",
    to: "/about",
    icon: Squares2X2Icon,
  },
  {
    name: "Shop",
    description: "Children's books and educational toys",
    to: "/shop",
    icon: ShoppingCartIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Newsletter",
    description:
      "Get all of your questions answered in our forums or contact support.",
    to: "/booking3",
    icon: NewspaperIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    to: "/guides",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Testimonials",
    description:
      "See what meet-ups and other events we might be planning near you.",
    to: "/testimonials",
    icon: CheckBadgeIcon,
  },
  {
    name: "Frequently Asked Questions",
    description: "Understand how we take your privacy seriously.",
    to: "/FAQ",
    icon: QuestionMarkCircleIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar2() {
  return (
    <Headroom className="font-poppins">
      <Popover className="relative bg-white">
        <div className="mx-auto px-1 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <nav>
                <NavLink
                  to="/"
                  className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-blue-600"
                >
                  <svg
                    className="mr-2 h-8"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
                      fill="url(#paint0_linear_11430_22515)"
                    />
                    <path
                      d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z"
                      fill="url(#paint1_linear_11430_22515)"
                    />
                    <path
                      d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z"
                      fill="url(#paint2_linear_11430_22515)"
                    />
                    <path
                      d="M19.6699 25.6538C18.3843 26.3953 16.8003 26.3953 15.5147 25.6538C15.3402 25.5531 15.1757 25.4399 15.0201 25.3174L12.7591 26.8719L10.8103 30.0209C12.9733 31.821 15.7821 32.3997 18.589 32.0779C20.7013 31.8357 22.7995 31.1665 24.7582 30.0368C26.3492 29.1191 27.7 27.9909 28.8182 26.7195L27.6563 23.8962L25.7762 22.1316L19.6699 25.6538Z"
                      fill="url(#paint3_linear_11430_22515)"
                    />
                    <path
                      d="M15.0201 25.3175C14.0296 24.5373 13.4371 23.3406 13.4371 22.0588V21.931V11.2558C13.4371 10.6521 13.615 10.5494 14.1384 10.8513C13.3323 10.3864 11.4703 8.79036 9.17118 10.1165C7.88557 10.858 6.8269 12.4949 6.8269 13.978V21.8362C6.8269 24.775 8.34906 27.8406 10.5445 29.7966C10.6313 29.874 10.7212 29.9469 10.8103 30.0211L15.0201 25.3175Z"
                      fill="url(#paint4_linear_11430_22515)"
                    />
                    <path
                      d="M28.6604 5.49565C28.6589 5.49395 28.6573 5.49532 28.6589 5.49703C28.9613 5.83763 29.2888 6.23485 29.6223 6.68734C31.3648 9.05099 32.0158 12.0447 31.4126 14.9176C30.8093 17.7906 29.0071 20.2679 26.4625 21.7357L25.7761 22.1316L28.8181 26.7195C34.0764 20.741 34.09 11.5388 28.6815 5.51929C28.6789 5.51641 28.67 5.50622 28.6604 5.49565Z"
                      fill="url(#paint5_linear_11430_22515)"
                    />
                    <path
                      d="M7.09355 13.978C7.09354 12.4949 7.88551 11.1244 9.17113 10.3829C9.34564 10.2822 9.52601 10.1965 9.71002 10.1231L9.49304 7.38962L7.96861 4.26221C5.32671 5.23364 3.1897 7.24125 2.06528 9.83067C1.2191 11.7793 0.75001 13.9294 0.75 16.1888C0.75 18.0243 1.05255 19.7571 1.59553 21.3603L4.62391 21.7666L7.09355 21.0223V13.978Z"
                      fill="url(#paint6_linear_11430_22515)"
                    />
                    <path
                      d="M9.71016 10.1231C10.8817 9.65623 12.2153 9.74199 13.3264 10.3829L13.4372 10.4468L22.3326 15.5777C22.9566 15.9376 22.8999 16.2918 22.1946 16.4392L22.7078 16.332C23.383 16.1908 23.9999 15.8457 24.4717 15.3428C25.2828 14.4782 25.5806 13.4351 25.5806 12.5299C25.5806 11.0468 24.7886 9.67634 23.503 8.93479L16.6911 5.00568C14.1436 3.53627 11.0895 3.22294 8.29622 4.14442C8.18572 4.18087 8.07756 4.2222 7.96875 4.26221L9.71016 10.1231Z"
                      fill="url(#paint7_linear_11430_22515)"
                    />
                    <path
                      d="M20.0721 31.8357C20.0744 31.8352 20.0739 31.8332 20.0717 31.8337C19.6252 31.925 19.1172 32.0097 18.5581 32.0721C15.638 32.3978 12.7174 31.4643 10.5286 29.5059C8.33986 27.5474 7.09347 24.7495 7.09348 21.814L7.09347 21.0222L1.59546 21.3602C4.1488 28.8989 12.1189 33.5118 20.0411 31.8421C20.0449 31.8413 20.0582 31.8387 20.0721 31.8357Z"
                      fill="url(#paint8_linear_11430_22515)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_11430_22515"
                        x1="20.8102"
                        y1="23.9532"
                        x2="23.9577"
                        y2="12.9901"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1724C9" />
                        <stop offset="1" stopColor="#1C64F2" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_11430_22515"
                        x1="28.0593"
                        y1="10.5837"
                        x2="19.7797"
                        y2="2.33321"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C64F2" />
                        <stop offset="1" stopColor="#0092FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_11430_22515"
                        x1="16.9145"
                        y1="5.2045"
                        x2="4.42432"
                        y2="5.99375"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0092FF" />
                        <stop offset="1" stopColor="#45B2FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_11430_22515"
                        x1="16.0698"
                        y1="28.846"
                        x2="27.2866"
                        y2="25.8192"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C64F2" />
                        <stop offset="1" stopColor="#0092FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_11430_22515"
                        x1="8.01881"
                        y1="15.8661"
                        x2="15.9825"
                        y2="24.1181"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1724C9" />
                        <stop offset="1" stopColor="#1C64F2" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_11430_22515"
                        x1="26.2004"
                        y1="21.8189"
                        x2="31.7569"
                        y2="10.6178"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0092FF" />
                        <stop offset="1" stopColor="#45B2FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_11430_22515"
                        x1="6.11387"
                        y1="9.31427"
                        x2="3.14054"
                        y2="20.4898"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C64F2" />
                        <stop offset="1" stopColor="#0092FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_11430_22515"
                        x1="21.2932"
                        y1="8.78271"
                        x2="10.4278"
                        y2="11.488"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1724C9" />
                        <stop offset="1" stopColor="#1C64F2" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_11430_22515"
                        x1="7.15667"
                        y1="21.5399"
                        x2="14.0824"
                        y2="31.9579"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0092FF" />
                        <stop offset="1" stopColor="#45B2FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  GigglesPlay
                </NavLink>
              </nav>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-poppins"
                      )}
                    >
                      <span>Home</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        {({ close }) => (
                          <button
                            className="text-left"
                            onClick={async () => {
                              await close();
                            }}
                          >
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {solutions.map((item) => (
                                  <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </NavLink>
                                ))}
                              </div>
                              {/* <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <NavLink
                                      to={item.to}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </NavLink>
                                  </div>
                                ))}
                              </div> */}
                            </div>
                          </button>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <NavLink
                to="/gallery"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/policies"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Policies
              </NavLink>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        {({ close }) => (
                          <button
                            className="text-left"
                            onClick={async () => {
                              await close();
                            }}
                          >
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {resources.map((item) => (
                                  <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </NavLink>
                                ))}
                              </div>
                              <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                <div>
                                  <h3 className="text-base font-medium text-gray-500">
                                    Recent Posts
                                  </h3>
                                  <ul role="list" className="mt-4 space-y-4">
                                    {recentPosts.map((post) => (
                                      <li
                                        key={post.id}
                                        className="truncate text-base"
                                      >
                                        <a
                                          href={post.href}
                                          className="font-medium text-gray-900 hover:text-gray-700"
                                        >
                                          {post.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    View all posts
                                    <span aria-hidden="true"> &rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </button>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            {({ close }) => (
              <button
                className="absolute text-left top-2 right-2"
                onClick={async () => {
                  await close();
                }}
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <NavLink to="/">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                          />
                        </NavLink>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                          >
                            <item.icon
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </NavLink>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="space-y-6 py-6 px-5">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <NavLink
                        to="/gallery"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Gallery
                      </NavLink>

                      <NavLink
                        to="/policies"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Policies
                      </NavLink>
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </Headroom>
  );
}
