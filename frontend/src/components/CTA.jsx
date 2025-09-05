import React from 'react'

const CTA = () => (
  <section className="py-10">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-black text-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Ready to take control of your life?</h3>
          <p className="mt-2 text-white/80">Transform habits and finances in 8–12 weeks.</p>
        </div>
        <button className="px-5 py-2.5 rounded-lg bg-white text-black font-medium">Start today</button>
      </div>
    </div>
  </section>
);

export default CTA