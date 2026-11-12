import { Fragment, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import type { LegalDoc } from "../content/legal";
import Reveal from "./Reveal";

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("## ")) return <h2>{text.slice(3)}</h2>;
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet box so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal__caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

/** One big card, as on the reference's legal pages: title, then the verbatim text. */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="wrap legal-wrap">
      <article className="card legal">
        <h1 className="legal__title grad">{doc.title}</h1>
        <p className="legal__meta">
          {doc.updated && <span>Effective {doc.updated}</span>}
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link to={doc.other.to}>{doc.other.label}</Link>
        </p>
        {doc.body ? (
          <div className="legal__body">
            {doc.body.split(/\n{2,}/).map((b, i) => <Block key={i} text={b} />)}
          </div>
        ) : (
          <Reveal className="legal__body legal__pending">
            <p>
              The full {doc.title} of {site.brand} will be published on this page. Until then, questions about how the
              app handles your data or about your subscription can be sent to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Reveal>
        )}
      </article>
    </section>
  );
}
