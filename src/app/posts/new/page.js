import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server";
    // console.log("saving data ...");

    const data = {
      title: formData.get("title"),
      content: formData.get("content"),
      cat: formData.get("cat"),
    };

    await db.query(
      `INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3)`,
      [data.title, data.content, data.cat]
    );
    // console.log("Saved!");

    revalidatePath("posts");
    redirect("/posts");
  }

  return (
    <>
      <form action={handleSavePost}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="content">Content</label>
          <textarea name="content" />
          <label htmlFor="cat">Category</label>
          <input type="number" name="cat" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
