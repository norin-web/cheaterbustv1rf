import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

const nav = [
  { hash: "how", label: "How it works" },
  { hash: "features", label: "Features" },
  { hash: "faq", label: "FAQ" },
  { hash: "contact", label: "Contact" },
];

/** Three floating pills as in the reference: logo · anchors · download. Always in place, never hides. */
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    // lock the page on <html>, not <body> — body overflow unsticks the header
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="header">
        <Link to="/" className="pill logo" aria-label={`${site.brand} home`}>
          <img src={img("/images/app-icon.png")} alt="" width={30} height={30} />
          <span>{site.brand}</span>
        </Link>
        <nav className="pill header__nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.hash} to={{ pathname: "/", hash: n.hash }} className="navlink">
              {n.label}
            </Link>
          ))}
        </nav>
        <Btn href={app.url} variant="dark" size="sm" className="pill header__cta">
          <span className="only-wide">Download</span>
          <span className="only-narrow">Get</span>
        </Btn>
        <button
          className={`pill burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mmenu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </header>
      <div id="mmenu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        {nav.map((n) => (
          <Link key={n.hash} to={{ pathname: "/", hash: n.hash }} className="mmenu__link" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <Btn href={app.url}>Download on the App Store</Btn>
      </div>
    </>
  );
}
