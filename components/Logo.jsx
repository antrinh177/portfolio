import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-[28px] font-normal">
      An<span className="text-accent text-4xl">.</span>
    </Link>
  )
}

export default Logo