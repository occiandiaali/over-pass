"use client";

import { useState } from "react";

import useSupaClient from "@/app/utils/supabase-accessors/client-init";

export default function LoginLinkComponent({ user }: any) {
  // [TODO]: Fix this user typing!
  const frontendUrl = ""; // process.env?
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const signInWithMagicLink = async (email: string) => {
    setLoading(true);
    const { data, error } = await useSupaClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: frontendUrl || "http://localhost:3000",
      },
    });
    if (error) {
      setLoading(false);
      console.log("Sigin err: ", error);
    }
    if (data) {
      setIsRegistered(true);
      setLoading(false);
      console.log("Signin data: ", data);
    }
  };

  return (
    <>
      {!user ? (
        <div className="flex flex-col justify-center items-start gap-5">
          {isRegistered ? (
            <p className="text-slate-700 font-semibold">
              Open {email} for a magic link to complete this process
            </p>
          ) : null}
          <h1 className="text-lg font-bold">Sign in with Magic Link</h1>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-input w-full max-w-xs"
          />
          <button
            onClick={() => signInWithMagicLink(email)}
            className={`btn ${loading ? "loading.." : ""}`}
          >
            Get Magic Link
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg font-semibold">Hi, {user?.user?.email}</h3>
          <p className="text-md">It is a beautiful day. Welcome.</p>
        </div>
      )}
    </>
  );
}
