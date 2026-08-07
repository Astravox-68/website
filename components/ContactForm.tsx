"use client";

import { FormEvent, useState } from "react";

type FormKind = "general" | "technology" | "education" | "digital-growth";

const fields = {
  general: ["Name", "Email", "Phone", "Company or university", "Service category"],
  technology: ["Name", "Business email", "Company", "Project type", "Estimated budget range", "Expected timeline"],
  education: ["Student name", "Email", "Current country", "Current qualification", "Intended study level", "Preferred destination", "Intended intake"],
  "digital-growth": ["Name", "Business email", "Company", "Website", "Main marketing goal", "Required service", "Approximate monthly budget range"],
};

export function ContactForm({ kind = "general" }: { kind?: FormKind }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, ...data }),
    });
    if (response.ok) {
      setStatus("success");
      form.reset();
      window.dispatchEvent(new CustomEvent("astravox:event", { detail: `${kind}_enquiry_submitted` }));
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="form card" style={{ padding: "1.4rem" }} onSubmit={onSubmit}>
      <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <div className="grid-2">
        {fields[kind].map((label) => (
          <div className="field" key={label}>
            <label htmlFor={label.toLowerCase().replaceAll(" ", "-")}>{label}</label>
            <input id={label.toLowerCase().replaceAll(" ", "-")} name={label} required={label.includes("Name") || label.includes("Email")} />
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor={`${kind}-message`}>Message</label>
        <textarea id={`${kind}-message`} name="Message" required />
      </div>
      <label className="check">
        <input name="Consent" required type="checkbox" /> I agree that Astravox
        can use my details to respond to this enquiry. I will not submit highly
        sensitive documents through this form.
      </label>
      <button className="button button-primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
      {status === "success" && <p className="muted">Thank you. Your enquiry has been received for follow-up setup.</p>}
      {status === "error" && <p className="muted">Something went wrong. Please try again.</p>}
    </form>
  );
}
