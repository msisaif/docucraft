import LogoImage from "@/assets/icons/logo.svg";
import Image from "next/image";

function ApplicationLogo() {
  return (
    <>
      <Image src={LogoImage} alt="Protocol" className="h-6 w-auto" />
    </>
  );
}

export default ApplicationLogo;
