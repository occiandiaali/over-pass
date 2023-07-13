// import Image from "next/image";
// import {
//   ArrowsUpDownIcon,
//   InboxStackIcon,
//   ClipboardDocumentListIcon,
//   LightBulbIcon,
//   PuzzlePieceIcon,
//   UserPlusIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/solid";

// export default function Overview() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-full md:w-full">
//       <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-64 h-40 md:w-full md:h-56 p-6">
//         <h2 className="text-lg md:text-xl font-bold">75%</h2>
//         <h4>viable outreach</h4>
//         <div className="flex flex-row justify-around">
//           <InboxStackIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
//           <ClipboardDocumentListIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-6 mt-8 md:mt-12" />
//           <LightBulbIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mt-8 md:mt-12" />
//         </div>
//       </div>
//       <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-64 h-40 md:w-full md:h-56 p-6">
//         <h2 className="text-lg md:text-xl font-bold">75%</h2>
//         <h4>viable outreach</h4>
//         <div className="flex flex-row justify-around">
//           <InboxStackIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
//           <ClipboardDocumentListIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-6 mt-8 md:mt-12" />
//           <LightBulbIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mt-8 md:mt-12" />
//         </div>
//       </div>
//       <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-64 h-40 md:w-full md:h-56 p-6">
//         <h2 className="text-lg md:text-xl font-bold">19% </h2>
//         <h4>rejected contacts</h4>
//         <div className="flex flex-row justify-around">
//           <PuzzlePieceIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
//           <UserPlusIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-6 mt-8 md:mt-12" />
//           <UserGroupIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
//           <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
//         </div>
//       </div>

//       <div className="md:col-span-2 container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-64 h-48 md:w-full md:h-72 p-6">
//         <h2 className="font-bold">Quarterly summary</h2>
//         <Image
//           src={"/line-graph2.png"}
//           alt="graph1"
//           width={260}
//           height={200}
//           className="mt-2 md:mt-4"
//         />
//         {/* <div className="container border border-gray-600 shadow appearance-none rounded flex-row-reverse w-24 h-24 md:w-48 md:h-24 p-4">
//           <ArrowsUpDownIcon className="w-12 h-12 text-orange-600" />
//         </div> */}
//       </div>
//       <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-64 h-40 md:w-full md:h-60 p-6">
//         <h2>Animated swipe cards with overlay</h2>
//       </div>
//     </div>
//   );
// }
"use client";

import { createRef, useRef, useState } from "react";
import classNames from "classnames";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Overview() {
  const [capShows, setCapShows] = useState(false);
  const [text, setText] = useState("");
  const textRef = createRef();

  function handleSend() {
    text.length < 3 ? setCapShows(false) : setCapShows(true);
  }

  return (
    <div className="flex flex-col p-4 items-center justify-center w-screen md:w-full">
      <div className="flex flex-col pt-2 md:mb-6 pb-4">
        <h4 className="text-black font-semibold text-lg md:text-2xl pt-4 pb-1">
          Instructions
        </h4>
        <p className="text-gray-600">In 3 simple steps</p>
        {capShows ? (
          <AcademicCapIcon className="w-6 h-6 md:w-10 md:h-10 text-blue-700 absolute right-8 animate-bounce md:cursor-pointer" />
        ) : null}

        <ol>
          <li className="text-black pt-4 pb-1">
            1. Enter the topic you wish to learn in the Topic box
          </li>
          <li className="text-black">
            2. Select a concept that you want used to explain the topic to you
          </li>
          <li className="text-black">
            3. Tap on the bouncing academic cap to start learning 🤖
          </li>
        </ol>
        <div className="border border-slate-300 md:w-64 md:mb-4 mt-2 md:mt-3 md:ml-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full md:-mt-6">
        <div className="flex justify-center h-20 p-2 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
          <input
            className="shadow appearance-none border rounded w-72 md:w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
            id="topic-field"
            name="topic-field"
            type="text"
            value={text}
            onChange={(e) => {
              handleSend();
              setText(e.target.value);
            }}
            placeholder="Topic you want to learn"
          />
        </div>
        <div className="flex justify-center h-20 p-2 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
          <select
            id="concepts"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 md:w-full md:mb-2 p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a concept</option>
            <option value="soccer">Soccer</option>
            <option value="ballet">Ballet</option>
            <option value="basketball">Basketball</option>
            <option value="cooking">Cooking</option>
            <option value="driving">Driving</option>
            <option value="athletics">Atletics</option>
            <option value="painting">Painting</option>
            <option value="alexander">Alexander the Great</option>
            <option value="egypt">Ancient Egypt</option>
            <option value="rome">Ancient Rome</option>
            <option value="fishing">Fishing</option>
            <option value="garden">Gardening</option>
          </select>
        </div>
        <div className="flex justify-center p-6 text-6xl w-full h-40 md:w-full md:h-64 bg-gray-100 border-2 border-gray-300 rounded-xl">
          3
        </div>
        <div className="flex justify-center p-6 text-6xl w-full h-40 md:w-full md:h-64 bg-gray-100 border-2 border-gray-300 rounded-xl">
          <Image
            src="/power.jpg"
            alt="wind turbines in a field"
            width={500}
            height={256}
            className="w-full md:h-56 md:pb-2"
          />
        </div>
      </div>
    </div>
  );
}
