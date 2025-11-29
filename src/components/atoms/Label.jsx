export default function Label({ children }) {
  return (
    <>
      <label className="text-white text-sm mb-1 block md:font-medium md:text-lg">
        {children}
      </label>
    </>
  );
}
