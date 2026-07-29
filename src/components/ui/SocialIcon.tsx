import { AtSign, Briefcase, FolderGit2, Globe, Mail, MessageCircle } from "lucide-react";

import type { SocialLink } from "@/content/types";

/**
 * Brand marks were removed from lucide v1, so these are deliberately generic
 * glyphs rather than hand-drawn logo paths — a slightly-wrong GitHub mark on
 * your portfolio is worse than a clean neutral icon. Every use pairs the icon
 * with a real text label, so nothing here depends on logo recognition.
 *
 * If you want the official marks, drop the SVGs from simple-icons (CC0) into
 * this file and swap the map below. Nothing else needs to change.
 */
const icons = {
  github: FolderGit2,
  linkedin: Briefcase,
  email: Mail,
  whatsapp: MessageCircle,
  twitter: AtSign,
  website: Globe,
} as const;

/** Human-readable names, used for accessible labels. */
export const socialNames: Record<SocialLink["id"], string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
  whatsapp: "WhatsApp",
  twitter: "X",
  website: "Web",
};

export function SocialIcon({ id, size = 20 }: { id: SocialLink["id"]; size?: number }) {
  const Icon = icons[id];
  return <Icon size={size} aria-hidden />;
}
