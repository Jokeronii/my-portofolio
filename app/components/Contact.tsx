import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 font-mono">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <Link href={`mailto:tendavid2@gmail.com`}>
        <Mail size={48} className="mx-auto" />
      </Link>
    </section>
  );
}
