import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function Explore() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="flex flex-col">
      <div className="text-primary mt-5 flex flex-row">
        <p className="mr-3 text-gray-500">Popular events near</p>

        <svg
          class="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <p className="ml-3 cursor-pointer">everywhere</p>
      </div>
      <hr class="my-6 border-gray-600" />
      <div class="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded white-glassmorphism overflow-hidden shadow-lg pb-4">
          <img
            class="w-full "
            src="https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-gray-300 mb-2 heading">
              TestEvent
            </div>
            <p class="text-gray-500 text-sm desc">Test description.</p>
          </div>
          <div class="px-6 justify-between flex">
            <span class="inline-block  text-primary rounded-full py-1 text-sm font-semibold  mr-2 mb-2">
              0.001 ETH
            </span>
            <div className="bg-primary headingspaceless p-2 rounded-lg text-gray-300">
              Mint Ticket
            </div>
          </div>
        </div>
        <div class="rounded white-glassmorphism overflow-hidden shadow-lg pb-4">
          <img class="w-full " src="/assets/nft.svg" alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-gray-300 mb-2 heading">
              NFTHACK
            </div>
            <p class="text-gray-500 text-sm desc">NFTS ARE THE FUTURE</p>
          </div>
          <div class="px-6 justify-between flex">
            <span class="inline-block  text-primary rounded-full py-1 text-sm font-semibold  mr-2 mb-2">
              0.001 ETH
            </span>
            <div className="bg-primary headingspaceless p-2 rounded-lg text-gray-300">
              Mint Ticket
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        center
      >
        <div className="w-full">
          <h2 className="mt-10 headingspaceless text-2xl">
            This is the event's title
          </h2>
          <img
            class="w-full rounded-lg mt-5"
            src="https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
            alt="Mountain"
          />
          <img
            class="w-full "
            src="https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
            alt="Mountain"
          />
        </div>
      </Modal>
    </div>
  );
}
