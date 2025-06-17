export async function generateMetadata({ params }, parent) {
  const id = (await params).commentId;

  return { title: `Comment no. ${id}` };
}

export default async function CommentPage({ params }) {
  const slug = await params;

  return (
    <>
      <h2>
        Post Page {slug.id}, Comment ID {slug.commentId}
      </h2>
    </>
  );
}
