import chillLogo from "../../assets/images/logo_footer.png";
import LogoFooterDesktop from "../../assets/images/logo_footer_desktop.png";

export default function FooterBrand() {
  return (
    <>
      <div className="md:hidden flex items-center gap-3 px-4">
        {/* mobile */}
        <img src={chillLogo} alt="Chill Logo" />
      </div>
      {/*desktop*/}
      <div className="hidden md:flex justify-center">
        <img src={LogoFooterDesktop} alt="" className="mx-auto" />
      </div>
    </>
  );
}
