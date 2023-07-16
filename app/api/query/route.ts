import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const revalidate = 0;

// Algorithm
// 1. Get user input: topic to be understood, concept to use for ai explanation, email (if authenticated)
// 2. Fetch users favourites from db
// 3. Provide openai with topic and concept
// 4. Store ai response to Queries table in db
// 5. Use new query to update user's favourites in db
// 6. Display ai response in client

export async function POST(req: any, res: any) {
  const routeHandlerClient = createRouteHandlerClient({
    cookies,
  });
  // retrieve topic, concept, and email
  const { topic, concept, email } = await req.json();
  // AI prompt value
  const prompt = `you are an expert at explaining complex topics in simple terms
    using analogies. I will ask you to explain a topic or idea using 
    an analogy from sports, hobbies, historical stories, or everyday life.
    your response will be made up of two paragraphs, and won't contain any 
    filler language such as - sure, I can do that! or I hope this helps
    the first paragraph you provide will be a summary of your response
    the second paragraph will be more detailed. also, assume the topic to be 
    explained by you is related to chemistry, physics, biology, math, or technology - 
    explain ${topic} in simple terms using ${concept} as an analogy.
    `;
  // array that holds user's favourite responses
  let favsArr;
  let favsErr;
  if (!!email) {
    ({ data: favsArr, error: favsErr } = await routeHandlerClient
      .from("profiles")
      .select("favourites")
      .eq("email", email)
      .single());
  }

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.9,
  });

  const gptResponse = response.data.choices[0].message?.content;

  const { data, error } = await routeHandlerClient
    .from("queries")
    .insert([
      { topic, response: gptResponse, tags: [concept], concept: concept },
    ])
    .select("*")
    .single();

  if (error) {
    console.log(error);
    return NextResponse.error();
  }

  // update user's favs with new query id
  if (!!email) {
    const { data: userData, error: userError } = await routeHandlerClient
      .from("profiles")
      .update({
        favourites: favsArr?.favourites
          ? [...favsArr.favourites, data.id]
          : [data.id],
      })
      .eq("email", email);
  }
  // return NextResponse.json({
  //   data,
  // });
}
