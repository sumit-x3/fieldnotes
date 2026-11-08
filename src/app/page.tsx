const articles = [
  {
    category: "NEXT.JS",
    title: "Understanding Next.js caching without the confusion",
    description:
      "A practical guide to caching in Next.js — what it is, how it works, and when to use each strategy.",
    date: "NOV 08, 2026",
    read: "8 MIN READ",
  },
  {
    category: "PROJECTS",
    title: "Building a social platform with Next.js and Backblaze B2",
    description:
      "How I built Circles — a minimalist photo sharing platform, the stack I chose, and what I learned.",
    date: "NOV 02, 2026",
    read: "10 MIN READ",
  },
  {
    category: "REFLECTIONS",
    title: "Building things is easy. Finishing them is another story.",
    description:
      "Thoughts on motivation, focus, and the discipline it takes to actually ship projects.",
    date: "OCT 28, 2026",
    read: "5 MIN READ",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#20201e]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Navigation */}
        <header className="flex h-20 items-center justify-between border-b border-[#d8d4cc]">
          <a
            href="/"
            className="font-serif text-3xl font-semibold tracking-tight"
          >
            fieldnotes<span className="text-[#c34b28]">.</span>
          </a>

          <nav className="flex items-center gap-8 text-sm">
            <a href="#writing" className="hover:text-[#c34b28]">
              Writing
            </a>
            <a href="#notes" className="hover:text-[#c34b28]">
              Notes
            </a>
            <a href="#about" className="hover:text-[#c34b28]">
              About
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid min-h-[500px] items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-[#c34b28]">
              — A developer's journal
            </p>

            <h1 className="max-w-xl font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl">
              Notes from the process of figuring things out
              <span className="text-[#c34b28]">.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#73716c]">
              On software, the web, tools, and the occasional life lesson. A
              space to learn in public, document the messy parts, and share what
              works.
            </p>

            <a
              href="#writing"
              className="mt-9 inline-flex items-center gap-4 bg-[#c34b28] px-6 py-4 text-sm text-white transition hover:bg-[#a63b1d]"
            >
              Start reading <span aria-hidden>→</span>
            </a>
          </div>

          {/* Handcrafted visual instead of generic gradients */}
          <div className="relative hidden h-[380px] items-center justify-center md:flex">
            <div className="absolute right-10 top-10 h-56 w-56 rounded-full border border-[#ded9cf]" />
            <div className="absolute bottom-12 left-8 h-64 w-64 rounded-full border border-[#ded9cf]" />

            <div className="relative rotate-[-5deg] border border-[#d8d4cc] bg-[#eeebe4] p-8 shadow-[8px_8px_0_#e1ddd4]">
              <p className="font-serif text-3xl italic">Keep making.</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#c34b28]">
                Even when it's messy.
              </p>
              <div className="mt-8 h-px w-40 bg-[#d8d4cc]" />
              <p className="mt-4 text-xs text-[#73716c]">FIELDNOTE Nº 001</p>
            </div>

            <span className="absolute bottom-8 right-10 font-serif text-6xl text-[#c34b28]">
              ✳
            </span>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="border-t border-[#d8d4cc] py-10">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Latest writing
            </h2>
            <a href="#archive" className="text-sm text-[#c34b28]">
              View all →
            </a>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className={`py-6 md:px-7 ${
                  index !== 0 ? "border-t md:border-l md:border-t-0" : ""
                } border-[#d8d4cc] md:first:pl-0 md:last:pr-0`}
              >
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#c34b28]">
                  / {article.category}
                </p>

                <h3 className="font-serif text-2xl leading-snug">
                  <a href="#" className="transition hover:text-[#c34b28]">
                    {article.title}
                  </a>
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#73716c]">
                  {article.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-[10px] tracking-[0.15em] text-[#73716c]">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.read}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="grid gap-6 border-t border-[#d8d4cc] py-16 md:grid-cols-[1fr_2fr]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#c34b28]">
            A little about this place
          </p>

          <div>
            <h2 className="font-serif text-3xl leading-snug md:text-4xl">
              Made by a developer who is still figuring things out.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#73716c]">
              I'm Sumit. I build things for the web, break them, fix them, and
              occasionally write about the experience. This is where those notes
              live.
            </p>
            <a
              href="https://sumitsingh.space"
              className="mt-6 inline-block text-sm text-[#c34b28]"
            >
              My portfolio ↗
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#d8d4cc] py-8 text-xs text-[#73716c]">
          <p>© 2026 Sumit Singh</p>
          <p>Made slowly, with intention.</p>
          <a href="#top" className="hover:text-[#c34b28]">
            Back to top ↑
          </a>
        </footer>
      </div>
    </main>
  );
}
