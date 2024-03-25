import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

function getMatterResult(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents);
}

export function getDocuments() {
  const fileNames = fs.readdirSync(postsDirectory);

  const documents = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");

    const matterResult = getMatterResult(id);

    return {
      id,
      ...matterResult.data,
    };
  });

  return documents.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

export async function getDocumentContent(id) {
  const matterResult = getMatterResult(id);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...matterResult.data,
    contentHtml,
  };
}
