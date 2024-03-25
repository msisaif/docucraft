import SearchSvg from "@/assets/icons/search.svg";
import Image from "next/image";

function SearchIcon() {
  return (
    <>
      <Image src={SearchSvg} alt="search" className="h-5 w-5" />
    </>
  );
}

export default SearchIcon;
