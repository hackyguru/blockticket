import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
var axios = require("axios").default;

export default function MyEvents() {
  var options = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/mints/easy/urls",
    headers: {
      "Content-Type": "application/json",
      Authorization: "f181abca-7a8d-4c9c-9169-cac2d7f92165",
    },
    data: {
      chain: "polygon",
      name: "NFTHack",
      description: "NFTS ARE THE FUTURE",
      file_url:
        "https://ipfs.io/ipfs/bafkreidtjdtqqdobgbhmrltfpewmrme2w5wp7s45vxqrxzdr3fcrxo37ce",
      mint_to_address: "0xF063caAB7e320a472C3305a7a51A40Ed490C3F5C",
    },
  };
  const { logout, isAuthenticated, user, authenticate, setUserData } =
    useMoralis();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const createevent = () => {
    user.save({
      eventname: "NFTHACK",
      eventdescription: "NFTS ARE THE FUTURE",
    });
    setUserData({
      eventname: "NFTHACK",
      eventdescription: "NFTS ARE THE FUTURE",
    });
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="text-gray-500 mt-5 flex flex-row">
        All the events created by your wallet address will be displayed below.
        Please note that the storage is completely decentralized.
      </div>
      <hr class="my-6 border-gray-600" />

      {user.get("eventname") == null && (
        <button
          onClick={onOpenModal}
          class="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        >
          <div class="rounded white-glassmorphism overflow-hidden shadow-lg pb-4">
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl text-gray-300 mb-2 headingspaceless">
                Create new event
              </div>
            </div>
          </div>
        </button>
      )}
      {user.get("eventname") != null && (
        <div class="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div class="rounded white-glassmorphism overflow-hidden shadow-lg pb-4">
            <img class="w-full " src="/assets/nft.svg" alt="Mountain" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl text-gray-300 mb-2 heading">
                {user.get("eventname")}
              </div>
              <p class="text-gray-500 text-sm desc">
                {user.get("eventdescription")}
              </p>
            </div>
            <div class="px-6 justify-between flex">
              <a class="inline-block  text-primary rounded-full py-1 text-sm font-semibold  mr-2 mb-2">
                Opensea
              </a>
              <a class="inline-block  text-primary rounded-full py-1 text-sm font-semibold  mr-2 mb-2">
                Block explorer
              </a>
              <a class="inline-block  text-primary rounded-full py-1 text-sm font-semibold  mr-2 mb-2">
                Restricted content
              </a>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            class="rounded white-glassmorphism overflow-hidden shadow-lg pb-4"
          >
            <div class="px-6 py-4">
              <div class="font-bold text-center  text-xl text-gray-300 mb-2 headingspaceless">
                Create new event
              </div>
            </div>
          </button>
        </div>
      )}

      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        center
      >
        <div className="w-full flex-col">
          <h2 className="mt-2 headingspaceless text-2xl">Create an event</h2>
          <br />

          <div class="relative h-16">
            <label
              for="name"
              class="absolute text-xs font-medium desc text-gray-700 top-3 left-3"
            >
              Event name
            </label>

            <input
              type="text"
              id="name"
              placeholder=""
              class="absolute inset-0  w-full px-3 pb-3 desc bg-transparent border-gray-400 rounded-lg sm:text-sm pt-9"
            />
          </div>

          <div class="relative h-16 mt-5">
            <label
              for="name"
              class="absolute text-xs font-medium desc text-gray-700 top-3 left-3"
            >
              Event description
            </label>

            <input
              type="text"
              id="name"
              placeholder=""
              class="absolute inset-0  w-full px-3 pb-3 desc bg-transparent border-gray-400 rounded-lg sm:text-sm pt-9"
            />
          </div>

          <div class="relative h-16 mt-5">
            <label
              for="name"
              class="absolute text-xs font-medium desc text-gray-700 top-3 left-3"
            >
              Ticket count
            </label>

            <input
              type="text"
              id="name"
              placeholder=""
              class="absolute inset-0  w-full px-3 pb-3 desc bg-transparent border-gray-400 rounded-lg sm:text-sm pt-9"
            />
          </div>
          <div class="relative h-16 mt-5">
            <label
              for="name"
              class="absolute text-xs font-medium desc text-gray-700 top-3 left-3"
            >
              Event logo
            </label>

            <input
              type="file"
              id="name"
              placeholder=""
              class="absolute inset-0  w-full px-3 pb-3 desc bg-transparent border-gray-400 rounded-lg sm:text-sm pt-9"
            />
          </div>
          <br />
          <button
            onClick={() => createevent()}
            className="bg-primary headingspaceless p-2 rounded-lg text-white"
          >
            Mint tickets
          </button>
        </div>
      </Modal>
    </div>
  );
}
