import ContentDisplay from "@/components/ContentDisplay";
import NotFound from "@/components/NotFound";
import { getDocuments } from "@/lib/doc";

function DefaultDocDisplay() {
  const documents = getDocuments();

  const firstDocument = documents[0];

  return (
    <>
      {firstDocument.id ? (
        <ContentDisplay documentId={firstDocument.id} />
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default DefaultDocDisplay;
