export default function Seperator({ text }) {
  return (
    <div className="flex items-center gap-4 text-gray-300 my-2">
      <div className="bg-gray-400 flex-1"></div>
      <span className="text-xs">{text}</span>
      <div className="bg-gray-400 flex-1"></div>
    </div>
  );
}
