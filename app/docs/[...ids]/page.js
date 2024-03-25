import ContentDisplay from "@/components/ContentDisplay";
import NotFound from "@/components/NotFound";
import { getDocuments } from "@/lib/doc";
import { filterDocument } from "@/utils/doc-util";

function DocsPage({ params }) {
  const { ids } = params;

  const firstId = ids[0];
  const secondId = ids[1];

  const documents = getDocuments();

  const document = filterDocument(documents, firstId, secondId);

  return (
    <>
      {ids.length <= 2 && document ? (
        <ContentDisplay documentId={document.id} />
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default DocsPage;
