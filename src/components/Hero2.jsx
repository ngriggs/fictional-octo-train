import React from "react";
import { NavLink } from "react-router-dom";
import { birthdayUnsplash2 } from "../assets";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants/index";
import { splashMain } from "../assets";

const Hero2 = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 mb-5 text-3xl font-light leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
              <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                Giggles Play
              </span>
              <span className="mb-5 relative inline-flex justify-center whitespace-nowrap">
                Indoor Playspace and <br className="sm:hidden" />
                Event Venue
                <svg
                  className="absolute mb-2 mt-20 hidden w-[100%] text-gray-400 sm:block"
                  viewBox="0 0 490 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6312 17.089C14.4676 17.089 18.4867 16.911 22.3231 16.733C23.9673 16.733 25.4288 16.555 27.073 16.555C34.0151 16.199 40.9571 15.8429 47.8992 15.4869C56.3028 15.1309 64.5237 14.5969 72.9272 14.2408C84.8018 13.5288 96.6764 12.9948 108.551 12.2827C111.291 12.1047 114.032 12.1047 116.772 11.9267C123.714 11.5707 130.656 11.2147 137.598 11.0366C144.54 10.6806 151.482 10.3246 158.424 10.1466C161.165 9.96859 163.905 9.79058 166.645 9.79058C177.606 9.43455 188.75 9.07853 199.712 8.72251C206.471 8.5445 213.23 8.36649 220.172 8.01047C222.913 8.01047 225.47 7.83246 228.211 7.83246C238.806 7.65445 249.585 7.47644 260.181 7.29843C270.776 7.12042 281.19 6.94241 291.785 6.7644C294.526 6.7644 297.266 6.7644 300.189 6.7644C307.131 6.7644 313.89 6.7644 320.832 6.7644C331.611 6.7644 342.207 6.7644 352.985 6.58639C356.456 6.58639 359.927 6.58639 363.398 6.58639C370.706 6.58639 378.013 6.58639 385.321 6.58639C385.869 6.58639 386.6 6.58639 387.148 6.58639C370.706 6.7644 354.081 6.94241 337.64 7.29843C330.698 7.47644 323.938 7.47644 316.996 7.65445C314.073 7.65445 310.967 7.65445 308.044 7.83246C297.997 8.01047 288.132 8.36649 278.084 8.5445C266.575 8.90052 255.065 9.07853 243.556 9.43455C241.547 9.43455 239.72 9.61256 237.71 9.61256C231.499 9.96859 225.47 10.1466 219.259 10.5026C206.836 11.0366 194.414 11.5707 181.991 12.1047C180.164 12.1047 178.337 12.2827 176.51 12.4607C170.482 12.8168 164.27 13.3508 158.242 13.7068C147.281 14.4188 136.502 15.1309 125.541 15.8429C122.618 16.0209 119.512 16.377 116.589 16.555C109.647 17.089 102.705 17.623 95.763 18.3351C86.9941 19.0471 78.0424 19.7592 69.2735 20.4712C57.0335 21.5393 44.6109 22.6073 32.3709 23.6754C29.4479 23.8534 26.5249 24.2094 23.4193 24.3874C18.1213 24.9215 12.8234 25.4555 7.52554 25.9895C6.97749 25.9895 6.42943 26.3455 6.42943 27.0576C6.42943 27.5916 6.97749 28.1257 7.52554 28.1257C9.53509 28.1257 11.362 28.3037 13.3715 28.3037C13.0061 29.1937 12.8234 29.7277 12.8234 30.2618C12.8234 32.2199 14.4676 34 16.6599 34C31.8228 33.1099 46.8031 32.0419 61.9661 31.3298C75.1195 30.7958 88.2729 30.0838 101.426 29.5497C115.859 28.8377 130.473 28.1257 144.906 27.5916C149.473 27.4136 154.04 27.2356 158.607 26.8796C159.886 26.8796 161.165 26.7016 162.626 26.7016C186.01 26.1675 209.394 25.4555 232.778 24.9215C245.2 24.5654 257.806 24.2094 270.228 24.0314C274.796 23.8534 279.18 23.8534 283.747 23.6754C307.679 23.3194 331.611 22.9634 355.543 22.6073C365.773 22.4293 376.004 22.2513 386.234 22.0733C395.003 21.8953 403.772 21.8953 412.541 21.5393C419.848 21.3613 426.973 21.0052 434.281 20.8272C437.934 20.6492 441.588 20.6492 445.059 20.4712C453.28 19.9372 461.501 19.4031 469.722 18.8691C469.174 19.5812 469.174 20.6492 469.356 21.3613C469.539 22.2513 470.087 22.9633 471.001 23.3194C471.731 23.6754 472.827 24.0314 473.558 23.6754C475.385 22.9634 477.212 22.2513 478.856 21.5393C478.856 21.5393 478.856 21.5393 478.673 21.5393C478.856 21.5393 478.856 21.3613 479.039 21.3613C479.221 21.3613 479.404 21.1832 479.404 21.1832H479.221C480.135 20.8272 481.048 20.4712 482.144 19.9372C483.058 19.5812 484.154 19.0471 485.067 18.6911C486.164 18.1571 487.077 17.623 488.173 17.089C489.269 16.555 490 15.1309 490 13.8848C490 13.1728 489.817 12.6387 489.452 11.9267C489.087 11.2147 488.173 10.3246 487.26 10.1466C486.346 9.96859 485.433 9.79058 484.519 9.79058C484.337 9.79058 484.154 9.79058 483.971 9.79058C483.423 9.79058 482.693 9.79058 482.144 9.96859C480.683 10.1466 479.404 10.3246 477.943 10.3246C476.847 10.3246 475.75 10.5026 474.472 10.5026C471.366 10.6806 468.443 10.8586 465.337 11.2147C464.607 11.2147 463.693 11.3927 462.962 11.3927C463.328 11.0366 463.51 10.6806 463.51 10.3246C463.693 9.96859 463.693 9.61257 463.693 9.25654C463.693 9.07853 463.693 8.72251 463.876 8.5445C463.876 8.18848 463.876 7.83246 463.693 7.65445C463.693 7.65445 463.876 7.65445 463.876 7.47644C464.424 7.12042 464.972 6.7644 465.337 6.05236C465.703 5.51832 465.885 4.80628 465.885 4.09424C465.885 3.3822 465.703 2.84817 465.337 2.13613C465.155 1.95812 464.972 1.60209 464.789 1.42408C464.241 0.890052 463.693 0.712042 463.145 0.534031C462.049 0.17801 460.77 0 459.491 0C458.395 0 457.482 0 456.386 0C454.924 0 453.463 0 452.001 0C449.992 0 447.799 0 445.79 0C440.309 0 434.829 0 429.348 0C424.233 0 418.935 0 413.82 0C409.07 0 404.503 0 399.753 0C380.936 0 362.302 0.17801 343.486 0.356021C329.419 0.534031 315.352 0.712042 301.285 0.712042C295.074 0.712042 288.68 0.890052 282.468 1.06806C268.402 1.42408 254.335 1.60209 240.268 1.95812C236.249 1.95812 232.23 2.13613 228.211 2.13613C225.836 2.13613 223.643 2.31414 221.268 2.31414C207.384 2.84817 193.5 3.3822 179.616 3.91623C175.414 4.09424 171.212 4.27225 166.828 4.45026C164.453 4.45026 162.078 4.62827 159.703 4.80628C145.819 5.51832 132.118 6.23037 118.233 6.94241C111.109 7.29843 103.984 7.65445 96.8591 8.18848C84.6192 8.90052 72.3792 9.61256 60.3219 10.5026C49.7261 11.2147 39.1303 11.7487 28.5345 12.2827C26.8903 12.4607 25.2461 12.4607 23.4193 12.6387C20.679 12.8168 17.9387 12.8168 15.1984 12.9948C12.8234 13.7068 10.2658 13.7068 7.89092 13.7068C7.70823 12.9948 6.97749 12.4607 6.42943 12.6387C4.78525 12.6387 3.32376 12.8168 1.67958 12.9948C0.948839 13.1728 0.218094 13.5288 0.0354073 14.2408C-0.147279 15.1309 0.40078 16.0209 1.13152 16.199C1.86227 16.377 2.59301 16.555 3.32376 16.733C4.05451 16.911 4.60256 16.911 5.33331 16.911C7.16017 17.089 8.80435 17.089 10.6312 17.089ZM438.117 11.3927C440.309 11.3927 442.684 11.3927 444.876 11.3927C445.059 11.9267 445.425 12.2827 445.79 12.6387C444.876 12.6387 443.963 12.8168 443.232 12.8168C441.588 12.8168 439.944 12.9948 438.3 12.9948C430.992 13.1728 423.868 13.5288 416.56 13.7068C413.272 13.8848 409.983 14.0628 406.695 14.0628C401.58 14.0628 396.282 14.2408 391.167 14.2408C379.292 14.4188 367.6 14.5969 355.726 14.7749C332.707 15.1309 309.871 15.4869 286.853 15.8429C270.411 16.0209 253.969 16.555 237.528 17.089C212.865 17.801 188.02 18.3351 163.357 19.0471C158.424 19.2251 153.492 19.4031 148.559 19.7592C134.493 20.4712 120.426 21.0052 106.359 21.7173C92.6573 22.4293 78.7732 22.9634 65.0717 23.6754C63.7929 23.6754 62.5141 23.8534 61.2353 23.8534C64.889 23.4974 68.7254 23.3194 72.3792 22.9633C85.3499 22.0733 98.3206 21.0052 111.291 20.1152C115.859 19.7592 120.426 19.4031 124.81 19.0471C127.185 18.8691 129.56 18.6911 131.752 18.6911C145.454 17.9791 158.972 17.089 172.491 16.377C175.049 16.199 177.789 16.0209 180.347 15.8429C184.183 15.6649 188.02 15.4869 191.673 15.4869C205.557 14.9529 219.442 14.4188 233.326 13.8848C236.431 13.7068 239.537 13.7068 242.46 13.5288C243.191 13.5288 244.104 13.5288 244.835 13.5288C247.027 13.5288 249.219 13.5288 251.229 13.3508C265.113 12.9948 279.18 12.8168 293.064 12.4607C299.458 12.2827 305.852 12.1047 312.246 12.1047C332.89 11.9267 353.716 11.7487 374.36 11.5707C395.917 11.5707 417.108 11.3927 438.117 11.3927Z"
                    fill="blue"
                  />
                  <path
                    d="M38 42C38.5523 42 39 41.5523 39 41C39 40.4477 38.5523 40 38 40C37.4477 40 37 40.4477 37 41C37 41.5523 37.4477 42 38 42Z"
                    fill="currentColor"
                  />
                </svg>
                <img src={splashMain} />
              </span>
            </h1>
            <p className="mx-auto mt-12 max-w-md leading-7 text-gray-600">
              Giggles play is an indoor play space dedicated to providing a
              strong foundation for early learning through active play,
              educational activities and engaging classes for both parents and
              children. Explore our space and create amazing family memories!
            </p>

            <div className="group relative mt-10 inline-flex">
              <NavLink
                to="/booking"
                className="rounded-xl bg-blue-700 px-10 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
              >
                Book a Birthday Party Now!
              </NavLink>
              <div className="-scale-x-100 absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 text-blue-600 md:inline-flex">
                <svg
                  viewBox="0 0 82 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-300 sm:flex-row sm:divide-x sm:divide-y-0 md:mt-20">
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="items-center justify-center grid grid-cols-2 gap-3 p-5 w-[80%] sm:flex-row sm:divide-x sm:divide-y-0 md:mt-20 font-poppins mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="col-span-1">
            <img src={birthdayUnsplash2} />
          </div>

          <div className="col-span-1 text-center">
            <h1>BIRTHDAY PARTIES</h1>
            <h1 className={styles.heading2}>Is Your Birthday Coming Up?</h1>
            <p className={`${styles.paragraph}`}>
              All of our birthday parties are 100% private. The entire facility
              is only for you and your guests! Time extension is available.
            </p>
            <div className="group relative mt-10 inline-flex">
              <NavLink
                to="/booking"
                className="rounded-xl bg-blue-700 px-10 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
              >
                Book Now!
              </NavLink>
              <div className="-scale-x-100 absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 text-blue-600 md:inline-flex"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className={`${styles.heading1} py-0`}>
            Playspace and Event Venue
          </h1>
          <h1 className={styles.heading2}>What's Inside</h1>
          <div className="grid grid-cols-3 items-center justify-center gap-3 p-5 w-[80%] sm:flex-row sm:divide-x sm:divide-y-0 md:mt-15 font-poppins mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {feedback.map((feature, index) => (
              <FeedbackCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
