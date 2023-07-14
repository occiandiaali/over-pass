export default function Teams() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5">
      <input
        type="text"
        onChange={() => null}
        placeholder="Search.."
        className="input input-bordered input-info w-full max-w-xs mt-5 mb-5"
      />
    </div>
  );
}
