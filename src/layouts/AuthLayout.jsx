export default function AuthLayout({ bg, children }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="bg-[#181A1CD6] backdrop-blur-md p-6 rounded-2xl w-full max-w-sm 
      md:max-w-md lg:max-w-lg md:p-10 lg:p-12"
      >
        {children}
      </div>
    </div>
  );
}
