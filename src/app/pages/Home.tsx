import { useState } from "react";
import { Check, ChevronDown, ChevronRight, Focus, History, ImagePlus, Lightbulb, Mail, ScanLine, Share2, Sparkles } from "lucide-react";
import { analyze, app, faq, features, flow, plan, results, site, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import MailForm from "../components/MailForm";

const icons = { spark: Sparkles, advice: Lightbulb, upload: ImagePlus, focus: Focus, history: History, share: Share2 };

/** S01 — giant name behind the phone, as the reference's hero; the line under it is the app's own header. */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <img className="hero__marks" src={img("/images/marks.png")} alt="" width={110} height={30} />
      <h1 id="hero-title" className="hero__title">
        <span className="hero__line">AI Chat</span>
        <span className="hero__line">Scanner</span>
      </h1>
      <Reveal className="hero__phone">
        <img src={img("/images/phone-history.webp")} alt="AI Chat Scanner home screen with the scanning history of your chats" width={380} height={821} />
      </Reveal>
      <p className="hero__by">
        Powered by <b>{site.poweredBy}</b>
      </p>
    </section>
  );
}

/** S02 — the reference's intro card: glowing icon, gradient headline, CTA. */
function Intro() {
  return (
    <section className="card intro" id="how">
      <img className="intro__icon" src={img("/images/app-icon.png")} alt="" width={96} height={96} />
      <Reveal as="h2" className="h-hero grad intro__title">
        Spot red flags
        <br />
        in your chats
      </Reveal>
      <Reveal as="p" className="lead intro__lead" delay={150}>
        Scan a chat screenshot to spot patterns that may signal unhealthy communication. AI chat analysis for iPhone.
      </Reveal>
      <Btn href={app.url}>Download on the App Store</Btn>
      <p className="note">{app.trialDays}‑day free trial · then {app.weekly} per week</p>
    </section>
  );
}

