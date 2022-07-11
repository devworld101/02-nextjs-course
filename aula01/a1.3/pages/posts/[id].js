import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <p>
        Página post: <strong>{router.query.id}</strong>
      </p>
      <Link href='/'>
        <a>Go to Home</a>
      </Link>
    </div>
  );
}
