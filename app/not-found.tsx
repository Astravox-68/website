import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section dark" style={{ minHeight: "70vh" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="h1">Page not found</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          This page may have moved, or the service route is not available yet.
        </p>
        <Link className="button button-primary" href="/" style={{ marginTop: "1.4rem" }}>
          Go home
        </Link>
      </div>
    </section>
  );
}
