import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";

const titles: Record<string, string> = {
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};
// old-style page links open the matching block of the one-page site
const anchors: Record<string, string> = { "/support": "faq", "/contact": "contact", "/feedback": "contact" };

export default function Root() {
  const { pathname, hash } = useLocation();
  const path = pathname.replace(/\/$/, "");

  useEffect(() => {
    const id = hash.slice(1) || anchors[path];
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = titles[path];
    document.title = t ? `${t} | ${site.brand}` : `${site.brand}: chat analysis for iPhone`;
  }, [pathname, hash, path]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
