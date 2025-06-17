import Link from "next/link";
import { db } from "@/utils/dbconnection";

export const metadata = {
  title: "Posts - Next.js",
  description: "A simple blog built with Next.js",
};

export default async function PostsPage({ searchParams }) {
  const queryStr = await searchParams;
  const posts = (
    await db.query(
      `SELECT posts.id, posts.title, posts.content, categories.name AS category FROM posts JOIN categories ON category_id = categories.id`
    )
  ).rows;

  // reverse is an ARRAY function that does what it says
  //   if (queryStr.sort === "desc") {
  //     posts.reverse;
  //   }

  // localeCompare is a STRING function - use to sort alphabetically
  //   if (queryStr.sort === "asc") {
  //     data.sort((a, b) => {
  //       return a.title.localeCompare(b.title);
  //     });
  //   } else if (queryStr.sort === "desc") {
  //     data.sort((a, b) => {
  //       return b.title.localeCompare(a.title);
  //     });
  //   }

  // to sort numerically:
  if (queryStr.sort === "asc") {
    posts.sort((a, b) => {
      return a.id - b.id;
    });
  } else if (queryStr.sort === "desc") {
    posts.sort((a, b) => {
      return b.id - a.id;
    });
  }

  return (
    <div>
      <h2>Posts</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> |{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.title} | {post.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
