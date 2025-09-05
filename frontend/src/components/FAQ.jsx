import React from 'react'

const FAQ = () => (
  <section className="py-12">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold">Questions, answered.</h2>
      <div className="mt-6 divide-y rounded-xl border overflow-hidden">
        {[
          { q: "What is the pedagogy of these courses?", a: "Actionable lessons, worksheets, and weekly prompts." },
          { q: "Who are these for?", a: "Students, professionals, and creators seeking structured growth." },
          { q: "Can content be accessed offline?", a: "Download PDFs and notes for offline review." },
          { q: "Refund policy?", a: "7‑day full refund, no questions asked." },
        ].map((item) => (
          <details key={item.q} className="group open:bg-cream">
            <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
              <span className="font-medium">{item.q}</span>
              <span className="transition group-open:rotate-45">＋</span>
            </summary>
            <div className="px-5 pb-5 pt-0 text-neutral-600">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);
export default FAQ