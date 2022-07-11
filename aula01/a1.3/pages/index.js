import Link from "next/link";

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <ul>
        <li>
          <Link href='/posts/algum-id'>
            <a>Algum id</a>
          </Link>
        </li>

        <li>
          <Link href='/posts/algum-outro-id'>
            <a>Algum outro id</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage
