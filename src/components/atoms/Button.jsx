export default function Button({ children, className = "", ...rest }) {
  return (
    <>
      <button
        {...rest}
        className={`w-full bg-[#3D4142] border border-[#E7E3FC3B] text-white font-semibold py-2 text-xs rounded-xl md:rounded-3xl active:scale-[.98] hover:cursor-pointer ${className}`}
      >
        {children}
      </button>
    </>
  );
}
