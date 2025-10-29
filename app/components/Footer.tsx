import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 text-center text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Sharad Mishra. All rights reserved.</p>
        <div className="mt-2 text-sm">
          <Link 
            href="https://github.com/sharadm20/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            View Source on GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}