/** S03 — phone + headline + two points (reference: "Context Understanding"). */
function Analyze() {
  return (
    <section className="card analyze">
      <div className="analyze__phone">
        <img src={img("/images/phone-scan-chat.webp")} alt="A chat screenshot being scanned" width={380} height={821} loading="lazy" />
      </div>
      <div className="analyze__text">
        <h2 className="h-sec">Make sense of your chats</h2>
        <p className="body-l">Let AI review your chat’s tone and context to help you see the conversation clearly.</p>
        <div className="analyze__pts">
          {analyze.map((a) => {
            const I = icons[a.icon as keyof typeof icons];
            return (
              <div key={a.title}>
                <I className="ico" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="h-item">{a.title}</h3>
                <p className="body-m">{a.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** S04 — four points in one card (reference: Auto‑Summarization grid). */
function Features() {
  return (
    <section className="card grid4" id="features" aria-label="Features">
      {features.map((f) => {
        const I = icons[f.icon as keyof typeof icons];
        return (
          <div key={f.title} className="grid4__item">
            <I className="ico" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="h-item">{f.title}</h3>
            <p className="body-s">{f.text}</p>
          </div>
        );
      })}
    </section>
  );
}

/** The app's history row, rebuilt in HTML so it stays sharp. */
function Row({ tone, title, i }: { tone: string; title: string; i: number }) {
  return (
    <div className={`hrow hrow--${tone}`} style={{ ["--i" as string]: i }}>
      <span className="hrow__thumb" aria-hidden="true" />
      <span className="hrow__txt">
        <b>{title}</b>
        <span>Scanned today</span>
      </span>
      <span className="hrow__dot" aria-hidden="true" />
      <ChevronRight className="hrow__chev" aria-hidden="true" />
    </div>
  );
}

/** S05 — two half cards with UI pieces on top (reference: Productivity / Writing). */
function Pair() {
  return (
    <div className="pair">
      <section className="card half">
        <div className="half__ui rows" aria-hidden="true">
          {results.map((r, i) => <Row key={r.title} tone={r.tone} title={r.title} i={i} />)}
        </div>
        <h2 className="h-half">Real-time red flags</h2>
        <p className="body-m half__p">Every chat gets a clear label (healthy, room for improvement or abusive) and stays in your scanning history.</p>
      </section>
      <section className="card half">
        <div className="half__ui result" aria-hidden="true">
          <span className="result__hd">Result</span>
          <p>Abusive relationships involve patterns of controlling, manipulative, or harmful behavior by one partner toward another.</p>
          <div className="result__advice">
            <span className="result__pill"><Sparkles strokeWidth={1.6} /> AI Advice</span>
            <p>If you or someone you know is affected, reaching out to a trusted person or helpline is an important first step toward safety and healing.</p>
          </div>
        </div>
        <h2 className="h-half">Find clarity in your relationships</h2>
        <p className="body-m half__p">Get insights and advice from your chats to help you choose your next step.</p>
      </section>
    </div>
  );
}

/** S06 — beams card (reference: light streaks behind a phone), in the app's red. */
function Beams() {
  return (
    <section className="card beams" aria-label="Scanning your chat">
      <span className="beam beam--a" aria-hidden="true" />
      <span className="beam beam--b" aria-hidden="true" />
      <span className="beam beam--c" aria-hidden="true" />
      <img className="beams__phone" src={img("/images/phone-scanning.webp")} alt="Scanning your chat: image captured, analyzing 2.4M chats examples, comparing best matches, preparing advices" width={380} height={821} loading="lazy" />
    </section>
  );
}

/** S07 — tabs that really swap the phone screen (reference: three pills + phone card). */
function Flow() {
  const [cur, setCur] = useState(0);
  return (
    <div className="flow">
      <div className="flow__tabs" role="tablist" aria-label="How a scan works">
        {flow.map((f, i) => (
          <button
            key={f.label}
            role="tab"
            id={`tab-${i}`}
            aria-selected={cur === i}
            aria-controls="flow-panel"
            className={`flow__tab${cur === i ? " is-on" : ""}`}
            onClick={() => setCur(i)}
          >
            <span className="flow__label">{f.label}</span>
            <span className="flow__text">{f.text}</span>
          </button>
        ))}
      </div>
      <div className="card flow__card" id="flow-panel" role="tabpanel" aria-labelledby={`tab-${cur}`}>
        {flow.map((f, i) => (
          <img
            key={f.img}
            className={`flow__img${cur === i ? " is-on" : ""}`}
            src={img(f.img)}
            alt={cur === i ? f.alt : ""}
            aria-hidden={cur !== i}
            width={380}
            height={821}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

/** S08 — two cards where the reference had testimonials: how to start + what happens to your chat. */
function StartAndData() {
  return (
    <div className="pair">
      <section className="card duo">
        <h2 className="h-duo">Start in three steps</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              {i === 0 ? (
                <img className="steps__icon" src={img("/images/app-icon.png")} alt="" width={44} height={44} loading="lazy" />
              ) : (
                <span className="steps__n" aria-hidden="true">{i + 1}</span>
              )}
              <div>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="card duo">
        <h2 className="h-duo">Your chat, used only for the scan</h2>
        <p className="body-m">
          To generate results, the content you provide, including text and images, is securely sent to the app’s AI processing
          provider (OpenAI). The data is used solely to produce AI-generated responses.
        </p>
        <p className="body-m">
          The app asks before the first scan, and uses Camera and Photos access only to upload pictures of your chats for analysis.
        </p>
      </section>
    </div>
  );
}

/** S09 — FAQ in the reference's "integrations" card: title left, list right. No inner scroll. */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="card faq" id="faq">
      <div className="faq__intro">
        <h2 className="h-duo">Questions, answered</h2>
        <p className="body-m">Scanning, results, your data and the subscription. Anything else? Write to us.</p>
        <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="faq__list">
        {faq.map((f, i) => {
          const on = open === i;
          return (
            <div className={`qa${on ? " is-on" : ""}`} key={f.q}>
              <h3>
                <button aria-expanded={on} aria-controls={`qa-${i}`} id={`qb-${i}`} onClick={() => setOpen(on ? null : i)}>
                  <span>{f.q}</span>
                  <ChevronDown className="qa__chev" aria-hidden="true" />
                </button>
              </h3>
              <div className="qa__a" id={`qa-${i}`} role="region" aria-labelledby={`qb-${i}`} hidden={!on}>
                <p>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** S10 — the reference's two pricing cards: the real plan from the paywall + a contact card. */
function PlanAndContact() {
  return (
    <div className="pair">
      <section className="card price">
        <span className="badge" aria-hidden="true"><ScanLine /></span>
        <p className="price__n">{app.weekly}</p>
        <h2 className="h-price">per week after a {app.trialDays}‑day free trial</h2>
        <p className="body-m muted">Billed through your Apple ID. Cancel anytime in Settings.</p>
        <ul className="ticks">
          {plan.map((p) => (
            <li key={p}><Check aria-hidden="true" /> {p}</li>
          ))}
        </ul>
        <Btn href={app.url} className="price__btn">Start free trial</Btn>
      </section>
      <section className="card price" id="contact">
        <span className="badge" aria-hidden="true"><Mail /></span>
        <h2 className="h-price">Contact us</h2>
        <p className="body-m muted">Questions about scans, results or billing: we read every message.</p>
        <MailForm
          subject={`${site.brand}: message`}
          submit="Send message"
          fields={[
            { name: "topic", label: "Topic", options: ["Scanning a chat", "Results & advice", "Subscription & billing", "Privacy request", "Something else"] },
            { name: "message", label: "Message", textarea: true, required: true },
          ]}
        />
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="wrap stack">
        <Intro />
        <Analyze />
        <Features />
        <Pair />
        <Beams />
        <Flow />
        <StartAndData />
        <Faq />
        <PlanAndContact />
      </div>
    </>
  );
}
