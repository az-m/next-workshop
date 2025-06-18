import Image from "next/image";
import smaug_img from "@/../public/images/smaug_par_david_demaret.jpg";

export const metadata = {
  title: "About - Next.js",
  description: "A simple blog built with Next.js",
};

export default function AboutPage() {
  return (
    <>
      <h2>This is the About Page</h2>
      <p>Is this in Nunito Sans?</p>
      <Image
        src={smaug_img}
        alt="Smaug the dragon on his golden horde"
        placeholder="blur"
        style={{ maxWidth: "500px" }}
      />
    </>
  );
}
