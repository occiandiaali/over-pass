"use client";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Teams() {
  return (
    <div className="flex flex-col md:flex-row pl-4 justify-center items-center gap-5">
      <div className="flex flex-row w-80 p-4 ml-8 gap-4 md:w-full">
        <input
          type="text"
          onChange={() => null}
          placeholder="Search.."
          className="input input-bordered input-info w-full mt-5 mb-5 md:w-96"
        />
        <RocketLaunchIcon className="w-8 h-8 mt-6 text-slate-700" />
      </div>
    </div>
  );
}
