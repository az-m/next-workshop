import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await response.json();

  return { title: post.title };
}

export default async function PostPage({ params }) {
  const slug = await params;
  const response = await fetch(`https://dummyjson.com/posts/${slug.id}`);
  const post = await response.json();

  return (
    <div>
      <h2>Post {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link href="/posts">Back to posts</Link>
    </div>
  );
}
