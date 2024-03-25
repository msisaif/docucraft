import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="mr-2 text-sm inline-flex justify-center items-center gap-0.5"
    >
      <span>#</span>
      <span>{tag}</span>
    </Link>
  );
};

export default Tag;
