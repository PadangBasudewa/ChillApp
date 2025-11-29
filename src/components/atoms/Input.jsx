export default function Input({ type = "text", ...props }) {
  return (
    <>
      <input
        type={type}
        {...props}
        className="w-full px-3 py-2 border border-[#E7E3FC3B] rounded-xl text-[#C1C2C4] text-[10px] md:py-3 md:px-5 md:text-[16px] md:rounded-3xl"
      />
    </>
  );
}
