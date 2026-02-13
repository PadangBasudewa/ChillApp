function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="bg-[#23272A] rounded-full p-4">{icon}</div>
      <p className="text-sm md:text-base text-gray-300">{title}</p>
    </div>
  );
}

export default Feature;
