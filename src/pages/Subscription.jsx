import NavbarMobile from "../components/molecules/NavbarMobile";

function Subscription() {
  <>
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />
      <main className="px-4 md:px-24 py-8 flex-1">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold md:text-4xl">Profile Saya</h1>
              <p className="text-gray-300 mb-6 mt-2">Kelola data profil</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </>;
}

export default Subscription;
