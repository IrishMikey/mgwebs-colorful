export default function About() {
  return (
    <section aria-labelledby="about-heading" className="section-y">
      <div className="page-x max-w-prose">
        <h2
          id="about-heading"
          className="font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]"
        >
          Hi, I’m Mikey.
        </h2>
        <p className="mt-6 text-lg text-body">
          I’m a professional web developer based in Dublin. By day I build
          websites in financial services. MGWebs is how I bring that same
          standard to small businesses, at a fair, fixed price.
        </p>
        <p className="mt-4 text-lg text-body">
          You deal with me directly, in plain English — no account managers,
          no handing you off to someone else.
        </p>
      </div>
    </section>
  );
}
