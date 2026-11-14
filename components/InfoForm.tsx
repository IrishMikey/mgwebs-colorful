"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/info/actions";
import { SERVICES, BUDGETS, TIMELINES } from "@/lib/enquiry-options";
import { buttonClasses } from "./button";

const initialState: EnquiryState = { status: "idle" };

const pillClasses =
  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent inline-flex min-h-12 cursor-pointer items-center rounded-full border border-input px-4 text-[15px] font-medium text-ink transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-white hover:has-[:checked]:bg-accent";

function Pill({
  type,
  name,
  value,
  label,
  defaultChecked,
}: {
  type: "checkbox" | "radio";
  name: string;
  value: string;
  label: string;
  defaultChecked: boolean;
}) {
  return (
    <label className={pillClasses}>
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="sr-only"
      />
      {label}
    </label>
  );
}

function GroupError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="mt-2 text-[15px] text-coral">
      <span aria-hidden="true">! </span>
      {error}
    </p>
  );
}

export default function InfoForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialState,
  );
  const renderedAtInput = useRef<HTMLInputElement>(null);
  const sourceInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (renderedAtInput.current) {
      renderedAtInput.current.value = String(Date.now());
    }
    if (sourceInput.current) {
      const params = new URLSearchParams(window.location.search);
      sourceInput.current.value = params.get("src") || "direct";
    }
  }, []);

  if (state.status === "success") {
    return (
      <div role="status" aria-live="polite" className="py-6 text-center">
        <span
          aria-hidden="true"
          className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent"
        >
          <svg
            viewBox="0 0 20 20"
            className="size-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3.5 10.5 4 4 9-9" />
          </svg>
        </span>
        <p className="mt-5 font-display text-[28px] leading-[1.3] text-ink">
          Thanks, {state.values?.name?.split(/\s+/)[0] || "there"}.
        </p>
        <p className="mt-3 text-[17px] text-body">
          Check your inbox: I’ve sent you a link to book a call. I’ll also
          reply within 24 hours.
        </p>
        {state.bookingUrl ? (
          <a
            href={state.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("secondary", "mt-6")}
          >
            Book a call now
          </a>
        ) : null}
      </div>
    );
  }

  const fatalError = state.status === "error" && !state.errors;

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      <fieldset className="m-0 border-0 p-0">
        <legend className="text-[15px] font-medium text-ink">
          What do you need help with?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map((service) => (
            <Pill
              key={service}
              type="checkbox"
              name="services"
              value={service}
              label={service}
              defaultChecked={Boolean(
                state.values?.services?.includes(service),
              )}
            />
          ))}
        </div>
        <GroupError error={state.errors?.services} />
      </fieldset>

      <fieldset className="m-0 border-0 p-0">
        <legend className="text-[15px] font-medium text-ink">
          Rough budget
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {BUDGETS.map((budget) => (
            <Pill
              key={budget}
              type="radio"
              name="budget"
              value={budget}
              label={budget}
              defaultChecked={state.values?.budget === budget}
            />
          ))}
        </div>
        <GroupError error={state.errors?.budget} />
      </fieldset>

      <fieldset className="m-0 border-0 p-0">
        <legend className="text-[15px] font-medium text-ink">
          When do you want to start?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TIMELINES.map((timeline) => (
            <Pill
              key={timeline}
              type="radio"
              name="timeline"
              value={timeline}
              label={timeline}
              defaultChecked={state.values?.timeline === timeline}
            />
          ))}
        </div>
        <GroupError error={state.errors?.timeline} />
      </fieldset>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="name" className="text-[15px] font-medium text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className="mt-2 block min-h-13 w-full rounded-input border border-input bg-white px-4 text-[17px] text-ink placeholder:text-muted aria-invalid:border-coral"
          />
          {state.errors?.name ? (
            <p id="name-error" className="mt-2 text-[15px] text-coral">
              <span aria-hidden="true">! </span>
              {state.errors.name}
            </p>
          ) : null}
        </div>
        <div className="flex-1">
          <label htmlFor="email" className="text-[15px] font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className="mt-2 block min-h-13 w-full rounded-input border border-input bg-white px-4 text-[17px] text-ink placeholder:text-muted aria-invalid:border-coral"
          />
          {state.errors?.email ? (
            <p id="email-error" className="mt-2 text-[15px] text-coral">
              <span aria-hidden="true">! </span>
              {state.errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <input
        type="hidden"
        name="source"
        ref={sourceInput}
        defaultValue="direct"
      />
      <input
        type="hidden"
        name="rendered_at"
        ref={renderedAtInput}
        defaultValue=""
      />

      {/* Honeypot: hidden from people and screen readers, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {fatalError ? (
        <p aria-live="polite" className="text-[15px] text-coral">
          Something went wrong. Email me at{" "}
          <a href="mailto:info@mgwebs.com" className="underline">
            info@mgwebs.com
          </a>{" "}
          instead.
        </p>
      ) : null}
      {state.status === "error" && state.errors ? (
        <p aria-live="polite" className="text-[15px] text-coral">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={buttonClasses("primary", "min-h-14 w-full disabled:opacity-70")}
      >
        {pending ? "Sending..." : "Send"}
      </button>
      <p className="text-center text-sm text-muted">
        I’ll only use your email to reply. No spam, ever.
      </p>
    </form>
  );
}
