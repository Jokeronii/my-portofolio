export default function Footer() {
  return (
    <footer className="bg-background border-t py-4">
      <div className="container mx-auto px-4 text-center font-mono">
        <p>&copy; {new Date().getFullYear()} Honma. All rights reserved.</p>
      </div>
    </footer>
  );
}
