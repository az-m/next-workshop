// import headerStyles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <h1>The App</h1>
      <nav className="flex flex-row gap-2">
        <Link
          href={"/"}
          className="m-2 p-4 font-semibold text-lg hover:text-blue-300"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="m-2 p-4 font-semibold text-lg hover:text-blue-300" // [] over-rides
        >
          About
        </Link>
        <Link
          href={"/posts"}
          className="m-2 p-4 font-semibold text-lg hover:text-blue-300"
        >
          Posts
        </Link>
        <Link
          href={"/posts/new"}
          className="m-2 p-4 font-semibold text-lg hover:text-blue-300"
        >
          New post
        </Link>
      </nav>
    </header>
  );
}
