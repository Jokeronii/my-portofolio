export default function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL & NoSQL', 'ExpressJS'];

  return (
    <section id="skills" className="py-20 font-mono">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
