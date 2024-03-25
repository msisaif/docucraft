import ApplicationLogo from "@/components/assets/ApplicationLogo";
import HamburgerIcon from "@/components/assets/HamburgerIcon";
import SearchSection from "@/components/common/SearchSection";
import SideBar from "@/components/common/SideBar";
import { getDocuments } from "@/lib/doc";
import { formateDocuments } from "@/utils/doc-util";

function Header() {
  const documents = getDocuments();

  const { rootDocuments, groupSubDocuments } = formateDocuments(documents);

  console.log("header");

  return (
    <>
      <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
        <div className="hidden lg:flex">
          <a aria-label="Home" href="/">
            <ApplicationLogo />
          </a>
        </div>

        <div
          className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
          style={{ "--bg-opacity-light": 0.5, "--bg-opacity-dark": 0.2 }}
        >
          <div className="container flex h-14 items-center justify-between gap-12">
            <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

            <div className="flex items-center gap-5 lg:hidden">
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation"
              >
                <HamburgerIcon />
              </button>
              <a aria-label="Home" href="/">
                <ApplicationLogo />
              </a>
            </div>

            <SearchSection documents={documents} />
          </div>
        </div>

        <SideBar
          rootDocuments={rootDocuments}
          groupSubDocuments={groupSubDocuments}
        />
      </header>
    </>
  );
}

export default Header;
