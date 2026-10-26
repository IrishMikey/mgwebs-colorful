import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-13 items-center justify-center rounded-full px-6.5 text-base leading-none font-medium transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "border border-line-strong bg-white text-ink hover:border-input hover:bg-muted-bg",
};

export const buttonClasses = (variant: Variant = "primary", extra = "") =>
  `${base} ${variants[variant]} ${extra}`.trim();

type ButtonLinkProps = ComponentProps<"a"> & { variant?: Variant };

export default function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, className)} {...props} />;
}
