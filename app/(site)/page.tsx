import Image from "next/image";

export default function Main() {
  return (
    <div className="md:items-center p-8 mt-6">
      <h1 className="text-orange-600 md:text-5xl font-bold">
        Welcome to OverPass
      </h1>
      <div className="rounded p-4 mt-6">
        <Image
          src="/overpass-logo-wheat-bg.jpg"
          alt="OverPass"
          width={350}
          height={350}
          className="rounded"
        />
      </div>
      <div>
        <h2 className="md:text-xl font-bold">About</h2>
        <p>
          This web application uses AI to help marketing/advertisement teams
          seamlessly reach their goals. It makes it very easy to formulate new
          campaigns by helping teams come up with great ad copies and brand
          names, using the OpenAI tool.
          <br />
          Start by clicking on{" "}
          <span className="font-bold md:text-lg">Dashboard</span>
        </p>
      </div>
    </div>
  );
}
