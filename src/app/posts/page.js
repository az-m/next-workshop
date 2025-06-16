import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  const queryStr = await searchParams;

  const response = await fetch("https://dummyjson.com/posts");
  const posts = await response.json();
  const data = posts.posts;

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
    data.sort((a, b) => {
      return a.id - b.id;
    });
  } else if (queryStr.sort === "desc") {
    data.sort((a, b) => {
      return b.id - a.id;
    });
  }

  return (
    <div>
      <h2>Posts</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> |{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
