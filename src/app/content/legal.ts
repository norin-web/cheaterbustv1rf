// Privacy Policy and Terms of Use come from the owner and go here VERBATIM.
// Only markup may change: section headings become "## " lines, bullets "- ".
// Until the texts arrive the pages show a short notice instead (body: null).

export type LegalDoc = {
  title: string;
  updated: string;
  body: string | null;
  other: { to: string; label: string };
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  updated: "",
  body: null,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  updated: "",
  body: null,
  other: { to: "/privacy", label: "Privacy Policy" },
};
