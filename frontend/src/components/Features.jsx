import React from 'react'

const Features = () => (
  <section className="py-12 bg-cream">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-lg font-semibold">Everything needed, all in one place.</h2>
      <p className="mt-2 text-neutral-600">Mindset, money, relationships, and purpose in curated tracks.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {[
          { t: "Mindset & Clarity", d: "Tools to reduce stress and build focus." },
          { t: "Money Mastery", d: "Practical frameworks for saving and investing." },
          { t: "Relationships", d: "Communicate better, set boundaries." },
          { t: "Life Design", d: "Systems for goals, habits, and growth." },
        ].map((f) => (
          <div key={f.t} className="rounded-xl border bg-white p-5">
            <div className="h-8 w-8 rounded bg-indigo-600/10 text-indigo-600 grid place-items-center text-sm">◆</div>
            <h3 className="mt-3 font-semibold">{f.t}</h3>
            <p className="mt-1 text-sm text-neutral-600">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features