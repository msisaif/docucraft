export function formateDocuments(documents) {
  const documentTrees = [];

  const rootDocuments = documents.filter((document) => !document.parent);

  const subDocuments = documents.filter((document) => document.parent);

  const groupSubDocuments = {};

  subDocuments.map((document) => {
    if (!groupSubDocuments[document.parent]) {
      groupSubDocuments[document.parent] = [];
    }

    groupSubDocuments[document.parent].push(document);
  });

  return {
    rootDocuments,
    groupSubDocuments,
  };
}

export function filterDocument(documents, firstId, secondId) {
  if (secondId) {
    return documents.find(
      (document) => document.id === secondId && document.parent === firstId
    );
  } else {
    return documents.find((document) => document.id === firstId);
  }

  return null;
}

export function getDocumentsByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocumentsByAuthor(docs, author) {
  return docs.filter((doc) => encodeURI(doc.author) === author);
}

export function getDocumentsByTag(docs, tag) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}

export function getDocumentLink(document) {
  let link = "/docs/";

  if (document.parent) {
    link += `${document.parent}/`;
  }

  link += `${document.id}`;

  return link;
}
