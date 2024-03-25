import HamburgerImage from "@/assets/icons/hamburger.svg";
import Image from "next/image";

function HamburgerIcon() {
  return (
    <>
      <Image
        src={HamburgerImage}
        alt="Menu"
        className="w-4 stroke-zinc-900 dark:stroke-white"
      />
    </>
  );
}

export default HamburgerIcon;
