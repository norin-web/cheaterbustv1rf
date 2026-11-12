import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="wrap">
      <div className="card nf">
        <p className="nf__code" aria-hidden="true">404</p>
        <h1 className="h-sec">This page doesn’t exist</h1>
        <p className="lead">The link may be old or mistyped.</p>
        <Btn to="/" variant="dark">Back to home</Btn>
      </div>
    </section>
  );
}
