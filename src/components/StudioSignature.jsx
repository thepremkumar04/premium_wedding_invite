export default function StudioSignature() {
  return (
    <section className="relative overflow-hidden bg-warm-ivory px-6 py-20 text-center">

      {/* Divider */}
      <div className="mx-auto mb-12 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-antique-gold/30" />
        <span className="text-antique-gold">❦</span>
        <div className="h-px w-16 bg-antique-gold/30" />
      </div>

      <div className="mx-auto max-w-md">

        {/* Best Wishes */}
        <p className="font-display text-xl italic text-deep-maroon">
          With Best Wishes
        </p>

        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-charcoal/45">
          From
        </p>

        {/* Studio Logo */}
        <div className="mx-auto mt-8 w-52 md:w-60">
  <img
    src="/suresh-studio-logo.png"
    alt="Suresh Studio"
    className="mx-auto h-auto w-full object-contain"
  />
</div>

{/* Studio Name */}
<h3 className="mt-4 font-display text-2xl tracking-[0.12em] text-charcoal">
  SURESH STUDIO
</h3>

<p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-antique-gold">
  The Professional Studio
</p>

        {/* Studio description */}
        <p className="mt-5 font-display text-sm italic text-charcoal/60">
          Photography • Cinematography • Wedding Films
        </p>

        {/* Locations */}
        <p className="mt-7 text-xs uppercase tracking-[0.2em] text-charcoal/60">
          Tirupati • Puttur
        </p>

        {/* Phone */}
        <a
          href="tel:+919866030257"
          className="mt-5 inline-block text-sm text-charcoal"
        >
          +91 98660 30257
        </a>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">

          <a
            href="https://www.instagram.com/sureshstudio7/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-antique-gold/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal transition hover:border-antique-gold hover:bg-antique-gold hover:text-warm-ivory"
          >
            Instagram
          </a>

          <a
            href="https://maps.app.goo.gl/Mjk2ZW5fXAoN8ku89"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-antique-gold/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal transition hover:border-antique-gold hover:bg-antique-gold hover:text-warm-ivory"
          >
            Directions
          </a>

        </div>

        {/* Closing line */}
        <p className="mt-10 font-display text-sm italic text-charcoal/45">
          Capturing moments, creating memories.
        </p>

        <div className="mt-8 text-xl text-antique-gold">
          ❦
        </div>

      </div>
    </section>
  );
}