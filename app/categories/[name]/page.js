import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

import ContentDisplay from "@/components/ContentDisplay";
import NotFound from "@/components/NotFound";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name);

  return (
    <>
      {matchedDocs[0]?.id ? (
        <ContentDisplay documentId={matchedDocs[0].id} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default CategoryPage;
