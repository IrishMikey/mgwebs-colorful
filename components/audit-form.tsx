"use client";

import { useActionState } from "react";
import { requestAudit, type AuditState } from "@/actions/requestAudit";
import { buttonClasses } from "./button";

const initialState: AuditState = { status: "idle" };

const inputClasses =
  "mt-2 block min-h-13 w-full rounded-input border border-input bg-white px-4 text-[17px] text-ink placeholder:text-muted aria-invalid:border-coral";

type FieldProps = {
  name: "name" | "website" | "contact";
  label: string;
  type: string;
  autoComplete: string;
  placeholder?: string;
  inputMode?: "url" | "email" | "text";
  state: AuditState;
};

function Field({ name, label, state, ...input }: FieldProps) {
  const error = state.errors?.[name];
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="text-[15px] font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required
        defaultValue={state.values?.[name]}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClasses}
        {...input}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-[15px] text-coral">
          <span aria-hidden="true">! </span>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function AuditForm() {
  const [state, formAction, pending] = useActionState(
    requestAudit,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div role="status" aria-live="polite" className="py-10 text-center">
        <p className="font-display text-[26px] leading-[1.3] text-ink">
          Thanks — I’ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <Field
        name="name"
        label="Name"
        type="text"
        autoComplete="name"
        state={state}
      />
      <Field
        name="website"
        label="Website address"
        type="url"
        inputMode="url"
        autoComplete="url"
        placeholder="mybusiness.ie"
        state={state}
      />
      <Field
        name="contact"
        label="Email or phone"
        type="text"
        inputMode="text"
        autoComplete="email"
        state={state}
      />

      {/* Honeypot: hidden from people and screen readers, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p aria-live="polite" className="text-[15px] text-coral empty:hidden">
        {state.status === "error" ? state.message : null}
      </p>

      <button
        type="submit"
        disabled={pending}
        className={buttonClasses("primary", "mt-1 min-h-14 w-full disabled:opacity-70")}
      >
        {pending ? "Sending…" : "Send my free speed check"}
      </button>
      <p className="text-center text-sm text-muted">
        Reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
