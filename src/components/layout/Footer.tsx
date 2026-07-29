import { ArrowUp } from "lucide-react";

import { SocialIcon, socialName } from "@/components/ui/SocialIcon";
import { socials } from "@/content/shared";
import type { Content } from "@/content/types";

export function Footer({ content, name }: { content: Content; name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-step--1 text-text-muted">
            © {year} {name}. {content.footer.rights}.
          </p>
          <p className="mt-1 font-mono text-[0.72rem] text-text-faint">
            {content.footer.builtWith}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-1">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  aria-label={socialName(social)}
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex rounded-full p-2.5 text-text-muted transition-colors hover:bg-surface-2 hover:text-accent"
                >
                  <SocialIcon id={social.id} size={18} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-step--1 text-text-muted transition-colors hover:border-line-strong hover:text-text"
          >
            <ArrowUp size={14} aria-hidden />
            {content.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
