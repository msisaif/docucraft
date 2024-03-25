"use client";

import { getDocumentLink } from "@/utils/doc-util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

function SideBar({ rootDocuments, groupSubDocuments }) {
  const [roots, setRoots] = useState([]);
  const [groups, setGroups] = useState({});

  const pathName = usePathname();

  useEffect(() => {
    let filteredRoots = [...rootDocuments];
    let filteredGroup = { ...groupSubDocuments };

    if (pathName.includes("/categories")) {
      const category = pathName.split("/")[2];

      filteredRoots = filteredRoots.filter((root) => {
        filteredGroup[root.id] = filteredGroup[root.id]?.filter(
          (doc) => doc.category === category
        );

        return (
          root.category === category ||
          filteredGroup[root.id]?.some((doc) => doc.category === category)
        );
      });
    }

    setRoots(filteredRoots);
    setGroups(filteredGroup);
  }, [groupSubDocuments, pathName, rootDocuments]);

  return (
    <>
      <nav className="hidden lg:mt-10 lg:block">
        <ul role="list" className="border-l border-transparent">
          {roots.map((document) => (
            <Fragment key={document.id}>
              <li className="relative pt-1">
                <Link
                  aria-current="page"
                  className="py-1 pl-4 pr-3 text-sm text-zinc-900 hover:underline underline-offset-2 decoration-[#10b981] hover:text-[#10b981]"
                  href={getDocumentLink(document)}
                >
                  <span
                    className={
                      getDocumentLink(document) === pathName
                        ? "text-[#10b981]"
                        : ""
                    }
                  >
                    {document.title}
                  </span>
                </Link>
                {groups[document.id]?.length > 0 && (
                  <ul role="list" style={{ opacity: 1 }}>
                    {groups[document.id].map((subDocument) => (
                      <Fragment key={subDocument.id}>
                        <li className="pt-1">
                          <Link
                            className="py-1 pl-7 pr-3 text-sm text-zinc-900 hover:underline underline-offset-2 decoration-[#10b981] hover:text-[#10b981]"
                            href={getDocumentLink(subDocument)}
                          >
                            <span
                              className={
                                getDocumentLink(subDocument) === pathName
                                  ? "text-[#10b981]"
                                  : ""
                              }
                            >
                              {subDocument.title}
                            </span>
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                )}
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
