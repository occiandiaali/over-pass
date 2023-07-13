import Image from "next/image";
import LoadingDots from "../../../components/icons/loading-dots";

export default function Loading() {
  return (
    <>
      {/* <div className="pt-20 h-10 w-48 animate-pulse rounded-md bg-stone-100 dark:bg-stone-800" /> */}
      <div className="mt-24 ml-96 items-center justify-center">
        <Image
          src="/overpass-logo-wheat-bg.jpg"
          alt="logo"
          width={250}
          height={250}
          className="animate-pulse rounded-md"
        />
      </div>
      {/* <div className="flex h-full w-full items-center justify-center">
        <LoadingDots />
      </div> */}
      <div className="ml-96 items-center justify-center">
        <LoadingDots />
      </div>
    </>
  );
}
