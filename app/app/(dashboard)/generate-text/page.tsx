"use client";

import React, { useState } from "react";
import {
  ArrowPathIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

export default function AIFeat() {
  const [sampleA, setSampleA] = useState("");

  const handleGenerateAd = () => {
    setSampleA(`The sample ad copy is given here
    just as a placeholder to display how the AI response would look like.
    The sample ad copy is given here
    just as a placeholder to display how the AI response would look like.
    The sample ad copy is given here
    just as a placeholder to display how the AI response would look like.
    `);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <form className="bg-white w-screen md:w-full shadow-md rounded px-6 pt-6 pb-8 mb-4 md:ml-0">
        <h2 className="mt-4 mb-2 text-lg font-semibold">
          Ad from product description
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ad-prompt"
          >
            Prompt
          </label>
          <input
            className="shadow appearance-none border rounded border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ad-prompt"
            type="text"
            placeholder="Product description"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            AI Response
          </label>
          <div className="container border shadow appearance-none h-72 md:h-56 rounded w-full border-gray-300 mx-auto p-4">
            <div className="relative">
              <ClipboardDocumentIcon className="w-5 h-5 text-gray-400 absolute top-0 md:top-32 right-0 md:right-5" />
              <ArrowPathIcon
                className="w-5 h-5 text-gray-400 absolute top-6 md:top-40 right-0 md:right-5"
                onClick={() => setSampleA("")}
              />
            </div>
            <p className="text-gray-800 mt-0 text-left pb-6 pr-6 overflow-y-scroll">
              {sampleA}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button"
            onClick={() => handleGenerateAd()}
          >
            Generate Ad
          </button>
          {/* <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a> */}
        </div>
      </form>

      <form className="bg-white w-screen md:w-full shadow-md rounded px-6 pt-6 pb-8 mb-4 md:ml-0">
        <h2 className="mt-4 mb-2 text-lg font-semibold">
          Product name generator
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name-prompt"
          >
            Prompt
          </label>
          <input
            className="shadow appearance-none border rounded border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name-prompt"
            type="text"
            placeholder="e.g. A home coffee maker"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            AI Response
          </label>
          <div className="container border shadow appearance-none h-20 rounded w-full border-gray-300 mx-auto p-4">
            <div className="relative">
              <ClipboardDocumentIcon className="w-6 h-6 text-gray-400 absolute top-0 right-0" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            type="button"
          >
            Generate name
          </button>
        </div>
      </form>
    </div>
  );
}
