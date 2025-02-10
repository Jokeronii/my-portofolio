import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center font-mono">
        <div className="w-10"></div> {/* Spacer */}
        <Link href="https://github.com/Jokeronii">
          <Avatar>
            <AvatarImage src="https://github.com/Jokeronii.png" />
            <AvatarFallback>Honma</AvatarFallback>
          </Avatar>
        </Link>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#skills" className="hover:text-primary">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
