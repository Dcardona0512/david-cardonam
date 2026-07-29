"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";

/**
 * Copies the address to the clipboard with a brief confirmation.
 *
 * `aria-live` announces the change to screen readers, since a swapped icon is
 * invisible to them. The timeout is cleared on unmount so a fast navigation
 * can't set state on a gone component.
 */
export function CopyEmail({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (insecure context, permissions policy).
      // The address is visible as text right next to this button, so there is
      // nothing to recover from — staying silent beats a scary error.
    }
  }

  return (
    <Button variant="secondary" onClick={copy} type="button">
      {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </Button>
  );
}
