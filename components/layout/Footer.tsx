import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Capitiro. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground md:text-left">
            Not financial advice, for educational purposes only.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            About
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="/disclaimer"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            Disclaimer
          </Link>
        </nav>
      </div>
    </footer>
  );
}
