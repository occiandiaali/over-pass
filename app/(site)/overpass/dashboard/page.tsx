import Image from "next/image";
import {
  ArrowsUpDownIcon,
  InboxStackIcon,
  ClipboardDocumentListIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  UserPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-full md:w-full">
      <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-72 h-40 md:w-full md:h-64 p-6">
        <h2 className="text-lg md:text-xl font-bold">75%</h2>
        <h4>viable outreach</h4>
        <div className="flex flex-row justify-around">
          <InboxStackIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
          <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
          <ClipboardDocumentListIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
          <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-6 mt-8 md:mt-12" />
          <LightBulbIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
          <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mt-8 md:mt-12" />
        </div>
      </div>
      <div className="container bg-white flex border border-gray-300 shadow appearance-none rounded mx:auto items-center w-72 h-40 md:w-full md:h-64 p-6">
        <h2 className=" text-lg md:text-2xl font-bold">37%</h2>
        <ArrowsUpDownIcon className="w-8 h-8 text-green-500 mr-6" />
        <h2 className=" text-lg md:text-2xl font-bold">17%</h2>
        <ArrowsUpDownIcon className="w-8 h-8 text-red-500 mr-6" />
        <h2 className=" text-lg md:text-2xl font-bold">55%</h2>
        <ArrowsUpDownIcon className="w-8 h-8 text-green-500" />
      </div>
      <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-72 h-40 md:w-full md:h-64 p-6">
        <h2 className="text-lg md:text-xl font-bold">19% </h2>
        <h4>rejected contacts</h4>
        <div className="flex flex-row justify-around">
          <PuzzlePieceIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
          <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
          <UserPlusIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
          <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-6 mt-8 md:mt-12" />
          <UserGroupIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mt-6 md:mt-14" />
          <ArrowsUpDownIcon className="w-4 h-4 md:w-6 md:h-6 text-red-500 mr-6 mt-8 md:mt-12" />
        </div>
      </div>
      <div className="md:col-span-2 container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-72 h-48 md:w-full md:h-72 p-6">
        <h2 className="font-bold">Quarterly summary</h2>
        <Image
          src={"/line-graph2.png"}
          alt="graph1"
          width={260}
          height={200}
          className="mt-2 md:mt-4"
        />
        {/* <div className="container border border-gray-600 shadow appearance-none rounded flex-row-reverse w-24 h-24 md:w-48 md:h-24 p-4">
          <ArrowsUpDownIcon className="w-12 h-12 text-orange-600" />
        </div> */}
      </div>
      <div className="container bg-white border border-gray-300 shadow appearance-none rounded mx:auto items-center w-72 h-40 md:w-full md:h-60 p-6">
        <h2>Animated swipe cards with overlay</h2>
      </div>
    </div>
  );
}
