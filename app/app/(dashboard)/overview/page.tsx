"use client";

import { useEffect, useState } from "react";
import { AcademicCapIcon, FireIcon } from "@heroicons/react/24/outline";
import getSupabaseUser from "@/app/utils/supabase-accessors/supabase-user";

import supabaseBrowserClient from "@/app/utils/supabase-accessors/browser-client";

export default function Overview() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [concept, setConcept] = useState("");
  const [queryResponse, setQueryResponse] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/query", {
      method: "POST",
      body: JSON.stringify({ topic, concept }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setLoading(false);
      const json = await res.json();
      console.log(`HandleSubmit data: ${json.data}`);
      const qRes = json.data.response;
      setQueryResponse(qRes);
    } else {
      setLoading(false);
      console.log("HandleSubmit errorred");
    }
  };

  let showCap = concept !== "" && topic.length > 3;

  async function determineUser() {
    const user = await getSupabaseUser(supabaseBrowserClient);
    setUser(user);
  }

  useEffect(() => {
    determineUser();
  }, []);

  return (
    <div className="flex flex-col p-4 items-center justify-center w-screen md:w-full">
      <div className="flex flex-col pt-2 md:mb-6 pb-4">
        <h4 className="text-black font-semibold text-lg md:text-2xl pt-4 pb-1">
          Instructions
        </h4>
        <p className="text-gray-600">In 3 simple steps:</p>
        {showCap ? (
          <AcademicCapIcon
            onClick={handleSubmit}
            className="w-6 h-6 md:w-10 md:h-10 text-slate-700 absolute right-8 animate-bounce md:cursor-pointer"
          />
        ) : null}

        <ol>
          <li className="text-black pt-4 pb-1">
            1. Enter the topic you wish to learn in the Topic box
          </li>
          <li className="text-black">
            2. Select a concept that you want used to explain the topic to you
          </li>
          <li className="text-black">
            3. Tap on the bouncing academic cap to start learning 🦸
          </li>
        </ol>
        <div className="border border-slate-300 md:w-64 md:mb-4 mt-2 md:mt-3 md:ml-12" />
        {!user ? (
          <p className="text-gray-400 text-sm md:ml-20">
            Sign in to access all features..
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full md:-mt-6">
        <form className="md:p-2">
          <div className="flex justify-center h-20 p-2 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
            <input
              className="shadow appearance-none border rounded w-72 md:w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
              id="topic-field"
              maxLength={30}
              name="topic-field"
              type="text"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
              placeholder="Topic you want to learn"
            />
          </div>
          <div className="flex justify-center h-20 p-2 mt-4 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
            <select
              id="concepts"
              onChange={(e) => setConcept(e.target.value)}
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
        </form>

        <div className="flex justify-center p-6 text-6xl w-full h-40 md:w-full md:h-72 bg-gray-100 border-2 border-gray-300 rounded-xl">
          3
          {user ? (
            <FireIcon className="w-6 h-6 md:w-10 md:h-10" />
          ) : (
            <p className="text-gray-400 text-xs md:absolute md:right-8">
              Sign in to access all features..
            </p>
          )}
          {queryResponse ? (
            <p>{queryResponse}</p>
          ) : (
            <p className="text-slate-300 text-sm md:text-xl md:mt-24">
              AI Response here..
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
