"use client";

import { FormEvent, useState } from "react";

type FormKind = "general" | "technology" | "education" | "digital-growth" | "careers";

const fields = {
  general: ["Name", "Email", "Phone", "Company or university", "Service category"],
  technology: ["Name", "Business email", "Company", "Project type", "Estimated budget range", "Expected timeline"],
  education: ["Student name", "Email", "Current country", "Current qualification", "Intended study level", "Preferred destination", "Intended intake"],
  "digital-growth": ["Name", "Business email", "Company", "Website", "Main marketing goal", "Required service", "Approximate monthly budget range"],
  careers: ["Full Name", "Email", "Phone", "LinkedIn URL", "GitHub/Portfolio URL"],
};

export function ContactForm({
  kind = "general",
  messageLabel = "Message",
  submitLabel = "Send Enquiry",
}: {
  kind?: FormKind;
  messageLabel?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const emailValue = String(data.Email || data["Business email"] || "").trim();
    const messageValue = String(data.Message || "").trim();
    if (!emailValue.includes("@")) {
      setErrorMessage("Please include a valid email address.");
      setStatus("error");
      return;
    }
    if (!messageValue) {
      setErrorMessage("Please include a short message.");
      setStatus("error");
      return;
    }

    try {
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
        const result = await response.json().catch(() => null);
        setErrorMessage(result?.error || "Please check the required fields and try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please email info@astravoxtech.uk if the form does not send.");
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
            <input id={label.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")} name={label} required={label.includes("Name") || label.includes("Email")} />
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor={`${kind}-message`}>{messageLabel}</label>
        <textarea id={`${kind}-message`} name="Message" required />
      </div>
      <label className="check">
        <input name="Consent" required type="checkbox" /> I agree that Astravox
        can use my details to respond to this enquiry. I will not submit highly
        sensitive documents through this form.
      </label>
      <button className="button button-primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Sending..." : submitLabel}
      </button>
      {status === "success" && (
        <p className="muted">
          Thank you. Your enquiry has been sent to info@astravoxtech.uk.
        </p>
      )}
      {status === "error" && <p className="muted">{errorMessage}</p>}
      {kind === "careers" && (
        <p className="muted">
          Please email your CV separately to{" "}
          <a href="mailto:info@astravoxtech.uk">info@astravoxtech.uk</a>.
        </p>
      )}
    </form>
  );
}
