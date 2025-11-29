export default function GoogleButton() {
  return (
    <button
      className="w-full flex gap-4 items-center justify-center 
  bg-transparent text-white py-2 md:py-3 lg:py-3 
  border border-[#E7E3FC3B] rounded-xl
  text-xs md:text-base md:font-semibold md:px-5 md:rounded-3xl lg:text-base active:scale-[.98]"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt=""
        className="w-2.5 h-2.5 md:w-4 md:h-4"
      />
      <span className="text-xs">Masuk Dengan Google</span>
    </button>
  );
}
