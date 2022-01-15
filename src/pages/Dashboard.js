import React, { useState } from "react";
import Blockies from "react-blockies";

export default function Dashboard() {
  const [menu, setMenu] = useState(1);

  return (
    <div className="flex min-h-screen ">
      <div
        class="
    md:flex flex-col
    w-80
    h-screen
    px-4
    py-8
    dark:bg-gray-800 
    hidden
    desc
  "
      >
        <img
          src="assets/blockticket.png"
          className="w-1/2 text-center mb-10 ml-10"
        />

        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <button
              className={
                "flex items-center px-4 py-2 rounded-md " +
                (menu == 1
                  ? "bg-gray-300 text-gray-800 rounded-md "
                  : "text-gray-300")
              }
              onClick={() => setMenu(1)}
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="mx-4 font-medium">Explore events</span>
            </button>
            <button
              className={
                "flex items-center px-4 py-2 mt-5 rounded-md " +
                (menu == 2
                  ? "bg-gray-300 text-gray-800 rounded-md "
                  : "text-gray-300")
              }
              onClick={() => setMenu(2)}
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="mx-4 font-medium">My tickets</span>
            </button>

            <button
              className={
                "flex items-center px-4 py-2 mt-5 rounded-md " +
                (menu == 3
                  ? "bg-gray-300 text-gray-800 rounded-md "
                  : "text-gray-300")
              }
              onClick={() => setMenu(3)}
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>

              <span class="mx-4 font-medium">My events</span>
            </button>

            <button
              className={
                "flex items-center px-4 py-2 mt-5 rounded-md " +
                (menu == 4
                  ? "bg-gray-300 text-gray-800 rounded-md "
                  : "text-gray-300")
              }
              onClick={() => setMenu(4)}
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="mx-4 font-medium">Settings</span>
            </button>

            <hr class="my-6 mt-40 dark:border-gray-600" />

            <button
              class="
                flex
                items-center
                px-4
                py-2
                mt-5
                text-gray-300
                transition-colors
                duration-200
                transform
                rounded-md
                dark:text-gray-400
                dark:hover:bg-gray-700 dark:hover:text-gray-200
                desc
                
                "
              href="#"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <span class="mx-4 font-medium">Guide</span>
            </button>

            <button
              class="
                flex
                items-center
                px-4
                py-2
                mt-5
                text-gray-300
                transition-colors
                duration-200
                transform
                rounded-md
                dark:text-gray-400
                dark:hover:bg-gray-700 dark:hover:text-gray-200
                desc
                "
              href="#"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>

              <span class="mx-4 font-medium">Developers</span>
            </button>
          </nav>
        </div>
      </div>
      <div className="flex flex-col glass m-4 pl-10  px-4 w-full  mr-4 ml-6">
        <div className="flex w-full  mt-4 justify-between space-x-5">
          <div className="text-white h-14 heading text-4xl items-center mt-4">
            {menu == 1 && <>Explore events</>}
            {menu == 2 && <>My tickets</>}
            {menu == 3 && <>My events</>}
            {menu == 4 && <>Settings</>}
          </div>
          <div
            class="items-center px-4 -mx-2  h-14 white-glassmorphism  text-right 
            py-3 rounded-xl hidden md:flex"
          >
            <Blockies
              seed="Jeremy hue rain tide mile sage car bikeasf ssdsd sdsad sss daddysfdassdfsssss bapijf"
              size={10}
              scale={4}
              className="identicon mx-2 h-9 w-9 border-2 rounded-full"
            />
            <h4
              class="
              mx-2
              font-medium
              text-white
              dark:text-gray-200
              hover:underline
              desc
              ml-3
              "
            >
              0xs...fegsfr
            </h4>
            <svg
              class="w-6 h-6 ml-3 text-white
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <svg
              class="w-6 h-6 ml-3 text-white
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              ></path>
            </svg>
            <svg
              class="w-6 h-6 ml-4 text-white
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
          </div>
        </div>
        {/* Handle the page switches here */}
        {menu == 1 && <>Explore events</>}
        {menu == 2 && <>My tickets</>}
        {menu == 3 && <>My events</>}
        {menu == 4 && <>Settings</>}
      </div>
    </div>
  );
}
