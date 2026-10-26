type PlaceholderProps = {
  label: string;
  className?: string;
};

/** Stand-in for an image that hasn't been supplied yet. Never swap in stock photos. */
export default function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-placeholder p-3 text-center text-sm text-muted ${className}`}
    >
      {label}
    </div>
  );
}
