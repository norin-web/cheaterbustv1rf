import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

/** Shared on every page, as in the reference: QR card → giant wordmark → links row. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Reveal className="card qr">
          <div className="qr__frame" aria-hidden="true">
            <img className="qr__code" src={img("/images/qr.svg")} alt="" width={225} height={225} loading="lazy" />
            <img className="qr__icon" src={img("/images/app-icon.png")} alt="" width={120} height={120} loading="lazy" />
          </div>
          <div className="qr__text">
            <h2 className="qr__title">
              <span className="only-wide">Scan to get {site.brand} on your iPhone</span>
              <span className="only-narrow">Get {site.brand} on your iPhone</span>
            </h2>
            <p className="qr__sub">
              <span className="only-wide">Point your iPhone camera at the code to open the App Store page. </span>
              Start with a {app.trialDays}‑day free trial.
            </p>
            <Btn href={app.url} variant="dark" size="sm">Download on the App Store</Btn>
          </div>
        </Reveal>

        <p className="wordmark" aria-hidden="true">{site.brand}</p>

        <div className="footer__row">
          <nav className="footer__links" aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to={{ pathname: "/", hash: "faq" }}>Support</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
          <div className="footer__copy">
            <span>
              © {site.year} {site.operator || site.brand}. All rights reserved.
            </span>
            <span>Powered by {site.poweredBy}</span>
          </div>
          <p className="footer__note">
            For people aged 18+. AI-generated assessments are provided for general informational and personal reflection
            purposes and may be inaccurate. If you are experiencing abuse, threats, or immediate danger, seek assistance from
            qualified professionals or appropriate emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
}
