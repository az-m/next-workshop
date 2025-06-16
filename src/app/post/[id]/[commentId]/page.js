export default async function CommentPage({ params }) {
  const slug = await params;
  console.log(slug);
  return (
    <>
      <h2>
        Post Page {slug.id}, Comment ID {slug.commentId}
      </h2>
    </>
  );
}
