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

const recipientByKind: Record<FormKind, string> = {
  general: "info@astravoxtech.uk",
  technology: "info@astravoxtech.uk",
  education: "info@astravoxtech.uk",
  "digital-growth": "info@astravoxtech.uk",
  careers: "info@astravoxtech.uk",
};

const subjectByKind: Record<FormKind, string> = {
  general: "Astravox website enquiry",
  technology: "Astravox Technology enquiry",
  education: "Astravox Education enquiry",
  "digital-growth": "Astravox Digital Growth enquiry",
  careers: "Mobile Software Engineer application",
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

    const body = Object.entries({ kind, ...data })
      .filter(([key]) => key !== "website" && key !== "Consent")
      .map(([key, value]) => `${key}: ${String(value || "").trim() || "-"}`)
      .join("\n");
    const mailto = `mailto:${recipientByKind[kind]}?subject=${encodeURIComponent(subjectByKind[kind])}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("success");
    window.dispatchEvent(new CustomEvent("astravox:event", { detail: `${kind}_enquiry_started` }));
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
          Your email app should open now. Please review the message and press send.
        </p>
      )}
      {status === "error" && <p className="muted">{errorMessage}</p>}
      {kind === "careers" && (
        <p className="muted">
          The form opens an email draft. Attach your CV there, or email your application and CV to{" "}
          <a href="mailto:info@astravoxtech.uk">info@astravoxtech.uk</a>.
        </p>
      )}
    </form>
  );
}
