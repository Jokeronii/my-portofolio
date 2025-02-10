import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Chat-Api',
      description: 'Backend API for a chat application built with Node.js, Express, and MongoDB',
      link: 'https://gitlab.com/tendavid2/chat-api',
    },
    {
      title: 'Todo App',
      description: 'A simple todo app built with React and Tailwind CSS',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 font-mono">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={project.link}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
