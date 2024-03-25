"use client";

import SearchIcon from "@/components/assets/SearchIcon";
import { useDebounce } from "@/hooks/useDebounce";
import { getDocumentLink } from "@/utils/doc-util";
import Link from "next/link";
import { useState } from "react";

function Search({ documents }) {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const doSearch = useDebounce((keyword) => {
    const filteredDocuments = documents.filter((document) => {
      return document.title.toLowerCase().includes(keyword.toLowerCase());
    });

    setLoading(false);
    setSearchResult(filteredDocuments);
  }, 500);

  function handleSearch(e) {
    const value = e.target.value;

    setLoading(true);
    setSearchText(value);

    doSearch(value);
  }

  return (
    <>
      <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <SearchIcon />

          <input
            type="input"
            value={searchText}
            onInput={handleSearch}
            placeholder="Search..."
            className="flex-1 focus:border-none focus:outline-none"
          />
          <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
            <kbd className="font-sans">Ctrl </kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        </button>

        {searchText && searchText.trim() && (
          <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white px-4 py-2 shadow">
            {loading ? (
              <div className="!text-lg text-gray-500 pb-2">Searching...</div>
            ) : (
              <>
                <p className="!text-lg text-gray-500 pb-2">
                  Showing results for{" "}
                  <span className="font-semibold">{`"${searchText}"`}</span>
                </p>
                <ul role="list" className="[&>*]:py-2">
                  {searchResult.map((document) => (
                    <li key={document.id} className="border-t border-gray-100">
                      <Link
                        onClick={() => setSearchText("")}
                        href={getDocumentLink(document)}
                        className="transition-all text-emerald-500 hover:text-emerald-600"
                      >
                        &#128279; {document.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
        <div className="flex gap-4">
          <div className="contents lg:hidden">
            <button
              type="button"
              className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
              aria-label="Find something..."
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
